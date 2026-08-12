import type { Metadata } from "next";
import "../globals.css";

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
    <html lang={currentLocale} suppressHydrationWarning>
      <head>
        <link rel="alternate" href="https://krisalaaventis.in/en" hrefLang="en-in" />
        <link rel="alternate" href="https://krisalaaventis.in/ae" hrefLang="en-ae" />
        <link rel="alternate" href="https://krisalaaventis.in/us" hrefLang="en-us" />
        <link rel="alternate" href="https://krisalaaventis.in/uk" hrefLang="en-gb" />
        <link rel="alternate" href="https://krisalaaventis.in/sg" hrefLang="en-sg" />
        <link rel="alternate" href="https://krisalaaventis.in/" hrefLang="x-default" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/style.min.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <script src="/assets/js/script.min.js" async defer></script>
      </body>
    </html>
  );
}
