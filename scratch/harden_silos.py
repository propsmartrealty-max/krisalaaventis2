import os
import re

silos = [
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
    "tathawade-market-growth-calculator.html"
]

base_dir = "/Users/vikasyewle/krisalaaventis"

def inject_schema(filename):
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path):
        return

    with open(path, 'r') as f:
        content = f.read()

    # Avoid duplicate injection
    if 'type": "Article"' in content:
        return

    title_match = re.search(r'<title>(.*?)</title>', content)
    desc_match = re.search(r'<meta name="description" content="(.*?)">', content)
    
    title = title_match.group(1) if title_match else "Krisala Aventis Tathawade"
    desc = desc_match.group(1) if desc_match else ""

    schema = f"""
  <!-- JSON-LD SEO HARDENING -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{title}",
    "description": "{desc}",
    "image": "https://krisalaventis.in/assets/images/hero.png",
    "author": {{
      "@type": "Organization",
      "name": "Krisala Legacy"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "Krisala Legacy",
      "logo": {{
        "@type": "ImageObject",
        "url": "https://krisalaventis.in/favicon.png"
      }}
    }},
    "datePublished": "2026-04-21",
    "dateModified": "2026-04-22"
  }}
  </script>
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {{
        "@type": "Question",
        "name": "What is the primary advantage of {title}?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "{desc}"
        }}
      }},
      {{
        "@type": "Question",
        "name": "Is Krisala Aventis near Hinjewadi?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Yes, Krisala Aventis is strategically located in Tathawade, just 10 minutes from Hinjewadi IT Park Phase 1."
        }}
      }}
    ]
  }}
  </script>
"""
    # Inject before </head>
    new_content = content.replace('</head>', schema + '</head>')
    
    # Also inject Keyword Cluster in footer if not present
    if 'keyword-cluster' not in content:
        cluster = """
        <div class="keyword-cluster" style="margin-top: 2rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; font-size: 0.75rem; color: rgba(255,255,255,0.4);">
          <strong>Trending:</strong> 
          <span>Krisala Aventis Tathawade</span> • <span>2 BHK in Tathawade</span> • <span>3 BHK near Hinjewadi</span> • <span>Krisala Legacy Projects</span>
        </div>
"""
        new_content = new_content.replace('</footer>', cluster + '</footer>')

    with open(path, 'w') as f:
        f.write(new_content)
    print(f"Hardened: {filename}")

for silo in silos:
    inject_schema(silo)
