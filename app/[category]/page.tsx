import data from "../../data.json";
import nriData from "../../data/global-nri-seo.json";
import dominationData from "../../data/krisala-domination-seo.json";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const CATEGORIES: Record<string, {
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  badge: string;
  keywords: string;
}> = {
  near: {
    name: "Connectivity & Proximity Hub",
    headline: "Krisala Aventis Tathawade — Prime Strategic Connectivity",
    subheadline: "Unmatched Proximity to Hinjewadi IT Park Phase 1, 2 & 3, Mumbai-Pune Expressway, Wakad & Top Educational Institutions",
    description: "Explore connectivity intelligence, travel times, and location advantages of Krisala Aventis Tathawade. Situated right beside Shakai Circle, enjoy effortless commutes to Hinjewadi tech hubs, Phoenix Mall Wakad, and expressway transit.",
    badge: "📍 Zero-Commute Living",
    keywords: "flats near Hinjewadi Phase 1, Krisala Aventis connectivity, flats near Shakai Circle Tathawade, Wakad IT park proximity"
  },
  price: {
    name: "Pricing & Cost Sheet Intelligence",
    headline: "Krisala Aventis Tathawade — Official Pricing & Investment Value",
    subheadline: "Transparent Cost Sheets, All-Inclusive Price Breakdowns, Payment Schedules & High-ROI Property Investment",
    description: "Complete financial transparency for Krisala Aventis Tathawade 2.25 BHK and 3.25 BHK Smart Study residences. Access pre-launch pricing, floor-wise cost sheets, payment plans, and stamp duty estimates.",
    badge: "💰 High-ROI Value",
    keywords: "Krisala Aventis price, Krisala Aventis price list, 2 BHK price in Tathawade, 3 BHK cost sheet Pune, Krisala payment plan"
  },
  guide: {
    name: "Buyer & Homeowner Guides",
    headline: "Krisala Aventis Tathawade — Comprehensive Homebuyer Guide",
    subheadline: "Everything You Need to Know About Smart Study Layouts, MahaRERA P52100080336 Approvals & Legal Due Diligence",
    description: "Expert real estate intelligence and buyer advice for purchasing an apartment at Krisala Aventis Tathawade. Learn about home loans, construction milestones, MahaRERA compliance, and possession timelines.",
    badge: "📘 Official Buyer Guide",
    keywords: "Krisala Aventis buyer guide, MahaRERA P52100080336, Tathawade home loan, buying flat in Tathawade"
  },
  market: {
    name: "Tathawade Real Estate Market Intelligence",
    headline: "Tathawade & West Pune Real Estate Market Analysis",
    subheadline: "Micro-Market Capital Appreciation Index, Rental Yields, Metro Line 3 Infrastructure Growth & Trends",
    description: "In-depth property market intelligence for Tathawade and Wakad. Discover why Tathawade is Pune's fastest growing IT residential corridor, outperforming neighboring suburbs in capital gains and rental demand.",
    badge: "📊 Market Authority",
    keywords: "Tathawade real estate market, Pune property appreciation 2026, Tathawade rental yield, Hinjewadi housing trends"
  },
  compare: {
    name: "Micro-Market Comparison Matrix",
    headline: "Krisala Aventis vs West Pune Residential Projects",
    subheadline: "Objective Comparative Analysis: Tathawade vs Wakad, Baner, Hinjewadi, and Punawale",
    description: "Compare Krisala Aventis Tathawade with other leading residential projects across West Pune. Analyze price per square foot, carpet area efficiency, Aluform construction standards, and amenity offerings.",
    badge: "⚖️ Smart Comparison",
    keywords: "Krisala Aventis vs Wakad, Tathawade vs Baner flats, best flats in Tathawade, West Pune apartment comparison"
  },
  feature: {
    name: "Architectural Features & Specifications",
    headline: "Krisala Aventis — Master Architecture & Aluform Technology",
    subheadline: "Precision German Aluform Shuttering, Smart Study Workstations, 40+ Lifestyle Amenities & Eco Engineering",
    description: "Discover the architectural excellence of Krisala Aventis Tathawade. Built with 100% monolithic Aluform shuttering for earthquake resistance and leak-free plumbs, featuring 40+ curated podium and rooftop amenities.",
    badge: "🏗️ Aluform Engineering",
    keywords: "Aluform construction Pune, Krisala Aventis amenities, smart study homes Tathawade, rooftop pool flats Pune"
  },
  blog: {
    name: "Real Estate Insights & Editorial",
    headline: "Krisala Aventis Editorial — West Pune Lifestyle & Real Estate",
    subheadline: "Lifestyle Trends, Home Décor Ideas, Neighborhood Developments & Pune Infrastructure Updates",
    description: "Stay ahead with the latest news, real estate trends, and community updates from Krisala Legacy. Covering West Pune infrastructure, lifestyle, and luxury property ownership.",
    badge: "📰 Project News",
    keywords: "Krisala Aventis blog, Tathawade lifestyle, Pune real estate news, PCMC infrastructure updates"
  },
  invest: {
    name: "Global NRI & High-Yield Investment Hub",
    headline: "Krisala Aventis — High-Yield Property Investment & NRI Portal",
    subheadline: "Superior Rental Yields for Hinjewadi IT Professionals, Capital Appreciation & Repatriation Assistance",
    description: "Strategic investment portal for NRI and domestic investors looking for high rental yields and capital growth near Hinjewadi Phase 1. Complete end-to-end NRI advisory, remote booking, and rental assistance.",
    badge: "🌐 Global NRI Hub",
    keywords: "NRI investment in Pune, high rental yield Hinjewadi, Krisala Aventis NRI desk, Tathawade property ROI"
  }
};

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORIES[category];

  if (!meta) {
    return { title: "Not Found" };
  }

  const url = `https://krisalaventis.in/${category}`;

  return {
    title: `${meta.name} | Krisala Aventis Tathawade Official Portal`,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${meta.headline} | Krisala Legacy Pune`,
      description: meta.description,
      url: url,
      images: [
        {
          url: "https://krisalaventis.in/assets/images/hero.webp",
          width: 1200,
          height: 630,
          alt: `${meta.headline} — Krisala Aventis Tathawade`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.name} | Krisala Aventis Tathawade`,
      description: meta.description,
      images: ["https://krisalaventis.in/assets/images/hero.webp"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORIES[category];

  if (!meta) {
    notFound();
  }

  // Gather all articles in this category across datasets
  const allArticles = [...data, ...nriData, ...dominationData].filter(
    (item) => item.folder === category
  );

  const categoryUrl = `https://krisalaventis.in/${category}`;

  // Structured Data: CollectionPage & BreadcrumbList
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
        name: meta.name,
        item: categoryUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.headline,
    description: meta.description,
    url: categoryUrl,
    hasPart: allArticles.slice(0, 50).map((art) => ({
      "@type": "WebPage",
      name: art.title,
      url: `https://krisalaventis.in/${art.folder}/${art.url_slug.replace(".html", "")}`,
      description: art.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Luxury Navbar */}
      <nav className="pill-navbar" id="mainNav">
        <div className="nav-container">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/assets/images/logo.jpg" alt="Krisala Logo" style={{ height: '32px', width: 'auto', mixBlendMode: 'screen' }} />
            <span style={{ fontWeight: 300, letterSpacing: '2px', fontSize: '1.1rem', color: '#fff' }}>AVENTIS</span>
          </Link>
          <div className="nav-links" id="navLinks">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/location">Location</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/maharera" className="nav-link-secondary">MahaRERA</Link>
            <Link href="/tathawade-vs-wakad" className="nav-link-secondary">Tathawade vs Wakad</Link>
            <Link href="/pricing" className="cta-pill magnetic">Get Cost Sheet</Link>
          </div>
          <button className="hamburger" id="hamburger" aria-label="Toggle Navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 pt-28 pb-16" suppressHydrationWarning>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            </li>
            <li><span className="text-gray-600">/</span></li>
            <li className="text-gold font-medium" aria-current="page">
              {meta.name}
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="mb-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900/90 to-black border border-gold/20 shadow-2xl relative overflow-hidden">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            {meta.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight mb-4">
            {meta.headline}
          </h1>
          <p className="text-lg md:text-xl text-gold font-medium mb-4 max-w-3xl">
            {meta.subheadline}
          </p>
          <p className="text-gray-300 leading-relaxed max-w-4xl text-base md:text-lg">
            {meta.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-gold/20"
            >
              Unlock Priority Pricing →
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20am%20interested%20in%20Krisala%20Aventis%20Tathawade%20inventory%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              💬 WhatsApp Concierge
            </a>
          </div>
        </header>

        {/* Pillar Sub-Directory Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
            <div>
              <h2 className="text-2xl font-serif text-white">
                Featured Topical Intelligence ({allArticles.length} Guides)
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Curated articles and specifications covering the Krisala Aventis Tathawade ecosystem
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.slice(0, 60).map((art, idx) => (
              <article
                key={idx}
                className="group p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-gold/80 font-mono uppercase tracking-wider">
                    {art.folder.toUpperCase()} • RERA P52100080336
                  </span>
                  <h3 className="text-lg font-serif text-white group-hover:text-gold transition-colors mt-2 mb-3 line-clamp-2">
                    <Link href={`/${art.folder}/${art.url_slug.replace(".html", "")}`}>
                      {art.h1 || art.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-4">
                    {art.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Tathawade, Pune</span>
                  <Link
                    href={`/${art.folder}/${art.url_slug.replace(".html", "")}`}
                    className="text-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Category Cross-Links Silo Hub */}
        <section className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 mb-16">
          <h3 className="text-xl font-serif text-white mb-4">
            Explore All Krisala Aventis Knowledge Hubs
          </h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(CATEGORIES).map(([catKey, catMeta]) => (
              <Link
                key={catKey}
                href={`/${catKey}`}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  catKey === category
                    ? "bg-gold text-black font-bold shadow-md shadow-gold/20"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/50"
                }`}
              >
                {catMeta.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom VIP CTA Box */}
        <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gold/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              Exclusive Pre-Launch Window
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-white mt-2 mb-4">
              Schedule Your VIP Site Visit at Krisala Aventis
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Experience the 2.25 & 3.25 BHK Smart Study sample flats in person at Tathawade, Pune. Get spot-booking incentives and guaranteed price lock.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-black font-bold text-sm transition-all transform hover:scale-105 shadow-xl shadow-gold/20"
              >
                Download Cost Sheet & Floor Plans →
              </Link>
              <a
                href="tel:+917744009295"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all inline-flex items-center gap-2"
              >
                📞 Call +91 7744009295
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
