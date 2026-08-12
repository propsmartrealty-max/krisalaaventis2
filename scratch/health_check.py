import os
import glob
import re

def health_check():
    html_files = glob.glob('*.html')
    errors = []
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Check for Broken Internal Links
        # Extract all hrefs
        hrefs = re.findall(r'href="([^"#]*)"', content)
        for href in hrefs:
            if href.startswith('/') and not href.startswith('//'):
                # Handle root-relative paths
                path = href[1:]
                if path == '': path = 'index.html'
                if not path.endswith('.html') and '.' not in path:
                    path += '.html'
                
                if not os.path.exists(path) and path != 'index.html':
                     # Some links might be without .html in the code but expected to work on Vercel
                     if not os.path.exists(path + '.html'):
                        errors.append(f"[{file}] Broken Link: {href} (Mapped to: {path})")

        # 2. Check for Missing Meta Description
        if '<meta name="description"' not in content:
            errors.append(f"[{file}] Missing Meta Description")

        # 3. Check for Multiple H1s
        h1_count = len(re.findall(r'<h1', content, re.IGNORECASE))
        if h1_count > 1:
            errors.append(f"[{file}] Multiple H1s detected ({h1_count})")
        elif h1_count == 0:
            errors.append(f"[{file}] Missing H1")

        # 4. Check for Empty Alt Tags or Missing Alt Tags
        images = re.findall(r'<img[^>]*>', content)
        for img in images:
            if 'alt="' not in img or 'alt=""' in img:
                if 'loading-spinner' not in img: # Ignore spinners
                    errors.append(f"[{file}] Image with missing/empty alt: {img[:50]}...")

        # 5. Check for JSON-LD Syntax (Basic Balance)
        json_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
        for block in json_blocks:
            try:
                # Basic balance check before trying complex regex or json.loads
                if block.count('{') != block.count('}'):
                    errors.append(f"[{file}] Potential JSON-LD Syntax Error (Brace Mismatch)")
            except:
                pass

    if errors:
        print("🚨 [Health Check] Anomalies Detected:")
        for error in errors:
            print(f"  - {error}")
    else:
        print("✅ [Health Check] No major anomalies detected.")

if __name__ == "__main__":
    health_check()
