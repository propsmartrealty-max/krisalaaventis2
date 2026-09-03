/** @type {import('next').NextConfig} */
const isExport = process.env.DISABLE_EXPORT !== 'true'; // Default to static export (out/) for Cloudflare Pages

const nextConfig = {
  output: isExport ? 'export' : undefined,
  images: {
    unoptimized: true, // Required for static optimizations
  },
  trailingSlash: false,
  poweredByHeader: false,
  ...(isExport
    ? {}
    : {
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
      }),
};

export default nextConfig;
