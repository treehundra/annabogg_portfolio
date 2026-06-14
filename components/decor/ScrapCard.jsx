import React from 'react';

const TONE_BG = {
  paper: 'var(--paper)',
  cream: 'var(--paper-cream)',
  aged: 'var(--paper-aged)',
};

/**
 * ScrapCard — the base paper object of the scrapbook: a sheet with a
 * soft drop shadow and an optional slight rotation. Set `interactive`
 * for a lift-on-hover. Compose tape / clips / polaroids on top.
 */
export function ScrapCard({
  tone = 'paper',
  rotate = 0,
  interactive = false,
  framed = false,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={`bds-scrapcard bds-scrapcard--${tone} ${className}`}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        position: 'relative',
        background: TONE_BG[tone] || TONE_BG.paper,
        border: framed ? 'var(--stroke-bold) solid var(--ink)' : '1px solid var(--ink-100)',
        boxShadow: hover ? 'var(--shadow-lift)' : 'var(--shadow-paper)',
        padding: 'var(--space-6)',
        transform: `rotate(${rotate}deg)${hover ? ' translateY(-3px)' : ''}`,
        transition: `transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
