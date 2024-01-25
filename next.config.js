/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"]
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
