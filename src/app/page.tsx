import { SiteShell } from "@/components/hanifah/site-shell";
import { SITE } from "@/lib/site";

/** JSON-LD structured data. Honest, no fabricated ratings or reviews. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description:
    "Website design for small businesses, startups, ecommerce brands, and service providers. Websites are designed with AI and reviewed by a human designer. Hosting is arranged with no separate hosting fee under the arrangement agreed with each client, and clients purchase their own domain separately.",
  url: SITE.url,
  email: SITE.email,
  founder: {
    "@type": "Person",
    name: "Hanifah",
    jobTitle: "Website Designer",
  },
  knowsAbout: [
    "Website design",
    "Landing page design",
    "Ecommerce websites",
    "Website redesign",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell />
    </>
  );
}
