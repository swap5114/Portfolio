"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, socials, resumeHref } from "@/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : item;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-grid pt-16"
    >
      {/* accent glow, offset to break symmetry */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="container-x grid w-full grid-cols-1 gap-16 py-20 lg:grid-cols-12 lg:items-center">
        {/* Left: the pitch */}
        <motion.div
          className="lg:col-span-7"
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={variants} className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Open to backend / full-stack roles · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={variants}
            className="text-[13vw] font-bold leading-[0.92] tracking-tightest text-ink sm:text-7xl lg:text-[5.8rem]"
          >
            {profile.firstName}
            <br />
            <span className="text-ink-faint">{profile.lastName}</span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={variants}
            className="mt-8 max-w-xl text-balance text-xl leading-relaxed text-ink sm:text-2xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            variants={variants}
            className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            variants={variants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              data-cursor="view"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5"
            >
              View the work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-sm text-ink-muted transition-colors hover:border-accent/50 hover:text-ink"
            >
              Résumé ↗
            </a>
          </motion.div>

          <motion.div
            variants={variants}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-widest text-ink-faint transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: the fallback-chain terminal card — the signature visual */}
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <FallbackChainCard />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="container-x absolute inset-x-0 bottom-6 hidden items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
          scroll
        </span>
        <span className="h-px w-16 bg-line" />
      </div>
    </section>
  );
}

/** A stylized terminal panel demonstrating the NSE → Kite → yfinance route. */
function FallbackChainCard() {
  const reduce = useReducedMotion();
  const rows = [
    { src: "NSE India", status: "timeout", ok: false },
    { src: "Kite Connect", status: "200 OK", ok: true },
    { src: "yfinance", status: "standby", ok: null },
  ];

  return (
    <div className="relative rounded-xl border border-line bg-surface/70 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 font-mono text-xs text-ink-faint">
          artha · data_router.py
        </span>
      </div>

      <div className="space-y-3 p-5 font-mono text-[13px]">
        <p className="text-ink-faint">
          <span className="text-accent">async def</span>{" "}
          <span className="text-ink">get_quote</span>
          <span className="text-ink-muted">(symbol):</span>
        </p>

        {rows.map((r, i) => (
          <motion.div
            key={r.src}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.25, duration: 0.5 }}
            className="flex items-center justify-between rounded-md border border-line bg-canvas/60 px-3 py-2.5"
          >
            <span className="flex items-center gap-2 text-ink">
              <span className="text-ink-faint">{i === 0 ? "try" : "→"}</span>
              {r.src}
            </span>
            <span
              className={`flex items-center gap-2 text-xs ${
                r.ok === true
                  ? "text-accent"
                  : r.ok === false
                  ? "text-danger"
                  : "text-ink-faint"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  r.ok === true
                    ? "bg-accent"
                    : r.ok === false
                    ? "bg-danger"
                    : "bg-ink-faint"
                }`}
              />
              {r.status}
            </span>
          </motion.div>
        ))}

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="pt-1 text-ink-muted"
        >
          <span className="text-accent">return</span> quote{" "}
          <span className="text-ink-faint">
            # served, 99% uptime
            <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-accent" />
          </span>
        </motion.p>
      </div>
    </div>
  );
}
