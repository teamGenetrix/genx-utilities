import React from 'react';

/** Radio control for single-choice groups. Red selected dot. */
export function Radio({ label = null, checked, defaultChecked, onChange, name, value, disabled = false, id, style = {}, ...rest }) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const change = (e) => { if (disabled) return; if (!isControlled) setInternal(true); onChange && onChange(e); };
  return (
    <label htmlFor={rid} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--gx-font)',
      fontSize: 15, fontWeight: 300, color: 'var(--gx-text)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
        border: `1px solid ${on ? 'var(--gx-accent)' : 'var(--gx-border)'}`,
        background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color var(--gx-dur) var(--gx-ease)',
      }}>
        <span style={{
          width: 10, height: 10, borderRadius: '50%', background: 'var(--gx-accent)',
          transform: on ? 'scale(1)' : 'scale(0)', transition: 'transform var(--gx-dur) var(--gx-ease)',
        }} />
      </span>
      <input type="radio" id={rid} name={name} value={value} checked={on} onChange={change} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
