import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Krisala Aventis Tathawade Official Portal",
  description: "Official Terms and Conditions for using https://krisalaventis.in. Review guidelines regarding property bookings, indicative pricing, intellectual property, and MahaRERA disclosures.",
  alternates: {
    canonical: "https://krisalaventis.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions — Krisala Aventis Tathawade",
    description: "Official Terms and Conditions for Krisala Aventis Tathawade, Pune.",
    url: "https://krisalaventis.in/terms-and-conditions",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://krisalaventis.in/terms-and-conditions#webpage",
      "url": "https://krisalaventis.in/terms-and-conditions",
      "name": "Terms & Conditions — Krisala Aventis Tathawade",
      "description": "Official Terms of Use and contractual disclosures for Krisala Aventis Tathawade.",
      "isPartOf": {
        "@id": "https://krisalaventis.in/website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krisalaventis.in" },
        { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://krisalaventis.in/terms-and-conditions" }
      ]
    }
  ]
};

export default function TermsAndConditionsPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
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
          <div className="section-tag" style={{ background: 'var(--clr-gold)', color: '#000', border: 'none' }}>Legal Agreement</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Terms &amp; Conditions <br /><span className="gold shimmer-text">&amp; Website Use Agreement</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 20px', color: 'var(--clr-silk)' }}>
            Effective Date: January 1, 2026. Please read these terms carefully before utilizing our services, booking site visits, or referencing project material.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--clr-silk)', lineHeight: 1.8, fontSize: '0.98rem' }}>
          
          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>1. Agreement to Terms</h2>
            <p style={{ marginBottom: '16px' }}>
              These Terms and Conditions constitute a legally binding agreement between you and <strong>Krisala Legacy / Krisala Aventis Tathawade</strong> regarding your access to and use of <a href="https://krisalaventis.in" style={{ color: 'var(--clr-gold)', textDecoration: 'underline' }}>https://krisalaventis.in</a> and any associated inquiry forms, digital brochures, or interactive tools.
            </p>
            <p>
              By accessing this website, submitting personal information, or reserving VIP site walk passes, you agree to be bound by all of these Terms and Conditions. If you do not agree with all of these terms, you must discontinue use immediately.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>2. Informational &amp; Promotional Nature</h2>
            <p style={{ marginBottom: '14px' }}>
              This website serves as an official informational and promotional portal for <strong>Krisala Aventis Tathawade</strong>, a residential real estate development registered under Maharashtra Real Estate Regulatory Authority (MahaRERA) with registration number <strong>P52100080336</strong>.
            </p>
            <p>
              The content provided on this website is for general reference and awareness only. It does not constitute a formal legal offer, contractual promise, warranty, or financial advice. All official bindings are governed strictly by the formal Agreement for Sale executed between the buyer and the developer in accordance with MahaRERA guidelines.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>3. Indicative Pricing &amp; Inventory Availability</h2>
            <p style={{ marginBottom: '14px' }}>
              Prices mentioned on this website (such as 2.25 BHK starting from ₹85 Lakhs* onwards and 3.25 BHK starting from ₹1.15 Cr* onwards) represent indicative launch base prices and are subject to change without prior notice:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Base prices do not include statutory charges: Maharashtra State Stamp Duty (approx. 6%), Registration fees (1%), Local Body Tax (LBT), Goods &amp; Services Tax (GST 5%), or PCMC infrastructure charges.</li>
              <li style={{ marginBottom: '8px' }}>Final unit price varies based on floor rise premiums, tower orientation, corner balcony vista, and inventory availability at the time of formal booking.</li>
              <li style={{ marginBottom: '8px' }}>Detailed, customized cost sheets can only be confirmed upon verification at our sales office or through our official sales concierge at <a href="tel:+917744009295" style={{ color: 'var(--clr-gold)' }}>+91 7744009295</a>.</li>
            </ul>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>4. Architectural Layouts &amp; Artistic Renders</h2>
            <p style={{ marginBottom: '14px' }}>
              All 3D visual renderings, video walkthroughs, landscaped garden models, podium amenities imagery, and show flat interior designs showcased on this site are <strong>artist's impressions</strong> intended to illustrate the conceptual vision of the project.
            </p>
            <p>
              Furniture, fittings, interior decor, electronic appliances, and specialized furnishings shown in show flats or renders are indicative and do not form part of the standard apartment handover specifications unless explicitly documented in the sanctioned specification annexure of your registered agreement.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>5. Booking Procedure &amp; Token Payments</h2>
            <p style={{ marginBottom: '14px' }}>
              Submitting an enquiry or generating a digital priority pass on this website does not guarantee unit reservation or price freeze.
            </p>
            <p>
              Formal unit reservations require completing official booking documentation and paying the prescribed token amount via sanctioned banking instruments (Cheque/NEFT/RTGS/Authorized Payment Gateway) in favor of the designated project escrow account governed under MahaRERA rules. Cancellations, refunds, and forfeiture terms are regulated strictly by the standard allotment letter.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>6. Intellectual Property Rights</h2>
            <p style={{ marginBottom: '14px' }}>
              All logos, brand names, architectural blueprints, copy, graphics, code, and multimedia content hosted on <a href="https://krisalaventis.in" style={{ color: 'var(--clr-gold)' }}>https://krisalaventis.in</a> are the proprietary property of <strong>Krisala Legacy</strong> or licensed for use.
            </p>
            <p>
              Unauthorized reproduction, distribution, scraping, framing, or commercial exploitation of any material on this website without prior written authorization is strictly prohibited.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>7. Limitation of Liability</h2>
            <p style={{ marginBottom: '14px' }}>
              To the fullest extent permitted by law, Krisala Legacy and its affiliates, directors, employees, and authorized agents disclaim all liability for any direct, indirect, incidental, or consequential losses arising out of your access to or inability to access this portal, or reliance upon any informational content displayed herein.
            </p>
            <p>
              Prospective homebuyers are advised to independently verify all layout sanctions, title approvals, and bank financing pre-approvals directly on the official MahaRERA website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-gold)', textDecoration: 'underline' }}>https://maharera.mahaonline.gov.in</a>).
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>8. Governing Law &amp; Jurisdiction</h2>
            <p style={{ marginBottom: '14px' }}>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, controversy, or claim arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Pune / Pimpri-Chinchwad (PCMC), Maharashtra</strong>.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: 2 }}>
              <li><strong>Project:</strong> Krisala Aventis Tathawade</li>
              <li><strong>MahaRERA Registration No.:</strong> P52100080336</li>
              <li><strong>Site Address:</strong> Beside Shakai Circle, Mumbai-Pune-Bangalore Highway Service Road, Tathawade, Pune 411033</li>
              <li><strong>Contact Email:</strong> <a href="mailto:propsmartrealty@gmail.com" style={{ color: 'var(--clr-gold)' }}>propsmartrealty@gmail.com</a></li>
              <li><strong>Contact Number:</strong> <a href="tel:+917744009295" style={{ color: 'var(--clr-gold)' }}>+91 7744009295</a></li>
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
                <li><Link href="/terms-and-conditions" style={{ color: 'var(--clr-gold)' }}>Terms &amp; Conditions</Link></li>
                <li><Link href="/disclaimer">Legal Disclaimer</Link></li>
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
