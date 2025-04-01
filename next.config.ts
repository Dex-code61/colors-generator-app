import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["github.com"],
    unoptimized: true,
  },
  output: "export",
  basePath: "/colors-generator-app",
};

export default nextConfig;
