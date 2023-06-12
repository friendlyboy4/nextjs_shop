/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    // unoptimized: true,
    loader: "default",
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dpz9kmpj5/image/upload/**',
      }
    ],
  },
}

module.exports = nextConfig
