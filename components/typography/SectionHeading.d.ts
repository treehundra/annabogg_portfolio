import React from 'react';

/** @kind component */
export interface SectionHeadingProps {
  /** The big uppercase word(s). */
  title: React.ReactNode;
  /** Italic serif subhead beneath. */
  subtitle?: React.ReactNode;
  /** Small mono index, e.g. "01". */
  index?: React.ReactNode;
  /** Draw a red marker underline beneath the title. */
  marker?: boolean;
  align?: 'left' | 'center' | 'right';
  /** Heading level 1–6 (renders h1…h6). */
  level?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
