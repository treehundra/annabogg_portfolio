import React from 'react';

/** @kind component */
export interface BadgeProps {
  variant?: 'outline' | 'solid' | 'plain';
  /** Show a leading red marker dot — the one place red appears as a fill, sized tiny like an ink spot. */
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
