import os
import glob
import re

def branding_update():
    html_files = glob.glob('*.html')
    for file in html_files:
        if file == '404.html':
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Case-insensitive replacement of "Official Site" with "Official Launch"
        # We target specific areas to be safe, but also general text.
        content = content.replace('Official Site', 'Official Launch')
        content = content.replace('official site', 'official launch')
        content = content.replace('OFFICIAL SITE', 'OFFICIAL LAUNCH')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated Branding in {file}")

if __name__ == "__main__":
    branding_update()
