import React from 'react';

/**
 * MarkerStroke — the brand's ONLY use of red: a hand-drawn marker
 * mark. Underline a word, circle a name, strike a price, highlight.
 * Renders as a stretchable SVG; place it under/over text yourself.
 */
const PATHS = {
  underline: {
    vb: '0 0 320 22',
    h: 16,
    d: 'M4,13 C46,5 92,17 150,10 C212,3 268,16 316,9',
    fill: false,
  },
  underline2: {
    vb: '0 0 320 26',
    h: 20,
    d: 'M3,9 C60,3 120,14 180,8 C240,2 290,13 317,7 M10,17 C70,12 150,20 240,14 C280,11 305,16 314,15',
    fill: false,
  },
  strike: {
    vb: '0 0 320 18',
    h: 14,
    d: 'M2,10 C60,7 120,12 180,8 C240,5 290,11 318,8',
    fill: false,
  },
  slash: {
    vb: '0 0 120 120',
    h: 'full',
    d: 'M14,104 C40,70 70,46 106,16',
    fill: false,
  },
  circle: {
    vb: '0 0 320 130',
    h: 'full',
    d: 'M150,8 C70,6 18,30 14,64 C10,100 80,122 168,122 C252,122 312,98 306,60 C302,28 244,10 150,10 C120,10 96,12 80,16',
    fill: false,
  },
  highlight: {
    vb: '0 0 320 60',
    h: 'full',
    d: 'M6,30 C90,18 230,18 314,28 C318,40 312,50 300,52 C210,60 96,58 14,50 C4,46 2,38 6,30 Z',
    fill: true,
  },
  check: {
    vb: '0 0 80 80',
    h: 'full',
    d: 'M10,42 C18,52 26,62 34,66 C42,52 56,28 72,12',
    fill: false,
  },
};

export function MarkerStroke({
  variant = 'underline',
  color = 'var(--marker-red)',
  thickness = 5,
  opacity = 1,
  width = '100%',
  height,
  className = '',
  style = {},
  ...rest
}) {
  const spec = PATHS[variant] || PATHS.underline;
  const isOverlay = variant === 'circle' || variant === 'slash' || variant === 'check';
  const resolvedHeight =
    height != null ? height : spec.h === 'full' ? '100%' : `${spec.h}px`;

  return (
    <svg
      className={`bds-marker bds-marker--${variant} ${className}`}
      viewBox={spec.vb}
      preserveAspectRatio={spec.h === 'full' ? 'xMidYMid meet' : 'none'}
      aria-hidden="true"
      style={{
        display: 'block',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof resolvedHeight === 'number' ? `${resolvedHeight}px` : resolvedHeight,
        overflow: 'visible',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
      {...rest}
    >
      <path
        d={spec.d}
        fill={spec.fill ? color : 'none'}
        stroke={spec.fill ? 'none' : color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={spec.fill ? { mixBlendMode: 'multiply', opacity: 0.55 } : undefined}
      />
    </svg>
  );
}
