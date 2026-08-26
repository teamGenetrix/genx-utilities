**Dialog** — modal with scrim. Provide `title`, content children, and `footer` actions.

```jsx
<Dialog open={open} onClose={close} title="Confirmer" footer={<Button onClick={close}>OK</Button>}>
  Voulez-vous envoyer la demande ?
</Dialog>
```
