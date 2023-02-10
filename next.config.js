/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "spaceset.org"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
