const nextConfig = {
  reactStrictMode: true,
  partytown: {
    dest: '/~partytown',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
