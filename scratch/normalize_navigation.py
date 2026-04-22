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

def normalize_and_breadcrumb(filename):
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path): return

    with open(path, 'r') as f:
        content = f.read()

    # 1. Normalize URLs: Remove .html and index.html
    content = content.replace('href="index.html"', 'href="/"')
    content = content.replace('href="/index#', 'href="/#')
    content = content.replace('href="index#', 'href="/#')
    
    for silo in silos:
        clean_name = silo.replace('.html', '')
        content = content.replace(f'href="{silo}"', f'href="/{clean_name}"')
        content = content.replace(f'href="/{silo}"', f'href="/{clean_name}"')

    # 2. Inject Breadcrumbs (below navbar)
    if filename != "index.html" and 'class="breadcrumbs"' not in content:
        page_title = filename.replace('krisala-aventis-tathawade-', '').replace('.html', '').replace('-', ' ').title()
        breadcrumb_html = f"""
  <!-- BREADCRUMBS -->
  <div class="breadcrumb-container" style="background: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.05); padding: 10px 0;">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb" style="font-size: 0.75rem; color: var(--clr-muted);">
        <a href="/" style="color: var(--clr-gold); text-decoration: none;">Home</a> 
        <span style="margin: 0 8px;">/</span> 
        <span style="color: #fff;">{page_title}</span>
      </nav>
    </div>
  </div>
"""
        # Find end of nav
        content = re.sub(r'(</nav>)', r'\1' + breadcrumb_html, content, count=1)

    with open(path, 'w') as f:
        f.write(content)
    print(f"URL Normalized & Breadcrumbed: {filename}")

for silo in silos:
    normalize_and_breadcrumb(silo)
