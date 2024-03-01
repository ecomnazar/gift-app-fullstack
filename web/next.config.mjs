/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgcdn.floweraura.com",
      },
    ],
  },
};

export default nextConfig;
