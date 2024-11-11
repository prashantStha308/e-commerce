/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'rojantamrakar.com.np',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'secure.gravatar.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;