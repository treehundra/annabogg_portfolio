import React from 'react';

/** @kind decoration */
export interface TornPaperProps {
  /** Which edges are ripped. */
  edges?: 'top' | 'bottom' | 'both';
  /** Paper tone. */
  tone?: 'paper' | 'cream' | 'aged';
  /** Tear depth in px. */
  amplitude?: number;
  /** Rotation in degrees. */
  rotate?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TornPaper(props: TornPaperProps): JSX.Element;
