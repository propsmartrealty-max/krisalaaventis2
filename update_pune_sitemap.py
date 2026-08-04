import os
import glob
from datetime import datetime

SITEMAP_PATH = 'sitemap.xml'
PUNE_MARKET_DIR = 'pune-market'

def update_sitemap():
    if not os.path.exists(SITEMAP_PATH):
        print("sitemap.xml not found!")
        return
        
    with open(SITEMAP_PATH, 'r') as f:
        content = f.read()
        
    html_files = glob.glob(os.path.join(PUNE_MARKET_DIR, '*.html'))
    new_urls = []
    
    today = datetime.now().strftime('%Y-%m-%d')
    added_count = 0
    
    for filepath in sorted(html_files):
        filename = os.path.basename(filepath)
        clean_slug = filename.replace('.html', '')
        url = f"https://krisalaventis.in/pune-market/{clean_slug}"
        
        if url in content:
            continue
            
        url_entry = f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>"""
        new_urls.append(url_entry)
        added_count += 1
        
    if not new_urls:
        print("No new URLs to add to sitemap.xml.")
        return
        
    urls_str = "\n".join(new_urls)
    
    # Replace closing </urlset> with new URLs + </urlset>
    if "</urlset>" in content:
        new_content = content.replace("</urlset>", f"{urls_str}\n</urlset>")
        with open(SITEMAP_PATH, 'w') as f:
            f.write(new_content)
        print(f"Successfully added {added_count} Pune Market URLs to sitemap.xml.")
    else:
        print("Error: </urlset> tag not found in sitemap.xml.")

if __name__ == "__main__":
    update_sitemap()
