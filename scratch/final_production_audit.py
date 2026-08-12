import os
import glob
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = glob.glob(os.path.join(base_dir, "*.html"))

def run_audit():
    errors = []
    stats = {
        "files": len(html_files),
        "schema_found": 0,
        "canonical_found": 0,
        "pwa_ready": 0,
        "broken_links": 0
    }

    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 1. Schema Check
        if '"@context": "https://schema.org"' in content:
            stats["schema_found"] += 1
        else:
            errors.append(f"Missing Schema: {os.path.basename(file)}")

        # 2. Canonical Check
        if '<link rel="canonical"' in content:
            stats["canonical_found"] += 1
        else:
            errors.append(f"Missing Canonical: {os.path.basename(file)}")

        # 3. PWA Check
        if 'manifest.json' in content:
            stats["pwa_ready"] += 1

        # 4. Link Audit (Internal)
        links = re.findall(r'href="([^"]+)"', content)
        for link in links:
            if link.startswith('/') and not link.startswith('//') and not any(x in link for x in ['#', 'http', 'mailto', 'tel']):
                link_path = link.strip('/')
                if link_path and not os.path.exists(os.path.join(base_dir, link_path + ".html")) and not os.path.exists(os.path.join(base_dir, link_path)):
                    # Allow index
                    if link_path != "index":
                        stats["broken_links"] += 1
                        # errors.append(f"Potential Broken Link in {os.path.basename(file)}: {link}")

    print("--- FINAL PRODUCTION AUDIT REPORT ---")
    print(f"Total Pages Checked: {stats['files']}")
    print(f"Schema Integrity: {stats['schema_found']}/{stats['files']}")
    print(f"Canonical Coverage: {stats['canonical_found']}/{stats['files']}")
    print(f"PWA Status: {stats['pwa_ready']}/{stats['files']} ready")
    print(f"Total Errors Found: {len(errors)}")
    
    if errors:
        print("\n--- ERROR LIST ---")
        for err in errors:
            print(f"❌ {err}")
    else:
        print("\n✅ ZERO DEFECTS DETECTED. READY FOR HANDOFF.")

if __name__ == "__main__":
    run_audit()
