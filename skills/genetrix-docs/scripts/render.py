#!/usr/bin/env python3
"""
GENETRIX · render.py — rendu et contrôle qualité visuel des livrables.

    python3 scripts/render.py doc.html            # → doc.pdf
    python3 scripts/render.py rapport.docx        # → rapport.pdf
    python3 scripts/render.py deck.pptx --png     # → PDF + aperçus PNG
    python3 scripts/render.py doc.html --standalone  # HTML autoportant (assets en base64)

Pourquoi passer par là : un livrable n'est bon que si on l'a regardé.
Le script produit le PDF puis, avec --png, une image par page qu'il faut
ouvrir et inspecter (débordements, chevauchements, veuves, pagination)
avant d'envoyer quoi que ce soit au client.
"""
import argparse, base64, mimetypes, os, re, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / 'assets' / 'fonts'


def ensure_fonts():
    """Installe Montserrat pour l'utilisateur courant si absent : sans lui,
    LibreOffice substitue une police et le rendu ne reflète plus la marque."""
    try:
        listed = subprocess.run(['fc-list'], capture_output=True, text=True).stdout
        if 'Montserrat' in listed:
            return True
    except FileNotFoundError:
        return False
    dest = Path.home() / '.fonts'
    dest.mkdir(exist_ok=True)
    n = 0
    for ttf in FONTS.glob('*.ttf'):
        shutil.copy(ttf, dest / ttf.name); n += 1
    if n:
        subprocess.run(['fc-cache', '-f'], capture_output=True)
    return n > 0


def chromium():
    for c in ('chromium', 'chromium-browser', 'google-chrome', 'chrome'):
        p = shutil.which(c)
        if p:
            return p
    for p in Path('/opt/pw-browsers').glob('chromium*/chrome-linux/chrome'):
        return str(p)
    return None


def html_to_pdf(src: Path, out: Path):
    exe = chromium()
    if not exe:
        sys.exit('Chromium introuvable : impossible de rendre le HTML en PDF.')
    cmd = [exe, '--headless', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
           '--run-all-compositor-stages-before-draw', '--virtual-time-budget=10000',
           f'--print-to-pdf={out}', src.resolve().as_uri()]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if not out.exists():
        sys.exit(f'Échec du rendu PDF.\n{r.stderr[-2000:]}')
    return out


def office_to_pdf(src: Path, out: Path):
    ensure_fonts()
    subprocess.run(['soffice', '--headless', '--convert-to', 'pdf', '--outdir', str(out.parent), str(src)],
                   capture_output=True, text=True)
    produced = out.parent / (src.stem + '.pdf')
    if not produced.exists():
        sys.exit('Échec de la conversion LibreOffice.')
    if produced != out:
        produced.rename(out)
    return out


def to_pngs(pdf: Path, dpi=90):
    stem = pdf.with_suffix('')
    subprocess.run(['pdftoppm', '-jpeg', '-r', str(dpi), str(pdf), f'{stem}-p'], capture_output=True)
    return sorted(pdf.parent.glob(f'{stem.name}-p-*.jpg'))


def standalone(src: Path, out: Path):
    """Inline les CSS, images et polices : un seul fichier .html à envoyer."""
    html = src.read_text(encoding='utf-8')
    base = src.parent

    def data_uri(p: Path):
        mime = mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
        return f'data:{mime};base64,{base64.b64encode(p.read_bytes()).decode()}'

    def inline_css(m):
        href = m.group(1)
        if href.startswith(('http://', 'https://', 'data:')):
            return m.group(0)
        f = (base / href).resolve()
        if not f.exists():
            return m.group(0)
        css = f.read_text(encoding='utf-8')
        css = re.sub(r'url\((["\']?)(?!data:|https?:)([^)"\']+)\1\)',
                     lambda u: f'url({data_uri((f.parent / u.group(2)).resolve())})'
                     if (f.parent / u.group(2)).resolve().exists() else u.group(0), css)
        return f'<style>\n{css}\n</style>'

    html = re.sub(r'<link[^>]+href=["\']([^"\']+)["\'][^>]*>', inline_css, html)
    html = re.sub(r'(<img[^>]+src=)["\'](?!data:|https?:)([^"\']+)["\']',
                  lambda m: f'{m.group(1)}"{data_uri((base / m.group(2)).resolve())}"'
                  if (base / m.group(2)).resolve().exists() else m.group(0), html)
    out.write_text(html, encoding='utf-8')
    return out


def main():
    ap = argparse.ArgumentParser(description='Rendu PDF et contrôle visuel des livrables Genetrix.')
    ap.add_argument('source')
    ap.add_argument('-o', '--out')
    ap.add_argument('--png', action='store_true', help='exporter aussi une image par page')
    ap.add_argument('--dpi', type=int, default=90)
    ap.add_argument('--standalone', action='store_true', help='HTML autoportant (assets en base64)')
    a = ap.parse_args()

    src = Path(a.source)
    if not src.exists():
        sys.exit(f'Introuvable : {src}')

    if a.standalone:
        out = Path(a.out or src.with_name(src.stem + '-autoportant.html'))
        print('HTML autoportant →', standalone(src, out))
        return

    out = Path(a.out or src.with_suffix('.pdf'))
    ext = src.suffix.lower()
    if ext in ('.html', '.htm'):
        html_to_pdf(src, out)
    elif ext in ('.docx', '.pptx', '.xlsx', '.odt', '.doc', '.ppt'):
        office_to_pdf(src, out)
    else:
        sys.exit(f'Format non pris en charge : {ext}')
    print('PDF →', out)

    if a.png:
        pages = to_pngs(out, a.dpi)
        print(f'{len(pages)} page(s) :')
        for p in pages:
            print('  ', p)
        print('\nOuvrez ces images et vérifiez : débordements, chevauchements,')
        print('titres orphelins, tableaux coupés, pied de page et pagination.')


if __name__ == '__main__':
    main()
