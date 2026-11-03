import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Krisala Aventis Tathawade Official Portal",
  description: "Official Privacy Policy for Krisala Aventis Tathawade. Learn how we collect, store, and protect your personal data in strict compliance with the DPDP Act 2023 and Google Ads policies.",
  alternates: {
    canonical: "https://krisalaventis.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Krisala Aventis Tathawade",
    description: "Official Privacy Policy and data protection standards for Krisala Aventis Tathawade, Pune.",
    url: "https://krisalaventis.in/privacy-policy",
    images: ["https://krisalaventis.in/assets/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://krisalaventis.in/privacy-policy#webpage",
      "url": "https://krisalaventis.in/privacy-policy",
      "name": "Privacy Policy — Krisala Aventis Tathawade",
      "description": "Official Privacy Policy and personal data protection terms for Krisala Aventis Tathawade.",
      "isPartOf": {
        "@id": "https://krisalaventis.in/website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krisalaventis.in" },
        { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://krisalaventis.in/privacy-policy" }
      ]
    }
  ]
};

export default function PrivacyPolicyPage() {
  return (
    <main suppressHydrationWarning className="editorial-pillar-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
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
          <div className="section-tag" style={{ background: 'var(--clr-gold)', color: '#000', border: 'none' }}>Legal & Compliance</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Privacy Policy <br /><span className="gold shimmer-text">&amp; Data Protection Standards</span>
          </h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 20px', color: 'var(--clr-silk)' }}>
            Effective Date: January 1, 2026 | Last Updated: November 2026. This policy governs how Krisala Aventis Tathawade and Krisala Legacy handle, protect, and process user information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--clr-silk)', lineHeight: 1.8, fontSize: '0.98rem' }}>
          
          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>1. Introduction &amp; Scope</h2>
            <p style={{ marginBottom: '16px' }}>
              Welcome to <strong>Krisala Aventis Tathawade</strong> (accessible at <a href="https://krisalaventis.in" style={{ color: 'var(--clr-gold)', textDecoration: 'underline' }}>https://krisalaventis.in</a>). We are dedicated to maintaining the trust and confidence of our visitors. This Privacy Policy outlines the types of personal information collected on this website, how it is used, stored, and the strict safeguards implemented in compliance with India’s <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> and international advertising standards (including Google Ads User Data Policies).
            </p>
            <p>
              By accessing this website, requesting project cost sheets, downloading brochures, or submitting your contact details via enquiry forms, you acknowledge and agree to the practices described herein.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '14px' }}>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about Krisala Aventis Tathawade:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Contact Identifiers:</strong> Full Name, Mobile Phone Number, Email Address.</li>
              <li style={{ marginBottom: '8px' }}><strong>Property Preferences:</strong> Configuration preference (2.25 BHK or 3.25 BHK), investment timeline, and preferred site visit slots.</li>
              <li style={{ marginBottom: '8px' }}><strong>Technical &amp; Device Data:</strong> IP address, browser type, operating system, approximate geographical location, and interaction logs captured via cookies and web analytics tags.</li>
            </ul>
            <p>
              We do <strong>not</strong> collect sensitive personal data such as financial account passwords, biometric credentials, or Aadhaar numbers through this public web portal.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: '14px' }}>The information collected is strictly utilized for authorized real estate communication purposes, specifically:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Transmitting official e-brochures, floor plan blueprints, and all-inclusive pricing cost sheets.</li>
              <li style={{ marginBottom: '8px' }}>Scheduling and confirming VIP site tour visits to our Tathawade sales experience lounge.</li>
              <li style={{ marginBottom: '8px' }}>Providing updates regarding MahaRERA sanctions (MahaRERA: <strong>P52100080336</strong>), construction milestones, and launch pricing benefits.</li>
              <li style={{ marginBottom: '8px' }}>Analyzing website traffic performance, user navigation patterns, and enhancing landing page speed and responsiveness via Google Analytics and Google Tag Manager.</li>
            </ul>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>4. Consent, DNC/NDNC &amp; Communication Channels</h2>
            <p style={{ marginBottom: '14px' }}>
              When you submit your mobile number on our enquiry forms, you provide explicit, affirmative consent to receive project communication via <strong>Phone Call, SMS, WhatsApp, and Email</strong> from Krisala Legacy and its authorized sales representatives.
            </p>
            <p>
              This consent explicitly supersedes any registration under the National Do Not Call (NDNC) Registry or Do Not Disturb (DND) status pursuant to Telecom Commercial Communications Customer Preference Regulations (TCCCPR). You retain the right to withdraw this consent at any point in time.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>5. Third-Party Disclosures &amp; Non-Sale of Data</h2>
            <p style={{ marginBottom: '14px' }}>
              <strong>We do not sell, rent, trade, or monetize your personal information to third-party brokers or external data aggregators.</strong>
            </p>
            <p>
              Your information is accessible solely to authorized personnel and trusted technical service providers (e.g., Cloudflare edge hosting, transactional SMS/email gateways, and pre-approved home loan banking consortiums such as SBI, HDFC, ICICI when explicitly requested by you for mortgage assistance). All partners are bound by strict non-disclosure obligations.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>6. Google Ads, Analytics &amp; Cookies Disclosure</h2>
            <p style={{ marginBottom: '14px' }}>
              This site utilizes Google Analytics (GA4), Google Tag Manager, and Google Ads conversion tracking tags. These services employ first-party and third-party cookies to evaluate visitor interactions, optimize ad placements, and measure campaign effectiveness.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Our site implements <strong>Google Consent Mode v2</strong>, ensuring that ad storage and personalization parameters respect user consent states. You can modify your browser settings to refuse cookies or alert you when cookies are placed on your device.
            </p>
            <p>
              To opt out of Google Analytics tracking across all websites, visit: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-gold)', textDecoration: 'underline' }}>https://tools.google.com/dlpage/gaoptout</a>.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>7. Data Security &amp; Retention</h2>
            <p style={{ marginBottom: '14px' }}>
              We implement industry-standard cryptographic safeguards, including 256-bit SSL encryption, Cloudflare enterprise WAF firewalls, and DDoS mitigation to protect your data against unauthorized access, alteration, or disclosure.
            </p>
            <p>
              Personal data is retained only as long as necessary to fulfill the inquiries for which it was gathered or to satisfy legal, regulatory, and real estate compliance mandates under MahaRERA.
            </p>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>8. Your Data Protection Rights</h2>
            <p style={{ marginBottom: '14px' }}>Under applicable privacy laws, you possess the following rights regarding your personal information:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Right of Access:</strong> Request a copy of the personal details stored in our database.</li>
              <li style={{ marginBottom: '8px' }}><strong>Right to Rectification:</strong> Request correction of inaccurate or outdated information.</li>
              <li style={{ marginBottom: '8px' }}><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request complete deletion of your records from our outreach lists.</li>
              <li style={{ marginBottom: '8px' }}><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications at any time by replying "STOP" or notifying us directly.</li>
            </ul>
          </div>

          <div className="glass-glow" style={{ padding: '36px', background: 'var(--clr-onyx)', borderRadius: '16px' }}>
            <h2 style={{ color: 'var(--clr-gold)', fontSize: '1.4rem', marginBottom: '14px' }}>9. Contact Information &amp; Grievance Officer</h2>
            <p style={{ marginBottom: '14px' }}>
              For any questions regarding this Privacy Policy, cookie management, or to exercise your data erasure rights, please contact our designated Grievance &amp; Compliance Desk:
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: 2 }}>
              <li><strong>Entity:</strong> Krisala Aventis Tathawade / Krisala Legacy</li>
              <li><strong>Physical Address:</strong> Beside Shakai Circle, Mumbai-Pune-Bangalore Highway Service Road, Tathawade, Pune, Maharashtra 411033</li>
              <li><strong>Official Telephone:</strong> <a href="tel:+917744009295" style={{ color: 'var(--clr-gold)' }}>+91 7744009295</a></li>
              <li><strong>Compliance Email:</strong> <a href="mailto:propsmartrealty@gmail.com" style={{ color: 'var(--clr-gold)' }}>propsmartrealty@gmail.com</a></li>
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
                <li><Link href="/privacy-policy" style={{ color: 'var(--clr-gold)' }}>Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
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
