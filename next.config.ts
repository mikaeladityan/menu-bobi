import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://img1.wsimg.com/isteam/ip/**")],
    },
};

export default nextConfig;
