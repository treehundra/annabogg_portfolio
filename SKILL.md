---
name: bogomolova-design
description: Use this skill to generate well-branded interfaces and assets for Анна Богомолова (stylist & creative producer), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping an editorial fashion-zine / scrapbook aesthetic.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Aesthetic:** printed fashion zine / scrapbook — white paper, black ink, ONE
  red marker accent used only as a hand-drawn scribble (never a fill). Tape,
  polaroids, bulldog clips, spiral notebooks, lanyard badges, torn paper.
  Editorial photography is **full colour** (B&W reserved for cover/portraits).
- **Type:** Montserrat (800 UPPERCASE display + body) · Pinyon Script (copperplate
  subheads) · PT Serif (lists/credits) · Caveat (marker signature). All Cyrillic.
- **Tokens:** link `styles.css`; everything is a CSS custom property.
- **Components:** `components/**` — load `_ds_bundle.js`, read from
  `window.BogomolovaDesignSystem_6cd50c`. See each `*.prompt.md` for usage.
- **Foundations:** specimen cards in `guidelines/`.
- **Full page example:** `ui_kits/portfolio/` — faithful recreation of Anna's
  real 17-page portfolio deck (real photos in `photos/`).

## Hard rules
- Red ONLY as a drawn marker scribble. Never fill a button/box/background red.
- Imagery is full colour editorial; use B&W only for the cover / portraits.
- No emoji, no icon font — meaning comes from type, marker, and paper objects.
- Sharp corners (editorial); slight scrapbook rotations; soft matte shadows.
- Copy is Russian, first-person, plain and confident; display words in CAPS;
  section subheads in Pinyon Script copperplate.
