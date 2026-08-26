# PowerPoint · `scripts/gxdeck.js`

Bibliothèque au-dessus de `pptxgenjs` (déjà installé). Format 16:9,
13,333 × 7,5 pouces, marge 0,92 pouce. Sept types de diapositives qui
reprennent le kit de la marque.

Le plus rapide : copier `examples/deck.js`.

```js
const D = require('/chemin/vers/genetrix-docs/scripts/gxdeck');
const p = D.deck({ title: 'Excellence opérationnelle', subject: 'Restitution' });
D.title(p, { … });
D.section(p, { … });
await D.save(p, 'sortie.pptx');
```

## Le catalogue

| Appel | Diapositive |
|---|---|
| `D.title(p, {eyebrow, title, subtitle, meta, tone})` | Couverture. Noire par défaut, wordmark, filigrane G, un seul message. |
| `D.section(p, {number, title, note})` | Intercalaire : le grand numéro rouge, le titre, une phrase. |
| `D.content(p, {eyebrow, title, bullets, columns, note, tone})` | Titre et puces. `columns: 2` répartit en deux colonnes. |
| `D.stats(p, {eyebrow, title, figures, note, tone})` | Preuve chiffrée. `figures: [{prefix,value,suffix,label}]`, deux à quatre. |
| `D.comparison(p, {eyebrow, number, title, left, right})` | Deux cartes. La droite porte le filet rouge, la gauche le filet gris. |
| `D.table(p, {eyebrow, title, head, rows, widths, note, accentCol})` | Tableau à filets fins, bandeau d'en-tête gris. |
| `D.quote(p, {text, source})` | Citation sur aplat rouge, point final en noir. |
| `D.closing(p, {title, lines})` | Clôture noire avec les coordonnées. |

`tone: 'dark'` ou `'light'` bascule le fond des types qui l'acceptent. Alterner
sombre et clair rythme un deck ; alterner à chaque diapositive le fatigue. Une
séquence qui fonctionne : couverture sombre, intercalaire clair, contenu clair,
preuve sombre, contenu clair, citation rouge, clôture sombre.

## Ce que le moteur fait pour vous

- **Le point rouge** sur tout titre terminé par un point.
- **Le filigrane** : le monogramme seul, à très basse opacité, sur les fonds
  sombres. Jamais le lockup complet.
- **La taille des chiffres** s'adapte au nombre de figures et à leur longueur,
  pour qu'un « −11 pts » tienne sur une ligne comme un « +98 % ».
- **La numérotation** en pied, au format `GENETRIX · 03`. La couverture et la
  clôture ne sont pas numérotées.
- **Le canevas 16:9 réel** : `pptxgenjs` appelle `LAYOUT_16x9` un canevas de
  10 pouces de large ; le moteur déclare le canevas de 13,333 pouces que
  PowerPoint utilise vraiment, sans quoi tout se décale vers la gauche.

## Écrire pour la projection

Une idée par diapositive. Un titre qui affirme le message, pas qui annonce le
sujet : « Trois causes, un même mécanisme. » plutôt que « Analyse des causes ».
Quatre à six puces au maximum, une ligne chacune ; au-delà, c'est une page de
document, pas une diapositive.

Le texte projeté descend rarement en dessous de 14 pt : ce qui est illisible au
fond de la salle n'existe pas. Les sources et les précisions vont dans `note`,
en bas, en petit.

## Vérifier

```bash
node mon-deck.js sortie.pptx
python3 scripts/render.py sortie.pptx --png
```

Regardez chaque image. Les débordements de texte sont le défaut le plus
fréquent : `pptxgenjs` ne coupe pas et ne réduit pas, un titre trop long sort
simplement du cadre. Si cela arrive, raccourcissez le texte avant de réduire le
corps — c'est presque toujours le texte qui est en cause.

## Notes du présentateur

`s.addNotes('…')` sur la diapositive retournée par chaque appel :

```js
const s = D.content(p, { title: 'Trois causes, un même mécanisme.', bullets: [...] });
s.addNotes("Insister sur le fait que les écarts ne viennent pas des équipements.");
```
