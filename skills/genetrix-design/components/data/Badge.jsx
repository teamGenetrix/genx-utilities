import React from 'react';

const tones = {
  neutral: { bg: 'var(--gx-gris-clr)', fg: 'var(--gx-text)' },
  accent:  { bg: 'var(--gx-rose)', fg: 'var(--gx-accent-active)' },
  success: { bg: 'var(--gx-success-bg)', fg: 'var(--gx-success)' },
  warning: { bg: 'var(--gx-warning-bg)', fg: 'var(--gx-warning)' },
  danger:  { bg: 'var(--gx-danger-bg)', fg: 'var(--gx-danger)' },
  solid:   { bg: 'var(--gx-accent)', fg: '#fff' },
};

/** Small status / category pill. */
export function Badge({ children, tone = 'neutral', style = {}, ...rest }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontFamily: 'var(--gx-font)', fontWeight: 600, fontSize: 11, letterSpacing: '0.03em',
      padding: '4px 10px', borderRadius: 'var(--gx-r-pill)',
      background: t.bg, color: t.fg, ...style,
    }} {...rest}>
      {children}
    </span>
  );
}
