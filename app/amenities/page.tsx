import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Krisala Aventis Tathawade Amenities — 40+ Rooftop & Podium Features",
  description: "Explore 40+ world-class lifestyle amenities at Krisala Aventis Tathawade Pune. Infinity rooftop pool, gymnasium, futsal turf, co-working club, and reflexology park.",
  alternates: {
    canonical: "https://krisalaventis.in/amenities",
  },
  openGraph: {
    title: "Krisala Aventis Tathawade 40+ Luxury Amenities",
    description: "Discover resort-style amenities across 3 acres in Tathawade Pune near Hinjewadi Phase 1.",
    url: "https://krisalaventis.in/amenities",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
};

export default function AmenitiesPage() {
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
            <Link href="/amenities" style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Amenities</Link>
            <Link href="/maharera">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad">Tathawade vs Wakad</Link>
            <a href="#enquiry" className="cta-pill magnetic">Download Brochure</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section hero-pillar" style={{ paddingTop: '140px', background: 'radial-gradient(circle at 50% 10%, rgba(202, 163, 80, 0.12), var(--clr-obsidian) 70%)' }}>
        <div className="container">
          <div className="section-tag">Curated Lifestyle</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Krisala Aventis Tathawade <br /><span className="gold shimmer-text">40+ Luxury Lifestyle Amenities</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
            Elevate every aspect of wellness, recreation, and remote productivity across a masterfully planned 3+ acre podium campus.
          </p>
        </div>
      </section>

      {/* Categorized Amenities */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Zone 1 */}
            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>🏊‍♂️</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Rooftop & Aqua Club</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--clr-silk)' }}>
                <li>✨ Infinity Lap Swimming Pool</li>
                <li>✨ Dedicated Kids Splash Pool & Water Spouts</li>
                <li>✨ Poolside Sunken Cabanas & Loungers</li>
                <li>✨ Open-air Sky Gazing Deck</li>
                <li>✨ Poolside Juice Bar & Refreshment Deck</li>
              </ul>
            </div>

            {/* Zone 2 */}
            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>💪</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Fitness & Wellness Arena</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--clr-silk)' }}>
                <li>✨ Fully-Equipped High-Tech Gymnasium</li>
                <li>✨ Yoga & Meditation Pavilion</li>
                <li>✨ Aerobics & Zumba Studio</li>
                <li>✨ Acupressure & Reflexology Walkway</li>
                <li>✨ Calisthenics & Crossfit Zone</li>
              </ul>
            </div>

            {/* Zone 3 */}
            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>🏏</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Sports & Outdoor Recreation</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--clr-silk)' }}>
                <li>✨ Box Cricket Turf with Net Enclosures</li>
                <li>✨ Multipurpose Futsal Court</li>
                <li>✨ Badminton Court</li>
                <li>✨ Skating Rink for Children</li>
                <li>✨ Table Tennis & Billiards Room</li>
              </ul>
            </div>

            {/* Zone 4 */}
            <div className="glass-glow" style={{ padding: '36px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>💼</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Co-Working & Community</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--clr-silk)' }}>
                <li>✨ Smart Study Co-Working Lounge</li>
                <li>✨ High-Speed Wi-Fi Business Cabins</li>
                <li>✨ Grand Multipurpose Celebration Banquet</li>
                <li>✨ Senior Citizens Sunset Pavilion</li>
                <li>✨ Amphitheatre for Cultural Gatherings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass-form-container">
            <div className="section-tag">Brochure Download</div>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '8px' }}>
              Download <span className="gold">40+ Amenities E-Brochure</span>
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--clr-silver)', marginBottom: '30px', fontSize: '0.95rem' }}>
              Get high-definition photographs and floor plan details for all rooftop and podium amenities.
            </p>
            
            <form action="/api/contact" method="POST" className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="name" placeholder="Your Full Name *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="tel" name="phone" placeholder="WhatsApp Phone Number *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <button type="submit" className="btn-primary shimmer-btn" style={{ padding: '16px', fontSize: '1rem', fontWeight: 700, marginTop: '10px' }}>
                Download Amenities Brochure PDF →
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
