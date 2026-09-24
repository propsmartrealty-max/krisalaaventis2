// Cloudflare Pages Edge Middleware for Krisala Aventis
// Enforces 301 Canonical Apex Domain (Redirects www to non-www) & HTTP to HTTPS

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

  return context.next();
}
