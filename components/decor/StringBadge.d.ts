import React from 'react';

/** @kind decoration */
export interface StringBadgeProps {
  /** Cord length in px. */
  cordLength?: number;
  /** Cord color. */
  cordColor?: string;
  /** Tag tone. `ink` gives an inverted black tag. */
  tone?: 'paper' | 'cream' | 'aged' | 'ink';
  /** Swing angle in degrees. */
  rotate?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function StringBadge(props: StringBadgeProps): JSX.Element;
