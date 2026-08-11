import os
import re
import random

TARGET_DIRS = [
    'pune-market',
    'vs-competitor',
    'near',
    'price',
    'guide',
    'market',
    'compare',
    'feature',
    'west-pune',
    'blog',
    'top-10',
    'seo_generator/output'
]

MESH_TEMPLATE = "<div style=\"background-color:#0B0F19;border-top:1px solid #1f2937;padding:40px 20px;text-align:left;font-family:'Outfit',sans-serif;\"><div style=\"max-width:1280px;margin:0 auto;\"><h4 style=\"color:#D4AF37;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;font-weight:700;margin-bottom:20px;\">Explore Related Pune Real Estate Markets</h4><div style=\"display:flex;flex-wrap:wrap;gap:12px;\">{links_html}</div></div></div>"

def extract_title(html_content):
    match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    if match:
        title = match.group(1).split('—')[0].strip()
        title = title.split('|')[0].strip()
        title = title.replace('⭐', '').strip()
        return title
    return "Krisala Aventis Tathawade"

def remediate():
    catalog = []
    
    # 1. Build catalog
    for root, dirs, files in os.walk("."):
        if '.git' in root or 'node_modules' in root or root == '.':
            continue
            
        # Ensure we only process files in our target directories
        valid_dir = any(td in root for td in TARGET_DIRS)
        if not valid_dir:
            continue
            
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                    title = extract_title(content)
                    
                    # Extract url from canonical if possible
                    url_match = re.search(r'<link rel="canonical" href="([^"]+)"', content)
                    if url_match:
                        url = url_match.group(1).replace('https://krisalaventis.in', '')
                    else:
                        slug = file
                        url = f"/{os.path.basename(root)}/{slug}"
                        
                    catalog.append({"filepath": filepath, "url": url, "title": title})
                except Exception as e:
                    pass

    print(f"Catalog built with {len(catalog)} pages.")
    
    injected_count = 0
    rss_link = '<link rel="alternate" type="application/rss+xml" title="Krisala Aventis Real Estate Feed" href="https://krisalaventis.in/syndication-feed.xml">'
    
    # 2. Inject Mesh and RSS
    for page in catalog:
        try:
            with open(page["filepath"], 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            modified = False
            
            # Inject RSS if missing
            if 'application/rss+xml' not in content:
                content = content.replace('</head>', f'{rss_link}</head>')
                modified = True
                
            # Inject Mesh if missing
            if 'Explore Related Pune Real Estate Markets' not in content:
                # Pick 5 random
                related = random.sample([p for p in catalog if p["filepath"] != page["filepath"]], min(5, len(catalog)-1))
                links_html = ""
                for r in related:
                    links_html += f'<a href="{r["url"]}" style="background:rgba(212,175,55,0.05);border:1px solid rgba(212,175,55,0.2);color:#d1d5db;padding:10px 18px;border-radius:30px;font-size:0.85rem;text-decoration:none;transition:0.3s;">{r["title"]}</a>'
                
                mesh_html = MESH_TEMPLATE.format(links_html=links_html)
                
                if '<footer' in content:
                    content = content.replace('<footer', f'{mesh_html}<footer', 1)
                    modified = True
                elif '</body>' in content:
                    content = content.replace('</body>', f'{mesh_html}</body>')
                    modified = True

            if modified:
                with open(page["filepath"], 'w', encoding='utf-8') as f:
                    f.write(content)
                injected_count += 1
                
        except Exception as e:
            print(f"Error processing {page['filepath']}: {e}")
            
    print(f"Remediation complete. Updated {injected_count} files with PageRank Mesh and RSS tag.")

if __name__ == "__main__":
    remediate()
