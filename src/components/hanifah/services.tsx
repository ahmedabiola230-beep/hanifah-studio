import {
  Globe,
  MousePointerClick,
  ShoppingBag,
  RefreshCw,
  Gem,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    icon: Globe,
    title: "AI Business Website Design",
    body: "A complete, multi-section website that presents who you are, what you do, and why customers should trust you — designed to turn visitors into inquiries.",
  },
  {
    icon: MousePointerClick,
    title: "AI Landing Page Design",
    body: "A focused, single page built around one clear action — getting inquiries, bookings, or sign-ups. Ideal for campaigns, offers, and launches.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Website Design",
    body: "Product catalogs, persuasive product pages, and cart-ready flows that present your products beautifully and make buying feel effortless.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    body: "Your existing site, reimagined: faster, modern, and easier to use — without losing the brand identity your customers already recognize.",
  },
  {
    icon: Gem,
    title: "Product & Brand Showcase",
    body: "A visual-first website that lets your work speak — elegant galleries, product stories, and brand presentation for businesses that sell with style.",
  },
  {
    icon: Briefcase,
    title: "Service-Provider Websites",
    body: "For coaches, consultants, freelancers, and local service businesses: clear offers, credibility builders, and easy ways for clients to reach you.",
  },
];

/**
 * Services grid — six benefit-focused service cards.
 */
export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="services-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything your business needs to{" "}
              <span className="text-lavender-600">look credible online.</span>
            </>
          }
          description="One studio for your entire website — planning, design, and setup — so you don't have to coordinate freelancers or wrestle with page builders yourself."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-navy-900/8 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lavender-300/70 hover:bg-white hover:shadow-lift">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-100 text-lavender-700 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-lavender-300">
                    <service.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-navy-900/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lavender-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500">
                  {service.body}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lavender-700 transition-colors hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2"
                >
                  Request a Project Quote
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> about {service.title}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-400">
            Every project starts with a conversation about your goals, followed by a clear,
            no-obligation quote. Scope, timeline, and any costs are agreed before work begins.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
