#!/usr/bin/env python3
"""
Krisala Aventis — IndexNow Omnipresent Sweep
Force-submits all URLs to IndexNow (Bing, DuckDuckGo, Yandex) for instant indexing
"""

import urllib.request
import urllib.error
import json

HOST = "krisalaventis.in"
INDEXNOW_KEY = "2f5a8b79d63c4e10b2f18394a7d65b2f"

ALL_URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/krisala-aventis-tathawade-2-bhk-flats",
    f"https://{HOST}/krisala-aventis-tathawade-3-bhk-luxury-apartments",
    f"https://{HOST}/krisala-aventis-tathawade-amenities-lifestyle",
    f"https://{HOST}/krisala-aventis-tathawade-aluform-technology",
    f"https://{HOST}/krisala-aventis-tathawade-brochure-download",
    f"https://{HOST}/krisala-aventis-tathawade-competitor-comparison",
    f"https://{HOST}/krisala-aventis-tathawade-connectivity-it-hubs",
    f"https://{HOST}/krisala-aventis-tathawade-construction-status",
    f"https://{HOST}/krisala-aventis-tathawade-cost-sheet-estimator",
    f"https://{HOST}/krisala-aventis-tathawade-customer-reviews-testimonials",
    f"https://{HOST}/krisala-aventis-tathawade-developer-legacy",
    f"https://{HOST}/krisala-aventis-tathawade-educational-hubs",
    f"https://{HOST}/krisala-aventis-tathawade-flats-near-hinjewadi",
    f"https://{HOST}/krisala-aventis-tathawade-growth-story-roi-2026",
    f"https://{HOST}/krisala-aventis-tathawade-hindi-janakari",
    f"https://{HOST}/krisala-aventis-tathawade-home-loan-emi-calculator",
    f"https://{HOST}/krisala-aventis-tathawade-investment-roi",
    f"https://{HOST}/krisala-aventis-tathawade-lifestyle-it-park-proximity",
    f"https://{HOST}/krisala-aventis-tathawade-local-area-guide-map",
    f"https://{HOST}/krisala-aventis-tathawade-local-pune-review-hindi-marathi",
    f"https://{HOST}/krisala-aventis-tathawade-luxury-specifications-aluform",
    f"https://{HOST}/krisala-aventis-tathawade-marathi-mahiti",
    f"https://{HOST}/krisala-aventis-tathawade-market-growth-calculator",
    f"https://{HOST}/krisala-aventis-tathawade-near-aditya-birla-hospital",
    f"https://{HOST}/krisala-aventis-tathawade-near-bhujbal-chowk",
    f"https://{HOST}/krisala-aventis-tathawade-near-jspm-university",
    f"https://{HOST}/krisala-aventis-tathawade-near-mumbai-pune-expressway",
    f"https://{HOST}/krisala-aventis-tathawade-near-phoenix-mall-wakad",
    f"https://{HOST}/krisala-aventis-tathawade-near-shakai-circle",
    f"https://{HOST}/krisala-aventis-tathawade-nri-investment",
    f"https://{HOST}/krisala-aventis-tathawade-possession-timeline-2026",
    f"https://{HOST}/krisala-aventis-tathawade-price-list",
    f"https://{HOST}/krisala-aventis-tathawade-public-transport",
    f"https://{HOST}/krisala-aventis-tathawade-real-estate-glossary",
    f"https://{HOST}/krisala-aventis-tathawade-smart-study-homes",
    f"https://{HOST}/krisala-aventis-tathawade-vastu-compliance",
    f"https://{HOST}/tathawade-real-estate-investment-guide",
    f"https://{HOST}/wakad-vs-tathawade-property-analysis",
    f"https://{HOST}/krisala-aventis-premium-living-review",
    f"https://{HOST}/krisala-aventis-special-offer",
    # New pages
    f"https://{HOST}/krisala-aventis-vs-godrej-tathawade",
    f"https://{HOST}/best-3-bhk-under-1-5-crore-pune-2026",
    f"https://{HOST}/tathawade-vs-baner-property-2026",
    f"https://{HOST}/pcmc-luxury-apartments-tathawade-2026",
    f"https://{HOST}/krisala-aventis-vs-kolte-patil-tathawade",
    f"https://{HOST}/residential-flats-near-hinjewadi-phase-3",
    f"https://{HOST}/how-to-buy-flat-in-west-pune-guide-2026",
    f"https://{HOST}/krisala-aventis-tathawade-site-visit-book",
]

INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow"

def submit_batch(urls, endpoint):
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": f"https://{HOST}/{INDEXNOW_KEY}.txt",
        "urlList": urls
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        endpoint,
        data=data,
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "KrisalaAventis-IndexNow-Bot/3.0"
        },
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status, resp.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8")
    except Exception as ex:
        return 0, str(ex)

def main():
    print(f"IndexNow Omnipresent Sweep v3.0")
    print(f"Submitting {len(ALL_URLS)} URLs to IndexNow...")
    print("="*55)

    # Submit in batches of 100 (IndexNow limit)
    BATCH_SIZE = 100
    batches = [ALL_URLS[i:i+BATCH_SIZE] for i in range(0, len(ALL_URLS), BATCH_SIZE)]

    for i, batch in enumerate(batches, 1):
        print(f"\nBatch {i}/{len(batches)} — {len(batch)} URLs")
        status, body = submit_batch(batch, INDEXNOW_ENDPOINT)
        if status in (200, 202):
            print(f"  ✅ IndexNow (api.indexnow.org): HTTP {status} — Accepted")
        else:
            print(f"  ⚠️  IndexNow: HTTP {status} — {body[:200]}")

    print(f"\n{'='*55}")
    print(f"  Sweep complete — {len(ALL_URLS)} URLs submitted to IndexNow")
    print(f"  Bing, DuckDuckGo, Yandex will crawl within minutes.")
    print(f"{'='*55}")

if __name__ == "__main__":
    main()
