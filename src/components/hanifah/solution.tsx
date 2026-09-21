import {
  Palette,
  Smartphone,
  Sparkles,
  Package,
  MessagesSquare,
  ServerOff,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const FEATURES = [
  {
    icon: Palette,
    title: "Professional website design",
    body: "Modern, polished layouts tailored to your brand — built with intention, not stitched together from a generic template.",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly layouts",
    body: "Most of your customers will meet you on a phone. Every page is designed to look sharp and work smoothly on small screens first.",
  },
  {
    icon: Sparkles,
    title: "AI-powered design workflow",
    body: "AI accelerates layout exploration and drafting, while every decision — structure, words, visuals — is guided by human creative direction.",
  },
  {
    icon: Package,
    title: "Business & product presentation",
    body: "Your products, services, and story presented clearly, so visitors instantly understand what you offer and why it matters to them.",
  },
  {
    icon: MessagesSquare,
    title: "Clear customer inquiry paths",
    body: "Strategic buttons, forms, and contact links placed where they matter — so interested visitors always know exactly how to reach you.",
  },
  {
    icon: ServerOff,
    title: "Hosting without a separate hosting fee",
    body: "Under the hosting arrangement agreed with each client, there's no separate monthly hosting bill to keep track of. Terms are explained before you commit.",
  },
];

/**
 * Solution section: how AI-powered design + creative direction solves the problem.
 */
export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-cream-100 py-20 sm:py-24 lg:py-28" aria-labelledby="solution-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-lavender-200/40 blur-3xl"
      />
      <div className="site-container relative">
        <SectionHeading
          eyebrow="The Solution"
          title={
            <>
              A professional website, <span className="text-lavender-600">made simpler with AI.</span>
            </>
          }
          description="I combine AI-powered design workflows with thoughtful creative direction to build modern websites tailored to each business — moving faster than a traditional agency, without leaving you with a DIY project."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.07}>
              <article className="group h-full rounded-3xl border border-navy-900/6 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-1 hover:ring-lavender-300/60">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-lavender-300 shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <feature.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
