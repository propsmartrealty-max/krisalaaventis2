import { MetadataRoute } from 'next';
import data from "../data.json";
import nriData from "../data/global-nri-seo.json";
import dominationData from "../data/krisala-domination-seo.json";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://krisalaventis.in";
  const sitemapData: MetadataRoute.Sitemap = [];
  
  // Home page
  sitemapData.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // Standard Pages
  for (const page of data) {
    sitemapData.push({
      url: `${baseUrl}/${page.folder}/${page.url_slug.replace(".html", "")}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // NRI Pages
  for (const page of nriData) {
    sitemapData.push({
      url: `${baseUrl}/${page.folder}/${page.url_slug.replace(".html", "")}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  // Domination Pages (5000+)
  for (const page of dominationData) {
    sitemapData.push({
      url: `${baseUrl}/${page.folder}/${page.url_slug.replace(".html", "")}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    });
  }

  return sitemapData;
}
