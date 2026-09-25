#!/usr/bin/env python3
"""Download the 10 Hanifah Studio portfolio images from Cloudinary."""
import os
import urllib.request

OUT_DIR = "/home/z/my-project/public/portfolio"

IMAGES = {
    "cleaning": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790300270/ChatGPT_Image_Sep_25_2026_02_08_33_AM.png",
    "construction": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790300219/ChatGPT_Image_Sep_25_2026_01_58_26_AM.png",
    "restaurant": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790300192/ChatGPT_Image_Sep_25_2026_01_46_14_AM.png",
    "dentist": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790300915/ChatGPT_Image_Sep_25_2026_02_40_33_AM.png",
    "salon": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790299867/ChatGPT_Image_Sep_25_2026_02_26_15_AM.png",
    "fashion": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790300252/ChatGPT_Image_Sep_25_2026_01_12_18_AM.png",
    "skincare": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790300363/ChatGPT_Image_Sep_25_2026_12_54_42_AM.png",
    "accounting": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790301109/ChatGPT_Image_Sep_25_2026_02_49_51_AM.png",
    "furniture": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790303527/ChatGPT_Image_Sep_25_2026_03_27_21_AM.png",
    "motorcycle": "https://res.cloudinary.com/mwlcjwas/image/upload/v1790303953/ChatGPT_Image_Sep_25_2026_03_31_30_AM.png",
}

def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for name, url in IMAGES.items():
        dest = os.path.join(OUT_DIR, f"{name}.png")
        # Cloudinary fetch fails without a browser-like UA on some assets
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
        with open(dest, "wb") as fh:
            fh.write(data)
        print(f"{name}: {len(data)} bytes")

if __name__ == "__main__":
    main()
