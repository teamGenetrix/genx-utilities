import React from 'react';

/** Native select styled to match Input, with a chevron affordance. */
export function Select({ label = null, hint = null, id, children, disabled = false, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--gx-font)' }}>
      {label && <label htmlFor={rid} style={{ fontSize: 13, fontWeight: 600, color: 'var(--gx-text)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          id={rid} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', appearance: 'none', WebkitAppearance: 'none',
            fontFamily: 'inherit', fontSize: 15, fontWeight: 300, color: 'var(--gx-text)',
            background: disabled ? 'var(--gx-gris-clr)' : '#fff',
            border: `1px solid ${focus ? 'var(--gx-noir)' : 'var(--gx-border)'}`,
            borderRadius: 'var(--gx-r-sm)', padding: '11px 38px 11px 12px', cursor: 'pointer',
            boxShadow: focus ? '0 0 0 3px var(--gx-focus-ring)' : 'none',
            transition: 'border-color var(--gx-dur) var(--gx-ease), box-shadow var(--gx-dur) var(--gx-ease)', ...style,
          }}
          {...rest}
        >
          {children}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gx-text-muted)" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {hint && <span style={{ fontSize: 12, color: 'var(--gx-text-muted)' }}>{hint}</span>}
    </div>
  );
}
