import os
import glob

def check_files():
    html_files = glob.glob('/Users/vikasyewle/krisalaaventis/*.html')
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            for i, line in enumerate(lines):
                if 'target="_blank"' in line and 'rel=' not in line:
                    print(f'{file}:{i+1} target="_blank" without rel')
                if '<img' in line and 'alt=' not in line:
                    print(f'{file}:{i+1} <img> without alt')

check_files()
