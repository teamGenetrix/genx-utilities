import * as React from 'react';
export interface TabItem { id: string; label: React.ReactNode; }
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>,'onChange'> {
  items: TabItem[]; value?: string; defaultValue?: string; onChange?: (id: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
