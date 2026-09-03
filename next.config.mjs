/** @type {import('next').NextConfig} */
const isExport = process.env.OUTPUT_EXPORT === 'true' || process.env.NEXT_EXPORT === 'true' || process.env.CLOUDFLARE_BUILD === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  images: {
    unoptimized: true, // Required for static optimizations
  },
  trailingSlash: false,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
