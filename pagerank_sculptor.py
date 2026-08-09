import os
import glob
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
    'blog'
]

MESH_TEMPLATE = """
    <!-- Rank #1 PageRank Sculpting Mesh -->
    <div style="background-color: #0B0F19; border-top: 1px solid #1f2937; padding: 40px 20px; text-align: left; font-family: 'Outfit', sans-serif;">
        <div style="max-width: 1280px; margin: 0 auto;">
            <h4 style="color: #D4AF37; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 20px;">Explore Related Pune Real Estate Markets</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 12px;">
{links_html}
            </div>
        </div>
    </div>
"""

def extract_title(html_content):
    match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    if match:
        title = match.group(1).split('—')[0].strip()
        title = title.split('|')[0].strip()
        title = title.replace('⭐', '').strip()
        return title
    return "Krisala Aventis Tathawade"

def build_catalog():
    catalog = []
    for d in TARGET_DIRS:
        if not os.path.exists(d):
            continue
        files = glob.glob(os.path.join(d, "*.html"))
        for filepath in files:
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                title = extract_title(content)
                slug = os.path.basename(filepath).replace('.html', '')
                url = f"/{d}/{slug}"
                catalog.append({"filepath": filepath, "url": url, "title": title})
            except:
                pass
    return catalog

def inject_mesh():
    catalog = build_catalog()
    print(f"Built catalog of {len(catalog)} pages.")
    
    injected_count = 0
    
    for page in catalog:
        try:
            with open(page["filepath"], 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            # Skip if already injected
            if "Rank #1 PageRank Sculpting Mesh" in content:
                continue
                
            # Pick 5 random related links
            related = random.sample([p for p in catalog if p["filepath"] != page["filepath"]], min(5, len(catalog)-1))
            
            links_html = ""
            for r in related:
                links_html += f'                <a href="{r["url"]}" style="background: rgba(212,175,55,0.05); border: 1px solid rgba(212,175,55,0.2); color: #d1d5db; padding: 10px 18px; border-radius: 30px; font-size: 0.85rem; text-decoration: none; transition: 0.3s;" onmouseover="this.style.background=\'rgba(212,175,55,0.15)\'" onmouseout="this.style.background=\'rgba(212,175,55,0.05)\'">{r["title"]}</a>\n'
            
            mesh_html = MESH_TEMPLATE.format(links_html=links_html.rstrip())
            
            # Inject right before <footer
            if "<footer" in content:
                new_content = content.replace("<footer", mesh_html + "\n    <footer", 1)
            elif "</body>" in content:
                new_content = content.replace("</body>", mesh_html + "\n</body>")
            else:
                new_content = content + mesh_html
                
            with open(page["filepath"], 'w', encoding='utf-8') as f:
                f.write(new_content)
                
            injected_count += 1
        except Exception as e:
            print(f"Error processing {page['filepath']}: {e}")
            
    print(f"Successfully injected Internal PageRank Mesh into {injected_count} pages.")

if __name__ == "__main__":
    inject_mesh()
