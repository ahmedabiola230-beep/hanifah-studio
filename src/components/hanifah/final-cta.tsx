import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * Final call to action — a visually striking closing panel that funnels
 * every remaining visitor toward the inquiry form.
 */
export function FinalCta() {
  return (
    <section id="cta" className="bg-white pb-20 pt-4 sm:pb-24" aria-labelledby="cta-heading">
      <div className="site-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-900 via-navy-950 to-lavender-900 px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            {/* Decorative glows + rings */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lavender-500/25 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-lavender-400/15 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-lavender-300/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lavender-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Start the Conversation
              </p>
              <h2
                id="cta-heading"
                className="mt-6 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.9rem]"
              >
                Ready to give your business{" "}
                <span className="text-lavender-300">a website?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 text-pretty sm:text-lg">
                Tell me about your business, your goals, and the website you have in mind.
                Let&rsquo;s discuss how we can bring your online presence to life.
              </p>
              <div className="mt-9">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-lavender-400 px-8 py-4.5 text-base font-bold text-navy-950 shadow-glow transition-all hover:-translate-y-0.5 hover:bg-lavender-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:px-10"
                >
                  Let&rsquo;s Talk About Your Website
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <p className="mt-5 text-sm text-navy-100/60">
                Free conversation · Clear quote · No obligation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
