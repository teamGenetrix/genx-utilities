import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode; hint?: React.ReactNode; error?: React.ReactNode;
  prefix?: React.ReactNode; suffix?: React.ReactNode;
}
/** @startingPoint section="Forms" subtitle="Labeled fields, focus & error states" viewport="700x150" */
export declare function Input(props: InputProps): JSX.Element;
