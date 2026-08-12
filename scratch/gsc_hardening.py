import os
import glob
from datetime import datetime

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = glob.glob(os.path.join(base_dir, "*.html"))

def regenerate_sitemap():
    today = datetime.now().strftime("%Y-%m-%d")
    sitemap_content = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
        f'<!-- Krisala Aventis Sovereign Sitemap — Auto-Generated {today} -->'
    ]

    for file_path in html_files:
        filename = os.path.basename(file_path)
        if filename == '404.html': continue
        
        slug = filename.replace('.html', '')
        if slug == 'index':
            url = "https://krisalaventis.in/"
            priority = "1.0"
        else:
            url = f"https://krisalaventis.in/{slug}"
            priority = "0.8" if "near-" in slug or "2-bhk" in slug or "3-bhk" in slug else "0.7"

        sitemap_content.append("  <url>")
        sitemap_content.append(f"    <loc>{url}</loc>")
        sitemap_content.append(f"    <lastmod>{today}</lastmod>")
        sitemap_content.append("    <changefreq>daily</changefreq>")
        sitemap_content.append(f"    <priority>{priority}</priority>")
        sitemap_content.append("  </url>")

    sitemap_content.append("</urlset>")
    
    with open(os.path.join(base_dir, "sitemap.xml"), 'w', encoding='utf-8') as f:
        f.write("\n".join(sitemap_content))
    print("✅ Sitemap Regenerated with clean URLs.")

def harden_vercel_config():
    import json
    vpath = os.path.join(base_dir, "vercel.json")
    with open(vpath, 'r') as f:
        vconfig = json.load(f)
    
    # Add non-www redirect if not present
    has_www_redirect = any(r.get('source') == '/(.*)' and 'www.' in r.get('destination', '') for r in vconfig.get('redirects', []))
    
    # We want to force non-www. If a user hits www.krisalaventis.in, redirect to krisalaventis.in
    # Note: Vercel handles this in settings too, but we can enforce it in JSON.
    # Actually, Vercel's best practice is to use "redirects" for this.
    
    # Adding more redirects for the renamed pages
    vconfig['redirects'].extend([
        { "source": "/privacy-policy", "destination": "/krisala-aventis-tathawade-privacy-policy", "permanent": True },
        { "source": "/terms-conditions", "destination": "/krisala-aventis-tathawade-terms-conditions", "permanent": True }
    ])
    
    # Deduplicate redirects
    unique_redirects = []
    seen_sources = set()
    for r in vconfig['redirects']:
        if r['source'] not in seen_sources:
            unique_redirects.append(r)
            seen_sources.add(r['source'])
    vconfig['redirects'] = unique_redirects

    with open(vpath, 'w', encoding='utf-8') as f:
        json.dump(vconfig, f, indent=2)
    print("✅ Vercel Config Hardened for clean URLs.")

if __name__ == "__main__":
    regenerate_sitemap()
    harden_vercel_config()
