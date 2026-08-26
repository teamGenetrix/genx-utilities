# Genetrix · plugin de marque

> **Là où le potentiel devient performance.**
> Consulting · Training · Coaching · Technology · Abidjan, Côte d'Ivoire

Ce plugin met la charte Genetrix à disposition de Claude dans toutes les
conversations de celles et ceux qui l'installent. Personne n'a plus à
rappeler le rouge, la police ou la règle du point : Claude produit
directement dans la marque.

## Ce qu'il apporte

| Compétence | Ce qu'elle couvre |
|---|---|
| **genetrix-design** | Ce qui s'affiche dans un navigateur : pages, écrans d'application, maquettes, tableaux de bord, prototypes. Jetons CSS, composants React, kits d'interface, cartes de fondation. |
| **genetrix-docs** | Ce qui se pagine ou se projette : proposition commerciale, rapport de mission et de diagnostic, support de formation, papeterie et courriers. Sorties en `.docx`, `.pptx`, `.pdf` et `.html` autoportant. |

Les deux partagent le même noyau : rouge décisif `#D00000` en accent seulement,
noir `#141414` et gris `#5A5A5A`, Montserrat en trois coupes, le point rouge
terminal, l'espacement base 8, et l'écriture française directe, chiffrée, sans
tiret cadratin.

## Ce qui est embarqué

- La charte complète : rampes de couleur, contrastes vérifiés WCAG, règles de
  logo, les onze piliers de l'excellence opérationnelle, les règles de voix et
  de ponctuation, les coordonnées officielles.
- Montserrat 300 / 600 / 900, en `.ttf` pour les postes et en `.woff2` embarqué
  en base64 pour les PDF et les pages HTML — aucun appel réseau, rendu
  identique partout.
- Les logos, y compris le wordmark noir, le lockup pour fond clair et le
  monogramme isolé pour les filigranes.
- Deux moteurs de production, `gxdoc.js` pour Word et `gxdeck.js` pour
  PowerPoint, et `render.py` qui produit le PDF et une image par page pour le
  contrôle visuel avant diffusion.

## Comment s'en servir

Rien à invoquer. Demandez ce dont vous avez besoin, en français, et la bonne
compétence se déclenche :

- « Prépare une proposition pour la mission chez X, six mois, trois sites. »
- « Fais-moi le deck de restitution du diagnostic. »
- « Rédige la note de cadrage de la mission Y. »
- « Maquette la page d'accueil du nouveau site. »

Pour forcer l'une ou l'autre : `/genetrix-docs` ou `/genetrix-design`.

## Les polices chez le destinataire

Un PDF ou un HTML produit par le plugin embarque Montserrat : il s'affiche à
l'identique partout. Un `.docx` ou un `.pptx`, lui, utilise les polices de la
machine qui l'ouvre. Sur les postes de l'équipe, installez une fois pour toutes
les trois fichiers de `skills/genetrix-docs/assets/fonts/` (double-clic, puis
« Installer »). Pour un envoi client, joignez le PDF.

## Faire évoluer le plugin

La charte est un système vivant. Demandez à Claude de personnaliser le plugin :
il modifie les fichiers concernés et vous rend une nouvelle version installable.
Version majeure pour un changement d'identité, mineure pour un ajout.

Édition courante : **v1.1.0**, alignée sur le Brand & Design System v2.1
(baseline à quatre activités).
