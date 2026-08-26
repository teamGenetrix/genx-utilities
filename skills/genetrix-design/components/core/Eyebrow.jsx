import React from 'react';

/**
 * The uppercase, letter-spaced overline that opens a section. Optional
 * numbered prefix (e.g. "01") and the signature red accent.
 */
export function Eyebrow({ children, number = null, onDark = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        fontFamily: 'var(--gx-font)', fontWeight: 600,
        fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: onDark ? '#b9b9b9' : 'var(--gx-text-muted)', ...style,
      }}
      {...rest}
    >
      {number && <span style={{ color: 'var(--gx-accent)', fontWeight: 900 }}>{number}</span>}
      {children}
    </div>
  );
}
