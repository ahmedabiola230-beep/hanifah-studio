"""Enhance Hanifah's portrait photo for the website.

Source: upload/ORDER.png (60x60, very small thumbnail).
Output: public/hanifah-photo.png (600x600, enhanced).

Strategy: 10x Lanczos upscale, mild unsharp mask to restore perceived
detail, gentle contrast/saturation normalization. The result is soft
(compared to a real high resolution photo) but presentable inside
rounded frames. A TODO comment in the components marks where to drop
in a higher resolution photo later.
"""
from PIL import Image, ImageFilter, ImageEnhance

SRC = "/home/z/my-project/upload/ORDER.png"
OUT = "/home/z/my-project/public/hanifah-photo.png"

img = Image.open(SRC).convert("RGB")

# 10x high quality upscale
big = img.resize((600, 600), Image.LANCZOS)

# Mild unsharp mask to restore perceived edge detail
big = big.filter(ImageFilter.UnsharpMask(radius=3, percent=110, threshold=2))

# Very gentle smoothing pass to hide upscale artifacts, then re sharpen
big = big.filter(ImageFilter.SMOOTH)
big = big.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))

# Gentle tonal normalization (keep natural, no heavy filters)
big = ImageEnhance.Contrast(big).enhance(1.04)
big = ImageEnhance.Color(big).enhance(1.05)
big = ImageEnhance.Brightness(big).enhance(1.01)

big.save(OUT, "PNG", optimize=True)
print("saved", OUT, big.size)

# Also verify file size
import os
print("bytes:", os.path.getsize(OUT))
