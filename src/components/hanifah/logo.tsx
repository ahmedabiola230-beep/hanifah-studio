import Link from "next/link";
import { cn } from "@/lib/utils";
import { PAGE_ROUTES } from "@/lib/site";

type LogoProps = {
  /** Use the light (white text) variant on dark backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  asLink?: boolean;
};

/**
 * The Hanifah Studio mark: a deep navy squircle badge with a luminous
 * lavender "H" monogram and a signature spark accent. Drawn as SVG so
 * it stays razor sharp at every size, from favicon to footer.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={cn("block h-10 w-10", className)}
    >
      <defs>
        <linearGradient id="hs-badge" x1="10" y1="2" x2="54" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34406f" />
          <stop offset="0.45" stopColor="#1b2547" />
          <stop offset="1" stopColor="#0a1024" />
        </linearGradient>
        <radialGradient id="hs-sheen" cx="0.28" cy="0.06" r="0.95">
          <stop stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-ring" x1="6" y1="2" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c4b5fd" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="hs-letter" x1="32" y1="15" x2="32" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5f3ff" />
          <stop offset="0.55" stopColor="#ddd6fe" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="hs-spark" x1="52.5" y1="6" x2="52.5" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ede9fe" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* Badge */}
      <rect x="1" y="1" width="62" height="62" rx="17.5" fill="url(#hs-badge)" />
      <rect x="1" y="1" width="62" height="62" rx="17.5" fill="url(#hs-sheen)" />
      <rect
        x="1.75"
        y="1.75"
        width="60.5"
        height="60.5"
        rx="16.75"
        fill="none"
        stroke="url(#hs-ring)"
        strokeWidth="1.5"
      />

      {/* H monogram: crossbar drawn first so the stems join seamlessly */}
      <rect x="20" y="28.25" width="24" height="7.5" rx="3.5" fill="url(#hs-letter)" />
      <rect x="16.5" y="15" width="7" height="34" rx="3.5" fill="url(#hs-letter)" />
      <rect x="40.5" y="15" width="7" height="34" rx="3.5" fill="url(#hs-letter)" />

      {/* Signature spark */}
      <path
        d="M52.5 6 Q52.5 11.5 58 11.5 Q52.5 11.5 52.5 17 Q52.5 11.5 47 11.5 Q52.5 11.5 52.5 6 Z"
        fill="url(#hs-spark)"
      />
      <path
        d="M44.5 4.9 Q44.5 7.5 47.1 7.5 Q44.5 7.5 44.5 10.1 Q44.5 7.5 41.9 7.5 Q44.5 7.5 44.5 4.9 Z"
        fill="#ddd6fe"
        opacity="0.9"
      />
    </svg>
  );
}

/**
 * Full logo lockup: mark plus studio name. Used in the header and the
 * footer of every page.
 */
export function Logo({ tone = "dark", className, asLink = true }: LogoProps) {
  const light = tone === "light";

  const content = (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <LogoMark className="drop-shadow-[0_8px_20px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-[1.05]" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight",
            light ? "text-white" : "text-navy-900"
          )}
        >
          Hanifah Studio
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
            light ? "text-lavender-300" : "text-lavender-600"
          )}
        >
          Website Design Studio
        </span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href={PAGE_ROUTES.home}
      aria-label="Hanifah Studio, back to home page"
      className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}
