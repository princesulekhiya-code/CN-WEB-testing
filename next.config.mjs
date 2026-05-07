/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/:path*`,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'uqlyhicgvqawiiixuumy.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      }
    ],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
    ],
  },
};

export default nextConfig;
