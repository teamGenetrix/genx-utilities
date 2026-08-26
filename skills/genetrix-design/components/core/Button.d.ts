import * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. */
  variant?: 'primary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  /** Render as another element/component, e.g. "a". */
  as?: any;
}
/**
 * Genetrix primary action control — decisive red by default.
 * @startingPoint section="Core" subtitle="Buttons in every variant and size" viewport="700x150"
 */
export declare function Button(props: ButtonProps): JSX.Element;
