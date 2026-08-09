import os
import glob
import re

TARGET_DIRS = [
    '.',
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
    'flats'
]

def optimize_core_web_vitals():
    updated_count = 0
    
    # Target replacements
    targets = [
        '<script src="https://cdn.tailwindcss.com"></script>',
        '<link rel="stylesheet" href="../assets/css/style.min.css">',
        '<link rel="stylesheet" href="/assets/css/style.min.css">',
        '<link rel="stylesheet" href="assets/css/style.min.css">'
    ]
    replacement = '<link rel="stylesheet" href="/assets/css/output.css">'
    
    config_pattern = re.compile(r'<script>\s*tailwind\.config.*?</script>', re.DOTALL)

    for d in TARGET_DIRS:
        if not os.path.exists(d):
            continue
        # Search recursively or just flat
        files = glob.glob(os.path.join(d, "*.html"))
        for filepath in files:
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                original_content = content
                
                for t in targets:
                    if t in content:
                        content = content.replace(t, replacement)
                        
                if config_pattern.search(content):
                    content = config_pattern.sub('', content)
                    
                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    updated_count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")
                
    print(f"Core Web Vitals Optimization Complete! Successfully injected static CSS on {updated_count} HTML pages.")

if __name__ == "__main__":
    optimize_core_web_vitals()
