/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api_1/:path*',
        destination: 'http://34.64.212.49:8001/rec/:path*',
      },
      {
        source: '/api_2/:path*',
        destination: 'http://49.50.164.14:30007/api/spoiler:path*',
      },
    ]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
