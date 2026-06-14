The base paper sheet of the scrapbook — soft shadow, optional tilt, optional lift-on-hover. Everything else (tape, clips, polaroids, marker) layers on top.

```jsx
<ScrapCard tone="cream" rotate={-1.5} interactive>
  <h3>Королева ринга</h3>
  <p>Продакшн шоу — стилизация образов участниц.</p>
</ScrapCard>

// Heavy editorial frame
<ScrapCard framed rotate={2}>…</ScrapCard>
```

Tones: `paper`, `cream`, `aged`. Use `framed` for the bold black border treatment; `interactive` for clickable cards.
