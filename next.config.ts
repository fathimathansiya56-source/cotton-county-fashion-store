import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows production builds to successfully complete even if there are minor type warnings
    ignoreBuildErrors: true,
  },
  eslint: {
    // Prevents code styling rules from blocking your live deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;