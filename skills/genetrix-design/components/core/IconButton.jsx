import React from 'react';

/**
 * Square icon-only control. Same variants as Button. Always pass an
 * `aria-label` — there is no text to name it.
 */
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = { sm: 32, md: 40, lg: 48 }[size] || 40;
  const palettes = {
    primary: { bg: 'var(--gx-accent)', bgHover: 'var(--gx-accent-hover)', fg: '#fff', border: 'transparent' },
    dark: { bg: 'var(--gx-noir)', bgHover: '#000', fg: '#fff', border: 'transparent' },
    outline: { bg: 'transparent', bgHover: 'var(--gx-gris-clr)', fg: 'var(--gx-text)', border: 'var(--gx-border)' },
    ghost: { bg: 'transparent', bgHover: 'var(--gx-gris-clr)', fg: 'var(--gx-text)', border: 'transparent' },
  };
  const p = palettes[variant] || palettes.ghost;
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, padding: 0,
        borderRadius: 'var(--gx-r-sm)',
        color: disabled ? 'var(--gx-text-muted)' : p.fg,
        background: disabled ? 'var(--gx-gris-clr)' : hover ? p.bgHover : p.bg,
        border: `1px solid ${p.border === 'transparent' ? 'transparent' : p.border}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--gx-dur) var(--gx-ease)', ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
