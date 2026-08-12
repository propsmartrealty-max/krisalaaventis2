import os
import glob
import re

def keyword_dominance():
    html_files = glob.glob('*.html')
    
    # Master footer cluster update (adding the specific keywords requested)
    target_cluster = """<div class="keyword-cluster">
          <strong>Popular Searches:</strong> 
          <span>Krisala Aventis Tathawade</span> • 
          <span>Krisala Tathawade Pune</span> • 
          <span>Krisala Projects</span> • 
          <span>Krisala Pune</span> • 
          <span>Krisala Tathawade Projects</span> • 
          <span>Krisala Luxoverts Tathawade</span> • 
          <span>2 BHK Flats in Tathawade</span> • 
          <span>3 BHK Luxury Flats near Hinjewadi</span> • 
          <span>Krisala Aventis Price List</span> • 
          <span>Krisala New Launch Tathawade</span> • 
          <span>Krisala Legacy Projects Pune</span> • 
          <span>Property in Tathawade Pimpri Chinchwad</span>
        </div>"""

    for file in html_files:
        if file == '404.html':
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Update Footer Cluster
        content = re.sub(r'<div class="keyword-cluster">.*?</div>', target_cluster, content, flags=re.DOTALL)

        # 2. Hero H1 Hardening (specifically for index.html)
        if file == 'index.html':
             content = re.sub(r'<h1>Krisala Aventis Tathawade <strong>Official New Launch</strong></h1>', 
                              r'<h1>Krisala Aventis Tathawade — Premier <strong>Krisala Pune New Launch</strong></h1>', content)
        
        # 3. Meta Keyword Hardening
        meta_kw_match = re.search(r'<meta name="keywords" content="(.*?)">', content)
        if meta_kw_match:
            current_kw = meta_kw_match.group(1)
            # Add missing high-intent keywords if not present
            for kw in ["Krisala Projects", "Krisala Pune", "Krisala Tathawade Projects", "Krisala Luxoverts Tathawade"]:
                if kw not in current_kw:
                    current_kw = f"{kw}, {current_kw}"
            content = re.sub(r'<meta name="keywords" content=".*?">', f'<meta name="keywords" content="{current_kw}">', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Dominance Hardened {file}")

if __name__ == "__main__":
    keyword_dominance()
