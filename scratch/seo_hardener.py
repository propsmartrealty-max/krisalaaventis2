import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
base_url = "https://krisalaventis.in"

def audit_and_harden_seo():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    
    issues_fixed = 0
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Enforce Canonical Tags
        canonical_url = f"{base_url}/" if filename == 'index.html' else f"{base_url}/{filename.replace('.html', '')}"
        canonical_tag = f'<link rel="canonical" href="{canonical_url}">'
        
        if '<link rel="canonical"' not in content:
            # Inject canonical before </head>
            content = content.replace('</head>', f'  {canonical_tag}\n</head>')
            issues_fixed += 1
        else:
            # Replace existing canonical just in case it's wrong (e.g. .html included)
            content = re.sub(r'<link rel="canonical" href=".*?">', canonical_tag, content)

        # 2. Enforce Open Graph URL
        og_url_tag = f'<meta property="og:url" content="{canonical_url}">'
        if '<meta property="og:url"' not in content:
            content = content.replace('</head>', f'  {og_url_tag}\n</head>')
        else:
            content = re.sub(r'<meta property="og:url" content=".*?">', og_url_tag, content)
            
        # 3. Enforce Language Tag
        if '<html lang=' not in content:
            content = content.replace('<html>', '<html lang="en-IN">')
            
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print(f"✅ Advanced SEO Hardening Complete. Canonicals and Open Graph normalized across {len(html_files)} pages.")
    
    # 4. Enforce robots.txt Sitemap Link
    robots_path = os.path.join(base_dir, 'robots.txt')
    if os.path.exists(robots_path):
        with open(robots_path, 'r') as f:
            robots_content = f.read()
        if 'Sitemap:' not in robots_content:
            with open(robots_path, 'a') as f:
                f.write(f"\nSitemap: {base_url}/sitemap.xml\n")
            print("✅ Injected Sitemap into robots.txt")

if __name__ == "__main__":
    audit_and_harden_seo()
