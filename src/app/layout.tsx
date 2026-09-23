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
    default: "Hanifah Studio | Website Design for Small Businesses",
    template: "%s | Hanifah Studio",
  },
  description:
    "Professional, modern websites for small businesses, designed with AI. No separate hosting fee under the arrangement we agree on. You buy your own domain and own it completely. Clear quotes, honest terms.",
  keywords: [
    "AI website design",
    "small business website",
    "affordable website design",
    "ecommerce website design",
    "landing page design",
    "website redesign",
    "Hanifah Studio",
  ],
  authors: [{ name: "Hanifah" }],
  creator: "Hanifah Studio",
  icons: {
    icon: "/hanifah-logo.svg",
    apple: "/hanifah-logo-icon.png",
  },
  openGraph: {
    title: "Hanifah Studio | Website Design for Small Businesses",
    description:
      "Let's get your business website online, without the extra hosting bill. Professional websites designed with AI. You do not pay for hosting, and your domain costs around $11 per year.",
    url: SITE.url,
    siteName: "Hanifah Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanifah Studio | Website Design for Small Businesses",
    description:
      "Professional, modern websites for small businesses, designed with AI. Honest terms and no separate hosting bill under the agreed arrangement.",
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
