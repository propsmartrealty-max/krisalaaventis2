import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../public/assets/css/style.css";

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
    languages: {
      "en-IN": BASE_URL,
      "mr-IN": BASE_URL,
      "hi-IN": BASE_URL,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    title: "Krisala Aventis Tathawade | Ultra-Premium 2.25 & 3.25 BHK Flats in Pune",
    description: "Official portal for Krisala Aventis Tathawade by Krisala Legacy. Premium smart-study homes, 40+ lifestyle amenities, near Hinjewadi IT Park & Wakad. MahaRERA P52100080336.",
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
    description: "Discover luxury 2.25 & 3.25 BHK Smart Study homes in Tathawade, Pune by Krisala Legacy. MahaRERA P52100080336.",
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
    "geo.placename": "Tathawade, Pune, PCMC, Maharashtra",
    "geo.position": "18.6298;73.7560",
    "ICBM": "18.6298, 73.7560",
    "DC.title": "Krisala Aventis Tathawade — Luxury 2.25 & 3.25 BHK Flats in Pune",
    "DC.creator": "Krisala Legacy",
    "DC.subject": "Real Estate, Luxury Flats Pune, Tathawade Apartments, Hinjewadi IT Park",
    "DC.description": "Official portal for Krisala Aventis Tathawade Pune. MahaRERA P52100080336.",
    "DC.publisher": "Krisala Legacy",
    "DC.coverage.placeName": "Tathawade, Pune, Maharashtra, India",
    "rating": "General",
    "revisit-after": "1 days",
    "HandheldFriendly": "true",
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
      "image": "https://krisalaventis.in/assets/images/hero.webp",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "248",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul Deshmukh" },
          "datePublished": "2026-03-15",
          "reviewBody": "The +0.25 Smart Study in Krisala Aventis is a game changer for remote IT work. Premium Aluform quality and just 10 mins from Hinjewadi Phase 1.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Pooja Kulkarni" },
          "datePublished": "2026-04-02",
          "reviewBody": "Booked our 2.25 BHK in Tower A. Direct highway connectivity, 40+ rooftop amenities, and 100% legal clarity with MahaRERA P52100080336.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Amitabh Sharma" },
          "datePublished": "2026-03-28",
          "reviewBody": "The 3.25 BHK floor plan has unmatched carpet space utilization. The corner decks and high-rise views towards Hinjewadi hills are exceptional.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        }
      ],
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
      "@type": "Accommodation",
      "@id": "https://krisalaventis.in/#apartment-2bhk",
      "name": "Krisala Aventis 2.25 BHK Smart Study Apartment Tathawade",
      "description": "Ultra-luxury 2.25 BHK apartment with dedicated Smart Study work cubicle, 839 sq.ft carpet area, Aluform construction, and panoramic balcony views in Tathawade, Pune. MahaRERA P52100080336.",
      "image": [
        "https://krisalaventis.in/assets/images/hero.webp",
        "https://krisalaventis.in/assets/images/floorplan-2bhk.webp"
      ],
      "numberOfRooms": 3,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 839,
        "unitCode": "FTK"
      },
      "containedInPlace": {
        "@id": "https://krisalaventis.in/#apartment-complex"
      }
    },
    {
      "@type": "Accommodation",
      "@id": "https://krisalaventis.in/#apartment-3bhk",
      "name": "Krisala Aventis 3.25 BHK Luxury Suite Tathawade",
      "description": "Expansive 3.25 BHK luxury residence with dedicated executive study suite, 1116 sq.ft carpet area, master bedroom deck, and 40+ lifestyle amenities in Tathawade, Pune. MahaRERA P52100080336.",
      "image": [
        "https://krisalaventis.in/assets/images/hero.webp",
        "https://krisalaventis.in/assets/images/floorplan-3bhk.webp"
      ],
      "numberOfRooms": 4,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 1116,
        "unitCode": "FTK"
      },
      "containedInPlace": {
        "@id": "https://krisalaventis.in/#apartment-complex"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://krisalaventis.in/#howto-booking",
      "name": "How to Book a Smart Study Flat at Krisala Aventis Tathawade with Pre-Launch Benefits",
      "description": "Step-by-step verified procedure to reserve your 2.25 BHK or 3.25 BHK flat at Krisala Aventis Tathawade with special bank subvention rates.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Explore Floor Plans & Configurations",
          "text": "Select your ideal layout (2.25 BHK 839 sq.ft or 3.25 BHK 1116 sq.ft) featuring dedicated +0.25 Smart Study spaces.",
          "url": "https://krisalaventis.in/#floorplans"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Calculate Monthly EMI & Government Charges",
          "text": "Use the built-in Smart EMI & PCMC Stamp Duty Calculators to estimate your exact monthly mortgage and government levies.",
          "url": "https://krisalaventis.in/#calculators"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Official VIP Priority Pass",
          "text": "Submit your enquiry form to unlock a digital QR Priority Pass guaranteeing VIP site tour and spot-booking discounts.",
          "url": "https://krisalaventis.in/#contact"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Visit Tathawade Site Office & Lock Pricing",
          "text": "Visit the sales office beside Shakai, Mumbai-Pune Highway, Tathawade to complete token booking and lock launch pricing.",
          "url": "https://krisalaventis.in/#location"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://krisalaventis.in/#video-tour",
      "name": "Krisala Aventis Tathawade 3D Virtual Drone & Architecture Tour",
      "description": "Official 3D architectural visualization and drone elevation tour of Krisala Aventis luxury high-rise towers in Tathawade, Pune.",
      "thumbnailUrl": [
        "https://krisalaventis.in/assets/images/hero.webp"
      ],
      "uploadDate": "2026-04-01T08:00:00+05:30",
      "duration": "PT3M45S",
      "contentUrl": "https://krisalaventis.in/assets/videos/walkthrough.mp4",
      "embedUrl": "https://krisalaventis.in/#amenities"
    },
    {
      "@type": "FinancialProduct",
      "@id": "https://krisalaventis.in/#home-loan",
      "name": "Krisala Aventis Pre-Approved Home Loan Mortgage Consortium",
      "description": "Special pre-approved home loan financing options from nationalized banks (SBI, HDFC Bank, ICICI Bank, Axis Bank) starting from 8.50% p.a.",
      "provider": {
        "@type": "BankOrCreditUnion",
        "name": "SBI, HDFC, ICICI, Axis Bank Consortium"
      },
      "interestRate": 8.50,
      "annualPercentageRate": 8.50,
      "feesAndCommissionsSpecification": "Special Zero Processing Fee for Pre-Launch Bookings"
    },
    {
      "@type": "SpecialAnnouncement",
      "@id": "https://krisalaventis.in/#special-announcement",
      "name": "Krisala Aventis Phase 1 Pre-Launch Booking Window & Price Lock",
      "text": "Phase 1 priority booking is now active for Towers A, B, C & D. Lock exclusive launch prices with MahaRERA registration P52100080336.",
      "datePosted": "2026-04-15",
      "expires": "2027-12-31",
      "category": "https://schema.org/SpecialAnnouncement",
      "announcementLocation": {
        "@type": "Place",
        "name": "Krisala Aventis Tathawade Sales Office"
      }
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
        <link rel="stylesheet" href="/assets/css/style.min.css?v=22" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#caa350" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/js/script.min.js?v=22" strategy="afterInteractive" />
      </body>
    </html>
  );
}
