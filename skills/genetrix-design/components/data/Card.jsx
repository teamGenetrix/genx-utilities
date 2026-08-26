import React from 'react';

/**
 * Surface container. Light by default; `dark` renders the noir card used on
 * covers and stat panels. `accentTop` adds the red top rule seen on pillar
 * and voice cards.
 */
export function Card({ children, dark = false, accentTop = false, interactive = false, padding = 24, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        position: 'relative', boxSizing: 'border-box',
        background: dark ? 'var(--gx-noir)' : '#fff',
        color: dark ? '#fff' : 'var(--gx-text)',
        border: dark ? '1px solid transparent' : '1px solid var(--gx-border)',
        borderTop: accentTop ? '4px solid var(--gx-accent)' : undefined,
        borderRadius: 'var(--gx-r-lg)', padding,
        boxShadow: dark ? 'var(--gx-shadow-xl)' : hover ? 'var(--gx-shadow-md)' : 'none',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--gx-dur) var(--gx-ease), transform var(--gx-dur) var(--gx-ease)',
        fontFamily: 'var(--gx-font)', ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
