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
    "Krisala Aventis Price",
    "Krisala Aventis Price List",
    "Krisala Aventis Floor Plan",
    "Krisala Aventis Brochure",
    "Krisala Aventis Reviews",
    "Krisala Aventis Location",
    "Krisala Aventis Contact Number",
    "Krisala Aventis Booking",
    "Krisala Aventis Sample Flat Video",
    "Krisala Aventis Construction Status",
    "Krisala Aventis Possession Date",
    "Krisala Aventis Master Layout",
    "Krisala Aventis Cost Sheet",
    "Krisala Aventis RERA Number",
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
    "2.25 BHK Flats in Tathawade Pune",
    "3.25 BHK Luxury Flats in Tathawade Pune",
    "Smart Study Homes Tathawade",
    "Flats near Shakai Circle Tathawade",
    "Flats near Mumbai Pune Highway Tathawade",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "2f5a8b79d63c4e10b2f18394a7d65b2f",
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
        "latitude": 18.6314375,
        "longitude": 73.7462656
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
      "hasMap": "https://www.google.com/maps/place/Krisala+Aventis/@18.6314375,73.7462656,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb001eb0d45f:0x7536287cc8523825!8m2!3d18.6314375!4d73.7462656!16s%2Fg%2F11ygjwzygv",
      "knowsAbout": [
        "Krisala Aventis Tathawade",
        "Krisala Legacy Pune",
        "Krisala Developers Projects",
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
      "@type": "Product",
      "@id": "https://krisalaventis.in/#product-2bhk",
      "name": "Krisala Aventis 2.25 BHK Smart Study Flat Tathawade",
      "image": "https://krisalaventis.in/assets/images/floorplan-2bhk.webp",
      "description": "Premium 2.25 BHK luxury apartment with dedicated Smart Study work cubicle (839 sq.ft carpet area) at Krisala Aventis Tathawade, Pune near Hinjewadi Phase 1. MahaRERA P52100080336.",
      "brand": {
        "@type": "Brand",
        "name": "Krisala Legacy"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://krisalaventis.in",
        "priceCurrency": "INR",
        "price": "8500000",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://krisalaventis.in/organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "248"
      }
    },
    {
      "@type": "Product",
      "@id": "https://krisalaventis.in/#product-3bhk",
      "name": "Krisala Aventis 3.25 BHK Ultra Luxury Residence Tathawade",
      "image": "https://krisalaventis.in/assets/images/floorplan-3bhk.webp",
      "description": "Spacious 3.25 BHK ultra-luxury apartment with dedicated study suite (1116 sq.ft carpet area) at Krisala Aventis Tathawade, Pune. MahaRERA P52100080336.",
      "brand": {
        "@type": "Brand",
        "name": "Krisala Legacy"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://krisalaventis.in",
        "priceCurrency": "INR",
        "price": "11500000",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://krisalaventis.in/organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "248"
      }
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://krisalaventis.in/apartment-complex",
      "name": "Krisala Aventis Tathawade",
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
          "url": "https://krisalaventis.in/krisala-aventis-tathawade-2-bhk-flats"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Calculate Monthly EMI & Government Charges",
          "text": "Use the built-in Smart EMI & PCMC Stamp Duty Calculators to estimate your exact monthly mortgage and government levies.",
          "url": "https://krisalaventis.in/krisala-aventis-tathawade-market-growth-calculator"
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
          "url": "https://krisalaventis.in/krisala-aventis-tathawade-flats-near-hinjewadi"
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
      "@type": "FAQPage",
      "@id": "https://krisalaventis.in/faq",
      "mainEntity": [
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
          "name": "What is the MahaRERA registration number for Krisala Aventis Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The official MahaRERA Registration Number for Krisala Aventis Tathawade is P52100080336. The project is 100% clear with all legal approvals from PCMC and MahaRERA authority."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the exact location of Krisala Aventis Tathawade and distance to Hinjewadi Phase 1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krisala Aventis is strategically located beside Shakai Circle, along the Mumbai-Pune-Bangalore Highway Service Road in Tathawade, Pune 411033. It is situated just 7 to 10 minutes (3.8 km) from Hinjewadi IT Park Phase 1, 5 minutes from Bhumkar Chowk Wakad, and 2 minutes from D.Y. Patil University campus."
          }
        },
        {
          "@type": "Question",
          "name": "What does +0.25 Smart Study mean in Krisala Aventis flats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The +0.25 Smart Study in Krisala Aventis is an intelligently engineered dedicated acoustic work-from-home or student study pod integrated into the floor plan with high-speed fiber-ready conduits, natural sunlight, and ergonomic space optimization."
          }
        },
        {
          "@type": "Question",
          "name": "What is the possession date and construction update for Krisala Aventis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krisala Aventis Tathawade is scheduled for possession starting December 2028 (with Phase 1 delivery targeted ahead of schedule under MahaRERA P52100080336). Construction is executing in full swing using precision Aluform shuttering technology."
          }
        },
        {
          "@type": "Question",
          "name": "Which banks have approved home loans for Krisala Aventis Tathawade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krisala Aventis is pre-approved for home loan financing by top nationalized and private banking institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, and Punjab National Bank with competitive mortgage interest rates."
          }
        },
        {
          "@type": "Question",
          "name": "How to download the official Krisala Aventis Tathawade brochure PDF and floor plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can download the official Krisala Aventis Tathawade e-brochure, floor plan layouts, master plan, and cost sheet instantly by submitting the VIP enquiry form on https://krisalaventis.in or by messaging our official sales concierge on WhatsApp at +917744009295."
          }
        },
        {
          "@type": "Question",
          "name": "What lifestyle amenities are provided at Krisala Aventis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krisala Aventis features 40+ rooftop and podium lifestyle amenities including an infinity rooftop swimming pool, fully equipped gymnasium, zumba & yoga studio, net cricket turf, futsal court, senior citizens reflexology park, co-working lounge, and 24x7 biometric security."
          }
        }
      ]
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
          "item": "https://krisalaventis.in/krisala-aventis-tathawade-2-bhk-flats"
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
      "@type": "WebSite",
      "@id": "https://krisalaventis.in/website",
      "url": "https://krisalaventis.in",
      "name": "Krisala Aventis Tathawade",
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
      "@type": "WebPage",
      "@id": "https://krisalaventis.in/#webpage",
      "url": "https://krisalaventis.in",
      "name": "Krisala Aventis Tathawade Official Portal",
      "isPartOf": {
        "@id": "https://krisalaventis.in/website"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".h1-subtitle",
          ".hero-desc",
          ".lead-text",
          ".body-text"
        ]
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
        <link rel="stylesheet" href="/assets/css/style.min.css?v=26" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#caa350" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body suppressHydrationWarning>
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
        <Script src="/assets/js/script.min.js?v=26" strategy="afterInteractive" />
        <Script src="/assets/js/cinematic.js?v=26" strategy="lazyOnload" />
      </body>
    </html>
  );
}
