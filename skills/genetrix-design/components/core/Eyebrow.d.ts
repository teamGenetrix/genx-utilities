import * as React from 'react';
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional numbered prefix, e.g. "01". */
  number?: string;
  /** Use light text for dark backgrounds. */
  onDark?: boolean;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
