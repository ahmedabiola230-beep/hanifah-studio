import { PageHero } from "../page-hero";
import { AboutStory } from "../about";

/**
 * About page: who Hanifah is, why the studio exists, and how it works.
 */
export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            The person behind <span className="text-lavender-600">the websites.</span>
          </>
        }
        description="One designer, honest pricing, plain language, and websites built with care."
      />
      <AboutStory />
    </>
  );
}
