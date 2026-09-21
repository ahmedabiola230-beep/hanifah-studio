import { LegalPage } from "../legal-page";

/**
 * Terms of Service page. Plain language summary of how projects with
 * Hanifah Studio work, including the domain and hosting arrangements.
 */
export function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Last updated: September 2026"
      intro="The plain language version of how projects with Hanifah Studio work. The written agreement for your project always takes precedence."
      sections={[
        {
          heading: "What Hanifah Studio provides",
          body: [
            "Website design and setup services for small businesses. The exact scope of any project, including pages, features, content, timeline, and price, is defined in a written agreement before work begins.",
          ],
        },
        {
          heading: "Quotes and payment",
          body: [
            "Every project gets its own quote based on what you actually need. You see the full scope and price in writing before anything starts, and nothing gets added without your approval.",
          ],
        },
        {
          heading: "Domains",
          body: [
            "Clients buy their domain separately and register it in their own name. That means the domain belongs to you, and you are responsible for the renewal fees set by your registrar. Real domain prices vary by registrar, extension, taxes, promotions, and renewal rates.",
          ],
        },
        {
          heading: "Hosting",
          body: [
            "Hosting is provided with no separate hosting fee under the arrangement agreed with each client. What that arrangement includes, its limits, and its duration are explained in writing before a client commits to a project.",
          ],
        },
        {
          heading: "Third party costs",
          body: [
            "Any third party services, paid tools, platform costs, or maintenance options are disclosed in writing before you commit. Nothing is ever added to a project without the client's approval.",
          ],
        },
        {
          heading: "Your content",
          body: [
            "You keep ownership of everything you provide for the website, including text, images, and logos. By sending materials for your project, you confirm that you have the right to use them.",
          ],
        },
        {
          heading: "Portfolio projects",
          body: [
            "Projects shown on the portfolio page are concept projects, created to demonstrate design style. They are not client work, and no client relationships, results, or testimonials are implied.",
          ],
        },
        {
          heading: "About results",
          body: [
            "A good website helps your business look professional and makes it easy to contact. No designer can honestly guarantee specific sales, traffic numbers, or search rankings, and I will not pretend otherwise.",
          ],
        },
      ]}
    />
  );
}
