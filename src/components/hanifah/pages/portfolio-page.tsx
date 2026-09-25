import { PageHero } from "../page-hero";
import { Portfolio } from "../portfolio";

/**
 * Portfolio page: every past project, each with a link to the live
 * website and a direct way to start a conversation about similar work.
 */
export function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Websites designed to{" "}
            <span className="text-lavender-600">make businesses stand out.</span>
          </>
        }
        description="Real past projects across ten different industries. Every card links to the live website in a new tab, so you can see exactly how the work holds up."
      />
      <Portfolio showHeading={false} />
    </>
  );
}
