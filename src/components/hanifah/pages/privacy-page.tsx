import { LegalPage } from "../legal-page";

/**
 * Privacy Policy page. Describes, in plain language, what the contact
 * form collects and how that information is handled.
 */
export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: September 2026"
      intro="Short version: the contact form collects what you type into it, I use it to reply to you, and that is all."
      sections={[
        {
          heading: "What is collected",
          body: [
            "When you send an inquiry through the contact form, Hanifah Studio receives the details you share: your name, email address, business name, your current website if you include it, the service you picked, and your project description. Nothing else is collected.",
            "This website does not run advertising networks or tracking tools.",
          ],
        },
        {
          heading: "How your details are used",
          body: [
            "One purpose only: to reply to your inquiry, answer your questions, and prepare the quote you asked for. A copy of each inquiry is kept in the studio's records, and your message is also prepared in WhatsApp so the studio receives it and replies quickly. Your information is never sold, rented, or shared with third parties for their own marketing.",
          ],
        },
        {
          heading: "How long it is kept",
          body: [
            "Inquiries are kept only as long as needed to handle your request and any project that comes out of it. If an inquiry does not lead to a project, it gets deleted within 12 months.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "This website does not use advertising or tracking cookies. If that ever changes, this policy will be updated first.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can ask at any time to see, correct, or delete the details you shared. Send a note to the email below and it will be handled promptly.",
          ],
        },
      ]}
    />
  );
}
