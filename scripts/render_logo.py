"""Render the Hanifah Studio logo SVG to PNG assets + design preview.

Outputs:
  public/hanifah-logo-icon.png   (180px apple touch icon)
  scripts/logo-preview.png       (design check: large + small sizes)
"""
import cairosvg

SVG = "/home/z/my-project/public/hanifah-logo.svg"

# Apple touch icon: iOS needs a solid background (no transparency) at 180px.
cairosvg.svg2png(
    url=SVG,
    write_to="/home/z/my-project/public/hanifah-logo-icon.png",
    output_width=180,
    output_height=180,
    background_color="#0a1024",
)

# Design preview: the mark at several sizes on light and dark backgrounds.
from PIL import Image

def render(size):
    png = cairosvg.svg2png(url=SVG, output_width=size, output_height=size)
    import io
    return Image.open(io.BytesIO(png)).convert("RGBA")

light = Image.new("RGB", (560, 300), "#faf7f2")
dark = Image.new("RGB", (560, 300), "#0a1024")

# Large mark + small marks on light
big = render(200)
light.paste(big, (40, 50), big)
for i, s in enumerate([40, 32, 24, 16]):
    sm = render(s)
    light.paste(sm, (280 + i * 60, 130), sm)

# Large mark on dark (footer context)
bigd = render(200)
dark.paste(bigd, (40, 50), bigd)

combo = Image.new("RGB", (560, 620), "#ffffff")
combo.paste(light, (0, 0))
combo.paste(dark, (0, 310))
combo.save("/home/z/my-project/scripts/logo-preview.png")
print("preview saved")

# Downscale preview for viewing
combo.resize((420, 465)).save("/home/z/my-project/scripts/logo-preview-small.png")
print("done")
