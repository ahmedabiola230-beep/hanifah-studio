"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Direction the element travels from while fading in. */
  direction?: "up" | "down" | "left" | "right" | "none";
};

/**
 * Subtle scroll-reveal wrapper. Respects the user's reduced-motion
 * preference by rendering content immediately when reduced motion is on.
 */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const offsets: Record<NonNullable<RevealProps["direction"]>, { x?: number; y?: number }> = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: 28 },
    right: { x: -28 },
    none: {},
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered children container: reveals children one after another.
 * Pass children as an array; each is wrapped in its own motion div.
 */
export function RevealStagger({
  children,
  className,
  stepDelay = 0.08,
}: {
  children: React.ReactNode[];
  className?: string;
  stepDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div className={cn(className)}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * stepDelay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
