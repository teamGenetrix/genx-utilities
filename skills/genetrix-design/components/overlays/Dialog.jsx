import React from 'react';

/**
 * Modal dialog with scrim. Renders when `open`. Provide `title` and content
 * via children; `footer` for actions.
 */
export function Dialog({ open, onClose, title = null, children, footer = null, width = 480, style = {} }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(20,20,20,0.55)', backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        fontFamily: 'var(--gx-font)',
      }}
    >
      <div
        role="dialog" aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 'var(--gx-r-lg)', width, maxWidth: '100%',
          boxShadow: 'var(--gx-shadow-xl)', overflow: 'hidden', ...style,
        }}
      >
        {title && (
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '22px 24px 0' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{title}</h3>
            <button onClick={onClose} aria-label="Fermer" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--gx-text-muted)', padding: 4, marginTop: -2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
        )}
        <div style={{ padding: '16px 24px 24px', fontSize: 15, fontWeight: 300, color: 'var(--gx-text-muted)', lineHeight: 1.6 }}>
          {children}
        </div>
        {footer && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '0 24px 24px' }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
