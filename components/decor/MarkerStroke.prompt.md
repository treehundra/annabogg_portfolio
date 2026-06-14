Hand-drawn red marker mark — the brand's single chromatic accent; use to underline, circle, strike, or highlight a word. Never use red as a fill or background; only as a drawn stroke.

```jsx
// Underline a word — wrap text, drop the stroke just beneath it
<span style={{ position: 'relative', display: 'inline-block' }}>
  PORTFOLIO
  <MarkerStroke variant="underline" style={{ position: 'absolute', left: 0, right: 0, bottom: -10 }} />
</span>

// Circle a name (overlay variant — position over the element)
<span style={{ position: 'relative', display: 'inline-block', padding: '0 14px' }}>
  Анна
  <MarkerStroke variant="circle" style={{ position: 'absolute', inset: '-30% -10%' }} />
</span>
```

Variants: `underline`, `underline2` (double), `strike`, `slash`, `circle`, `highlight` (translucent block, multiply-blended), `check`. Underline/strike variants stretch to their container width; circle/slash/check/highlight keep aspect. Tune `thickness` and `opacity` for a lighter or heavier hand.
