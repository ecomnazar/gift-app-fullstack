/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgcdn.floweraura.com",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
