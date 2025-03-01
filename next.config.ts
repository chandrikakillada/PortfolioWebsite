/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-chandrika-projects.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
