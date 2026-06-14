import React from 'react';

const TAG_BG = {
  paper: 'var(--paper)',
  cream: 'var(--paper-cream)',
  aged: 'var(--paper-aged)',
  ink: 'var(--ink)',
};

/**
 * StringBadge — a hang-tag / lanyard badge: a cord drops to a punched
 * card that swings from a metal grommet. Use for credits, name tags,
 * "on set" passes, price-tag style labels.
 */
export function StringBadge({
  cordLength = 46,
  cordColor = 'var(--ink-700)',
  tone = 'paper',
  rotate = 4,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const dark = tone === 'ink';
  return (
    <span
      className={`bds-stringbadge ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{ width: 2, height: cordLength, background: cordColor, borderRadius: 2 }}
      />
      <span
        style={{
          position: 'relative',
          marginTop: -4,
          transform: `rotate(${rotate}deg)`,
          transformOrigin: 'top center',
          background: TAG_BG[tone] || TAG_BG.paper,
          color: dark ? 'var(--paper)' : 'var(--ink)',
          boxShadow: 'var(--shadow-photo)',
          padding: '20px 22px 16px',
          border: dark ? 'none' : '1px solid var(--ink-100)',
          borderRadius: 'var(--radius-badge)',
          textAlign: 'center',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 8,
            left: '50%',
            width: 13,
            height: 13,
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: dark ? 'var(--ink-700)' : 'var(--paper)',
            boxShadow: 'inset 0 0 0 2px #9a9ea6, 0 1px 1px rgba(0,0,0,0.2)',
          }}
        />
        <span style={{ display: 'block', marginTop: 10 }}>{children}</span>
      </span>
    </span>
  );
}
