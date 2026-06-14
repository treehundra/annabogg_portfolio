import React from 'react';

/**
 * Polaroid — an instant-photo frame: white border, deep bottom lip
 * for a handwritten caption, soft drop shadow. Photos are full-colour
 * by default (set `bw` for the black-&-white cover treatment). Pass
 * `src` or leave empty for a labelled placeholder. Slightly rotate it
 * for the scrapbook look.
 */
export function Polaroid({
  src,
  alt = '',
  caption,
  ratio = '1 / 1',
  width = 240,
  rotate = -2,
  bw = false,
  className = '',
  style = {},
  ...rest
}) {
  return (
    <figure
      className={`bds-polaroid ${className}`}
      style={{
        margin: 0,
        width: typeof width === 'number' ? `${width}px` : width,
        background: 'var(--paper)',
        padding: '12px 12px 0',
        boxShadow: 'var(--shadow-photo)',
        transform: `rotate(${rotate}deg)`,
        borderRadius: 'var(--radius-photo)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: ratio,
          background: 'var(--photo-bg)',
          overflow: 'hidden',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: bw ? 'var(--filter-bw)' : 'none',
            }}
          />
        ) : (
          <span
            className="label-micro"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink-300)',
              letterSpacing: 'var(--ls-label)',
            }}
          >
            ФОТО
          </span>
        )}
      </div>
      <figcaption
        style={{
          fontFamily: 'var(--font-marker)',
          fontSize: '1.4rem',
          fontWeight: 'var(--fw-semibold)',
          color: 'var(--ink-700)',
          textAlign: 'center',
          lineHeight: 1.1,
          padding: caption ? '8px 4px 12px' : '0',
          minHeight: caption ? 40 : 12,
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
