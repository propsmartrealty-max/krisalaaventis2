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
    default: "Krisala Aventis Tathawade™ — Official Website | 2 & 3 BHK from ₹85L*",
    template: "%s",
  },
  description: "Official Website for Krisala Aventis Tathawade by Krisala Legacy. Ultra-luxury 2.25 & 3.25 BHK Smart Study homes from ₹85L* near Hinjewadi Phase 1 & Wakad. Download 2026 Price List, Floor Plans & Instant VIP Pass. MahaRERA: P52100080336.",
  keywords: [
    "Krisala",
    "Krisala Aventis",
    "Krisala Aventis Tathawade",
    "Krisala Tathawade",
    "Krisala Pune",
    "Krisala Legacy",
    "Krisala Legacy Pune",
    "Krisala Developers",
    "Krisala Builders",
    "Krisala Group Pune",
    "Krisala Group",
    "Krisala Aventis Price",
    "Krisala Aventis Price List",
    "Krisala Aventis Tathawade Price",
    "Krisala Aventis Cost Sheet",
    "Krisala Aventis Floor Plans",
    "Krisala Aventis 2 BHK",
    "Krisala Aventis 2.25 BHK",
    "Krisala Aventis 3 BHK",
    "Krisala Aventis 3.25 BHK",
    "Krisala Aventis Brochure",
    "Krisala Aventis Brochure PDF",
    "Krisala Aventis Location",
    "Krisala Aventis Address",
    "Krisala Aventis MahaRERA",
    "Krisala Aventis Possession Date",
    "Krisala Aventis Construction Status",
    "Krisala Aventis Reviews",
    "Krisala Aventis Contact Number",
    "Krisala 41 Cosmo",
    "Krisala 41 Luxovert",
    "Krisala 41 Magia",
    "Krisala 41 Zillenia",
    "Krisala Projects in Tathawade",
    "Krisala Projects Pune",
    "2.25 BHK Flats in Tathawade",
    "3.25 BHK Flats in Tathawade",
    "Flats near Hinjewadi Phase 1",
    "Flats in Tathawade Pune",
    "MahaRERA P52100080336"
  ],
  authors: [{ name: "Krisala Legacy", url: BASE_URL }],
  creator: "Krisala Legacy",
  publisher: "Krisala Legacy",
  category: "Real Estate",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    title: "Krisala Aventis Tathawade™ — Official Website | 2 & 3 BHK from ₹85L*",
    description: "Official Website for Krisala Aventis Tathawade by Krisala Legacy. Ultra-luxury 2.25 & 3.25 BHK Smart Study homes from ₹85L* near Hinjewadi Phase 1 & Wakad. MahaRERA P52100080336.",
    url: BASE_URL,
    siteName: "Krisala Aventis Tathawade",
    images: [
      {
        url: `${BASE_URL}/assets/images/hero.webp`,
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
    title: "Krisala Aventis Tathawade™ — Official Website | 2 & 3 BHK from ₹85L*",
    description: "Official Website for Krisala Aventis Tathawade by Krisala Legacy. Ultra-luxury 2.25 & 3.25 BHK Smart Study homes from ₹85L*. MahaRERA P52100080336.",
    images: [`${BASE_URL}/assets/images/hero.webp`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "HMzV9DNm0y-PepD-H3BpgrmZ2RshicvMwZ0V-Q8yBF4",
    other: {
      "msvalidate.0": "2f5a8b79d63c4e10b2f18394a7d65b2f",
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Tathawade, Pune, PCMC, Maharashtra",
    "geo.position": "18.6314375;73.7462656",
    "ICBM": "18.6314375, 73.7462656",
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
      "@id": "https://krisalaventis.in/organization",
      "name": "Krisala Legacy",
      "alternateName": [
        "Krisala",
        "Krisala Developers",
        "Krisala Group",
        "Krisala Group Pune",
        "Krisala Builders",
        "Krisala Legacy Pune",
        "Krisala Builders Pune",
        "Krisala Construction"
      ],
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
        "latitude": 18.6314375,
        "longitude": 73.7462656
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Tathawade, Pune",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q7688047",
            "https://en.wikipedia.org/wiki/Tathawade"
          ]
        },
        {
          "@type": "Place",
          "name": "Wakad, Pune",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q7961129",
            "https://en.wikipedia.org/wiki/Wakad"
          ]
        },
        {
          "@type": "Place",
          "name": "Hinjewadi Phase 1, Pune",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q11086208",
            "https://en.wikipedia.org/wiki/Hinjawadi"
          ]
        },
        {
          "@type": "Place",
          "name": "Pimpri Chinchwad, PCMC",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1025595",
            "https://en.wikipedia.org/wiki/Pimpri-Chinchwad"
          ]
        },
        {
          "@type": "Place",
          "name": "Pune, Maharashtra",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1538",
            "https://en.wikipedia.org/wiki/Pune"
          ]
        },
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
        { "@type": "Place", "name": "Pimple Saudagar, Pune" },
        { "@type": "Place", "name": "Pimple Nilakh, Pune" },
        { "@type": "Place", "name": "Moshi, PCMC" },
        { "@type": "Place", "name": "Kiwale, PCMC" },
        { "@type": "Place", "name": "Kharadi, Pune" },
        { "@type": "Place", "name": "Viman Nagar, Pune" },
        { "@type": "Place", "name": "Hadapsar, Pune" },
        { "@type": "Place", "name": "Kothrud, Pune" },
        { "@type": "Place", "name": "West Pune" }
      ],
      "hasMap": "https://www.google.com/maps/place/Krisala+Aventis/@18.6314375,73.7462656,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb001eb0d45f:0x7536287cc8523825!8m2!3d18.6314375!4d73.7462656!16s%2Fg%2F11ygjwzygv",
      "knowsAbout": [
        "Krisala",
        "Krisala Aventis",
        "Krisala Aventis Tathawade",
        "Krisala Tathawade",
        "Krisala Pune",
        "Krisala Legacy",
        "Krisala Legacy Pune",
        "Krisala Developers",
        "Krisala Builders",
        "Krisala Group Pune",
        "Krisala Group",
        "Krisala Aventis Price",
        "Krisala Aventis Cost Sheet",
        "Krisala Aventis Floor Plans",
        "Krisala Aventis Brochure",
        "Krisala Aventis Location",
        "Krisala Aventis Address",
        "Krisala Aventis MahaRERA",
        "Krisala Aventis Reviews",
        "Krisala Aventis Possession Date",
        "Krisala Aventis Construction Status",
        "Krisala Projects in Tathawade",
        "Krisala Projects Pune",
        "Krisala 41 Cosmo",
        "Krisala 41 Luxovert",
        "Krisala 41 Magia",
        "Krisala 41 Zillenia",
        "2.25 BHK Flats in Tathawade",
        "3.25 BHK Luxury Apartments Pune",
        "Smart Study Real Estate Concept",
        "Hinjewadi Phase 1 IT Park Real Estate",
        "MahaRERA P52100080336 Verification",
        "Wakad Tathawade Property Investment"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Krisala+Aventis/@18.6314375,73.7462656,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb001eb0d45f:0x7536287cc8523825!8m2!3d18.6314375!4d73.7462656!16s%2Fg%2F11ygjwzygv",
        "https://www.facebook.com/KrisalaLegacy",
        "https://www.instagram.com/krisala_legacy",
        "https://www.linkedin.com/company/krisala-legacy"
      ]
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://krisalaventis.in/apartment-complex",
      "name": "Krisala Aventis Tathawade",
      "alternateName": [
        "Krisala Aventis",
        "Krisala Tathawade",
        "Krisala Aventis Pune",
        "Krisala Legacy Tathawade",
        "Krisala Aventis Project",
        "Krisala New Launch Tathawade",
        "Krisala Aventis Beside Shakai",
        "Krisala Luxury Residences"
      ],
      "description": "Ultra-luxury residential community featuring 2.25 and 3.25 BHK Smart Study apartments in Tathawade, Pune by Krisala Legacy. MahaRERA P52100080336.",
      "url": "https://krisalaventis.in",
      "hasMap": "https://www.google.com/maps/place/Krisala+Aventis/@18.6314375,73.7462656,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb001eb0d45f:0x7536287cc8523825!8m2!3d18.6314375!4d73.7462656!16s%2Fg%2F11ygjwzygv",
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
        "latitude": 18.6314375,
        "longitude": 73.7462656
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
      ],
      "containsPlace": [
        {
          "@type": "FloorPlan",
          "@id": "https://krisalaventis.in/#floorplan-2bhk",
          "name": "2.25 BHK Smart Study Layout",
          "numberOfRooms": 3,
          "numberOfBedrooms": 2,
          "numberOfBathroomsTotal": 2,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 839,
            "unitCode": "FTK"
          },
          "image": "https://krisalaventis.in/assets/images/floorplan-2bhk.webp",
          "offers": {
            "@type": "Offer",
            "price": "8500000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31"
          }
        },
        {
          "@type": "FloorPlan",
          "@id": "https://krisalaventis.in/#floorplan-3bhk",
          "name": "3.25 BHK Executive Suite Layout",
          "numberOfRooms": 4,
          "numberOfBedrooms": 3,
          "numberOfBathroomsTotal": 3,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 1116,
            "unitCode": "FTK"
          },
          "image": "https://krisalaventis.in/assets/images/floorplan-3bhk.webp",
          "offers": {
            "@type": "Offer",
            "price": "11500000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31"
          }
        }
      ]
    },
    {
      "@type": "RealEstateListing",
      "@id": "https://krisalaventis.in/#real-estate-listing",
      "name": "Krisala Aventis Tathawade Residences",
      "datePosted": "2026-01-01",
      "url": "https://krisalaventis.in",
      "about": {
        "@id": "https://krisalaventis.in/apartment-complex"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "8500000",
        "highPrice": "15000000",
        "offerCount": "400"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://krisalaventis.in/krisala-projects-portfolio",
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
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Krisala 41 Cosmo Tathawade",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Krisala 41 Estera Punawale",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Krisala 41 Zillenia Punawale",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Krisala 41 Magia Tathawade",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Krisala 41 Presidency Tower Pune",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Krisala 41 Evok Ravet",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Krisala 41 Platinium Marunji",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Krisala 41 Zircon Tathawade",
          "url": "https://krisalaventis.in"
        }
      ]
    },
    {
      "@type": "Accommodation",
      "@id": "https://krisalaventis.in/apartment-2bhk",
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
        "@id": "https://krisalaventis.in/apartment-complex"
      },
      "offers": {
        "@type": "Offer",
        "price": "8500000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2027-12-31"
      }
    },
    {
      "@type": "Accommodation",
      "@id": "https://krisalaventis.in/apartment-3bhk",
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
        "@id": "https://krisalaventis.in/apartment-complex"
      },
      "offers": {
        "@type": "Offer",
        "price": "11500000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2027-12-31"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://krisalaventis.in/howto-booking",
      "name": "How to Book a Smart Study Flat at Krisala Aventis Tathawade with Pre-Launch Benefits",
      "description": "Step-by-step verified procedure to reserve your 2.25 BHK or 3.25 BHK flat at Krisala Aventis Tathawade with special bank subvention rates.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Explore Floor Plans & Configurations",
          "text": "Select your ideal layout (2.25 BHK 839 sq.ft or 3.25 BHK 1116 sq.ft) featuring dedicated +0.25 Smart Study spaces.",
          "url": "https://krisalaventis.in/floor-plans"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Calculate Monthly EMI & Government Charges",
          "text": "Use the built-in Smart EMI & PCMC Stamp Duty Calculators to estimate your exact monthly mortgage and government levies.",
          "url": "https://krisalaventis.in/pricing"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Official VIP Priority Pass",
          "text": "Submit your enquiry form to unlock a digital QR Priority Pass guaranteeing VIP site tour and spot-booking discounts.",
          "url": "https://krisalaventis.in"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Visit Tathawade Site Office & Lock Pricing",
          "text": "Visit the sales office beside Shakai, Mumbai-Pune Highway, Tathawade to complete token booking and lock launch pricing.",
          "url": "https://krisalaventis.in/location"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://krisalaventis.in/video-tour",
      "name": "Krisala Aventis Tathawade 3D Virtual Drone & Architecture Tour",
      "description": "Official 3D architectural visualization and drone elevation tour of Krisala Aventis luxury high-rise towers in Tathawade, Pune.",
      "thumbnailUrl": [
        "https://krisalaventis.in/assets/images/hero.webp"
      ],
      "uploadDate": "2026-04-01T08:00:00+05:30",
      "duration": "PT3M45S",
      "contentUrl": "https://krisalaventis.in/assets/videos/walkthrough.mp4",
      "embedUrl": "https://krisalaventis.in"
    },
    {
      "@type": "FinancialProduct",
      "@id": "https://krisalaventis.in/home-loan",
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
      "@id": "https://krisalaventis.in/special-announcement",
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
      "@id": "https://krisalaventis.in/website",
      "url": "https://krisalaventis.in",
      "name": "Krisala Aventis Tathawade",
      "alternateName": [
        "Krisala Aventis",
        "Krisala Aventis Pune",
        "Krisala Aventis Official Website",
        "Krisala Legacy"
      ],
      "publisher": {
        "@id": "https://krisalaventis.in/organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://krisalaventis.in/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://krisalaventis.in/#site-navigation",
      "name": "Krisala Aventis Sitelinks Navigation",
      "hasPart": [
        {
          "@type": "SiteNavigationElement",
          "name": "Pricing & Cost Sheet",
          "url": "https://krisalaventis.in/pricing",
          "description": "All-inclusive price lists, payment schedules, and cost sheet breakdowns."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Floor Plans",
          "url": "https://krisalaventis.in/floor-plans",
          "description": "2.25 & 3.25 BHK Smart Study architectural layouts and dimensions."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Location & Connectivity",
          "url": "https://krisalaventis.in/location",
          "description": "Transit index to Hinjewadi Phase 1, Wakad, and Mumbai-Pune Expressway."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "40+ Amenities",
          "url": "https://krisalaventis.in/amenities",
          "description": "Podium rooftop infinity pool, gym, co-working club, and sports zones."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "MahaRERA Registration",
          "url": "https://krisalaventis.in/maharera",
          "description": "Official MahaRERA P52100080336 legal approvals and title verification."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Tathawade vs Wakad",
          "url": "https://krisalaventis.in/tathawade-vs-wakad",
          "description": "Comparative micro-market real estate analysis and ROI comparison."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Connectivity Hub",
          "url": "https://krisalaventis.in/near",
          "description": "Directory of proximity and transit routes in West Pune."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Real Estate Market Trends",
          "url": "https://krisalaventis.in/market",
          "description": "Tathawade appreciation index, rental yields, and metro infrastructure."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Privacy Policy",
          "url": "https://krisalaventis.in/privacy-policy",
          "description": "Personal data protection terms and DPDP Act 2023 compliance policy."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Terms & Conditions",
          "url": "https://krisalaventis.in/terms-and-conditions",
          "description": "Official terms of service, indicative pricing, and booking terms."
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Legal Disclaimer",
          "url": "https://krisalaventis.in/disclaimer",
          "description": "MahaRERA P52100080336 statutory disclosures and artist impression caveats."
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://krisalaventis.in/#webpage",
      "url": "https://krisalaventis.in",
      "name": "Krisala Aventis Tathawade™ — Official Website | 2 & 3 BHK from ₹85L*",
      "description": "Official Website for Krisala Aventis Tathawade by Krisala Legacy. Ultra-luxury 2.25 & 3.25 BHK Smart Study homes from ₹85L* near Hinjewadi Phase 1 & Wakad. Download 2026 Price List, Floor Plans & Instant VIP Pass. MahaRERA: P52100080336.",
      "isPartOf": {
        "@id": "https://krisalaventis.in/website"
      },
      "about": {
        "@id": "https://krisalaventis.in/apartment-complex"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".h1-subtitle",
          ".hero-desc",
          ".lead-text",
          ".body-text",
          "#ai-key-facts",
          ".highlights-table",
          ".faq-expansive"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://krisalaventis.in/breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pune Real Estate",
          "item": "https://krisalaventis.in"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tathawade Flats",
          "item": "https://krisalaventis.in/location"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Krisala Aventis Tathawade",
          "item": "https://krisalaventis.in"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://krisalaventis.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the current construction status of Krisala Aventis Tathawade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The construction is progressing at a high velocity using Aluform technology. Phase 1 (Towers A & B) RCC work is in advanced stages, while foundation work for Phase 2 is underway. Expected possession starts from Dec 2026."
          }
        },
        {
          "@type": "Question",
          "name": "How far is Krisala Aventis Tathawade from Hinjewadi IT Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The project is strategically located just 10 minutes (approx. 4.5 KM) from Hinjewadi Phase 1, making it the ideal choice for IT professionals seeking a work-life balance."
          }
        },
        {
          "@type": "Question",
          "name": "What are the unique configurations offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2.25 BHK and 3.25 BHK configurations. The '.25' refers to an additional versatile study/office room, perfect for modern hybrid work cultures."
          }
        },
        {
          "@type": "Question",
          "name": "Is Krisala Aventis Tathawade RERA registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the project is fully compliant with MahaRERA regulations. The registration number is P52100080336. All documents are available at the site office for verification."
          }
        },
        {
          "@type": "Question",
          "name": "What global brands are used in construction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use premium global brands including Kohler/Jaquar for CP fittings, Schneider/Legrand for electricals, and Otis/Schindler for high-speed elevators."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any schools near the project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tathawade is an educational hub. Schools like Akshara International, Lotus Business School, and JSPM University are within a 2-5 min radius."
          }
        },
        {
          "@type": "Question",
          "name": "What is the price of 2.25 BHK and 3.25 BHK in Krisala Aventis Tathawade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krisala Aventis Tathawade price starts from ₹85 Lakh* onwards for 2.25 BHK Smart Study homes (839 sq.ft carpet) and ₹1.15 Cr* onwards for 3.25 BHK luxury residences (1116 sq.ft carpet). Contact official sales at +917744009295 for the latest all-inclusive cost sheet and pre-launch pricing."
          }
        },
        {
          "@type": "Question",
          "name": "How to download the official Krisala Aventis Tathawade brochure PDF and floor plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can download the official Krisala Aventis Tathawade e-brochure, floor plan layouts, master plan, and cost sheet instantly by submitting the VIP enquiry form on https://krisalaventis.in or by messaging our official sales concierge on WhatsApp at +917744009295."
          }
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://krisalaventis.in/#article",
      "headline": "Krisala Aventis Tathawade — Official 2 & 3 BHK New Launch 2026 | From ₹85L*",
      "description": "Complete official guide to Krisala Aventis Tathawade by Krisala Legacy. Ultra-luxury 2.25 BHK (839 sq.ft, ₹85L*) and 3.25 BHK (1116 sq.ft, ₹1.15Cr*) Smart Study apartments in West Pune. MahaRERA P52100080336. 8 min to Hinjewadi Phase 1 IT Park.",
      "image": "https://krisalaventis.in/assets/images/hero.webp",
      "datePublished": "2026-04-01T00:00:00+05:30",
      "dateModified": "2026-11-25T00:00:00+05:30",
      "author": {
        "@type": "Organization",
        "@id": "https://krisalaventis.in/organization",
        "name": "Krisala Legacy"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://krisalaventis.in/organization",
        "name": "Krisala Legacy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://krisalaventis.in/assets/images/logo.jpg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://krisalaventis.in/#webpage"
      },
      "about": {
        "@id": "https://krisalaventis.in/apartment-complex"
      },
      "keywords": "Krisala Aventis Tathawade, 2 BHK Tathawade, 3 BHK Tathawade, flats near Hinjewadi, Krisala Legacy, MahaRERA P52100080336, Tathawade new launch 2026, Smart Study apartment Pune",
      "inLanguage": "en-IN",
      "isAccessibleForFree": true,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-desc", "#ai-key-facts", ".highlights-table", ".faq-expansive", ".h1-subtitle"]
      }
    }
  ]
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--ribbon-height:38px;--clr-obsidian:hsl(222,18%,7%);--clr-gold:hsl(42,72%,56%);}@media(max-width:768px){:root{--ribbon-height:52px;}}#stickyRibbon{min-height:var(--ribbon-height,38px);contain:layout;}#mainNav{min-height:50px;contain:layout;}#hero{min-height:100vh;contain:layout;}#hero .hero-content{opacity:1!important;transform:none!important;animation:none!important;}`,
          }}
        />
        <link rel="alternate" type="text/plain" href="https://krisalaventis.in/llms.txt" title="LLM Knowledge Source" />
        <link rel="alternate" type="text/plain" href="https://krisalaventis.in/llms-full.txt" title="LLM Full Ground Truth Manual" />
        <link rel="alternate" type="application/json" href="https://krisalaventis.in/ai-knowledge.json" title="AI Entity Knowledge Graph" />
        <link rel="alternate" type="application/json" href="https://krisalaventis.in/.well-known/ai-plugin.json" title="AI Plugin Manifest" />
        <meta name="citation_title" content="Krisala Aventis Tathawade — Official Website | 2 & 3 BHK from ₹85L*" />
        <meta name="citation_author" content="Krisala Legacy" />
        <meta name="citation_public_url" content="https://krisalaventis.in" />
        <meta name="citation_language" content="en-IN" />
        <meta name="article:published_time" content="2026-04-01T00:00:00+05:30" />
        <meta name="article:modified_time" content="2026-11-25T00:00:00+05:30" />
        <meta name="article:author" content="Krisala Legacy" />
        <meta name="article:section" content="Real Estate" />
        <meta name="article:tag" content="Krisala Aventis Tathawade, 2 BHK Pune, Hinjewadi, MahaRERA P52100080336" />
        <meta name="dc.title" content="Krisala Aventis Tathawade — Official Website" />
        <meta name="dc.creator" content="Krisala Legacy" />
        <meta name="dc.subject" content="Real Estate, Residential Apartments, Pune, Tathawade, Hinjewadi" />
        <meta name="dc.identifier" content="https://krisalaventis.in" />
        <meta name="dc.language" content="en-IN" />
        <link rel="me" href="https://www.google.com/maps/place/Krisala+Aventis/@18.6314375,73.7462656" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted',
  'functionality_storage': 'granted',
  'personalization_storage': 'granted',
  'security_storage': 'granted',
  'wait_for_update': 500
});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(masterSchema),
          }}
        />
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                    send_page_view: true
                  });
                `,
              }}
            />
          </>
        )}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/images/logo.jpg" />
        <link rel="preload" as="image" href="/assets/images/hero-mobile.webp" media="(max-width: 640px)" fetchPriority="high" type="image/webp" />
        <link rel="preload" as="image" href="/assets/images/hero.webp" media="(min-width: 641px)" fetchPriority="high" type="image/webp" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "list",
                  urls: [
                    "/pricing",
                    "/floor-plans",
                    "/location",
                    "/amenities",
                    "/maharera",
                    "/tathawade-vs-wakad",
                    "/near",
                    "/price",
                    "/guide",
                    "/market",
                    "/compare",
                    "/feature",
                    "/blog",
                    "/invest",
                    "/privacy-policy",
                    "/terms-and-conditions",
                    "/disclaimer"
                  ],
                  eagerness: "moderate"
                }
              ],
              prefetch: [
                {
                  source: "document",
                  where: {
                    and: [
                      { href_matches: "/*" },
                      { not: { href_matches: "/api/*" } }
                    ]
                  },
                  eagerness: "conservative"
                }
              ]
            })
          }}
        />
        <meta name="theme-color" content="#caa350" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="alternate" type="application/rss+xml" title="Krisala Aventis Real Estate Syndication Feed" href="https://krisalaventis.in/feed.xml" />
        <link rel="alternate" type="application/rss+xml" title="Krisala Aventis RSS 2.0" href="https://krisalaventis.in/rss.xml" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
      </head>
      <body suppressHydrationWarning className={outfit.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <Script src="/assets/js/script.min.js?v=27" strategy="afterInteractive" />
        <Script src="/assets/js/cinematic.min.js?v=27" strategy="lazyOnload" />
      </body>
    </html>
  );
}
