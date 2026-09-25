#!/usr/bin/env python3
"""Download the 2 new Hanifah Studio portfolio images from Cloudinary."""
import os
import urllib.request

OUT_DIR = "/home/z/my-project/public/portfolio"

IMAGES = {
    "realestate": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790335092/ChatGPT_Image_Sep_25_2026_12_16_50_PM.png",
    "skincare2": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790339196/ChatGPT_Image_Sep_25_2026_01_25_16_PM.png",
}

def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for name, url in IMAGES.items():
        dest = os.path.join(OUT_DIR, f"{name}.png")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
        with open(dest, "wb") as fh:
            fh.write(data)
        print(f"{name}: {len(data)} bytes")

if __name__ == "__main__":
    main()
