"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Custom cursor: a small lime dot that trails a hollow ring.
 * - Only activates on fine pointers (mouse), never on touch.
 * - Grows and labels itself over interactive elements.
 * - Fully disabled under prefers-reduced-motion.
 */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;
      setHovering(!!el);
      setLabel(el?.getAttribute("data-cursor") ?? null);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* precise dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
      />
      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 52 : 26,
          height: hovering ? 52 : 26,
          borderColor: hovering ? "rgba(212,255,79,0.9)" : "rgba(212,255,79,0.5)",
          backgroundColor: hovering ? "rgba(212,255,79,0.08)" : "rgba(212,255,79,0)",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
