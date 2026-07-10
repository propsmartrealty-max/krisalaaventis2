import json
from datetime import datetime

# Read the generated pages
with open('seo_generator/data/pages.json', 'r') as f:
    pages = json.load(f)

# Create a new sitemap content
# Read original sitemap and strip the closing </urlset>
with open('sitemap.xml', 'r') as f:
    sitemap_content = f.read()

sitemap_content = sitemap_content.replace('</urlset>', '')

# Append new pages
today = datetime.now().strftime('%Y-%m-%d')
for page in pages:
    url = f"https://krisalaventis.in/{page['folder']}/{page['url_slug'].replace('.html', '')}"
    sitemap_content += f"""
  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>"""

sitemap_content += "\n</urlset>"

# Write back to sitemap.xml
with open('sitemap.xml', 'w') as f:
    f.write(sitemap_content)
