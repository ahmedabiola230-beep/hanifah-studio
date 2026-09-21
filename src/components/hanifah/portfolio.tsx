"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { BrowserFrame } from "./mockups";
import { PROJECTS, type ConceptProject } from "./projects";
import { PAGE_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Portfolio grid with three clearly labelled concept projects.
 * Each card opens a detail dialog with a larger preview. Set
 * `showHeading` to false when the page already provides a heading.
 */
export function Portfolio({ showHeading = true }: { showHeading?: boolean }) {
  const [openProject, setOpenProject] = useState<ConceptProject | null>(null);

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
            description="Three industries, three looks, one standard. Each project was planned, structured, and styled from scratch."
          />
        )}

        {/* Honest labelling notice */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 rounded-2xl border border-lavender-300/50 bg-lavender-100/60 px-4 py-3 text-center text-[13px] leading-relaxed text-navy-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-lavender-700" aria-hidden="true" />
            <span>
              All three projects below are <strong>concept projects</strong>, made to show my
              design style and process. They are not client work, and no client relationships or
              results are implied.
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} className="h-full min-w-0">
              <article
                className={cn(
                  "group flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-4 shadow-soft ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
                  project.ringClass
                )}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <BrowserFrame
                    url={`${project.id}.demo`}
                    label={project.ariaLabel}
                    className="shadow-none transition-transform duration-500 group-hover:scale-[1.02]"
                  >
                    <div className="pointer-events-none">{project.mock}</div>
                  </BrowserFrame>
                  <Badge
                    className="absolute left-3 top-9 rounded-full bg-navy-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-lavender-200 backdrop-blur hover:bg-navy-950/85"
                  >
                    Concept Project
                  </Badge>
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
                  <h3 className="mt-3 font-display text-xl font-bold text-navy-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-500">
                    {project.tagline}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenProject(project)}
                    aria-haspopup="dialog"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
                  >
                    View Concept
                    <ArrowRight className="h-4 w-4 text-lavender-300" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Replacement note for Hanifah */}
        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink-400">
            As real projects are completed, this space will grow with genuine client work, each
            with its own story.
          </p>
        </Reveal>
      </div>

      {/* Project detail dialog */}
      <Dialog open={openProject !== null} onOpenChange={(open) => !open && setOpenProject(null)}>
        <DialogContent
          className="max-h-[90vh] max-w-4xl overflow-y-auto slim-scrollbar bg-cream-50 p-0 sm:rounded-3xl"
          aria-describedby="project-dialog-description"
        >
          {openProject && (
            <div className="p-5 sm:p-8">
              <div className="relative overflow-hidden rounded-2xl">
                <BrowserFrame
                  url={`${openProject.id}.demo`}
                  label={openProject.ariaLabel}
                  className="shadow-soft"
                >
                  <div className="pointer-events-none">{openProject.mock}</div>
                </BrowserFrame>
                <Badge className="absolute left-3 top-9 rounded-full bg-navy-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-lavender-200 backdrop-blur">
                  Concept Project
                </Badge>
              </div>

              <DialogHeader className="mt-6 space-y-0 text-left">
                <span
                  className={cn(
                    "w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
                    openProject.accentClass
                  )}
                >
                  {openProject.industry}
                </span>
                <DialogTitle className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {openProject.name}
                </DialogTitle>
                <DialogDescription
                  id="project-dialog-description"
                  className="text-base leading-relaxed text-ink-500"
                >
                  {openProject.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-5 space-y-4">
                {openProject.description.map((paragraph, i) => (
                  <p key={i} className="text-[0.95rem] leading-relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h3 className="mt-7 font-display text-base font-bold text-navy-900">
                Design features
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {openProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-lavender-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-lavender-300/50 bg-lavender-100/50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] leading-relaxed text-navy-800">
                  <strong>Concept project.</strong> A demonstration design, not client work. Like
                  what you see? Let&rsquo;s design something for your business.
                </p>
                <a
                  href={PAGE_ROUTES.contact}
                  onClick={() => setOpenProject(null)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
                >
                  Discuss a Project Like This
                  <ArrowRight className="h-4 w-4 text-lavender-300" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
