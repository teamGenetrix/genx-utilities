import React from 'react';

/**
 * "Le chiffre d'abord." A key figure set large in red, with a supporting
 * label. The brand's default way to state a result.
 */
export function StatFigure({ value, label = null, prefix = null, suffix = null, onDark = false, align = 'left', style = {}, ...rest }) {
  return (
    <div style={{ fontFamily: 'var(--gx-font)', textAlign: align, ...style }} {...rest}>
      <div style={{ fontWeight: 900, fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 0.95, color: 'var(--gx-accent)', letterSpacing: '-0.02em' }}>
        {prefix}{value}{suffix}
      </div>
      {label && (
        <div style={{
          marginTop: 8, fontWeight: 600, fontSize: 13, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: onDark ? '#bdbdbd' : 'var(--gx-text-muted)',
        }}>
          {label}
        </div>
      )}
    </div>
  );
}
