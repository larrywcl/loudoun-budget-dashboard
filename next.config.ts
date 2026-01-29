import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // No basePath needed when deployed at root of loudoun-budget-dashboard.github.io
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
