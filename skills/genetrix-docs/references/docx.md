# Word · `scripts/gxdoc.js`

Bibliothèque au-dessus de `docx` (npm, déjà installé). Elle porte la marque —
les trois coupes de Montserrat, le point rouge, le filet rouge d'en-tête, le
pied normé, le rythme base 8 — pour qu'un document n'ait plus qu'à décrire son
contenu.

Le plus rapide : copier `examples/proposition.js` et remplacer le contenu.

## Structure d'un script

```js
const G = require('/chemin/vers/genetrix-docs/scripts/gxdoc');

const meta = {
  title: "Structurer l'exécution des priorités.",  // point final = point rouge
  subtitle: "Proposition d'accompagnement, direction industrielle.",
  eyebrow: 'Proposition commerciale',
  client: 'SOCIÉTÉ EXEMPLE SA',
  ref: 'GX-2026-014',
  date: '20 août 2026',
  author: 'Genetrix, Abidjan',
  headerLeft: 'Proposition · Excellence opérationnelle',  // en-tête, à gauche
  headerRight: 'SOCIÉTÉ EXEMPLE SA',                      // en-tête, à droite
  // header: false                                        // supprime l'en-tête
  // footer: 'texte du pied'                              // défaut : mention normée
};

const blocks = [ /* ... */ ];

G.build({ file: 'sortie.docx', meta, cover: 'dark', blocks })
  .then(f => console.log('OK →', f));
```

`cover` vaut `'dark'` (défaut), `'light'`, ou `false` pour un document sans
couverture — courrier, note, compte rendu.

## Les blocs

| Appel | Rend |
|---|---|
| `G.h1('Titre.')` | Titre de niveau 1, Black 23 pt, point final en rouge |
| `G.h2(…)` `G.h3(…)` | Niveaux 2 et 3 (Black 17 pt, SemiBold 13 pt) |
| `G.eyebrow('Contexte', { number: '01' })` | Sur-titre majuscules interlettrées |
| `G.p('Texte…')` | Paragraphe courant, SemiLight 10,5 pt |
| `G.lead('Phrase d\'accroche.')` | Chapô SemiBold gris sous un titre |
| `G.legend('Source : …')` | Légende 8 pt grise |
| `G.bullets([…])` | Liste à puces rouges |
| `G.numbered([…])` | Liste numérotée, numéros rouges |
| `G.stats([{prefix,value,suffix,label}, …])` | Bande de chiffres clés |
| `G.callout(texte, { title })` | Encadré à filet rouge supérieur |
| `G.table({ head, rows, widths, align, totalRow, accentCol })` | Tableau |
| `G.kv([['Client','…'], …])` | Bloc de métadonnées deux colonnes |
| `G.quote(texte, source)` | Citation à filet rouge latéral |
| `G.sommaire(['Contexte','Enjeux', …])` | Sommaire numéroté + saut de page |
| `G.image('logo.png', { width: 120 })` | Image, ratio préservé |
| `G.divider()` `G.spacer(4)` `G.pageBreak()` | Filet, respiration, saut |

Détails utiles :

- **`**mot**` dans un texte** passe en *Montserrat SemiBold* — la graisse vient
  de la police, pas d'un attribut gras. Fonctionne dans `p`, `bullets`,
  `table`, `callout`.
- **Le point rouge est automatique** sur les titres et la couverture : écrivez
  `G.h1('Notre démarche.')`. Sans le point final, pas de point rouge.
- **`G.table`** : `widths` sont des poids relatifs (`[1.4, 1, 2.6, 0.8]`),
  `align` un tableau `['left', null, null, 'right']`, `totalRow: true` trace un
  filet noir au-dessus de la dernière ligne, `accentCol: n` met une colonne en
  rouge — à réserver à la colonne sur laquelle le lecteur doit tomber, jamais à
  tous les nombres.
- **Espacement des tableaux** : géré automatiquement. Word ignore les marges de
  paragraphe autour d'un tableau et fusionne deux tableaux adjacents ;
  `build()` insère les paragraphes de respiration nécessaires.
- **Sommaire** : `G.sommaire([...])` écrit la liste lui-même, sans numéros de
  page. `G.sommaire([...], { field: true })` produit une vraie table des
  matières Word — qui reste **vide tant que personne n'appuie sur F9**. Ne
  l'utilisez que si le client doit pouvoir la régénérer, et prévenez-le.
- **Sauts de page** : `G.pageBreak()` avant le sur-titre de section, pas après.
  Un sur-titre suivi d'un saut reste orphelin en bas de page.

## Une page de garde claire

```js
G.build({ file, meta: { ...meta, coverLogo: '.../assets/logos/logo-wordmark-noir.png' },
          cover: 'light', blocks });
```

Sur fond clair, le wordmark blanc devient invisible : passez `coverLogo` sur la
version noire.

## Modifier un `.docx` existant

`docx-js` ne sait pas ouvrir un fichier existant. Pour retoucher un document
fourni par le client : dézipper, éditer `word/document.xml`, rezipper — voir le
skill `docx` fourni par le système, qui documente cette voie et ses pièges
(runs fragmentés, suivi des modifications). Pour re-brander un document, il est
presque toujours plus rapide d'en extraire le texte (`pandoc -t markdown`) et de
le reconstruire ici.

## Vérifier

```bash
node mon-script.js sortie.docx
python3 scripts/render.py sortie.docx --png
```

Puis ouvrir les images produites. Ce qu'on y voit et qu'on ne voit pas dans le
code : un tableau coupé en deux pages, un titre seul en bas de page, une ligne
de total isolée, une page qui n'a que trois lignes.
