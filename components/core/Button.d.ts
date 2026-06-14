import React from 'react';

/** @kind component */
export interface ButtonProps {
  /** Visual style. `marker` adds a red marker underline. */
  variant?: 'solid' | 'outline' | 'marker' | 'ghost';
  /** Size. */
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
