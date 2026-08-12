#!/usr/bin/env python3
"""
Krisala Aventis — Master Schema Injector v2.0
Injects: Article, Speakable, ImageObject, AggregateRating schemas
"""

import os
import re
import json
from pathlib import Path

ROOT = Path("/Users/vikasyewle/krisalaaventis")

# ─── PAGE METADATA MAP ───────────────────────────────────────────────────────
# Maps filename → (article_headline, article_description, keywords, date_published, date_modified, speakable_xpaths)
BLOG_PAGES = {
    "krisala-aventis-tathawade-investment-roi.html": {
        "headline": "Krisala Aventis Tathawade: Investment ROI & Property Appreciation 2026",
        "description": "Discover why Tathawade is Pune West's highest-appreciating real estate hub. Krisala Aventis 2.25 & 3.25 BHK offer superior ROI near Hinjewadi IT Park.",
        "keywords": ["Tathawade real estate investment", "property appreciation Pune 2026", "Krisala Aventis ROI"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-01",
        "section": "Real Estate Investment"
    },
    "krisala-aventis-tathawade-2-bhk-flats.html": {
        "headline": "2.25 BHK Smart Study Flats in Tathawade | Krisala Aventis",
        "description": "Explore premium 2.25 BHK Smart Study apartments at Krisala Aventis Tathawade. Aluform construction, rooftop pool, near Hinjewadi IT Park.",
        "keywords": ["2 BHK flats Tathawade", "smart study apartments Pune", "2.25 BHK near Hinjewadi"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-01",
        "section": "Residential Apartments"
    },
    "krisala-aventis-tathawade-3-bhk-luxury-apartments.html": {
        "headline": "3.25 BHK Luxury Apartments in Tathawade Pune | Krisala Aventis",
        "description": "Premium 3.25 BHK luxury homes at Krisala Aventis Tathawade. Spacious layouts, world-class amenities, 2 km from Hinjewadi Phase 1.",
        "keywords": ["3 BHK luxury apartments Tathawade", "luxury flats Pune West", "3.25 BHK near Wakad"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-01",
        "section": "Luxury Residential"
    },
    "krisala-aventis-tathawade-amenities-lifestyle.html": {
        "headline": "World-Class Amenities at Krisala Aventis Tathawade | Lifestyle Guide",
        "description": "Rooftop infinity pool, clubhouse, EV charging, gym, kids zone — complete amenities guide at Krisala Aventis Tathawade.",
        "keywords": ["Krisala Aventis amenities", "rooftop pool Tathawade", "lifestyle apartments Pune"],
        "datePublished": "2025-02-01",
        "dateModified": "2026-06-01",
        "section": "Amenities & Lifestyle"
    },
    "krisala-aventis-tathawade-aluform-technology.html": {
        "headline": "Aluform Construction Technology at Krisala Aventis Tathawade",
        "description": "Understanding Aluform technology — the German-engineered aluminium formwork construction method delivering earthquake-resistant, precision homes.",
        "keywords": ["Aluform technology Pune", "aluminium formwork construction", "earthquake resistant apartments"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Construction Technology"
    },
    "krisala-aventis-tathawade-brochure-download.html": {
        "headline": "Download Krisala Aventis Tathawade Official Brochure & Floor Plans",
        "description": "Download the official Krisala Aventis Tathawade brochure, floor plans, price list, and project specifications PDF.",
        "keywords": ["Krisala Aventis brochure download", "floor plans Tathawade", "project PDF Krisala"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-01",
        "section": "Project Documents"
    },
    "krisala-aventis-tathawade-competitor-comparison.html": {
        "headline": "Krisala Aventis vs Competitors: Why It's the Best in Tathawade",
        "description": "Detailed comparison of Krisala Aventis against competing projects in Tathawade & West Pune — price, amenities, construction quality, location.",
        "keywords": ["Krisala Aventis vs competitors", "best apartments Tathawade", "Pune West property comparison"],
        "datePublished": "2025-03-01",
        "dateModified": "2026-06-01",
        "section": "Market Analysis"
    },
    "krisala-aventis-tathawade-connectivity-it-hubs.html": {
        "headline": "Krisala Aventis Connectivity to Hinjewadi IT Hubs | Location Guide",
        "description": "Strategic location analysis — Krisala Aventis Tathawade connectivity to Hinjewadi Phase 1, 2, 3, Pune IT corridor & expressway.",
        "keywords": ["Krisala Aventis connectivity", "Tathawade to Hinjewadi", "IT hub proximity Pune"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-construction-status.html": {
        "headline": "Krisala Aventis Tathawade Construction Status & RERA Updates 2026",
        "description": "Live construction progress, RERA registration, possession timeline and on-site updates for Krisala Aventis Tathawade.",
        "keywords": ["Krisala Aventis construction update", "RERA Tathawade", "possession timeline 2026"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-20",
        "section": "Construction Updates"
    },
    "krisala-aventis-tathawade-cost-sheet-estimator.html": {
        "headline": "Krisala Aventis Cost Sheet & Price Estimator | Tathawade 2026",
        "description": "Calculate your all-in cost for Krisala Aventis Tathawade — base price, stamp duty, registration, maintenance, and total cost of ownership.",
        "keywords": ["Krisala Aventis cost sheet", "flat price Tathawade", "apartment total cost Pune"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-15",
        "section": "Pricing & Finance"
    },
    "krisala-aventis-tathawade-customer-reviews-testimonials.html": {
        "headline": "Krisala Aventis Tathawade Reviews & Customer Testimonials 2026",
        "description": "Read verified buyer reviews and testimonials for Krisala Aventis Tathawade — rated 4.9/5 by 1200+ happy homeowners.",
        "keywords": ["Krisala Aventis reviews", "customer testimonials Tathawade", "Pune apartment ratings"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-20",
        "section": "Customer Reviews"
    },
    "krisala-aventis-tathawade-developer-legacy.html": {
        "headline": "Krisala Legacy Developer Profile | 20+ Years of Pune Real Estate Excellence",
        "description": "History and legacy of Krisala Legacy — Pune's trusted developer with 20+ years, 5000+ happy families, and multiple award-winning projects.",
        "keywords": ["Krisala Legacy developer", "Pune real estate developer", "trusted builder Tathawade"],
        "datePublished": "2025-02-01",
        "dateModified": "2026-06-01",
        "section": "Developer Profile"
    },
    "krisala-aventis-tathawade-educational-hubs.html": {
        "headline": "Schools & Colleges Near Krisala Aventis Tathawade | Education Hub Guide",
        "description": "Top schools, colleges and universities within 5 km of Krisala Aventis Tathawade — JSPM, MIT, Symbiosis, DPS and more.",
        "keywords": ["schools near Tathawade", "colleges near Krisala Aventis", "education hub Pune West"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-flats-near-hinjewadi.html": {
        "headline": "Flats Near Hinjewadi IT Park | Krisala Aventis Tathawade",
        "description": "Premium 2.25 & 3.25 BHK flats just 2 km from Hinjewadi Phase 1 — Krisala Aventis Tathawade is the smart choice for IT professionals.",
        "keywords": ["flats near Hinjewadi", "apartments near IT park Pune", "Tathawade Hinjewadi residential"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-growth-story-roi-2026.html": {
        "headline": "Tathawade Property Growth Story & ROI Outlook 2026 | Krisala Aventis",
        "description": "In-depth analysis of Tathawade's real estate price appreciation trajectory from 2019 to 2026 and projected returns for Krisala Aventis buyers.",
        "keywords": ["Tathawade property growth 2026", "West Pune ROI", "real estate appreciation Pune"],
        "datePublished": "2025-03-15",
        "dateModified": "2026-06-15",
        "section": "Market Analysis"
    },
    "krisala-aventis-tathawade-home-loan-emi-calculator.html": {
        "headline": "Home Loan EMI Calculator for Krisala Aventis Tathawade | Plan Your Budget",
        "description": "Calculate EMI for your Krisala Aventis Tathawade apartment. Supports SBI, HDFC, ICICI rates. Instant loan eligibility check.",
        "keywords": ["home loan EMI calculator Pune", "Krisala Aventis loan", "apartment EMI Tathawade"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-01",
        "section": "Finance Tools"
    },
    "krisala-aventis-tathawade-lifestyle-it-park-proximity.html": {
        "headline": "IT Professional Lifestyle at Krisala Aventis Tathawade | Work-Life Balance",
        "description": "How Krisala Aventis Tathawade delivers the perfect work-life balance for Hinjewadi IT professionals — proximity, amenities, and community.",
        "keywords": ["lifestyle apartments IT professionals Pune", "work life balance Tathawade", "Hinjewadi residential community"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Lifestyle"
    },
    "krisala-aventis-tathawade-luxury-specifications-aluform.html": {
        "headline": "Luxury Specifications & Aluform Finishes at Krisala Aventis Tathawade",
        "description": "Full specification sheet — vitrified tiles, UPVC windows, modular kitchen, branded fittings, Aluform precision construction at Krisala Aventis.",
        "keywords": ["Krisala Aventis specifications", "luxury finishes Tathawade", "apartment specs Pune"],
        "datePublished": "2025-02-01",
        "dateModified": "2026-06-01",
        "section": "Product Specifications"
    },
    "krisala-aventis-tathawade-market-growth-calculator.html": {
        "headline": "Tathawade Real Estate Market Growth Calculator | Future Value Estimator",
        "description": "Project the future value of your Krisala Aventis investment using historical Tathawade appreciation data and forward-looking market models.",
        "keywords": ["Tathawade market growth calculator", "property future value Pune", "Krisala Aventis investment returns"],
        "datePublished": "2025-03-01",
        "dateModified": "2026-06-15",
        "section": "Finance Tools"
    },
    "krisala-aventis-tathawade-near-jspm-university.html": {
        "headline": "Apartments Near JSPM University Tathawade | Krisala Aventis",
        "description": "Krisala Aventis Tathawade is minutes away from JSPM Tathawade University. Perfect for faculty, students and education-focused families.",
        "keywords": ["apartments near JSPM University", "flats near JSPM Tathawade", "university proximity Pune"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-near-mumbai-pune-expressway.html": {
        "headline": "Flats Near Mumbai-Pune Expressway | Krisala Aventis Tathawade",
        "description": "Strategic highway connectivity — Krisala Aventis Tathawade is minutes from the Mumbai-Pune Expressway for seamless pan-Maharashtra access.",
        "keywords": ["flats near Mumbai Pune Expressway", "expressway connectivity Pune", "highway proximity apartments"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-near-phoenix-mall-wakad.html": {
        "headline": "Flats Near Phoenix Mall Wakad | Krisala Aventis Tathawade Pune",
        "description": "Krisala Aventis Tathawade is 5 minutes from Phoenix Mall Wakad — enjoy premium retail, dining and entertainment at your doorstep.",
        "keywords": ["flats near Phoenix Mall Wakad", "apartments near Wakad mall", "Wakad Tathawade residential"],
        "datePublished": "2025-02-15",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-nri-investment.html": {
        "headline": "NRI Investment Guide: Krisala Aventis Tathawade Pune | FEMA Compliant",
        "description": "Complete NRI buyer's guide for Krisala Aventis Tathawade — FEMA regulations, NRI home loans, RERA documentation, repatriation guide.",
        "keywords": ["NRI investment Pune", "NRI apartments Tathawade", "FEMA compliant real estate Pune"],
        "datePublished": "2025-03-01",
        "dateModified": "2026-06-01",
        "section": "NRI Investment"
    },
    "krisala-aventis-tathawade-price-list.html": {
        "headline": "Krisala Aventis Tathawade Official Price List 2026 | 2 & 3 BHK Rates",
        "description": "Official 2026 price list for Krisala Aventis Tathawade — 2.25 BHK from ₹89L, 3.25 BHK from ₹1.25Cr. All-inclusive cost breakdown.",
        "keywords": ["Krisala Aventis price list 2026", "2 BHK price Tathawade", "3 BHK cost Pune West"],
        "datePublished": "2025-01-15",
        "dateModified": "2026-06-20",
        "section": "Pricing"
    },
    "krisala-aventis-tathawade-real-estate-glossary.html": {
        "headline": "Real Estate Glossary | Key Terms Every Pune Home Buyer Should Know",
        "description": "Comprehensive glossary of real estate terms — RERA, carpet area, built-up area, FSI, OC, CC, and 50+ terms explained for Indian home buyers.",
        "keywords": ["real estate glossary India", "RERA terms explained", "home buying terms Pune"],
        "datePublished": "2025-04-01",
        "dateModified": "2026-06-01",
        "section": "Education"
    },
    "krisala-aventis-tathawade-vastu-compliance.html": {
        "headline": "Vastu Compliant Apartments at Krisala Aventis Tathawade Pune",
        "description": "All Krisala Aventis apartments are Vastu Shastra compliant — east-facing units, optimal room layouts, and natural light maximization.",
        "keywords": ["Vastu compliant apartments Pune", "Vastu flats Tathawade", "east facing apartments Pune"],
        "datePublished": "2025-02-01",
        "dateModified": "2026-06-01",
        "section": "Architecture"
    },
    "tathawade-real-estate-investment-guide.html": {
        "headline": "Complete Tathawade Real Estate Investment Guide 2026 | Why Buy Now",
        "description": "The ultimate guide to investing in Tathawade real estate — infrastructure growth, IT corridor expansion, price trends, and top projects.",
        "keywords": ["Tathawade real estate guide 2026", "West Pune investment guide", "property investment Tathawade"],
        "datePublished": "2025-04-01",
        "dateModified": "2026-06-15",
        "section": "Investment Guide"
    },
    "wakad-vs-tathawade-property-analysis.html": {
        "headline": "Wakad vs Tathawade Property: Which is Better for Investment in 2026?",
        "description": "Data-driven comparison of Wakad vs Tathawade real estate — price per sq ft, appreciation, infrastructure, amenities, and future potential.",
        "keywords": ["Wakad vs Tathawade property", "best location Pune West investment", "Wakad Tathawade comparison 2026"],
        "datePublished": "2025-04-15",
        "dateModified": "2026-06-15",
        "section": "Market Analysis"
    },
    "krisala-aventis-premium-living-review.html": {
        "headline": "Krisala Aventis Tathawade Premium Living Review | Honest 2026 Assessment",
        "description": "An honest, detailed review of Krisala Aventis Tathawade — construction quality, amenities, pricing, developer track record, and verdict.",
        "keywords": ["Krisala Aventis review 2026", "Tathawade project review", "honest apartment review Pune"],
        "datePublished": "2025-05-01",
        "dateModified": "2026-06-20",
        "section": "Project Review"
    },
    "krisala-aventis-tathawade-local-area-guide-map.html": {
        "headline": "Local Area Guide & Map: Around Krisala Aventis Tathawade",
        "description": "Interactive area guide covering hospitals, schools, malls, IT parks, restaurants, and daily essentials within 5 km of Krisala Aventis.",
        "keywords": ["local area guide Tathawade", "map near Krisala Aventis", "neighborhood guide Tathawade Pune"],
        "datePublished": "2025-03-01",
        "dateModified": "2026-06-01",
        "section": "Location Intelligence"
    },
    "krisala-aventis-tathawade-public-transport.html": {
        "headline": "Public Transport & Commute Guide: Krisala Aventis Tathawade",
        "description": "Complete public transport guide for Krisala Aventis Tathawade — PMPML buses, metro connectivity, auto-rickshaw zones, and cab availability.",
        "keywords": ["public transport Tathawade", "PMPML bus near Krisala Aventis", "metro connectivity Pune West"],
        "datePublished": "2025-03-15",
        "dateModified": "2026-06-01",
        "section": "Connectivity"
    },
}

# Blog pages that already have Article schema — skip them
SKIP_ARTICLE = set()

# ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────

def build_article_schema(filename, meta):
    slug = filename.replace(".html", "")
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": meta["headline"],
        "description": meta["description"],
        "image": "https://krisalaventis.in/assets/images/hero.webp",
        "author": {
            "@type": "Organization",
            "name": "Krisala Legacy",
            "url": "https://krisalaventis.in/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Krisala Legacy",
            "logo": {
                "@type": "ImageObject",
                "url": "https://krisalaventis.in/favicon.png",
                "width": 400,
                "height": 400
            }
        },
        "datePublished": meta["datePublished"],
        "dateModified": meta["dateModified"],
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": f"https://krisalaventis.in/{slug}"
        },
        "articleSection": meta["section"],
        "keywords": ", ".join(meta["keywords"]),
        "inLanguage": "en-IN",
        "about": {
            "@type": "RealEstateListing",
            "name": "Krisala Aventis Tathawade",
            "url": "https://krisalaventis.in/"
        }
    }


def build_speakable_schema(filename):
    slug = filename.replace(".html", "")
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Krisala Aventis Tathawade",
        "url": f"https://krisalaventis.in/{slug}",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [
                "h1",
                ".hero-headline",
                ".project-tagline",
                ".key-highlight",
                "meta[name='description']"
            ],
            "xpath": [
                "/html/head/title",
                "/html/body//h1",
                "/html/body//h2[1]"
            ]
        }
    }


def build_image_object_schema():
    return {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "contentUrl": "https://krisalaventis.in/assets/images/hero.webp",
        "name": "Krisala Aventis Tathawade — Premium 2 & 3 BHK Apartments",
        "description": "Aerial view of Krisala Aventis luxury apartment complex in Tathawade, Pune — featuring rooftop infinity pool and landscaped gardens",
        "author": {
            "@type": "Organization",
            "name": "Krisala Legacy"
        },
        "uploadDate": "2025-01-15",
        "representativeOfPage": True,
        "thumbnail": {
            "@type": "ImageObject",
            "contentUrl": "https://krisalaventis.in/favicon.png"
        }
    }


def build_aggregate_rating_schema():
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Krisala Aventis Tathawade",
        "url": "https://krisalaventis.in/",
        "telephone": "+917744009295",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Beside Shakai, Mumbai-Pune-Bangalore Highway, Tathawade",
            "addressLocality": "Pune",
            "addressRegion": "MH",
            "postalCode": "411033",
            "addressCountry": "IN"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "1280",
            "ratingCount": "1280"
        },
        "priceRange": "₹89L - ₹1.40Cr"
    }


def schemas_to_html(schemas):
    blocks = []
    for schema in schemas:
        json_str = json.dumps(schema, indent=2, ensure_ascii=False)
        blocks.append(f'  <script type="application/ld+json">\n  {json_str}\n  </script>')
    return "\n\n".join(blocks)


def already_has_schema(content, schema_type):
    return f'"@type": "{schema_type}"' in content


def inject_schemas_into_file(filepath, schemas_html):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Inject just before </head>
    if "</head>" not in content:
        print(f"  ⚠️  SKIP: No </head> found in {filepath.name}")
        return False

    injected = content.replace("</head>", f"\n{schemas_html}\n</head>", 1)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(injected)
    return True


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    total_files = 0
    article_injected = 0
    speakable_injected = 0
    image_injected = 0
    rating_injected = 0

    all_html = list(ROOT.glob("*.html"))
    print(f"Found {len(all_html)} HTML files.\n")

    for filepath in sorted(all_html):
        filename = filepath.name
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        schemas_to_inject = []
        log_parts = []

        # 1. Article Schema — inject on blog pages that don't have it
        if filename in BLOG_PAGES and filename not in SKIP_ARTICLE:
            if not already_has_schema(content, "Article"):
                meta = BLOG_PAGES[filename]
                schemas_to_inject.append(build_article_schema(filename, meta))
                log_parts.append("Article")
                article_injected += 1

        # 2. Speakable Schema — inject on ALL pages that don't have it
        if not already_has_schema(content, "SpeakableSpecification"):
            schemas_to_inject.append(build_speakable_schema(filename))
            log_parts.append("Speakable")
            speakable_injected += 1

        # 3. ImageObject Schema — inject on all pages that don't have it
        if not already_has_schema(content, "ImageObject"):
            schemas_to_inject.append(build_image_object_schema())
            log_parts.append("ImageObject")
            image_injected += 1

        # 4. AggregateRating (as LocalBusiness) — inject on subpages that don't have it
        # (index.html already has it inside Organization)
        if filename != "index.html" and not already_has_schema(content, "AggregateRating"):
            schemas_to_inject.append(build_aggregate_rating_schema())
            log_parts.append("AggregateRating")
            rating_injected += 1

        if schemas_to_inject:
            schemas_html = schemas_to_html(schemas_to_inject)
            result = inject_schemas_into_file(filepath, schemas_html)
            if result:
                total_files += 1
                print(f"  ✅ {filename} → injected: {', '.join(log_parts)}")
        else:
            print(f"  ⏭️  {filename} → already complete, skipped")

    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    print(f"  Files modified    : {total_files}")
    print(f"  Article schemas   : {article_injected}")
    print(f"  Speakable schemas : {speakable_injected}")
    print(f"  ImageObject schemas: {image_injected}")
    print(f"  AggregateRating   : {rating_injected}")
    print(f"{'='*60}")
    print("✅ Schema injection complete!\n")


if __name__ == "__main__":
    main()
