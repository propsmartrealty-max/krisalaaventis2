import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/style.min.css" />
      </head>
      <body>
        {children}
        <script src="/assets/js/script.min.js" async defer></script>
      </body>
    </html>
  );
}
