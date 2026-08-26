/* ============================================================
   GENETRIX · gxdoc.js
   Branded .docx builder on top of docx-js.
   Encodes the Genetrix brand so a document only has to describe
   its content: the red dot, the Montserrat weights, the base-8
   rhythm, the normed footer and the red rule are handled here.

   Usage:
     const G = require('./gxdoc');
     G.build({ file, meta, cover, blocks }).then(...)
   See references/docx.md and examples/ for full recipes.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const d = require('docx');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, AlignmentType, VerticalAlign,
  Header, Footer, PageNumber, PageBreak, HeadingLevel, TableOfContents,
  convertMillimetersToTwip, Tab, TabStopType, TabStopPosition,
} = d;

/* ---------- Brand constants ---------- */
const C = {
  red: 'D00000', redHover: 'B80000', redSoft: 'F7E9EB', red50: 'FBE6E6',
  noir: '141414', gris: '5A5A5A', grisClr: 'F0F0F0', blanc: 'FFFFFF',
  line: 'E7E7E7', lineSoft: 'F1F1F1',
};
const F = { light: 'Montserrat Light', semi: 'Montserrat SemiBold', black: 'Montserrat Black' };
// Print type scale (pt). Screen scale 56/44/33/25/20/16/13 mapped to A4.
const S = { display: 34, h1: 23, h2: 17, h3: 13, subtitle: 11.5, body: 10.5, small: 9, legend: 8 };
const hp = pt => Math.round(pt * 2);          // half-points
const mm = n => convertMillimetersToTwip(n);
const A4 = { w: 11906, h: 16838 };            // dxa

const NONE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
const noBorders = { top: NONE, bottom: NONE, left: NONE, right: NONE,
  insideHorizontal: NONE, insideVertical: NONE };

/* ---------- Text helpers ---------- */

/* The signature red dot: a terminal "." set in red. Applied to titles
   and to the cover statement, never mid-sentence, one per phrase. */
function redDot(text, { size, font, color }) {
  const base = { font, size: hp(size), color };
  if (typeof text === 'string' && /[.]$/.test(text) && text.length > 1) {
    return [
      new TextRun({ ...base, text: text.slice(0, -1) }),
      new TextRun({ ...base, text: '.', color: C.red }),
    ];
  }
  return [new TextRun({ ...base, text })];
}

/* Inline emphasis without fake bold: **mot** switches to the SemiBold
   cut of Montserrat, which is how the brand carries weight. */
function runs(text, opts = {}) {
  const { size = S.body, font = F.light, color = C.noir, strongFont = F.semi } = opts;
  if (Array.isArray(text)) return text;
  if (typeof text !== 'string') return [text];
  const out = [];
  text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).forEach(part => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    out.push(new TextRun({
      text: m ? m[1] : part,
      font: m ? strongFont : font,
      size: hp(size), color,
    }));
  });
  return out;
}

/* ---------- Blocks ---------- */

const sp = (before = 0, after = 0) => ({ before: mm(before), after: mm(after) });

function h1(text, opts = {}) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: mm(10), after: mm(4) },
    children: redDot(text, { size: S.h1, font: F.black, color: opts.color || C.noir }),
    ...(opts.pageBreakBefore ? { pageBreakBefore: true } : {}),
  });
}
function h2(text, opts = {}) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: mm(7), after: mm(2.5) },
    children: redDot(text, { size: S.h2, font: F.black, color: opts.color || C.noir }),
  });
}
function h3(text, opts = {}) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: mm(5), after: mm(2) },
    children: redDot(text, { size: S.h3, font: F.semi, color: opts.color || C.noir }),
  });
}

/* Uppercase wide-tracked overline, optionally numbered ("01 · CONTEXTE"). */
function eyebrow(text, opts = {}) {
  const label = (opts.number ? `${opts.number} · ` : '') + String(text).toUpperCase();
  return new Paragraph({
    spacing: { before: mm(opts.before ?? 6), after: mm(1.5) },
    children: [new TextRun({
      text: label, font: F.semi, size: hp(S.legend),
      color: opts.color || C.gris, characterSpacing: 60,
    })],
  });
}

/* A newline has no meaning inside a Word run — the text simply runs on.
   `\n` therefore splits into separate paragraphs, tightly spaced, which is
   what an address block or a signature actually wants. */
function p(text, opts = {}) {
  const make = (t, first, last) => new Paragraph({
    spacing: {
      before: mm(first ? (opts.before ?? 0) : 0),
      after: mm(last ? (opts.after ?? 3) : 0.6),
      line: opts.line || 336,
    },
    alignment: opts.align === 'right' ? AlignmentType.RIGHT
      : opts.align === 'center' ? AlignmentType.CENTER : opts.align,
    children: runs(t, { size: opts.size || S.body, font: opts.font || F.light, color: opts.color || C.noir }),
  });
  if (typeof text === 'string' && text.includes('\n')) {
    const parts = text.split('\n');
    return parts.map((t, i) => make(t, i === 0, i === parts.length - 1));
  }
  return make(text, true, true);
}

/* Lead paragraph under a title: SemiBold, slightly larger, muted. */
function lead(text, opts = {}) {
  return p(text, { size: S.subtitle, font: F.semi, color: opts.color || C.gris, after: 5, ...opts });
}

function legend(text, opts = {}) {
  return new Paragraph({
    spacing: { before: mm(1), after: mm(3) },
    children: [new TextRun({ text, font: F.light, size: hp(S.legend), color: opts.color || C.gris })],
  });
}

function bullets(items, opts = {}) {
  return items.map(t => new Paragraph({
    numbering: { reference: opts.numbered ? 'gx-num' : 'gx-bul', level: 0 },
    spacing: { after: mm(1.6), line: 320 },
    children: runs(t, { size: opts.size || S.body, color: opts.color || C.noir }),
  }));
}
const numbered = (items, opts = {}) => bullets(items, { ...opts, numbered: true });

/* Key figure, "le chiffre d'abord": the number large and red, the
   context small and grey. Several in a row read as a proof band. */
function stats(list, opts = {}) {
  const onDark = opts.onDark;
  const cells = list.map(s => new TableCell({
    width: { size: Math.floor(9000 / list.length), type: WidthType.DXA },
    margins: { top: mm(2), bottom: mm(2), left: 0, right: mm(4) },
    borders: noBorders,
    children: [
      new Paragraph({
        spacing: { after: 0, line: 240 },
        children: [
          s.prefix ? new TextRun({ text: s.prefix, font: F.black, size: hp(20), color: C.red }) : null,
          new TextRun({ text: String(s.value), font: F.black, size: hp(28), color: C.red }),
          s.suffix ? new TextRun({ text: s.suffix, font: F.black, size: hp(18), color: C.red }) : null,
        ].filter(Boolean),
      }),
      new Paragraph({
        spacing: { before: mm(1), after: 0, line: 260 },
        children: [new TextRun({ text: s.label, font: F.light, size: hp(S.small), color: onDark ? 'CFCFCF' : C.gris })],
      }),
    ],
  }));
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    columnWidths: list.map(() => Math.floor(9000 / list.length)),
    borders: noBorders,
    rows: [new TableRow({ children: cells })],
  });
}

/* Signature card: hairline box with a 4pt red rule. `side: 'top'`
   matches the pillar cards, `side: 'left'` matches the email signature. */
function callout(content, opts = {}) {
  const items = Array.isArray(content) ? content : [content];
  const accent = opts.color || C.red;
  const side = opts.side || 'top';
  const children = [];
  if (opts.title) children.push(new Paragraph({
    spacing: { after: mm(1.5) },
    children: [new TextRun({ text: String(opts.title).toUpperCase(), font: F.semi, size: hp(S.legend), color: C.gris, characterSpacing: 40 })],
  }));
  items.forEach((t, i) => children.push(new Paragraph({
    spacing: { after: i === items.length - 1 ? 0 : mm(2), line: 320 },
    children: runs(t, { size: opts.size || S.body }),
  })));
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    columnWidths: [9000],
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: 9000, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: opts.fill || C.grisClr, color: 'auto' },
        margins: { top: mm(3.5), bottom: mm(3.5), left: mm(4), right: mm(4) },
        borders: {
          top: { style: BorderStyle.SINGLE, size: side === 'top' ? 24 : 4, color: side === 'top' ? accent : C.line },
          left: { style: BorderStyle.SINGLE, size: side === 'left' ? 24 : 4, color: side === 'left' ? accent : C.line },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: C.line },
          right: { style: BorderStyle.SINGLE, size: 4, color: C.line },
        },
        children,
      })],
    })],
  });
}

/* Table: hairline grid, noir header row on light grey, no vertical
   rules. Widths are relative weights, normalised to the text column. */
function table({ head, rows, widths, total = 9000, align = [], accentCol, totalRow = false }) {
  const n = (head || rows[0]).length;
  const w = widths || Array(n).fill(1);
  const sum = w.reduce((a, b) => a + b, 0);
  const cols = w.map(x => Math.floor((x / sum) * total));
  const cell = (text, { header, i, isTotal }) => new TableCell({
    width: { size: cols[i], type: WidthType.DXA },
    shading: header ? { type: ShadingType.CLEAR, fill: C.grisClr, color: 'auto' } : undefined,
    margins: { top: mm(2), bottom: mm(2), left: mm(2.5), right: mm(2.5) },
    borders: {
      left: NONE, right: NONE,
      top: isTotal ? { style: BorderStyle.SINGLE, size: 8, color: C.noir } : NONE,
      bottom: { style: BorderStyle.SINGLE, size: header ? 8 : 4, color: header ? C.noir : C.line },
    },
    verticalAlign: VerticalAlign.CENTER,
    children: (typeof text === 'string' ? text.split('\n') : [text]).map((line, li, arr) => new Paragraph({
      spacing: { after: li === arr.length - 1 ? 0 : 20, line: 280 },
      alignment: align[i] === 'right' ? AlignmentType.RIGHT : align[i] === 'center' ? AlignmentType.CENTER : undefined,
      children: runs(line, {
        size: header ? S.legend : S.small,
        font: header ? F.semi : isTotal ? F.semi : F.light,
        // Red marks the figure that matters, not a whole column of numbers:
        // accentCol is for the one column the reader is meant to land on.
        color: !header && accentCol === i ? C.red : C.noir,
        strongFont: F.semi,
      }),
    })),
  });
  const trs = [];
  if (head) trs.push(new TableRow({
    tableHeader: true,
    children: head.map((t, i) => cell(t, { header: true, i })),
  }));
  rows.forEach((r, ri) => trs.push(new TableRow({
    children: r.map((t, i) => cell(t, { i, isTotal: totalRow && ri === rows.length - 1 })),
  })));
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: cols, borders: noBorders, rows: trs });
}

/* Two-column metadata block (Client / Référence / Date). */
function kv(pairs, opts = {}) {
  return table({
    rows: pairs.map(([k, v]) => [`**${k}**`, v]),
    widths: [1, 2.2], total: opts.total || 9000,
  });
}

function quote(text, source) {
  const children = [new Paragraph({
    spacing: { after: source ? mm(2) : 0, line: 300 },
    children: [new TextRun({ text: `« ${text} »`, font: F.semi, size: hp(S.subtitle), color: C.noir })],
  })];
  if (source) children.push(new Paragraph({
    children: [new TextRun({ text: String(source).toUpperCase(), font: F.semi, size: hp(S.legend), color: C.gris, characterSpacing: 50 })],
  }));
  return new Table({
    width: { size: 9000, type: WidthType.DXA }, columnWidths: [9000], borders: noBorders,
    rows: [new TableRow({ children: [new TableCell({
      width: { size: 9000, type: WidthType.DXA }, borders: { ...noBorders, left: { style: BorderStyle.SINGLE, size: 24, color: C.red } },
      margins: { top: mm(2), bottom: mm(2), left: mm(5), right: 0 }, children,
    })] })],
  });
}

const divider = (opts = {}) => new Paragraph({
  spacing: { before: mm(opts.before ?? 5), after: mm(opts.after ?? 5) },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: opts.color || C.line, space: 1 } },
  children: [new TextRun({ text: '', size: 2 })],
});

const pageBreak = () => new Paragraph({ children: [new PageBreak()] });
const spacer = (m = 4) => new Paragraph({ spacing: { after: mm(m) }, children: [new TextRun({ text: '', size: 2 })] });

function image(file, { width = 150, height, align = 'left' } = {}) {
  const buf = fs.readFileSync(file);
  const ext = path.extname(file).slice(1).toLowerCase();
  let w = width, h = height;
  if (!h) { // read PNG/JPEG intrinsic ratio to avoid distortion
    const r = intrinsic(buf, ext);
    h = r ? Math.round(width * (r.h / r.w)) : Math.round(width * 0.4);
  }
  return new Paragraph({
    alignment: align === 'center' ? AlignmentType.CENTER : align === 'right' ? AlignmentType.RIGHT : undefined,
    spacing: { after: mm(3) },
    children: [new ImageRun({ data: buf, type: ext === 'jpg' ? 'jpg' : ext, transformation: { width: w, height: h } })],
  });
}
function intrinsic(buf, ext) {
  try {
    if (ext === 'png') return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
    if (ext === 'jpg' || ext === 'jpeg') {
      let o = 2;
      while (o < buf.length) {
        if (buf[o] !== 0xFF) { o++; continue; }
        const m = buf[o + 1];
        if (m >= 0xC0 && m <= 0xCF && ![0xC4, 0xC8, 0xCC].includes(m)) return { h: buf.readUInt16BE(o + 5), w: buf.readUInt16BE(o + 7) };
        o += 2 + buf.readUInt16BE(o + 2);
      }
    }
  } catch (e) { /* fall through */ }
  return null;
}

/* Sommaire.
   `sommaire(['Contexte','Enjeux',...])` writes the list itself, numbered in
   red, so the page is correct the moment the file is produced. A Word field
   TOC (`{ field: true }`) shows up blank until someone presses F9 or accepts
   Word's "update fields" prompt, and blank is worse than page-number-less. */
function sommaire(items, opts = {}) {
  const out = [h2(opts.label || 'Sommaire.')];
  if (opts.field) {
    out.push(new TableOfContents('Sommaire', { hyperlink: true, headingStyleRange: '1-3' }));
  } else {
    items.forEach((it, i) => {
      const [label, page] = Array.isArray(it) ? it : [it, null];
      out.push(new Paragraph({
        spacing: { after: mm(2.5), line: 280 },
        tabStops: page ? RIGHT_TAB : undefined,
        children: [
          new TextRun({ text: String(opts.start ? opts.start + i : i + 1).padStart(2, '0') + '   ', font: F.black, size: hp(S.body), color: C.red }),
          new TextRun({ text: label, font: F.semi, size: hp(S.body), color: C.noir }),
          ...(page ? [tab(), new TextRun({ text: String(page), font: F.light, size: hp(S.small), color: C.gris })] : []),
        ],
      }));
    });
  }
  if (opts.pageBreak !== false) out.push(pageBreak());
  return out;
}

/* ---------- Cover ---------- */
/* A noir cover is built as one full-bleed shaded cell in a zero-margin
   section: Word has no per-section page colour, and this is the only
   way that survives a round-trip through Word and LibreOffice. */
function coverSection(meta, opts = {}) {
  const logo = opts.logo || path.join(__dirname, '..', 'assets', 'logos', 'logo-wordmark-blanc.png');
  const dark = opts.tone !== 'light';
  const fg = dark ? C.blanc : C.noir;
  const muted = dark ? 'B9B9B9' : C.gris;
  const inner = [];

  if (fs.existsSync(logo)) {
    const buf = fs.readFileSync(logo);
    const r = intrinsic(buf, 'png');
    const w = 130, h = r ? Math.round(w * (r.h / r.w)) : 34;
    inner.push(new Paragraph({ spacing: { after: mm(14) }, children: [new ImageRun({ data: buf, type: 'png', transformation: { width: w, height: h } })] }));
  }
  if (meta.eyebrow) inner.push(new Paragraph({
    spacing: { after: mm(6) },
    children: [new TextRun({ text: String(meta.eyebrow).toUpperCase(), font: F.semi, size: hp(S.legend), color: muted, characterSpacing: 90 })],
  }));
  const titleSize = meta.titleSize || S.display;
  inner.push(new Paragraph({
    // Display type is set tight (1.02) but never tighter than the glyphs:
    // line spacing has to be derived from the point size, not fixed.
    spacing: { after: mm(5), line: Math.round(titleSize * 20 * 1.02) },
    children: redDot(meta.title, { size: titleSize, font: F.black, color: fg }),
  }));
  if (meta.subtitle) inner.push(new Paragraph({
    spacing: { after: mm(10), line: 320 },
    children: [new TextRun({ text: meta.subtitle, font: F.light, size: hp(13), color: dark ? 'D9D9D9' : C.gris })],
  }));
  inner.push(new Paragraph({
    spacing: { after: mm(8) },
    border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: C.red, space: 1 } },
    children: [new TextRun({ text: '', size: 2 })],
  }));
  const meta_lines = [];
  if (meta.client) meta_lines.push(['Client', meta.client]);
  if (meta.ref) meta_lines.push(['Référence', meta.ref]);
  if (meta.date) meta_lines.push(['Date', meta.date]);
  if (meta.author) meta_lines.push(['Émetteur', meta.author]);
  meta_lines.forEach(([k, v]) => inner.push(new Paragraph({
    spacing: { after: mm(1.5) },
    children: [
      new TextRun({ text: `${k}  `, font: F.semi, size: hp(S.small), color: muted }),
      new TextRun({ text: v, font: F.light, size: hp(S.small), color: fg }),
    ],
  })));

  const page = new Table({
    width: { size: A4.w, type: WidthType.DXA },
    columnWidths: [A4.w],
    borders: noBorders,
    rows: [new TableRow({
      height: { value: A4.h, rule: 'exact' },
      children: [new TableCell({
        width: { size: A4.w, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: dark ? C.noir : C.blanc, color: 'auto' },
        margins: { top: mm(30), bottom: mm(24), left: mm(24), right: mm(24) },
        borders: noBorders,
        verticalAlign: VerticalAlign.CENTER,
        children: inner,
      })],
    })],
  });

  return {
    properties: { page: { size: { width: A4.w, height: A4.h }, margin: { top: 0, bottom: 0, left: 0, right: 0, header: 0, footer: 0 } } },
    children: [page],
  };
}

/* ---------- Header / footer ---------- */
const FOOT = 'GENETRIX  ·  Consulting · Training · Coaching · Technology';
/* A right tab stop at the text-column edge. PositionalTab renders only in
   Word; an explicit tab stop is honoured by Word, LibreOffice and the PDF
   pipeline alike, so header and footer stay aligned wherever they are opened. */
const RIGHT_TAB = [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }];
const tab = () => new TextRun({ children: [new Tab()] });

function header(meta) {
  if (meta.header === false) return new Header({ children: [] });
  return new Header({ children: [new Paragraph({
    spacing: { after: mm(3) },
    tabStops: RIGHT_TAB,
    border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: C.red, space: 4 } },
    children: [
      new TextRun({ text: meta.headerLeft || meta.title || '', font: F.semi, size: hp(S.legend), color: C.gris, characterSpacing: 30 }),
      tab(),
      new TextRun({ text: meta.headerRight || meta.client || '', font: F.light, size: hp(S.legend), color: C.gris }),
    ],
  })] });
}

function footer(meta) {
  return new Footer({ children: [new Paragraph({
    spacing: { before: mm(2) },
    tabStops: RIGHT_TAB,
    border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.line, space: 4 } },
    children: [
      new TextRun({ text: meta.footer || FOOT, font: F.light, size: hp(S.legend), color: C.gris }),
      tab(),
      new TextRun({ text: 'Page ', font: F.light, size: hp(S.legend), color: C.gris }),
      new TextRun({ children: [PageNumber.CURRENT], font: F.semi, size: hp(S.legend), color: C.noir }),
      new TextRun({ text: ' / ', font: F.light, size: hp(S.legend), color: C.gris }),
      new TextRun({ children: [PageNumber.TOTAL_PAGES], font: F.light, size: hp(S.legend), color: C.gris }),
    ],
  })] });
}

/* ---------- Document ---------- */
const numbering = {
  config: [
    { reference: 'gx-bul', levels: [{ level: 0, format: 'bullet', text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: mm(6), hanging: mm(4) } }, run: { color: C.red, font: F.black } } }] },
    { reference: 'gx-num', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: mm(7), hanging: mm(7) } }, run: { color: C.red, font: F.semi } } }] },
  ],
};

const styles = {
  default: {
    document: { run: { font: F.light, size: hp(S.body), color: C.noir } },
    heading1: { run: { font: F.black, size: hp(S.h1), color: C.noir }, paragraph: { spacing: { before: mm(10), after: mm(4) } } },
    heading2: { run: { font: F.black, size: hp(S.h2), color: C.noir }, paragraph: { spacing: { before: mm(7), after: mm(2.5) } } },
    heading3: { run: { font: F.semi, size: hp(S.h3), color: C.noir }, paragraph: { spacing: { before: mm(5), after: mm(2) } } },
  },
};

/* Word ignores paragraph spacing around tables, and two adjacent tables
   silently merge into one. Every block built on a table (stats, callout,
   quote, table, kv) therefore gets a thin spacer paragraph on each side —
   done here so the helpers stay composable and nobody has to remember it. */
function breathe(list) {
  const out = [];
  list.forEach(b => {
    const isTable = b instanceof Table;
    const prev = out[out.length - 1];
    if (isTable && prev && !(prev instanceof Paragraph && prev.__gxSpacer)) out.push(mark(spacer(2.5)));
    out.push(b);
    if (isTable) out.push(mark(spacer(3)));
  });
  return out;
}
const mark = par => { par.__gxSpacer = true; return par; };

function build({ file, meta = {}, cover = 'dark', blocks = [], margins }) {
  const m = margins || { top: mm(24), bottom: mm(20), left: mm(24), right: mm(24), header: mm(12), footer: mm(10) };
  const sections = [];
  if (cover) sections.push(coverSection(meta, { tone: cover, logo: meta.coverLogo }));
  sections.push({
    properties: { page: { size: { width: A4.w, height: A4.h }, margin: m }, ...(cover ? { pageNumberStart: 1 } : {}) },
    headers: { default: header(meta) },
    footers: { default: footer(meta) },
    children: breathe(blocks.flat(Infinity).filter(Boolean)),
  });
  const doc = new Document({
    creator: 'Genetrix', title: meta.title || '', description: meta.subtitle || '',
    features: { updateFields: true },
    styles, numbering, sections,
  });
  return Packer.toBuffer(doc).then(buf => { fs.writeFileSync(file, buf); return file; });
}

module.exports = {
  build, C, F, S, mm, hp,
  h1, h2, h3, eyebrow, p, lead, legend, bullets, numbered, stats, callout,
  table, kv, quote, divider, pageBreak, spacer, image, sommaire, runs, redDot,
  docx: d,
};
