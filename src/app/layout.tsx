import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Hanifah Studio — AI-Powered Website Design for Small Businesses",
    template: "%s | Hanifah Studio",
  },
  description:
    "Professional, modern websites for small businesses, startups, and e-commerce brands — designed with AI-powered workflows. Simpler hosting arrangement without a separate hosting fee. You own your domain. Clear, honest pricing.",
  keywords: [
    "AI website design",
    "small business website",
    "affordable website design",
    "e-commerce website design",
    "landing page design",
    "website redesign",
    "Hanifah Studio",
  ],
  authors: [{ name: "Hanifah" }],
  creator: "Hanifah Studio",
  icons: {
    icon: "/hanifah-logo.svg",
  },
  openGraph: {
    title: "Hanifah Studio — AI-Powered Website Design",
    description:
      "Your business deserves a website. Not another monthly bill. Professional, modern websites designed with AI — with a simpler hosting arrangement and honest, transparent pricing.",
    url: SITE.url,
    siteName: "Hanifah Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanifah Studio — AI-Powered Website Design",
    description:
      "Professional, modern websites for small businesses — designed with AI-powered workflows. Honest pricing, no separate hosting bill under the agreed arrangement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
