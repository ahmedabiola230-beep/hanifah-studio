import { CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { PAGE_ROUTES } from "@/lib/site";

const OFFER_POINTS = [
  {
    title: "Design and setup, scoped and quoted upfront",
    body: "Your website is designed and set up according to the project scope and price we agree on. Written down before any work begins.",
  },
  {
    title: "You buy your domain separately, and you own it",
    body: "Your domain is registered in your name, under your account, and it stays that way. You are never locked in.",
  },
  {
    title: "Plan for a domain under $11 per year",
    body: "I plan most projects around common domains priced under $11 a year. Real prices vary by registrar, extension, taxes, promotions, and renewal rates, so I confirm the exact price with you before you buy.",
  },
  {
    title: "No separate hosting bill",
    body: "Hosting is provided under the arrangement we agree on, with no separate hosting fee. Nothing to track, nothing to renew on your side.",
  },
  {
    title: "Every possible extra cost, disclosed upfront",
    body: "Third party services, paid tools, platform costs, maintenance. If it could ever cost money, you hear it from me first, in writing, before you commit.",
  },
];

/**
 * The Offer section: dark, high contrast panel explaining the hosting and
 * domain arrangement honestly, with explicit disclosure commitments.
 */
export function Offer() {
  return (
    <section id="offer" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28" aria-labelledby="offer-heading">
      {/* Backdrop glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-lavender-700/25 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[26rem] w-[26rem] rounded-full bg-navy-600/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgb(169 143 240 / 0.14) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left: headline + summary */}
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lavender-300">
              <span aria-hidden="true" className="inline-block h-1 w-6 rounded-full bg-lavender-400" />
              The Offer
            </p>
            <h2
              id="offer-heading"
              className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white text-balance sm:text-4xl"
            >
              Get your business online{" "}
              <span className="text-lavender-300">without a separate hosting bill.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-100/85 text-pretty sm:text-lg">
              Most website quotes hide the real cost in monthly fees. Here is exactly how my
              arrangement works, in plain language, so you can decide with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8">
              <a
                href={PAGE_ROUTES.contact}
                className="group inline-flex items-center gap-2 rounded-full bg-lavender-400 px-7 py-4 text-base font-semibold text-navy-950 shadow-glow transition-all hover:-translate-y-0.5 hover:bg-lavender-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                Discuss Your Website Project
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-4 text-sm text-navy-100/70">
                No obligation. You get clear answers and a quote before anything is agreed.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: honest point-by-point breakdown */}
        <Reveal delay={0.1} direction="left">
          <ul className="space-y-4">
            {OFFER_POINTS.map((point) => (
              <li
                key={point.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:border-lavender-400/40 hover:bg-white/[0.07]"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-lavender-300"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-bold text-white">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-100/75">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-start gap-2.5 rounded-2xl border border-lavender-400/25 bg-lavender-400/10 p-4 text-[13px] leading-relaxed text-lavender-100/90">
            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-lavender-300" aria-hidden="true" />
            The hosting arrangement, what it includes, its limits, and any third party costs are
            explained in writing before you commit to anything.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
