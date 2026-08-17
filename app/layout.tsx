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
  title: {
    default: "Krisala Aventis Tathawade | 2.25 & 3.25 BHK Luxury Flats Pune",
    template: "%s | Krisala Aventis Tathawade",
  },
  description: "Krisala Aventis Tathawade — Official New Launch by Krisala Legacy. Ultra-luxury 2.25 & 3.25 BHK Smart Study homes in West Pune near Hinjewadi Phase 1 & Wakad. Get floor plans, price list & MahaRERA P52100080336 details.",
  keywords: [
    "Krisala Aventis",
    "Krisala Aventis Tathawade",
    "Krisala Tathawade",
    "Krisala Developers Pune",
    "Krisala Legacy Projects",
    "Krisala New Launch Tathawade",
    "Krisala Luxovert Tathawade",
    "Krisala 41 Cosmo Tathawade",
    "Krisala 41 Estera Punawale",
    "Krisala 41 Zircon Tathawade",
    "Krisala 41 Evok Ravet",
    "Krisala 41 Platinium Marunji",
    "Krisala 41 Zillenia Punawale",
    "Krisala 41 Magia Tathawade",
    "Krisala 41 Presidency Pune",
    "Krisala 41 Shadow Tathawade",
    "Krisala 41 Elite Wakad",
    "Krisala 41 Boulevard Punawale",
    "Krisala 41 Octave Hinjewadi",
    "2.25 BHK in Tathawade",
    "3.25 BHK in Tathawade",
    "2 BHK Flats in Tathawade",
    "3 BHK Luxury Flats in Tathawade",
    "Smart Study Homes Tathawade",
    "Flats in Tathawade Pune",
    "Flats in Wakad Pune",
    "Flats near Hinjewadi IT Park Phase 1",
    "Flats near Hinjewadi Phase 2",
    "Flats near Hinjewadi Phase 3",
    "Flats in Punawale Pune",
    "Flats in Ravet Pune",
    "Flats in Marunji Hinjewadi",
    "Flats in Mahalunge Pune",
    "Flats in Baner Pune",
    "Flats in Balewadi High Street",
    "Flats in Sus Pashan Pune",
    "Flats in Bavdhan Pune",
    "Flats in Aundh Pune",
    "Flats in Pimpri Chinchwad PCMC",
    "Flats in Pimple Saudagar",
    "Flats in Pimple Nilakh",
    "Flats in Kiwale PCMC",
    "Flats in Moshi PCMC",
    "Flats in Kharadi IT Hub",
    "Flats in Viman Nagar",
    "Flats in Magarpatta Hadapsar",
    "Flats in Kothrud Pune",
    "Pune Real Estate 2026",
    "New Launch Projects in Pune 2026",
    "Under Construction Flats in Pune",
    "Pre Launch Property in Pune",
    "RERA Approved Projects Pune",
    "Pune Metro Line 3 Property Investment",
    "NRI Real Estate Investment Pune",
    "Top Real Estate Developers in Pune",
    "MahaRERA P52100080336"
  ],
  authors: [{ name: "Krisala Legacy", url: BASE_URL }],
  creator: "Krisala Legacy",
  publisher: "Krisala Legacy",
  category: "Real Estate",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Krisala Aventis Tathawade | Ultra-Premium 2.25 & 3.25 BHK Flats in Pune",
    description: "Official portal for Krisala Aventis Tathawade by Krisala Legacy. Premium smart-study homes, 40+ lifestyle amenities, near Hinjewadi IT Park & Wakad.",
    url: BASE_URL,
    siteName: "Krisala Aventis Tathawade",
    images: [
      {
        url: "/assets/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Krisala Aventis Tathawade Elevation & Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisala Aventis Tathawade | Official Portal",
    description: "Discover luxury 2.25 & 3.25 BHK Smart Study homes in Tathawade, Pune by Krisala Legacy.",
    images: ["/assets/images/hero.webp"],
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
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune, Tathawade",
    "geo.position": "18.6298;73.7560",
    "ICBM": "18.6298, 73.7560",
  },
};

const masterSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://krisalaventis.in/#organization",
      "name": "Krisala Legacy",
      "alternateName": ["Krisala Developers", "Krisala Group Pune", "Krisala Builders"],
      "url": "https://krisalaventis.in",
      "logo": "https://krisalaventis.in/assets/images/logo.jpg",
      "image": "https://krisalaventis.in/assets/images/hero.webp",
      "telephone": "+917744009295",
      "priceRange": "₹85 Lakh - ₹1.50 Crore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beside Shakai, Mumbai-Pune-Bangalore Highway, Tathawade",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.6298,
        "longitude": 73.7560
      },
      "areaServed": [
        { "@type": "Place", "name": "Tathawade, Pune" },
        { "@type": "Place", "name": "Wakad, Pune" },
        { "@type": "Place", "name": "Hinjewadi Phase 1, Pune" },
        { "@type": "Place", "name": "Hinjewadi Phase 2, Pune" },
        { "@type": "Place", "name": "Hinjewadi Phase 3, Pune" },
        { "@type": "Place", "name": "Punawale, Pune" },
        { "@type": "Place", "name": "Ravet, Pune" },
        { "@type": "Place", "name": "Marunji, Pune" },
        { "@type": "Place", "name": "Mahalunge, Pune" },
        { "@type": "Place", "name": "Baner, Pune" },
        { "@type": "Place", "name": "Balewadi, Pune" },
        { "@type": "Place", "name": "Sus, Pune" },
        { "@type": "Place", "name": "Bavdhan, Pune" },
        { "@type": "Place", "name": "Aundh, Pune" },
        { "@type": "Place", "name": "Pimpri Chinchwad, PCMC" },
        { "@type": "Place", "name": "Pimple Saudagar, Pune" },
        { "@type": "Place", "name": "Pimple Nilakh, Pune" },
        { "@type": "Place", "name": "Moshi, PCMC" },
        { "@type": "Place", "name": "Kiwale, PCMC" },
        { "@type": "Place", "name": "Kharadi, Pune" },
        { "@type": "Place", "name": "Viman Nagar, Pune" },
        { "@type": "Place", "name": "Hadapsar, Pune" },
        { "@type": "Place", "name": "Kothrud, Pune" },
        { "@type": "Place", "name": "West Pune" },
        { "@type": "Place", "name": "Pune, Maharashtra" }
      ],
      "sameAs": [
        "https://www.facebook.com/KrisalaLegacy",
        "https://www.instagram.com/krisala_legacy",
        "https://www.linkedin.com/company/krisala-legacy"
      ]
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://krisalaventis.in/#apartment-complex",
      "name": "Krisala Aventis Tathawade",
      "description": "Ultra-luxury residential community featuring 2.25 and 3.25 BHK Smart Study apartments in Tathawade, Pune by Krisala Legacy. MahaRERA P52100080336.",
      "url": "https://krisalaventis.in",
      "telephone": "+917744009295",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beside Shakai Circle, Mumbai-Pune Expressway Service Road, Tathawade",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.6298,
        "longitude": 73.7560
      },
      "numberOfAccommodationUnits": 400,
      "numberOfBedrooms": "2 to 4",
      "petsAllowed": true,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Rooftop Podium Swimming Pool", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Aluform Construction Technology", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Indoor Gymnasium & Zumba Studio", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Smart Study Spaces in Every Unit", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Futsal Court & Net Cricket Area", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24x7 Digital Biometric Security", "value": true }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://krisalaventis.in/#krisala-projects-portfolio",
      "name": "Krisala Developers Portfolio Projects Pune",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Krisala Aventis Tathawade",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Krisala Luxovert Tathawade",
          "url": "https://krisalaventis.in/#related-projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Krisala 41 Cosmo Tathawade",
          "url": "https://krisalaventis.in/#related-projects"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Krisala 41 Estera Punawale",
          "url": "https://krisalaventis.in/#legacy"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Krisala 41 Zillenia Punawale",
          "url": "https://krisalaventis.in/#legacy"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Krisala 41 Magia Tathawade",
          "url": "https://krisalaventis.in/#legacy"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Krisala 41 Presidency Tower Pune",
          "url": "https://krisalaventis.in/#legacy"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Krisala 41 Evok Ravet",
          "url": "https://krisalaventis.in/#legacy"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Krisala 41 Platinium Marunji",
          "url": "https://krisalaventis.in/#legacy"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Krisala 41 Zircon Tathawade",
          "url": "https://krisalaventis.in/#legacy"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://krisalaventis.in/#website",
      "url": "https://krisalaventis.in",
      "name": "Krisala Aventis Tathawade",
      "publisher": {
        "@id": "https://krisalaventis.in/#organization"
      }
    }
  ]
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
            __html: JSON.stringify(masterSchema),
          }}
        />
        <link rel="stylesheet" href="/assets/css/style.min.css?v=10" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#caa350" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/js/script.min.js?v=10" strategy="afterInteractive" />
      </body>
    </html>
  );
}
