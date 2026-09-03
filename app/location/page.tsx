import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Krisala Aventis Tathawade Location Map & Hinjewadi Connectivity 2026",
  description: "Explore the prime location of Krisala Aventis Tathawade Pune. Beside Shakai Circle, Mumbai-Pune Expressway service road. Just 7 mins to Hinjewadi Phase 1 & 5 mins to Wakad.",
  alternates: {
    canonical: "https://krisalaventis.in/location",
  },
  openGraph: {
    title: "Krisala Aventis Tathawade Location & Proximity Map",
    description: "Strategic gateway location in Tathawade Pune with zero-traffic connectivity to Hinjewadi IT Park and Pune-Mumbai Highway.",
    url: "https://krisalaventis.in/location",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Krisala Aventis Tathawade Location Command Center",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Beside Shakai Circle, Mumbai-Pune Highway Service Road, Tathawade",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411033",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.6314375,
    "longitude": 73.7462656
  },
  "hasMap": "https://www.google.com/maps/place/Krisala+Aventis/@18.6314375,73.7462656,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb001eb0d45f:0x7536287cc8523825!8m2!3d18.6314375!4d73.7462656!16s%2Fg%2F11ygjwzygv"
};

export default function LocationPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
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
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/location" style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Location</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/maharera">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad">Tathawade vs Wakad</Link>
            <a href="#enquiry" className="cta-pill magnetic">Get Route Map</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section hero-pillar" style={{ paddingTop: '140px', background: 'radial-gradient(circle at 50% 10%, rgba(202, 163, 80, 0.12), var(--clr-obsidian) 70%)' }}>
        <div className="container">
          <div className="section-tag">Ground Intelligence</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Krisala Aventis Tathawade <br /><span className="gold shimmer-text">Location & Strategic Connectivity</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
            Positioned directly beside Shakai Circle along the Mumbai-Pune Expressway service road. Experience seamless daily commuting to Hinjewadi IT Park, Wakad, Baner, and PCMC.
          </p>
        </div>
      </section>

      {/* Distance Matrix */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <h2>Proximity & <span className="gold shimmer-text">Commute Times</span></h2>
            <p>Calculated door-to-door transit times from Krisala Aventis Tathawade.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💻</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '12px' }}>IT Hubs & Tech Parks</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--clr-silk)' }}>
                <li><strong>Hinjewadi Phase 1 (TCS, Infosys, Wipro):</strong> 7 Mins (3.8 km)</li>
                <li><strong>Hinjewadi Phase 2 (Cognizant, TechM):</strong> 12 Mins</li>
                <li><strong>Hinjewadi Phase 3 (Megapolis Hub):</strong> 18 Mins</li>
                <li><strong>Baner IT Corridor:</strong> 15 Mins</li>
              </ul>
            </div>

            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎓</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '12px' }}>Education Hubs</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--clr-silk)' }}>
                <li><strong>D.Y. Patil University & College:</strong> 2 Mins</li>
                <li><strong>JSPM Rajarshi Shahu College:</strong> 3 Mins</li>
                <li><strong>Indira Institute of Management:</strong> 4 Mins</li>
                <li><strong>Blossom Public School:</strong> 5 Mins</li>
              </ul>
            </div>

            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛍️</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '12px' }}>Retail & Entertainment</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--clr-silk)' }}>
                <li><strong>Phoenix Mall of the Millennium:</strong> 5 Mins</li>
                <li><strong>Decathlon Wakad:</strong> 4 Mins</li>
                <li><strong>Vision One Mall:</strong> 4 Mins</li>
                <li><strong>Balewadi High Street:</strong> 14 Mins</li>
              </ul>
            </div>

            <div className="glass-glow" style={{ padding: '30px', borderRadius: '16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏥</div>
              <h3 style={{ color: 'var(--clr-gold)', marginBottom: '12px' }}>Multi-Specialty Healthcare</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--clr-silk)' }}>
                <li><strong>Aditya Birla Memorial Hospital:</strong> 8 Mins</li>
                <li><strong>Lifepoint Multispecialty Hospital:</strong> 5 Mins</li>
                <li><strong>Surya Mother & Child Hospital:</strong> 6 Mins</li>
                <li><strong>Ruby Hall Clinic Hinjewadi:</strong> 10 Mins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Map */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--clr-glass-border)' }}>
        <div className="container">
          <div className="section-header center">
            <h2>Live Location <span className="gold shimmer-text">Command Map</span></h2>
            <p>GPS Coordinates: 18.6314° N, 73.7463° E — Tathawade, Pune</p>
          </div>
          <div className="glass-glow" style={{ padding: '16px', borderRadius: '16px' }}>
            <iframe 
              title="Krisala Aventis Tathawade Official Location Map" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.865487771747!2d73.74369067599424!3d18.63143748248386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb001eb0d45f%3A0x7536287cc8523825!2sKrisala%20Aventis!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '12px', filter: 'grayscale(0.2) contrast(1.1)' }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass-form-container">
            <div className="section-tag">Site Visit Booking</div>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '8px' }}>
              Book a <span className="gold">Free VIP Cab Pick-up & Site Visit</span>
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--clr-silver)', marginBottom: '30px', fontSize: '0.95rem' }}>
              Schedule a personalized tour of the Tathawade sales experience lounge and sample flats.
            </p>
            
            <form action="/api/contact" method="POST" className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="name" placeholder="Your Full Name *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="tel" name="phone" placeholder="WhatsApp Phone Number *" required style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <input type="date" name="preferred_date" style={{ padding: '14px 18px', borderRadius: '8px', background: 'var(--clr-onyx)', border: '1px solid var(--clr-glass-border)', color: '#fff' }} />
              <button type="submit" className="btn-primary shimmer-btn" style={{ padding: '16px', fontSize: '1rem', fontWeight: 700, marginTop: '10px' }}>
                Schedule Priority Site Visit →
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
