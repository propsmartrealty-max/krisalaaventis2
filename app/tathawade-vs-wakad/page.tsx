import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tathawade vs Wakad Real Estate Comparison 2026 — Price, ROI & Lifestyle",
  description: "Comprehensive 2026 real estate comparison: Tathawade vs Wakad Pune. Discover why buying in Tathawade offers 25% larger carpet area and higher rental yields near Hinjewadi IT Park.",
  alternates: {
    canonical: "https://krisalaventis.in/tathawade-vs-wakad",
  },
  openGraph: {
    title: "Tathawade vs Wakad Property Investment Analysis 2026",
    description: "Detailed price per sq.ft, infrastructure, and ROI comparison between Tathawade and Wakad.",
    url: "https://krisalaventis.in/tathawade-vs-wakad",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
};

export default function TathawadeVsWakadPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
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
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/location">Location</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/maharera">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad" style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Tathawade vs Wakad</Link>
            <a href="#enquiry" className="cta-pill magnetic">Get Comparison Report</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section hero-pillar" style={{ paddingTop: '140px', background: 'radial-gradient(circle at 50% 10%, rgba(202, 163, 80, 0.12), var(--clr-obsidian) 70%)' }}>
        <div className="container">
          <div className="section-tag">Market Intelligence</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Tathawade vs Wakad <br /><span className="gold shimmer-text">Real Estate & ROI Comparison 2026</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
            An in-depth analytical report comparing price per square foot, carpet area value, rental yields, and highway infrastructure between Tathawade and Wakad in West Pune.
          </p>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <h2>Head-to-Head <span className="gold shimmer-text">Micro-Market Matrix</span></h2>
            <p>Why home buyers and smart IT investors are choosing Tathawade over saturated Wakad pockets.</p>
          </div>

          <div className="table-responsive glass-glow" style={{ padding: '24px', background: 'var(--clr-onyx)', borderRadius: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--clr-gold)', color: 'var(--clr-gold)' }}>
                  <th style={{ padding: '16px', width: '30%' }}>Parameter</th>
                  <th style={{ padding: '16px', width: '35%' }}>Tathawade (e.g. Krisala Aventis)</th>
                  <th style={{ padding: '16px', width: '35%' }}>Wakad (Average Project)</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--clr-silk)' }}>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>Average Price per Sq.Ft</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)', fontWeight: 700 }}>₹6,800 – ₹7,400 / sq.ft</td>
                  <td style={{ padding: '16px' }}>₹8,500 – ₹9,800 / sq.ft</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>2 BHK Carpet Size</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)', fontWeight: 700 }}>839 Sq.ft (2.25 BHK with Study)</td>
                  <td style={{ padding: '16px' }}>680 – 740 Sq.ft (Standard 2 BHK)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>Distance to Hinjewadi Phase 1</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)', fontWeight: 700 }}>7–10 Mins (Direct Bypass)</td>
                  <td style={{ padding: '16px' }}>15–25 Mins (Bhumkar Chowk Traffic)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>5-Year Capital Appreciation</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)', fontWeight: 700 }}>12.4% CAGR (High Growth)</td>
                  <td style={{ padding: '16px' }}>7.8% CAGR (Mature Stage)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--clr-glass-border)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>Campus Size & Open Amenities</td>
                  <td style={{ padding: '16px', color: 'var(--clr-gold)', fontWeight: 700 }}>3+ Acres (40+ Rooftop Features)</td>
                  <td style={{ padding: '16px' }}>Standalone / Congested Plots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Editorial Key Insights */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--clr-glass-border)' }}>
        <div className="container">
          <div className="section-header center">
            <h2>3 Strategic Reasons to <span className="gold shimmer-text">Invest in Tathawade</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>1. 25% Higher Space per Rupee</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                While a ₹90 Lakh budget in Wakad only buys a compact 700 sq.ft 2 BHK, the same investment in Krisala Aventis Tathawade secures an expansive 839 sq.ft 2.25 BHK home with a dedicated acoustic study room.
              </p>
            </div>

            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>2. Bypass Wakad Chokepoints</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Krisala Aventis is situated directly on the Mumbai-Pune Expressway service road beside Shakai Circle, enabling IT commuters to reach Hinjewadi Phase 1 in 7 minutes without getting stuck in Bhumkar Chowk bottle-necks.
              </p>
            </div>

            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>3. Higher Rental Yield for IT Tenants</h3>
              <p style={{ color: 'var(--clr-silver)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Because Tathawade is surrounded by major institutes (D.Y. Patil, JSPM, Indira) and Hinjewadi IT companies, rental demand is consistently at 95%+ occupancy, delivering 4.5% to 5.2% gross rental yields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass-form-container">
            <div className="section-tag">Market Advisory</div>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '8px' }}>
              Download <span className="gold">Tathawade vs Wakad Market Report PDF</span>
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--clr-silver)', marginBottom: '30px', fontSize: '0.95rem' }}>
              Get our comprehensive 15-page financial analysis with rental yield projections and property price comparisons.
            </p>
            
            <form action="/api/contact" method="POST" className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="name" placeholder="Your Full Name *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="tel" name="phone" placeholder="WhatsApp Phone Number *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <button type="submit" className="btn-primary shimmer-btn" style={{ padding: '16px', fontSize: '1rem', fontWeight: 700, marginTop: '10px' }}>
                Download Market Analysis Report PDF →
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
