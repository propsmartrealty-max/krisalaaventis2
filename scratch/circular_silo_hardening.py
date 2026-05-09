import os
import glob
import re

# KRISALA AVENTIS — CIRCULAR SILO ORCHESTRATION
# Cluster 1: Residential Silo (2BHK, 3BHK, Price, Cost Sheet, Brochure)
# Cluster 2: Transit Silo (Connectivity, Hinjewadi, Expressway, Transport)
# Cluster 3: Lifestyle Silo (Amenities, Schools, Phoenix, JSPM, IT proximity)
# Cluster 4: Trust Silo (ROI, Tech, Legacy, Reviews, Vastu, Market Insights)

clusters = {
    "residential": ["2-bhk-flats", "3-bhk-luxury-apartments", "price-list", "cost-sheet-estimator", "brochure-download"],
    "transit": ["connectivity-it-hubs", "flats-near-hinjewadi", "near-mumbai-pune-expressway", "public-transport"],
    "lifestyle": ["amenities-lifestyle", "educational-hubs", "near-phoenix-mall-wakad", "near-jspm-university", "lifestyle-it-park-proximity"],
    "trust": ["investment-roi", "growth-story-roi-2026", "aluform-technology", "developer-legacy", "vastu-compliance", "real-estate-glossary", "customer-reviews-testimonials"]
}

def get_cluster(filename):
    for name, pages in clusters.items():
        for p in pages:
            if p in filename:
                return name, [p for p in pages if p not in filename]
    return "trust", ["investment-roi", "developer-legacy", "price-list"] # Default fallback

def circular_harden():
    html_files = glob.glob('*.html')
    for file in html_files:
        if file in ['index.html', '404.html', 'privacy-policy.html', 'terms-conditions.html', 'sitemap-html.html']:
            continue

        cluster_name, cluster_peers = get_cluster(file)
        
        # Build Circular Silo HTML
        silo_links = ""
        for peer in cluster_peers[:4]: # Limit to 4 for clean UI
             title = peer.replace('-', ' ').title().replace('Bhk', 'BHK').replace('Roi', 'ROI')
             silo_links += f'        <a title="Krisala Aventis — {title}" href="/krisala-aventis-tathawade-{peer}" style="background: rgba(202,163,80,0.05); padding: 15px; border-radius: 8px; border: 1px solid rgba(202,163,80,0.2); text-decoration: none; color: #fff; font-size: 0.85rem; transition: 0.3s; display: block;">{title} →</a>\n'

        insights_html = f"""
  <!-- ======== CIRCULAR SILO: {cluster_name.upper()} ======== -->
  <section class="section related-silos" style="border-top: 1px solid var(--clr-glass-border); background: rgba(255,255,255,0.01);">
    <div class="container">
      <div class="section-tag">{cluster_name.title()} Intelligence</div>
      <h3>Related <span class="gold">Strategic Insights.</span></h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 25px;">
{silo_links}      </div>
    </div>
  </section>"""

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove previous "Strategic Project Insights" if exists and replace with Circular Silo
        if 'STRATEGIC PROJECT INSIGHTS' in content:
            content = re.sub(r'<!-- ======== STRATEGIC PROJECT INSIGHTS.*?/section>', insights_html, content, flags=re.DOTALL)
        elif 'CIRCULAR SILO' not in content:
            content = content.replace('<footer', insights_html + '\n<footer')

        # LSI Keywords Injection
        lsi_keywords = "West Pune Real Estate, Smart Study 2 BHK, PCMC Property Growth, Premium Tathawade Apartments, Krisala New Launch"
        if 'meta name="keywords"' in content:
             content = re.sub(r'(<meta name="keywords" content=".*?)(")', r'\1, ' + lsi_keywords + r'\2', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Circular Hardened {file} for cluster {cluster_name}")

if __name__ == "__main__":
    circular_harden()
