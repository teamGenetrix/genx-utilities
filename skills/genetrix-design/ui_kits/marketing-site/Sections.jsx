/* Genetrix marketing site — sections. Each is exported to window for the
   Babel scope. Uses DS primitives via window[NS]. */
const NS = window.GenetrixDesignSystem_ba57d8;
const { Button, IconButton, Eyebrow, Card, StatFigure, Badge, Tag, Input, Select, Tabs, Dialog, Toast, Tooltip } = NS;

/* Lucide-style inline line icons (stroke, rounded). Substitute for the brand's
   custom 3px icon set — see readme Iconography. */
const ICON_PATHS = {
  'arrow-right': <React.Fragment><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></React.Fragment>,
  mail: <React.Fragment><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></React.Fragment>,
  phone: <path d="M6 3h4l2 5-2.5 1.8a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z" />,
  'map-pin': <React.Fragment><path d="M20 10c0 4.5-8 12-8 12s-8-7.5-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="2.6" /></React.Fragment>,
};
const LI = ({ n, size = 18, color = 'currentColor', sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw}
    strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-flex', flexShrink: 0 }}>
    {ICON_PATHS[n]}
  </svg>
);

const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 32px' };

function Header({ onContact }) {
  const [open, setOpen] = React.useState(false);
  const links = ['Approche', 'Piliers', 'Offres', 'Résultats'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(20,20,20,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #262626' }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 24, height: 68 }}>
        <img src="../../assets/logo-wordmark-blanc.png" alt="Genetrix" style={{ height: 26 }} />
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {links.map(l => (
            <a key={l} href={'#' + l} style={{ color: '#d6d6d6', textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: '0.02em', padding: '8px 12px', borderRadius: 16 }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2a2a2a'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d6d6d6'; }}>{l}</a>
          ))}
        </nav>
        <Button variant="primary" size="sm" onClick={onContact}>Prendre rendez-vous</Button>
      </div>
    </header>
  );
}

function Hero({ onContact }) {
  return (
    <section id="Approche" style={{ position: 'relative', background: 'var(--gx-noir)', color: '#fff', overflow: 'hidden', padding: '110px 0 120px' }}>
      <img src="../../assets/logo-full-blanc.png" alt="" style={{ position: 'absolute', right: '-6%', top: '50%', transform: 'translateY(-50%)', height: '150%', opacity: 0.05, pointerEvents: 'none' }} />
      <div style={{ ...wrap, position: 'relative' }}>
        <div style={{ fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: 11, color: '#b9b9b9', marginBottom: 26 }}>Consulting · Training · Coaching</div>
        <h1 style={{ margin: 0, fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.98, letterSpacing: '-0.02em', maxWidth: 900 }}>
          Là où le potentiel<br />devient performance<span style={{ color: 'var(--gx-accent)' }}>.</span>
        </h1>
        <p style={{ fontWeight: 300, fontSize: 'clamp(17px,2.2vw,22px)', color: '#d9d9d9', maxWidth: 620, marginTop: 26, lineHeight: 1.6 }}>
          De la stratégie à l'exécution, nous transformons le potentiel de vos équipes en résultats durables — sur le terrain, avec vos équipes.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 38, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={onContact} iconRight={<LI n="arrow-right" size={18} color="#fff" />}>Démarrer un diagnostic</Button>
          <Button variant="outline" size="lg" as="a" href="#Piliers" style={{ color: '#fff', borderColor: '#4a4a4a' }}>Voir les 11 piliers</Button>
        </div>
        <div style={{ display: 'flex', gap: 48, marginTop: 56, flexWrap: 'wrap' }}>
          <StatFigure prefix="+" value="100" label="organisations accompagnées" onDark />
          <StatFigure prefix="+" value="98" suffix="%" label="de satisfaction" onDark />
          <StatFigure prefix="+" value="15" label="ans d'expertise" onDark />
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  ['01', 'Stratégie et planification', 'Cap clair, priorités posées, feuille de route alignée.'],
  ['02', 'Leadership et culture', 'Un management qui engage et responsabilise les équipes.'],
  ['03', 'Gestion de la performance', 'Objectifs mesurables, rituels de suivi, cap tenu.'],
  ['04', 'Processus et standards', 'Des façons de faire stables, documentées, partagées.'],
  ['05', 'Amélioration continue', 'Le progrès comme routine, pas comme projet ponctuel.'],
  ['06', 'Gestion des talents', 'Les bonnes compétences, au bon endroit, au bon moment.'],
  ['07', 'Orientation client', 'La valeur définie par le client, mesurée en continu.'],
  ['08', 'Qualité et conformité', 'La rigueur au service de la confiance et du résultat.'],
  ['09', 'Gestion des risques', 'Anticiper, décider, protéger la performance.'],
  ['10', 'Innovation et agilité', 'Tester vite, apprendre, industrialiser ce qui marche.'],
  ['11', 'Pilotage par la donnée', 'Le chiffre d\'abord : décider sur des faits.'],
];

function Pillars() {
  return (
    <section id="Piliers" style={{ background: '#fff', padding: '96px 0' }}>
      <div style={wrap}>
        <Eyebrow number="08" style={{ marginBottom: 16 }}>Les piliers de l'excellence</Eyebrow>
        <h2 style={{ margin: 0, fontWeight: 900, fontSize: 'clamp(30px,4.5vw,44px)', letterSpacing: '-0.01em', maxWidth: 20 + 'ch' }}>
          Onze leviers, une même cohérence<span style={{ color: 'var(--gx-accent)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--gx-text-muted)', maxWidth: '62ch', marginTop: 18, fontSize: 16, fontWeight: 300, lineHeight: 1.6 }}>
          L'excellence opérationnelle est une culture systémique : chaque pilier compte, mais c'est leur cohérence qui fait la performance globale.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: 16, marginTop: 40 }}>
          {PILLARS.map(([no, title, desc]) => (
            <Card key={no} accentTop interactive padding={20}>
              <div style={{ color: 'var(--gx-accent)', fontWeight: 900, fontSize: 12 }}>{no}</div>
              <h4 style={{ margin: '6px 0 0', fontSize: 15.5, fontWeight: 900, lineHeight: 1.2 }}>{title}</h4>
              <p style={{ margin: '8px 0 0', color: 'var(--gx-text-muted)', fontSize: 13, lineHeight: 1.55 }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer({ onContact }) {
  const [tab, setTab] = React.useState('consulting');
  const data = {
    consulting: { t: 'Diagnostiquer, décider, exécuter', p: 'Nous structurons vos priorités et vous accompagnons de la décision jusqu\'aux résultats sur le terrain.', items: ['Diagnostic d\'excellence opérationnelle', 'Feuille de route et pilotage', 'Optimisation des processus', 'Transformation organisationnelle'] },
    training: { t: 'Des compétences qui restent chez vous', p: 'Des parcours de formation-action, ancrés dans vos cas réels, pour que le savoir-faire reste dans l\'entreprise.', items: ['Management et leadership', 'Lean et amélioration continue', 'Gestion de projet', 'Parcours sur mesure'] },
    coaching: { t: 'Accompagner dirigeants et équipes', p: 'Un coaching individuel et collectif orienté résultats, pour lever les freins et tenir le cap.', items: ['Coaching de dirigeants', 'Coaching d\'équipe', 'Accompagnement du changement', 'Codéveloppement'] },
  };
  const d = data[tab];
  return (
    <section id="Offres" style={{ background: 'var(--gx-gris-clr)', padding: '96px 0' }}>
      <div style={wrap}>
        <Eyebrow number="02" style={{ marginBottom: 16 }}>Nos offres</Eyebrow>
        <h2 style={{ margin: '0 0 28px', fontWeight: 900, fontSize: 'clamp(30px,4.5vw,44px)', letterSpacing: '-0.01em' }}>
          Trois métiers, une exigence<span style={{ color: 'var(--gx-accent)' }}>.</span>
        </h2>
        <Tabs items={[{ id: 'consulting', label: 'Consulting' }, { id: 'training', label: 'Training' }, { id: 'coaching', label: 'Coaching' }]} value={tab} onChange={setTab} style={{ maxWidth: 460 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, marginTop: 32, alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: 900, fontSize: 26, letterSpacing: '-0.01em' }}>{d.t}<span style={{ color: 'var(--gx-accent)' }}>.</span></h3>
            <p style={{ color: 'var(--gx-text-muted)', fontSize: 16, fontWeight: 300, lineHeight: 1.6, marginTop: 14, maxWidth: '48ch' }}>{d.p}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {d.items.map(i => <Tag key={i}>{i}</Tag>)}
            </div>
            <div style={{ marginTop: 28 }}><Button variant="dark" onClick={onContact} iconRight={<LI n="arrow-right" size={16} color="#fff" />}>Parler de votre projet</Button></div>
          </div>
          <Card dark padding={32}>
            <Eyebrow onDark style={{ marginBottom: 18 }}>Impact mesuré</Eyebrow>
            <StatFigure prefix="+" value="30" suffix="%" label="de productivité gagnée" onDark />
            <div style={{ height: 1, background: '#2c2c2c', margin: '22px 0' }} />
            <p style={{ color: '#cfcfcf', fontSize: 14, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
              « Genetrix nous a fait passer de la stratégie à l'exécution, avec des résultats visibles en moins de six mois. »
            </p>
            <div style={{ color: '#9a9a9a', fontSize: 12, marginTop: 14, letterSpacing: '0.04em' }}>Direction Générale · Industrie</div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Contact({ onSubmit }) {
  return (
    <section id="Résultats" style={{ background: '#fff', padding: '96px 0' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
        <div>
          <Eyebrow number="11" style={{ marginBottom: 16 }}>Passons à l'action</Eyebrow>
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: 'clamp(30px,4.5vw,44px)', letterSpacing: '-0.01em' }}>
            Combler l'écart entre potentiel et résultats<span style={{ color: 'var(--gx-accent)' }}>.</span>
          </h2>
          <p style={{ color: 'var(--gx-text-muted)', fontSize: 16, fontWeight: 300, lineHeight: 1.6, marginTop: 18, maxWidth: '46ch' }}>
            Un premier échange de 30 minutes pour cadrer votre enjeu. Sans engagement.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            {[['mail', 'contact@genetrix.ci'], ['phone', '+225 00 00 00 00'], ['map-pin', 'Abidjan, Côte d\'Ivoire']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gx-text)', fontSize: 15 }}>
                <span style={{ color: 'var(--gx-accent)' }}><LI n={ic} size={18} color="var(--gx-accent)" /></span>{t}
              </div>
            ))}
          </div>
        </div>
        <Card padding={28} style={{ boxShadow: 'var(--gx-shadow-lg)' }}>
          <form onSubmit={e => { e.preventDefault(); onSubmit(); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Nom" placeholder="Konan" required />
              <Input label="Organisation" placeholder="Votre entreprise" />
            </div>
            <Input label="Email professionnel" type="email" placeholder="vous@entreprise.ci" required />
            <Select label="Service souhaité"><option>Consulting</option><option>Training</option><option>Coaching</option><option>Je ne sais pas encore</option></Select>
            <Button variant="primary" size="lg" fullWidth type="submit">Demander un rendez-vous</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--gx-noir)', color: '#b6b6b6', padding: '64px 0 40px' }}>
      <div style={wrap}>
        <img src="../../assets/logo-wordmark-blanc.png" alt="Genetrix" style={{ height: 34, marginBottom: 18 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between' }}>
          <p style={{ maxWidth: '40ch', fontWeight: 300, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            Là où le potentiel devient performance<span style={{ color: 'var(--gx-accent)' }}>.</span> Consulting, training et coaching pour l'excellence opérationnelle.
          </p>
          <div style={{ display: 'flex', gap: 56, fontSize: 13 }}>
            <div><b style={{ color: '#fff', display: 'block', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11 }}>Offres</b><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>Consulting<span>Training</span><span>Coaching</span></div></div>
            <div><b style={{ color: '#fff', display: 'block', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11 }}>Cabinet</b><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>Approche<span>Piliers</span><span>Résultats</span></div></div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #262626', marginTop: 40, paddingTop: 20, fontSize: 12, color: '#7a7a7a' }}>© 2026 Genetrix · Abidjan, Côte d'Ivoire</div>
      </div>
    </footer>
  );
}

Object.assign(window, { GxHeader: Header, GxHero: Hero, GxPillars: Pillars, GxOffer: Offer, GxContact: Contact, GxFooter: Footer });
