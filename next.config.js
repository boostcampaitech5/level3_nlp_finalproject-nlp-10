/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api_1/:path*',
        destination: 'http://34.64.212.49:8001/rec/:path*',
      },
    ]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
