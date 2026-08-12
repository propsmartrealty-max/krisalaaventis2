#!/usr/bin/env python3
"""
Krisala Aventis — HowTo & Event Schema Injector
Targets: EMI calculator, cost estimator, market growth calculator
"""

import json
from pathlib import Path

ROOT = Path("/Users/vikasyewle/krisalaaventis")

HOWTO_EMI = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Home Loan EMI for Krisala Aventis Tathawade",
    "description": "Step-by-step guide to calculate your monthly EMI for purchasing an apartment at Krisala Aventis Tathawade, Pune.",
    "image": "https://krisalaventis.in/assets/images/hero.webp",
    "totalTime": "PT5M",
    "step": [
        {
            "@type": "HowToStep", "position": 1,
            "name": "Enter Loan Amount",
            "text": "Enter the loan amount you need. For Krisala Aventis 2.25 BHK (₹89L): if you pay 20% down payment (₹17L), your loan amount = ₹68 Lakhs."
        },
        {
            "@type": "HowToStep", "position": 2,
            "name": "Set Interest Rate",
            "text": "Enter the annual interest rate. Current home loan rates in 2026: SBI = 8.50%, HDFC = 8.70%, ICICI = 8.65%. Use 8.5% as a baseline."
        },
        {
            "@type": "HowToStep", "position": 3,
            "name": "Choose Loan Tenure",
            "text": "Select your repayment tenure (years). Common choices: 15, 20, or 25 years. A 20-year tenure balances EMI amount and total interest paid."
        },
        {
            "@type": "HowToStep", "position": 4,
            "name": "Calculate EMI",
            "text": "Use the EMI formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]. For ₹68L at 8.5% for 20 years: EMI ≈ ₹59,200/month."
        },
        {
            "@type": "HowToStep", "position": 5,
            "name": "Check Eligibility",
            "text": "Banks typically allow EMI up to 40-50% of monthly income. For ₹59,200 EMI, you need a monthly income of ₹1.18L–₹1.48L. Krisala Aventis is bank-approved for instant sanction."
        }
    ],
    "tool": [
        {"@type": "HowToTool", "name": "Home Loan EMI Calculator"},
        {"@type": "HowToTool", "name": "Bank Pre-Approval Form"}
    ]
}

HOWTO_COST = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Estimate Total Cost of Buying a Krisala Aventis Apartment",
    "description": "Complete step-by-step guide to calculate the all-inclusive cost of purchasing an apartment at Krisala Aventis Tathawade — including taxes, registration, and one-time charges.",
    "image": "https://krisalaventis.in/assets/images/hero.webp",
    "totalTime": "PT10M",
    "step": [
        {
            "@type": "HowToStep", "position": 1,
            "name": "Base Price of Apartment",
            "text": "Start with the agreement value (base price). Krisala Aventis 2.25 BHK starts at ₹89 Lakhs; 3.25 BHK from ₹1.25 Crore. This is your starting figure."
        },
        {
            "@type": "HowToStep", "position": 2,
            "name": "Add GST (for Under-Construction)",
            "text": "For under-construction properties, add 5% GST on base price. For ₹89L apartment: GST = ₹4.25 Lakhs. (No GST applies after OC/possession.)"
        },
        {
            "@type": "HowToStep", "position": 3,
            "name": "Calculate Stamp Duty",
            "text": "Maharashtra stamp duty: 5% for men, 4% for women buyers (on agreement value). For ₹89L: Stamp Duty = ₹4.25L (men) or ₹3.40L (women). Women co-applicants save 1%."
        },
        {
            "@type": "HowToStep", "position": 4,
            "name": "Add Registration Charges",
            "text": "Registration fee = 1% of agreement value (capped at ₹30,000 for residential). For ₹89L: ₹30,000 (capped)."
        },
        {
            "@type": "HowToStep", "position": 5,
            "name": "Add One-Time Maintenance Deposit",
            "text": "Builders typically collect 2 years advance maintenance. Krisala Aventis maintenance ≈ ₹3–4/sq ft/month. For 1,000 sq ft: ₹72,000 for 2 years."
        },
        {
            "@type": "HowToStep", "position": 6,
            "name": "Calculate Grand Total",
            "text": "Grand Total = Base Price + GST + Stamp Duty + Registration + Maintenance. For 2.25 BHK at ₹89L: approximately ₹94–96 Lakhs all-inclusive."
        }
    ]
}

HOWTO_MARKET = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Future Property Value in Tathawade",
    "description": "Step-by-step guide to estimating the future market value of your Krisala Aventis apartment using Tathawade's historical appreciation data.",
    "image": "https://krisalaventis.in/assets/images/hero.webp",
    "totalTime": "PT10M",
    "step": [
        {
            "@type": "HowToStep", "position": 1,
            "name": "Note Your Purchase Price",
            "text": "Enter the price you pay today. Example: Krisala Aventis 2.25 BHK = ₹89 Lakhs (2026)."
        },
        {
            "@type": "HowToStep", "position": 2,
            "name": "Use Tathawade's Historical Appreciation Rate",
            "text": "Tathawade has historically appreciated at 10–15% per annum (2019–2026). Use a conservative 10% for projections."
        },
        {
            "@type": "HowToStep", "position": 3,
            "name": "Apply Compound Growth Formula",
            "text": "Future Value = Present Value × (1 + rate)^years. At 10% for 5 years: ₹89L × (1.10)^5 = ₹89L × 1.61 = ₹1.37 Crore."
        },
        {
            "@type": "HowToStep", "position": 4,
            "name": "Account for Infrastructure Upside",
            "text": "Add infrastructure premium: Metro completion (2027–28) historically adds 15–20% to nearby property values. Tathawade is on the upcoming Pune Metro Line 3 corridor."
        },
        {
            "@type": "HowToStep", "position": 5,
            "name": "Calculate Rental Yield",
            "text": "Rental yield in Tathawade: ₹18,000–₹25,000/month for 2 BHK (2026). On ₹89L: gross yield = 2.5–3.5%. Post-possession appreciation + rental income = superior total return."
        }
    ]
}

EVENT_SITE_VISIT = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Krisala Aventis Tathawade — Open House & Site Visit",
    "description": "Free, no-obligation site visits to Krisala Aventis Tathawade. View model flats, rooftop pool, 40+ amenities. Meet our sales team for pricing & availability.",
    "startDate": "2026-07-01T10:00:00+05:30",
    "endDate": "2026-12-31T19:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
        "@type": "Place",
        "name": "Krisala Aventis Sales Experience Center",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade",
            "addressLocality": "Pune",
            "addressRegion": "MH",
            "postalCode": "411033",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.6298",
            "longitude": "73.7560"
        }
    },
    "organizer": {
        "@type": "Organization",
        "name": "Krisala Legacy",
        "url": "https://krisalaventis.in/",
        "telephone": "+917744009295"
    },
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://krisalaventis.in/"
    },
    "image": "https://krisalaventis.in/assets/images/hero.webp",
    "isAccessibleForFree": True
}

INJECTIONS = {
    "krisala-aventis-tathawade-home-loan-emi-calculator.html": [HOWTO_EMI, EVENT_SITE_VISIT],
    "krisala-aventis-tathawade-cost-sheet-estimator.html": [HOWTO_COST, EVENT_SITE_VISIT],
    "krisala-aventis-tathawade-market-growth-calculator.html": [HOWTO_MARKET, EVENT_SITE_VISIT],
    "krisala-aventis-tathawade-brochure-download.html": [EVENT_SITE_VISIT],
    "krisala-aventis-tathawade-price-list.html": [EVENT_SITE_VISIT],
    "krisala-aventis-tathawade-2-bhk-flats.html": [EVENT_SITE_VISIT],
    "krisala-aventis-tathawade-3-bhk-luxury-apartments.html": [EVENT_SITE_VISIT],
    "index.html": [EVENT_SITE_VISIT],
}


def already_has(content, schema_type):
    return f'"@type": "{schema_type}"' in content


def inject(filepath, schemas):
    content = filepath.read_text(encoding="utf-8")
    to_inject = []
    for schema in schemas:
        stype = schema["@type"]
        if not already_has(content, stype):
            to_inject.append(schema)

    if not to_inject:
        print(f"  ⏭️  {filepath.name} — all schemas already present, skipped")
        return False

    blocks = "\n".join(
        f'  <script type="application/ld+json">\n  {json.dumps(s, indent=2, ensure_ascii=False)}\n  </script>'
        for s in to_inject
    )

    if "</head>" not in content:
        print(f"  ⚠️  {filepath.name} — no </head> tag found, skipped")
        return False

    updated = content.replace("</head>", f"\n{blocks}\n</head>", 1)
    filepath.write_text(updated, encoding="utf-8")
    types = [s["@type"] for s in to_inject]
    print(f"  ✅ {filepath.name} → injected: {', '.join(types)}")
    return True


def main():
    total = 0
    for filename, schemas in INJECTIONS.items():
        fp = ROOT / filename
        if not fp.exists():
            print(f"  ❌ File not found: {filename}")
            continue
        if inject(fp, schemas):
            total += 1

    print(f"\n{'='*55}")
    print(f"  HowTo + Event schema injection complete — {total} files updated")
    print(f"{'='*55}")


if __name__ == "__main__":
    main()
