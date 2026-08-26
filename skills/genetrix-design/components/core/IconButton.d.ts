import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Required for accessibility — names the icon-only control. */
  'aria-label': string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
