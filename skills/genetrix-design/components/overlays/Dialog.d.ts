import * as React from 'react';
export interface DialogProps {
  open: boolean; onClose?: () => void;
  title?: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode;
  width?: number; style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
