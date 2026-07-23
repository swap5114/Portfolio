"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/content";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { VideoPlayer } from "./VideoPlayer";

/* -------- shared bits -------- */

function MetricRow({ metrics }: { metrics: Project["metrics"] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
      {metrics.map((m) => {
        const numeric = typeof m.value === "number" && m.label !== "Daily AI brief";
        return (
          <div key={m.label} className="bg-surface px-4 py-4">
            <div className="font-display text-2xl font-semibold text-accent sm:text-3xl">
              {numeric ? (
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              ) : (
                <span>
                  {m.prefix}
                  {m.value}
                  {m.suffix}
                </span>
              )}
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              {m.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LinkRow({ links }: { links: NonNullable<Project["links"]> }) {
  if (!links.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-accent transition-colors hover:border-accent/60 hover:bg-accent/20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {l.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((t) => (
        <span
          key={t}
          className="rounded border border-line bg-canvas px-2 py-1 font-mono text-[11px] text-ink-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/* -------- FEATURED (Artha) -------- */

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-line bg-surface">
      {/* accent top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* left: story */}
        <div className="border-b border-line p-8 sm:p-10 lg:border-b-0 lg:border-r">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
                ★ Flagship
              </span>
              <span className="font-mono text-xs text-ink-faint">
                {project.period}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mt-5 font-display text-4xl font-bold tracking-tightest text-ink sm:text-5xl">
              {project.name}
            </h3>
            <p className="mt-2 text-lg text-ink-muted">{project.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-ink-muted">{project.blurb}</p>
          </Reveal>

          {project.links && project.links.length > 0 && (
            <Reveal delay={0.12}>
              <div className="mt-6">
                <LinkRow links={project.links} />
              </div>
            </Reveal>
          )}

          {/* the engineering decision — the differentiator */}
          <Reveal delay={0.14}>
            <div className="mt-8 rounded-xl border border-accent/20 bg-accent-glow p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
                <span>{"//"}</span> engineering decision
              </div>
              <h4 className="mt-3 font-display text-lg font-semibold text-ink">
                {project.engineering.heading}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                {project.engineering.body}
              </p>
            </div>
          </Reveal>

          {project.note && (
            <Reveal delay={0.18}>
              <p className="mt-5 font-mono text-xs text-ink-faint">
                <span className="text-accent/70">note:</span> {project.note}
              </p>
            </Reveal>
          )}
        </div>

        {/* right: demo + metrics + highlights */}
        <div className="p-8 sm:p-10">
          <Reveal>
            <VideoPlayer
              src={project.video}
              poster={project.poster}
              label={project.name}
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8">
              <MetricRow metrics={project.metrics} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <div>
                    <span className="text-sm font-medium text-ink">
                      {h.label}
                    </span>
                    <span className="text-sm text-ink-muted"> — {h.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 border-t border-line pt-6">
              <StackList stack={project.stack} />
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* -------- STANDARD (hover reveals detail) -------- */

export function StandardProject({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={() => setOpen(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-line-strong"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{project.tagline}</p>
        </div>
        <span className="font-mono text-xs text-ink-faint">{project.period}</span>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
        {project.blurb}
      </p>

      {/* metrics always visible */}
      <div className="mt-6">
        <MetricRow metrics={project.metrics} />
      </div>

      {/* the pitch, revealed on hover/focus — no click-through needed */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-glow p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {"//"} key decision
              </div>
              <p className="mt-2 text-sm font-medium text-ink">
                {project.engineering.heading}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.engineering.body}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {project.links && project.links.length > 0 && (
        <div className="mt-6">
          <LinkRow links={project.links} />
        </div>
      )}

      <div className="mt-auto pt-6">
        <StackList stack={project.stack} />
      </div>

      {/* video appears below on standard cards only when one is set */}
      {project.video && (
        <div className="mt-6">
          <VideoPlayer
            src={project.video}
            poster={project.poster}
            label={project.name}
          />
        </div>
      )}

      <p className="mt-5 font-mono text-[11px] text-ink-faint">
        <span className="text-accent/60 transition-opacity duration-300 group-hover:opacity-100">
          hover for the engineering decision ↑
        </span>
      </p>
    </motion.article>
  );
}
