import os
import re

CORE_KEYWORDS = "Krisala Aventis, Krisala Aventis Tathawade, Krisala Aventis Pune, Krisala Aventis project, Krisala Aventis flats, Krisala Aventis new launch, buy Krisala Aventis"
PRICE_KEYWORDS = "Krisala Aventis price, Krisala Aventis price list, Krisala Aventis cost, flats under 1 crore Tathawade, affordable luxury flats Tathawade"
CONFIG_KEYWORDS = "2 BHK in Tathawade, 3 BHK in Tathawade, 2.25 BHK Tathawade, 3.25 BHK Tathawade, Krisala Aventis 2 BHK, Krisala Aventis 3 BHK"
COMPETITOR_KEYWORDS = "Krisala Aventis vs Godrej, Krisala Aventis vs Kolte Patil, best project in Tathawade, best luxury project Tathawade, top residential projects Tathawade"
NEAR_KEYWORDS = "flats near Hinjewadi, apartments near Wakad, flats near Punawale, flats near Mumbai Pune Highway, property near Hinjewadi IT Park"
AMENITY_KEYWORDS = "Krisala Aventis amenities, luxury apartments with swimming pool Tathawade, flats with clubhouse Tathawade, smart homes Tathawade, Aluform construction Tathawade"
INVESTMENT_KEYWORDS = "property investment Tathawade, real estate investment near Hinjewadi, high ROI property Pune, Krisala Aventis review, rental property Tathawade"

def get_keywords_for_file(filename):
    if filename == "index.html":
        return "Krisala Aventis, Krisala Aventis Tathawade, Krisala Aventis Pune, Krisala Aventis price, flats in Tathawade, 2 BHK flats in Tathawade, 3 BHK flats in Tathawade, luxury flats in Tathawade, flats near Hinjewadi, buy Krisala Aventis"
    
    filename = filename.lower()
    if 'price' in filename or 'cost' in filename or 'emi' in filename or 'loan' in filename:
        return PRICE_KEYWORDS
    elif 'vs' in filename or 'competitor' in filename:
        return COMPETITOR_KEYWORDS
    elif 'near' in filename or 'connectivity' in filename or 'transport' in filename:
        return NEAR_KEYWORDS
    elif 'amenities' in filename or 'aluform' in filename or 'vastu' in filename or 'smart' in filename:
        return AMENITY_KEYWORDS
    elif '2-bhk' in filename or '3-bhk' in filename:
        return CONFIG_KEYWORDS
    elif 'investment' in filename or 'growth' in filename or 'roi' in filename:
        return INVESTMENT_KEYWORDS
    else:
        return CORE_KEYWORDS

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    filename = os.path.basename(filepath)
    new_keywords = get_keywords_for_file(filename)
    
    keywords_meta = f'<meta name="keywords" content="{new_keywords}">'
    
    if '<meta name="keywords"' in content:
        content = re.sub(r'<meta\s+name="keywords"\s+content="[^"]*"\s*>', keywords_meta, content, flags=re.IGNORECASE)
    else:
        content = re.sub(r'(<meta\s+name="description"\s+content="[^"]*"\s*>)', r'\1\n  ' + keywords_meta, content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")

if __name__ == "__main__":
    count = 0
    for file in os.listdir('.'):
        if file.endswith('.html'):
            process_file(file)
            count += 1
    print(f"Processed {count} root HTML files.")
