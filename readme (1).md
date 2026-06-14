# Bogomolova Design System

A design system for **Анна Богомолова** — стилист, креативный продюсер и
ассистент креативного директора из Москвы. The brand is a **printed fashion
zine, alive in the browser**: pure white paper, dense black ink, one red marker
accent, and a scrapbook of taped polaroids, torn clippings, bulldog clips,
spiral notebooks and hang-tags.

Anna works across **editorial styling, commercial styling, fashion styling and
creative direction** — with publications in Сноб, L'Officiel, Мнение Редакции,
Badlon, Sheer and Pretty Magazine; lookbooks for Ostin Kids, Kapsula, Parit and
Botrois; and production for «Королева ринга», Ozon Bank (× Гоша Куценко),
Страсти по Фишеру and music videos for Ozerniki.

> **Source.** This system is grounded in Anna's **real 17-page portfolio deck**
> (`uploads/portfolio_hq.pdf`). Every page was rendered, its photography
> extracted to `photos/`, and its exact copy transcribed. The `ui_kits/portfolio/`
> deck is a faithful, full recreation of that document — all text, all imagery,
> the fonts, the scrapbook styling. Foundations and components are derived from
> what the deck actually uses.

---

## CONTENT FUNDAMENTALS

**Language.** Primary copy is **Russian**; English appears as editorial flavour
— mono micro-labels (`SS25`, `№12`, `ON SET`), discipline names kept in their
industry-native English (*editorial styling*, *creative direction*), and the
serif strapline *"stylist & creative producer"*. Mixing the two is intentional
and on-brand for fashion press.

**Voice.** First-person, plain, confident, never salesy. *"Работаю в editorial,
commercial и fashion styling."* Anna states what she does; she does not boast.
Sentences are short. No exclamation in body copy (the only "shouting" is the
display caps and the marker).

**Casing.**
- Display headings: **ALL CAPS** (`PORTFOLIO`, `EXPERIENCE`, `HARD SKILLS`).
- Serif subheads: Title-ish but natural (*Fashion & Creative*, *Brand &
  Production*).
- Body: ordinary sentence case.
- Micro-labels & credits: UPPERCASE, tracked-out, mono.

**Tone words:** editorial, минималистичный, авангардный, tactile, печатный.

**Emoji:** none. Ever. The handwritten Caveat font and the red marker carry all
the "human" warmth; emoji would break the printed-paper illusion.

**Numbers & credits** are set in mono and read like magazine furniture: issue
numbers, seasons, years, datelines (`Москва`, `© 2026`).

---

## VISUAL FOUNDATIONS

**Colour.** Almost monochrome. Pure white paper (`--paper #FFFFFF`), near-black
ink (`--ink #111111`), a small set of paper tones (cream/aged/grey) for notes
and clippings, and a single chromatic accent — **marker red `#E5251D`**. The red
is sacred: it appears **only as a hand-drawn stroke** (underline, circle, strike,
highlight, check) — *never* as a button fill, background, border or large area.
The one exception is the tiny `Badge dot`, sized like an ink spot. See
`guidelines/brand-marker-rules.card.html` for the do/don't.

**Type.** Four voices (see `tokens/typography.css`), matched from the real deck:
1. **Display — Montserrat** (800), UPPERCASE, slightly tight tracking. The big
   black section words: PORTFOLIO / EXPERIENCE / EDITORIAL STYLING / PROD & STYLE
   / HARD SKILLS / WORK CASES.
2. **Script — Pinyon Script**, the formal copperplate subhead (*Fashion &
   Creative*, *Brand & Production*, *Professional goal*, the year stamps).
3. **Serif — PT Serif**, the editorial body for lists and publication credits.
4. **Body — Montserrat** (400–600) for running copy, captions, contacts.
Plus **Caveat** — the fat felt-tip marker hand of the cover signature
*БОГОМОЛОВА АННА*.

**Backgrounds.** The white page *is* the design — no gradients, no full-bleed
photo washes, no repeating textures (a faint optional `.paper-grain` overlay
exists for paper realism, used sparingly). Section breaks are **1.5px solid
black hairlines**; one section (`Experience`) sits on `--paper-cream` and the
footer inverts to solid ink.

**Imagery.** **Full-colour editorial** photography is the norm — fashion
stories, lookbooks, campaign and show documentation, shown at true aspect in
clean white-framed rows. A **black-&-white treatment** is reserved for the cover
portrait and a few studio shots (`Polaroid bw` / `--filter-bw`). Photos sit in
**Polaroid** frames, plain mats, or bare in justified grids, often slightly
rotated, taped or clipped.

**Layout.** Scrapbook: elements are **rotated a few degrees**
(`--rot-xs … --rot-lg`), **overlapped** with negative offsets, and "fixed down"
with tape/clips. Underneath the collage is real editorial discipline — a
`1280px` max width, generous gutters, a clear type hierarchy, hairline rules.

**Corners & borders.** Mostly **sharp (radius 0)** — editorial, printed. Polaroids
get a barely-there `2px`. Chips/tags are full pills (`999px`). Borders are either
a `1px` hairline (`--ink-100`) or a heavy **2.5px black editorial frame**
(`ScrapCard framed`).

**Shadows.** Soft, matte, paper-on-paper — never glossy or coloured.
`--shadow-paper` (resting card) → `--shadow-photo` (lifted polaroid) →
`--shadow-lift` (hover) → `--shadow-clip` (metal hardware). Tape casts a faint
`--shadow-tape`.

**Motion.** Restrained and matte. Quick eases (`--ease-out`, 140–240ms), **no
bounce, no spring**. Hover = a 1–3px lift + a deeper shadow; nav links draw a red
underline left-to-right. Buttons translate up `1px` on hover. The `marker`
button reveals/strengthens its red underline. No infinite/decorative loops.

**Transparency & blur.** Used in two places only: **tape** (always translucent so
the surface shows through) and the **sticky nav / overlay scrim** (a light
`backdrop-filter` blur). Otherwise surfaces are opaque paper.

---

## ICONOGRAPHY

This brand is **anti-icon**. It deliberately avoids a UI icon set — meaning is
carried by **typography, the red marker, and physical paper objects** (tape,
clips, grommets, spiral coils) rather than glyphs.

- **No icon font, no SVG icon library, no emoji, no Unicode dingbats** in product
  copy.
- The only recurring "marks" are the **MarkerStroke** primitives (underline,
  circle, strike, highlight, **check** ✓) — hand-drawn red, rendered as inline
  SVG inside the component. A check-mark next to a production credit is the
  closest thing to an icon the brand uses.
- Physical hardware (bulldog clip, grommet, spiral rings, tape) is rendered with
  **CSS + minimal SVG** inside the decor components — these are brand motifs, not
  iconography, and should be reused via the components rather than redrawn.
- If a future need arises for functional icons (e.g. a real product UI), use a
  **thin-stroke, monoline** set in black only (Lucide is the nearest CDN match) —
  and flag it, because it is a departure from the printed-zine language.

There is **no logomark** — the brand mark is the **typographic masthead** (name
in Oswald caps + role in mono/serif). See `guidelines/brand-masthead.card.html`.

---

## VISUAL FOUNDATIONS — token reference

| Concern | File |
|---|---|
| Colours (paper, ink, marker, tape, photo) | `tokens/colors.css` |
| Type (families, scale, weights, tracking) | `tokens/typography.css` |
| Spacing, page frame, radii, rotations | `tokens/spacing.css` |
| Shadows, eases, photo filters, z-layers | `tokens/effects.css` |
| `@font-face` / webfont imports | `tokens/fonts.css` |
| Element base styles + helpers | `tokens/base.css` |
| Global entry (import list only) | `styles.css` |

---

## INDEX / MANIFEST

**Foundations** — specimen cards in `guidelines/` (rendered in the Design System
tab): Colors (Paper, Ink, Marker red, Tape & photo) · Type (Display, Serif, Body,
Hand & Mono, Scale) · Spacing (Scale, Radii & rotation, Shadows) · Brand
(Masthead, Marker do/don't, Photo treatment, Scrapbook layout).

**Components** — consumed from `window.BogomolovaDesignSystem_6cd50c`:
- `components/decor/` — **TapeStrip, Polaroid, BulldogClip, MarkerStroke,
  TornPaper, SpiralBinding, StringBadge, ScrapCard**
- `components/core/` — **Button, Tag, Badge**
- `components/typography/` — **SectionHeading**

Each directory has a `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a
shared `@dsCard` showcase HTML.

**UI kit** — `ui_kits/portfolio/` — a faithful, full recreation of Anna's real
17-page portfolio as an interactive 16:9 deck (cover, experience, publications,
skills, and the editorial / prod & style / style case galleries, plus the
professional-goal closer). Built on `deck-stage.js`; real photography lives in
`photos/`. See its `README.md`.

**Source pages** — `source_pages/` (rendered originals) and `photos/` (every
photograph extracted from the deck).

**Skill** — `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## CAVEATS

- **Fonts are nearest-match Google Fonts** to the faces in the real deck (which
  was built in Canva): **Montserrat** (display + body), **Pinyon Script**
  (copperplate subheads), **PT Serif** (lists/credits), **Caveat** (the marker
  signature). Swap for the exact licensed cuts by editing `tokens/fonts.css` +
  `tokens/typography.css`.
- **Brand logos** on the Publications slide (Telling Stories Fest, Flowwow,
  Самокат, L'Officiel) are rendered as styled wordmarks, not the official
  vector logos — replace with real SVGs if exact marks are required.
- **External links** in the deck ("Ссылка на видео / бэкстейдж / клип / диджитал
  версию") are shown as styled text — the real URLs were not embedded as
  extractable links in the PDF; wire them up when known.
