import React from 'react';

const sizes = {
  sm: { padding: '8px 16px', fontSize: 13, gap: 6 },
  md: { padding: '11px 22px', fontSize: 14, gap: 8 },
  lg: { padding: '15px 30px', fontSize: 16, gap: 10 },
};

const palettes = {
  primary: { bg: 'var(--gx-accent)', bgHover: 'var(--gx-accent-hover)', bgActive: 'var(--gx-accent-active)', fg: 'var(--gx-text-on-accent)', border: 'transparent' },
  dark: { bg: 'var(--gx-noir)', bgHover: '#000', bgActive: '#000', fg: '#fff', border: 'transparent' },
  outline: { bg: 'transparent', bgHover: 'var(--gx-gris-clr)', bgActive: '#e6e6e6', fg: 'var(--gx-text)', border: 'var(--gx-noir)' },
  ghost: { bg: 'transparent', bgHover: 'var(--gx-gris-clr)', bgActive: '#e6e6e6', fg: 'var(--gx-text)', border: 'transparent' },
};

/**
 * Genetrix primary action control. Decisive red by default; dark, outline and
 * ghost variants for secondary and tertiary actions.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const p = palettes[variant] || palettes.primary;
  const bg = disabled
    ? (variant === 'primary' ? 'var(--gx-accent-disabled)' : 'var(--gx-gris-clr)')
    : active ? p.bgActive : hover ? p.bgHover : p.bg;

  const Tag = as;
  return (
    <Tag
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--gx-font)', fontWeight: 600, fontSize: s.fontSize,
        letterSpacing: '0.01em', lineHeight: 1,
        padding: s.padding, borderRadius: 'var(--gx-r-sm)',
        color: disabled ? (variant === 'primary' ? '#fff' : 'var(--gx-text-muted)') : p.fg,
        background: bg,
        border: `1px solid ${p.border === 'transparent' ? 'transparent' : (disabled ? 'var(--gx-border)' : p.border)}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--gx-dur) var(--gx-ease), color var(--gx-dur) var(--gx-ease)',
        textDecoration: 'none', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </Tag>
  );
}
