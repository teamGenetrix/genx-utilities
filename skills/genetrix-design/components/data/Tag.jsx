import React from 'react';

/**
 * Outlined keyword chip, optionally removable. Squarer than a Badge; used for
 * filters, expertise areas and metadata.
 */
export function Tag({ children, onRemove = null, active = false, style = {}, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--gx-font)', fontWeight: 500, fontSize: 12.5,
      padding: '5px 12px', borderRadius: 'var(--gx-r-sm)',
      background: active ? 'var(--gx-noir)' : '#fff',
      color: active ? '#fff' : 'var(--gx-text)',
      border: `1px solid ${active ? 'var(--gx-noir)' : 'var(--gx-border)'}`, ...style,
    }} {...rest}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Retirer" style={{
          display: 'inline-flex', border: 'none', background: 'transparent', padding: 0,
          cursor: 'pointer', color: 'inherit', opacity: 0.6,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  );
}
