import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "./projects";
import { PAGE_ROUTES } from "@/lib/site";

/**
 * Portfolio grid with all live projects. Every card links to the real
 * website in a new tab, so visitors can judge the work for themselves.
 * Set `showHeading` to false when the page already provides a heading.
 */
export function Portfolio({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="portfolio" className="bg-cream-100 pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28" aria-label="Portfolio projects">
      <div className="site-container">
        {showHeading && (
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Websites designed to <span className="text-lavender-600">make businesses stand out.</span>
              </>
            }
            description="Twelve industries, twelve looks, one standard. Each project below is a website I designed and built, and each one is live right now."
          />
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08} className="h-full min-w-0">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Closing call to action */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-lavender-300/50 bg-gradient-to-br from-lavender-100/80 to-cream-50 p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl font-bold text-navy-900">
              See something close to what your business needs?
            </h3>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-600">
              Tell me about your business and the project above that feels closest to it. I will
              send you a plan, a timeline, and a quote, with no pressure to commit.
            </p>
            <a
              href={PAGE_ROUTES.contact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
            >
              Discuss a Similar Project
              <ArrowRight className="h-4 w-4 text-lavender-300" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
