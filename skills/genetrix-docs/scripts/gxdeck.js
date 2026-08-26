/* ============================================================
   GENETRIX · gxdeck.js
   Branded .pptx builder on top of pptxgenjs. 16:9, 13.33 × 7.5 in.
   Same brand kernel as gxdoc.js: Montserrat in three cuts, red as an
   accent only, the terminal red dot, base-8 rhythm scaled to the slide.

     const D = require('./gxdeck');
     const deck = D.deck();
     D.title(deck, {...}); D.content(deck, {...});
     await D.save(deck, 'out.pptx');
   See references/pptx.md for the slide catalogue.
   ============================================================ */
const path = require('path');
const fs = require('fs');
const Pptx = require('pptxgenjs');

const C = { red: 'D00000', noir: '141414', gris: '5A5A5A', grisClr: 'F0F0F0',
  blanc: 'FFFFFF', line: 'E7E7E7', rose: 'F7E9EB' };
const F = { light: 'Montserrat Light', semi: 'Montserrat SemiBold', black: 'Montserrat Black' };
const W = 13.333, H = 7.5, PAD = 0.92;         // inches
const COL = W - 2 * PAD;                        // usable width
const LOGOS = path.join(__dirname, '..', 'assets', 'logos');

function deck({ subject = 'Genetrix', author = 'Genetrix', title = '' } = {}) {
  const p = new Pptx();
  // pptxgenjs' built-in LAYOUT_16x9 is 10 × 5.625 in. Everything here is
  // positioned in the 13.333 × 7.5 in canvas PowerPoint actually uses for
  // widescreen, so declare that layout explicitly or every x lands short.
  p.defineLayout({ name: 'GX_WIDE', width: W, height: H });
  p.layout = 'GX_WIDE';
  p.author = author; p.company = 'Genetrix'; p.subject = subject; p.title = title;
  p.__n = 0;
  return p;
}

/* Terminal red dot as a text-run array, so the period lands in red
   without a second text box to align. */
function dot(text, opts = {}) {
  const base = { fontFace: opts.fontFace || F.black, fontSize: opts.fontSize, color: opts.color || C.noir,
    bold: false, charSpacing: opts.charSpacing };
  if (typeof text === 'string' && /[.]$/.test(text) && text.length > 1) {
    return [{ text: text.slice(0, -1), options: base },
      { text: '.', options: { ...base, color: opts.dotColor || C.red } }];
  }
  return [{ text, options: base }];
}

/* The G monogram as a very low-opacity watermark on dark surfaces —
   6 to 10% per the brand doc, never more, it must not compete with type. */
function watermark(s, { transparency = 93, side = 'right' } = {}) {
  // The monogram alone, never the full lockup: a watermark carrying the red
  // block would read as a second logo competing with the real one.
  const f = path.join(LOGOS, 'symbole-blanc.png');
  if (!fs.existsSync(f)) return;
  const size = 8.6;
  s.addImage({ path: f, x: side === 'right' ? W - size * 0.62 : -size * 0.38,
    y: (H - size) / 2, w: size, h: size, transparency });
}

function foot(s, n, dark) {
  s.addText(`GENETRIX · ${String(n).padStart(2, '0')}`, {
    x: PAD, y: H - 0.72, w: 4, h: 0.3, fontFace: F.semi, fontSize: 9,
    color: dark ? '8A8A8A' : C.gris, charSpacing: 2,
  });
}

function eyebrowBox(s, text, { y, dark, number }) {
  s.addText((number ? `${number} · ` : '') + String(text).toUpperCase(), {
    x: PAD, y, w: COL, h: 0.3, fontFace: F.semi, fontSize: 11,
    color: dark ? 'B9B9B9' : C.gris, charSpacing: 5,
  });
}

/* ---------- Slide types ---------- */

/* Cover. Noir by default: the brand's title slide is dark, one message. */
function title(p, { eyebrow, title: t, subtitle, meta, tone = 'dark' } = {}) {
  const dark = tone !== 'light';
  const s = p.addSlide();
  s.background = { color: dark ? C.noir : C.blanc };
  if (dark) watermark(s);
  const logo = path.join(LOGOS, dark ? 'logo-wordmark-blanc.png' : 'logo-wordmark-noir.png');
  if (fs.existsSync(logo)) s.addImage({ path: logo, x: PAD, y: 0.85, h: 0.42, w: 1.27 });
  let y = 2.1;
  if (eyebrow) { eyebrowBox(s, eyebrow, { y, dark }); y += 0.5; }
  s.addText(dot(t, { fontSize: 40, color: dark ? C.blanc : C.noir }), {
    x: PAD, y, w: COL * 0.86, h: 1.9, valign: 'top', lineSpacingMultiple: 0.98,
  });
  y += 1.95;
  if (subtitle) s.addText(subtitle, { x: PAD, y, w: COL * 0.62, h: 0.8,
    fontFace: F.light, fontSize: 16, color: dark ? 'D9D9D9' : C.gris, lineSpacingMultiple: 1.3 });
  if (meta) s.addText(meta, { x: PAD, y: H - 1.3, w: COL, h: 0.3,
    fontFace: F.semi, fontSize: 10, color: dark ? '8A8A8A' : C.gris, charSpacing: 3 });
  p.__n++;
  return s;
}

/* Section divider: the big red number the brand uses to chapter a deck. */
function section(p, { number, title: t, note } = {}) {
  const s = p.addSlide();
  s.background = { color: C.blanc };
  s.addText(String(number).padStart(2, '0'), { x: PAD, y: 1.5, w: 4, h: 1.5,
    fontFace: F.black, fontSize: 72, color: C.red, charSpacing: -2 });
  s.addText(dot(t, { fontSize: 32 }), { x: PAD, y: 3.05, w: COL * 0.72, h: 1.4, valign: 'top', lineSpacingMultiple: 1.05 });
  if (note) s.addText(note, { x: PAD, y: 4.4, w: COL * 0.6, h: 0.8,
    fontFace: F.light, fontSize: 14, color: C.gris, lineSpacingMultiple: 1.4 });
  foot(s, ++p.__n);
  return s;
}

/* Content slide: title plus bullets, or bullets in two columns. */
function content(p, { eyebrow, title: t, bullets = [], columns = 1, note, tone = 'light' } = {}) {
  const dark = tone === 'dark';
  const s = p.addSlide();
  s.background = { color: dark ? C.noir : C.blanc };
  if (dark) watermark(s);
  let y = PAD - 0.2;
  if (eyebrow) { eyebrowBox(s, eyebrow, { y, dark }); y += 0.45; }
  s.addText(dot(t, { fontSize: 28, color: dark ? C.blanc : C.noir }), {
    x: PAD, y, w: COL * 0.85, h: 0.9, valign: 'top', lineSpacingMultiple: 1.05 });
  y += 1.15;
  const items = bullets.map(b => ({
    text: typeof b === 'string' ? b : b.text,
    options: { fontFace: F.light, fontSize: 15, color: dark ? 'E4E4E4' : C.noir,
      bullet: { code: '2022', indent: 18 }, paraSpaceAfter: 10, lineSpacingMultiple: 1.35 },
  }));
  if (columns === 2) {
    const half = Math.ceil(items.length / 2);
    s.addText(items.slice(0, half), { x: PAD, y, w: COL / 2 - 0.3, h: H - y - 1.1, valign: 'top' });
    s.addText(items.slice(half), { x: PAD + COL / 2 + 0.1, y, w: COL / 2 - 0.3, h: H - y - 1.1, valign: 'top' });
  } else {
    s.addText(items, { x: PAD, y, w: COL * 0.88, h: H - y - 1.1, valign: 'top' });
  }
  if (note) s.addText(note, { x: PAD, y: H - 1.15, w: COL, h: 0.3,
    fontFace: F.light, fontSize: 10, color: C.gris });
  foot(s, ++p.__n, dark);
  return s;
}

/* Proof slide: "le chiffre d'abord". Two to four figures, red, large. */
function stats(p, { eyebrow = 'Résultats mesurés', title: t, figures = [], note, tone = 'dark' } = {}) {
  const dark = tone !== 'light';
  const s = p.addSlide();
  s.background = { color: dark ? C.noir : C.blanc };
  if (dark) watermark(s);
  let y = 1.15;
  if (eyebrow) { eyebrowBox(s, eyebrow, { y, dark }); y += 0.55; }
  if (t) { s.addText(dot(t, { fontSize: 28, color: dark ? C.blanc : C.noir }),
    { x: PAD, y, w: COL * 0.8, h: 0.8, valign: 'top' }); y += 1.0; }
  const n = Math.max(figures.length, 1);
  const cw = COL / n;
  // The figure has to stay on one line: four figures, or a long one like
  // "4,2 h", need a smaller cut than a lone "+98 %" does.
  const longest = Math.max(...figures.map(f => `${f.prefix || ''}${f.value}${f.suffix || ''}`.length), 1);
  const base = n <= 2 ? 54 : n === 3 ? 44 : 34;
  const big = Math.round(Math.min(base, base * (7 / Math.max(longest, 5))));
  figures.forEach((f, i) => {
    const x = PAD + i * cw;
    s.addText([
      f.prefix ? { text: f.prefix, options: { fontFace: F.black, fontSize: Math.round(big * 0.66), color: C.red } } : null,
      { text: String(f.value), options: { fontFace: F.black, fontSize: big, color: C.red } },
      f.suffix ? { text: f.suffix, options: { fontFace: F.black, fontSize: Math.round(big * 0.58), color: C.red } } : null,
    ].filter(Boolean), { x, y: y + 0.35, w: cw - 0.2, h: 1.0, valign: 'bottom' });
    s.addText(f.label, { x, y: y + 1.45, w: cw - 0.4, h: 0.7,
      fontFace: F.light, fontSize: 12, color: dark ? 'CFCFCF' : C.gris, lineSpacingMultiple: 1.25, valign: 'top' });
  });
  if (note) s.addText(note, { x: PAD, y: y + 2.4, w: COL * 0.75, h: 0.6,
    fontFace: F.light, fontSize: 13, color: dark ? 'CFCFCF' : C.gris, lineSpacingMultiple: 1.4 });
  foot(s, ++p.__n, dark);
  return s;
}

/* Two cards side by side: the "sans cadre / avec Genetrix" figure.
   The right card carries the red top rule, the left a grey one. */
function comparison(p, { eyebrow, number, title: t, left, right } = {}) {
  const s = p.addSlide();
  s.background = { color: C.blanc };
  let y = PAD - 0.2;
  if (eyebrow) { eyebrowBox(s, eyebrow, { y, number }); y += 0.45; }
  s.addText(dot(t, { fontSize: 28 }), { x: PAD, y, w: COL * 0.85, h: 0.8, valign: 'top' });
  y += 1.05;
  const cw = (COL - 0.32) / 2, ch = H - y - 1.15;
  [[left, C.gris, C.blanc, PAD], [right, C.red, C.grisClr, PAD + cw + 0.32]].forEach(([card, accent, fill, x]) => {
    if (!card) return;
    s.addShape('rect', { x, y, w: cw, h: ch, fill: { color: fill }, line: { color: C.line, width: 1 } });
    s.addShape('rect', { x, y, w: cw, h: 0.055, fill: { color: accent }, line: { color: accent, width: 0 } });
    s.addText(String(card.title).toUpperCase(), { x: x + 0.34, y: y + 0.3, w: cw - 0.6, h: 0.3,
      fontFace: F.semi, fontSize: 10, color: C.gris, charSpacing: 3 });
    s.addText(card.items.map(t2 => ({ text: t2, options: {
      fontFace: F.light, fontSize: 14, color: C.noir, bullet: { code: '2022', indent: 16 },
      paraSpaceAfter: 10, lineSpacingMultiple: 1.3 } })),
      { x: x + 0.34, y: y + 0.75, w: cw - 0.62, h: ch - 1.0, valign: 'top' });
  });
  foot(s, ++p.__n);
  return s;
}

/* Testimonial on the red field — one of the few places a red flat fill
   is allowed, and only on a short, punchy surface. */
function quote(p, { text, source } = {}) {
  const s = p.addSlide();
  s.background = { color: C.red };
  const f = path.join(LOGOS, 'symbole-blanc.png');
  if (fs.existsSync(f)) s.addImage({ path: f, x: W - 3.6, y: H - 3.4, w: 4.6, h: 4.6, transparency: 86 });
  s.addText([
    { text: `« ${text.replace(/\.$/, '')}`, options: { fontFace: F.black, fontSize: 26, color: C.blanc } },
    { text: '.', options: { fontFace: F.black, fontSize: 26, color: C.noir } },
    { text: ' »', options: { fontFace: F.black, fontSize: 26, color: C.blanc } },
  ], { x: PAD, y: 2.0, w: COL * 0.72, h: 2.6, valign: 'top', lineSpacingMultiple: 1.18 });
  if (source) s.addText(String(source).toUpperCase(), { x: PAD, y: 4.9, w: COL, h: 0.4,
    fontFace: F.semi, fontSize: 11, color: 'FFD9D9', charSpacing: 4 });
  foot(s, ++p.__n, true);
  return s;
}

/* Data table: hairline rows, noir header band, no vertical rules. */
function tableSlide(p, { eyebrow, title: t, head, rows, widths, note, accentCol } = {}) {
  const s = p.addSlide();
  s.background = { color: C.blanc };
  let y = PAD - 0.2;
  if (eyebrow) { eyebrowBox(s, eyebrow, { y }); y += 0.45; }
  s.addText(dot(t, { fontSize: 28 }), { x: PAD, y, w: COL * 0.85, h: 0.8, valign: 'top' });
  y += 1.05;
  const n = head.length;
  const w = widths || Array(n).fill(1);
  const sum = w.reduce((a, b) => a + b, 0);
  const colW = w.map(x => (x / sum) * COL);
  const body = rows.map(r => r.map((cell, i) => ({
    text: String(cell),
    options: { fontFace: F.light, fontSize: 12, color: accentCol === i ? C.red : C.noir,
      align: i === 0 ? 'left' : (typeof cell === 'string' && /^[+\-−]?[\d\s.,%]+$/.test(cell) ? 'right' : 'left') },
  })));
  s.addTable([
    head.map(h => ({ text: String(h).toUpperCase(), options: {
      fontFace: F.semi, fontSize: 10, color: C.noir, charSpacing: 2, fill: { color: C.grisClr } } })),
    ...body,
  ], {
    x: PAD, y, w: COL, colW, border: { type: 'solid', pt: 0.75, color: C.line },
    rowH: 0.42, valign: 'middle', margin: [4, 8, 4, 8],
  });
  if (note) s.addText(note, { x: PAD, y: H - 1.15, w: COL, h: 0.3, fontFace: F.light, fontSize: 10, color: C.gris });
  foot(s, ++p.__n);
  return s;
}

/* Closing slide: contact block on noir. */
function closing(p, { title: t = "L'exécution fait la différence.", lines = [] } = {}) {
  const s = p.addSlide();
  s.background = { color: C.noir };
  watermark(s);
  const logo = path.join(LOGOS, 'logo-wordmark-blanc.png');
  if (fs.existsSync(logo)) s.addImage({ path: logo, x: PAD, y: 1.5, h: 0.5, w: 1.52 });
  s.addText(dot(t, { fontSize: 32, color: C.blanc }), { x: PAD, y: 2.5, w: COL * 0.7, h: 1.4, valign: 'top', lineSpacingMultiple: 1.08 });
  const contact = lines.length ? lines : ["Abidjan, Côte d'Ivoire", 'info@genetrix.ci · www.genetrix.ci', '+225 07 47 169 169'];
  s.addText(contact.join('\n'), { x: PAD, y: 4.3, w: COL * 0.6, h: 1.4,
    fontFace: F.light, fontSize: 13, color: 'CFCFCF', lineSpacingMultiple: 1.5 });
  p.__n++;
  return s;
}

const save = (p, file) => p.writeFile({ fileName: file }).then(() => file);

module.exports = { deck, title, section, content, stats, comparison, quote, table: tableSlide, closing, save,
  C, F, W, H, PAD, COL, dot, watermark, Pptx };
