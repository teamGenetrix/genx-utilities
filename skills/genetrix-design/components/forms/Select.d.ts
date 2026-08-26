import * as React from 'react';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode; hint?: React.ReactNode;
}
export declare function Select(props: SelectProps): JSX.Element;
