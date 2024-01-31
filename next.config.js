/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["3.39.99.94"]
  },
  async redirects() {
    return [
      {
        source:'/',
        destination:'/Project',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
