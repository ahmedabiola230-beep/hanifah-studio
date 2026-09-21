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
    body: "Clean, modern design built around your business. Not a template with your logo dropped on top.",
  },
  {
    icon: Smartphone,
    title: "Designed for phones first",
    body: "Most of your customers will find you on a phone. Your website gets designed for small screens first, then adapted for tablets and computers.",
  },
  {
    icon: Sparkles,
    title: "A smarter way to build",
    body: "AI tools help me explore ideas and move quickly. A real designer, me, still checks every page, every word, and every button before anything ships.",
  },
  {
    icon: Package,
    title: "Room for your whole business",
    body: "Your products, your services, and your story, laid out so a stranger can understand what you do in seconds.",
  },
  {
    icon: MessagesSquare,
    title: "Clear ways to reach you",
    body: "Buttons, forms, and contact links placed exactly where people decide to act. Interested visitors should never have to hunt for how to reach you.",
  },
  {
    icon: ServerOff,
    title: "Hosting with no separate fee",
    body: "Hosting is arranged as part of our agreement, so no monthly hosting bill shows up out of nowhere. Your domain is the one thing you buy yourself.",
  },
];

/**
 * Solution section: how the AI assisted design workflow solves the problem.
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
          description="I design websites the way a good tailor makes a suit. Made for you, measured properly, nothing off the rack. AI tools help me work faster. Human judgment keeps every detail right."
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
