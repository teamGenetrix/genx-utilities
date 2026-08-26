/* Exemple : papier à en-tête Genetrix — courrier, note de cadrage,
   compte rendu. Sans couverture, en-tête à filet rouge, pied normé.
     node examples/courrier.js  →  courrier.docx                   */
const path = require('path');
const G = require('../scripts/gxdoc');
const LOGO = path.join(__dirname, '..', 'assets', 'logos', 'logo-full-noir.png');

const meta = {
  title: 'Note de cadrage',
  headerLeft: 'Note de cadrage',
  headerRight: 'SOCIÉTÉ EXEMPLE SA',
  client: 'SOCIÉTÉ EXEMPLE SA',
};

const blocks = [
  G.image(LOGO, { width: 148 }),
  G.spacer(6),

  // Bloc destinataire, aligné à droite. Les retours à la ligne deviennent
  // des paragraphes serrés : Word ignore un \n à l'intérieur d'un run.
  G.p("Société Exemple SA\nDirection industrielle\nAbidjan, Côte d'Ivoire",
     { align: 'right', size: G.S.small, after: 8 }),
  G.p("Abidjan, le 20 août 2026", { after: 6 }),

  G.p("**Objet : cadrage de la mission d'excellence opérationnelle, sites de Yopougon, Bouaké et San-Pédro.**", { after: 6 }),

  G.p("Madame la Directrice,"),
  G.p("À la suite de notre échange du 12 août, nous vous confirmons le périmètre et les modalités de la mission. Cette note tient lieu de référence commune jusqu'à la signature du contrat."),

  G.h3('Périmètre'),
  G.bullets([
    "Trois sites de production, 240 collaborateurs.",
    "Quatre processus critiques : changement de série, maintenance de premier niveau, contrôle qualité, ordonnancement.",
    "Horizon de 6 mois, de septembre 2026 à février 2027.",
  ]),

  G.h3('Hors périmètre'),
  G.bullets([
    "La fonction logistique amont, traitée par ailleurs.",
    "Le déploiement du nouvel ERP, dont le calendrier reste indépendant.",
    "Toute intervention sur la politique de rémunération.",
  ]),

  G.h3('Interlocuteurs et jalons'),
  G.table({
    head: ['Jalon', 'Date', 'Interlocuteur'],
    rows: [
      ['Lancement', '2 septembre 2026', 'Direction industrielle'],
      ['Restitution du diagnostic', '30 septembre 2026', 'Comité de direction'],
      ['Revue de déploiement', '15 décembre 2026', 'Directeurs de site'],
      ["Audit d'ancrage", '20 février 2027', 'Direction générale'],
    ],
    widths: [2, 1.4, 1.8],
  }),

  G.p("Sauf remarque de votre part avant le 27 août, ce cadrage sera considéré comme validé.", { before: 3 }),
  G.p("Nous vous prions d'agréer, Madame la Directrice, l'expression de nos salutations distinguées."),

  G.spacer(10),
  G.p("**Prénom Nom**\nFondateur et gérant · Lean Six Sigma Master Black Belt", { size: G.S.small }),
  G.divider({ before: 8, after: 2 }),
  G.p("Genetrix · Abidjan, Côte d'Ivoire · info@genetrix.ci · www.genetrix.ci · +225 07 47 169 169",
     { size: G.S.legend, color: G.C.gris }),
];

G.build({ file: process.argv[2] || 'courrier.docx', meta, cover: false, blocks })
  .then(f => console.log('OK →', f))
  .catch(e => { console.error(e); process.exit(1); });
