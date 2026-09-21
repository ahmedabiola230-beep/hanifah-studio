"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "Do I have to pay for hosting?",
    a: "No. Under the hosting arrangement agreed with each client, hosting is provided without a separate hosting fee — you won't receive a monthly hosting bill from me. The details of that arrangement, including what's included and any limitations, are explained clearly in writing before you commit to a project.",
  },
  {
    q: "How much will my domain cost?",
    a: "You purchase your domain separately, directly from a registrar. My intended domain budget is under $11 per year, and many common extensions fit within that. However, actual prices vary by registrar, extension, taxes, promotions, and — importantly — renewal pricing, so I'll confirm the exact first-year and renewal price with you before you buy anything.",
  },
  {
    q: "Do I own my domain?",
    a: "Yes, completely. Your domain is registered in your name under your own account. You control it, and you can take it with you anywhere. I'll walk you through the purchase if you've never done it before — it usually takes just a few minutes.",
  },
  {
    q: "Can you design an e-commerce website?",
    a: "Yes. E-commerce design is one of my core services — including product catalogs, product pages, and cart-ready purchase flows. The right setup (platform, payment processing, inventory features) depends on your products and how you sell, so we'll agree on the exact scope and any platform costs before the project starts.",
  },
  {
    q: "How long does a website take to build?",
    a: "It depends on the scope: a focused landing page is quicker than a full multi-page e-commerce site, and your feedback rounds and content readiness also affect the timeline. Rather than quote a generic number, I'll give you a clear, realistic time estimate for your specific project before we begin — and keep you updated throughout.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Yes — mobile-friendly is the default, not an add-on. Every website I design is built to look sharp and work smoothly on phones and tablets, and it's checked across screen sizes before launch. Most of your visitors will arrive on a phone, so this gets treated as a priority, not an afterthought.",
  },
  {
    q: "Do I need coding knowledge?",
    a: "No. You don't need to touch a single line of code. I handle the design and technical setup for you, and everything that matters to you — content, images, how inquiries reach you — is explained in plain language. If you ever want to make simple edits yourself, I'll show you how.",
  },
  {
    q: "Are there any additional costs?",
    a: "The main cost beyond your project quote is your domain, which you buy separately. Beyond that, any third-party services, paid integrations, platform costs, or ongoing maintenance options are always disclosed upfront, in writing, before you commit. Nothing is ever added to your project without your approval.",
  },
];

/**
 * FAQ accordion — eight honest answers covering costs, domains,
 * hosting, process, and capabilities.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="faq-heading">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: sticky heading + nudge */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Honest answers, <span className="text-lavender-600">before you even ask.</span>
                </>
              }
              description="Clear explanations about costs, domains, hosting, and the process — so there are no surprises later."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-3xl border border-lavender-300/50 bg-lavender-100/50 p-6">
                <p className="font-display text-base font-bold text-navy-900">
                  Still unsure about something?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Every project is different, and your questions deserve specific answers. Ask me
                  anything — no pressure, no obligation.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
                >
                  Ask Your Question
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-navy-900/8 bg-cream-50 px-5 mb-3 last:border-b last:border-navy-900/8 data-[state=open]:border-lavender-300/70 data-[state=open]:bg-white data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="py-4.5 text-left font-display text-[1rem] font-bold text-navy-900 hover:no-underline hover:text-lavender-700 [&>svg]:text-lavender-600 [&>svg]:shrink-0">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-ink-500">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
