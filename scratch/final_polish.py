import os
import glob
import re

def final_polish():
    html_files = glob.glob('*.html')
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Deduplicate H1 tags
        # If both subpage-hero and silo-hero exist, the subpage-hero one is likely redundant/ugly
        if 'class="hero silo-hero"' in content and 'class="section subpage-hero"' in content:
            content = re.sub(r'<section class="section subpage-hero".*?</section>', '', content, flags=re.DOTALL)
            print(f"Deduplicated H1 (Removed subpage-hero): {file}")

        # 2. Fix Multiple title attributes on same link
        # Find <a> tags and consolidate titles
        def clean_anchor(match):
            tag_content = match.group(1)
            # Find all titles
            titles = re.findall(r'title="([^"]*)"', tag_content)
            if not titles:
                return match.group(0)
            
            # Pick the best title (longest one usually has more keywords)
            best_title = max(titles, key=len)
            
            # Remove "Krisala Aventis —" prefix if it's repeated or too long
            clean_title = best_title.replace('Krisala Aventis — Krisala Aventis', 'Krisala Aventis')
            
            # Strip all existing titles
            tag_content = re.sub(r'\s*title="[^"]*"', '', tag_content)
            
            # Re-insert the single best title
            return f'<a title="{clean_title}" {tag_content.strip()}>'

        content = re.sub(r'<a\s+([^>]*title="[^"]*"[^>]*)>', clean_anchor, content)

        # 3. Final Clean URLs check (ensure no .html in internal links)
        content = re.sub(r'href="/([^"]*)\.html"', r'href="/\1"', content)

        # 4. Remove redundant double title injection (just in case)
        content = re.sub(r'title="([^"]*)"\s+title="[^"]*"', r'title="\1"', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Final Polish Completed: {file}")

if __name__ == "__main__":
    final_polish()
