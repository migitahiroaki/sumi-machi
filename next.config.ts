import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // loader: "custom",
    // loaderFile: "src/lib/loader.ts",
    // domains: ["images.microcms-assets.io"],
  },
  /* config options here */
};

export default nextConfig;
