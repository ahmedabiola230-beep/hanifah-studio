import { Header } from "@/components/hanifah/header";
import { Hero } from "@/components/hanifah/hero";
import { Problem } from "@/components/hanifah/problem";
import { Solution } from "@/components/hanifah/solution";
import { Services } from "@/components/hanifah/services";
import { Offer } from "@/components/hanifah/offer";
import { Portfolio } from "@/components/hanifah/portfolio";
import { HowItWorks } from "@/components/hanifah/how-it-works";
import { WhoThisIsFor } from "@/components/hanifah/who-this-is-for";
import { Faq } from "@/components/hanifah/faq";
import { About } from "@/components/hanifah/about";
import { Contact } from "@/components/hanifah/contact";
import { FinalCta } from "@/components/hanifah/final-cta";
import { Footer } from "@/components/hanifah/footer";
import { SITE } from "@/lib/site";

/** JSON-LD structured data — honest, no fabricated ratings or reviews. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description:
    "AI-powered website design for small businesses, startups, e-commerce brands, and service providers. Websites designed with a simpler hosting arrangement — no separate hosting fee under the agreed arrangement; clients purchase their domain separately.",
  url: SITE.url,
  email: SITE.email,
  founder: {
    "@type": "Person",
    name: "Hanifah",
    jobTitle: "AI Website Designer",
  },
  knowsAbout: [
    "Website design",
    "Landing page design",
    "E-commerce websites",
    "Website redesign",
    "AI-powered design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Offer />
        <Portfolio />
        <HowItWorks />
        <WhoThisIsFor />
        <Faq />
        <About />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
