"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight page router for the studio website.
 *
 * The sandbox preview exposes a single app route, so the site's pages
 * (Home, Services, Portfolio, About, Contact, Privacy Policy, Terms of
 * Service) live on shareable hash URLs like /#/services. Every link is a
 * real anchor, the browser back and forward buttons work, and each page
 * sets its own document title.
 *
 * Each page component maps one to one to a route value, so moving to
 * real filesystem routes later (Next.js app router pages) is a copy
 * paste job per page.
 */
export const ROUTES = [
  "/",
  "/services",
  "/portfolio",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export type Route = (typeof ROUTES)[number];

/** Parses a location hash into a known route. Unknown hashes fall back to Home. */
export function parseHash(hash: string): Route {
  let path = hash.replace(/^#/, "");
  const queryIndex = path.indexOf("?");
  if (queryIndex !== -1) path = path.slice(0, queryIndex);
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  if (path === "") path = "/";
  return (ROUTES as readonly string[]).includes(path) ? (path as Route) : "/";
}

/** Current page route, kept in sync with the browser hash. */
export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>("/");

  useEffect(() => {
    const sync = () => setRoute(parseHash(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return route;
}

/** Page titles for the browser tab. */
export const ROUTE_TITLES: Record<Route, string> = {
  "/": "Hanifah Studio | Website Design for Small Businesses",
  "/services": "Services | Hanifah Studio",
  "/portfolio": "Portfolio | Hanifah Studio",
  "/about": "About | Hanifah Studio",
  "/contact": "Contact | Hanifah Studio",
  "/privacy": "Privacy Policy | Hanifah Studio",
  "/terms": "Terms of Service | Hanifah Studio",
};
