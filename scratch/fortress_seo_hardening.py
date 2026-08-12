import os
import glob
import re

def fortress_harden():
    html_files = glob.glob('*.html')
    
    related_links = [
        {"title": "Krisala Aventis Location map", "url": "/krisala-aventis-tathawade-near-phoenix-mall-wakad"},
        {"title": "Krisala Aventis Price List", "url": "/krisala-aventis-tathawade-price-list"},
        {"title": "Krisala Aventis Floor Plans", "url": "/krisala-aventis-tathawade-2-bhk-flats"},
        {"title": "Krisala Aventis Connectivity", "url": "/krisala-aventis-tathawade-connectivity-it-hubs"},
        {"title": "Krisala Legacy Portfolio", "url": "/krisala-aventis-tathawade-developer-legacy"}
    ]

    insights_html = """
  <!-- ======== STRATEGIC PROJECT INSIGHTS (Fortress SEO Cross-Linking) ======== -->
  <section class="section related-silos" style="border-top: 1px solid var(--clr-glass-border); background: rgba(255,255,255,0.01);">
    <div class="container">
      <div class="section-tag">Market Intelligence</div>
      <h3>Strategic <span class="gold">Project Insights.</span></h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 30px;">
        <a title="Krisala Aventis — Tathawade Investment ROI" href="/krisala-aventis-tathawade-investment-roi" style="background: rgba(202,163,80,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(202,163,80,0.2); text-decoration: none; color: #fff; font-size: 0.9rem; transition: 0.3s; display: block;">Tathawade Investment ROI →</a>
        <a title="Krisala Aventis — Krisala Aluform Technology" href="/krisala-aventis-tathawade-aluform-technology" style="background: rgba(202,163,80,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(202,163,80,0.2); text-decoration: none; color: #fff; font-size: 0.9rem; transition: 0.3s; display: block;">Krisala Aluform Technology →</a>
        <a title="Krisala Aventis — Near Hinjewadi IT Park" href="/krisala-aventis-tathawade-flats-near-hinjewadi" style="background: rgba(202,163,80,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(202,163,80,0.2); text-decoration: none; color: #fff; font-size: 0.9rem; transition: 0.3s; display: block;">Near Hinjewadi IT Park →</a>
        <a title="Krisala Aventis — Mumbai-Pune Expressway" href="/krisala-aventis-tathawade-near-mumbai-pune-expressway" style="background: rgba(202,163,80,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(202,163,80,0.2); text-decoration: none; color: #fff; font-size: 0.9rem; transition: 0.3s; display: block;">Mumbai-Pune Expressway →</a>
      </div>
    </div>
  </section>"""

    for file in html_files:
        if file in ['404.html', 'index.html']: # Skip index as it has its own sections
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Social Meta Hardening
        content = content.replace('<meta property="og:site_name" content="Krisala Aventis Tathawade">', 
                                  '<meta property="og:site_name" content="Official Krisala Aventis Tathawade Launch">')
        
        # 2. Inject Strategic Insights Grid (if not already there)
        if 'STRATEGIC PROJECT INSIGHTS' not in content:
            content = content.replace('<footer', insights_html + '\n<footer')

        # 3. Semantic Image Hardening
        def img_harden(match):
            tag = match.group(0)
            # Don't touch hero images
            if 'hero' in tag: return tag
            
            # Add loading="lazy" if missing
            if 'loading=' not in tag:
                tag = tag.replace('<img ', '<img loading="lazy" ')
            
            # Add decoding="async" if missing
            if 'decoding=' not in tag:
                tag = tag.replace('<img ', '<img decoding="async" ')
            
            # Add fetchpriority="low" if missing
            if 'fetchpriority=' not in tag:
                tag = tag.replace('<img ', '<img fetchpriority="low" ')
                
            return tag

        content = re.sub(r'<img .*?>', img_harden, content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fortress Hardened {file}")

if __name__ == "__main__":
    fortress_harden()
