import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RootProvider } from "~/components/Provider";
import { poppins } from "~/utils/font";
import { Alert } from "~/components/ui/alert";
import { Footer } from "~/components/layouts/footer";
export const metadata: Metadata = {
    title: "Menu | Bobi Bowl Restaurant",
    description:
        "Discover the best dining experience in town. We serve delicious food made with fresh ingredients and offer a cozy atmosphere for you to enjoy.",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
        shortcut: "/favicon.ico",
        other: [
            {
                rel: "mask-icon",
                url: "/icon0.svg",
                color: "#ffffff",
            },
        ],
    },
    manifest: "/manifest.json",
    authors: {
        name: "Mikael Aditya Nugroho",
        url: "https://instagram.com/mikaeladityan",
    },
    creator: "Sylvana Sari",
};
export const viewport: Viewport = {
    themeColor: "white",
    colorScheme: "normal",
    width: "device-width",
    initialScale: 1.0,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} overflow-x-hidden scroll-smooth antialiased bg-gray-200 max-w-screen mx-auto text-gray-950 font-normal tracking-wide`}
            >
                <RootProvider>
                    <Alert />
                    {children}
                    <Footer />
                </RootProvider>
            </body>
        </html>
    );
}
