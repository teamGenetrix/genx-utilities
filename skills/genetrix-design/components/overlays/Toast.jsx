import React from 'react';

/**
 * Transient notification. A dark surface with a red accent bar; optional
 * status tone tints the bar. Render one or stack several.
 */
export function Toast({ title = null, children, tone = 'accent', onClose = null, style = {} }) {
  const bar = { accent: 'var(--gx-accent)', success: 'var(--gx-success)', warning: 'var(--gx-warning)', danger: 'var(--gx-danger)' }[tone] || 'var(--gx-accent)';
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      background: 'var(--gx-noir)', color: '#fff', fontFamily: 'var(--gx-font)',
      borderRadius: 'var(--gx-r-md)', padding: '14px 16px', minWidth: 280, maxWidth: 420,
      boxShadow: 'var(--gx-shadow-xl)', position: 'relative', overflow: 'hidden', ...style,
    }}>
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: bar }} />
      <div style={{ flex: 1, paddingLeft: 4 }}>
        {title && <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>}
        <div style={{ fontSize: 13, fontWeight: 300, color: '#d9d9d9', lineHeight: 1.5, marginTop: title ? 2 : 0 }}>{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Fermer" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#9a9a9a', padding: 2 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      )}
    </div>
  );
}
