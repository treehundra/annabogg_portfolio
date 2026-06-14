import React from 'react';

const TAPE_BG = {
  warm: 'var(--tape-warm)',
  cool: 'var(--tape-cool)',
  paper: 'rgba(250,248,242,0.78)',
};

/**
 * TapeStrip — a strip of translucent masking tape with torn short
 * ends and a faint sheen. Decorative: lay it across the corner of a
 * photo or note to "stick it down". Can hold a short label.
 */
export function TapeStrip({
  variant = 'warm',
  width = 92,
  rotate = -4,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const bg = TAPE_BG[variant] || TAPE_BG.warm;
  return (
    <span
      className={`bds-tape bds-tape--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: typeof width === 'number' ? `${width}px` : width,
        minHeight: 26,
        padding: '6px 12px',
        background: bg,
        backgroundImage: 'var(--tape-sheen)',
        boxShadow: 'var(--shadow-tape)',
        transform: `rotate(${rotate}deg)`,
        clipPath:
          'polygon(0% 0%,100% 0%,98% 22%,100% 46%,98% 72%,100% 100%,0% 100%,2% 74%,0% 48%,2% 24%)',
        fontFamily: 'var(--font-hand)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: '1.05rem',
        color: 'var(--ink-700)',
        lineHeight: 1,
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
