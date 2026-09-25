#!/usr/bin/env python3
"""Optimize portfolio PNGs to WebP for the web (quality 84, white matte)."""
import os
from PIL import Image

SRC = "/home/z/my-project/public/portfolio"

for name in sorted(os.listdir(SRC)):
    if not name.endswith(".png"):
        continue
    path = os.path.join(SRC, name)
    img = Image.open(path)
    if img.mode == "RGBA":
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        img = bg
    elif img.mode != "RGB":
        img = img.convert("RGB")
    out = path.replace(".png", ".webp")
    img.save(out, "WEBP", quality=84, method=6)
    print(f"{name} -> {os.path.basename(out)}: {os.path.getsize(out)} bytes ({img.size[0]}x{img.size[1]})")
