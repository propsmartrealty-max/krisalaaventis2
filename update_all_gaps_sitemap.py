import os
import glob
from datetime import datetime

SITEMAP_PATH = 'sitemap.xml'
COMPETITOR_DIR = 'vs-competitor'

def update_sitemap():
    if not os.path.exists(SITEMAP_PATH):
        print("sitemap.xml not found!")
        return
        
    with open(SITEMAP_PATH, 'r') as f:
        content = f.read()
        
    new_urls = []
    today = datetime.now().strftime('%Y-%m-%d')
    
    # 1. Add special root pages
    special_pages = [
        "https://krisalaventis.in/sitemap",
        "https://krisalaventis.in/nri-investor-hub"
    ]
    for url in special_pages:
        if url not in content:
            new_urls.append(f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>""")
            
    # 2. Add competitor pages
    comp_files = sorted(glob.glob(os.path.join(COMPETITOR_DIR, '*.html')))
    for filepath in comp_files:
        filename = os.path.basename(filepath)
        clean_slug = filename.replace('.html', '')
        url = f"https://krisalaventis.in/vs-competitor/{clean_slug}"
        
        if url not in content:
            new_urls.append(f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>""")
            
    if not new_urls:
        print("No new URLs to add to sitemap.xml.")
        return
        
    urls_str = "\n".join(new_urls)
    
    if "</urlset>" in content:
        new_content = content.replace("</urlset>", f"{urls_str}\n</urlset>")
        with open(SITEMAP_PATH, 'w') as f:
            f.write(new_content)
        print(f"Successfully added {len(new_urls)} URLs (Competitor Silo + NRI Hub + EEAT Sitemap) to sitemap.xml.")
    else:
        print("Error: </urlset> not found in sitemap.xml")

if __name__ == "__main__":
    update_sitemap()
