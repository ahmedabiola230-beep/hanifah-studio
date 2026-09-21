import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";
import { SITE } from "@/lib/site";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared layout for the Privacy Policy and Terms of Service pages.
 * Plain, honest prose on a quiet background.
 */
export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} />

      <section className="bg-white pb-20 pt-4 sm:pb-24 sm:pt-6" aria-label={`${title} content`}>
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              {updated}
            </p>

            <div className="mt-8 space-y-9">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-lg font-bold text-navy-900 sm:text-xl">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-4">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="text-[0.95rem] leading-relaxed text-ink-600 sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-lavender-300/50 bg-lavender-100/50 p-6">
              <p className="text-sm leading-relaxed text-navy-800">
                Questions about this page? Email{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold underline underline-offset-2 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                >
                  {SITE.email}
                </a>{" "}
                and you will get a straight answer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
