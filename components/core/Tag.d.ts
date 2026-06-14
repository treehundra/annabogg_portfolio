import React from 'react';

/** @kind component */
export interface TagProps {
  variant?: 'outline' | 'solid' | 'ghost';
  size?: 'sm' | 'md';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
