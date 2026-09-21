import {
  Globe,
  MousePointerClick,
  ShoppingBag,
  RefreshCw,
  Gem,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";
import { FinalCta } from "../final-cta";
import { PAGE_ROUTES } from "@/lib/site";

/**
 * The detailed services page. Each service gets its own block with a
 * plain description, what is included, and who it fits.
 */
const SERVICE_DETAILS = [
  {
    icon: Globe,
    title: "AI Business Website",
    body: "The full package for a real business. A home page that explains what you do in seconds, service or product pages, an about page, and a contact page. Every page a serious business needs, and nothing it does not.",
    includes: [
      "Home, services, about, and contact pages",
      "Design built around your customers",
      "Works properly on phones, tablets, and computers",
      "Clear contact paths on every page",
    ],
    fit: "A good fit if you want one complete website that makes your business look established.",
  },
  {
    icon: MousePointerClick,
    title: "AI Landing Page",
    body: "One page with one job. Maybe it is getting people to message you. Maybe it is selling one product or filling one calendar. Everything on the page points at that single goal, so visitors are never left wondering what to do next.",
    includes: [
      "A single focused page built around one action",
      "Copy structure that answers questions in order",
      "Contact or booking links exactly where people decide",
      "Fast loading, on any device",
    ],
    fit: "A good fit for campaigns, single offers, launches, and anyone who wants to start small.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Website",
    body: "A store people actually enjoy browsing. Clear product pages, sensible categories, and a buying flow that does not fight your customers. We figure out the setup that matches your products and your budget before anything begins.",
    includes: [
      "Product pages designed to answer buyer questions",
      "Collections that make browsing easy",
      "Cart and checkout flow set up with you",
      "The right platform for how you sell",
    ],
    fit: "A good fit if you sell physical or digital products and want a proper store.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    body: "Your website had a good run. Now it looks tired, loads slowly, or just does not match the business you have become. I rebuild it with a modern look and the same care as any new site, while keeping what your customers already recognize.",
    includes: [
      "A fresh, modern look for your existing content",
      "Faster loading on every page",
      "Better structure for phones and search engines",
      "Nothing lost, everything improved",
    ],
    fit: "A good fit for websites that still work but no longer impress.",
  },
  {
    icon: Gem,
    title: "Product or Brand Showcase",
    body: "Some businesses need a website that shows, not sells. A place where the packaging, the craft, and the story do the talking. Think of it as your best showroom, open all day, for anyone who wants to look closer.",
    includes: [
      "Galleries that give your work room to breathe",
      "Product and brand stories told simply",
      "An elegant, visual first layout",
      "Easy ways for interested people to reach you",
    ],
    fit: "A good fit for brands that win on presentation.",
  },
  {
    icon: Briefcase,
    title: "Service Provider Website",
    body: "Coaches, consultants, photographers, salons, agencies. Your website has one main job, turning visitors into booked calls and inquiries. I design it around exactly that, with your offers front and center.",
    includes: [
      "Offers explained in plain language",
      "Trust built through honest presentation",
      "Booking and inquiry links where they matter",
      "A structure that works while you sleep",
    ],
    fit: "A good fit for anyone who sells time, skill, or expertise.",
  },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Websites I design for{" "}
            <span className="text-lavender-600">businesses like yours.</span>
          </>
        }
        description="Six kinds of websites, one standard of care. Every project starts with a conversation and a clear, no obligation quote."
      />

      <section className="bg-white py-4 sm:py-6" aria-label="Service details">
        <div className="site-container">
          <div className="mx-auto grid max-w-4xl gap-6">
            {SERVICE_DETAILS.map((service, i) => (
              <Reveal key={service.title} delay={Math.min(i * 0.05, 0.2)}>
                <article className="group rounded-3xl border border-navy-900/8 bg-cream-50 p-7 transition-all duration-300 hover:border-lavender-300/70 hover:bg-white hover:shadow-lift sm:p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lavender-100 text-lavender-700 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-lavender-300">
                      <service.icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <h2 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
                      {service.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-600 sm:text-base">
                    {service.body}
                  </p>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-lavender-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 border-t border-navy-900/6 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-ink-500">{service.fit}</p>
                    <a
                      href={PAGE_ROUTES.contact}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
                    >
                      Request a Project Quote
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-ink-400">
              Not sure which one you need? You do not have to decide alone. Tell me about your
              business and I will recommend the simplest thing that does the job.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
