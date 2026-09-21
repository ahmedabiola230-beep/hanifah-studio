import { Compass, MessagesSquare, ShieldCheck, UserRound } from "lucide-react";
import { Reveal } from "./reveal";
import { PAGE_ROUTES } from "@/lib/site";

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Design with intention",
    body: "Every section, headline, and button exists for a reason. Nothing gets added just for decoration.",
  },
  {
    icon: MessagesSquare,
    title: "Speak plainly",
    body: "No jargon and no confusing quotes. You will always understand exactly what is happening with your project.",
  },
  {
    icon: ShieldCheck,
    title: "Be transparent about costs",
    body: "Domain pricing, hosting terms, and any possible extra costs are explained before you commit, never after.",
  },
];

/**
 * The story behind Hanifah Studio: portrait placeholder, honest
 * introduction, and the principles the studio works by. Used on the
 * About page.
 */
export function AboutStory() {
  return (
    <section
      id="about-story"
      className="relative overflow-hidden bg-cream-100 py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-story-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-lavender-200/40 blur-3xl"
      />
      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait placeholder. TODO(Hanifah): replace with a real photo */}
        <Reveal direction="right">
          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-lavender-300/50 to-lavender-200/20 blur-xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-lavender-300/40 bg-gradient-to-br from-navy-900 via-navy-800 to-lavender-900 shadow-lift">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(rgb(195 180 246 / 0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-1 ring-lavender-300/50 backdrop-blur">
                  <span className="font-display text-4xl font-extrabold text-lavender-200">H</span>
                </span>
                <div>
                  <p className="font-display text-base font-bold text-white">Hanifah</p>
                  <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs leading-relaxed text-navy-100/75">
                    <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
                    A real photo of Hanifah will go here
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/80 to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-white px-5 py-3 shadow-lift ring-1 ring-navy-900/8">
              <p className="font-display text-lg font-bold italic text-navy-900">Hanifah</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lavender-600">
                Founder, Hanifah Studio
              </p>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div>
          <h2
            id="about-story-heading"
            className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl"
          >
            Hi, I&rsquo;m <span className="text-lavender-600">Hanifah.</span>
          </h2>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600 text-pretty sm:text-lg">
              <p>
                I run Hanifah Studio, a website design studio for small businesses. I design every
                project myself, with AI tools that make the work faster and my own judgment making
                sure it stays right for your business.
              </p>
              <p>
                Here is why this studio exists. I kept meeting business owners with genuinely good
                products and services, and no real website. Not because they did not care. Because
                websites sounded expensive, technical, and full of monthly fees that nobody
                explained clearly.
              </p>
              <p>
                That bothered me. A good website should not be a luxury or a puzzle. So I learned
                to design and build them using AI tools that remove the slow parts of the work
                without making anything generic. The technology speeds things up. A human still
                checks every screen, every word, and every detail.
              </p>
              <p>
                And I keep things honest. You will always know what things cost and why, before
                you commit to anything. If something is not a good fit for your business, I will
                say so.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {PRINCIPLES.map((principle) => (
                <li
                  key={principle.title}
                  className="rounded-2xl border border-navy-900/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-lavender-300/70 hover:shadow-soft"
                >
                  <principle.icon className="h-5 w-5 text-lavender-600" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold text-navy-900">{principle.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl border border-lavender-300/50 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-base font-bold text-navy-900">
                Want to see if we are a good fit?
              </p>
              <a
                href={PAGE_ROUTES.contact}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:ring-offset-2"
              >
                Let&rsquo;s Talk About Your Website
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
