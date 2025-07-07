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
import Footer from "@/components/Footer"; // Ensure Footer is imported if not already

const siteName = "Hybrid Calling™ by Neo Agents™";
const siteDescription = "Elevate your business communications with AI Voice Agents that sound perfectly human. Automate sales, support, and more, 24/7.";
const siteUrl = "https://www.hybridcalling.com"; // Placeholder URL
const ogImagePlaceholder = `${siteUrl}/og-image.png`; // Placeholder OG image

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Required for resolving relative og:image paths
  title: {
    default: `${siteName} - Intelligent AI Voice Agents`, // Default title for homepage or unspecified pages
    template: `%s | ${siteName}`, // Template for page-specific titles
  },
  description: siteDescription,
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon-16x16.png", // Example sizes
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: ogImagePlaceholder, // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: `${siteName} - AI Voice Automation`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImagePlaceholder], // Must be an absolute URL
    // creator: "@YourTwitterHandle", // Optional
  },
  robots: { // Optional: Default good for SEO
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: { // Optional: For Google Search Console, etc.
  //   google: 'your-google-site-verification-code',
  // },
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
