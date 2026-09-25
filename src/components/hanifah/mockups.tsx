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
   1. "Verona Home": premium interior studio (hero mockup)
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

