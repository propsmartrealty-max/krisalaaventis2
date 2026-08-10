import os
import re

def optimize_images():
    filepath = 'index.html'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements (old_pattern, new_alt_title)
    replacements = [
        (r'alt="Krisala Aventis Tathawade — KRISALA NEW LAUNCH in the Wakad Corridor"', 'alt="Krisala Aventis Tathawade"'),
        (r'title="Krisala Aventis Tathawade — KRISALA NEW LAUNCH in the Wakad Corridor"', 'title="Krisala Aventis Tathawade"'),
        
        (r'alt="Krisala Aventis Tathawade Show Flat Interior — Premium Living Room and High-End Finishes"', 'alt="Krisala Aventis apartments"'),
        (r'title="Krisala Aventis Tathawade Show Flat Interior — Premium Living Room and High-End Finishes"', 'title="Krisala Aventis apartments"'),
        
        (r'alt="Krisala Aventis Tathawade 2 BHK Floor Plan — Smart Study Unit Layout and Carpet Area"', 'alt="Krisala Aventis 2 BHK floor plan"'),
        (r'title="Krisala Aventis Tathawade 2 BHK Floor Plan — Smart Study Unit Layout and Carpet Area"', 'title="Krisala Aventis 2 BHK floor plan"'),
        
        (r'alt="Krisala Aventis Tathawade 3 BHK Floor Plan — Spacious Configuration and Luxury Balcony Layout"', 'alt="Krisala Aventis 3 BHK floor plan"'),
        (r'title="Krisala Aventis Tathawade 3 BHK Floor Plan — Spacious Configuration and Luxury Balcony Layout"', 'title="Krisala Aventis 3 BHK floor plan"'),
        
        (r'alt="Krisala Aventis Tathawade Amenities — Rooftop Infinity Pool, Gym, and 40\+ Features"', 'alt="Krisala Aventis amenities"'),
        (r'title="Krisala Aventis Tathawade Amenities — Rooftop Infinity Pool, Gym, and 40\+ Features"', 'title="Krisala Aventis amenities"'),
        
        (r'alt="Krisala Aventis Tathawade Location Map — Strategic Connectivity Hinjewadi and Highway"', 'alt="Krisala Aventis location"'),
        (r'title="Krisala Aventis Tathawade Location Map — Strategic Connectivity Hinjewadi and Highway"', 'title="Krisala Aventis location"'),
    ]
    
    for old, new in replacements:
        content = re.sub(old, new, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated image alt/titles in index.html")

if __name__ == "__main__":
    optimize_images()
