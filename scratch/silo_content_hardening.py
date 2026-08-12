import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def harden_silos():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html') and f != 'index.html' and f != '404.html']
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Clean up malformed sections and excessive whitespace
        # Find the gap between subpage-hero and next major section
        content = re.sub(r'</section>\s*</section>', '</section>', content)
        content = re.sub(r'</section>\s*<!-- ======== SOVEREIGN BREADCRUMBS.*?-->\s*</section>', '</section>', content, flags=re.DOTALL)
        
        # 2. Inject Topic-Specific Content if missing
        if '<div class="silo-content-block">' not in content:
            topic = filename.replace('krisala-aventis-tathawade-', '').replace('.html', '').replace('-', ' ').title()
            
            content_block = f"""
  <!-- ======== SILO CONTENT HARDENING ======== -->
  <section class="section silo-main-content" style="background: var(--clr-obsidian); position: relative;">
    <div class="container">
      <div class="silo-content-block reveal" style="max-width: 900px; margin: 0 auto; line-height: 1.8; color: var(--clr-silver);">
        <h2 style="color: #fff; margin-bottom: 30px;">Deep Intelligence: <span class="gold">{topic}</span></h2>
        <p style="margin-bottom: 20px;">
          Krisala Aventis represents the pinnacle of residential engineering in the Tathawade-Wakad corridor. 
          When analyzing <strong>{topic}</strong>, it becomes evident that Krisala Legacy has prioritized 
          functional luxury over generic construction.
        </p>
        <div style="background: rgba(255,255,255,0.02); padding: 30px; border-left: 4px solid var(--clr-gold); border-radius: 8px; margin: 40px 0;">
          <h4 style="color: var(--clr-gold); margin-bottom: 10px;">Why it matters?</h4>
          <p style="font-size: 0.95rem;">
            Strategically located near Hinjewadi Phase 1, Krisala Aventis offers a unique 'Smart Study' 
            configuration that integrates work-life balance directly into the floor plan. 
            The focus on <strong>{topic}</strong> ensures that your investment remains 
            future-proof and high-yielding.
          </p>
        </div>
        <p>
          Every square foot of Krisala Aventis is optimized for maximum light, ventilation, and privacy. 
          Whether you are looking for ROI, lifestyle, or commute optimization, 
          this project delivers on all sovereign metrics.
        </p>
      </div>
    </div>
  </section>
"""
            # Insert after the subpage-hero section
            hero_end = content.find('</section>', content.find('subpage-hero')) + 10
            if hero_end > 10:
                content = content[:hero_end] + content_block + content[hero_end:]

        # 3. Final Whitespace Cleanup
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Hardened Silo: {filename}")

if __name__ == "__main__":
    harden_silos()
