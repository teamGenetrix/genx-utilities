/* Exemple : support de restitution Genetrix (.pptx, 16:9).
     node examples/deck.js  →  deck.pptx                        */
const D = require('../scripts/gxdeck');

const p = D.deck({ title: "Excellence opérationnelle", subject: 'Restitution de diagnostic' });

D.title(p, {
  eyebrow: 'Restitution de diagnostic',
  title: 'Là où le potentiel devient performance.',
  subtitle: "De la stratégie à l'exécution, avec vos équipes, sur le terrain.",
  meta: 'SOCIÉTÉ EXEMPLE SA · 20 AOÛT 2026',
});

D.section(p, { number: 1, title: 'Ce que nous avons observé.',
  note: "Trois sites, quatre semaines, 42 entretiens et 12 mois de données de production." });

D.stats(p, {
  eyebrow: 'Constats chiffrés',
  figures: [
    { prefix: '', value: '68', suffix: '%', label: "des arrêts concentrés sur trois causes" },
    { prefix: '', value: '4,2', suffix: 'h', label: 'de temps de changement de série en moyenne' },
    { prefix: '−', value: '11', suffix: ' pts', label: "d'écart de rendement entre sites" },
  ],
  note: "Le chiffre d'abord : on privilégie les preuves aux longs paragraphes.",
});

D.content(p, {
  eyebrow: 'Analyse',
  title: 'Trois causes, un même mécanisme.',
  bullets: [
    "Les priorités sont connues de la direction, pas traduites en gestes standardisés.",
    "Le pilotage repose sur des indicateurs de résultat, disponibles trop tard pour corriger.",
    "Les initiatives d'amélioration se lancent, puis s'éteignent faute de rituel de suivi.",
    "Les écarts entre sites tiennent aux pratiques d'encadrement, pas aux équipements.",
  ],
  note: 'Source : entretiens terrain et analyse des données de production, juillet 2026.',
});

D.comparison(p, {
  eyebrow: 'Avant / après', number: '02',
  title: "De la stratégie à l'exécution.",
  left: { title: 'Sans cadre', items: ['Priorités floues', 'Décisions non suivies', 'Résultats variables'] },
  right: { title: 'Avec Genetrix', items: ['Cap clair et partagé', 'Exécution pilotée', 'Performance durable'] },
});

D.table(p, {
  eyebrow: 'Feuille de route',
  title: 'Quatre phases, six mois.',
  head: ['Phase', 'Durée', 'Livrable principal', 'Charge'],
  rows: [
    ['1 · Diagnostic', '4 semaines', 'Rapport et cartographie', '12 j'],
    ['2 · Cadrage', '3 semaines', 'Système de pilotage', '9 j'],
    ['3 · Déploiement', '12 semaines', 'Rituels installés', '28 j'],
    ['4 · Ancrage', '5 semaines', "Audit d'ancrage", '8 j'],
  ],
  widths: [1.4, 1, 2.6, 0.8],
  note: 'Charge exprimée en jours-consultant.',
});

D.quote(p, {
  text: "Genetrix nous a fait passer de la stratégie à l'exécution, avec des résultats visibles en moins de six mois.",
  source: 'Direction générale · Industrie',
});

D.closing(p, { title: "L'exécution fait la différence." });

D.save(p, process.argv[2] || 'deck.pptx').then(f => console.log('OK →', f));
