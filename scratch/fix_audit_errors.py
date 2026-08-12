import os

base_dir = "/Users/vikasyewle/krisalaaventis"

# Files missing schema
silos = [
    "krisala-aventis-tathawade-possession-timeline-2026.html",
    "krisala-aventis-tathawade-local-area-guide-map.html",
    "krisala-aventis-tathawade-marathi-mahiti.html",
    "krisala-aventis-tathawade-smart-study-homes.html",
    "krisala-aventis-tathawade-near-shakai-circle.html",
    "krisala-aventis-tathawade-hindi-janakari.html",
    "krisala-aventis-tathawade-local-pune-review-hindi-marathi.html",
    "krisala-aventis-tathawade-near-aditya-birla-hospital.html",
    "krisala-aventis-tathawade-near-bhujbal-chowk.html"
]

schema_template = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Krisala Legacy",
    "url": "https://krisalaventis.in/",
    "logo": "https://krisalaventis.in/favicon.png",
    "sameAs": [
      "https://maharera.mahaonline.gov.in/Project?projectReraNo=P52100080336",
      "https://en.wikipedia.org/wiki/Tathawade",
      "https://en.wikipedia.org/wiki/Hinjewadi",
      "https://www.facebook.com/KrisalaLegacy",
      "https://www.instagram.com/krisala_legacy",
      "https://www.linkedin.com/company/krisala-legacy"
    ],
    "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1250"}
  }
  </script>
"""

for silo in silos:
    path = os.path.join(base_dir, silo)
    if os.path.exists(path):
        with open(path, 'r') as f:
            content = f.read()
        if 'application/ld+json' not in content:
            content = content.replace('</head>', schema_template + '\n</head>')
            with open(path, 'w') as f:
                f.write(content)
            print(f"Fixed Schema: {silo}")

# Files missing canonical
legal_pages = {
    "privacy-policy.html": "https://krisalaventis.in/privacy-policy",
    "terms-conditions.html": "https://krisalaventis.in/terms-conditions",
    "404.html": "https://krisalaventis.in/404"
}

for page, canonical in legal_pages.items():
    path = os.path.join(base_dir, page)
    if os.path.exists(path):
        with open(path, 'r') as f:
            content = f.read()
        if 'rel="canonical"' not in content:
            content = content.replace('</head>', f'  <link rel="canonical" href="{canonical}">\n</head>')
            with open(path, 'w') as f:
                f.write(content)
            print(f"Fixed Canonical: {page}")
