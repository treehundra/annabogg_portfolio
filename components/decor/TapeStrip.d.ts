import React from 'react';

/** @kind decoration */
export interface TapeStripProps {
  /** Tape tint. */
  variant?: 'warm' | 'cool' | 'paper';
  /** Width (number = px). */
  width?: number | string;
  /** Rotation in degrees. */
  rotate?: number;
  /** Optional short label (renders in the hand font). */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TapeStrip(props: TapeStripProps): JSX.Element;
