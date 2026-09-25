#!/usr/bin/env python3
"""Fetch all 10 Hanifah Studio project sites and extract SEO + visible text
so portfolio titles and descriptions match the real websites."""
import json
import re
import urllib.request

SITES = {
    "cleaning": "https://cerulea.space-z.ai/",
    "construction": "https://stonemark.space-z.ai/",
    "restaurant": "https://resturantember.space-z.ai/",
    "dentist": "https://dentisthealth.space-z.ai/",
    "salon": "https://hairandsalon.space-z.ai/",
    "fashion": "https://fashion.space-z.ai/",
    "skincare": "https://serein.space-z.ai/",
    "accounting": "https://ledgerwellaccounting.space-z.ai/",
    "furniture": "https://furniturekitchen.space-z.ai/",
    "motorcycle": "https://mortocycle.space-z.ai/",
}

UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def strip_tags(html: str) -> str:
    html = re.sub(r"<script[^>]*>.*?</script>", " ", html, flags=re.S)
    html = re.sub(r"<style[^>]*>.*?</style>", " ", html, flags=re.S)
    html = re.sub(r"<[^>]+>", " ", html)
    html = re.sub(r"&amp;", "&", html)
    html = re.sub(r"&#x27;|&#39;", "'", html)
    html = re.sub(r"&quot;", '"', html)
    html = re.sub(r"&nbsp;", " ", html)
    html = re.sub(r"\s+", " ", html)
    return html.strip()

def extract(pattern: str, html: str) -> str:
    m = re.search(pattern, html, flags=re.S)
    return strip_tags(m.group(1))[:400] if m else ""

results = {}
for name, url in SITES.items():
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=45) as resp:
            html = resp.read().decode("utf-8", "ignore")
        title = extract(r"<title>(.*?)</title>", html)
        desc = extract(r'<meta name="description" content="(.*?)"', html)
        h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", html, flags=re.S)
        h2s = re.findall(r"<h2[^>]*>(.*?)</h2>", html, flags=re.S)[:6]
        body = strip_tags(html)
        # grab a chunk of body text after the header nav for context
        results[name] = {
            "url": url,
            "title": title,
            "description": desc,
            "h1": [strip_tags(h) for h in h1s][:3],
            "h2": [strip_tags(h) for h in h2s],
            "body_sample": body[:1500],
        }
        print(f"=== {name} ===")
        print("TITLE:", title)
        print("DESC:", desc)
        print("H1:", results[name]["h1"])
        print("H2:", results[name]["h2"])
        print()
    except Exception as exc:
        results[name] = {"url": url, "error": str(exc)}
        print(f"=== {name} === ERROR: {exc}")

with open("/home/z/my-project/scripts/site_content.json", "w") as fh:
    json.dump(results, fh, indent=2)
print("saved to scripts/site_content.json")
