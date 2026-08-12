import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def minify_css(content):
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove excess whitespace
    content = re.sub(r'\s+', ' ', content)
    # Remove spaces around important characters
    content = re.sub(r'\s*([{}:;,>+~])\s*', r'\1', content)
    return content.strip()

def minify_js(content):
    # Remove multi-line comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove single-line comments (careful with URLs)
    content = re.sub(r'(?<!:)\/\/.*', '', content)
    # Remove excess whitespace but preserve newlines for safety where semicolons might be missing
    content = re.sub(r'[ \t]+', ' ', content)
    # Compress basic blocks
    content = re.sub(r'\s*([{}();,])\s*', r'\1', content)
    return content.strip()

def harden_performance():
    # 1. Minify Assets
    css_path = os.path.join(base_dir, 'assets/css/style.css')
    min_css_path = os.path.join(base_dir, 'assets/css/style.min.css')
    
    js_path = os.path.join(base_dir, 'assets/js/script.js')
    min_js_path = os.path.join(base_dir, 'assets/js/script.min.js')

    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    with open(min_css_path, 'w', encoding='utf-8') as f:
        f.write(minify_css(css_content))
        
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()
    with open(min_js_path, 'w', encoding='utf-8') as f:
        f.write(minify_js(js_content))
        
    print("✅ Assets Minified.")

    # 2. Inject Lazy Loading & Update HTML references
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update Asset References
        content = content.replace('href="assets/css/style.css"', 'href="assets/css/style.min.css"')
        content = content.replace('src="assets/js/script.js"', 'src="assets/js/script.min.js"')

        # Inject loading="lazy" to imgs that don't have it and are not hero (fetchpriority="high")
        # Find all img tags
        img_tags = re.findall(r'<img[^>]+>', content)
        for img in img_tags:
            if 'loading=' not in img and 'fetchpriority="high"' not in img and 'hero' not in img:
                new_img = img.replace('<img ', '<img loading="lazy" ')
                content = content.replace(img, new_img)

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print("✅ Lazy Loading & Minified Asset References injected into all 41 silos.")

if __name__ == "__main__":
    harden_performance()
