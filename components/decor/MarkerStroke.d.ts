import React from 'react';

/** @kind decoration */
export interface MarkerStrokeProps {
  /** Which hand-drawn mark to render. */
  variant?: 'underline' | 'underline2' | 'strike' | 'slash' | 'circle' | 'highlight' | 'check';
  /** Stroke color — defaults to the brand marker red. */
  color?: string;
  /** Stroke width in SVG units. */
  thickness?: number;
  /** 0–1 opacity of the mark. */
  opacity?: number;
  /** CSS width (number = px). Underlines stretch to fill. */
  width?: number | string;
  /** CSS height (number = px). Defaults per variant. */
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export function MarkerStroke(props: MarkerStrokeProps): JSX.Element;
