"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

type LegalKind = "privacy" | "terms";

const CONTENT: Record<LegalKind, { title: string; updated: string; sections: { heading: string; body: string[] }[] }> = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "What is collected",
        body: [
          "When you submit the inquiry form, Hanifah Studio collects the details you provide: your name, email address, business name, current website (if shared), the service you selected, and your project description. Nothing else is required, and no analytics trackers or advertising cookies are used on this website.",
        ],
      },
      {
        heading: "How it is used",
        body: [
          "Your details are used for one purpose only: to reply to your inquiry, answer your questions, and prepare a quote you asked for. Your information is never sold, rented, or shared with third parties for their own marketing.",
        ],
      },
      {
        heading: "How long it is kept",
        body: [
          "Inquiries are kept only as long as needed to handle your request and any resulting project. If your inquiry doesn't lead to a project, it is deleted within 12 months.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          `You can ask at any time to see, correct, or delete the details you shared — just email ${SITE.email} and it will be handled promptly.`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "Services",
        body: [
          "Hanifah Studio provides website design and setup services. The exact scope of any project — pages, features, content, timelines, and price — is defined in a written project agreement before work begins.",
        ],
      },
      {
        heading: "Domains",
        body: [
          "Clients purchase their domain separately and register it in their own name; the client is responsible for renewal fees set by their registrar. Actual domain prices vary by registrar, extension, taxes, promotions, and renewal rates.",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "Hosting is provided without a separate hosting fee under the hosting arrangement agreed with each client. The terms of that arrangement — including what is included, its limitations, and its duration — are explained in writing before a client commits.",
        ],
      },
      {
        heading: "Third-party costs",
        body: [
          "Any third-party services, paid integrations, platform costs, or maintenance options are disclosed before a client commits, and are never added to a project without the client's approval.",
        ],
      },
      {
        heading: "Portfolio content",
        body: [
          "Projects shown in the portfolio section are concept (demo) projects created to demonstrate design style. They are not client work, and no client relationships, results, or testimonials are implied.",
        ],
      },
    ],
  },
};

type LegalDialogProps = {
  kind: LegalKind;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Accessible dialog presenting the studio's Privacy Policy or Terms of
 * Service. Used in the footer and next to the inquiry form so every
 * legal link resolves to real content (no dead links).
 */
export function LegalDialog({ kind, className, children }: LegalDialogProps) {
  const [open, setOpen] = useState(false);
  const content = CONTENT[kind];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={cn(
          "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2 rounded-sm",
          className
        )}
      >
        {children ?? content.title}
      </button>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto slim-scrollbar bg-cream-50 sm:rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-navy-900">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-ink-400">{content.updated}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="font-display text-base font-bold text-navy-900">{section.heading}</h3>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-2 text-sm leading-relaxed text-ink-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <p className="rounded-2xl border border-lavender-300/50 bg-lavender-100/50 p-4 text-xs leading-relaxed text-navy-800">
            Questions about this {content.title.toLowerCase()}? Email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold underline underline-offset-2 hover:text-navy-900"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
