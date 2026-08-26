import * as React from 'react';
export interface ToastProps {
  title?: React.ReactNode; children?: React.ReactNode;
  tone?: 'accent' | 'success' | 'warning' | 'danger';
  onClose?: (() => void) | null; style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
