import os
import glob
import re

def invisible_harden():
    html_files = glob.glob('*.html')
    for file in html_files:
        if file == '404.html':
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Inject SiteNavigationElement Schema
        navigation_schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": ["Overview", "Legacy", "Master Plan", "Floor Plans", "Amenities", "Location", "Insight"],
    "url": [
      "https://krisalaventis.in/#overview",
      "https://krisalaventis.in/#legacy",
      "https://krisalaventis.in/#masterlayout",
      "https://krisalaventis.in/#floorplans",
      "https://krisalaventis.in/#amenities",
      "https://krisalaventis.in/#location",
      "https://krisalaventis.in/#blog"
    ]
  }
  </script>"""
        if 'SiteNavigationElement' not in content:
            content = content.replace('</head>', navigation_schema + '\n</head>')

        # 2. Enrich Links with Title Attributes (only if missing)
        # Find <a> tags and add title based on text content if title is missing
        def link_title_replacer(match):
            tag = match.group(0)
            if 'title=' in tag:
                return tag
            text = re.sub('<[^>]*>', '', match.group(2)).strip()
            if not text: return tag
            return f'<a title="Krisala Aventis — {text}" {match.group(1)}>{match.group(2)}</a>'

        content = re.sub(r'<a (.*?)>(.*?)</a>', link_title_replacer, content, flags=re.DOTALL)

        # 3. Enrich Images with Title Attributes
        def img_title_replacer(match):
            tag = match.group(0)
            if 'title=' in tag:
                return tag
            alt_match = re.search(r'alt="(.*?)"', tag)
            if alt_match:
                alt_text = alt_match.group(1)
                return tag.replace('<img ', f'<img title="{alt_text}" ')
            return tag

        content = re.sub(r'<img .*?>', img_title_replacer, content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Invisibly Hardened {file}")

if __name__ == "__main__":
    invisible_harden()
