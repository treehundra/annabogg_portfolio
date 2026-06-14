import React from 'react';
import { MarkerStroke } from '../decor/MarkerStroke.jsx';

/**
 * SectionHeading — the signature pairing: a giant uppercase Oswald
 * word (PORTFOLIO / EXPERIENCE) with an elegant Playfair italic
 * subhead beneath it. Optional index number and red marker underline.
 */
export function SectionHeading({
  title,
  subtitle,
  index,
  marker = false,
  align = 'left',
  level = 2,
  className = '',
  style = {},
  ...rest
}) {
  const Tag = `h${Math.min(Math.max(level, 1), 6)}`;
  const alignItems = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
  return (
    <header
      className={`bds-section-heading ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems,
        textAlign: align,
        gap: 'var(--space-2)',
        ...style,
      }}
      {...rest}
    >
      {index != null && (
        <span className="label-micro" style={{ color: 'var(--ink-300)' }}>
          {index}
        </span>
      )}
      <Tag
        style={{
          margin: 0,
          fontSize: 'var(--text-display)',
          letterSpacing: 'var(--ls-display)',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {title}
        {marker && (
          <MarkerStroke
            variant="underline2"
            thickness={5}
            style={{ position: 'absolute', left: '-2%', right: '-2%', bottom: '-0.32em', width: '104%' }}
          />
        )}
      </Tag>
      {subtitle && (
        <span
          className="serif-italic"
          style={{ fontSize: 'var(--text-subhead)', color: 'var(--ink-500)', lineHeight: 'var(--lh-snug)' }}
        >
          {subtitle}
        </span>
      )}
    </header>
  );
}
