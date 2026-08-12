import os
import glob
import re

def advanced_sanitize_assets():
    html_files = glob.glob('*.html')
    
    # Standard Dimensions for project assets
    dims = {
        'hero.png': 'width="1024" height="555"',
        'floorplan-2bhk.png': 'width="800" height="600"',
        'floorplan-3bhk.png': 'width="800" height="600"',
        'favicon.png': 'width="32" height="32"'
    }

    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Image Attribute Hardening
        def optimize_img(match):
            img_tag = match.group(0)
            
            # Inject Dimensions based on filename
            for img_name, dim_str in dims.items():
                if img_name in img_tag and 'width=' not in img_tag:
                    img_tag = img_tag.replace('<img', f'<img {dim_str}')
            
            # Inject decoding="async"
            if 'decoding="async"' not in img_tag:
                img_tag = img_tag.replace('<img', '<img decoding="async"')
            
            # Inject loading="lazy" (Except for hero)
            if 'fetchpriority="high"' not in img_tag and 'hero' not in img_tag.lower() and 'loading=' not in img_tag:
                img_tag = img_tag.replace('<img', '<img loading="lazy"')
            
            # Ensure Alt & Title exist
            if 'alt=' not in img_tag:
                img_tag = img_tag.replace('<img', '<img alt="Krisala Aventis Tathawade Official Asset"')
            if 'title=' not in img_tag:
                img_tag = img_tag.replace('<img', '<img title="Krisala Aventis Tathawade Official Asset"')
            
            return img_tag

        content = re.sub(r'<img[^>]*>', optimize_img, content)

        # 2. PWA & Meta Hardening
        if 'apple-touch-icon' not in content:
            content = content.replace('<link rel="icon"', '<link rel="apple-touch-icon" href="favicon.png">\n  <link rel="icon"', 1)
        if 'manifest.json' not in content:
            content = content.replace('</head>', '  <link rel="manifest" href="manifest.json">\n</head>', 1)
        if '<meta charset="UTF-8">' not in content:
            content = content.replace('<head>', '<head>\n  <meta charset="UTF-8">', 1)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Visual Media Hardened: {file}")

if __name__ == "__main__":
    advanced_sanitize_assets()
