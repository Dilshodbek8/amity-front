/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["amity.albison.software"],
  },
};

module.exports = nextConfig;
