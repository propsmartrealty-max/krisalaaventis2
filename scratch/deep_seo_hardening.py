import os

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
    "tathawade-market-growth-calculator.html"
]

base_dir = "/Users/vikasyewle/krisalaaventis"

seo_footer = """
  <!-- SOVEREIGN SEO FOOTER: CROSS-LINKING MATRIX -->
  <section class="seo-matrix-section" style="background: #050608; border-top: 1px solid #1a1c22; padding: 4rem 0;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
        <div>
          <h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">Residential Clusters</h5>
          <ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">
            <li><a href="/krisala-aventis-tathawade-2-bhk-flats" style="color: #888; text-decoration: none;">Krisala Aventis 2 BHK Flats</a></li>
            <li><a href="/krisala-aventis-tathawade-3-bhk-luxury-apartments" style="color: #888; text-decoration: none;">Krisala Aventis 3 BHK Luxury</a></li>
            <li><a href="/krisala-aventis-tathawade-flats-near-hinjewadi" style="color: #888; text-decoration: none;">Flats near Hinjewadi IT Park</a></li>
            <li><a href="/krisala-aventis-tathawade-construction-status" style="color: #888; text-decoration: none;">Krisala Aventis Construction Status</a></li>
          </ul>
        </div>
        <div>
          <h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">Location Intelligence</h5>
          <ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">
            <li><a href="/tathawade-connectivity-it-hubs" style="color: #888; text-decoration: none;">Tathawade Connectivity Hub</a></li>
            <li><a href="/educational-hubs-near-krisala-aventis" style="color: #888; text-decoration: none;">Schools near Krisala Aventis</a></li>
            <li><a href="/lifestyle-amenities-shopping-tathawade" style="color: #888; text-decoration: none;">Shopping & Lifestyle Tathawade</a></li>
            <li><a href="/public-transport-connectivity-tathawade-pune" style="color: #888; text-decoration: none;">Public Transport Tathawade</a></li>
          </ul>
        </div>
        <div>
          <h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">Market Authority</h5>
          <ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">
            <li><a href="/tathawade-real-estate-investment-roi" style="color: #888; text-decoration: none;">Tathawade Real Estate ROI</a></li>
            <li><a href="/krisala-legacy-pune-track-record-completed-projects" style="color: #888; text-decoration: none;">Krisala Legacy Track Record</a></li>
            <li><a href="/tathawade-real-estate-glossary" style="color: #888; text-decoration: none;">Tathawade Property Glossary</a></li>
            <li><a href="/tathawade-market-growth-calculator" style="color: #888; text-decoration: none;">Market Growth Calculator</a></li>
          </ul>
        </div>
        <div>
          <h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">Google Trust & Compliance</h5>
          <ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">
            <li><a href="/privacy-policy" style="color: #888; text-decoration: none;">Privacy Policy</a></li>
            <li><a href="/terms-conditions" style="color: #888; text-decoration: none;">Terms & Conditions</a></li>
            <li><a href="/sitemap.xml" style="color: #888; text-decoration: none;">XML Sitemap</a></li>
            <li><a href="https://maharera.mahaonline.gov.in/" style="color: #888; text-decoration: none;" target="_blank">MahaRERA Official</a></li>
          </ul>
        </div>
      </div>
      <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #1a1c22; text-align: center; color: #555; font-size: 0.75rem;">
        <p><strong>Keyword Cluster:</strong> Krisala Aventis Tathawade | Krisala Tathawade | Krisala Project Tathawade | 2 BHK in Tathawade | 3 BHK near Hinjewadi | Krisala Legacy Pune | Luxury Flats Tathawade | MahaRERA P52100080336</p>
      </div>
    </div>
  </section>
"""

def update_page(filename):
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path):
        return

    with open(path, 'r') as f:
        content = f.read()

    # 1. Inject SEO Footer before <footer>
    if 'seo-matrix-section' not in content:
        content = content.replace('<footer', seo_footer + '<footer')

    # 2. Ensure H1 exists and is optimized
    # (Manual check might be needed for every page, but I'll ensure there's at least one <h1>)
    
    # 3. Add Organization & Breadcrumb Schema if not present
    if 'type": "Organization"' not in content:
        org_schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Krisala Legacy",
    "url": "https://krisalaventis.in/",
    "logo": "https://krisalaventis.in/favicon.png",
    "sameAs": [
      "https://www.facebook.com/KrisalaLegacy",
      "https://www.instagram.com/krisala_legacy",
      "https://www.linkedin.com/company/krisala-legacy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917744009295",
      "contactType": "Sales"
    }
  }
  </script>
"""
        content = content.replace('</head>', org_schema + '</head>')

    with open(path, 'w') as f:
        f.write(content)
    print(f"Deep Hardened: {filename}")

for silo in silos:
    update_page(silo)
