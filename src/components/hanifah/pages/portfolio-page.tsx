import { PageHero } from "../page-hero";
import { Portfolio } from "../portfolio";

/**
 * Portfolio page: the three concept projects, each with an openable
 * detail view explaining the design decisions behind it.
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
        description="A look at my design style across three industries. Each project was planned, structured, and styled from scratch. Open any of them to see the thinking behind it."
      />
      <Portfolio showHeading={false} />
    </>
  );
}
