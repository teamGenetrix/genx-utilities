import React from 'react';

/** Hover/focus tooltip. Wraps its trigger children; `label` is the content. */
export function Tooltip({ label, children, placement = 'top', style = {} }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 },
  }[placement];
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', zIndex: 900, ...pos,
          background: 'var(--gx-noir)', color: '#fff', fontFamily: 'var(--gx-font)',
          fontSize: 12, fontWeight: 500, lineHeight: 1.4, letterSpacing: '0.01em',
          padding: '6px 10px', borderRadius: 'var(--gx-r-xs)', whiteSpace: 'nowrap',
          boxShadow: 'var(--gx-shadow-md)', ...style,
        }}>
          {label}
        </span>
      )}
    </span>
  );
}
