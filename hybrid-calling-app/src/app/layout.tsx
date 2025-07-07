import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "@/components/Header"; // Import the Header component
import StickyBottomBanner from "@/components/StickyBottomBanner"; // Import the banner

export const metadata: Metadata = {
  title: "Hybrid Calling",
  description: "AI Agents That Talk Like You — 24/7. No Holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`} // Added bg-black and text-white for consistent base
      >
        <Header />
        {/* Add padding-bottom to main to ensure content is not hidden by sticky banner.
            Banner height is roughly p-4 + text-xl + p-4 = ~16px + ~24px + ~16px = ~56px for text + padding.
            Button is also there. Let's estimate banner height to be around 80-100px on mobile and 100-120px on desktop after padding.
            A safe bet for pb would be around 28 (112px) to 32 (128px)
        */}
        <main className="pt-16 md:pt-20 pb-28 md:pb-32">
          {children}
        </main>
        <Footer /> {/* Add Footer here */}
        <StickyBottomBanner />
      </body>
    </html>
  );
}
