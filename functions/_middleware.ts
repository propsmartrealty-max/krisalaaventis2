// Cloudflare Pages Edge Middleware for Krisala Aventis
// Enforces 301 Canonical Apex Domain (Redirects www to non-www) & HTTP to HTTPS
// Resolves all legacy placeholder routes with instant 301 redirects (Eliminating 40,000+ 404s)

const REDIRECT_MAP: Record<string, string> = {
  '/krisala-aventis-tathawade-brochure-download': '/#contact',
  '/krisala-aventis-tathawade-price-list': '/pricing',
  '/krisala-aventis-tathawade-flats-near-hinjewadi': '/near',
  '/krisala-aventis-tathawade-construction-status': '/feature',
  '/krisala-aventis-tathawade-2-bhk-flats': '/floor-plans',
  '/krisala-aventis-tathawade-3-bhk-luxury-apartments': '/floor-plans',
  '/krisala-aventis-tathawade-market-growth-calculator': '/market',
  '/krisala-aventis-tathawade-investment-roi': '/invest',
  '/krisala-aventis-tathawade-connectivity-it-hubs': '/location',
  '/krisala-aventis-tathawade-educational-hubs': '/location',
  '/krisala-aventis-tathawade-amenities-lifestyle': '/amenities',
  '/krisala-aventis-tathawade-public-transport': '/location',
  '/krisala-aventis-tathawade-developer-legacy': '/#legacy',
  '/krisala-aventis-tathawade-real-estate-glossary': '/guide',
  '/krisala-aventis-tathawade-competitor-comparison': '/compare',
  '/krisala-aventis-tathawade-vastu-compliance': '/feature',
  '/krisala-aventis-tathawade-home-loan-emi-calculator': '/pricing',
  '/krisala-aventis-tathawade-privacy-policy': '/#contact',
  '/krisala-aventis-tathawade-terms-conditions': '/#contact',
  '/sitemap': '/sitemap.xml',
  '/sitemap.html': '/sitemap.xml',
  '/nri-investor-hub': '/invest',
  '/krisala-aventis-tathawade-site-visit-book': '/#contact',
  '/krisala-aventis-tathawade-aluform-technology': '/feature',
  '/how-to-buy-flat-in-west-pune-guide-2026': '/guide',
  '/krisala-aventis-tathawade-local-pune-review-hindi-marathi': '/market',
  '/tathawade-real-estate-investment-guide': '/guide',
  '/wakad-vs-tathawade-property-analysis': '/tathawade-vs-wakad',
  '/tathawade-vs-baner-property-2026': '/compare',
  '/krisala-aventis-premium-living-review': '/#overview',
  '/pcmc-luxury-apartments-tathawade-2026': '/market',
  '/krisala-aventis-vs-godrej-tathawade': '/compare',
  '/krisala-aventis-vs-kolte-patil-tathawade': '/compare',
  '/best-3-bhk-under-1-5-crore-pune-2026': '/pricing',
  '/residential-flats-near-hinjewadi-phase-3': '/near',
  '/syndication-feed.xml': '/feed.xml'
};

export async function onRequest(context: any) {
  const url = new URL(context.request.url);

  // 1. Force Apex Canonical (Strip 'www.')
  if (url.hostname === 'www.krisalaventis.in' || url.hostname.startsWith('www.')) {
    url.hostname = 'krisalaventis.in';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // 3. Clean index.html / home duplicate paths
  if (url.pathname === '/index.html' || url.pathname === '/home' || url.pathname === '/home.html') {
    url.pathname = '/';
    return Response.redirect(url.toString(), 301);
  }

  // 4. Resolve Legacy / Placeholder Routes with 301
  const cleanPath = url.pathname.replace(/\/+$/, '') || '/';
  if (REDIRECT_MAP[cleanPath]) {
    const dest = REDIRECT_MAP[cleanPath];
    if (dest.startsWith('/#')) {
      return Response.redirect(`https://krisalaventis.in${dest}`, 301);
    }
    return Response.redirect(`https://krisalaventis.in${dest}`, 301);
  }

  return context.next();
}
