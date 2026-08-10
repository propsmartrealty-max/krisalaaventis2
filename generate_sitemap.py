import os
from datetime import datetime

BASE_URL = "https://krisalaventis.in/"
DIRECTORIES = [
    ".",
    "seo_generator/output",
    "vs-competitor",
    "west-pune",
    "seo_generator/output/pune-market"
]

def generate_sitemap():
    urls = []
    
    for directory in DIRECTORIES:
        if not os.path.exists(directory):
            continue
            
        for file in os.listdir(directory):
            if file.endswith(".html"):
                # Handle root dir vs subdirs
                if directory == ".":
                    path = file
                else:
                    path = f"{directory.replace('seo_generator/output', 'pune-market').strip('/')}/{file}"
                    # Cleanup double slashes or logic issues
                    path = path.replace('pune-market/pune-market', 'pune-market')
                    if directory == "seo_generator/output":
                        path = file # these are usually at root? No, wait. The previous SEO generator puts them in seo_generator/output. Are they served from root or a subfolder?
                        # Let's check how the canonicals are generated in seo_generator_v2.py
                        # In seo_generator_v2.py: <link rel="canonical" href="https://krisalaventis.in/$folder/$url_slug_clean">
                        # But folder is 'location-analysis' etc. So it creates folders inside seo_generator/output!
                        
                # Wait, os.walk is better to capture all subdirectories of seo_generator/output.
                pass

    # Let's use os.walk to find all html files and determine their canonical URL based on the file contents!
    # Because each file has a `<link rel="canonical" href="...">` tag! This is 100% accurate.
    
    print("Crawling files to extract canonical URLs...")
    for root, dirs, files in os.walk("."):
        if '.git' in root or 'venv' in root or 'node_modules' in root:
            continue
            
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                        # Extract canonical
                        import re
                        match = re.search(r'<link rel="canonical" href="([^"]+)"', content)
                        if match:
                            urls.append(match.group(1))
                        else:
                            # fallback for index.html etc
                            if file == "index.html" and root == ".":
                                urls.append("https://krisalaventis.in/")
                            elif root == ".":
                                urls.append(f"https://krisalaventis.in/{file}")
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    
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
