import os
import glob
import re

def technical_propagate():
    html_files = glob.glob('*.html')
    
    # 1. Preconnect Hints
    preconnect_hints = """
  <!-- Preconnect & DNS-Prefetch -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://maps.googleapis.com">
  <link rel="dns-prefetch" href="https://maps.gstatic.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">"""

    for file in html_files:
        if file == '404.html': continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Inject Preconnect
        if 'dns-prefetch' not in content:
             content = content.replace('<link rel="preconnect" href="https://fonts.googleapis.com">', preconnect_hints)

        # Consolidate Subpage Schema Graph
        if file != 'index.html' and '@graph' not in content:
            # Extract Breadcrumb and FAQ if they exist to merge them
            # For simplicity, we'll wrap existing schemas in a graph if they are found
            # But more safely, we'll just ensure the Preconnects are there for now
            # since subpages have very specific siloed schemas.
            pass

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Technical Hardened {file}")

if __name__ == "__main__":
    technical_propagate()
