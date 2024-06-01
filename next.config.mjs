/** @type {import('next').NextConfig} */
const nextConfig = {
    deviceSizes: [6048],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 315360000,
    formats: ['image/avif', 'image/webp'],
};

export default nextConfig;
