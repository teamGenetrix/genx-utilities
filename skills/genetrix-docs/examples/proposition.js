/* Exemple complet : proposition commerciale Genetrix.
   Copiez ce fichier, remplacez le contenu, gardez la structure.
     node examples/proposition.js  →  proposition.docx           */
const G = require('../scripts/gxdoc');

const meta = {
  title: "Structurer l'exécution des priorités.",
  subtitle: "Proposition d'accompagnement, direction industrielle.",
  eyebrow: 'Proposition commerciale',
  client: 'SOCIÉTÉ EXEMPLE SA',
  ref: 'GX-2026-014',
  date: '20 août 2026',
  author: 'Genetrix, Abidjan',
  headerLeft: 'Proposition · Excellence opérationnelle',
  headerRight: 'SOCIÉTÉ EXEMPLE SA',
};

const blocks = [
  G.sommaire(['Contexte', 'Enjeux', 'Démarche', 'Livrables', 'Références', 'Budget']),

  G.eyebrow('Contexte', { number: '01', before: 0 }),
  G.h1('Comprendre la situation.'),
  G.lead("Vos priorités sont posées. Leur exécution reste inégale d'un site à l'autre."),
  G.p("Les entretiens préalables font ressortir trois constats convergents. Les objectifs annuels sont connus des équipes de direction, mais ne se traduisent pas en gestes quotidiens standardisés. Le pilotage repose sur des indicateurs de résultat, disponibles trop tard pour corriger. Les initiatives d'amélioration se lancent, puis s'éteignent faute de rituel de suivi."),
  G.stats([
    { prefix: '', value: '3', suffix: ' sites', label: 'périmètre concerné' },
    { prefix: '+', value: '240', label: 'collaborateurs impactés' },
    { prefix: '', value: '6', suffix: ' mois', label: 'horizon de la mission' },
  ]),
  G.legend("Périmètre arrêté avec la direction industrielle, réunion du 12 août 2026."),

  G.eyebrow('Enjeux', { number: '02' }),
  G.h2('Ce qui est en jeu.'),
  G.bullets([
    "Tenir les engagements de service client sans recourir aux heures supplémentaires.",
    "Rendre la performance **lisible à tous les niveaux**, du poste de travail au comité de direction.",
    "Installer un réflexe d'amélioration qui survive à la mission.",
  ]),
  G.callout("L'exécution fait la différence. Nous allons de la réflexion jusqu'au résultat, pas seulement jusqu'à la recommandation.", { title: 'Notre position' }),

  G.pageBreak(),
  G.eyebrow('Démarche', { number: '03', before: 0 }),
  G.h1('Notre démarche.'),
  G.lead("Quatre phases, de 3 à 6 mois, avec vos équipes et sur le terrain."),
  G.h3('Phase 1 · Diagnostic'),
  G.p("Cartographie des processus critiques, observation terrain, analyse des données de production sur douze mois. Restitution en comité de direction."),
  G.h3('Phase 2 · Cadrage'),
  G.p("Sélection des priorités par pilier, définition des indicateurs qui comptent, conception du système de pilotage visuel."),
  G.h3('Phase 3 · Déploiement'),
  G.p("Formation des encadrants, mise en place des rituels courts, accompagnement au poste. Deux sites pilotes puis généralisation."),
  G.h3('Phase 4 · Ancrage'),
  G.p("Transfert de compétences aux référents internes, audit d'ancrage, plan de progrès à douze mois."),

  G.h2('Planning indicatif.'),
  G.table({
    head: ['Phase', 'Durée', 'Livrable principal', 'Charge'],
    rows: [
      ['1 · Diagnostic', '4 semaines', "Rapport de diagnostic et cartographie", '12 j'],
      ['2 · Cadrage', '3 semaines', "Système de pilotage et feuille de route", '9 j'],
      ['3 · Déploiement', '12 semaines', "Rituels installés, encadrants formés", '28 j'],
      ['4 · Ancrage', '5 semaines', "Audit d'ancrage et plan de progrès", '8 j'],
    ],
    widths: [1.4, 1, 2.6, 0.8],
    align: [null, null, null, 'right'],
  }),
  G.legend("Charge exprimée en jours-consultant. Planning à confirmer au lancement."),

  G.eyebrow('Livrables', { number: '04' }),
  G.h2('Ce que vous obtenez.'),
  G.numbered([
    "Un rapport de diagnostic chiffré, par site et par pilier.",
    "Un système de pilotage opérationnel, tenu par vos équipes.",
    "Un référentiel de gestes standardisés pour les processus critiques.",
    "Vingt encadrants formés et certifiés en interne.",
  ]),

  G.eyebrow('Références', { number: '05' }),
  G.h2('Des résultats qui tiennent.'),
  G.stats([
    { prefix: '+', value: '100', label: 'organisations accompagnées' },
    { prefix: '+', value: '2,5', suffix: 'K', label: 'professionnels formés' },
    { prefix: '+', value: '98', suffix: '%', label: 'de satisfaction' },
  ]),
  G.spacer(4),
  G.quote("Genetrix nous a fait passer de la stratégie à l'exécution, avec des résultats visibles en moins de six mois.", 'Direction générale · Industrie'),

  G.eyebrow('Budget', { number: '06' }),
  G.h2('Investissement.'),
  G.table({
    head: ['Poste', 'Base', 'Montant (FCFA)'],
    rows: [
      ['Diagnostic et cadrage', '21 jours-consultant', '10 500 000'],
      ['Déploiement', '28 jours-consultant', '14 000 000'],
      ['Ancrage et transfert', '8 jours-consultant', '4 000 000'],
      ['**Total**', '57 jours-consultant', '**28 500 000**'],
    ],
    widths: [2.4, 1.6, 1.2],
    align: [null, null, 'right'],
    totalRow: true,
  }),
  G.legend("Montants hors taxes, frais de déplacement inclus. Offre valable 60 jours."),

  G.divider(),
  G.p("Genetrix · Abidjan, Côte d'Ivoire · info@genetrix.ci · www.genetrix.ci · +225 07 47 169 169", { size: G.S.legend, color: G.C.gris }),
];

G.build({ file: process.argv[2] || 'proposition.docx', meta, cover: 'dark', blocks })
  .then(f => console.log('OK →', f))
  .catch(e => { console.error(e); process.exit(1); });
