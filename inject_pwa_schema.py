import os
import re

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

def extract_title(html_content):
    match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    if match:
        title = match.group(1).split('—')[0].strip()
        title = title.split('|')[0].strip()
        title = title.replace('⭐', '').strip()
        return title
    return "Krisala Aventis Tathawade"

def process():
    injected_count = 0
    
    files_to_process = ['index.html']
    for root, dirs, files in os.walk("."):
        if '.git' in root or 'node_modules' in root or root == '.':
            continue
        valid_dir = any(td in root for td in TARGET_DIRS)
        if not valid_dir:
            continue
        for file in files:
            if file.endswith('.html'):
                files_to_process.append(os.path.join(root, file))
                
    manifest_link = '<link rel="manifest" href="/manifest.json">'
    
    for filepath in files_to_process:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            modified = False
            title = extract_title(content)
            
            # Extract url
            url_match = re.search(r'<link rel="canonical" href="([^"]+)"', content)
            if url_match:
                url = url_match.group(1)
            else:
                url = "https://krisalaventis.in/"

            # 1. Inject PWA Manifest
            if 'manifest.json' not in content:
                content = content.replace('</head>', f'{manifest_link}</head>')
                modified = True
                
            # 2. Dynamic OG Titles
            new_content = re.sub(r'(<meta\s+property="og:title"\s+content=")[^"]+(")', r'\g<1>' + title + r'\g<2>', content)
            if new_content != content:
                content = new_content
                modified = True
                
            new_content = re.sub(r'(<meta\s+name="twitter:title"\s+content=")[^"]+(")', r'\g<1>' + title + r'\g<2>', content)
            if new_content != content:
                content = new_content
                modified = True
                
            # 3. Real Estate Schema
            if '"@type":"RealEstateListing"' not in content and '"@type": "RealEstateListing"' not in content:
                schema = f'<script type="application/ld+json">{{"@context":"https://schema.org","@type":"RealEstateListing","name":"{title}","description":"{title} - West Pune Luxury Homes","url":"{url}","image":"https://krisalaventis.in/assets/images/hero.webp","address":{{"@type":"PostalAddress","streetAddress":"Tathawade","addressLocality":"Pune","addressRegion":"MH","postalCode":"411033","addressCountry":"IN"}}}}</script>'
                if '</body>' in content:
                    content = content.replace('</body>', f'{schema}</body>')
                    modified = True
                    
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                injected_count += 1
                
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
            
    print(f"Phase 3 optimization complete. Updated {injected_count} files with PWA, Dynamic OG, and Real Estate Schema.")

if __name__ == "__main__":
    process()
