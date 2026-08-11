import os
import re
from datetime import datetime

def generate_sitemap():
    urls = []
    
    print("Crawling files to extract canonical URLs...")
    for root, dirs, files in os.walk("."):
        if '.git' in root or 'node_modules' in root or root == '.':
            continue
            
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        
                        match = re.search(r'<link rel="canonical" href="([^"]+)"', content)
                        if match:
                            urls.append(match.group(1))
                        else:
                            # fallback for files missing canonical
                            slug = file
                            url_path = f"/{os.path.basename(root)}/{slug}"
                            urls.append(f"https://krisalaventis.in{url_path}")
                except Exception as e:
                    pass
                    
    # Also include the root index.html and 404
    urls.append("https://krisalaventis.in/")
    urls.append("https://krisalaventis.in/404")
    
    # Remove duplicates
    urls = sorted(list(set(urls)))
    
    # Generate XML
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    today = datetime.now().strftime("%Y-%m-%d")
    
    for url in urls:
        priority = "1.0" if url == "https://krisalaventis.in/" else "0.8"
        xml_content += f'''  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>\n'''
        
    xml_content += '</urlset>'
    
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(xml_content)
        
    print(f"Successfully generated sitemap.xml with {len(urls)} URLs.")

if __name__ == "__main__":
    generate_sitemap()
