Instant-photo frame with a handwritten caption — the workhorse for showing editorial images in the scrapbook. Images are forced to black & white. Rotate a few degrees and overlap with tape or a clip.

```jsx
<Polaroid src="shoot.jpg" caption="L'Officiel — backstage" rotate={-3} width={260} />

// Empty placeholder while waiting on real photography
<Polaroid caption="Sheer / SS25" ratio="4 / 5" rotate={2} />
```

Use `ratio` for portrait shoots ("4 / 5", "3 / 4"). Always B&W via `--filter-bw`; do not override to color.
