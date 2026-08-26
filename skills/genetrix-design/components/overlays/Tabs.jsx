import React from 'react';

/**
 * Underlined tab bar. The active tab carries a red underline rule.
 * `items`: [{ id, label }]. Controlled via `value` / `onChange`, or
 * uncontrolled with `defaultValue`.
 */
export function Tabs({ items = [], value, defaultValue, onChange, style = {}, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;
  const select = (id) => { if (!isControlled) setInternal(id); onChange && onChange(id); };
  return (
    <div role="tablist" style={{
      display: 'flex', gap: 4, borderBottom: '1px solid var(--gx-border)',
      fontFamily: 'var(--gx-font)', ...style,
    }} {...rest}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button key={it.id} role="tab" aria-selected={on} onClick={() => select(it.id)}
            style={{
              appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 14, fontWeight: on ? 600 : 500,
              color: on ? 'var(--gx-text)' : 'var(--gx-text-muted)',
              padding: '12px 14px', marginBottom: -1,
              borderBottom: `2px solid ${on ? 'var(--gx-accent)' : 'transparent'}`,
              transition: 'color var(--gx-dur) var(--gx-ease)',
            }}>
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
