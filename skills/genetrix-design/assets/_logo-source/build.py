#!/usr/bin/env python3
"""Régénère le lockup Genetrix avec la baseline de son choix.

Le bloc rouge et le mot « Genetrix. » sont repris tels quels du master :
on ne les redessine jamais. Seule la ligne de baseline est recomposée,
en Poppins, la police du lettrage d'origine.

    python3 build.py "Consulting | Training | Coaching | Technology"
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import numpy as np

HERE = Path(__file__).parent
MASTER = HERE / 'master-sans-baseline.png'     # lockup blanc, baseline effacée
FONT = HERE / 'poppins-latin-400-normal.ttf'

# Géométrie du master (7541 × 1820), relevée sur le logo d'origine.
G_LEFT, G_RIGHT = 2016, 7224      # « Genetrix » sans le point : la baseline se cale dessus
CAP_TOP = 1323                    # haut des capitales de la baseline d'origine
REF_SIZE, REF_TRACK, REF_SEP = 296, 7, 149   # corps, interlettrage, espace autour du |

BLANC = (255, 255, 255)
GRIS = (91, 90, 89)
NOIR = (20, 20, 20)


def render_baseline(text, size, track, sep):
    """Rend la ligne sur fond transparent, retournée rognée au plus juste."""
    f = ImageFont.truetype(str(FONT), size)
    img = Image.new('L', (24000, 1600), 0)
    d = ImageDraw.Draw(img)
    x = 400.0
    for ch in text:
        if ch == ' ':
            x += sep
            continue
        d.text((x, 400), ch, font=f, fill=255)
        x += f.getlength(ch) + track
    a = np.array(img)
    ys, xs = np.where(a > 20)
    return a[ys.min():ys.max() + 1, xs.min():xs.max() + 1], ys.min(), a


def fit(text, width, track_ratio=1.0, sep_ratio=1.0):
    """Cherche le corps qui fait tenir la ligne dans `width`."""
    lo, hi = 20, REF_SIZE * 2
    for _ in range(40):
        mid = (lo + hi) // 2
        crop, _, _ = render_baseline(text, mid, REF_TRACK * mid / REF_SIZE * track_ratio,
                                     REF_SEP * mid / REF_SIZE * sep_ratio)
        if crop.shape[1] <= width:
            lo = mid
        else:
            hi = mid
    return lo


def cap_offset(size, track, sep):
    """Décalage entre le haut du bloc rendu et le haut des capitales.
    Les jambages ascendants (l, t, h) montent au-dessus des capitales :
    on cale sur la hauteur de capitale pour retrouver l'assise d'origine."""
    f = ImageFont.truetype(str(FONT), size)
    img = Image.new('L', (2000, 1600), 0)
    ImageDraw.Draw(img).text((100, 400), 'C', font=f, fill=255)
    ys = np.where(np.array(img) > 20)[0]
    return ys.min() - 400


def build(text, out_dir, track_ratio=1.0, sep_ratio=1.0):
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    master = Image.open(MASTER).convert('RGBA')
    W, H = master.size

    width = G_RIGHT - G_LEFT
    size = fit(text, width, track_ratio, sep_ratio)
    track = REF_TRACK * size / REF_SIZE * track_ratio
    sep = REF_SEP * size / REF_SIZE * sep_ratio
    crop, top, full = render_baseline(text, size, track, sep)

    # Aligner le haut des capitales sur celui de la baseline d'origine.
    f = ImageFont.truetype(str(FONT), size)
    probe = Image.new('L', (2000, 1600), 0)
    ImageDraw.Draw(probe).text((100, 400), 'C', font=f, fill=255)
    cap_top_in_full = np.where(np.array(probe) > 20)[0].min() - 400 + 400  # y absolu dans full
    delta = cap_top_in_full - top          # écart entre haut du rognage et haut des capitales
    y = CAP_TOP - delta
    x = G_RIGHT - crop.shape[1]            # aligné à droite sur la fin de « Genetrix »

    alpha = Image.fromarray(crop)
    for name, rgb in (('blanc', BLANC), ('gris', GRIS), ('noir', NOIR)):
        base = master.copy()
        if name != 'blanc':                # recolorer le mot, garder le bloc et le point rouges
            a = np.array(base)
            red = (a[..., 0].astype(int) - a[..., 2].astype(int) > 50) & (a[..., 3] > 50)
            block = np.zeros(a.shape[:2], bool)
            block[:, :1900] = True
            m = (~red) & (~block) & (a[..., 3] > 0)
            for c in range(3):
                a[..., c] = np.where(m, rgb[c], a[..., c])
            base = Image.fromarray(a)
        layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        tint = Image.new('RGBA', alpha.size, rgb + (255,))
        tint.putalpha(alpha)
        layer.paste(tint, (int(x), int(y)))
        base.alpha_composite(layer)
        base.save(out_dir / f'lockup-{name}.png', optimize=True)

    print(f'baseline « {text} » · corps {size} · largeur {crop.shape[1]} / {width} px')
    return size


if __name__ == '__main__':
    txt = sys.argv[1] if len(sys.argv) > 1 else 'Consulting | Training | Coaching | Technology'
    out = sys.argv[2] if len(sys.argv) > 2 else 'out'
    build(txt, out)
