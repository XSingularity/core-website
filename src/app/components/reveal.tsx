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
 * Scroll-entry reveal. Animates transform + opacity only (GPU-composited),
 * fires once, and inherits the global prefers-reduced-motion kill switch.
 *
 * <Reveal delay={120} direction="left">...</Reveal>
 */
const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Once the entry animation finishes, drop the inline styles so Tailwind
  // hover/transition classes on the same element work normally again.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setDone(true), delay + 750);
    return () => clearTimeout(t);
  }, [visible, delay]);

  return React.createElement(
    Tag,
    {
      ref,
      className,
      style: done
        ? undefined
        : {
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : HIDDEN[direction],
            transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
            willChange: "opacity, transform",
          },
    } as React.HTMLAttributes<HTMLElement>,
    children
  );
};

export default Reveal;
