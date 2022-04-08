/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['img.youtube.com'],
  },
};

module.exports = nextConfig;
