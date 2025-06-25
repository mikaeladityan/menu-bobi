import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL("https://img1.wsimg.com/isteam/ip/**"),
            {
                protocol: "https",
                hostname: "is3.cloudhost.id",
                pathname: "/**", // Sesuaikan dengan path gambar Anda
                port: "",
            },
            {
                protocol: "https",
                hostname: "img1.wsimg.com",
                pathname: "/**", // Sesuaikan dengan path gambar Anda
                port: "",
            },
        ],
    },
};

export default nextConfig;
