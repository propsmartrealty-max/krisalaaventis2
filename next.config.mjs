/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
