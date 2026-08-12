import os
import glob
from datetime import datetime

base_url = "https://krisalaventis.in"
base_dir = "/Users/vikasyewle/krisalaaventis"
sitemap_path = os.path.join(base_dir, "sitemap.xml")

def generate_sitemap():
    html_files = glob.glob(os.path.join(base_dir, "*.html"))
    today = datetime.now().strftime("%Y-%m-%d")
    
    sitemap_header = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<!-- Krisala Aventis Sovereign Sitemap — Auto-Generated {today} -->
"""
    
    url_entries = []
    
    for file_path in html_files:
        filename = os.path.basename(file_path)
        if filename == "404.html":
            continue
            
        slug = filename.replace(".html", "")
        loc = f"{base_url}/" if slug == "index" else f"{base_url}/{slug}"
        
        # Priority Logic
        priority = "0.7"
        if slug == "index":
            priority = "1.0"
        elif any(x in slug for x in ["2-bhk", "3-bhk", "price-list", "brochure", "cost-sheet"]):
            priority = "0.9"
        elif "silo" in slug or "near-" in slug:
            priority = "0.8"
        
        entry = f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>{priority}</priority>
  </url>"""
        url_entries.append(entry)
        
    sitemap_content = sitemap_header + "\n".join(url_entries) + "\n</urlset>"
    
    with open(sitemap_path, "w") as f:
        f.write(sitemap_content)
    
    print(f"Sitemap hardened with {len(url_entries)} entries.")

if __name__ == "__main__":
    generate_sitemap()
