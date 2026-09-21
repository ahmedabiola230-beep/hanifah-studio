"""Swap in Hanifah's new high resolution photo.

Source: upload/ChatGPT Image Jul 21, 2026, 12_30_38 PM.png (1981x794).
Output: public/hanifah-photo.png (800x1000, 4:5 portrait crop centered
on the face) which feeds all three placements on the site: the About
page portrait card, the home page About teaser tile, and the contact
page avatar.
"""
from PIL import Image

SRC = "/home/z/my-project/upload/ChatGPT Image Jul 21, 2026, 12_30_38 PM.png"
OUT = "/home/z/my-project/public/hanifah-photo.png"

img = Image.open(SRC).convert("RGB")
W, H = img.size  # 1981 x 794

# Face is horizontally centered around x ~= 990 (between the plant and
# the wall poster). To loosen the tight framing we extend the top and
# bottom with a mirrored, heavily blurred band (colors continue exactly
# at the seam, and the blur removes fold artifacts), then take a 4:5
# crop centered on the face.
from PIL import ImageFilter

face_x = 990
top_pad, bottom_pad = 90, 130

top_src = img.crop((0, 0, W, top_pad)).transpose(Image.FLIP_TOP_BOTTOM)
top_band = top_src.filter(ImageFilter.GaussianBlur(22))
bottom_src = img.crop((0, H - bottom_pad, W, H)).transpose(Image.FLIP_TOP_BOTTOM)
bottom_band = bottom_src.filter(ImageFilter.GaussianBlur(26))

canvas = Image.new("RGB", (W, H + top_pad + bottom_pad))
canvas.paste(top_band, (0, 0))
canvas.paste(img, (0, top_pad))
canvas.paste(bottom_band, (0, top_pad + H))

H2 = canvas.size[1]
crop_w = round(H2 * 0.8)
left = max(0, min(W - crop_w, face_x - crop_w // 2))
crop = canvas.crop((left, 0, left + crop_w, H2))

# Mild upscale to 800x1000 so retina screens stay crisp
crop = crop.resize((800, 1000), Image.LANCZOS)

crop.save(OUT, "PNG", optimize=True)
print("saved", OUT, crop.size, "crop box left:", left)

import os
print("bytes:", os.path.getsize(OUT))
