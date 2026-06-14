import React from 'react';
import { MarkerStroke } from '../decor/MarkerStroke.jsx';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: '0.78rem' },
  md: { padding: '12px 24px', fontSize: '0.92rem' },
  lg: { padding: '16px 34px', fontSize: '1.08rem' },
};

/**
 * Button — editorial action. Uppercase Oswald, sharp corners.
 * Variants: solid (black), outline, marker (text + red marker
 * underline), ghost.
 */
export function Button({
  variant = 'solid',
  size = 'md',
  type = 'button',
  disabled = false,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sz = SIZES[size] || SIZES.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    position: 'relative',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-medium)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    lineHeight: 1,
    border: '2px solid transparent',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...sz,
  };

  const variants = {
    solid: {
      background: hover && !disabled ? 'var(--ink-700)' : 'var(--ink)',
      color: 'var(--paper)',
      borderColor: 'var(--ink)',
    },
    outline: {
      background: hover && !disabled ? 'var(--ink)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink)',
      borderColor: 'var(--ink)',
    },
    marker: {
      background: 'transparent',
      color: 'var(--ink)',
      borderColor: 'transparent',
      paddingLeft: 6,
      paddingRight: 6,
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      borderColor: 'transparent',
      textDecoration: hover && !disabled ? 'underline' : 'none',
      textUnderlineOffset: 4,
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`bds-btn bds-btn--${variant} ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...base,
        ...(variants[variant] || variants.solid),
        transform: hover && !disabled ? 'translateY(-1px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      {variant === 'marker' && (
        <MarkerStroke
          variant="underline"
          thickness={6}
          opacity={hover && !disabled ? 1 : 0.85}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 2 }}
        />
      )}
    </button>
  );
}
