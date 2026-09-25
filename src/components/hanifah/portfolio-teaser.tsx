import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "./projects";
import { PAGE_ROUTES } from "@/lib/site";

/** How many projects the home page teaser shows. The rest live on the portfolio page. */
const TEASER_COUNT = 6;

/**
 * Portfolio highlights on the home page. Compact cards, each with the
 * two project actions, linking through to the full portfolio page.
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
          description="A few of my past projects across different industries. Every card opens the live website in a new tab, so you can judge the work for yourself."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.slice(0, TEASER_COUNT).map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08} className="h-full min-w-0">
              <ProjectCard project={project} />
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
