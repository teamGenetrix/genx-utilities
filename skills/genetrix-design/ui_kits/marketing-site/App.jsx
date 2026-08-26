const NS2 = window.GenetrixDesignSystem_ba57d8;
const { Dialog, Toast, Button } = NS2;

function App() {
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  React.useEffect(() => { if (toast) { const t = setTimeout(() => setToast(false), 4000); return () => clearTimeout(t); } }, [toast]);
  const openContact = () => document.getElementById('Résultats').scrollTo ? window.scrollTo({ top: document.getElementById('Résultats').offsetTop - 60, behavior: 'smooth' }) : null;

  return (
    <div>
      <window.GxHeader onContact={() => setDialog(true)} />
      <window.GxHero onContact={() => setDialog(true)} />
      <window.GxPillars />
      <window.GxOffer onContact={() => setDialog(true)} />
      <window.GxContact onSubmit={() => setToast(true)} />
      <window.GxFooter />

      <Dialog open={dialog} onClose={() => setDialog(false)} title="Prendre rendez-vous"
        footer={<><Button variant="ghost" onClick={() => setDialog(false)}>Plus tard</Button><Button variant="primary" onClick={() => { setDialog(false); setToast(true); }}>Confirmer</Button></>}>
        Réservez un premier échange de 30 minutes avec un consultant Genetrix. Nous revenons vers vous sous 48h pour caler un créneau.
      </Dialog>

      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1100 }}>
          <Toast title="Demande envoyée" tone="success" onClose={() => setToast(false)}>Merci — nous revenons vers vous sous 48h.</Toast>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
