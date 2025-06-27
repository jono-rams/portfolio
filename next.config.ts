import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",

        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
