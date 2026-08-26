# Choisir le format

Quatre sorties, un même noyau de marque. La question n'est pas « lequel est le
plus beau » mais « qu'est-ce que le destinataire va en faire ».

| Le destinataire va… | Format | Moteur |
|---|---|---|
| annoter, compléter, faire circuler en interne | `.docx` | `gxdoc.js` |
| projeter, animer une réunion, une formation | `.pptx` | `gxdeck.js` |
| lire, archiver, signer, imprimer | `.pdf` | `render.py` |
| ouvrir dans un navigateur, publier, partager par lien | `.html` autoportant | `genetrix.css` + `render.py` |

## En pratique

**`.docx` par défaut pour tout ce qui circule.** Une proposition, un rapport,
une note, un compte rendu : le client veut pouvoir commenter et transmettre.
Livrez le `.docx` **et** le PDF pour l'envoi — le PDF fige la mise en page et
embarque tout, le Word garde la main au client.

**`.pptx` uniquement pour ce qui se projette.** Un rapport transformé en
diapositives est un rapport illisible ; un deck transformé en document est un
document creux. Si le contenu a besoin de paragraphes, c'est un document, même
si la demande dit « présentation ».

**PDF depuis le HTML quand la mise en page porte le message.** Plaquette,
certificat, page de garde très graphique, rapport avec beaucoup de figures :
la voie HTML donne le contrôle typographique complet et un rendu identique
partout. Le prix : le client ne peut plus l'éditer.

**PDF depuis le Word quand le Word est la source.** `render.py` convertit via
LibreOffice ; le Word reste le document de référence, le PDF n'en est que la
photographie.

**HTML autoportant pour ce qui se consulte en ligne** ou se garde à portée de
main. `--standalone` inline tout : une seule pièce jointe, qui s'ouvre partout.

## Le piège des polices

Un PDF et un HTML produits ici embarquent Montserrat : ils sont identiques sur
toutes les machines. Un `.docx` et un `.pptx`, non — ils utilisent les polices
installées là où on les ouvre. Sur un poste sans Montserrat, Word substitue et
le document perd sa voix.

Deux réponses selon le cas :

- **envoi client** : joignez le PDF, c'est lui qui fait foi ;
- **usage interne** : installez les trois fichiers de `assets/fonts/*.ttf` sur
  les postes de l'équipe (double-clic, « Installer » sur Windows et macOS).

Le mentionner au moment de la livraison évite une mauvaise surprise à l'ouverture.

## Combiner

Les formats se cumulent volontiers sur une même mission : une proposition en
`.docx` + PDF, sa soutenance en `.pptx`, le compte rendu de restitution en
`.docx`. Le noyau de marque est commun aux trois moteurs, donc les trois
documents se ressemblent — c'est exactement l'effet recherché.
