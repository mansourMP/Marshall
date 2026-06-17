import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Trailing slash for static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
