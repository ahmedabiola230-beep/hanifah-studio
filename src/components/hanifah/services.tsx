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
import { PAGE_ROUTES } from "@/lib/site";

const SERVICES = [
  {
    icon: Globe,
    title: "AI Business Website",
    body: "A complete website for a real business. Home page, services, about, and contact. Every page a serious business needs, designed to turn visitors into inquiries.",
  },
  {
    icon: MousePointerClick,
    title: "AI Landing Page",
    body: "One page with one job. Getting messages, bookings, or sales for a single offer. Ideal for campaigns and launches.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Website",
    body: "Product pages, collections, and a buying flow that feels easy. Built to show your products at their best and keep the path to checkout short.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    body: "Your current site, rebuilt to look modern, load fast, and match the business you have become. Same brand, sharper front door.",
  },
  {
    icon: Gem,
    title: "Product or Brand Showcase",
    body: "A visual first website where your work does the talking. Galleries, product stories, and a brand presentation with real polish.",
  },
  {
    icon: Briefcase,
    title: "Service Provider Website",
    body: "For coaches, consultants, freelancers, and local services. Clear offers, honest credibility, and simple ways for clients to reach you.",
  },
];

/**
 * Services overview shown on the home page. Each card links to the
 * contact page for a quote, and a full detail page covers every service.
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
          description="One studio handles the whole job, from planning to design to launch setup. You do not have to coordinate freelancers or wrestle with page builders yourself."
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
                  href={PAGE_ROUTES.contact}
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
            Every project starts with a conversation and a clear, no obligation quote. Scope,
            timeline, and costs are agreed before any work begins.
          </p>
          <p className="mt-4 text-center">
            <a
              href={PAGE_ROUTES.services}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 underline decoration-lavender-400 decoration-2 underline-offset-4 transition-colors hover:text-lavender-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2 rounded-sm"
            >
              See each service explained in detail
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
