import React from 'react';

/** @kind decoration */
export interface SpiralBindingProps {
  /** Bound edge. */
  edge?: 'top' | 'bottom' | 'left' | 'right';
  /** Number of coil loops. */
  rings?: number;
  /** Page tone. */
  tone?: 'paper' | 'cream' | 'aged';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SpiralBinding(props: SpiralBindingProps): JSX.Element;
