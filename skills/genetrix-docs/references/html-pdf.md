# HTML et PDF haute fidélité

La voie HTML donne le contrôle typographique complet : Montserrat est embarqué,
le rendu est identique partout, hors ligne comme dans le PDF. C'est la bonne
voie quand la mise en page compte plus que l'éditabilité — plaquette,
certificat, rapport très graphique, page à publier.

## Démarrer

Copier `assets/templates/document.html`, qui contient déjà une couverture, un
en-tête courant, des chiffres clés, un encadré, un tableau et une citation.

Les deux feuilles à charger, dans cet ordre :

```html
<link rel="stylesheet" href="…/assets/fonts.css" />     <!-- Montserrat, base64 -->
<link rel="stylesheet" href="…/assets/genetrix.css" />  <!-- jetons + impression -->
```

`fonts.css` embarque les trois coupes en base64 : aucun appel réseau, donc
aucune police de substitution, y compris dans un environnement sans accès
Internet.

## Les classes

| Classe | Rôle |
|---|---|
| `.gx-cover` | Couverture pleine page A4, fond noir. `.light` pour la version claire. |
| `.gx-sheet` | Page de contenu. Matérialise la feuille à l'écran, transparente à l'impression. |
| `.gx-runhead` | En-tête courant : filet rouge, mention à gauche, client à droite. |
| `.gx-eyebrow` | Sur-titre majuscules interlettrées. `<span class="n">01</span>` pour le numéro rouge. |
| `.gx-lead` | Chapô SemiBold gris. |
| `.gx-legend` | Légende 8 pt grise. |
| `.gx-stats` / `.gx-stat` | Bande de chiffres clés. `.v` la valeur, `.u` l'unité, `.l` le libellé. |
| `.gx-card` | Carte à filet fin. `.accent` ajoute le filet rouge supérieur, `.alt` le fond gris. |
| `.gx-quote` | Citation à filet rouge latéral, `.src` pour la source. |
| `.gx-dot` | Le point rouge : `<h1>Titre<span class="gx-dot">.</span></h1>`. |
| `.gx-page-break` | Force un saut de page. |
| `tr.total`, `td.num`, `td.accent` | Ligne de total, colonne numérique, cellule accentuée. |

Les listes `ul` et `ol` sont déjà stylées (puces et numéros rouges) : pas de
classe à ajouter.

## Produire le PDF

```bash
python3 scripts/render.py mon-document.html --png
```

Chromium en mode headless applique les règles `@page` : format A4, marges,
pied normalisé `GENETRIX · Consulting · Training · Coaching · Technology` à
gauche et
`Page N / M` à droite, sur toutes les pages sauf la couverture (`@page:first`
passe les marges à zéro pour la laisser pleine page).

## Livrer un HTML autoportant

```bash
python3 scripts/render.py mon-document.html --standalone
```

Produit un fichier unique où feuilles de style, polices et images sont inlinées
en base64. C'est ce fichier qu'on envoie ou qu'on publie : ouvert n'importe où,
il reste identique. Un HTML qui pointe vers `../assets/` se casse dès qu'on le
déplace.

## Signature mail

Cas particulier : le HTML d'une signature doit survivre aux clients de
messagerie, qui suppriment les feuilles de style et ne chargent pas les polices
personnalisées. Écrivez-la en **styles en ligne**, avec Montserrat suivi d'une
pile de repli, en tableau plutôt qu'en flex, et le filet rouge en bordure de
cellule :

```html
<table cellpadding="0" cellspacing="0" style="font-family:'Montserrat',Arial,sans-serif;">
  <tr>
    <td style="border-left:3px solid #D00000; padding-left:14px;">
      <div style="font-weight:600; font-size:14px; color:#141414;">Prénom Nom</div>
      <div style="font-size:12px; color:#5A5A5A; padding:2px 0 6px;">Consultant senior</div>
      <div style="font-size:12px; color:#141414;">
        info@genetrix.ci · +225 07 47 169 169<br />www.genetrix.ci
      </div>
    </td>
  </tr>
</table>
```

## Graphiques

Le style de la marque : monochrome noir et gris, **le rouge sur la seule donnée
qui compte**. En HTML, des barres en `div` avec une largeur en pourcentage
suffisent le plus souvent et évitent une dépendance ; pour un graphique plus
riche, produisez un SVG et inlinez-le. Pas de dégradé, pas de 3D, pas de
camembert à douze parts. Les axes et les libellés en gris 8 pt, la valeur mise
en avant en rouge SemiBold.
