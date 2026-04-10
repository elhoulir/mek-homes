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
        source: "/services/home-renovations",
        destination: "/services/renovations",
        permanent: true,
      },
      {
        source: "/services/custom-carpentry",
        destination: "/services/renovations",
        permanent: true,
      },
      {
        source: "/services/decking-pergolas",
        destination: "/services/decking",
        permanent: true,
      },
      {
        source: "/services/kitchen-renovations",
        destination: "/services/renovations",
        permanent: true,
      },
      {
        source: "/services/bathroom-renovations",
        destination: "/services/renovations",
        permanent: true,
      },
      {
        source: "/services/structural-carpentry",
        destination: "/services/lockup",
        permanent: true,
      },
      {
        source: "/services/doors-windows",
        destination: "/services/renovations",
        permanent: true,
      },
      {
        source: "/services/fencing-gates",
        destination: "/services/pergolas",
        permanent: true,
      },
      {
        source: "/services/lockup-and-fix",
        destination: "/services/lockup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
