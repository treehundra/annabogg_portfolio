import React from 'react';

const SIZES = {
  sm: { padding: '4px 12px', fontSize: '0.72rem' },
  md: { padding: '7px 16px', fontSize: '0.82rem' },
};

/**
 * Tag — a chip for hard skills, disciplines, categories. Pill shape,
 * Oswald uppercase. Variants: outline, solid, ghost.
 */
export function Tag({
  variant = 'outline',
  size = 'md',
  children,
  className = '',
  style = {},
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const variants = {
    outline: { background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)' },
    solid: { background: 'var(--ink)', color: 'var(--paper)', border: '1.5px solid var(--ink)' },
    ghost: { background: 'var(--paper-grey)', color: 'var(--ink-700)', border: '1.5px solid transparent' },
  };
  return (
    <span
      className={`bds-tag bds-tag--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-medium)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        lineHeight: 1,
        borderRadius: 'var(--radius-chip)',
        whiteSpace: 'nowrap',
        ...sz,
        ...(variants[variant] || variants.outline),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
