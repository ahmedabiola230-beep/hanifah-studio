import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "./projects";
import { PAGE_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * One portfolio card. Shows the project image, the industry chip, the
 * brand name, a short description, and the two actions Hanifah wants on
 * every project: open the live website in a new tab, or start a
 * conversation about a similar project.
 */
export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      className={cn(
        "group flex h-full min-w-0 flex-col rounded-3xl border border-navy-900/8 bg-white p-3 shadow-soft ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        project.ringClass
      )}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.alt}
          placeholder="blur"
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-lavender-200 backdrop-blur">
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
            aria-hidden="true"
          />
          Live Project
        </span>
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

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2 sm:flex-none"
          >
            View Live Website
            <ExternalLink className="h-4 w-4 text-lavender-300" aria-hidden="true" />
          </a>
          <a
            href={PAGE_ROUTES.contact}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-lavender-400/70 hover:bg-lavender-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2 sm:flex-none"
          >
            Discuss a Similar Project
            <ArrowUpRight className="h-4 w-4 text-lavender-600" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
