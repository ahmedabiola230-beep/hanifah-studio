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
 * Hanifah Studio wordmark: navy rounded square with an "H" monogram
 * and lavender accent dot, next to the studio name.
 */
export function Logo({ tone = "dark", className, asLink = true }: LogoProps) {
  const light = tone === "light";

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-soft ring-1 ring-lavender-300/40"
      >
        <span className="font-display text-base font-bold leading-none text-lavender-200">H</span>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-lavender-400 ring-2 ring-white" />
      </span>
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
