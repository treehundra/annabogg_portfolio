import React from 'react';

/** @kind decoration */
export interface ScrapCardProps {
  /** Paper tone. */
  tone?: 'paper' | 'cream' | 'aged';
  /** Rotation in degrees (scrapbook tilt). */
  rotate?: number;
  /** Lift + raise shadow on hover. */
  interactive?: boolean;
  /** Heavy black editorial frame instead of a hairline. */
  framed?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrapCard(props: ScrapCardProps): JSX.Element;
