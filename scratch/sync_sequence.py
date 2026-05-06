import os
import re

index_path = "/Users/vikasyewle/krisalaaventis/index.html"

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract sections
# Hero
hero = re.search(r'<!-- ======== HERO ======== -->.*?<!-- ======== STATS TICKER ======== -->', content, flags=re.DOTALL).group(0)
# Stats Ticker
stats = re.search(r'<!-- ======== STATS TICKER ======== -->.*?<!-- ======== PROJECT OVERVIEW ======== -->', content, flags=re.DOTALL).group(0)
# Overview
overview = re.search(r'<!-- ======== PROJECT OVERVIEW ======== -->.*?<!-- ======== PROPERTY HIGHLIGHTS', content, flags=re.DOTALL).group(0)
# Highlights
highlights = re.search(r'<!-- ======== PROPERTY HIGHLIGHTS.*?<section id="floorplans"', content, flags=re.DOTALL).group(0)
# Floorplans
floorplans = re.search(r'<section id="floorplans".*?<!-- ======== AMENITIES ======== -->', content, flags=re.DOTALL).group(0)
# Amenities
amenities = re.search(r'<!-- ======== AMENITIES ======== -->.*?<!-- ======== MASTER LAYOUT ======== -->', content, flags=re.DOTALL).group(0)
# Master Layout
masterlayout = re.search(r'<!-- ======== MASTER LAYOUT ======== -->.*?<!-- ======== LOCATION ======== -->', content, flags=re.DOTALL).group(0)
# Location
location = re.search(r'<!-- ======== LOCATION ======== -->.*?<!-- ======== KRISALA LEGACY ======== -->', content, flags=re.DOTALL).group(0)
# Legacy
legacy = re.search(r'<!-- ======== KRISALA LEGACY ======== -->.*?<!-- ======== SPECIFICATIONS ======== -->', content, flags=re.DOTALL).group(0)
# Specs
specs = re.search(r'<!-- ======== SPECIFICATIONS ======== -->.*?<!-- ======== FREQUENTLY ASKED QUESTIONS', content, flags=re.DOTALL).group(0)
# FAQ
faq = re.search(r'<!-- ======== FREQUENTLY ASKED QUESTIONS.*?<!-- ======== TATHAWADE INSIGHT HUB', content, flags=re.DOTALL).group(0)
# Blog/Insight
blog = re.search(r'<!-- ======== TATHAWADE INSIGHT HUB.*?<!-- ======== LOCATION COMMAND CENTER', content, flags=re.DOTALL).group(0)

# The rest (footer etc.)
footer_start = content.find('<!-- ======== LOCATION COMMAND CENTER')
footer_part = content[footer_start:]

# Header part
header_end = content.find('<!-- ======== HERO ======== -->')
header_part = content[:header_end]

# New Sequence:
# 1. Overview
# 2. Legacy
# 3. Master Plan
# 4. Floor Plans
# 5. Amenities
# 6. Location
# 7. Insight

new_body = (
    hero + 
    stats + 
    overview + 
    highlights + 
    legacy + 
    masterlayout + 
    floorplans + 
    amenities + 
    location + 
    specs + 
    faq + 
    blog + 
    footer_part
)

final_content = header_part + new_body

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Homepage Section Sequence Synchronized with Navbar Order.")
