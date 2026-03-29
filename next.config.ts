import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/lockup",
        destination: "/services/lockup-and-fix",
        permanent: true,
      },
      {
        source: "/services/fix",
        destination: "/services/lockup-and-fix",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
