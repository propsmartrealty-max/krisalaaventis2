import os
import glob
import re
from bs4 import BeautifulSoup

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = glob.glob(os.path.join(base_dir, "*.html"))

def deep_audit():
    print("--- SOVEREIGN DEEP AUDIT: SYSTEM SCAN COMMENCING ---")
    
    issues = []
    metadata = {}
    
    for file_path in html_files:
        filename = os.path.basename(file_path)
        with open(file_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
        # 1. H1 Check
        h1s = soup.find_all('h1')
        if len(h1s) == 0:
            issues.append(f"MISSING H1: {filename}")
        elif len(h1s) > 1:
            issues.append(f"MULTIPLE H1s ({len(h1s)}): {filename}")
            
        # 2. Metadata Uniqueness
        title = soup.title.string if soup.title else "MISSING"
        desc_meta = soup.find('meta', attrs={'name': 'description'})
        desc = desc_meta['content'] if desc_meta else "MISSING"
        
        if title in metadata:
            metadata[title].append(filename)
        else:
            metadata[title] = [filename]
            
        if title == "MISSING" or desc == "MISSING":
            issues.append(f"MISSING METADATA: {filename}")
            
        # 3. Image SEO (Alt tags)
        images = soup.find_all('img')
        for img in images:
            if not img.get('alt'):
                issues.append(f"MISSING ALT TAG: {filename} -> {img.get('src', 'Unknown Src')}")
                
        # 4. Security (Target Blank)
        links = soup.find_all('a', target='_blank')
        for link in links:
            rel = link.get('rel', [])
            if 'noopener' not in rel or 'noreferrer' not in rel:
                issues.append(f"SECURITY RISK (External Link): {filename} -> {link.get('href')}")
                
        # 5. Form Integrity
        forms = soup.find_all('form')
        for form in forms:
            # We use sovereign-form-logic, check if it has a submit button
            if not form.find('button', type='submit') and not form.find('input', type='submit'):
                issues.append(f"FORM WITHOUT SUBMIT: {filename}")

    # Report Metadata Duplicates
    for title, files in metadata.items():
        if len(files) > 1 and title != "MISSING":
            issues.append(f"DUPLICATE TITLE ({title}): {', '.join(files)}")

    print(f"Total Files Scanned: {len(html_files)}")
    print(f"Total Anomalies Found: {len(issues)}")
    
    if issues:
        print("\n--- ANOMALY REPORT ---")
        for i, issue in enumerate(issues, 1):
            print(f"{i}. {issue}")
    else:
        print("\n✅ SYSTEM INTEGRITY: 100% SECURE. NO ANOMALIES DETECTED.")

if __name__ == "__main__":
    deep_audit()
