import { Store, Rocket, ShoppingBag, HeartHandshake, RefreshCw } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  {
    icon: Store,
    title: "Small business owners",
    body: "You have built something real. A proper website makes your business findable, believable, and easy to contact when people search for what you offer.",
  },
  {
    icon: Rocket,
    title: "Startups",
    body: "Move fast without looking improvised. Launch a polished online presence quickly, without burning your early budget on agency retainers.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce and product brands",
    body: "Product first design that shows your items at their best, with a short path from browsing to buying.",
  },
  {
    icon: HeartHandshake,
    title: "Coaches, consultants, and service providers",
    body: "People buy expertise from people they trust. Your website should build that trust before the first conversation even starts.",
  },
  {
    icon: RefreshCw,
    title: "Businesses that need a redesign",
    body: "Your website had a good run. If it no longer matches the quality of your work, a thoughtful redesign refreshes your image without losing what customers already recognize.",
  },
];

/**
 * Audience section: five cards showing who the service is for.
 * Layout: first two cards span 3 columns each on large screens (2-up),
 * the remaining three fill the second row (3-up) for a balanced grid.
 */
export function WhoThisIsFor() {
  return (
    <section id="who" className="bg-cream-100 py-20 sm:py-24 lg:py-28" aria-labelledby="who-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow="Who This Is For"
          title={
            <>
              Built for businesses that are{" "}
              <span className="text-lavender-600">ready to look the part.</span>
            </>
          }
          description="If you recognize yourself in any of these, we should talk."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((audience, i) => (
            <Reveal
              key={audience.title}
              delay={i * 0.07}
              className={cn(i < 2 && "lg:col-span-3 md:col-span-2")}
            >
              <article
                className={cn(
                  "group h-full rounded-3xl border border-navy-900/8 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-lavender-300/70 hover:shadow-lift",
                  i < 2 && "lg:flex lg:items-center lg:gap-7"
                )}
              >
                <span className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender-500 to-lavender-700 p-3.5 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <audience.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className={cn(i < 2 && "lg:flex-1")}>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900 lg:mt-0">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500 lg:mt-2">
                    {audience.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
