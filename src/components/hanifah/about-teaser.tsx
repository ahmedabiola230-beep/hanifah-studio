import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { PAGE_ROUTES } from "@/lib/site";

/**
 * Compact about teaser for the home page. The full story lives on the
 * About page.
 */
export function AboutTeaser() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-teaser-heading"
    >
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          {/* Monogram placeholder */}
          <Reveal>
            <div className="relative mx-auto w-max">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-gradient-to-br from-lavender-300/40 to-lavender-200/10 blur-2xl"
              />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-lavender-900 shadow-lift ring-1 ring-lavender-300/40 sm:h-44 sm:w-44">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[2rem] opacity-30"
                  style={{
                    backgroundImage: "radial-gradient(rgb(195 180 246 / 0.35) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="font-display text-6xl font-extrabold text-lavender-200">H</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2
                id="about-teaser-heading"
                className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl"
              >
                Hi, I&rsquo;m <span className="text-lavender-600">Hanifah.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 text-pretty sm:text-lg">
                I run Hanifah Studio, where I design websites for small businesses. I started it
                after meeting too many business owners with great products and no real website,
                mostly because web design felt expensive, slow, and full of jargon. So I built a
                studio that fixes exactly that.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href={PAGE_ROUTES.about}
                className="group mt-6 inline-flex items-center gap-2 text-base font-semibold text-navy-900 transition-colors hover:text-lavender-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2 rounded-sm"
              >
                Read my full story
                <ArrowRight
                  className="h-4.5 w-4.5 text-lavender-600 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
