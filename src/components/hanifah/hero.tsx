import { ArrowRight, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { BrowserFrame, PhoneFrame, MockVeronaDesktop, MockVeronaMobile } from "./mockups";
import { PAGE_ROUTES } from "@/lib/site";

/**
 * Hero: benefit-led headline, supporting copy, two CTAs and a layered
 * desktop + mobile mockup showing a premium business website.
 */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[72px]" aria-labelledby="hero-heading">
      {/* Backdrop: warm base with lavender glows and a fine grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-100/60 via-cream-100 to-cream-50" />
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-lavender-300/30 blur-3xl" />
        <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-lavender-200/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(11 17 32 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(11 17 32 / 0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="site-container relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-24">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-[3.4rem]"
            >
              Let&rsquo;s get your business website online,{" "}
              <span className="box-decoration-clone bg-lavender-300/50 px-1.5 [text-box-decoration-break:clone]">
                without the extra hosting bill.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
              You do not pay for hosting. Your website runs under the arrangement we agree on,
              and the only extra cost is your domain name, which you buy yourself for around
              $11 per year.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PAGE_ROUTES.contact}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
              >
                Let&rsquo;s Build Your Website
                <ArrowRight
                  className="h-5 w-5 text-lavender-300 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={PAGE_ROUTES.portfolio}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-7 py-4 text-base font-semibold text-navy-900 ring-1 ring-navy-900/12 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-lavender-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
              >
                Explore My Work
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-500">
              <li className="flex items-center gap-2">
                <MonitorSmartphone className="h-4 w-4 text-lavender-600" aria-hidden="true" />
                Looks right on phones, tablets, and computers
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-lavender-600" aria-hidden="true" />
                Clear, honest terms before you commit
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Visual: layered device mockup */}
        <Reveal delay={0.2} direction="none" className="relative">
          <div className="relative mx-auto max-w-[560px] pb-24 sm:pb-20">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-lavender-300/40 via-lavender-200/20 to-transparent blur-2xl"
            />

            {/* Desktop mockup */}
            <div className="relative animate-float-slow">
              <BrowserFrame
                url="verona-home.com"
                label="Preview of a premium business website designed by Hanifah Studio, shown in a desktop browser"
                className="relative z-10"
              >
                <MockVeronaDesktop />
              </BrowserFrame>

              {/* Floating chip: hosting */}
              <div className="absolute -bottom-5 -left-3 z-20 hidden animate-float items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lift ring-1 ring-navy-900/8 backdrop-blur sm:flex lg:-left-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lavender-100">
                  <ShieldCheck className="h-4 w-4 text-lavender-700" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold leading-tight text-navy-900">
                  No separate hosting fee
                  <span className="block text-[10px] font-medium text-ink-400">
                    Under the agreed arrangement*
                  </span>
                </span>
              </div>
            </div>

            {/* Phone mockup overlapping bottom-right */}
            <PhoneFrame
              label="Mobile version of the same website, shown on a smartphone"
              className="absolute -bottom-2 -right-2 z-20 w-[104px] animate-float sm:-right-6 sm:w-[128px]"
            >
              <MockVeronaMobile />
            </PhoneFrame>
          </div>

          {/* Footnote */}
          <p className="relative mx-auto max-w-[560px] pr-2 text-[11px] leading-snug text-ink-400 sm:pr-24">
            *Sample design shown. Hosting terms are always agreed and explained in writing before
            any project starts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
