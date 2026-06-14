A paper card with a ripped edge, like a strip torn from a magazine. Tear height is constant whatever the card size. Use for clippings, pull-quotes, mastheads.

```jsx
<TornPaper edges="both" tone="aged" rotate={-1.5} style={{ maxWidth: 420 }}>
  <p className="serif-italic">«Стиль — это редактура».</p>
</TornPaper>
```

`edges`: `top`, `bottom`, `both`. Tones: `paper`, `cream`, `aged` (kraft). Increase `amplitude` for a rougher rip.
