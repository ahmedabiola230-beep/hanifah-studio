import { Reveal } from "./reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

/**
 * Shared top of page block for the inner pages: warm backdrop, soft
 * lavender glows, page eyebrow, heading, and intro text. Clears the
 * fixed header with padding.
 */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[72px]" aria-labelledby="page-hero-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-100/60 via-cream-100 to-cream-50" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-lavender-300/30 blur-3xl" />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-lavender-200/50 blur-3xl" />
      </div>

      <div className="site-container relative py-14 sm:py-16 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lavender-600">
            <span aria-hidden="true" className="inline-block h-1 w-6 rounded-full bg-lavender-400" />
            {eyebrow}
            <span aria-hidden="true" className="inline-block h-1 w-6 rounded-full bg-lavender-400" />
          </p>
          <h1
            id="page-hero-heading"
            className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 text-balance sm:text-5xl"
          >
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 text-pretty sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
