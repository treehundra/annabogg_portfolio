import React from 'react';

/** @kind decoration */
export interface PolaroidProps {
  /** Image URL. Omit for a labelled placeholder. */
  src?: string;
  alt?: string;
  /** Handwritten caption beneath the photo. */
  caption?: React.ReactNode;
  /** CSS aspect-ratio of the photo well. Default "1 / 1". */
  ratio?: string;
  /** Frame width (number = px). */
  width?: number | string;
  /** Rotation in degrees. */
  rotate?: number;
  /** Force black & white (cover treatment). Photos are colour by default. */
  bw?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Polaroid(props: PolaroidProps): JSX.Element;
