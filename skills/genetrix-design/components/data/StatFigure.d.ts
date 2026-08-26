import * as React from 'react';
export interface StatFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode; label?: React.ReactNode;
  prefix?: React.ReactNode; suffix?: React.ReactNode;
  onDark?: boolean; align?: 'left' | 'center' | 'right';
}
/** @startingPoint section="Data" subtitle="Le chiffre d'abord — key figure in red" viewport="700x180" */
export declare function StatFigure(props: StatFigureProps): JSX.Element;
