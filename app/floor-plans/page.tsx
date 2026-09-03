import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Krisala Aventis Tathawade Floor Plans — 2.25 & 3.25 BHK Smart Study Layouts",
  description: "Official 2.25 BHK (839 sq.ft) & 3.25 BHK (1116 sq.ft) floor plans for Krisala Aventis Tathawade. View room dimensions, carpet area certification, and dedicated Smart Study pods.",
  alternates: {
    canonical: "https://krisalaventis.in/floor-plans",
  },
  openGraph: {
    title: "Krisala Aventis Tathawade Floor Plans & Dimensions",
    description: "Detailed 2.25 & 3.25 BHK layouts with dedicated Smart Study work pods in Tathawade Pune near Hinjewadi Phase 1.",
    url: "https://krisalaventis.in/floor-plans",
    images: ["https://krisalaventis.in/assets/images/floorplan-2bhk.webp"],
  },
};

const fpSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Accommodation",
      "@id": "https://krisalaventis.in/floor-plans#2bhk",
      "name": "Krisala Aventis 2.25 BHK Smart Study Layout",
      "floorSize": { "@type": "QuantitativeValue", "value": 839, "unitCode": "FTK" },
      "numberOfRooms": 3,
      "image": "https://krisalaventis.in/assets/images/floorplan-2bhk.webp",
      "description": "839 sq.ft carpet area 2.25 BHK apartment with acoustic Smart Study pod in Tathawade Pune."
    },
    {
      "@type": "Accommodation",
      "@id": "https://krisalaventis.in/floor-plans#3bhk",
      "name": "Krisala Aventis 3.25 BHK Luxury Suite Layout",
      "floorSize": { "@type": "QuantitativeValue", "value": 1116, "unitCode": "FTK" },
      "numberOfRooms": 4,
      "image": "https://krisalaventis.in/assets/images/floorplan-3bhk.webp",
      "description": "1116 sq.ft carpet area 3.25 BHK luxury suite with dedicated executive study room."
    }
  ]
};

export default function FloorPlansPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fpSchema) }}
      />
      
      {/* Navigation */}
      <nav className="pill-navbar" id="mainNav">
        <div className="nav-container">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/assets/images/logo.jpg" alt="Krisala Logo" style={{ height: '32px', width: 'auto', mixBlendMode: 'screen' }} />
            <span style={{ fontWeight: 300, letterSpacing: '2px', fontSize: '1.1rem', color: '#fff' }}>AVENTIS</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/floor-plans" style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Floor Plans</Link>
            <Link href="/location">Location</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/maharera">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad">Tathawade vs Wakad</Link>
            <a href="#enquiry" className="cta-pill magnetic">Download Plans PDF</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section hero-pillar" style={{ paddingTop: '140px', background: 'radial-gradient(circle at 50% 10%, rgba(202, 163, 80, 0.12), var(--clr-obsidian) 70%)' }}>
        <div className="container">
          <div className="section-tag">Architectural Blueprints</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Krisala Aventis Tathawade <br /><span className="gold shimmer-text">Floor Plans & Carpet Layouts</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
            Discover the revolutionary "+0.25 Smart Study" space design. Engineered with Aluform monolithic concrete for 100% usable carpet efficiency and zero wasted passage area.
          </p>
        </div>
      </section>

      {/* 2.25 BHK Detailed Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag" style={{ background: 'var(--clr-gold)', color: '#000', border: 'none' }}>Flagship Typology</div>
            <h2>2.25 BHK Smart Study Residence — <span className="gold">839 Sq.ft Carpet</span></h2>
            <p>Designed specifically for IT professionals in Hinjewadi Phase 1 requiring a private, sound-insulated workspace.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div className="glass-glow" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <img src="/assets/images/floorplan-2bhk.webp" alt="Krisala Aventis 2.25 BHK Floor Plan" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
            <div>
              <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px', marginBottom: '24px' }}>
                <h3 style={{ color: 'var(--clr-gold)', marginBottom: '16px' }}>📐 Space Allocation Dimensions</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--clr-silk)' }}>
                  <li><strong>Living & Dining Room:</strong> 17'0" × 11'0" with attached 5' wide sunset deck</li>
                  <li><strong>Master Bedroom:</strong> 12'0" × 11'0" with ensuite bath</li>
                  <li><strong>Children / Guest Bedroom:</strong> 11'0" × 10'0" with natural cross-ventilation</li>
                  <li><strong>Dedicated Smart Study Pod:</strong> 6'6" × 5'0" with fiber-optic network conduits</li>
                  <li><strong>Modular Kitchen & Dry Balcony:</strong> 8'6" × 7'6" + 5'6" × 3'6"</li>
                </ul>
              </div>
              <a href="#enquiry" className="btn-primary shimmer-btn" style={{ display: 'inline-block' }}>Download 2.25 BHK High-Res PDF →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3.25 BHK Detailed Breakdown */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--clr-glass-border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Executive Luxury</div>
            <h2>3.25 BHK Presidential Suite — <span className="gold">1116 Sq.ft Carpet</span></h2>
            <p>Spacious corner-facing residences in Towers C & D with dual master decks and unobstructed Hinjewadi hill vistas.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px', marginBottom: '24px' }}>
                <h3 style={{ color: 'var(--clr-gold)', marginBottom: '16px' }}>📐 Space Allocation Dimensions</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--clr-silk)' }}>
                  <li><strong>Grand Living & Dining Hall:</strong> 21'6" × 12'0" with panoramic French windows</li>
                  <li><strong>Presidential Master Suite:</strong> 14'0" × 12'0" with walk-in wardrobe nook</li>
                  <li><strong>Bedroom 2 (Guest Suite):</strong> 12'0" × 11'0"</li>
                  <li><strong>Bedroom 3 (Kids Suite):</strong> 11'0" × 10'6"</li>
                  <li><strong>Executive Study / Library:</strong> 8'0" × 6'0" acoustic-treated zone</li>
                  <li><strong>Gourmet Kitchen:</strong> 10'0" × 8'0" with separate utility drying terrace</li>
                </ul>
              </div>
              <a href="#enquiry" className="btn-primary shimmer-btn" style={{ display: 'inline-block' }}>Download 3.25 BHK High-Res PDF →</a>
            </div>
            <div className="glass-glow" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <img src="/assets/images/floorplan-3bhk.webp" alt="Krisala Aventis 3.25 BHK Floor Plan" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass-form-container">
            <div className="section-tag">Instant Blueprint Download</div>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '8px' }}>
              Download Complete <span className="gold">Floor Plans & Architectural Pack</span>
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--clr-silver)', marginBottom: '30px', fontSize: '0.95rem' }}>
              Receive PDF floor layouts, unit numbering charts, and tower floor plates instantly.
            </p>
            
            <form action="/api/contact" method="POST" className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="name" placeholder="Your Full Name *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="tel" name="phone" placeholder="WhatsApp Phone Number *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="email" name="email" placeholder="Email Address" style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <button type="submit" className="btn-primary shimmer-btn" style={{ padding: '16px', fontSize: '1rem', fontWeight: 700, marginTop: '10px' }}>
                Download High-Res Blueprints PDF →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{ background: 'var(--clr-obsidian)', borderTop: '1px solid var(--clr-glass-border)', padding: '50px 0 30px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Krisala Aventis Pillars</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--clr-silver)' }}>
                <li><Link href="/pricing">Price List & Cost Sheet</Link></li>
                <li><Link href="/floor-plans">Floor Plans & Blueprints</Link></li>
                <li><Link href="/location">Location & Hinjewadi Distance</Link></li>
                <li><Link href="/amenities">40+ Rooftop Amenities</Link></li>
                <li><Link href="/maharera">MahaRERA P52100080336</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Locality Intelligence</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--clr-silver)' }}>
                <li><Link href="/tathawade-vs-wakad">Tathawade vs Wakad Real Estate</Link></li>
                <li><Link href="/near/krisala-aventis-2-BHK-near-hinjewadi-phase-1-2025">Flats near Hinjewadi Phase 1</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Developer Verification</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--clr-muted)', lineHeight: 1.6 }}>
                Krisala Legacy Sales Lounge, Beside Shakai Circle, Mumbai-Pune Highway, Tathawade, Pune 411033. MahaRERA No. P52100080336.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--clr-muted)', borderTop: '1px solid var(--clr-glass-border)', paddingTop: '20px' }}>
            © 2026 Krisala Aventis Tathawade. Official Canonical Portal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
