**Button** — the primary call to action; decisive red `primary`, plus `dark`, `outline`, `ghost`.

```jsx
<Button variant="primary" size="md">Prendre rendez-vous</Button>
<Button variant="outline" iconRight={<ArrowRight size={16} />}>En savoir plus</Button>
```

Sizes `sm | md | lg`. Hover darkens the fill; active darkens further. Pass `as="a"` + `href` for links. Never fake bold — weight is baked in.
