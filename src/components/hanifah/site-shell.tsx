"use client";

import { useEffect, useRef } from "react";
import { useHashRoute, ROUTE_TITLES } from "@/lib/router";
import { Header } from "./header";
import { Footer } from "./footer";
import { HomePage } from "./pages/home-page";
import { ServicesPage } from "./pages/services-page";
import { PortfolioPage } from "./pages/portfolio-page";
import { AboutPage } from "./pages/about-page";
import { ContactPage } from "./pages/contact-page";
import { PrivacyPage } from "./pages/privacy-page";
import { TermsPage } from "./pages/terms-page";

const PAGES = {
  "/": HomePage,
  "/services": ServicesPage,
  "/portfolio": PortfolioPage,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/privacy": PrivacyPage,
  "/terms": TermsPage,
} as const;

/**
 * The whole site: header, the current page, and the footer.
 * Page changes happen through real hash links (see src/lib/router.ts),
 * so every page has its own shareable URL and browser navigation works.
 */
export function SiteShell() {
  const route = useHashRoute();
  const previousRoute = useRef<string | null>(null);

  // Jump to the top of the page whenever the visitor moves to a new page
  useEffect(() => {
    if (previousRoute.current !== null && previousRoute.current !== route) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
    previousRoute.current = route;
  }, [route]);

  // Give each page its own browser tab title
  useEffect(() => {
    document.title = ROUTE_TITLES[route];
  }, [route]);

  const Page = PAGES[route];

  return (
    <>
      <Header currentRoute={route} />
      <main id="main" className="flex-1">
        <Page />
      </main>
      <Footer />
    </>
  );
}
