import os
import glob
import re
from email.utils import formatdate
from datetime import datetime

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
    'top-10'
]

def extract_metadata(html_content):
    title = "Krisala Aventis Tathawade Pune"
    desc = "Luxury 2.25 and 3.25 BHK apartments near Hinjewadi IT Park starting at ₹89 Lakhs."
    
    t_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    if t_match:
        title = t_match.group(1).replace('—', '-').strip()
        
    d_match = re.search(r'<meta name="description" content="(.*?)">', html_content, re.IGNORECASE)
    if d_match:
        desc = d_match.group(1).strip()
        
    return title, desc

def generate_rss():
    items = []
    pub_date = formatdate(timeval=None, localtime=False, usegmt=True)
    
    for d in TARGET_DIRS:
        if not os.path.exists(d):
            continue
        files = glob.glob(os.path.join(d, "*.html"))
        for filepath in files:
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                title, desc = extract_metadata(content)
                slug = os.path.basename(filepath).replace('.html', '')
                url = f"https://krisalaventis.in/{d}/{slug}"
                
                # HTML escape title and desc
                title = title.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                desc = desc.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                
                item_xml = f"""    <item>
      <title>{title}</title>
      <link>{url}</link>
      <description>{desc}</description>
      <guid isPermaLink="true">{url}</guid>
      <pubDate>{pub_date}</pubDate>
    </item>"""
                items.append(item_xml)
            except Exception as e:
                pass
                
    items_str = "\n".join(items)
    
    rss_xml = f"""<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Krisala Aventis Tathawade - Property Syndication Feed</title>
    <link>https://krisalaventis.in/</link>
    <description>Official real estate market updates, competitor comparisons, and property investment guides for West Pune.</description>
    <language>en-in</language>
    <pubDate>{pub_date}</pubDate>
    <atom:link href="https://krisalaventis.in/syndication-feed.xml" rel="self" type="application/rss+xml" />
{items_str}
  </channel>
</rss>"""

    with open("syndication-feed.xml", "w", encoding="utf-8") as f:
        f.write(rss_xml)
        
    print(f"Successfully generated syndication-feed.xml with {len(items)} syndicated articles ready for Web 2.0 IFTTT/Zapier distribution.")

if __name__ == "__main__":
    generate_rss()
