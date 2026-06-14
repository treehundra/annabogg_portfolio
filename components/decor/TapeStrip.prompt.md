A strip of translucent masking tape with torn ends — lay it across the corner of a photo or note. Position it absolutely over the thing it "sticks down".

```jsx
<div style={{ position: 'relative' }}>
  <Polaroid caption="Backstage" />
  <TapeStrip variant="warm" rotate={-8}
    style={{ position: 'absolute', top: -12, left: '30%', zIndex: 'var(--z-tape)' }} />
</div>

// As a labelled tab
<TapeStrip variant="cool" width={120} rotate={2}>2024</TapeStrip>
```

Tints: `warm` (kraft), `cool` (blue-grey), `paper`. Tape is always semi-transparent so the surface beneath shows through.
