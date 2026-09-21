import { cn } from "@/lib/utils";

/* ============================================================
   Device frames
   ============================================================ */

/** Desktop browser window frame with traffic-light dots and a URL bar. */
export function BrowserFrame({
  url,
  children,
  className,
  label,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lift",
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/90 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
        </div>
        <div
          aria-hidden="true"
          className="mx-auto flex w-full max-w-[240px] items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[8px] font-medium text-slate-400 ring-1 ring-slate-200/70"
        >
          <svg viewBox="0 0 24 24" className="h-2 w-2 shrink-0 text-emerald-500" fill="currentColor">
            <path d="M12 1a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v3h6V6a3 3 0 0 0-3-3Z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

/** Smartphone frame with a punch-hole notch. */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-[1.6rem] border-[5px] border-navy-950 bg-navy-950 shadow-lift ring-1 ring-white/10",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[1.15rem] bg-white">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-navy-950"
        />
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   Shared skeleton atoms (used inside mock sites)
   ============================================================ */

function Line({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("h-1 rounded-full", className)} />;
}

/* ============================================================
   1. "Verona Home" — premium interior studio (hero mockup)
   ============================================================ */

/** Desktop variant of the Verona Home mock site. */
export function MockVeronaDesktop({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#f7f2ec] text-[#2b2620]", className)}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
        <span className="font-display text-[10px] font-bold tracking-[0.12em] text-[#2b2620]">
          VERONA<span className="text-[#b4654a]">HOME</span>
        </span>
        <div className="hidden items-center gap-3 sm:flex" aria-hidden="true">
          <Line className="w-7 bg-[#d8cfc2]" />
          <Line className="w-7 bg-[#d8cfc2]" />
          <Line className="w-7 bg-[#d8cfc2]" />
        </div>
        <span className="rounded-full bg-[#2b2620] px-2.5 py-1 text-[7px] font-semibold text-white">
          Book a Consult
        </span>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-5 gap-3 px-4 pb-4 pt-2 sm:px-5">
        <div className="col-span-3 flex flex-col justify-center">
          <span className="text-[6px] font-bold uppercase tracking-[0.22em] text-[#b4654a]">
            Interior Atelier
          </span>
          <p className="mt-1.5 font-display text-[15px] font-bold leading-[1.1] sm:text-[19px]">
            Rooms that feel like you.
          </p>
          <div className="mt-2.5 space-y-1.5" aria-hidden="true">
            <Line className="w-11/12 bg-[#e3d9cb]" />
            <Line className="w-9/12 bg-[#e3d9cb]" />
            <Line className="w-7/12 bg-[#e3d9cb]" />
          </div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-[#b4654a] px-3 py-1.5 text-[7px] font-semibold text-white">
              Start Your Project
            </span>
            <span className="rounded-full px-3 py-1.5 text-[7px] font-semibold text-[#2b2620] ring-1 ring-[#d8cfc2]">
              View Portfolio
            </span>
          </div>
        </div>
        {/* Visual: arch + shapes composition */}
        <div className="relative col-span-2 overflow-hidden rounded-lg bg-gradient-to-br from-[#e8d5c4] to-[#cf9d84]">
          <div
            aria-hidden="true"
            className="absolute inset-x-5 bottom-0 top-6 rounded-t-full bg-gradient-to-b from-[#b4654a]/80 to-[#8f4a33]/90"
          />
          <div
            aria-hidden="true"
            className="absolute right-3 top-3 h-6 w-6 rounded-full bg-[#f2e7da] shadow"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-3 h-10 w-2 rounded-full bg-[#f2e7da]/80"
          />
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-4 sm:px-5">
        {["Living Rooms", "Workspaces", "Full Homes"].map((t, i) => (
          <div key={t} className="rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-[#eadfd2]">
            <div
              aria-hidden="true"
              className="mb-1.5 h-8 rounded-md bg-gradient-to-br from-[#e8d5c4] to-[#d9b8a2]"
              style={{ opacity: 1 - i * 0.12 }}
            />
            <p className="text-[7px] font-bold text-[#2b2620]">{t}</p>
            <Line className="mt-1 w-10/12 bg-[#eee5d9]" />
            <Line className="mt-1 w-7/12 bg-[#eee5d9]" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mobile variant of the Verona Home mock site. */
export function MockVeronaMobile({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#f7f2ec] text-[#2b2620]", className)}>
      <div className="flex items-center justify-between px-3 pb-1.5 pt-6">
        <span className="font-display text-[8px] font-bold tracking-[0.1em]">
          VERONA<span className="text-[#b4654a]">HOME</span>
        </span>
        <div aria-hidden="true" className="space-y-0.5">
          <Line className="w-3 bg-[#2b2620]" />
          <Line className="w-3 bg-[#2b2620]" />
        </div>
      </div>
      <div className="px-3 pb-3 pt-1.5">
        <span className="text-[5.5px] font-bold uppercase tracking-[0.2em] text-[#b4654a]">
          Interior Atelier
        </span>
        <p className="mt-1 font-display text-[12px] font-bold leading-[1.15]">
          Rooms that feel like you.
        </p>
        <div className="mt-1.5 space-y-1" aria-hidden="true">
          <Line className="w-10/12 bg-[#e3d9cb]" />
          <Line className="w-7/12 bg-[#e3d9cb]" />
        </div>
        <span className="mt-2 inline-block rounded-full bg-[#b4654a] px-2.5 py-1 text-[6px] font-semibold text-white">
          Start Your Project
        </span>
      </div>
      <div className="mx-3 mb-3 h-16 overflow-hidden rounded-lg bg-gradient-to-br from-[#e8d5c4] to-[#cf9d84]">
        <div
          aria-hidden="true"
          className="mx-auto h-14 w-10 rounded-t-full bg-gradient-to-b from-[#b4654a]/80 to-[#8f4a33]/90"
        />
      </div>
      <div className="grid grid-cols-2 gap-1.5 px-3 pb-4">
        {["Living", "Workspace"].map((t) => (
          <div key={t} className="rounded-md bg-white p-1.5 ring-1 ring-[#eadfd2]">
            <div aria-hidden="true" className="h-6 rounded bg-gradient-to-br from-[#e8d5c4] to-[#d9b8a2]" />
            <p className="mt-1 text-[6px] font-bold">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   2. "Lumière Skin" — premium skincare e-commerce (Concept A)
   ============================================================ */

function Bottle({ tone, className }: { tone: "rose" | "amber" | "sage"; className?: string }) {
  const tones = {
    rose: "from-[#eec9bd] to-[#d9a294]",
    amber: "from-[#f0ddb8] to-[#d3b078]",
    sage: "from-[#d3dccc] to-[#a8b89f]",
  } as const;
  return (
    <div aria-hidden="true" className={cn("relative flex justify-center", className)}>
      <div className="h-2 w-3 rounded-t-sm bg-[#8a7a6c]" />
      <div
        className={cn(
          "h-14 w-7 rounded-md rounded-t-sm bg-gradient-to-b shadow-inner ring-1 ring-white/40",
          tones[tone]
        )}
      />
    </div>
  );
}

/** Full-bleed concept site for the Lumière Skin portfolio card + dialog. */
export function MockLumiere({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#faf6f1] text-[#3a2e2a]", className)}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
        <span className="font-display text-[11px] font-semibold italic tracking-wide">
          Lumière<span className="not-italic text-[#c0a062]"> Skin</span>
        </span>
        <div className="hidden gap-3 sm:flex" aria-hidden="true">
          <Line className="w-8 bg-[#e7d9cf]" />
          <Line className="w-8 bg-[#e7d9cf]" />
          <Line className="w-8 bg-[#e7d9cf]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-[#3a2e2a] px-3 py-1.5">
          <svg viewBox="0 0 24 24" className="h-2 w-2 text-[#f5e8d8]" fill="currentColor">
            <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44C7.52 16.37 8.48 18 10 18h9v-2h-9l1.1-2h6.45c.75 0 1.41-.41 1.75-1.03L23 7h-3.27l-1.11-2H7Z" />
          </svg>
          <span className="text-[7px] font-semibold text-[#f5e8d8]">Bag · 2</span>
        </div>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-2 items-center gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <div>
          <span className="text-[6px] font-bold uppercase tracking-[0.24em] text-[#c0a062]">
            New · Ritual Collection
          </span>
          <p className="mt-1.5 font-display text-[17px] font-semibold leading-[1.08] sm:text-[22px]">
            Skin, perfected<span className="text-[#c0a062]">.</span>
          </p>
          <div className="mt-2.5 space-y-1.5" aria-hidden="true">
            <Line className="w-11/12 bg-[#ecdfd5]" />
            <Line className="w-8/12 bg-[#ecdfd5]" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-[#3a2e2a] px-3 py-1.5 text-[7px] font-semibold text-[#f5e8d8]">
              Shop the Ritual
            </span>
            <span className="text-[7px] font-semibold text-[#3a2e2a] underline decoration-[#c0a062] decoration-2 underline-offset-2">
              Take the skin quiz
            </span>
          </div>
        </div>
        <div className="relative flex h-24 items-end justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-[#f2e3d9] to-[#e3c2b3] sm:h-28">
          <div aria-hidden="true" className="absolute left-2 top-2 h-8 w-8 rounded-full bg-white/50" />
          <Bottle tone="rose" className="mb-3 scale-90" />
          <Bottle tone="amber" className="mb-5" />
          <Bottle tone="sage" className="mb-3 scale-90" />
        </div>
      </div>

      {/* Product grid */}
      <div className="px-4 pb-5 sm:px-6">
        <div className="mb-2 flex items-baseline justify-between">
          <p className="font-display text-[9px] font-semibold">Bestsellers</p>
          <span className="text-[6.5px] font-semibold text-[#b08d75] underline">View all</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Velvet Serum", price: "$48", tone: "rose" as const },
            { name: "Glow Crème", price: "$56", tone: "amber" as const },
            { name: "Night Elixir", price: "$62", tone: "sage" as const },
          ].map((p) => (
            <div key={p.name} className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-[#efe3d9]">
              <div className="flex h-14 items-end justify-center rounded-md bg-gradient-to-b from-[#f6ebe2] to-[#ecd6c8]">
                <Bottle tone={p.tone} className="mb-1 scale-[0.62]" />
              </div>
              <p className="mt-1.5 text-[7px] font-bold">{p.name}</p>
              <div className="mt-0.5 flex items-center justify-between">
                <span className="text-[7px] font-semibold text-[#b08d75]">{p.price}</span>
                <span className="rounded-full bg-[#3a2e2a] px-1.5 py-0.5 text-[5.5px] font-semibold text-[#f5e8d8]">
                  Add
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   3. "Northstar Creative" — modern agency (Concept B)
   ============================================================ */

/** Full-bleed concept site for the Northstar Creative portfolio card + dialog. */
export function MockNorthstar({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#0d0d10] text-white", className)}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
        <span className="font-display text-[10px] font-extrabold tracking-tight">
          NORTHSTAR<span className="text-[#f5a623]">.</span>
        </span>
        <div className="hidden gap-3 sm:flex" aria-hidden="true">
          <Line className="w-8 bg-white/20" />
          <Line className="w-8 bg-white/20" />
          <Line className="w-8 bg-white/20" />
        </div>
        <span className="rounded-full bg-[#f5a623] px-3 py-1 text-[7px] font-extrabold text-black">
          Start a Project
        </span>
      </div>

      {/* Hero */}
      <div className="px-4 pb-3 pt-3 sm:px-6">
        <span className="text-[6px] font-bold uppercase tracking-[0.26em] text-[#f5a623]">
          Brand · Digital · Motion
        </span>
        <p className="mt-1.5 font-display text-[22px] font-extrabold uppercase leading-[0.98] tracking-tight sm:text-[30px]">
          We make brands
          <br />
          <span className="text-[#f5a623]">move.</span>
        </p>
        <div className="mt-2.5 flex max-w-[240px] flex-col gap-1.5" aria-hidden="true">
          <Line className="w-full bg-white/15" />
          <Line className="w-8/12 bg-white/15" />
        </div>
      </div>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-white/10 bg-[#f5a623] py-1.5">
        <div className="flex w-max animate-marquee gap-6 whitespace-nowrap">
          {[0, 1].map((n) => (
            <div key={n} className="flex gap-6" aria-hidden={n === 1}>
              {["STRATEGY", "IDENTITY", "WEB DESIGN", "MOTION", "CONTENT"].map((w) => (
                <span
                  key={w + n}
                  className="font-display text-[8px] font-extrabold tracking-[0.18em] text-black"
                >
                  {w} ✦
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Work grid */}
      <div className="grid grid-cols-2 gap-2 px-4 py-4 sm:px-6">
        {[
          { t: "Atlas Coffee Rebrand", g: "from-[#3b3b44] to-[#191922]", tag: "Branding" },
          { t: "Pulse Fitness Campaign", g: "from-[#4a3a20] to-[#1c1508]", tag: "Motion" },
        ].map((w) => (
          <div key={w.t} className="group rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
            <div className={cn("h-12 rounded-md bg-gradient-to-br sm:h-14", w.g)}>
              <div className="flex h-full items-center justify-center">
                <div aria-hidden="true" className="h-5 w-5 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="flex items-center justify-between px-1 py-1.5">
              <p className="text-[7px] font-bold">{w.t}</p>
              <span className="rounded-sm bg-[#f5a623]/15 px-1 py-0.5 text-[5.5px] font-bold text-[#f5a623]">
                {w.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   4. "Maison Elara" — elegant fashion boutique (Concept C)
   ============================================================ */

/** Full-bleed concept site for the Maison Elara portfolio card + dialog. */
export function MockElara({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#f7f4ee] text-[#1a1815]", className)}>
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-[#1a1815]/10 px-4 py-2.5 sm:px-6">
        <span className="text-[6px] font-semibold uppercase tracking-[0.2em] text-[#8a8378]">
          Est. Concept
        </span>
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.3em]">
          Maison Elara
        </span>
        <div className="hidden gap-3 sm:flex" aria-hidden="true">
          <Line className="w-7 bg-[#ddd6c8]" />
          <Line className="w-7 bg-[#ddd6c8]" />
        </div>
      </div>

      {/* Hero */}
      <div className="relative mx-4 mt-3 overflow-hidden rounded-lg sm:mx-6">
        <div className="h-24 bg-gradient-to-br from-[#e5ddd0] via-[#d4c8b6] to-[#a4978a] sm:h-28" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[6px] font-semibold uppercase tracking-[0.3em] text-[#5c554a]">
            Autumn / Winter
          </span>
          <p className="mt-1 font-display text-[16px] font-semibold uppercase tracking-[0.14em] sm:text-[20px]">
            Collection No. 04
          </p>
          <span className="mt-2 border border-[#1a1815] bg-[#f7f4ee]/90 px-3 py-1 text-[6.5px] font-bold uppercase tracking-[0.18em]">
            Explore the Lookbook
          </span>
        </div>
      </div>

      {/* Lookbook grid */}
      <div className="px-4 py-4 sm:px-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-display text-[9px] font-semibold uppercase tracking-[0.22em]">
            The Lookbook
          </p>
          <span className="text-[6.5px] font-semibold text-[#8a8378] underline underline-offset-2">
            12 looks
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { look: "Look 01", g: "from-[#ddd3c4] to-[#b3a58f]" },
            { look: "Look 02", g: "from-[#c9bba7] to-[#8e8271]" },
            { look: "Look 03", g: "from-[#b9ac9a] to-[#6e6355]" },
          ].map((l, i) => (
            <div key={l.look}>
              <div
                className={cn("relative h-20 rounded-md bg-gradient-to-b sm:h-24", l.g)}
                style={{ marginTop: i === 1 ? "0.5rem" : 0 }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-md bg-gradient-to-t from-black/25 to-transparent"
                />
              </div>
              <p className="mt-1 text-[6.5px] font-semibold uppercase tracking-[0.18em] text-[#6e675c]">
                {l.look}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
