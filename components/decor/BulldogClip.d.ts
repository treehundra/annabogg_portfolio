import React from 'react';

/** @kind decoration */
export interface BulldogClipProps {
  /** Overall width in px. */
  size?: number;
  /** Metal finish. */
  tone?: 'steel' | 'black';
  /** Rotation in degrees. */
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BulldogClip(props: BulldogClipProps): JSX.Element;
