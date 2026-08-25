import data from "../../../data.json";
import nriData from "../../../data/global-nri-seo.json";
import dominationData from "../../../data/krisala-domination-seo.json";
import { Metadata } from "next";
import Image from "next/image";

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
    return <h1>404 - Page Not Found</h1>;
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
    "@type": "RealEstateListing",
    name: page.title,
    description: page.description,
    url: pageUrl,
    image: "https://krisalaventis.in/assets/images/hero.webp",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "8500000",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      seller: {
        "@type": "RealEstateAgent",
        name: "Krisala Legacy",
        telephone: "+917744009295",
        url: "https://krisalaventis.in"
      }
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
      <header className="p-6 border-b border-gray-800 bg-[#080a10]/80 backdrop-blur-md sticky top-0 z-50">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldLight flex items-center gap-2"
          >
            <span>KRISALA</span>
            <span className="text-white font-light">AVENTIS</span>
          </a>
          <div className="hidden md:flex gap-6 items-center">
            <a href="/" className="hover:text-goldLight transition-colors text-sm uppercase tracking-wider font-medium text-gray-300">
              Home
            </a>
            <a href="/krisala-aventis-tathawade-flats-near-hinjewadi" className="hover:text-goldLight transition-colors text-sm uppercase tracking-wider font-medium text-gray-300">
              Overview
            </a>
            <a href="/krisala-aventis-tathawade-2-bhk-flats" className="hover:text-goldLight transition-colors text-sm uppercase tracking-wider font-medium text-gray-300">
              Floor Plans
            </a>
            <a href="/krisala-aventis-tathawade-construction-status" className="hover:text-goldLight transition-colors text-sm uppercase tracking-wider font-medium text-gray-300">
              Towers & Status
            </a>
            <a href="/krisala-aventis-tathawade-market-growth-calculator" className="hover:text-goldLight transition-colors text-sm uppercase tracking-wider font-medium text-gray-300">
              EMI & ROI
            </a>
            <a href="/krisala-aventis-tathawade-connectivity-it-hubs" className="hover:text-goldLight transition-colors text-sm uppercase tracking-wider font-medium text-gray-300">
              Location
            </a>
            <a
              href="/krisala-aventis-tathawade-brochure-download"
              className="px-6 py-2 bg-gradient-to-r from-gold to-goldLight rounded-full font-bold hover:shadow-lg transition-all text-black text-sm"
            >
              Get Price List →
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto p-6 py-12" suppressHydrationWarning>
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

      <footer className="mt-12 p-8 border-t border-gray-800 text-center text-gray-500 text-sm bg-[#080a10]">
        <p>&copy; 2026 Krisala Legacy Pune. All rights reserved. MahaRERA Registration: P52100080336</p>
      </footer>
    </>
  );
}
