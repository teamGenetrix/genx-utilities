const NSS = window.GenetrixDesignSystem_ba57d8;
const { Eyebrow, StatFigure, Badge } = NSS;

const FRAME = { width: 1280, height: 720, position: 'relative', overflow: 'hidden', fontFamily: 'var(--gx-font)' };
const PAD = 88;
const Foot = ({ n, dark }) => (
  <div style={{ position: 'absolute', left: PAD, bottom: 40, fontSize: 12, letterSpacing: '0.14em', color: dark ? '#8a8a8a' : 'var(--gx-text-muted)', fontWeight: 600 }}>GENETRIX · {n}</div>
);
const Gwm = () => <img src="../../assets/logo-full-blanc.png" alt="" style={{ position: 'absolute', right: '-4%', top: '50%', transform: 'translateY(-50%)', height: '150%', opacity: 0.05, pointerEvents: 'none' }} />;

function TitleSlide() {
  return (
    <div style={{ ...FRAME, background: 'var(--gx-noir)', color: '#fff', padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Gwm />
      <div style={{ position: 'relative' }}>
        <img src="../../assets/logo-wordmark-blanc.png" alt="Genetrix" style={{ height: 40, marginBottom: 40 }} />
        <div style={{ fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: 13, color: '#b9b9b9', marginBottom: 24 }}>Excellence opérationnelle</div>
        <h1 style={{ margin: 0, fontWeight: 900, fontSize: 76, lineHeight: 0.98, letterSpacing: '-0.02em', maxWidth: '16ch' }}>
          Là où le potentiel devient performance<span style={{ color: 'var(--gx-accent)' }}>.</span>
        </h1>
        <p style={{ fontWeight: 300, fontSize: 22, color: '#d9d9d9', marginTop: 30, maxWidth: '52ch', lineHeight: 1.5 }}>
          De la stratégie à l'exécution, avec vos équipes, sur le terrain.
        </p>
      </div>
      <Foot n="01" dark />
    </div>
  );
}

function SectionSlide() {
  return (
    <div style={{ ...FRAME, background: '#fff', color: 'var(--gx-noir)', padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontWeight: 900, fontSize: 120, color: 'var(--gx-accent)', lineHeight: 1, letterSpacing: '-0.03em' }}>02</div>
      <h2 style={{ margin: '20px 0 0', fontWeight: 900, fontSize: 56, letterSpacing: '-0.015em', maxWidth: '18ch' }}>
        Les onze piliers de l'excellence<span style={{ color: 'var(--gx-accent)' }}>.</span>
      </h2>
      <p style={{ color: 'var(--gx-text-muted)', fontSize: 20, fontWeight: 300, marginTop: 20, maxWidth: '54ch', lineHeight: 1.5 }}>
        Chaque pilier compte, mais c'est leur cohérence qui fait la performance globale.
      </p>
      <Foot n="02" />
    </div>
  );
}

function StatSlide() {
  return (
    <div style={{ ...FRAME, background: 'var(--gx-noir)', color: '#fff', padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Gwm />
      <div style={{ position: 'relative' }}>
        <Eyebrow onDark style={{ marginBottom: 36 }}>Résultats mesurés</Eyebrow>
        <div style={{ display: 'flex', gap: 96, flexWrap: 'wrap' }}>
          <StatFigure prefix="+" value="100" label="organisations accompagnées" onDark />
          <StatFigure prefix="+" value="98" suffix="%" label="de satisfaction" onDark />
          <StatFigure prefix="+" value="30" suffix="%" label="de productivité gagnée" onDark />
        </div>
        <p style={{ color: '#cfcfcf', fontSize: 18, fontWeight: 300, marginTop: 48, maxWidth: '58ch', lineHeight: 1.6 }}>
          Le chiffre d'abord : on privilégie les preuves aux longs paragraphes.
        </p>
      </div>
      <Foot n="03" dark />
    </div>
  );
}

function ComparisonSlide() {
  const col = (title, tone, items, fill) => (
    <div style={{ flex: 1, background: fill, border: '1px solid var(--gx-line)', borderTop: `4px solid ${tone}`, borderRadius: 16, padding: 36 }}>
      <div style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gx-text-muted)', marginBottom: 18 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 18, fontWeight: 300, lineHeight: 2, color: 'var(--gx-noir)' }}>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
  return (
    <div style={{ ...FRAME, background: '#fff', color: 'var(--gx-noir)', padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Eyebrow number="03" style={{ marginBottom: 16 }}>Avant / Après</Eyebrow>
      <h2 style={{ margin: '0 0 32px', fontWeight: 900, fontSize: 44, letterSpacing: '-0.01em' }}>
        De la stratégie à l'exécution<span style={{ color: 'var(--gx-accent)' }}>.</span>
      </h2>
      <div style={{ display: 'flex', gap: 24 }}>
        {col('Sans cadre', 'var(--gx-gris)', ['Priorités floues', 'Décisions non suivies', 'Résultats variables'], '#fff')}
        {col('Avec Genetrix', 'var(--gx-accent)', ['Cap clair et partagé', 'Exécution pilotée', 'Performance durable'], 'var(--gx-gris-clr)')}
      </div>
      <Foot n="04" />
    </div>
  );
}

function QuoteSlide() {
  return (
    <div style={{ ...FRAME, background: 'var(--gx-accent)', color: '#fff', padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img src="../../assets/logo-full-blanc.png" alt="" style={{ position: 'absolute', right: -60, bottom: -60, height: 380, opacity: 0.12 }} />
      <div style={{ position: 'relative' }}>
        <div style={{ fontWeight: 900, fontSize: 46, lineHeight: 1.15, letterSpacing: '-0.01em', maxWidth: '20ch' }}>
          « Genetrix nous a fait passer de la stratégie à l'exécution, avec des résultats visibles en moins de six mois<span style={{ color: 'var(--gx-noir)' }}>.</span> »
        </div>
        <div style={{ marginTop: 32, fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffd9d9', fontWeight: 600 }}>Direction Générale · Industrie</div>
      </div>
      <Foot n="05" dark />
    </div>
  );
}

const SLIDES = [TitleSlide, SectionSlide, StatSlide, ComparisonSlide, QuoteSlide];

function Deck() {
  const [i, setI] = React.useState(0);
  const [scale, setScale] = React.useState(1);
  const hostRef = React.useRef(null);
  React.useEffect(() => {
    const fit = () => { if (hostRef.current) setScale(Math.min(1, hostRef.current.clientWidth / 1280, hostRef.current.clientHeight / 720)); };
    fit(); window.addEventListener('resize', fit); return () => window.removeEventListener('resize', fit);
  }, []);
  React.useEffect(() => {
    const k = e => { if (e.key === 'ArrowRight') setI(v => Math.min(SLIDES.length - 1, v + 1)); if (e.key === 'ArrowLeft') setI(v => Math.max(0, v - 1)); };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);
  const Cur = SLIDES[i];
  return (
    <div style={{ minHeight: '100vh', background: '#e9e9e9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, padding: 24 }}>
      <div ref={hostRef} style={{ width: '100%', maxWidth: 1280, aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 1280, height: 720, transform: `scale(${scale})`, transformOrigin: 'center', boxShadow: '0 24px 60px rgba(0,0,0,.25)', borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
          <Cur />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--gx-font)' }}>
        <button onClick={() => setI(v => Math.max(0, v - 1))} disabled={i === 0} style={navBtn(i === 0)}>‹</button>
        <div style={{ display: 'flex', gap: 8 }}>
          {SLIDES.map((_, n) => <button key={n} onClick={() => setI(n)} aria-label={'Slide ' + (n + 1)} style={{ width: 9, height: 9, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0, background: n === i ? 'var(--gx-accent)' : '#bdbdbd' }} />)}
        </div>
        <button onClick={() => setI(v => Math.min(SLIDES.length - 1, v + 1))} disabled={i === SLIDES.length - 1} style={navBtn(i === SLIDES.length - 1)}>›</button>
      </div>
    </div>
  );
}
const navBtn = dis => ({ width: 40, height: 40, borderRadius: '50%', border: '1px solid #cfcfcf', background: '#fff', fontSize: 20, cursor: dis ? 'not-allowed' : 'pointer', opacity: dis ? 0.4 : 1, color: 'var(--gx-noir)' });

ReactDOM.createRoot(document.getElementById('root')).render(<Deck />);
