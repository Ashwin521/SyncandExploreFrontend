import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssl.gstatic.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;