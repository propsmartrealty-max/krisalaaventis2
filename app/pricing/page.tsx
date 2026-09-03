import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Krisala Aventis Tathawade Price List & All-Inclusive Cost Sheet 2026",
  description: "Official 2026 price list and detailed cost sheet for Krisala Aventis Tathawade. 2.25 BHK starting ₹85 Lakh* and 3.25 BHK starting ₹1.15 Cr*. View PCMC taxes, stamp duty & EMI schedules.",
  alternates: {
    canonical: "https://krisalaventis.in/pricing",
  },
  openGraph: {
    title: "Krisala Aventis Tathawade Price List & Cost Sheet 2026",
    description: "Get verified all-inclusive pricing, floor-wise cost sheet, PCMC stamp duty calculator & pre-approved bank loans for Krisala Aventis Tathawade.",
    url: "https://krisalaventis.in/pricing",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
};

const priceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://krisalaventis.in/pricing#product-2bhk",
      "name": "Krisala Aventis 2.25 BHK Smart Study Flat Tathawade",
      "image": "https://krisalaventis.in/assets/images/floorplan-2bhk.webp",
      "description": "2.25 BHK Smart Study flat (839 sq.ft carpet area) at Krisala Aventis Tathawade Pune.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "8500000",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://krisalaventis.in/pricing"
      }
    },
    {
      "@type": "Product",
      "@id": "https://krisalaventis.in/pricing#product-3bhk",
      "name": "Krisala Aventis 3.25 BHK Luxury Residence Tathawade",
      "image": "https://krisalaventis.in/assets/images/floorplan-3bhk.webp",
      "description": "3.25 BHK Luxury flat (1116 sq.ft carpet area) at Krisala Aventis Tathawade Pune.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "11500000",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://krisalaventis.in/pricing"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krisalaventis.in" },
        { "@type": "ListItem", "position": 2, "name": "Pricing & Cost Sheet", "item": "https://krisalaventis.in/pricing" }
      ]
    }
  ]
};

export default function PricingPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      
      {/* Navigation Bar */}
      <nav className="pill-navbar" id="mainNav">
        <div className="nav-container">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/assets/images/logo.jpg" alt="Krisala Logo" style={{ height: '32px', width: 'auto', mixBlendMode: 'screen' }} />
            <span style={{ fontWeight: 300, letterSpacing: '2px', fontSize: '1.1rem', color: '#fff' }}>AVENTIS</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/pricing" style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Pricing</Link>
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/location">Location</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/maharera">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad">Tathawade vs Wakad</Link>
            <a href="#enquiry" className="cta-pill magnetic">Get Cost Sheet</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero-pillar" style={{ paddingTop: '140px', background: 'radial-gradient(circle at 50% 10%, rgba(202, 163, 80, 0.12), var(--clr-obsidian) 70%)' }}>
        <div className="container">
          <div className="section-tag">Official Pricing Matrix 2026</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Krisala Aventis Tathawade <br /><span className="gold shimmer-text">Price List & All-Inclusive Cost Sheet</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
            Explore transparent pre-launch pricing, carpet area valuations, government levies (Stamp Duty + GST), and customized bank subvention payment schedules for Towers A, B, C & D.
          </p>
          <div className="hero-chips" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span>✅ Zero Hidden Charges</span>
            <span>🏦 Pre-Approved SBI & HDFC Loans</span>
            <span>🔒 Price-Lock Guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Matrix Table */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-header center">
            <h2>Configuration & <span className="gold shimmer-text">Investment Matrix</span></h2>
            <p>Phase 1 launch rates with special developer subvention schemes.</p>
          </div>

          <div className="table-responsive glass-glow" style={{ padding: '24px', background: 'var(--clr-onyx)', borderRadius: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--clr-gold)', color: 'var(--clr-gold)' }}>
                  <th style={{ padding: '16px' }}>Typology</th>
                  <th style={{ padding: '16px' }}>Carpet Area</th>
                  <th style={{ padding: '16px' }}>Study Pod</th>
                  <th style={{ padding: '16px' }}>Base Price</th>
                  <th style={{ padding: '16px' }}>All-Inclusive Estimate*</th>
                  <th style={{ padding: '16px' }}>Action</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--clr-silk)' }}>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>2.25 BHK Smart Study (Tower A & B)</td>
                  <td style={{ padding: '16px' }}>839 Sq.ft.</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)' }}>Included (Dedicated)</td>
                  <td style={{ padding: '16px' }}>₹85 Lakhs*</td>
                  <td style={{ padding: '16px', fontWeight: 700 }}>₹93.5 Lakhs*</td>
                  <td style={{ padding: '16px' }}>
                    <a href="#enquiry" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>Get Cost Sheet</a>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>3.25 BHK Executive Suite (Tower C & D)</td>
                  <td style={{ padding: '16px' }}>1116 Sq.ft.</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)' }}>Included (Executive)</td>
                  <td style={{ padding: '16px' }}>₹1.15 Cr*</td>
                  <td style={{ padding: '16px', fontWeight: 700 }}>₹1.26 Cr*</td>
                  <td style={{ padding: '16px' }}>
                    <a href="#enquiry" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>Get Cost Sheet</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--clr-muted)', marginTop: '14px', textAlign: 'center' }}>
            * Government taxes (PCMC Stamp Duty 7%, Registration ₹30,000, GST 5%) and society maintenance charges are calculated as per prevailing PCMC norms.
          </p>
        </div>
      </section>

      {/* Cost Breakup Breakdown Section */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--clr-glass-border)' }}>
        <div className="container">
          <div className="section-header center">
            <h2>Payment Schedule & <span className="gold shimmer-text">Milestone Breakup</span></h2>
            <p>100% Construction-linked payment plan aligned with MahaRERA P52100080336 guidelines.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>1. Booking & Agreement (10%)</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem' }}>
                Token booking of ₹1,00,000 to lock launch pricing, followed by agreement registration within 30 days.
              </p>
            </div>
            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>2. Plinth & Substructure (20%)</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem' }}>
                Disbursed upon completion of excavation, raft foundation, and basement slab casting.
              </p>
            </div>
            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>3. Slab-by-Slab Aluform (45%)</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem' }}>
                Distributed in equal milestone tranches across 26 residential floors casting.
              </p>
            </div>
            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>4. Finishing & Handover (25%)</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem' }}>
                Final payment upon completion of vitrified flooring, electrical fittings, and MahaRERA Occupancy Certificate (OC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass-form-container">
            <div className="section-tag">Instant VIP Access</div>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '8px' }}>
              Download Complete <span className="gold">Cost Sheet & Price Breakup</span>
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--clr-silver)', marginBottom: '30px', fontSize: '0.95rem' }}>
              Receive unit-specific quotation, floor-wise premium charts, and bank loan EMI calculator via WhatsApp instantly.
            </p>
            
            <form action="/api/contact" method="POST" className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="name" placeholder="Your Full Name *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="tel" name="phone" placeholder="WhatsApp Phone Number *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="email" name="email" placeholder="Email Address" style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <select name="config" style={{ padding: '14px 18px', borderRadius: '8px', background: 'var(--clr-onyx)', border: '1px solid var(--clr-glass-border)', color: '#fff' }}>
                <option value="2.25 BHK (839 sq.ft) - ₹85L+">2.25 BHK Smart Study (839 sq.ft) — ₹85L+</option>
                <option value="3.25 BHK (1116 sq.ft) - ₹1.15Cr+">3.25 BHK Executive Suite (1116 sq.ft) — ₹1.15Cr+</option>
              </select>
              <button type="submit" className="btn-primary shimmer-btn" style={{ padding: '16px', fontSize: '1rem', fontWeight: 700, marginTop: '10px' }}>
                Download Detailed Cost Sheet PDF →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Internal Linking Mesh */}
      <footer className="section" style={{ background: 'var(--clr-obsidian)', borderTop: '1px solid var(--clr-glass-border)', padding: '50px 0 30px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Krisala Aventis Pillars</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--clr-silver)' }}>
                <li><Link href="/pricing">Official Price List</Link></li>
                <li><Link href="/floor-plans">2.25 & 3.25 BHK Floor Plans</Link></li>
                <li><Link href="/location">Location & Hinjewadi Connectivity</Link></li>
                <li><Link href="/amenities">40+ Rooftop Amenities</Link></li>
                <li><Link href="/maharera">MahaRERA P52100080336</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Locality Intelligence</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--clr-silver)' }}>
                <li><Link href="/tathawade-vs-wakad">Tathawade vs Wakad Analysis</Link></li>
                <li><Link href="/near/krisala-aventis-2-BHK-near-hinjewadi-phase-1-2025">Flats near Hinjewadi Phase 1</Link></li>
                <li><Link href="/market/luxury-apartments-tathawade-price-trends-2026">Tathawade Price Trends 2026</Link></li>
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
