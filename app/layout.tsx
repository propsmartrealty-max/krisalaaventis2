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

export const metadata: Metadata = {
  title: "Krisala Aventis | Premium Flats in Tathawade",
  description: "Krisala Aventis Tathawade — New Launch Opportunity. 2 & 3 BHK Premium Residences in West Pune.",
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
