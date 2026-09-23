import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/assets/',
          '/*.xml',
          '/*.png',
          '/*.jpg',
          '/*.jpeg',
          '/*.webp',
          '/*.ico',
          '/*.svg',
          '/*.css',
          '/*.js',
        ],
        disallow: ['/api/', '/_next/', '/scratch/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/assets/images/',
          '/*.png',
          '/*.jpg',
          '/*.jpeg',
          '/*.webp',
          '/*.ico',
          '/*.svg',
        ],
        disallow: ['/api/', '/_next/', '/scratch/', '/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/assets/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/', '/scratch/'],
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/assets/'],
        disallow: ['/api/', '/_next/', '/scratch/', '/admin/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot',
        ],
        allow: ['/', '/assets/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/', '/scratch/'],
      },
      {
        userAgent: '*',
        allow: ['/', '/assets/', '/*.xml'],
        disallow: ['/api/', '/_next/', '/scratch/', '/admin/'],
      },
    ],
    sitemap: [
      'https://krisalaventis.in/sitemap.xml',
      'https://krisalaventis.in/sitemap-index.xml',
      'https://krisalaventis.in/sitemap-core.xml',
      'https://krisalaventis.in/sitemap-nri.xml',
      'https://krisalaventis.in/sitemap-pune.xml',
    ],
    host: 'https://krisalaventis.in',
  };
}
