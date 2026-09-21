import { Instagram, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { LegalDialog } from "./legal-dialog";
import { NAV_LINKS, SERVICE_OPTIONS, SITE } from "@/lib/site";

const SOCIALS = [
  // TODO(Hanifah): replace the "#" hrefs in src/lib/site.ts with your real profiles
  { name: "Instagram", href: SITE.socials.instagram, icon: Instagram },
  { name: "LinkedIn", href: SITE.socials.linkedin, icon: Linkedin },
  { name: "X (Twitter)", href: SITE.socials.x, icon: Twitter },
];

/**
 * Site footer: brand summary, navigation, services, contact channels,
 * legal dialogs, and copyright. Sticks to the bottom of the viewport
 * via the root flex layout (mt-auto).
 */
export function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 text-navy-100" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/70">
              AI-powered website design for small businesses, startups, and product brands —
              professional, modern websites with honest, transparent terms.
            </p>
            {/* Social placeholders */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} (link placeholder — add your profile URL)`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-lavender-500/20 hover:ring-lavender-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                >
                  <social.icon className="h-4.5 w-4.5 text-lavender-200" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-lavender-300">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-100/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services links">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-lavender-300">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_OPTIONS.slice(0, 6).map((service) => (
                <li key={service.value}>
                  <a
                    href="#services"
                    className="text-sm text-navy-100/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-lavender-300">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-navy-100/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                >
                  <Mail className="h-4 w-4 text-lavender-300" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-navy-100/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                >
                  <MessageCircle className="h-4 w-4 text-lavender-300" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-navy-100/50">
              {/* TODO(Hanifah): replace the email and WhatsApp number in src/lib/site.ts */}
              Contact details above are placeholders ready to be swapped for your real channels.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-navy-100/55">
            © {new Date().getFullYear()} Hanifah Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <LegalDialog
              kind="privacy"
              className="text-xs text-navy-100/55 transition-colors hover:text-white"
            />
            <LegalDialog
              kind="terms"
              className="text-xs text-navy-100/55 transition-colors hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
