import os
import glob
import re

def sync_site():
    with open('index.html', 'r') as f:
        index_content = f.read()

    # Extract navbar and footer from index.html
    navbar_match = re.search(r'<!-- FLOATING NAVBAR -->.*?<nav.*?</nav>', index_content, re.DOTALL)
    footer_matrix_match = re.search(r'<!-- SOVEREIGN SEO FOOTER: CROSS-LINKING MATRIX -->.*?<section.*?</section>', index_content, re.DOTALL)
    footer_main_match = re.search(r'<footer class="footer">.*?</footer>', index_content, re.DOTALL)

    if not navbar_match or not footer_matrix_match or not footer_main_match:
        print("Could not find master components in index.html")
        return

    navbar = navbar_match.group(0)
    footer_matrix = footer_matrix_match.group(0)
    footer_main = footer_main_match.group(0)

    html_files = glob.glob('*.html')
    for file in html_files:
        if file == 'index.html' or file == '404.html':
            continue

        with open(file, 'r') as f:
            content = f.read()

        # Replace Navbar
        content = re.sub(r'<!-- FLOATING NAVBAR -->.*?<nav.*?</nav>', navbar, content, flags=re.DOTALL)
        # Replace Footer Matrix
        content = re.sub(r'<!-- SOVEREIGN SEO FOOTER: CROSS-LINKING MATRIX -->.*?<section.*?</section>', footer_matrix, content, flags=re.DOTALL)
        # Replace Footer Main
        content = re.sub(r'<footer class="footer">.*?</footer>', footer_main, content, flags=re.DOTALL)
        
        # Normalize internal links to Clean URLs (remove .html)
        content = re.sub(r'href="([^"]+)\.html"', r'href="/\1"', content)

        with open(file, 'w') as f:
            f.write(content)
        print(f"Synced {file}")

if __name__ == "__main__":
    sync_site()
