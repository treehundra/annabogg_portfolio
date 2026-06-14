# Portfolio Deck — UI kit

A **faithful recreation of Анна Богомолова's real 17-page portfolio** as an
interactive 16:9 HTML deck. Source: `uploads/portfolio_hq.pdf` (rendered to
`../../source_pages/`, photography extracted to `../../photos/`).

## Run
Open `index.html`. It loads the design-system tokens (`../../styles.css`),
`deck.css`, builds all 17 slides from `deck-build.js`, then mounts the
`deck-stage.js` web component.

- ←/→ (or click left/right half) to navigate · `R` resets · the thumbnail rail
  lets you jump/reorder · `Cmd/Ctrl+P` prints one page per slide.

## Files
| File | Role |
|---|---|
| `index.html` | Deck shell — links tokens + `deck.css`, mounts `<deck-stage>`. |
| `deck.css` | All slide + scrapbook-chrome styling (tape, polaroid, clip, spiral, torn paper, lanyard, marker scribbles, gallery rows). |
| `deck-build.js` | Builds every slide `<section>` in order; gallery slides are data-driven, the five text slides are bespoke. All copy is verbatim from the deck. |
| `deck-stage.js` | Deck runtime (scaling, nav, thumbnails, print). |

## The 17 slides
1. **Cover** — PORTFOLIO + marker signature, B&W polaroids, contacts.
2. **EXPERIENCE / WORK CASES** — spiral-notebook timeline + paper-clipped editorial / lookbook / TV cards.
3. **PUBLICATIONS** — torn-paper list + SHOW PROD lanyard + partner wordmarks.
4. **HARD SKILLS / SOFT SKILLS** — notebook + deckle note + language hang-tag.
5. **PUBLICATIONS** — five captioned cover shots.
6–8. **EDITORIAL STYLING** — L'Officiel × Vietnam Week · Мнение Редакции · Сноб.
9. **PROD & STYLE** — Ultra Models portfolio.
10. **STYLE** — HSE lookbook.
11. **PROD & STYLE** — Aurora Lunina collection (Marco Polo Hotel).
12. **PROD & STYLE** — Лиза Анохина shoot.
13. **PROD & STYLE** — SHEER magazine.
14. **STYLE** — Angels project.
15. **STYLE** — Ozerniki / FIRST L music videos.
16. **PROD & STYLE** — HSE × Самокат & BHSAD × Flowwow shows.
17. **Professional goal** + contacts.

## Notes
- Photography is the real extracted imagery; galleries display each photo at its
  true aspect (white letterboxing is invisible on the white page).
- Partner logos are styled wordmarks; external links are styled text (URLs were
  not embedded in the source PDF). See the root `readme.md` CAVEATS.
- Built from the design-system tokens; the scrapbook chrome mirrors the
  `components/decor/` primitives in plain CSS so the deck is fully standalone.
