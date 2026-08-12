import os
import glob
import re

def harden_google():
    html_files = glob.glob('*.html')
    for file in html_files:
        if file == 'index.html' or file == '404.html':
            continue

        with open(file, 'r') as f:
            content = f.read()

        # Extract title or h1 for breadcrumb name
        title_match = re.search(r'<title>(.*?)</title>', content)
        name = title_match.group(1).split('|')[0].strip() if title_match else file.replace('.html', '').replace('-', ' ').title()
        
        url_path = file.replace('.html', '')
        full_url = f"https://krisalaventis.in/{url_path}"

        # 1. Inject Breadcrumb Schema
        breadcrumb_schema = f"""
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://krisalaventis.in/"
      }},
      {{
        "@type": "ListItem",
        "position": 2,
        "name": "{name}",
        "item": "{full_url}"
      }}
    ]
  }}
  </script>"""
        
        if '<script type="application/ld+json">' not in content:
             content = content.replace('</head>', breadcrumb_schema + '\n</head>')
        else:
             # Find the last schema and append
             content = re.sub(r'(</script>)(\s*</head>)', r'\1' + breadcrumb_schema + r'\2', content)

        # 2. Inject Breadcrumb UI (Simple, non-intrusive)
        breadcrumb_ui = f"""
  <div class="breadcrumb-nav">
    <div class="container">
      <a href="/">Home</a> <span>/</span> {name}
    </div>
  </div>"""
        
        # Inject after Navbar
        content = re.sub(r'(</nav>)', r'\1' + breadcrumb_ui, content)

        # 3. Inject Apartment/Product Schema for specific pages
        if '2-bhk' in file or '3-bhk' in file:
            config = "2.25 BHK" if '2-bhk' in file else "3.25 BHK"
            price = "85L - 98L" if '2-bhk' in file else "1.2Cr - 1.4Cr"
            product_schema = f"""
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Krisala Aventis {config} Apartment",
    "image": "https://krisalaventis.in/assets/images/floorplan-{'2' if '2' in config else '3'}bhk.png",
    "description": "Premium {config} smart study apartment at Krisala Aventis Tathawade.",
    "brand": {{
      "@type": "Brand",
      "name": "Krisala Legacy"
    }},
    "offers": {{
      "@type": "Offer",
      "url": "{full_url}",
      "priceCurrency": "INR",
      "price": "{'8900000' if '2' in config else '12000000'}",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-04-01"
    }}
  }}
  </script>"""
            content = content.replace('</head>', product_schema + '\n</head>')

        with open(file, 'w') as f:
            f.write(content)
        print(f"Hardened {file}")

    # Add breadcrumb CSS to index.html or assets (injecting into head for simplicity)
    with open('index.html', 'r') as f:
        idx = f.read()
    if '.breadcrumb-nav' not in idx:
        css = """
  <style>
    .breadcrumb-nav { background: #0a0c11; padding: 15px 0; border-bottom: 1px solid #1a1c22; font-size: 0.85rem; color: #888; }
    .breadcrumb-nav a { color: var(--clr-gold); text-decoration: none; }
    .breadcrumb-nav span { margin: 0 10px; opacity: 0.5; }
  </style>"""
        idx = idx.replace('</head>', css + '\n</head>')
        with open('index.html', 'w') as f:
            f.write(idx)

if __name__ == "__main__":
    harden_google()
