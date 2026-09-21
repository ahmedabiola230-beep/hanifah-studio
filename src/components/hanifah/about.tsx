import { Compass, MessagesSquare, ShieldCheck, UserRound } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Design with intention",
    body: "Every section, headline, and button on your website exists for a reason — nothing is added just for decoration.",
  },
  {
    icon: MessagesSquare,
    title: "Speak plainly",
    body: "No technical jargon, no confusing quotes. You'll always understand exactly what's happening with your project.",
  },
  {
    icon: ShieldCheck,
    title: "Be transparent about costs",
    body: "Domain pricing, hosting terms, and any potential extra costs are explained before you commit — never after.",
  },
];

/**
 * About section: warm introduction for Hanifah with a placeholder
 * for a real profile photo (to be added later).
 */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-100 py-20 sm:py-24 lg:py-28" aria-labelledby="about-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-lavender-200/40 blur-3xl"
      />
      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait placeholder — TODO(Hanifah): replace with a real photo */}
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
              {/* Placeholder state */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-1 ring-lavender-300/50 backdrop-blur">
                  <span className="font-display text-4xl font-extrabold text-lavender-200">H</span>
                </span>
                <div>
                  <p className="font-display text-base font-bold text-white">Profile photo</p>
                  <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs leading-relaxed text-navy-100/75">
                    <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
                    Placeholder — a real photo of Hanifah will go here
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/80 to-transparent" />
            </div>
            {/* Floating signature card */}
            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-white px-5 py-3 shadow-lift ring-1 ring-navy-900/8">
              <p className="font-display text-lg font-bold italic text-navy-900">Hanifah</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lavender-600">
                Founder, Hanifah Studio
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About"
            title={
              <>
                Hi, I&rsquo;m <span className="text-lavender-600">Hanifah.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600 text-pretty sm:text-lg">
              <p>
                I&rsquo;m an AI website designer, and I help businesses build a professional online
                presence through thoughtful design and AI-powered workflows.
              </p>
              <p>
                I started Hanifah Studio because I kept meeting business owners with genuinely
                great products and services — whose online presence didn&rsquo;t show it. Not
                because they didn&rsquo;t care, but because traditional web design felt expensive,
                slow, and full of jargon.
              </p>
              <p>
                My approach is different: I use AI to make the design process faster and more
                affordable, while every decision — the structure, the words, the visuals — is
                guided by real creative judgment and a genuine interest in your business. And I
                keep things honest: you&rsquo;ll always know what things cost and why, before you
                commit to anything.
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
        </div>
      </div>
    </section>
  );
}
