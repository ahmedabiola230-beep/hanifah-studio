import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Consistent section heading: small lavender eyebrow, display-font title,
 * optional supporting description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
          dark ? "text-lavender-300" : "text-lavender-600"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "inline-block h-1 w-6 rounded-full",
            dark ? "bg-lavender-300" : "bg-lavender-400"
          )}
        />
        {eyebrow}
        {align === "center" && (
          <span
            aria-hidden="true"
            className={cn(
              "inline-block h-1 w-6 rounded-full",
              dark ? "bg-lavender-300" : "bg-lavender-400"
            )}
          />
        )}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            dark ? "text-navy-100/80" : "text-ink-500"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
