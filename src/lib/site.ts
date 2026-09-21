/**
 * Central place for brand content and contact details.
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │  TODO (Hanifah): replace the placeholder values below with   │
 * │  your real contact details before going live.                │
 * └──────────────────────────────────────────────────────────────┘
 */
export const SITE = {
  name: "Hanifah Studio",
  tagline: "AI-Powered Website Design",
  url: "https://hanifahstudio.com", // TODO: replace with your real domain
  founder: "Hanifah",

  // TODO: replace with your real email address
  email: "hello@hanifahstudio.com",

  // TODO: replace with your real WhatsApp number (international format, digits only)
  whatsappUrl: "https://wa.me/1234567890",
  whatsappLabel: "Chat on WhatsApp",

  // TODO: replace "#" with your real social profile URLs
  socials: {
    instagram: "#",
    linkedin: "#",
    x: "#",
  },
} as const;

/** Service options — single source of truth for the services grid and the inquiry form. */
export const SERVICE_OPTIONS = [
  { value: "business-website", label: "AI Business Website Design" },
  { value: "landing-page", label: "AI Landing Page Design" },
  { value: "ecommerce", label: "E-commerce Website Design" },
  { value: "redesign", label: "Website Redesign" },
  { value: "showcase", label: "Product & Brand Showcase Website" },
  { value: "service-provider", label: "Service-Provider Website" },
  { value: "other", label: "Something else / not sure yet" },
] as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
