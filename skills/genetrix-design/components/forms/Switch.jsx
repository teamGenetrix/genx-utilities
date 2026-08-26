import React from 'react';

/** On/off switch. Track turns red when on. */
export function Switch({ checked, defaultChecked, onChange, disabled = false, label = null, id, style = {}, ...rest }) {
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
        width: 40, height: 22, borderRadius: 999, flexShrink: 0, position: 'relative',
        background: on ? 'var(--gx-accent)' : '#cfcfcf',
        transition: 'background var(--gx-dur) var(--gx-ease)',
      }}>
        <span style={{
          position: 'absolute', top: 2, left: 2, width: 18, height: 18, borderRadius: '50%',
          background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,.3)',
          transform: on ? 'translateX(18px)' : 'translateX(0)',
          transition: 'transform var(--gx-dur) var(--gx-ease)',
        }} />
      </span>
      <input type="checkbox" role="switch" id={rid} checked={on} onChange={toggle} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
