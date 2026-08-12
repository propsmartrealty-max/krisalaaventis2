import os
import glob
import re
import json

def graph_propagation():
    with open('index.html', 'r', encoding='utf-8') as f:
        master_content = f.read()
    
    # Find all application/ld+json blocks
    scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', master_content, re.DOTALL)
    master_graph_json = None
    for s in scripts:
        if '"@graph"' in s:
            try:
                master_graph_json = json.loads(s.strip())
                break
            except Exception as e:
                print(f"Error parsing JSON: {e}")
                continue
    
    if not master_graph_json:
        print("Master graph not found in index.html")
        return
    
    html_files = glob.glob('*.html')
    for file in html_files:
        if file in ['index.html', '404.html', 'privacy-policy.html', 'terms-conditions.html', 'sitemap-html.html']:
            continue
        
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Replace the @graph in subpage
        new_json_script = '<script type="application/ld+json">\n' + json.dumps(master_graph_json, indent=2) + '\n</script>'
        
        if '"@graph"' in content:
             content = re.sub(r'<script type="application/ld\+json">.*?"@graph".*?</script>', new_json_script, content, flags=re.DOTALL)
        else:
             content = content.replace('</head>', new_json_script + '\n</head>')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Phase 12 Unified Graph Propagated to {file}")

if __name__ == "__main__":
    graph_propagation()
