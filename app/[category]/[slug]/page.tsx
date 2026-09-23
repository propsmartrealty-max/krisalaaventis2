import data from "../../../data.json";
import nriData from "../../../data/global-nri-seo.json";
import dominationData from "../../../data/krisala-domination-seo.json";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const standardParams = data.map((page) => ({
    category: page.folder,
    slug: page.url_slug.replace(".html", ""),
  }));

  const nriParams = nriData.map((page) => ({
    category: page.folder,
    slug: page.url_slug.replace(".html", ""),
  }));

  const dominationParams = dominationData.map((page) => ({
    category: page.folder,
    slug: page.url_slug.replace(".html", ""),
  }));

  return [...standardParams, ...nriParams, ...dominationParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const p = await params;
  let page = data.find(
    (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
  );
  
  if (!page) {
    page = nriData.find(
      (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
    );
  }

  if (!page) {
    page = dominationData.find(
      (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
    );
  }

  if (!page) {
    return { title: "Not Found" };
  }

  const url = `https://krisalaventis.in/${page.folder}/${page.url_slug.replace(".html", "")}`;

  return {
    title: `${page.title} | Krisala Aventis Tathawade`,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${page.title} | Krisala Legacy Pune`,
      description: page.description,
      url: url,
      images: [
        {
          url: "https://krisalaventis.in/assets/images/hero.webp",
          width: 1200,
          height: 630,
          alt: `${page.h1} — Krisala Aventis Tathawade Pune`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["https://krisalaventis.in/assets/images/hero.webp"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const p = await params;
  let page = data.find(
    (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
  );
  
  if (!page) {
    page = nriData.find(
      (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
    );
  }

  if (!page) {
    page = dominationData.find(
      (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
    );
  }

  if (!page) {
    notFound();
  }

  const pageUrl = `https://krisalaventis.in/${page.folder}/${page.url_slug.replace(".html", "")}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://krisalaventis.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.folder.charAt(0).toUpperCase() + page.folder.slice(1),
        item: `https://krisalaventis.in/${page.folder}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: pageUrl,
      },
    ],
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: page.title,
    description: page.description,
    url: pageUrl,
    image: "https://krisalaventis.in/assets/images/hero.webp",
    containedInPlace: {
      "@type": "ApartmentComplex",
      "name": "Krisala Aventis Tathawade",
      "url": "https://krisalaventis.in"
    }
  };

  // Combine all pages to form a deterministic PageRank ring
  const allPages = [...data, ...nriData, ...dominationData];
  const currentIndex = allPages.findIndex(
    (item) => item.folder === p.category && item.url_slug.replace(".html", "") === p.slug
  );
  
  // Pick 6 deterministic related pages to form a mesh
  const relatedPages = [];
  for (let i = 1; i <= 6; i++) {
    const nextIndex = ((currentIndex !== -1 ? currentIndex : 0) + i) % allPages.length;
    relatedPages.push(allPages[nextIndex]);
  }

  const krisalaProjects = [
    { name: "Krisala Aventis Tathawade", tag: "Flagship New Launch", desc: "2.25 & 3.25 BHK Smart Study Homes on Mumbai-Pune Highway.", link: "/krisala-aventis-tathawade-2-bhk-flats" },
    { name: "Krisala Luxovert Tathawade", tag: "Luxury Series", desc: "Premium 2, 3 & 4 BHK Residences near Hinjewadi Phase 1.", link: "/krisala-aventis-tathawade-flats-near-hinjewadi" },
    { name: "Krisala 41 Cosmo Tathawade", tag: "High-Rise Gated Community", desc: "2 & 2.75 BHK Apartments near Bhumkar Chowk.", link: "/krisala-aventis-tathawade-construction-status" },
    { name: "Krisala 41 Estera Punawale", tag: "Growth Corridor", desc: "Spacious 2 & 3 BHK Homes near Mumbai Expressway.", link: "/krisala-aventis-tathawade-market-growth-calculator" },
    { name: "Krisala 41 Zircon Tathawade", tag: "Executive Living", desc: "Modern 2 & 3 BHK Flats close to JSPM University.", link: "/krisala-aventis-tathawade-connectivity-it-hubs" },
    { name: "Krisala 41 Evok Ravet", tag: "BRTS Corridor", desc: "High-speed transit connectivity & resort lifestyle.", link: "/krisala-aventis-tathawade-investment-roi" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      {/* Universal Floating Luxury Navbar */}
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
            <Link href="/tathawade-vs-wakad">Tathawade vs Wakad</Link>
            <Link href="/pricing" className="cta-pill magnetic">Get Cost Sheet</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 pt-28 pb-12" suppressHydrationWarning>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="hover:text-gold transition-colors">Home</a>
            </li>
            <li><span className="text-gray-600">/</span></li>
            <li>
              <a href={`/${page.folder}`} className="hover:text-gold transition-colors capitalize">
                {page.folder}
              </a>
            </li>
            <li><span className="text-gray-600">/</span></li>
            <li className="text-gray-200 truncate" aria-current="page">
              {page.title}
            </li>
          </ol>
        </nav>
        <article className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl" suppressHydrationWarning>
          <div className="w-full h-72 md:h-[420px] relative overflow-hidden">
            <Image
              src="/assets/images/hero.webp"
              alt={page.title}
              title={page.h1}
              fill
              className="object-cover opacity-80 hover:opacity-95 transition-opacity duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c11] via-[#0a0c11]/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                MahaRERA: P52100080336 • Tathawade, West Pune
              </div>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold text-goldLight uppercase leading-tight">
                {page.h1}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-invert prose-gold max-w-none">
              <h2 className="text-2xl font-bold mb-4 font-playfair text-white">About {page.h1}</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">{page.content}</p>
              
              {page.keywords && (
                <div className="mb-12 p-6 bg-gray-800/40 rounded-xl border border-gray-700/50">
                  <h3 className="text-sm font-semibold text-gold mb-3 uppercase tracking-wider">Indexed Search Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {page.keywords.split(',').map((kw: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-gray-900/80 border border-gray-700/50 rounded-full text-xs text-gray-300 hover:text-gold hover:border-gold/50 transition-colors cursor-default">
                        #{kw.trim().toLowerCase().replace(/\s+/g, '-')}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 font-playfair text-white">
                      Why Choose Krisala Aventis Tathawade?
                    </h2>
                    <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                      <li className="flex items-center gap-3"><span className="text-gold font-bold">✓</span> 40+ World-Class Rooftop &amp; Podium Amenities</li>
                      <li className="flex items-center gap-3"><span className="text-gold font-bold">✓</span> 2.25 &amp; 3.25 BHK Smart Study Space in Every Home</li>
                      <li className="flex items-center gap-3"><span className="text-gold font-bold">✓</span> 10 Mins to Hinjewadi IT Park Phase 1 &amp; Wakad</li>
                      <li className="flex items-center gap-3"><span className="text-gold font-bold">✓</span> Advanced Aluform Monolithic Construction</li>
                      <li className="flex items-center gap-3"><span className="text-gold font-bold">✓</span> Beside Mumbai-Pune-Bangalore Expressway</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700/60">
                    <a
                      href="/krisala-aventis-tathawade-brochure-download"
                      className="inline-block w-full text-center py-3 bg-gradient-to-r from-gold to-goldLight text-black font-bold rounded-lg hover:shadow-xl transition-all"
                    >
                      Book Priority Site Visit →
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 font-playfair text-white">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {page.faqs.map((faq: any, i: number) => (
                      <details key={i} className="group cursor-pointer bg-gray-900/60 p-3 rounded-lg border border-gray-800">
                        <summary className="font-medium text-gray-200 hover:text-gold transition-colors list-none flex justify-between items-center text-sm md:text-base">
                          {faq.q}
                          <span className="text-gold group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <p className="text-gray-400 mt-2 pl-3 border-l-2 border-gold/40 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Krisala Projects Portfolio Hub */}
            <div className="mt-16 border-t border-gray-800 pt-10">
              <h3 className="text-2xl font-bold mb-6 text-gold font-playfair">
                Explore More Krisala Legacy Projects in Pune
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {krisalaProjects.map((proj, i) => (
                  <a
                    key={i}
                    href={proj.link}
                    className="block p-5 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-gold/60 hover:bg-gray-800/80 transition-all group"
                  >
                    <div className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">{proj.tag}</div>
                    <div className="text-base font-bold text-white group-hover:text-goldLight transition-colors mb-1">{proj.name}</div>
                    <p className="text-xs text-gray-400 line-clamp-2">{proj.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Deterministic Silo Cluster */}
            <div className="mt-12 border-t border-gray-800 pt-8">
              <h3 className="text-lg font-bold mb-4 text-gray-300 font-playfair">
                Related Pune Real Estate Searches
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {relatedPages.map((rp: any, i: number) => (
                  <a
                    key={i}
                    href={`/${rp.folder}/${rp.url_slug.replace(".html", "")}`}
                    className="block p-3 bg-gray-900/40 rounded-lg border border-gray-800/80 hover:border-gold/40 hover:bg-gray-800/60 transition-all text-xs text-gray-400 hover:text-white truncate"
                    title={rp.title}
                  >
                    {rp.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer" style={{ borderTop: '1px solid var(--clr-glass-border)', background: '#050608', padding: '60px 0 30px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <Link href="/" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: '#fff', textDecoration: 'none', marginBottom: '12px' }}>
                KRISALA <span style={{ color: 'var(--clr-gold)' }}>AVENTIS</span>
              </Link>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.6, marginBottom: '16px' }}>
                Next-generation luxury living in Tathawade. Trusted by 5000+ happy families. Top builders in Pune since 2010.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://www.facebook.com/KrisalaLegacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-gold)', textDecoration: 'none', fontSize: '0.85rem' }}>FB</a>
                <a href="https://www.instagram.com/krisala_legacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-gold)', textDecoration: 'none', fontSize: '0.85rem' }}>IG</a>
                <a href="https://www.linkedin.com/company/krisala-legacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-gold)', textDecoration: 'none', fontSize: '0.85rem' }}>IN</a>
              </div>
            </div>
            <div>
              <h5 style={{ color: 'var(--clr-gold)', marginBottom: '14px', fontSize: '0.95rem', textTransform: 'uppercase' }}>Project Explorer</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <Link href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Overview</Link>
                <Link href="/pricing" style={{ color: '#aaa', textDecoration: 'none' }}>Price List &amp; Cost Sheet</Link>
                <Link href="/floor-plans" style={{ color: '#aaa', textDecoration: 'none' }}>Floor Plans (2.25 &amp; 3.25 BHK)</Link>
                <Link href="/location" style={{ color: '#aaa', textDecoration: 'none' }}>Location &amp; Hinjewadi Route</Link>
                <Link href="/amenities" style={{ color: '#aaa', textDecoration: 'none' }}>40+ Luxury Amenities</Link>
                <Link href="/maharera" style={{ color: '#aaa', textDecoration: 'none' }}>MahaRERA P52100080336</Link>
              </div>
            </div>
            <div>
              <h5 style={{ color: 'var(--clr-gold)', marginBottom: '14px', fontSize: '0.95rem', textTransform: 'uppercase' }}>Knowledge Silos</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <Link href="/tathawade-vs-wakad" style={{ color: '#aaa', textDecoration: 'none' }}>Tathawade vs Wakad Analysis</Link>
                <Link href="/krisala-aventis-tathawade-construction-status" style={{ color: '#aaa', textDecoration: 'none' }}>Aluform Construction Status</Link>
                <Link href="/krisala-aventis-tathawade-investment-roi" style={{ color: '#aaa', textDecoration: 'none' }}>Investment ROI Analysis</Link>
                <Link href="/krisala-aventis-tathawade-vastu-compliance" style={{ color: '#aaa', textDecoration: 'none' }}>Vastu Compliance</Link>
                <Link href="/krisala-aventis-tathawade-brochure-download" style={{ color: '#aaa', textDecoration: 'none' }}>Download Official Brochure</Link>
              </div>
            </div>
            <div>
              <h5 style={{ color: 'var(--clr-gold)', marginBottom: '14px', fontSize: '0.95rem', textTransform: 'uppercase' }}>Official Location &amp; Connect</h5>
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '10px', lineHeight: 1.5 }}>
                Krisala Aventis Sales Experience Center, Beside Shakai Circle, Mumbai-Pune Highway, Tathawade, Pune 411033
              </p>
              <a href="https://maps.app.goo.gl/TathawadeLocation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-gold)', fontWeight: 600, display: 'block', marginBottom: '12px', fontSize: '0.85rem', textDecoration: 'none' }}>
                📍 Get Directions on Google Maps →
              </a>
              <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20visited%20krisalaventis.in%20and%20would%20like%20to%20know%20more%20about%20Krisala%20Aventis%20Tathawade." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 16px', background: '#25D366', color: '#fff', borderRadius: '20px', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
                💬 WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#666', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
            <p>© 2026 Krisala Legacy Pune. All rights reserved. MahaRERA Registration: P52100080336 | <Link href="/sitemap.xml" style={{ color: 'var(--clr-gold)', textDecoration: 'none' }}>XML Sitemap</Link></p>
          </div>
        </div>
      </footer>
    </>
  );
}
