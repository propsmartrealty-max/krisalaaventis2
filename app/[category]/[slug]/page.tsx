import data from "../../../data.json";
import nriData from "../../../data/global-nri-seo.json";
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

  return [...standardParams, ...nriParams];
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
    return { title: "Not Found" };
  }

  const url = `https://krisalaventis.in/${page.folder}/${page.url_slug.replace(".html", "")}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: url,
      images: [
        {
          url: "https://krisalaventis.in/assets/images/hero.webp",
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
    return <h1>404 - Page Not Found</h1>;
  }

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
      },
    ],
  };

  // Generate related links (randomly pick 4 for now, mimicking python script)
  const relatedPages = data.slice(0, 4);

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
      <header className="p-6 border-b border-gray-800">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldLight"
          >
            Krisala Aventis Tathawade
          </a>
          <div className="hidden md:flex gap-6">
            <a href="/" className="hover:text-goldLight transition-colors">
              Home
            </a>
            <a href="/#about" className="hover:text-goldLight transition-colors">
              About
            </a>
            <a href="/#floor-plans" className="hover:text-goldLight transition-colors">
              Floor Plans
            </a>
            <a
              href="/#contact"
              className="px-6 py-2 bg-gradient-to-r from-gold to-goldLight rounded-full font-medium hover:shadow-lg transition-all text-black"
            >
              Enquire Now
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto p-6 py-12" suppressHydrationWarning>
        <article className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm" suppressHydrationWarning>
          <div className="w-full h-64 md:h-96 relative overflow-hidden">
            <Image
              src="/assets/images/hero.webp"
              alt={page.title}
              title={page.h1}
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c11] to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-goldLight uppercase">
                {page.h1}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert prose-gold max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">{page.content}</p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 font-playfair">
                    Why Choose Krisala Aventis Tathawade?
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">✓ 40+ Premium Lifestyle Amenities</li>
                    <li className="flex items-center gap-3">✓ Prime Location in Tathawade</li>
                    <li className="flex items-center gap-3">
                      ✓ Unmatched Connectivity to Hinjewadi IT Hubs
                    </li>
                    <li className="flex items-center gap-3">
                      ✓ Advanced Aluform Construction Technology
                    </li>
                    <li className="flex items-center gap-3">✓ Smart Study Spaces in Every Home</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 font-playfair">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {page.faqs.map((faq: any, i: number) => (
                      <details key={i} className="group cursor-pointer">
                        <summary className="font-medium text-gray-200 hover:text-gold transition-colors list-none flex justify-between items-center">
                          {faq.q}
                          <span className="text-gold group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <p className="text-gray-400 mt-2 pl-4 border-l-2 border-gold/30">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-800 pt-8">
              <h3 className="text-xl font-bold mb-6 text-gold font-playfair">
                Explore More Related Searches
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedPages.map((rp: any, i: number) => (
                  <a
                    key={i}
                    href={`/${rp.folder}/${rp.url_slug.replace(".html", "")}`}
                    className="block p-4 bg-gray-900/40 rounded-lg border border-gray-800 hover:border-gold/50 hover:bg-gray-800/60 transition-all text-sm text-gray-300 hover:text-white truncate"
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

      <footer className="mt-12 p-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Krisala Legacy. All rights reserved. MahaRERA: P52100080336</p>
      </footer>
    </>
  );
}
