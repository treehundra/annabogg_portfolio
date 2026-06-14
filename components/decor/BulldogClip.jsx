import React from 'react';

/**
 * BulldogClip — a folded-steel binder clip rendered in CSS, for
 * clamping the top edge of a card or photo. Two wire handles arc up
 * from a tapered metal mouth. Purely decorative.
 */
export function BulldogClip({
  size = 52,
  tone = 'steel',
  rotate = 0,
  className = '',
  style = {},
  ...rest
}) {
  const bodyBg =
    tone === 'black'
      ? 'linear-gradient(180deg,#3a3a3a,#111 60%,#000)'
      : 'linear-gradient(180deg,#e9e9ec,#b9bcc2 45%,#7e828a)';
  const handle = tone === 'black' ? '#1c1c1c' : '#9a9ea6';
  const w = size;
  const h = size * 0.72;
  const handleW = size * 0.34;
  const handleH = size * 0.42;

  return (
    <span
      className={`bds-clip bds-clip--${tone} ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: w,
        height: h + handleH * 0.55,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter: 'drop-shadow(var(--shadow-clip))',
        ...style,
      }}
      {...rest}
    >
      {[-1, 1].map((dir) => (
        <span
          key={dir}
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: handleW,
            height: handleH,
            transform: `translateX(${dir === -1 ? '-92%' : '-8%'}) rotate(${dir * 6}deg)`,
            border: `2px solid ${handle}`,
            borderBottom: 'none',
            borderRadius: '60% 60% 0 0',
            background: 'transparent',
          }}
        />
      ))}
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: w,
          height: h,
          background: bodyBg,
          clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)',
          boxShadow: 'inset 0 -3px 4px rgba(0,0,0,0.25), inset 0 2px 2px rgba(255,255,255,0.3)',
        }}
      />
    </span>
  );
}
