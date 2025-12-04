/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.simpleicons.org', 'logo.clearbit.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
