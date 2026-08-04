import os
import random

def create_directory():
    os.makedirs('web-2.0-campaign', exist_ok=True)

def get_anchors_and_links():
    # Mix of Exact Match, Partial Match, Branded, and Generic
    home_anchors = [
        # Exact/Partial
        ("Krisala Aventis Tathawade", "https://krisalaventis.in"),
        ("premium flats in Tathawade", "https://krisalaventis.in"),
        ("real estate investment in West Pune", "https://krisalaventis.in"),
        # Branded
        ("Krisala Legacy projects", "https://krisalaventis.in"),
        ("the official Krisala Aventis site", "https://krisalaventis.in"),
        # Generic
        ("click here to learn more", "https://krisalaventis.in"),
        ("visit their official website", "https://krisalaventis.in")
    ]
    
    # Deep links to programmatic silo pages (clean URLs without .html)
    deep_anchors = [
        ("2 BHK flats near Hinjewadi Phase 1", "https://krisalaventis.in/near/krisala-aventis-2-BHK-near-hinjewadi-phase-1-2025"),
        ("properties under 80 Lakhs in Tathawade", "https://krisalaventis.in/price/2-BHK-flats-in-tathawade-under-80l"),
        ("Hinjewadi real estate market analysis", "https://krisalaventis.in/market/hinjewadi-real-estate-appreciation-rate-2026"),
        ("Krisala vs Godrej in Tathawade", "https://krisalaventis.in/compare/krisala-aventis-vs-godrej-evergreen-square-price-comparison"),
        ("Aluform construction benefits", "https://krisalaventis.in/feature/aluform-technology-durability-krisala"),
        ("best homes for IT professionals", "https://krisalaventis.in/guide/it-professional-guide-commute-time-hinjewadi")
    ]
    
    return random.choice(home_anchors), random.choice(deep_anchors)

def generate_articles():
    titles = [
        "Why Tathawade is the Undisputed King of West Pune Real Estate in 2026",
        "The Truth About Commuting to Hinjewadi: How Smart Homebuyers Are Beating the Traffic",
        "Aluform Technology Explained: Why Your Next Pune Flat Must Have It",
        "5 Hidden Gems in Tathawade Real Estate You Are Missing Out On",
        "From Renting to Owning: The IT Professional's Guide to Pune Property",
        "Krisala Legacy's Latest Masterpiece: Is It Worth the Hype?",
        "Tathawade vs. Wakad: Where Should You Invest Your Money?",
        "How the Upcoming Pune Metro Expansion Will Skyrocket Property Prices",
        "Top 40+ Amenities Every Luxury Apartment Should Have (And Where to Find Them)",
        "The Smart Study Alcove: How Post-Pandemic Architecture is Changing Pune Homes",
        "A Deep Dive into West Pune's Real Estate Appreciation Rates for 2026",
        "Are 3 BHK Flats the New Normal for Nuclear Families in Pune?",
        "Investing Near Education Hubs: The Symbiosis and JSPM Advantage",
        "Decoding the Cost Sheet: What to Look For Before Paying a Token Amount",
        "Why NRI Investors are Flocking to Tathawade in Record Numbers",
        "The Ultimate Show Flat Checklist: What to Look For When Touring",
        "Vastu Compliance in Modern Architecture: A Seamless Blend",
        "Why Buying Under Construction in 2025 is Better Than Ready-to-Move",
        "The Environmental Impact of Your Home: Solar Heaters and EV Charging",
        "How Biometric Security and Video Door Phones are Reshaping Gated Communities"
    ]
    
    intros = [
        "The real estate landscape in West Pune is undergoing a massive transformation. As IT hubs expand and infrastructure catches up, homebuyers are presented with unprecedented opportunities.",
        "If you've spent any time stuck in traffic trying to reach Hinjewadi Phase 1, you know that location isn't just about prestige—it's about getting your time back.",
        "With the property market more competitive than ever, finding a home that perfectly balances luxury, location, and long-term ROI requires looking beyond the glossy brochures.",
        "Investors and end-users alike are recognizing that not all micro-markets are created equal. Some offer stagnant yields, while others are poised for explosive growth over the next five years."
    ]
    
    body_paragraphs = [
        "One of the biggest game-changers in the market right now is the adoption of advanced construction methodologies. Traditional brick-and-mortar is slowly being replaced by robust techniques that eliminate leakage and ensure structural longevity. This directly translates to lower maintenance costs and a higher resale value.",
        "Community living has evolved past a simple clubhouse and a patch of grass. Modern families demand comprehensive ecosystems—think rooftop infinity pools, dedicated co-working spaces, and multi-tier security. It's about buying into a lifestyle, not just four walls.",
        "The rental yield math is fascinating when you look closely. Properties situated within a 15-minute radius of major employment hubs consistently command a 20-30% premium in rental income compared to those just a few kilometers further out. Time is money, and tenants are willing to pay for it.",
        "We also have to consider the 'Smart Study' revolution. With hybrid work models solidifying their place in corporate India, a dedicated, sound-optimized workspace within a 2 BHK or 3 BHK layout has shifted from a luxury to an absolute necessity."
    ]
    
    conclusions = [
        "Ultimately, making the right choice requires thorough due diligence and an understanding of macro-economic trends in the region. Always prioritize developer legacy and construction quality over minor location compromises.",
        "As we look ahead to 2026, the window for securing properties at reasonable entry prices in these prime corridors is closing. The time to conduct your site visits and lock in a configuration is now.",
        "In conclusion, don't just buy a flat—invest in a holistic living experience that will adapt to your family's needs while steadily growing in value.",
        "Whether you are an NRI looking for passive income or a first-time buyer ready to build roots, the current market dynamics offer a highly favorable environment for decisive action."
    ]

    for i, title in enumerate(titles):
        home_anchor, deep_anchor = get_anchors_and_links()
        
        # Inject links into paragraphs
        intro = random.choice(intros)
        body1 = random.choice(body_paragraphs)
        body2 = random.choice(body_paragraphs)
        conclusion = random.choice(conclusions)
        
        # Inject deep link into body1
        words = body1.split()
        insert_idx = len(words) // 2
        body1 = " ".join(words[:insert_idx]) + f' For example, if you are looking for <a href="{deep_anchor[1]}">{deep_anchor[0]}</a>, you have to be extremely strategic.' + " ".join(words[insert_idx:])
        
        # Inject home link into conclusion
        conclusion = conclusion + f' For official pricing and floor plans, <a href="{home_anchor[1]}">{home_anchor[0]}</a>.'

        article_md = f"""# {title}

**Published by:** Pune Real Estate Analyst
**Tags:** Real Estate, Pune, Investment, Property, Hinjewadi, Tathawade

{intro}

## The Shift in Homebuyer Priorities

{body1}

## Why Infrastructure Matters More Than Ever

{body2}

## Final Verdict

{conclusion}
"""
        filename = f"web-2.0-campaign/article_{i+1:02d}_{title.replace(' ', '-').lower()[:30]}.md"
        # Sanitize filename
        filename = "".join([c for c in filename if c.isalpha() or c.isdigit() or c in ['-', '_', '.', '/']])
        with open(filename, 'w') as f:
            f.write(article_md)
            
    print("Successfully generated 20 Web 2.0 Markdown articles.")

if __name__ == "__main__":
    create_directory()
    generate_articles()
