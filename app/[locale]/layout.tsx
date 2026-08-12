import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "../globals.css";

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

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ae' }, { locale: 'us' }, { locale: 'uk' }, { locale: 'sg' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const currentLocale = resolvedParams.locale || 'en';
  
  return (
    <html lang={currentLocale} suppressHydrationWarning className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="alternate" href="https://krisalaaventis.in/en" hrefLang="en-in" />
        <link rel="alternate" href="https://krisalaaventis.in/ae" hrefLang="en-ae" />
        <link rel="alternate" href="https://krisalaaventis.in/us" hrefLang="en-us" />
        <link rel="alternate" href="https://krisalaaventis.in/uk" hrefLang="en-gb" />
        <link rel="alternate" href="https://krisalaaventis.in/sg" hrefLang="en-sg" />
        <link rel="alternate" href="https://krisalaaventis.in/" hrefLang="x-default" />
        <link rel="stylesheet" href="/assets/css/style.min.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/js/script.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
