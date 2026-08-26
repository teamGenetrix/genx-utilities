import * as React from 'react';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: (() => void) | null; active?: boolean;
}
export declare function Tag(props: TagProps): JSX.Element;
