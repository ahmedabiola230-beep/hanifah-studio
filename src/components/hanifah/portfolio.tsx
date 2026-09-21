"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { BrowserFrame, MockLumiere, MockNorthstar, MockElara } from "./mockups";
import { cn } from "@/lib/utils";

type ConceptProject = {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  description: string[];
  features: string[];
  mock: React.ReactNode;
  accentClass: string;
  ringClass: string;
  ariaLabel: string;
};

const PROJECTS: ConceptProject[] = [
  {
    id: "lumiere",
    name: "Lumière Skin",
    industry: "Premium Skincare · E-commerce",
    tagline: "A calm, editorial shopping experience where the products do the talking.",
    description: [
      "Lumière Skin is a concept for a premium skincare brand that wanted to feel more like a boutique than a webshop. The design pairs warm cream tones with soft blush accents and fine gold details, letting photography and typography carry the elegance.",
      "The layout leads with a full-width brand statement, then moves shoppers gently toward a curated bestseller grid — every element designed to keep the path from inspiration to purchase short and pleasant.",
    ],
    features: [
      "Editorial hero with a soft, luxurious palette",
      "Product grid with clear pricing and quick-add actions",
      "Persistent shopping bag for frictionless checkout",
      "Typography and spacing tuned for a premium feel",
    ],
    mock: <MockLumiere />,
    accentClass: "bg-[#f3e8e0] text-[#8a5a44]",
    ringClass: "hover:ring-[#e3c2b3]",
    ariaLabel: "Concept preview of the Lumière Skin website — a premium skincare e-commerce design with cream and blush tones",
  },
  {
    id: "northstar",
    name: "Northstar Creative",
    industry: "Creative Agency · Brand Studio",
    tagline: "Bold, high-contrast design that positions the agency as confident and modern.",
    description: [
      "Northstar Creative is a concept for a modern brand studio that needed its website to demonstrate the very thing it sells: bold ideas, executed with energy. The near-black canvas and electric amber accent make every headline feel like a statement.",
      "A scrolling services strip adds motion without clutter, while a compact case-study grid shows range at a glance — proof that restraint and impact can share the same page.",
    ],
    features: [
      "Oversized display typography with strong contrast",
      "Animated marquee strip for service highlights",
      "Case-study cards with clear category tags",
      "Dark theme designed for focus and drama",
    ],
    mock: <MockNorthstar />,
    accentClass: "bg-[#1c1a14] text-[#f5a623]",
    ringClass: "hover:ring-[#f5a623]/40",
    ariaLabel: "Concept preview of the Northstar Creative website — a dark, bold creative agency design with amber accents",
  },
  {
    id: "elara",
    name: "Maison Elara",
    industry: "Fashion Boutique · Lookbook",
    tagline: "Quiet luxury through generous whitespace, serif type, and measured rhythm.",
    description: [
      "Maison Elara is a concept for an elegant fashion boutique building a seasonal lookbook experience. Ivory backgrounds, letter-spaced serif headings, and a restrained palette create the feeling of leafing through a printed magazine.",
      "The lookbook grid staggers its imagery like an editorial spread, drawing the eye down the page from look to look — a slow, deliberate browsing pace that suits high-consideration fashion purchases.",
    ],
    features: [
      "Full-bleed seasonal collection hero",
      "Editorial, staggered lookbook grid",
      "Letter-spaced serif typography for a couture feel",
      "Minimal navigation that never competes with imagery",
    ],
    mock: <MockElara />,
    accentClass: "bg-[#ece7dc] text-[#5c554a]",
    ringClass: "hover:ring-[#b9ac9a]",
    ariaLabel: "Concept preview of the Maison Elara website — an elegant ivory fashion boutique design with editorial lookbook",
  },
];

/**
 * Portfolio grid with three clearly-labelled concept projects.
 * Each card opens a detail dialog with a larger preview.
 */
export function Portfolio() {
  const [openProject, setOpenProject] = useState<ConceptProject | null>(null);

  return (
    <section id="portfolio" className="bg-cream-100 py-20 sm:py-24 lg:py-28" aria-labelledby="portfolio-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Websites designed to <span className="text-lavender-600">make businesses stand out.</span>
            </>
          }
          description="A look at my design style across three different industries — each one planned, structured, and styled from scratch."
        />

        {/* Honest labelling notice */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 rounded-2xl border border-lavender-300/50 bg-lavender-100/60 px-4 py-3 text-center text-[13px] leading-relaxed text-navy-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-lavender-700" aria-hidden="true" />
            <span>
              All three projects below are <strong>concept (demo) projects</strong> — created to
              demonstrate my design style and process. They are not client work, and no client
              relationships or results are implied.
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
            As real projects are completed, this space will grow with genuine client work — each
            with its own story and results.
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
                  <strong>Concept project</strong> — a demonstration design, not client work. Like
                  what you see? Let&rsquo;s design something for your business.
                </p>
                <a
                  href="#contact"
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
