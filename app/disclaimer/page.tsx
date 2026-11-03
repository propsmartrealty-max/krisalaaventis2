import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Disclaimer & MahaRERA Disclosures — Krisala Aventis Tathawade",
  description: "Official legal disclaimer, MahaRERA P52100080336 statutory disclosures, artist impression caveats, and pricing terms for Krisala Aventis Tathawade, Pune.",
  alternates: {
    canonical: "https://krisalaventis.in/disclaimer",
  },
  openGraph: {
    title: "Legal Disclaimer & MahaRERA Disclosures — Krisala Aventis Tathawade",
    description: "Official statutory disclosures and MahaRERA P52100080336 legal disclaimers for Krisala Aventis Tathawade.",
    url: "https://krisalaventis.in/disclaimer",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const disclaimerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://krisalaventis.in/disclaimer#webpage",
      "url": "https://krisalaventis.in/disclaimer",
      "name": "Legal Disclaimer & MahaRERA Disclosures — Krisala Aventis Tathawade",
      "description": "Official statutory disclaimers and legal disclosures for Krisala Aventis Tathawade.",
      "isPartOf": {
        "@id": "https://krisalaventis.in/website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krisalaventis.in" },
        { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://krisalaventis.in/disclaimer" }
      ]
    }
  ]
};

export default function DisclaimerPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }}
      />
      {/* Navigation */}
      <nav className="pill-navbar" id="mainNav">
        <div className="nav-container">
          <Link href="/" className="logo" title="Krisala Aventis Tathawade Official Website" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/assets/images/logo.jpg" alt="Krisala Logo" style={{ height: '32px', width: 'auto', mixBlendMode: 'screen' }} />
            <span style={{ fontWeight: 300, letterSpacing: '2px', fontSize: '1.1rem', color: '#fff' }}>AVENTIS</span>
          </Link>
          <div className="nav-links" id="navLinks">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/location">Location</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/maharera">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad">Tathawade vs Wakad</Link>
            <Link href="/#contact" className="cta-pill magnetic">Contact Sales</Link>
          </div>
          <button className="hamburger" id="hamburger" aria-label="Toggle Navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="section hero-pillar" style={{ paddingTop: '140px', background: 'radial-gradient(circle at 50% 10%, rgba(202, 163, 80, 0.12), var(--clr-obsidian) 70%)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-tag" style={{ background: 'var(--clr-gold)', color: '#000', border: 'none' }}>Statutory Disclosures</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Legal Disclaimer <br /><span className="gold shimmer-text">&amp; MahaRERA Disclosures</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 20px', color: 'var(--clr-silk)' }}>
            Statutory transparency statement pursuant to the Real Estate (Regulation and Development) Act, 2016 (RERA) and Google Advertising Transparency Guidelines.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--clr-silk)', lineHeight: 1.8, fontSize: '0.98rem' }}>
          
          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>1. MahaRERA Registration &amp; Official Verification</h2>
            <p style={{ marginBottom: '16px' }}>
              <strong>Krisala Aventis Tathawade</strong> is an ongoing luxury residential project developed by <strong>Krisala Legacy</strong>. The project is duly registered with the Maharashtra Real Estate Regulatory Authority under Registration Number:
            </p>
            <div style={{ background: 'rgba(202, 163, 80, 0.1)', border: '1px solid var(--clr-gold)', padding: '16px 20px', borderRadius: '10px', marginBottom: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--clr-gold)' }}>MahaRERA Registration No.: P52100080336</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--clr-silver)', marginTop: '6px', marginBottom: 0 }}>
                Verified on MahaRERA official website: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>https://maharera.mahaonline.gov.in</a>
              </p>
            </div>
            <p>
              Complete sanctioned building plans, layout approvals, environmental clearances, and legal encumbrance certificates are available for public inspection on the official MahaRERA online portal.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>2. Website Representation &amp; Marketing Disclosure</h2>
            <p style={{ marginBottom: '14px' }}>
              This website (<a href="https://krisalaventis.in" style={{ color: 'var(--clr-gold)' }}>https://krisalaventis.in</a>) is an authorized promotional and digital marketing platform operated for the Krisala Aventis development.
            </p>
            <p>
              The purpose of this website is solely to provide information, facilitate customer inquiries, schedule site tours, and distribute project collateral. The information presented herein does not constitute a solicitation, advertisement, invitation to offer, or binding contract.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>3. Artist Impressions &amp; Visual Representation</h2>
            <p style={{ marginBottom: '14px' }}>
              All visual assets across this website, including but not limited to 3D architectural renderings, exterior elevations, tower facade treatments, drone perspective vistas, podium landscaping, swimming pool visuals, and interior mockups of show flats, are <strong>artist's impressions and conceptual computer graphics</strong>.
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
              <li style={{ marginBottom: '8px' }}>Surrounding green spaces, skyline views, lighting, and ambient landscaping are artistic depictions and may not represent the final delivered reality.</li>
              <li style={{ marginBottom: '8px' }}>Internal furniture, soft furnishings, modular kitchen cabinetry, wall paneling, false ceilings, lighting fixtures, and electronic gadgets shown in sample flats are for display purposes only.</li>
              <li style={{ marginBottom: '8px' }}>Standard flat handover specifications are restricted strictly to those explicitly enumerated in the registered Agreement for Sale.</li>
            </ul>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>4. Pricing Disclaimers &amp; Government Levies</h2>
            <p style={{ marginBottom: '14px' }}>
              All prices advertised on this portal (e.g., 2.25 BHK starting from ₹85 Lakhs* onwards and 3.25 BHK starting from ₹1.15 Cr* onwards) are indicative launch base prices and:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Exclude Government Levies:</strong> Maharashtra State Stamp Duty, Registration Fees, GST, and PCMC infrastructure development charges are payable as per statutory government rates prevailing at the time of agreement registration.</li>
              <li style={{ marginBottom: '8px' }}><strong>Variable Costs:</strong> Total purchase price varies based on unit carpet area, floor rise, directional orientation, and car parking allocation.</li>
              <li style={{ marginBottom: '8px' }}>The developer reserves the right to revise launch prices, payment plans, and promotional offers without prior obligation or public notice.</li>
            </ul>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>5. Transit Times &amp; Infrastructure Claims</h2>
            <p style={{ marginBottom: '14px' }}>
              All commute durations cited on this website (e.g., "8–10 minutes to Hinjewadi Phase 1", "2 minutes to Mumbai-Pune Expressway", "5 minutes to Phoenix Mall") are approximate travel times calculated via standard vehicular navigation under non-peak conditions.
            </p>
            <p>
              Actual transit times may vary depending on daily traffic velocity, road construction, and PCMC municipal infrastructure works. References to upcoming public transit (e.g., Pune Metro Line 3) are based on public government planning announcements and are beyond developer control.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>6. Banking Financing &amp; Pre-Approved Mortgages</h2>
            <p style={{ marginBottom: '14px' }}>
              References to pre-approved home loan assistance from nationalized and private banking institutions (such as SBI, HDFC Bank, ICICI Bank, Axis Bank) do not guarantee loan sanction.
            </p>
            <p>
              Mortgage approvals, interest rates, eligibility thresholds, and processing terms remain subject to the independent underwriting policies and credit assessment criteria of the respective financial institutions.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>7. Official Sales Contact &amp; Grievance Redressal</h2>
            <p style={{ marginBottom: '14px' }}>
              Homebuyers are strongly encouraged to inspect physical copies of all sanctioned blueprints, title certificates, and cost sheet breakdowns at our site sales office:
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: 2 }}>
              <li><strong>Site Office:</strong> Krisala Aventis Sales Experience Center, Beside Shakai Circle, Mumbai-Pune-Bangalore Highway Service Road, Tathawade, Pune, Maharashtra 411033</li>
              <li><strong>Official Phone:</strong> <a href="tel:+917744009295" style={{ color: 'var(--clr-gold)' }}>+91 7744009295</a></li>
              <li><strong>Official Email:</strong> <a href="mailto:propsmartrealty@gmail.com" style={{ color: 'var(--clr-gold)' }}>propsmartrealty@gmail.com</a></li>
              <li><strong>Developer:</strong> Krisala Legacy Pune</li>
              <li><strong>MahaRERA Registration:</strong> P52100080336</li>
            </ul>
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
                <li><Link href="/pricing">Price List &amp; Cost Sheet</Link></li>
                <li><Link href="/floor-plans">Floor Plans &amp; Blueprints</Link></li>
                <li><Link href="/location">Location &amp; Hinjewadi Route</Link></li>
                <li><Link href="/amenities">40+ Rooftop Amenities</Link></li>
                <li><Link href="/maharera">MahaRERA P52100080336</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--clr-gold)', marginBottom: '14px' }}>Legal &amp; Policy Hub</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--clr-silver)' }}>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                <li><Link href="/disclaimer" style={{ color: 'var(--clr-gold)' }}>Legal Disclaimer</Link></li>
                <li><Link href="/maharera">MahaRERA Compliance</Link></li>
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
            © 2026 Krisala Aventis Tathawade. Official Canonical Portal. All Rights Reserved. | <Link href="/privacy-policy" style={{ color: 'var(--clr-gold)' }}>Privacy Policy</Link> | <Link href="/terms-and-conditions" style={{ color: 'var(--clr-gold)' }}>Terms &amp; Conditions</Link> | <Link href="/disclaimer" style={{ color: 'var(--clr-gold)' }}>Disclaimer</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
