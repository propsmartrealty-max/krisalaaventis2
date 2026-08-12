import json
import os

def generate_nri_data():
    locales = ["ae", "us", "uk", "sg"]
    countries = {
        "ae": {"name": "UAE", "currency": "AED", "city": "Dubai"},
        "us": {"name": "USA", "currency": "USD", "city": "New York"},
        "uk": {"name": "UK", "currency": "GBP", "city": "London"},
        "sg": {"name": "Singapore", "currency": "SGD", "city": "Singapore"}
    }
    
    data = []
    
    for locale in locales:
        country = countries[locale]
        
        # High value keyword 1: ROI
        data.append({
            "locale": locale,
            "folder": "invest",
            "url_slug": f"best-roi-property-pune-for-nri-in-{country['city'].lower().replace(' ', '-')}.html",
            "title": f"Best ROI Property in Pune for NRI in {country['name']} | Krisala Aventis",
            "h1": f"Top ROI Investment in Pune for NRIs in {country['name']}",
            "description": f"Looking to invest in Pune real estate from {country['city']}? Krisala Aventis Tathawade offers the highest ROI for NRIs. Check pricing in {country['currency']}.",
            "keywords": f"property in pune for nri in {country['name'].lower()}, roi real estate pune nri, buy flat in pune from {country['city'].lower()}",
            "content": f"As a Non-Resident Indian living in {country['name']}, maximizing the return on your real estate investments in India is crucial. Krisala Aventis in Tathawade, Pune, offers unparalleled appreciation and rental yields. The strategic location near Hinjewadi IT Park ensures high demand from IT professionals, guaranteeing steady rental income that you can easily track in {country['currency']}.",
            "faqs": [
                {
                    "q": f"Can an NRI from {country['name']} buy property in Krisala Aventis?",
                    "a": "Yes, NRIs holding a valid Indian passport or OCI card can easily purchase property in Krisala Aventis under FEMA regulations."
                },
                {
                    "q": f"What is the expected ROI for NRIs investing from {country['city']}?",
                    "a": "Historically, Tathawade properties yield 6-8% annual rental returns and 10-15% capital appreciation, making it highly lucrative."
                }
            ]
        })
        
        # High value keyword 2: Pricing
        data.append({
            "locale": locale,
            "folder": "invest",
            "url_slug": f"krisala-aventis-3-bhk-pricing-in-{country['currency'].lower()}.html",
            "title": f"Krisala Aventis 3 BHK Pricing in {country['currency']} | NRI Exclusive",
            "h1": f"Premium 3 BHK Pricing in {country['currency']} at Krisala Aventis",
            "description": f"Exclusive pricing details and payment plans for NRIs in {country['name']}. Convert to {country['currency']} and secure your luxury 3 BHK in West Pune today.",
            "keywords": f"krisala aventis price in {country['currency'].lower()}, 3 bhk pune price {country['currency'].lower()}, nri payment plan real estate pune",
            "content": f"We understand that financial planning across borders requires clarity. For our esteemed NRI clients based in {country['name']}, we offer transparent pricing models and flexible payment plans that make funding your 3 BHK luxury residence straightforward. Our dedicated NRI desk can assist with {country['currency']} to INR remittance guidelines and home loan processing from leading Indian banks.",
            "faqs": [
                {
                    "q": f"How can I process payments from {country['name']}?",
                    "a": f"Payments can be made via NRE/NRO accounts. We assist with all compliance requirements for remitting funds from {country['currency']} to INR."
                },
                {
                    "q": "Are there any tax benefits for NRIs buying this property?",
                    "a": "Yes, NRIs can avail of tax deductions under Section 80C and Section 24 of the Income Tax Act on home loan principal and interest."
                }
            ]
        })

    os.makedirs('data', exist_ok=True)
    with open('data/global-nri-seo.json', 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Generated {len(data)} NRI SEO pages")

if __name__ == '__main__':
    generate_nri_data()
