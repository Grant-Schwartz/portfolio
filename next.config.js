/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = withMDX()
module.exports = nextConfig
