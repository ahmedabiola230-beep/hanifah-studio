"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS, PAGE_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

type HeaderProps = {
  currentRoute: string;
};

/**
 * Sticky site header: transparent over the page hero, gains a frosted
 * glass background after scrolling. Shows which page you are on, and
 * includes an accessible mobile menu.
 */
export function Header({ currentRoute }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu whenever the visitor moves to another page
  const [previousRoute, setPreviousRoute] = useState(currentRoute);
  if (previousRoute !== currentRoute) {
    setPreviousRoute(currentRoute);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-navy-900/8 bg-cream-50/85 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = currentRoute === link.route;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400",
                  active
                    ? "bg-lavender-100 text-navy-900"
                    : "text-ink-600 hover:bg-lavender-100/70 hover:text-navy-900"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PAGE_ROUTES.contact}
            className="group hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Let&rsquo;s Talk
            <ArrowRight
              className="h-4 w-4 text-lavender-300 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-900 transition-colors hover:bg-lavender-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-navy-900/8 bg-cream-50/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="site-container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => {
            const active = currentRoute === link.route;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400",
                  active
                    ? "bg-lavender-100 text-navy-900"
                    : "text-ink-700 hover:bg-lavender-100/70 hover:text-navy-900"
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={PAGE_ROUTES.contact}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
          >
            Let&rsquo;s Talk
            <ArrowRight className="h-4 w-4 text-lavender-300" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
