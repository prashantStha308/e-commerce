/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rojantamrakar.com.np',
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com"
            },
        ],
    },
};

export default nextConfig;
