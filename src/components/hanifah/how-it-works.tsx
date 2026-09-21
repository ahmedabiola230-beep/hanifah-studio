import { MessageSquareText, PenTool, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const STEPS = [
  {
    icon: MessageSquareText,
    step: "Step 1",
    title: "Tell me about your business.",
    body: "We start with a friendly conversation, no jargon. What you sell, who buys it, what you love or hate about other websites, and what this website needs to do for you.",
    detail: "Goals · Customers · Style",
  },
  {
    icon: PenTool,
    step: "Step 2",
    title: "We plan, design, and refine your website.",
    body: "I map the structure first, then design the pages with AI handling the slow, repetitive parts of the work. You review, give feedback, and I refine until it feels right.",
    detail: "Structure · Design · Feedback rounds",
  },
  {
    icon: Rocket,
    step: "Step 3",
    title: "We prepare your website for launch.",
    body: "Following the domain and hosting arrangement we agreed on, I handle the technical setup, check every screen size, connect your contact paths, and walk you through the finished website.",
    detail: "Setup · Checks · Launch",
  },
];

/**
 * Three-step process section with a connected timeline layout.
 */
export function HowItWorks() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="process-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From idea to website in <span className="text-lavender-600">three simple steps.</span>
            </>
          }
          description="A clear, guided process. You always know what is happening, what comes next, and what is needed from you."
        />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-lavender-200 via-lavender-400 to-lavender-200 lg:block"
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.12}>
              <li className="relative flex flex-col items-start">
                <div className="relative z-10 flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-lavender-300 shadow-soft ring-4 ring-white">
                    <step.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-lavender-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-lavender-700">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{step.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-lavender-600">
                  {step.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
