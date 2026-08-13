import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://krisalaventis.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Krisala Aventis | Premium 2 & 3 BHK Flats in Tathawade",
  description: "Krisala Aventis Tathawade — Exclusive pre-launch opportunity. Discover ultra-premium 2 & 3 BHK residences in West Pune. Get floor plans & pricing.",
  openGraph: {
    title: "Krisala Aventis | Ultra-Premium Residences in Tathawade",
    description: "Unlock the exclusive pre-launch pricing and floor plans for Krisala Aventis in Tathawade, Pune.",
    url: BASE_URL,
    siteName: "Krisala Aventis",
    images: [
      {
        url: "/assets/images/desktop-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Krisala Aventis Elevation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisala Aventis | Tathawade",
    description: "Unlock exclusive pre-launch access to Krisala Aventis.",
    images: ["/assets/images/desktop-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Krisala Aventis",
              "image": "https://krisalaventis.in/assets/images/hero.webp",
              "@id": "https://krisalaventis.in",
              "url": "https://krisalaventis.in",
              "telephone": "+917744009295",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mumbai-Pune-Bangalore Highway, Tathawade",
                "addressLocality": "Pune",
                "postalCode": "411033",
                "addressCountry": "IN"
              },
              "priceRange": "₹85 Lakh - ₹1.40 Crore"
            })
          }}
        />
        <link rel="stylesheet" href="/assets/css/style.min.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/js/script.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
