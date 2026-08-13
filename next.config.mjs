/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true, // Required for static optimizations
  },
  trailingSlash: false, // Matches current static architecture
  poweredByHeader: false,
};

export default nextConfig;
