"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { nav, resumeHref, profile } from "@/data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-ink"
          aria-label={`${profile.name} — home`}
        >
          <span className="text-accent">{"//"}</span>
          <span className="font-semibold">{profile.firstName.toLowerCase()}</span>
          <span className="text-ink-faint">jain</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
                >
                  <span className="text-accent/70">{String(i + 1).padStart(2, "0")}.</span>{" "}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            className="rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-canvas"
          >
            Résumé
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-6 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "bottom-0.5"
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {nav.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-3 font-mono text-sm text-ink-muted"
                  >
                    <span className="text-accent/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block rounded-full border border-accent/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent"
                >
                  Download résumé ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
