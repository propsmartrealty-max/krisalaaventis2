import os
import glob
import re

def sanitize_assets():
    html_files = glob.glob('*.html')
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Enforce Favicon & Apple Touch Icon consistency
        if 'apple-touch-icon' not in content:
            content = content.replace('<link rel="icon"', '<link rel="apple-touch-icon" href="favicon.png">\n  <link rel="icon"', 1)
        
        # 2. Enforce Manifest consistency
        if 'manifest.json' not in content:
            content = content.replace('</head>', '  <link rel="manifest" href="manifest.json">\n</head>', 1)

        # 3. Add decoding="async" to all images (Safe UX/SEO boost)
        content = re.sub(r'<img(?!.*?decoding="async")', r'<img decoding="async"', content)

        # 4. Add loading="lazy" to all images EXCEPT hero/preloaded ones
        # We skip images with fetchpriority="high" or those in the top of the file
        def lazy_img(match):
            img_tag = match.group(0)
            if 'fetchpriority="high"' in img_tag or 'loading="eager"' in img_tag or 'hero' in img_tag.lower():
                return img_tag
            if 'loading="lazy"' in img_tag:
                return img_tag
            return img_tag.replace('<img', '<img loading="lazy"')

        content = re.sub(r'<img[^>]*>', lazy_img, content)

        # 5. Ensure Charset and Viewport are at the very top of <head>
        # (Standard practice for faster parsing)
        if '<meta charset="UTF-8">' not in content:
            content = content.replace('<head>', '<head>\n  <meta charset="UTF-8">', 1)
        
        # 6. Ensure Robots Tag is consistent
        if '<meta name="robots"' not in content:
             content = content.replace('</head>', '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n</head>', 1)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Sanitized & Hardened: {file}")

if __name__ == "__main__":
    sanitize_assets()
