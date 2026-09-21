import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { InquiryForm } from "./inquiry-form";
import { PortraitImage } from "./portrait";
import { SITE } from "@/lib/site";

const NEXT_STEPS = [
  {
    step: "1",
    title: "Share your details",
    body: "Fill in the form below. Your business, your goals, and the website you have in mind. The more you share, the more useful my first reply will be.",
  },
  {
    step: "2",
    title: "Get a clear, honest reply",
    body: "I will respond personally with follow up questions, a realistic timeline, and a clear, no obligation quote that includes every possible cost.",
  },
  {
    step: "3",
    title: "Decide freely",
    body: "No pressure, and no chasing. If it feels right, we start. If not, you still leave the conversation knowing exactly what a professional website involves.",
  },
];

/**
 * Contact page content: what happens after reaching out, direct
 * channels, and the working inquiry form.
 */
export function ContactSection() {
  return (
    <section
      id="contact-form-section"
      className="relative overflow-hidden bg-white pb-20 sm:pb-24 lg:pb-28"
      aria-labelledby="contact-section-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-lavender-200/40 blur-3xl"
      />
      <div className="site-container relative">
        <h2 id="contact-section-heading" className="sr-only">
          Send your inquiry
        </h2>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left: what happens next + direct channels */}
          <div>
            <Reveal>
              <h3 className="font-display text-lg font-bold text-navy-900">
                What happens after you reach out
              </h3>
              <ol className="mt-6 space-y-6">
                {NEXT_STEPS.map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-100 font-display text-sm font-bold text-lavender-700 ring-1 ring-lavender-300/60"
                    >
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-semibold text-navy-900">{step.title}</h4>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-500">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 rounded-3xl border border-navy-900/8 bg-cream-50 p-6">
                <h3 className="font-display text-base font-bold text-navy-900">
                  Prefer to reach out directly?
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="group flex items-center gap-3 rounded-2xl p-2 text-[0.95rem] font-medium text-ink-600 transition-colors hover:bg-lavender-100/60 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft ring-1 ring-navy-900/8 transition-colors group-hover:bg-lavender-600 group-hover:text-white">
                        <Mail className="h-4.5 w-4.5 text-lavender-600 group-hover:text-white" aria-hidden="true" />
                      </span>
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl p-2 text-[0.95rem] font-medium text-ink-600 transition-colors hover:bg-lavender-100/60 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft ring-1 ring-navy-900/8 transition-colors group-hover:bg-lavender-600 group-hover:text-white">
                        <MessageCircle className="h-4.5 w-4.5 text-lavender-600 group-hover:text-white" aria-hidden="true" />
                      </span>
                      {SITE.whatsappLabel}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 p-2 text-[0.95rem] font-medium text-ink-600">
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-navy-900/8">
                      <PortraitImage sizes="40px" className="object-cover" />
                    </span>
                    I usually reply within one business day
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: the form */}
          <Reveal delay={0.1} direction="left">
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
