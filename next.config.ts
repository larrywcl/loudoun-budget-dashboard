import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/loudoun-budget-dashboard',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
