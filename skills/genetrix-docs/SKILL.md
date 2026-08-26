---
name: genetrix-docs
description: Produce any Genetrix-branded document — commercial proposals, mission/diagnostic reports, training materials, letterhead, briefs, meeting notes, certificates, client decks — as .docx, .pptx, .pdf or standalone .html. Use this skill whenever the user asks for a document, report, proposal, deck, letter, note or training support for Genetrix (Consulting · Training · Coaching · Technology, Abidjan, genetrix.ci), or writes in French about "une proposition", "un rapport de mission", "une note de cadrage", "un support de formation", "un compte rendu", "papier à en-tête", "une présentation client" — even when they do not name the brand or the file format. Also use it to rewrite or re-brand an existing document into the Genetrix system. It carries the brand kernel (Montserrat, le rouge décisif #D00000, le point rouge, base 8), the French editorial rules, ready-made builders for Word and PowerPoint, and a render-and-inspect step so nothing ships unchecked.
---

# Genetrix · Documents

Genetrix is a francophone consulting, training and coaching firm in Abidjan.
Its promise — *« Là où le potentiel devient performance. »* — is also its
document rule: a Genetrix document proves, it does not promise. Figures over
paragraphs, short sentences, one message per page.

This skill produces the documents. A sibling skill, `genetrix-design`, covers
interfaces and prototypes; if the request is a web page or a UI, use that one.

## Ordre de travail

1. **Établir le contenu d'abord.** Le fond avant la forme : qui lit, pour
   décider quoi, avec quelles preuves chiffrées. Si des faits manquent
   (chiffres, dates, périmètre, budget), demandez-les ou marquez-les
   visiblement `[à confirmer]` plutôt que d'inventer — un chiffre faux dans
   une proposition coûte plus cher qu'une case vide.
2. **Choisir la famille et le format.** Voir `references/familles.md` pour les
   plans types des quatre familles (proposition, rapport, formation,
   papeterie) et `references/formats.md` pour trancher entre docx, pptx, pdf
   et html.
3. **Construire** avec le moteur correspondant (voir plus bas).
4. **Rendre et regarder.** `python3 scripts/render.py <fichier> --png` produit
   le PDF et une image par page. Ouvrez ces images. Un livrable qu'on n'a pas
   regardé n'est pas fini : c'est là qu'on voit les débordements, les tableaux
   coupés, les titres orphelins et les pages presque vides.
5. **Livrer** le fichier (et le PDF si utile), en une phrase de contexte.

## Le noyau de marque

Ce qui suit s'applique à tout livrable, quel que soit le format. Le détail
complet — rampes, contrastes vérifiés, règles de logo, 11 piliers, coordonnées —
est dans `references/charte.md`, à lire dès qu'un choix sort de ce cadre.

**Couleur.** Rouge `#D00000` en accent, jamais en aplat étendu (exceptions :
le bloc du logo, une tuile courte, une diapositive de citation). Le reste est
noir `#141414`, gris `#5A5A5A`, gris clair `#F0F0F0`, blanc. Le rouge sur noir
ne passe pas le contraste : pas de texte rouge sur fond noir en dessous de 18 pt.

**Typographie.** Montserrat, trois graisses et rien d'autre : **Black 900**
affirme (titres), **SemiBold 600** structure (sous-titres, légendes, mots qui
portent le sens), **SemiLight 300** se lit (corps). La graisse vient de la
police, jamais d'un `<b>` ou d'un gras simulé. Casse phrase partout, sauf les
sur-titres en majuscules très interlettrées.

**Le point rouge.** Un point final, en rouge, à la fin d'un titre ou d'une
phrase signature. Un seul par phrase, toujours terminal, jamais au milieu,
jamais dispersé en décor. Les moteurs le posent automatiquement quand un titre
se termine par un point : écrivez `« Notre démarche. »` et non `« Notre démarche »`.

**Écriture (français, toujours).** Direct, précis, sans emphase. Résultats
plutôt que jargon. Phrases courtes, verbes d'action, preuves chiffrées.
Séparateurs : virgule, deux-points, parenthèses. **Jamais de tiret cadratin ni
demi-cadratin**, en particulier dans les fourchettes : on écrit *« de 3 à 6
mois »*, jamais *« 3–6 mois »*. Jamais d'emoji. Vouvoiement implicite, mais la
marque s'adresse rarement au lecteur : elle énonce des faits et des résultats.

**Le chiffre d'abord.** Un chiffre clé se pose en grand, en rouge, avec son
contexte en gris dessous. Trois chiffres alignés valent un paragraphe. Les
graphiques restent noir et gris, le rouge signalant la seule donnée qui compte.

**Rythme.** Base 8 (4/8/12/16/24/32/48/64/96). Mesure de lecture de 65 à 75
caractères. Blanc généreux : une page aérée dit la rigueur mieux qu'une page
pleine.

## Les moteurs

Tout est en place dans ce dossier : Montserrat est embarqué (`assets/fonts/`),
les logos sont prêts (`assets/logos/`), les scripts n'ont besoin d'aucune
installation. `docx` et `pptxgenjs` sont déjà disponibles côté Node.

| Livrable | Moteur | À lire avant |
|---|---|---|
| Word `.docx` | `scripts/gxdoc.js` | `references/docx.md` |
| PowerPoint `.pptx` | `scripts/gxdeck.js` | `references/pptx.md` |
| PDF haute fidélité / HTML | `assets/genetrix.css` + `scripts/render.py` | `references/html-pdf.md` |

La façon la plus rapide et la plus sûre de démarrer : copier l'exemple le plus
proche depuis `examples/`, puis remplacer le contenu.

- `examples/proposition.js` — proposition commerciale complète en `.docx`
  (couverture noire, sommaire, chiffres clés, planning, budget).
- `examples/courrier.js` — papier à en-tête : courrier, note de cadrage,
  compte rendu, en `.docx` sans couverture.
- `examples/deck.js` — restitution client en `.pptx` 16:9.
- `assets/templates/document.html` — gabarit A4 pour la voie HTML → PDF.

```bash
node examples/proposition.js sortie.docx      # produire
python3 scripts/render.py sortie.docx --png   # rendre et vérifier
```

## Ce qui trahit un document hors marque

Ces erreurs reviennent, et elles se voient toutes au rendu :

- Un tiret cadratin dans une fourchette. Cherchez `—` et `–` avant de livrer.
- Du gras simulé au milieu d'une phrase, au lieu de la coupe SemiBold.
- Un aplat rouge sur une pleine page, ou du texte rouge sur fond noir.
- Le point rouge répété partout, ou absent du titre de couverture.
- Une promesse sans preuve : « une expertise reconnue » au lieu de
  « +100 organisations accompagnées, +98 % de satisfaction ».
- Un logo étiré, recoloré ou incliné. Les fichiers de `assets/logos/`
  s'utilisent tels quels ; le filigrane n'utilise que le monogramme
  `symbole-blanc.png`, entre 6 et 10 % d'opacité.
- Un sommaire sur une page presque vide pour un document de quatre pages :
  le sommaire commence à être utile au-delà de six pages.

## Polices chez le client

Montserrat est embarqué dans les PDF et les HTML produits ici : ils s'affichent
partout à l'identique. Un `.docx` ou un `.pptx`, lui, utilise les polices de la
machine qui l'ouvre. Si le poste du destinataire n'a pas Montserrat, Word
substitue. Deux réponses, à proposer selon le cas : livrer aussi le PDF (le
plus sûr pour un envoi client), ou installer les trois fichiers de
`assets/fonts/*.ttf` sur les postes de l'équipe Genetrix.
