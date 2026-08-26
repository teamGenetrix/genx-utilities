import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean; accentTop?: boolean; interactive?: boolean; padding?: number | string;
}
/** @startingPoint section="Surfaces" subtitle="Light, dark and accent-top cards" viewport="700x220" */
export declare function Card(props: CardProps): JSX.Element;
