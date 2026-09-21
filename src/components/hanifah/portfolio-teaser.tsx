import { ArrowUpRight, Info } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { BrowserFrame } from "./mockups";
import { PROJECTS } from "./projects";
import { PAGE_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Portfolio highlights on the home page. Compact cards that link to the
 * full portfolio page, where each concept project can be opened in
 * detail.
 */
export function PortfolioTeaser() {
  return (
    <section
      id="portfolio"
      className="bg-cream-100 py-20 sm:py-24 lg:py-28"
      aria-labelledby="portfolio-teaser-heading"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Websites designed to{" "}
              <span className="text-lavender-600">make businesses stand out.</span>
            </>
          }
          description="Three industries, three looks, one standard. Each project was planned, structured, and styled from scratch."
        />

        {/* Honest labelling notice */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 rounded-2xl border border-lavender-300/50 bg-lavender-100/60 px-4 py-3 text-center text-[13px] leading-relaxed text-navy-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-lavender-700" aria-hidden="true" />
            <span>
              These are <strong>concept projects</strong>, made to show my design style. They are
              not client work, and no client results are implied.
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className="h-full min-w-0">
              <a
                href={PAGE_ROUTES.portfolio}
                className={cn(
                  "group flex h-full min-w-0 flex-col rounded-3xl border border-navy-900/8 bg-white p-4 shadow-soft ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
                  project.ringClass
                )}
                aria-label={`See the ${project.name} concept project on the portfolio page`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <BrowserFrame
                    url={`${project.id}.demo`}
                    label={project.ariaLabel}
                    className="shadow-none transition-transform duration-500 group-hover:scale-[1.02]"
                  >
                    <div className="pointer-events-none">{project.mock}</div>
                  </BrowserFrame>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <span
                    className={cn(
                      "inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
                      project.accentClass
                    )}
                  >
                    {project.industry}
                  </span>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-navy-900/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lavender-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {project.tagline}
                  </p>
                  <span className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-lavender-700">
                    Concept Project
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <p className="mt-10 text-center">
            <a
              href={PAGE_ROUTES.portfolio}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
            >
              View the Full Portfolio
              <ArrowUpRight className="h-4 w-4 text-lavender-300" aria-hidden="true" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
