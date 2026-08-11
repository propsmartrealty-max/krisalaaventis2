import os

def update_index():
    filepath = 'index.html'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Inject RSS link before </head>
    rss_link = '<link rel="alternate" type="application/rss+xml" title="Krisala Aventis RSS Feed" href="https://krisalaventis.in/syndication-feed.xml">'
    if rss_link not in content:
        content = content.replace('</head>', f'{rss_link}</head>')

    # 2. Inject Sitemap link in footer. 
    # Find: <p>© 2026 Krisala Legacy. All Rights Reserved. | Disclaimer:
    sitemap_link = ' | <a href="/sitemap.html" style="color:var(--clr-gold);text-decoration:none;">HTML Sitemap</a> | '
    if 'sitemap.html' not in content:
        content = content.replace('| Disclaimer:', f'{sitemap_link}Disclaimer:')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated index.html successfully.")

if __name__ == "__main__":
    update_index()
