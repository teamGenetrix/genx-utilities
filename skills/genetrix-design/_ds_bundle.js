/* @ds-bundle: {"format":4,"namespace":"GenetrixDesignSystem_ba57d8","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StatFigure","sourcePath":"components/data/StatFigure.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/overlays/Tabs.jsx"},{"name":"Toast","sourcePath":"components/overlays/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/core/Button.jsx":"7f7082aa2932","components/core/Eyebrow.jsx":"0b41ee613c5d","components/core/IconButton.jsx":"1805b16194d6","components/data/Badge.jsx":"3afc746980e0","components/data/Card.jsx":"93363baf6b91","components/data/StatFigure.jsx":"3ef2124591a3","components/data/Tag.jsx":"df687c113fea","components/forms/Checkbox.jsx":"6fa29db97792","components/forms/Input.jsx":"8cdba21756bd","components/forms/Radio.jsx":"447ab38021c6","components/forms/Select.jsx":"f60018f506c8","components/forms/Switch.jsx":"89e32dcbb215","components/overlays/Dialog.jsx":"d8e44a938407","components/overlays/Tabs.jsx":"8198bc90d388","components/overlays/Toast.jsx":"58010d6a25b6","components/overlays/Tooltip.jsx":"a5435a222f91","ui_kits/marketing-site/App.jsx":"b9ba749a6eb2","ui_kits/marketing-site/Sections.jsx":"e0409838e5f8","ui_kits/slides/Slides.jsx":"308fdacba894"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GenetrixDesignSystem_ba57d8 = window.GenetrixDesignSystem_ba57d8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 13,
    gap: 6
  },
  md: {
    padding: '11px 22px',
    fontSize: 14,
    gap: 8
  },
  lg: {
    padding: '15px 30px',
    fontSize: 16,
    gap: 10
  }
};
const palettes = {
  primary: {
    bg: 'var(--gx-accent)',
    bgHover: 'var(--gx-accent-hover)',
    bgActive: 'var(--gx-accent-active)',
    fg: 'var(--gx-text-on-accent)',
    border: 'transparent'
  },
  dark: {
    bg: 'var(--gx-noir)',
    bgHover: '#000',
    bgActive: '#000',
    fg: '#fff',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    bgHover: 'var(--gx-gris-clr)',
    bgActive: '#e6e6e6',
    fg: 'var(--gx-text)',
    border: 'var(--gx-noir)'
  },
  ghost: {
    bg: 'transparent',
    bgHover: 'var(--gx-gris-clr)',
    bgActive: '#e6e6e6',
    fg: 'var(--gx-text)',
    border: 'transparent'
  }
};

/**
 * Genetrix primary action control. Decisive red by default; dark, outline and
 * ghost variants for secondary and tertiary actions.
 */
function Button({
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
  const bg = disabled ? variant === 'primary' ? 'var(--gx-accent-disabled)' : 'var(--gx-gris-clr)' : active ? p.bgActive : hover ? p.bgHover : p.bg;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--gx-font)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '0.01em',
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--gx-r-sm)',
      color: disabled ? variant === 'primary' ? '#fff' : 'var(--gx-text-muted)' : p.fg,
      background: bg,
      border: `1px solid ${p.border === 'transparent' ? 'transparent' : disabled ? 'var(--gx-border)' : p.border}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--gx-dur) var(--gx-ease), color var(--gx-dur) var(--gx-ease)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The uppercase, letter-spaced overline that opens a section. Optional
 * numbered prefix (e.g. "01") and the signature red accent.
 */
function Eyebrow({
  children,
  number = null,
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--gx-font)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: onDark ? '#b9b9b9' : 'var(--gx-text-muted)',
      ...style
    }
  }, rest), number && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)',
      fontWeight: 900
    }
  }, number), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only control. Same variants as Button. Always pass an
 * `aria-label` — there is no text to name it.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const palettes = {
    primary: {
      bg: 'var(--gx-accent)',
      bgHover: 'var(--gx-accent-hover)',
      fg: '#fff',
      border: 'transparent'
    },
    dark: {
      bg: 'var(--gx-noir)',
      bgHover: '#000',
      fg: '#fff',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'var(--gx-gris-clr)',
      fg: 'var(--gx-text)',
      border: 'var(--gx-border)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--gx-gris-clr)',
      fg: 'var(--gx-text)',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: 'var(--gx-r-sm)',
      color: disabled ? 'var(--gx-text-muted)' : p.fg,
      background: disabled ? 'var(--gx-gris-clr)' : hover ? p.bgHover : p.bg,
      border: `1px solid ${p.border === 'transparent' ? 'transparent' : p.border}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--gx-dur) var(--gx-ease)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--gx-gris-clr)',
    fg: 'var(--gx-text)'
  },
  accent: {
    bg: 'var(--gx-rose)',
    fg: 'var(--gx-accent-active)'
  },
  success: {
    bg: 'var(--gx-success-bg)',
    fg: 'var(--gx-success)'
  },
  warning: {
    bg: 'var(--gx-warning-bg)',
    fg: 'var(--gx-warning)'
  },
  danger: {
    bg: 'var(--gx-danger-bg)',
    fg: 'var(--gx-danger)'
  },
  solid: {
    bg: 'var(--gx-accent)',
    fg: '#fff'
  }
};

/** Small status / category pill. */
function Badge({
  children,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--gx-font)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.03em',
      padding: '4px 10px',
      borderRadius: 'var(--gx-r-pill)',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Light by default; `dark` renders the noir card used on
 * covers and stat panels. `accentTop` adds the red top rule seen on pillar
 * and voice cards.
 */
function Card({
  children,
  dark = false,
  accentTop = false,
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      background: dark ? 'var(--gx-noir)' : '#fff',
      color: dark ? '#fff' : 'var(--gx-text)',
      border: dark ? '1px solid transparent' : '1px solid var(--gx-border)',
      borderTop: accentTop ? '4px solid var(--gx-accent)' : undefined,
      borderRadius: 'var(--gx-r-lg)',
      padding,
      boxShadow: dark ? 'var(--gx-shadow-xl)' : hover ? 'var(--gx-shadow-md)' : 'none',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--gx-dur) var(--gx-ease), transform var(--gx-dur) var(--gx-ease)',
      fontFamily: 'var(--gx-font)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Le chiffre d'abord." A key figure set large in red, with a supporting
 * label. The brand's default way to state a result.
 */
function StatFigure({
  value,
  label = null,
  prefix = null,
  suffix = null,
  onDark = false,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--gx-font)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 'clamp(40px, 6vw, 64px)',
      lineHeight: 0.95,
      color: 'var(--gx-accent)',
      letterSpacing: '-0.02em'
    }
  }, prefix, value, suffix), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: onDark ? '#bdbdbd' : 'var(--gx-text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outlined keyword chip, optionally removable. Squarer than a Badge; used for
 * filters, expertise areas and metadata.
 */
function Tag({
  children,
  onRemove = null,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--gx-font)',
      fontWeight: 500,
      fontSize: 12.5,
      padding: '5px 12px',
      borderRadius: 'var(--gx-r-sm)',
      background: active ? 'var(--gx-noir)' : '#fff',
      color: active ? '#fff' : 'var(--gx-text)',
      border: `1px solid ${active ? 'var(--gx-noir)' : 'var(--gx-border)'}`,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Retirer",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with a red checked state and a text label. */
function Checkbox({
  label = null,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--gx-font)',
      fontSize: 15,
      fontWeight: 300,
      color: 'var(--gx-text)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 5,
      flexShrink: 0,
      background: on ? 'var(--gx-accent)' : '#fff',
      border: `1px solid ${on ? 'var(--gx-accent)' : 'var(--gx-border)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--gx-dur) var(--gx-ease), border-color var(--gx-dur) var(--gx-ease)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: rid,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field with optional label, hint and error. Red focus ring; error
 * state borrows the brand red.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  id,
  prefix = null,
  suffix = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const invalid = !!error;
  const borderColor = invalid ? 'var(--gx-accent)' : focus ? 'var(--gx-noir)' : 'var(--gx-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--gx-font)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--gx-text)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--gx-gris-clr)' : '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--gx-r-sm)',
      padding: '0 12px',
      boxShadow: focus && !invalid ? '0 0 0 3px var(--gx-focus-ring)' : 'none',
      transition: 'border-color var(--gx-dur) var(--gx-ease), box-shadow var(--gx-dur) var(--gx-ease)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-text-muted)',
      display: 'inline-flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 15,
      fontWeight: 300,
      color: 'var(--gx-text)',
      padding: '11px 0',
      minWidth: 0,
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-text-muted)',
      display: 'inline-flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: invalid ? 'var(--gx-accent)' : 'var(--gx-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio control for single-choice groups. Red selected dot. */
function Radio({
  label = null,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const change = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--gx-font)',
      fontSize: 15,
      fontWeight: 300,
      color: 'var(--gx-text)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      flexShrink: 0,
      border: `1px solid ${on ? 'var(--gx-accent)' : 'var(--gx-border)'}`,
      background: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--gx-dur) var(--gx-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--gx-accent)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--gx-dur) var(--gx-ease)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: rid,
    name: name,
    value: value,
    checked: on,
    onChange: change,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input, with a chevron affordance. */
function Select({
  label = null,
  hint = null,
  id,
  children,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--gx-font)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--gx-text)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'inherit',
      fontSize: 15,
      fontWeight: 300,
      color: 'var(--gx-text)',
      background: disabled ? 'var(--gx-gris-clr)' : '#fff',
      border: `1px solid ${focus ? 'var(--gx-noir)' : 'var(--gx-border)'}`,
      borderRadius: 'var(--gx-r-sm)',
      padding: '11px 38px 11px 12px',
      cursor: 'pointer',
      boxShadow: focus ? '0 0 0 3px var(--gx-focus-ring)' : 'none',
      transition: 'border-color var(--gx-dur) var(--gx-ease), box-shadow var(--gx-dur) var(--gx-ease)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gx-text-muted)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--gx-text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off switch. Track turns red when on. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label = null,
  id,
  style = {},
  ...rest
}) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--gx-font)',
      fontSize: 15,
      fontWeight: 300,
      color: 'var(--gx-text)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      flexShrink: 0,
      position: 'relative',
      background: on ? 'var(--gx-accent)' : '#cfcfcf',
      transition: 'background var(--gx-dur) var(--gx-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,.3)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--gx-dur) var(--gx-ease)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: rid,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
/**
 * Modal dialog with scrim. Renders when `open`. Provide `title` and content
 * via children; `footer` for actions.
 */
function Dialog({
  open,
  onClose,
  title = null,
  children,
  footer = null,
  width = 480,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(20,20,20,0.55)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      fontFamily: 'var(--gx-font)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--gx-r-lg)',
      width,
      maxWidth: '100%',
      boxShadow: 'var(--gx-shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '22px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 900,
      letterSpacing: '-0.01em',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--gx-text-muted)',
      padding: 4,
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 24px',
      fontSize: 15,
      fontWeight: 300,
      color: 'var(--gx-text-muted)',
      lineHeight: 1.6
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '0 24px 24px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underlined tab bar. The active tab carries a red underline rule.
 * `items`: [{ id, label }]. Controlled via `value` / `onChange`, or
 * uncontrolled with `defaultValue`.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--gx-border)',
      fontFamily: 'var(--gx-font)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        appearance: 'none',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? 'var(--gx-text)' : 'var(--gx-text-muted)',
        padding: '12px 14px',
        marginBottom: -1,
        borderBottom: `2px solid ${on ? 'var(--gx-accent)' : 'transparent'}`,
        transition: 'color var(--gx-dur) var(--gx-ease)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Toast.jsx
try { (() => {
/**
 * Transient notification. A dark surface with a red accent bar; optional
 * status tone tints the bar. Render one or stack several.
 */
function Toast({
  title = null,
  children,
  tone = 'accent',
  onClose = null,
  style = {}
}) {
  const bar = {
    accent: 'var(--gx-accent)',
    success: 'var(--gx-success)',
    warning: 'var(--gx-warning)',
    danger: 'var(--gx-danger)'
  }[tone] || 'var(--gx-accent)';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--gx-noir)',
      color: '#fff',
      fontFamily: 'var(--gx-font)',
      borderRadius: 'var(--gx-r-md)',
      padding: '14px 16px',
      minWidth: 280,
      maxWidth: 420,
      boxShadow: 'var(--gx-shadow-xl)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingLeft: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 300,
      color: '#d9d9d9',
      lineHeight: 1.5,
      marginTop: title ? 2 : 0
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: '#9a9a9a',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
/** Hover/focus tooltip. Wraps its trigger children; `label` is the content. */
function Tooltip({
  label,
  children,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos,
      background: 'var(--gx-noir)',
      color: '#fff',
      fontFamily: 'var(--gx-font)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.01em',
      padding: '6px 10px',
      borderRadius: 'var(--gx-r-xs)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--gx-shadow-md)',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/App.jsx
try { (() => {
const NS2 = window.GenetrixDesignSystem_ba57d8;
const {
  Dialog,
  Toast,
  Button
} = NS2;
function App() {
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(false), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const openContact = () => document.getElementById('Résultats').scrollTo ? window.scrollTo({
    top: document.getElementById('Résultats').offsetTop - 60,
    behavior: 'smooth'
  }) : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.GxHeader, {
    onContact: () => setDialog(true)
  }), /*#__PURE__*/React.createElement(window.GxHero, {
    onContact: () => setDialog(true)
  }), /*#__PURE__*/React.createElement(window.GxPillars, null), /*#__PURE__*/React.createElement(window.GxOffer, {
    onContact: () => setDialog(true)
  }), /*#__PURE__*/React.createElement(window.GxContact, {
    onSubmit: () => setToast(true)
  }), /*#__PURE__*/React.createElement(window.GxFooter, null), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: () => setDialog(false),
    title: "Prendre rendez-vous",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDialog(false)
    }, "Plus tard"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setDialog(false);
        setToast(true);
      }
    }, "Confirmer"))
  }, "R\xE9servez un premier \xE9change de 30 minutes avec un consultant Genetrix. Nous revenons vers vous sous 48h pour caler un cr\xE9neau."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 1100
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "Demande envoy\xE9e",
    tone: "success",
    onClose: () => setToast(false)
  }, "Merci \u2014 nous revenons vers vous sous 48h.")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
/* Genetrix marketing site — sections. Each is exported to window for the
   Babel scope. Uses DS primitives via window[NS]. */
const NS = window.GenetrixDesignSystem_ba57d8;
const {
  Button,
  IconButton,
  Eyebrow,
  Card,
  StatFigure,
  Badge,
  Tag,
  Input,
  Select,
  Tabs,
  Dialog,
  Toast,
  Tooltip
} = NS;

/* Lucide-style inline line icons (stroke, rounded). Substitute for the brand's
   custom 3px icon set — see readme Iconography. */
const ICON_PATHS = {
  'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 6-10 7L2 6"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M6 3h4l2 5-2.5 1.8a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z"
  }),
  'map-pin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 4.5-8 12-8 12s-8-7.5-8-12a8 8 0 0 1 16 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.6"
  }))
};
const LI = ({
  n,
  size = 18,
  color = 'currentColor',
  sw = 2
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    display: 'inline-flex',
    flexShrink: 0
  }
}, ICON_PATHS[n]);
const wrap = {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 32px'
};
function Header({
  onContact
}) {
  const [open, setOpen] = React.useState(false);
  const links = ['Approche', 'Piliers', 'Offres', 'Résultats'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(20,20,20,0.96)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #262626'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      height: 68
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-blanc.png",
    alt: "Genetrix",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l,
    style: {
      color: '#d6d6d6',
      textDecoration: 'none',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.02em',
      padding: '8px 12px',
      borderRadius: 16
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#2a2a2a';
      e.currentTarget.style.color = '#fff';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#d6d6d6';
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onContact
  }, "Prendre rendez-vous")));
}
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "Approche",
    style: {
      position: 'relative',
      background: 'var(--gx-noir)',
      color: '#fff',
      overflow: 'hidden',
      padding: '110px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-blanc.png",
    alt: "",
    style: {
      position: 'absolute',
      right: '-6%',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '150%',
      opacity: 0.05,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      letterSpacing: '0.4em',
      textTransform: 'uppercase',
      fontSize: 11,
      color: '#b9b9b9',
      marginBottom: 26
    }
  }, "Consulting \xB7 Training \xB7 Coaching"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 'clamp(40px,7vw,80px)',
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      maxWidth: 900
    }
  }, "L\xE0 o\xF9 le potentiel", /*#__PURE__*/React.createElement("br", null), "devient performance", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 'clamp(17px,2.2vw,22px)',
      color: '#d9d9d9',
      maxWidth: 620,
      marginTop: 26,
      lineHeight: 1.6
    }
  }, "De la strat\xE9gie \xE0 l'ex\xE9cution, nous transformons le potentiel de vos \xE9quipes en r\xE9sultats durables \u2014 sur le terrain, avec vos \xE9quipes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onContact,
    iconRight: /*#__PURE__*/React.createElement(LI, {
      n: "arrow-right",
      size: 18,
      color: "#fff"
    })
  }, "D\xE9marrer un diagnostic"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    as: "a",
    href: "#Piliers",
    style: {
      color: '#fff',
      borderColor: '#4a4a4a'
    }
  }, "Voir les 11 piliers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 56,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "100",
    label: "organisations accompagn\xE9es",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "98",
    suffix: "%",
    label: "de satisfaction",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "15",
    label: "ans d'expertise",
    onDark: true
  }))));
}
const PILLARS = [['01', 'Stratégie et planification', 'Cap clair, priorités posées, feuille de route alignée.'], ['02', 'Leadership et culture', 'Un management qui engage et responsabilise les équipes.'], ['03', 'Gestion de la performance', 'Objectifs mesurables, rituels de suivi, cap tenu.'], ['04', 'Processus et standards', 'Des façons de faire stables, documentées, partagées.'], ['05', 'Amélioration continue', 'Le progrès comme routine, pas comme projet ponctuel.'], ['06', 'Gestion des talents', 'Les bonnes compétences, au bon endroit, au bon moment.'], ['07', 'Orientation client', 'La valeur définie par le client, mesurée en continu.'], ['08', 'Qualité et conformité', 'La rigueur au service de la confiance et du résultat.'], ['09', 'Gestion des risques', 'Anticiper, décider, protéger la performance.'], ['10', 'Innovation et agilité', 'Tester vite, apprendre, industrialiser ce qui marche.'], ['11', 'Pilotage par la donnée', 'Le chiffre d\'abord : décider sur des faits.']];
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "Piliers",
    style: {
      background: '#fff',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "08",
    style: {
      marginBottom: 16
    }
  }, "Les piliers de l'excellence"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 'clamp(30px,4.5vw,44px)',
      letterSpacing: '-0.01em',
      maxWidth: 20 + 'ch'
    }
  }, "Onze leviers, une m\xEAme coh\xE9rence", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gx-text-muted)',
      maxWidth: '62ch',
      marginTop: 18,
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.6
    }
  }, "L'excellence op\xE9rationnelle est une culture syst\xE9mique : chaque pilier compte, mais c'est leur coh\xE9rence qui fait la performance globale."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))',
      gap: 16,
      marginTop: 40
    }
  }, PILLARS.map(([no, title, desc]) => /*#__PURE__*/React.createElement(Card, {
    key: no,
    accentTop: true,
    interactive: true,
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gx-accent)',
      fontWeight: 900,
      fontSize: 12
    }
  }, no), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '6px 0 0',
      fontSize: 15.5,
      fontWeight: 900,
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--gx-text-muted)',
      fontSize: 13,
      lineHeight: 1.55
    }
  }, desc))))));
}
function Offer({
  onContact
}) {
  const [tab, setTab] = React.useState('consulting');
  const data = {
    consulting: {
      t: 'Diagnostiquer, décider, exécuter',
      p: 'Nous structurons vos priorités et vous accompagnons de la décision jusqu\'aux résultats sur le terrain.',
      items: ['Diagnostic d\'excellence opérationnelle', 'Feuille de route et pilotage', 'Optimisation des processus', 'Transformation organisationnelle']
    },
    training: {
      t: 'Des compétences qui restent chez vous',
      p: 'Des parcours de formation-action, ancrés dans vos cas réels, pour que le savoir-faire reste dans l\'entreprise.',
      items: ['Management et leadership', 'Lean et amélioration continue', 'Gestion de projet', 'Parcours sur mesure']
    },
    coaching: {
      t: 'Accompagner dirigeants et équipes',
      p: 'Un coaching individuel et collectif orienté résultats, pour lever les freins et tenir le cap.',
      items: ['Coaching de dirigeants', 'Coaching d\'équipe', 'Accompagnement du changement', 'Codéveloppement']
    }
  };
  const d = data[tab];
  return /*#__PURE__*/React.createElement("section", {
    id: "Offres",
    style: {
      background: 'var(--gx-gris-clr)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "02",
    style: {
      marginBottom: 16
    }
  }, "Nos offres"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 28px',
      fontWeight: 900,
      fontSize: 'clamp(30px,4.5vw,44px)',
      letterSpacing: '-0.01em'
    }
  }, "Trois m\xE9tiers, une exigence", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'consulting',
      label: 'Consulting'
    }, {
      id: 'training',
      label: 'Training'
    }, {
      id: 'coaching',
      label: 'Coaching'
    }],
    value: tab,
    onChange: setTab,
    style: {
      maxWidth: 460
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 40,
      marginTop: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 26,
      letterSpacing: '-0.01em'
    }
  }, d.t, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gx-text-muted)',
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: '48ch'
    }
  }, d.p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 20
    }
  }, d.items.map(i => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, i))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: onContact,
    iconRight: /*#__PURE__*/React.createElement(LI, {
      n: "arrow-right",
      size: 16,
      color: "#fff"
    })
  }, "Parler de votre projet"))), /*#__PURE__*/React.createElement(Card, {
    dark: true,
    padding: 32
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true,
    style: {
      marginBottom: 18
    }
  }, "Impact mesur\xE9"), /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "30",
    suffix: "%",
    label: "de productivit\xE9 gagn\xE9e",
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#2c2c2c',
      margin: '22px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#cfcfcf',
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.7,
      margin: 0
    }
  }, "\xAB Genetrix nous a fait passer de la strat\xE9gie \xE0 l'ex\xE9cution, avec des r\xE9sultats visibles en moins de six mois. \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#9a9a9a',
      fontSize: 12,
      marginTop: 14,
      letterSpacing: '0.04em'
    }
  }, "Direction G\xE9n\xE9rale \xB7 Industrie")))));
}
function Contact({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "R\xE9sultats",
    style: {
      background: '#fff',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "11",
    style: {
      marginBottom: 16
    }
  }, "Passons \xE0 l'action"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 'clamp(30px,4.5vw,44px)',
      letterSpacing: '-0.01em'
    }
  }, "Combler l'\xE9cart entre potentiel et r\xE9sultats", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gx-text-muted)',
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: '46ch'
    }
  }, "Un premier \xE9change de 30 minutes pour cadrer votre enjeu. Sans engagement."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 28
    }
  }, [['mail', 'contact@genetrix.ci'], ['phone', '+225 00 00 00 00'], ['map-pin', 'Abidjan, Côte d\'Ivoire']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--gx-text)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, /*#__PURE__*/React.createElement(LI, {
    n: ic,
    size: 18,
    color: "var(--gx-accent)"
  })), t)))), /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    style: {
      boxShadow: 'var(--gx-shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom",
    placeholder: "Konan",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Organisation",
    placeholder: "Votre entreprise"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email professionnel",
    type: "email",
    placeholder: "vous@entreprise.ci",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service souhait\xE9"
  }, /*#__PURE__*/React.createElement("option", null, "Consulting"), /*#__PURE__*/React.createElement("option", null, "Training"), /*#__PURE__*/React.createElement("option", null, "Coaching"), /*#__PURE__*/React.createElement("option", null, "Je ne sais pas encore")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    type: "submit"
  }, "Demander un rendez-vous")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gx-noir)',
      color: '#b6b6b6',
      padding: '64px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-blanc.png",
    alt: "Genetrix",
    style: {
      height: 34,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '40ch',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.7,
      margin: 0
    }
  }, "L\xE0 o\xF9 le potentiel devient performance", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, "."), " Consulting, training et coaching pour l'excellence op\xE9rationnelle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff',
      display: 'block',
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 11
    }
  }, "Offres"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, "Consulting", /*#__PURE__*/React.createElement("span", null, "Training"), /*#__PURE__*/React.createElement("span", null, "Coaching"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff',
      display: 'block',
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 11
    }
  }, "Cabinet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, "Approche", /*#__PURE__*/React.createElement("span", null, "Piliers"), /*#__PURE__*/React.createElement("span", null, "R\xE9sultats"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #262626',
      marginTop: 40,
      paddingTop: 20,
      fontSize: 12,
      color: '#7a7a7a'
    }
  }, "\xA9 2026 Genetrix \xB7 Abidjan, C\xF4te d'Ivoire")));
}
Object.assign(window, {
  GxHeader: Header,
  GxHero: Hero,
  GxPillars: Pillars,
  GxOffer: Offer,
  GxContact: Contact,
  GxFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/Slides.jsx
try { (() => {
const NSS = window.GenetrixDesignSystem_ba57d8;
const {
  Eyebrow,
  StatFigure,
  Badge
} = NSS;
const FRAME = {
  width: 1280,
  height: 720,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'var(--gx-font)'
};
const PAD = 88;
const Foot = ({
  n,
  dark
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: PAD,
    bottom: 40,
    fontSize: 12,
    letterSpacing: '0.14em',
    color: dark ? '#8a8a8a' : 'var(--gx-text-muted)',
    fontWeight: 600
  }
}, "GENETRIX \xB7 ", n);
const Gwm = () => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo-full-blanc.png",
  alt: "",
  style: {
    position: 'absolute',
    right: '-4%',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '150%',
    opacity: 0.05,
    pointerEvents: 'none'
  }
});
function TitleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: 'var(--gx-noir)',
      color: '#fff',
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Gwm, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-blanc.png",
    alt: "Genetrix",
    style: {
      height: 40,
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      letterSpacing: '0.4em',
      textTransform: 'uppercase',
      fontSize: 13,
      color: '#b9b9b9',
      marginBottom: 24
    }
  }, "Excellence op\xE9rationnelle"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 76,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      maxWidth: '16ch'
    }
  }, "L\xE0 o\xF9 le potentiel devient performance", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 22,
      color: '#d9d9d9',
      marginTop: 30,
      maxWidth: '52ch',
      lineHeight: 1.5
    }
  }, "De la strat\xE9gie \xE0 l'ex\xE9cution, avec vos \xE9quipes, sur le terrain.")), /*#__PURE__*/React.createElement(Foot, {
    n: "01",
    dark: true
  }));
}
function SectionSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: '#fff',
      color: 'var(--gx-noir)',
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 120,
      color: 'var(--gx-accent)',
      lineHeight: 1,
      letterSpacing: '-0.03em'
    }
  }, "02"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontWeight: 900,
      fontSize: 56,
      letterSpacing: '-0.015em',
      maxWidth: '18ch'
    }
  }, "Les onze piliers de l'excellence", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gx-text-muted)',
      fontSize: 20,
      fontWeight: 300,
      marginTop: 20,
      maxWidth: '54ch',
      lineHeight: 1.5
    }
  }, "Chaque pilier compte, mais c'est leur coh\xE9rence qui fait la performance globale."), /*#__PURE__*/React.createElement(Foot, {
    n: "02"
  }));
}
function StatSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: 'var(--gx-noir)',
      color: '#fff',
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Gwm, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true,
    style: {
      marginBottom: 36
    }
  }, "R\xE9sultats mesur\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 96,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "100",
    label: "organisations accompagn\xE9es",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "98",
    suffix: "%",
    label: "de satisfaction",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatFigure, {
    prefix: "+",
    value: "30",
    suffix: "%",
    label: "de productivit\xE9 gagn\xE9e",
    onDark: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#cfcfcf',
      fontSize: 18,
      fontWeight: 300,
      marginTop: 48,
      maxWidth: '58ch',
      lineHeight: 1.6
    }
  }, "Le chiffre d'abord : on privil\xE9gie les preuves aux longs paragraphes.")), /*#__PURE__*/React.createElement(Foot, {
    n: "03",
    dark: true
  }));
}
function ComparisonSlide() {
  const col = (title, tone, items, fill) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: fill,
      border: '1px solid var(--gx-line)',
      borderTop: `4px solid ${tone}`,
      borderRadius: 16,
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--gx-text-muted)',
      marginBottom: 18
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 2,
      color: 'var(--gx-noir)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: '#fff',
      color: 'var(--gx-noir)',
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "03",
    style: {
      marginBottom: 16
    }
  }, "Avant / Apr\xE8s"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 32px',
      fontWeight: 900,
      fontSize: 44,
      letterSpacing: '-0.01em'
    }
  }, "De la strat\xE9gie \xE0 l'ex\xE9cution", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, col('Sans cadre', 'var(--gx-gris)', ['Priorités floues', 'Décisions non suivies', 'Résultats variables'], '#fff'), col('Avec Genetrix', 'var(--gx-accent)', ['Cap clair et partagé', 'Exécution pilotée', 'Performance durable'], 'var(--gx-gris-clr)')), /*#__PURE__*/React.createElement(Foot, {
    n: "04"
  }));
}
function QuoteSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: 'var(--gx-accent)',
      color: '#fff',
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-blanc.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -60,
      bottom: -60,
      height: 380,
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 46,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      maxWidth: '20ch'
    }
  }, "\xAB Genetrix nous a fait passer de la strat\xE9gie \xE0 l'ex\xE9cution, avec des r\xE9sultats visibles en moins de six mois", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gx-noir)'
    }
  }, "."), " \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontSize: 15,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#ffd9d9',
      fontWeight: 600
    }
  }, "Direction G\xE9n\xE9rale \xB7 Industrie")), /*#__PURE__*/React.createElement(Foot, {
    n: "05",
    dark: true
  }));
}
const SLIDES = [TitleSlide, SectionSlide, StatSlide, ComparisonSlide, QuoteSlide];
function Deck() {
  const [i, setI] = React.useState(0);
  const [scale, setScale] = React.useState(1);
  const hostRef = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      if (hostRef.current) setScale(Math.min(1, hostRef.current.clientWidth / 1280, hostRef.current.clientHeight / 720));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowRight') setI(v => Math.min(SLIDES.length - 1, v + 1));
      if (e.key === 'ArrowLeft') setI(v => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  const Cur = SLIDES[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#e9e9e9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: hostRef,
    style: {
      width: '100%',
      maxWidth: 1280,
      aspectRatio: '16/9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      boxShadow: '0 24px 60px rgba(0,0,0,.25)',
      borderRadius: 4,
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Cur, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--gx-font)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(v => Math.max(0, v - 1)),
    disabled: i === 0,
    style: navBtn(i === 0)
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, SLIDES.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'Slide ' + (n + 1),
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: n === i ? 'var(--gx-accent)' : '#bdbdbd'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(v => Math.min(SLIDES.length - 1, v + 1)),
    disabled: i === SLIDES.length - 1,
    style: navBtn(i === SLIDES.length - 1)
  }, "\u203A")));
}
const navBtn = dis => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px solid #cfcfcf',
  background: '#fff',
  fontSize: 20,
  cursor: dis ? 'not-allowed' : 'pointer',
  opacity: dis ? 0.4 : 1,
  color: 'var(--gx-noir)'
});
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Deck, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/Slides.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
