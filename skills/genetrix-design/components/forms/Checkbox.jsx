import React from 'react';

/** Checkbox with a red checked state and a text label. */
export function Checkbox({ label = null, checked, defaultChecked, onChange, disabled = false, id, style = {}, ...rest }) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label htmlFor={rid} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--gx-font)',
      fontSize: 15, fontWeight: 300, color: 'var(--gx-text)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: 5, flexShrink: 0,
        background: on ? 'var(--gx-accent)' : '#fff',
        border: `1px solid ${on ? 'var(--gx-accent)' : 'var(--gx-border)'}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--gx-dur) var(--gx-ease), border-color var(--gx-dur) var(--gx-ease)',
      }}>
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <input type="checkbox" id={rid} checked={on} onChange={toggle} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
