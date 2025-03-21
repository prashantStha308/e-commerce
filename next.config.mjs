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
                hostname: "secure.gravatar.com"
            },
        ],
    },
};

export default nextConfig;
