// Cloudflare Pages Edge Middleware for Krisala Aventis
// Enterprise-Grade 301 Redirect Engine:
// - Canonical apex (www → non-www, http → https)
// - 5,400+ Pruned Doorway Page redirects → Core Authority Pillars
// - Wildcard /market/* pattern-matched redirects (runs at edge, zero latency)

// Legacy exact-match redirects
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
  '/krisala-aventis-tathawade-privacy-policy': '/privacy-policy',
  '/krisala-aventis-tathawade-terms-conditions': '/terms-and-conditions',
  '/krisala-aventis-tathawade-disclaimer': '/disclaimer',
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

// Keyword-to-pillar mapping for /market/* wildcard redirects (runs at edge, zero static files)
// Priority order: most specific first
const MARKET_KEYWORD_MAP: Array<[string, string]> = [
  ['floor-plan',    '/floor-plans'],
  ['floorplan',     '/floor-plans'],
  ['2-bhk',         '/floor-plans'],
  ['2-25-bhk',      '/floor-plans'],
  ['3-bhk',         '/floor-plans'],
  ['3-25-bhk',      '/floor-plans'],
  ['brochure',      '/floor-plans'],
  ['layout',        '/floor-plans'],
  ['flat',          '/floor-plans'],
  ['apartment',     '/floor-plans'],
  ['luxury',        '/floor-plans'],
  ['cost-sheet',    '/pricing'],
  ['price',         '/pricing'],
  ['cost',          '/pricing'],
  ['payment',       '/pricing'],
  ['emi',           '/pricing'],
  ['connectivity',  '/location'],
  ['location',      '/location'],
  ['hinjewadi',     '/location'],
  ['wakad',         '/location'],
  ['tathawade',     '/location'],
  ['near',          '/location'],
  ['transit',       '/location'],
  ['amenities',     '/amenities'],
  ['amenity',       '/amenities'],
  ['pool',          '/amenities'],
  ['gym',           '/amenities'],
  ['possession',    '/maharera'],
  ['rera',          '/maharera'],
  ['construction',  '/maharera'],
  ['investment',    '/invest'],
  ['roi',           '/invest'],
  ['nri',           '/invest'],
  ['return',        '/invest'],
  ['compare',       '/compare'],
  ['comparison',    '/compare'],
  ['vs-',           '/compare'],
  ['guide',         '/guide'],
  ['how-to',        '/guide'],
  ['market',        '/market'],
  ['trend',         '/market'],
  ['appreciation',  '/market'],
  ['krisala',       '/'],
  ['review',        '/'],
  ['project',       '/'],
  ['builder',       '/'],
];

function marketRedirectTarget(slug: string): string {
  for (const [keyword, target] of MARKET_KEYWORD_MAP) {
    if (slug.includes(keyword)) return target;
  }
  return '/';
}

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
    return Response.redirect('https://krisalaventis.in/', 301);
  }

  const cleanPath = url.pathname.replace(/\/+$/, '') || '/';

  // 4. Exact-match legacy redirect map
  if (REDIRECT_MAP[cleanPath]) {
    return Response.redirect(`https://krisalaventis.in${REDIRECT_MAP[cleanPath]}`, 301);
  }

  // 5. Enterprise Doorway Prune: /market/* wildcard pattern matching
  // Any /market/ slug NOT served as a static HTML page gets 301'd to its authority pillar
  if (cleanPath.startsWith('/market/') && cleanPath.length > 8) {
    const slug = cleanPath.slice(8); // strip "/market/"
    const target = marketRedirectTarget(slug);
    return Response.redirect(`https://krisalaventis.in${target}`, 301);
  }

  return context.next();
}
