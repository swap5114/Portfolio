"use client";

import { useReducedMotion } from "framer-motion";

// Static film-grain overlay (CSS-only). Skipped under reduced-motion for clarity.
export function Grain() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return <div className="grain" aria-hidden="true" />;
}
