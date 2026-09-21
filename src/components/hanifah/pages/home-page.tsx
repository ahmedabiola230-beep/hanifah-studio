import { Hero } from "../hero";
import { Problem } from "../problem";
import { Solution } from "../solution";
import { Services } from "../services";
import { Offer } from "../offer";
import { PortfolioTeaser } from "../portfolio-teaser";
import { HowItWorks } from "../how-it-works";
import { WhoThisIsFor } from "../who-this-is-for";
import { Faq } from "../faq";
import { AboutTeaser } from "../about-teaser";
import { FinalCta } from "../final-cta";

/**
 * Home page: the full story, from the problem to the offer to the FAQ,
 * with teasers that link to the Services, Portfolio, and About pages.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Offer />
      <PortfolioTeaser />
      <HowItWorks />
      <WhoThisIsFor />
      <Faq />
      <AboutTeaser />
      <FinalCta />
    </>
  );
}
