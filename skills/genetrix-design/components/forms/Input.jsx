import React from 'react';

/**
 * Text field with optional label, hint and error. Red focus ring; error
 * state borrows the brand red.
 */
export function Input({
  label = null, hint = null, error = null, id,
  prefix = null, suffix = null, disabled = false,
  style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const invalid = !!error;
  const borderColor = invalid ? 'var(--gx-accent)' : focus ? 'var(--gx-noir)' : 'var(--gx-border)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--gx-font)' }}>
      {label && (
        <label htmlFor={rid} style={{ fontSize: 13, fontWeight: 600, color: 'var(--gx-text)' }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: disabled ? 'var(--gx-gris-clr)' : '#fff',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--gx-r-sm)',
        padding: '0 12px',
        boxShadow: focus && !invalid ? '0 0 0 3px var(--gx-focus-ring)' : 'none',
        transition: 'border-color var(--gx-dur) var(--gx-ease), box-shadow var(--gx-dur) var(--gx-ease)',
      }}>
        {prefix && <span style={{ color: 'var(--gx-text-muted)', display: 'inline-flex' }}>{prefix}</span>}
        <input
          id={rid} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: 15, fontWeight: 300, color: 'var(--gx-text)',
            padding: '11px 0', minWidth: 0, ...style,
          }}
          {...rest}
        />
        {suffix && <span style={{ color: 'var(--gx-text-muted)', display: 'inline-flex' }}>{suffix}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12, color: invalid ? 'var(--gx-accent)' : 'var(--gx-text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
