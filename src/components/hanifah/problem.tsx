import { Users, Hourglass, Wallet } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const PAINS = [
  {
    icon: Users,
    title: "Relying on social media alone",
    body: "Your posts live on a platform you don't control. When a customer Googles your business, there's nothing solid to find — no full story, no product details, no easy way to reach you.",
  },
  {
    icon: Hourglass,
    title: "An outdated website quietly costs trust",
    body: "Visitors form an opinion in seconds. A slow, dated, or half-finished site makes people hesitate — even when your product or service is exactly what they need.",
  },
  {
    icon: Wallet,
    title: "Confusing costs that lead to delay",
    body: "Design quotes, monthly hosting fees, technical jargon… it adds up to uncertainty, so the website keeps sliding to the bottom of the to-do list.",
  },
];

/**
 * Empathetic problem section — names the visitor's reality without shaming them.
 */
export function Problem() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="problem-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              Your business is real.{" "}
              <span className="text-lavender-600">Does your online presence show it?</span>
            </>
          }
          description="You've put real work into building something worth noticing. But if your online presence doesn't match that quality, customers may never realize it."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.1}>
              <article className="group h-full rounded-3xl border border-navy-900/8 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lavender-300/70 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-100 text-lavender-700 transition-colors group-hover:bg-lavender-600 group-hover:text-white">
                  <pain.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{pain.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{pain.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium leading-relaxed text-navy-800 text-pretty">
            None of this means you&rsquo;ve done anything wrong — you&rsquo;ve been busy running
            your business.{" "}
            <span className="text-lavender-700">Getting online should be the simple part.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
