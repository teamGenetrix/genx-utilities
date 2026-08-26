# Les quatre familles de documents

Un plan type n'est pas un moule : c'est l'ordre dans lequel un lecteur pressé
trouve ce qu'il cherche. Gardez la séquence, adaptez la longueur, supprimez ce
qui n'a pas de contenu — une section vide fait plus de mal qu'une section
absente.

Règle commune aux quatre : **le lecteur doit pouvoir décider après la première
page.** Ce qui suit sert à justifier, pas à révéler.

---

## 1. Proposition commerciale

Qui lit : un dirigeant ou un directeur d'exploitation, en diagonale, avant de
la faire circuler. Ce qu'il cherche : est-ce qu'ils ont compris mon problème,
qu'est-ce qu'ils font exactement, combien, quand.

Format : `.docx` (le client l'annote et le fait circuler) plus le PDF pour
l'envoi. De 6 à 12 pages. Couverture noire.

```
Couverture              titre = le résultat visé, pas « Proposition commerciale »
Sommaire                au-delà de six pages seulement
01 Contexte             ce que nous avons compris de votre situation, chiffré
02 Enjeux               ce qui est en jeu si rien ne change, 3 à 4 points
03 Démarche             les phases, ce qui se passe concrètement dans chacune
   Planning             tableau : phase, durée, livrable, charge
04 Livrables            liste numérotée, chaque ligne est vérifiable
05 Références           chiffres clés et une citation client
06 Budget               tableau avec ligne Total, conditions en légende
   Pied                 coordonnées, validité de l'offre
```

À surveiller : le contexte doit contenir au moins un chiffre venu du client
lui-même (entretiens, données transmises) — c'est ce qui distingue une
proposition d'un catalogue. Le budget se donne en entier, jamais « sur
demande ». Fourchettes en « de X à Y ».

Base de départ : `examples/proposition.js`.

---

## 2. Rapport de mission ou diagnostic

Qui lit : le commanditaire, puis un comité. Ce qu'il cherche : les constats,
leur preuve, ce qu'il faut décider.

Format : `.docx` ou PDF haute fidélité si le rapport porte beaucoup de
graphiques. De 15 à 40 pages. Couverture noire, sommaire, pagination soignée.

```
Couverture
Sommaire
Synthèse                une page, autonome : constats, risques, décisions attendues
01 Périmètre et méthode entretiens, données, dates, limites de l'analyse
02 Constats             un constat par sous-partie, chacun adossé à un chiffre
03 Analyse par pilier   les piliers concernés seulement (voir charte.md §7)
04 Recommandations      priorisées, avec effort et effet attendu
05 Feuille de route     tableau : action, responsable, échéance, indicateur
Annexes                 données brutes, liste des entretiens, méthode détaillée
```

La synthèse s'écrit en dernier et se lit seule : beaucoup de lecteurs n'iront
pas plus loin. Chaque constat porte sa source en légende. Les nuances et les
réserves vont dans le corps, pas dans la synthèse — mais elles y vont.

Les recommandations se formulent en verbes d'action et se distinguent des
constats : si le lecteur ne voit pas où finit l'observation et où commence
l'avis, le rapport a échoué.

---

## 3. Support de formation

Qui lit : un participant pendant la session, puis seul, trois mois plus tard.
Ce qu'il cherche : retrouver vite ce qu'il a appris et pouvoir le refaire.

Deux livrables distincts, à ne pas confondre :

**Manuel participant** — `.docx` ou PDF, structure répétitive, place pour
annoter.

```
Couverture              intitulé, durée, public, code du module
Objectifs pédagogiques  verbes observables : identifier, construire, animer
Programme               séquences et durées
Par module :
   Sur-titre numéroté   « MODULE 03 · PILOTAGE »
   Objectif du module   une phrase
   Contenu              texte court, schémas, un chiffre clé par notion
   Application          exercice, cas, grille à remplir
   À retenir            encadré à filet rouge, 3 lignes maximum
Évaluation              QCM ou grille d'acquis
Ressources              bibliographie, modèles à réutiliser
```

**Support projeté** — `.pptx`, une idée par diapositive, peu de texte. Le
manuel porte le détail ; la diapositive porte le point. Si une diapositive a
besoin de six puces, c'est une page de manuel.

Le rythme compte plus que l'exhaustivité : même longueur de module, même
structure, même place de l'encadré « à retenir » d'un module à l'autre. Un
participant qui a compris la mécanique de la page la parcourt trois fois plus vite.

Base de départ : `examples/deck.js` pour le projeté, `examples/proposition.js`
pour le manuel (couverture, sommaire, sur-titres numérotés).

---

## 4. Papeterie et courriers

Qui lit : un interlocuteur unique, pour une décision ou une trace. Ce qu'il
cherche : l'objet, la demande, la date.

Format : `.docx` sans couverture, en-tête à filet rouge, pied normé. Une à
quatre pages.

```
En-tête                 logo, filet rouge
Bloc destinataire       raison sociale, service, ville
Lieu et date            « Abidjan, le 20 août 2026 »
Objet                   une ligne en SemiBold, précise
Corps                   3 à 6 paragraphes courts, une idée chacun
Formule                 sobre, sans emphase
Signature               nom, fonction, coordonnées
```

Variantes de la même base :

- **Note de cadrage** : objet, contexte, périmètre, ce qui est exclu,
  interlocuteurs, jalons. Une à deux pages. C'est le document qui évite les
  malentendus : la partie « hors périmètre » est la plus utile.
- **Compte rendu** : date, participants, points traités, **décisions**,
  actions avec responsable et échéance. Les décisions se distinguent
  visuellement des discussions — encadré ou tableau.
- **Attestation ou certificat** : formule officielle, nom du participant,
  intitulé et durée de la formation, date, signature. Mise en page centrée,
  généreuse, filet rouge, monogramme en filigrane.
- **Signature mail** : nom, fonction, coordonnées, filet rouge latéral
  (voir `references/html-pdf.md`).

Base de départ : `examples/courrier.js`.

---

## Choisir la longueur

La tentation, dans le conseil, est d'épaissir pour rassurer. La marque dit
l'inverse : « le chiffre d'abord », « sans emphase ». Une proposition de huit
pages qui prouve bat une proposition de trente qui décrit.

Test rapide avant de livrer : retirez chaque paragraphe qui n'apporte ni un
fait, ni un chiffre, ni une décision. Ce qui reste est le document.
