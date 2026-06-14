import React from 'react';

const TONE_BG = {
  paper: 'var(--paper)',
  cream: 'var(--paper-cream)',
  aged: 'var(--paper-aged)',
};

const JIT = [0.2, 0.8, 0.35, 0.95, 0.15, 0.7, 0.4, 0.9, 0.25, 0.85, 0.3, 0.6, 0.45];

function buildClip(edges, amp) {
  const segs = 14;
  const topTorn = edges === 'top' || edges === 'both';
  const botTorn = edges === 'bottom' || edges === 'both';
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const x = ((i / segs) * 100).toFixed(2) + '%';
    const y = topTorn ? `${(JIT[i % JIT.length] * amp).toFixed(1)}px` : '0px';
    pts.push(`${x} ${y}`);
  }
  for (let i = segs; i >= 0; i--) {
    const x = ((i / segs) * 100).toFixed(2) + '%';
    const y = botTorn ? `calc(100% - ${(JIT[(i + 3) % JIT.length] * amp).toFixed(1)}px)` : '100%';
    pts.push(`${x} ${y}`);
  }
  return `polygon(${pts.join(',')})`;
}

/**
 * TornPaper — a paper card with a ripped deckle edge, as if torn from
 * a magazine. Tear height stays constant regardless of card size.
 * Use for clippings, quotes, mastheads.
 */
export function TornPaper({
  edges = 'both',
  tone = 'cream',
  amplitude = 7,
  rotate = 0,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const topTorn = edges === 'top' || edges === 'both';
  const botTorn = edges === 'bottom' || edges === 'both';
  return (
    <div
      className={`bds-torn bds-torn--${tone} ${className}`}
      style={{
        position: 'relative',
        background: TONE_BG[tone] || TONE_BG.cream,
        clipPath: buildClip(edges, amplitude),
        WebkitClipPath: buildClip(edges, amplitude),
        filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.14))',
        paddingTop: topTorn ? `calc(var(--space-5) + ${amplitude}px)` : 'var(--space-5)',
        paddingBottom: botTorn ? `calc(var(--space-5) + ${amplitude}px)` : 'var(--space-5)',
        paddingLeft: 'var(--space-6)',
        paddingRight: 'var(--space-6)',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
