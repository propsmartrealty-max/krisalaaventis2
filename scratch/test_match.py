#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path('/Users/vikasyewle/krisalaaventis')

def test_match():
    f = ROOT / 'index.html'
    content = f.read_text(encoding='utf-8')
    
    # Let's find the footer-top section
    pattern = r'<div class="footer-top">.*?</div>\s*(?:<!--.*?-->\s*)*<div class="footer-bottom">'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        print("MATCHED FOOTER-TOP SUCCESS!")
        # print(match.group(0)[:300])
        # print("...")
        # print(match.group(0)[-300:])
    else:
        print("NO MATCH FOR FOOTER-TOP!")

if __name__ == '__main__':
    test_match()
