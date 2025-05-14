import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RootProvider } from "~/components/Provider";
import { poppins } from "~/utils/font";
import { MainNavbar } from "~/components/layouts/navbar/main.navbar";
import { Alert } from "~/components/ui/alert";
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
                className={`${poppins.className} overflow-x-hidden scroll-smooth antialiased bg-gray-200 max-w-md mx-auto text-gray-950 font-normal tracking-wide`}
            >
                <RootProvider>
                    <section className="min-h-screen relative">
                        <Alert />
                        <MainNavbar />
                        <main className="p-3">{children}</main>
                    </section>
                    <footer className="bg-gray-200 p-6 text-center min-h-screen">…isi footer…</footer>
                </RootProvider>
            </body>
        </html>
    );
}
