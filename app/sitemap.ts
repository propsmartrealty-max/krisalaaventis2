import { MetadataRoute } from 'next';
import data from "../data.json";
import nriData from "../data/global-nri-seo.json";
import dominationData from "../data/krisala-domination-seo.json";

export const dynamic = 'force-static';

const DOMINATION_CHUNK_SIZE = 2000;

export async function generateSitemaps() {
  const sitemaps = [
    { id: 0 }, // Core
    { id: 1 }, // NRI
  ];

  // Chunk Domination Data
  const numDominationChunks = Math.ceil(dominationData.length / DOMINATION_CHUNK_SIZE);
  for (let i = 0; i < numDominationChunks; i++) {
    sitemaps.push({ id: i + 2 });
  }

  return sitemaps;
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = "https://krisalaventis.in";
  const sitemapData: MetadataRoute.Sitemap = [];

  if (id === 0) {
    // Core Sitemap
    sitemapData.push({
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });
    for (const page of data) {
      sitemapData.push({
        url: `${baseUrl}/${page.folder}/${page.url_slug.replace(".html", "")}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
    return sitemapData;
  }

  if (id === 1) {
    // NRI Sitemap
    for (const page of nriData) {
      sitemapData.push({
        url: `${baseUrl}/${page.folder}/${page.url_slug.replace(".html", "")}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
    return sitemapData;
  }

  // Domination Chunks (id >= 2)
  const chunkIndex = id - 2;
  const start = chunkIndex * DOMINATION_CHUNK_SIZE;
  const end = start + DOMINATION_CHUNK_SIZE;
  const chunkedData = dominationData.slice(start, end);

  for (const page of chunkedData) {
    sitemapData.push({
      url: `${baseUrl}/${page.folder}/${page.url_slug.replace(".html", "")}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    });
  }

  return sitemapData;
}
