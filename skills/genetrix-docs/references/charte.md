# Charte Genetrix · référence complète

Source : `genetrix-brand-system.html` v2.0 (document maître, 12 sections).
À lire quand un choix sort du noyau résumé dans `SKILL.md` : une couleur d'état,
un contraste à vérifier, une règle de logo, le nom exact d'un pilier.

## Sommaire

1. L'idée directrice
2. Logo et symbole
3. Couleur et contrastes
4. Typographie
5. Grille et espacement
6. Iconographie
7. Les onze piliers
8. Données et visualisation
9. Voix et ponctuation
10. Applications et coordonnées

---

## 1. L'idée directrice

« Tout converge vers le point. » Le point rouge de *Genetrix.* marque le point
d'impact : l'endroit où la stratégie rencontre l'exécution, où le potentiel
devient un résultat mesurable.

- **Essence — Exécution.** « L'exécution fait la différence. Nous allons de la
  réflexion jusqu'au résultat, pas seulement jusqu'à la recommandation. »
- **Tempérament — Rigueur chaleureuse.** Standards internationaux du conseil,
  ancrage africain. Exigeant sur le fond, proche dans la relation.
- **Preuve — Durabilité.** +100 organisations, +2,5 K professionnels formés,
  +98 % de satisfaction.

Signature : *« De la stratégie à l'exécution, nous transformons le potentiel en
performance durable. »* Baseline courte : *« Là où le potentiel devient
performance. »*

## 2. Logo et symbole

Le logo se lit en trois temps : le bloc rouge (monogramme G abritant une figure
humaine qui s'élève), le mot « Genetrix », le point rouge. **On ne le redessine
pas.**

Fichiers dans `assets/logos/` :

| Fichier | Usage |
|---|---|
| `logo-full.png` | Lockup complet, mot noir. Fond clair. |
| `logo-full-blanc.png` | Lockup complet, mot blanc. Fond sombre. |
| `logo-full-noir.png` | Lockup complet recoloré pour fond clair (dérivé). |
| `logo-wordmark-blanc.png` | Wordmark blanc. En-têtes, couvertures sombres. |
| `logo-wordmark-noir.png` | Wordmark noir (dérivé). En-têtes sur fond clair. |
| `symbole-rouge.png` | Bloc rouge carré, G blanc. Avatar, favicon, tampon. |
| `symbole-blanc.png` | Monogramme G blanc, fond transparent. **Filigranes.** |
| `symbole-noir.png` | Monogramme G noir, fond transparent. |

- **Zone de protection** égale à X, la hauteur du monogramme, sur les quatre côtés.
- **Tailles minimales** : logo complet 24 mm / 120 px ; symbole seul 10 mm / 32 px.
- **Interdits** : recolorer le bloc ou le point, déformer ou étirer, incliner,
  poser la version blanche sur fond clair.
- **Filigrane** : monogramme seul, 6 à 10 % d'opacité, jamais le lockup complet
  (le bloc rouge lirait comme un second logo).

Les fichiers `logo-full-noir.png`, `logo-wordmark-noir.png` et les trois
`symbole-*.png` ont été dérivés des originaux fournis, sans redessin : recolorage
du mot et découpe du bloc. À remplacer si un master vectoriel devient disponible
— il n'existe aujourd'hui aucun SVG du logo.

**La baseline.** Depuis la v2.1, elle porte quatre activités : *Consulting |
Training | Coaching | Technology*. Le bloc rouge et le mot « Genetrix. » sont
inchangés — seule la ligne du bas a été recomposée, en Poppins, la police du
lettrage d'origine, calée sur le même haut de capitales et justifiée sur la
largeur du mot. Le quatrième terme allongeant la ligne, son corps a été réduit
d'environ un quart pour que le lockup garde exactement ses proportions
extérieures : cartes de visite, en-têtes et gabarits existants restent valables.

Pour la faire évoluer à nouveau (une cinquième activité, un autre libellé), le
générateur est dans le skill `genetrix-design`, sous `assets/_logo-source/` :

```bash
python3 assets/_logo-source/build.py "Consulting | Training | Coaching | Technology" sortie/
```

Il repart du master sans baseline et produit les trois versions (blanche, grise,
noire) en pleine résolution. Ne recomposez jamais le mot « Genetrix » lui-même.

## 3. Couleur et contrastes

**Rampe rouge** (jetons primitifs)

| Jeton | Valeur | | Jeton | Valeur |
|---|---|---|---|---|
| rouge-50 | `#FBE6E6` | | rouge-500 · base | `#D00000` |
| rouge-100 | `#F6C2C2` | | rouge-600 | `#B80000` |
| rouge-200 | `#EE9A9A` | | rouge-700 | `#9A0000` |
| rouge-300 | `#E36A6A` | | rouge-800 | `#7A0000` |
| rouge-400 | `#DA3A3A` | | rouge-900 | `#560000` |

**Neutres** : noir `#141414`, gris `#5A5A5A`, gris clair `#F0F0F0`, blanc
`#FFFFFF`, rose `#F7E9EB`, filet `#E7E7E7`.

**Jetons sémantiques** : `accent` = rouge-500 · `accent-hover` = rouge-600 ·
`accent-active` = rouge-700 · `accent-disabled` = rouge-100 · `ink` = noir ·
`muted` = gris · `surface-alt` = gris clair · `accent-soft` = rose.

**Statuts**, volontairement discrets pour que le rouge reste à la marque :
succès `#1A7A3C`, alerte `#9A6A10`, danger `#B80000`.

**Contrastes vérifiés (WCAG 2.1)**

| Association | Ratio | Niveau |
|---|---|---|
| Noir sur blanc | 18,42:1 | AAA |
| Gris sur blanc | 6,90:1 | AA |
| Blanc sur noir | 18,42:1 | AAA |
| Blanc sur rouge | 5,70:1 | AA |
| Rouge sur blanc | 5,70:1 | AA |
| Rouge sur noir | 3,23:1 | AA 18 pt et plus seulement |

Conséquence pratique : **pas de texte rouge courant sur fond noir**. Sur une
couverture sombre, le point rouge d'un titre de 34 pt passe ; une légende rouge
ne passe pas.

## 4. Typographie

Montserrat, échelle modulaire de raison 1,25.

| Rôle | Écran | Impression A4 | Graisse | Interligne |
|---|---|---|---|---|
| Display | 56 px | 34 pt | Black 900 | 1,0 |
| H1 | 44 px | 23 pt | Black 900 | 1,05 |
| H2 | 33 px | 17 pt | Black 900 | 1,1 |
| H3 | 25 px | 13 pt | SemiBold 600 | 1,2 |
| Sous-titre | 20 px | 11,5 pt | SemiBold 600 | 1,3 |
| Corps | 16 px | 10,5 pt | SemiLight 300 | 1,55 à 1,6 |
| Légende | 13 px | 8 pt | SemiLight ou SemiBold | 1,4 |

Interlettrage : titres −0,01 à −0,015 em ; corps +0,005 em ; légendes +0,08 em ;
sur-titres +0,28 à +0,3 em. Mesure de lecture 65 à 75 caractères.

Les trois coupes sont installées comme trois familles distinctes — *Montserrat
Light*, *Montserrat SemiBold*, *Montserrat Black* — parce que c'est ainsi que
Word et PowerPoint les exposent. Les moteurs les nomment explicitement plutôt
que d'activer un attribut « gras ».

## 5. Grille et espacement

Base 8 avec demi-pas à 4 : 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
Grille 12 colonnes, largeur maximale 1120 px, gouttières 24 px.

En A4 : marges 24 mm sur les côtés, 24 mm en tête, 20 mm en pied. Colonne de
texte de 162 mm. Diapositive 16:9 : 13,333 × 7,5 pouces, marge 0,92 pouce.

Rayons : 5 à 8 px sur les petits contrôles, 12 à 16 px sur les surfaces,
999 px pour les puces et bascules. Ombres neutres, jamais colorées.
Mouvement rapide et discret : ~200 ms, ease-out, pas de rebond.

## 6. Iconographie

Spécification de marque : grille clé 64, zone active 56 × 56, trait 3, angles
arrondis 8, extrémités et jointures arrondies, **un seul accent rouge par
icône**, lisibles dès 24 px.

Aucun jeu d'icônes n'a été livré avec la marque. Pour les interfaces, le design
system substitue [Lucide](https://lucide.dev) (trait 2, à porter à 2,5–3 pour
approcher la marque). Dans les documents, préférez l'absence d'icône à une icône
approximative : la hiérarchie se fait par la typographie et le chiffre.
**Jamais d'emoji ni de caractère unicode en guise d'icône.**

## 7. Les onze piliers de l'excellence opérationnelle

Ce cadre structure les missions et les contenus. Les intitulés sont fixes ;
citez-les tels quels.

| | Pilier | Formulation courte |
|---|---|---|
| 01 | Stratégie et planification | Cap clair, priorités posées, feuille de route alignée. |
| 02 | Gestion des processus | Des méthodes fiables et des gestes efficaces, standardisés. |
| 03 | Pilotage de la performance | Les indicateurs qui comptent, suivis à tous les niveaux. |
| 04 | Structure organisationnelle | Une organisation qui sert l'exécution des priorités. |
| 05 | Amélioration continue | Le progrès comme réflexe partagé, pas comme contrainte. |
| 06 | Innovation et technologie | Le numérique et l'IA au service de l'exécution. |
| 07 | Capital humain | Former, coacher et développer les compétences durables. |
| 08 | Gestion des risques | Anticiper, maîtriser et sécuriser la trajectoire. |
| 09 | Expérience client | La valeur perçue au cœur de chaque décision. |
| 10 | Leadership produit | Des offres qui font la différence sur le marché. |
| 11 | Conduite du changement | Faire de la transformation une réalité durable. |

« Chaque pilier compte, mais c'est leur cohérence qui fait la performance
globale. » Un diagnostic se lit bien pilier par pilier ; une proposition en
retient trois ou quatre, pas onze.

Métiers, les quatre de la signature : **Consulting** (de l'analyse à
l'exécution) · **Training** (compétences certifiantes) · **Coaching**
(leadership et engagement) · **Technology** (le numérique et l'IA au service de
l'exécution). En corps de texte français, on peut écrire conseil, formation,
coaching et technologie ; dans la signature et le pied de page, les quatre
termes restent en anglais, comme sur le logo.

## 8. Données et visualisation

« Le chiffre d'abord. » On privilégie les chiffres et les schémas aux longs
paragraphes.

- Un chiffre clé se pose **en grand, en rouge**, son contexte en gris dessous.
- Les graphiques restent **monochromes noir et gris** ; le rouge signale la
  seule donnée qui compte — la barre du site en écart, la courbe de l'année en
  cours. Une série entière en rouge annule l'effet.
- Pas de dégradé, pas d'effet 3D, pas de camembert à douze parts.
- Les nombres s'écrivent à la française : espace insécable comme séparateur de
  milliers (`28 500 000`), virgule décimale (`4,2`), `%` précédé d'une espace
  fine ou collé selon l'usage retenu, mais **de façon constante** dans un même
  document.

## 9. Voix et ponctuation

**On écrit**

- « De la stratégie à l'exécution. » Des phrases qui affirment.
- Des chiffres : +100 organisations, +98 % de satisfaction.
- Séparateurs : virgule, deux-points, parenthèses.
- Fourchettes : « de X à Y » ou « X à Y ».
- Guillemets français « … » avec espaces insécables.

**On évite**

- Le jargon et les promesses vagues sans preuve.
- Le tiret cadratin (—) et le tiret demi-cadratin (–), surtout en fourchette.
- Le gras artificiel : la graisse vient de la police.
- Les emoji.
- Les majuscules de prestige (« nos Consultants Experts »).

Casse : phrase partout, y compris dans les titres en Black
(« De la stratégie à l'exécution. »), sauf les sur-titres et légendes en
majuscules interlettrées.

## 10. Applications et coordonnées

Applications définies par la marque : carte de visite 85 × 55 mm recto sombre ·
papier à en-tête A4 avec filet rouge et pied normé · diapositive titre 16:9, un
seul message · post social · signature mail avec filet rouge latéral.

Pied de page normalisé : `GENETRIX | Consulting · Training · Coaching · Technology | Page N`.

**Coordonnées** (à reprendre telles quelles) :

```
Genetrix · Consulting · Training · Coaching · Technology
Abidjan, Côte d'Ivoire
info@genetrix.ci · www.genetrix.ci
+225 07 47 169 169
```

**Gouvernance.** Version majeure pour un changement d'identité, mineure pour un
ajout de composant ; édition courante v2.0. Les livrables se produisent par
programmation (docx, pptxgenjs, HTML autonome), **avec contrôle qualité visuel
avant diffusion** : débordements, chevauchements, pagination. Cette dernière
phrase vient de la charte elle-même : c'est la marque qui demande qu'on regarde
le rendu avant d'envoyer.
