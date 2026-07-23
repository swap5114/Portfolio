"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** decimal places to preserve (auto-detected from value if omitted) */
  decimals?: number;
  className?: string;
  durationMs?: number;
};

/** Counts up from 0 → value the first time it scrolls into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals,
  className,
  durationMs = 1400,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const dp =
    decimals ?? (Number.isInteger(value) ? 0 : (value.toString().split(".")[1]?.length ?? 1));
  const [display, setDisplay] = useState(() =>
    reduce ? value.toFixed(dp) : (0).toFixed(dp)
  );

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value.toFixed(dp));
      return;
    }
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(dp)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, dp, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
