import os
import re

silos = [
    "index.html",
    "krisala-aventis-tathawade-2-bhk-flats.html",
    "krisala-aventis-tathawade-3-bhk-luxury-apartments.html",
    "krisala-aventis-tathawade-flats-near-hinjewadi.html",
    "krisala-aventis-tathawade-construction-status.html",
    "tathawade-real-estate-investment-roi.html",
    "lifestyle-amenities-shopping-tathawade.html",
    "educational-hubs-near-krisala-aventis.html",
    "tathawade-connectivity-it-hubs.html",
    "krisala-legacy-pune-track-record-completed-projects.html",
    "aluform-technology-construction-quality-krisala-aventis.html",
    "public-transport-connectivity-tathawade-pune.html",
    "tathawade-real-estate-glossary.html",
    "tathawade-market-growth-calculator.html",
    "nri-investment-krisala-aventis-tathawade.html"
]

base_dir = "/Users/vikasyewle/krisalaaventis"

def inject_breadcrumb_schema(filename):
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path): return

    with open(path, 'r') as f:
        content = f.read()

    clean_name = filename.replace('.html', '')
    display_name = clean_name.replace('krisala-aventis-tathawade-', '').replace('-', ' ').title()
    
    if filename == "index.html":
        # Index doesn't need breadcrumb schema or it's root
        return

    breadcrumb_schema = f"""
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://krisalaventis.in/"
    }},{{
      "@type": "ListItem",
      "position": 2,
      "name": "{display_name}",
      "item": "https://krisalaventis.in/{clean_name}"
    }}]
  }}
  </script>
"""
    if 'BreadcrumbList' not in content:
        content = content.replace('</head>', breadcrumb_schema + '</head>')
        with open(path, 'w') as f:
            f.write(content)
        print(f"Breadcrumb Schema Injected: {filename}")

for silo in silos:
    inject_breadcrumb_schema(silo)
