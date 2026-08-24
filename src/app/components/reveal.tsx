"use client";
import React, { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const HIDDEN: Record<Direction, string> = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(32px, 0, 0)",
  right: "translate3d(-32px, 0, 0)",
  none: "scale(0.96)",
};

/**
 * Scroll-entry reveal. Animates transform + opacity only (GPU-composited) and
 * fires once.
 *
 * The hidden state is a CSS class gated on `@media (scripting: enabled)` (see
 * globals.css), never an inline style: this site is a static export, so an
 * inline `opacity: 0` would ship in the HTML and keep content invisible until
 * the bundle hydrated.
 *
 * `skip` renders children untouched — use it above the fold, where content must
 * paint with the document rather than wait for IntersectionObserver.
 *
 * <Reveal delay={120} direction="left">...</Reveal>
 */
const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
  skip = false,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  skip?: boolean;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || skip) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [skip]);

  // Once the entry animation finishes, drop the reveal classes so Tailwind
  // hover/transition classes on the same element work normally again.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setDone(true), delay + 750);
    return () => clearTimeout(t);
  }, [visible, delay]);

  const animating = !skip && !done;

  return React.createElement(
    Tag,
    {
      ref,
      className: animating
        ? `${className} reveal${visible ? " reveal-in" : ""}`
        : className,
      style: animating
        ? ({
            "--reveal-from": HIDDEN[direction],
            "--reveal-delay": `${delay}ms`,
          } as React.CSSProperties)
        : undefined,
    } as React.HTMLAttributes<HTMLElement>,
    children
  );
};

export default Reveal;
