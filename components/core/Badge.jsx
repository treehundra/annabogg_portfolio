import React from 'react';

/**
 * Badge — a small mono credit label, e.g. a publication name or a
 * "since 2019" stamp. Variants: outline (boxed), solid, plain.
 * Optional leading dot.
 */
export function Badge({
  variant = 'outline',
  dot = false,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const variants = {
    outline: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' },
    solid: { background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' },
    plain: { background: 'transparent', color: 'var(--ink-500)', border: '1px solid transparent', padding: 0 },
  };
  return (
    <span
      className={`bds-badge bds-badge--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-micro)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: variant === 'plain' ? 0 : '5px 9px',
        borderRadius: 'var(--radius-badge)',
        ...(variants[variant] || variants.outline),
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--marker-red)' }}
        />
      )}
      {children}
    </span>
  );
}
