import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-News', 'Googlebot-Video'],
        allow: '/',
      },
      {
        userAgent: ['Bingbot', 'msnbot'],
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // Authorize AI Search & Generative Engine Optimization (GEO)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Bytespider', 'FacebookBot'],
        allow: '/',
      },
    ],
    sitemap: [
      'https://krisalaventis.in/sitemap.xml',
      'https://krisalaventis.in/sitemap-index.xml',
      'https://krisalaventis.in/sitemap-core.xml',
      'https://krisalaventis.in/sitemap-nri.xml',
      'https://krisalaventis.in/sitemap-pune.xml'
    ],
    host: 'https://krisalaventis.in',
  };
}
