import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap"
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap"
});

// Отдельно закопаться seo in next
export const metadata: Metadata = {
    title: {
        // расширил
        template: 'X App',
        default: ''
    },
    description: "Frontend Development",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>

        {children}

        </body>
        </html>
    );
}
