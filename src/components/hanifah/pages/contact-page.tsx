import { PageHero } from "../page-hero";
import { ContactSection } from "../contact";

/**
 * Contact page: the inquiry form, what happens after reaching out, and
 * the direct channels.
 */
export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s talk about <span className="text-lavender-600">your website.</span>
          </>
        }
        description="Tell me about your business and what you need. I will reply with honest answers and a clear quote. No jargon, no pressure."
      />
      <ContactSection />
    </>
  );
}
