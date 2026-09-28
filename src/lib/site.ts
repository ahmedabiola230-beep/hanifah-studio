/**
 * Central place for brand content and contact details.
 * Used by the header, footer, contact page, and privacy pages.
 */
export const SITE = {
  name: "Hanifah Studio",
  tagline: "Website Design Studio",
  // Set NEXT_PUBLIC_SITE_URL in your hosting dashboard (for example on
  // Vercel) once the real domain is known; it feeds SEO metadata and link
  // previews. Falls back to the studio domain placeholder.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanifahstudio.com",
  founder: "Hanifah",

  // Contact details
  email: "ahmedabiola230@gmail.com",

  whatsappUrl: "https://wa.me/2349162080741",
  whatsappLabel: "Chat on WhatsApp",
} as const;

/** Page routes used across the site. See src/lib/router.ts */
export const PAGE_ROUTES = {
  home: "#/",
  services: "#/services",
  portfolio: "#/portfolio",
  about: "#/about",
  contact: "#/contact",
  privacy: "#/privacy",
  terms: "#/terms",
} as const;

/** Service options. Single source of truth for the services pages and the inquiry form. */
export const SERVICE_OPTIONS = [
  { value: "business-website", label: "AI Business Website" },
  { value: "landing-page", label: "AI Landing Page" },
  { value: "ecommerce", label: "Ecommerce Website" },
  { value: "redesign", label: "Website Redesign" },
  { value: "showcase", label: "Product or Brand Showcase" },
  { value: "service-provider", label: "Service Provider Website" },
  { value: "other", label: "Something else (not sure yet)" },
] as const;

/** Main navigation. */
export const NAV_LINKS = [
  { href: PAGE_ROUTES.home, route: "/", label: "Home" },
  { href: PAGE_ROUTES.services, route: "/services", label: "Services" },
  { href: PAGE_ROUTES.portfolio, route: "/portfolio", label: "Portfolio" },
  { href: PAGE_ROUTES.about, route: "/about", label: "About" },
  { href: PAGE_ROUTES.contact, route: "/contact", label: "Contact" },
] as const;
