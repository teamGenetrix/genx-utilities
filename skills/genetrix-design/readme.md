# Genetrix — Design System

> **Là où le potentiel devient performance.**
> Consulting · Training · Coaching · Technology

Genetrix is a management consulting, training and coaching firm (francophone; Côte d'Ivoire — `genetrix.ci`). It helps organisations close the gap between potential and results — *"de la stratégie à l'exécution."* Its work is organised around **11 pillars of operational excellence**, and its brand is built on one idea: **everything converges on the point** — the red dot after "Genetrix." that marks the point of impact where strategy meets execution.

This design system is the single source of truth for that brand in interfaces and assets. It is authored in **French**, like the brand itself.

## Sources
- The master brand & design system document (v2.0), 12 sections: idea, logo, symbol & dot, colour, typography, grid & spacing, iconography, the 11 pillars, data & viz, voice & punctuation, applications, governance. All tokens and rules here are derived from it; the full written reference lives in the sibling skill `genetrix-docs` at `references/charte.md`.
- Logo files in `assets/`. The originals shipped only a white wordmark and no isolated monogram, so `logo-full-noir.png`, `logo-wordmark-noir.png` and `symbole-blanc/noir/rouge.png` were derived from them — recoloured and cropped, never redrawn.

No codebase or Figma file was provided — the brand document is a static guidelines page, so the reusable component inventory below is authored to fit the brand rather than copied from a source library.

---

## CONTENT FUNDAMENTALS

**Language.** French, always. Vouvoiement is implied but the brand rarely addresses the reader directly — it states facts and results.

**Tone.** Direct, precise, without emphasis (*"direct, précis, sans emphase"*). Results over jargon. Short sentences, action verbs, evidence in numbers. Confident, never boastful.

**Casing.** Sentence case in body and UI. Headings are Montserrat Black but still sentence case (`De la stratégie à l'exécution.`), not Title Case. Eyebrows / legends are UPPERCASE with wide letter-spacing.

**The red dot `.`** is the brand's visual tic: a full stop set in red at the *end* of a signature phrase or the wordmark. Use it sparingly and consistently — one per phrase, always terminal. Never mid-sentence, never decoratively scattered.

**Numbers first ("le chiffre d'abord").** Prefer figures and diagrams to long paragraphs. A key figure is set large, in red: `+100 organisations`, `+98% de satisfaction`. Ranges are written *"de X à Y"* or *"X à Y"* — **never with an em/en dash**.

**Punctuation rules.**
- Separators: comma, colon, parentheses.
- Avoid the em dash (—) and en dash (–), especially in ranges.
- Never fake bold in the middle of a sentence — weight comes from the typeface, not from `<b>`.

**Emoji:** never. Not part of the brand.

**Examples**
- ✍️ On écrit: *"De la stratégie à l'exécution."* · *"+98% de satisfaction."* · *"de 3 à 6 mois."*
- 🚫 On évite: vague promises without proof · *"3–6 mois"* (dash range) · artificial bold.

---

## VISUAL FOUNDATIONS

**Colour.** A closed, sober palette driven by one decisive red.
- **Rouge #D00000** (`--gx-accent`) is an *accent*, never a large flat fill — the one exception is the red logo block. Hover `#B80000`, active `#9A0000`, disabled `#F6C2C2`. A full red ramp (50 → 800) exists for states and hierarchy.
- Neutrals carry everything else: **noir #141414** (ink & dark surfaces), **gris #5A5A5A** (muted text, captions, borders), **gris clair #F0F0F0** (light surfaces), **blanc #FFFFFF**, **rose #F7E9EB** (faint accent tint), hairline **#E7E7E7**.
- Status colours (success/warning/danger) are deliberately muted so red stays reserved for the brand.

**Typography.** **Montserrat**, one voice, three working weights: **Black 900** affirms (display, H1, H2), **SemiBold 600** structures (H3, subtitles, legends), **SemiLight 300** reads (body). Modular scale, ratio 1.25: Display 56 / H1 44 / H2 33 / H3 25 / subtitle 20 / body 16 / legend 13. Body line-height 1.6, measure ~65–75 characters. Headings are tight (1.0–1.2) with slight negative tracking; legends are uppercase with +0.08–0.16em tracking.

**Spacing & layout.** Base-8 rhythm with a 4px half-step (4/8/12/16/24/32/48/64/96). 12-column grid, 1120px max width, 24px gutters. Everything aligns to this scale.

**Backgrounds.** Predominantly white or noir — clean, generous whitespace. No gradients, no photographic hero washes as default. The monogram **G** appears as a large, very low-opacity (6–10%) watermark on dark covers and cards. Red is used as a full background only on small, punchy surfaces (social tiles, the logo block).

**Corners & cards.** Calm radii: 12–16px on surfaces, pill (999px) for chips and toggles, 5–8px on small controls. A **card** is a white surface with a 1px `#E7E7E7` border and 16px radius; a signature variant adds a **4px red top rule** (used on pillar and voice cards). Dark cards are noir with a deep neutral shadow and the faint G watermark.

**Shadows.** Soft, deep, **never coloured**. `sm` for controls, `md` on hover, `lg` for raised surfaces, `xl` (`0 18px 40px rgba(0,0,0,.28)`) for dark cards and application mockups.

**Borders.** Hairline `#E7E7E7`. Accents are a 4px red top rule or a thin red side bar (e.g. email signature), never a full red outline.

**Motion.** Quick and understated. ~200ms with an ease-out curve. Fades and small translations (2px lift on interactive cards). **No bounce, no spring.**

**Hover / press.** Buttons darken on hover (accent → accent-hover) and darken further when pressed (accent-active). Ghost/outline controls fill with `gris clair` on hover. Interactive cards lift 2px and gain the `md` shadow. Toggles/checks fill red when on; the radio dot scales in.

**Transparency & blur.** Used only for the modal scrim (`rgba(20,20,20,.55)` + light blur) and the low-opacity G watermark. Not a decorative surface treatment.

**Imagery vibe.** When photography is used it should be grounded and professional (people, teams, workplaces), colour-neutral to warm — not stylised, not heavily filtered. Imagery is secondary to type and numbers.

---

## ICONOGRAPHY

The brand specifies **custom line icons**: built on a 64px key grid, **3px stroke**, rounded caps and joins, with **a single red accent per icon**, legible from 24px upward. No icon binaries were provided in the source, and no icon font or SVG sprite exists in the materials.

**Substitution (flagged).** For components, cards and UI kits this system uses **[Lucide](https://lucide.dev)** via CDN — the closest widely-available match (rounded caps/joins, geometric, consistent grid). Note the difference: **Lucide is 2px stroke; the Genetrix spec is 3px.** For production, either (a) accept Lucide at `stroke-width: 2` (default here), (b) set `stroke-width: 2.5–3` on Lucide to approach the brand weight, or (c) commission the true custom set. The single-red-accent rule (one red element per icon, the rest noir/gris) should be applied by hand where it matters.

- Icon CDN used: `https://unpkg.com/lucide@0.469.0`.
- **Emoji / unicode as icons:** never.
- Logos are raster PNGs (`assets/`); there is no SVG logo — see Caveats.

---

## Components

Reusable React primitives (namespace resolved by the compiler; see `check_design_system`). Group → components:

- **core/** — `Button`, `IconButton`, `Eyebrow`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **data/** — `Card`, `StatFigure`, `Badge`, `Tag`
- **overlays/** — `Tabs`, `Dialog`, `Tooltip`, `Toast`

**Intentional additions** (no source component library existed): `Eyebrow` (the numbered uppercase section overline that recurs throughout the brand doc) and `StatFigure` (the "le chiffre d'abord" key-figure treatment) are brand-specific primitives; the rest are a standard set sized to the brand.

Each component ships `<Name>.jsx`, `<Name>.d.ts` (props + JSDoc), and `<Name>.prompt.md` (usage). Styling references CSS custom properties only.

## UI kits
- **ui_kits/marketing-site/** — the Genetrix corporate website (hero, pillars, stats, offer, contact) as an interactive click-through.
- **ui_kits/slides/** — a presentation template: title, section, stat, comparison and quote slides at 1280×720.

## Foundations (Design System tab)
Specimen cards live in `guidelines/` (Colors, Type, Spacing, Brand) and one card per component directory (Components group).

## Root manifest
- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — logo PNGs.
- `guidelines/` — foundation specimen cards.
- `components/` — reusable primitives.
- `ui_kits/` — full-screen product recreations.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper.

---

## CAVEATS
- **Fonts:** Montserrat is loaded from Google Fonts (the genuine family, freely available) via `@import` — no local binaries were shipped, so the compiler reports 0 `@font-face` rules. If you need self-hosted fonts, add the `.woff2` files and `@font-face` rules to `tokens/fonts.css`.
- **Icons:** Lucide is a **substitute** for the brand's custom 3px-stroke icon set (see Iconography). Please confirm whether to keep Lucide or provide the true icon assets.
- **Logo:** only raster PNGs were provided — no vector (SVG) logo. A vector master would render crisply at all sizes; please share one if available.
- No product codebase or Figma was provided, so components are authored to the brand rather than mirrored from an existing library.
