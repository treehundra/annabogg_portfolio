import React from 'react';

/**
 * SpiralBinding — a notebook page bound by a metal coil along one
 * edge (top or left). Punched holes sit on the page; coil loops
 * straddle the edge. Wrap any page content.
 */
export function SpiralBinding({
  edge = 'top',
  rings = 12,
  tone = 'cream',
  children,
  className = '',
  style = {},
  ...rest
}) {
  const horizontal = edge === 'top' || edge === 'bottom';
  const bg =
    tone === 'paper' ? 'var(--paper)' : tone === 'aged' ? 'var(--paper-aged)' : 'var(--paper-cream)';
  const loops = Array.from({ length: rings });

  const loopEl = (i) => (
    <span
      key={i}
      style={{
        position: 'relative',
        width: horizontal ? 13 : 30,
        height: horizontal ? 30 : 13,
        border: '3px solid',
        borderImage: 'linear-gradient(180deg,#e6e7ea,#9a9ea6,#6f747c) 1',
        borderRadius: '50%',
        transform: `rotate(${horizontal ? -16 : 74}deg)`,
        background: 'transparent',
        boxShadow: '0 1px 1px rgba(0,0,0,0.25)',
      }}
    />
  );

  const padKey = { top: 'paddingTop', bottom: 'paddingBottom', left: 'paddingLeft', right: 'paddingRight' }[edge];

  return (
    <div
      className={`bds-spiral bds-spiral--${edge} ${className}`}
      style={{
        position: 'relative',
        background: bg,
        boxShadow: 'var(--shadow-paper)',
        borderRadius: 'var(--radius-photo)',
        padding: 'var(--space-6)',
        [padKey]: 'var(--space-8)',
        ...style,
      }}
      {...rest}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          [edge]: horizontal ? -13 : -6,
          ...(horizontal
            ? { left: '6%', right: '6%', display: 'flex', justifyContent: 'space-between' }
            : { top: '6%', bottom: '6%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }),
          zIndex: 'var(--z-clip)',
        }}
      >
        {loops.map((_, i) => loopEl(i))}
      </div>
      {children}
    </div>
  );
}
