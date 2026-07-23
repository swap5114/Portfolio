"use client";

import { experience } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="02 / experience"
          title="On a live production floor."
          aside="what I actually shipped"
        />

        <div className="space-y-16">
          {experience.map((job) => (
            <article
              key={job.company}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12"
            >
              {/* left rail: role meta */}
              <div className="lg:col-span-4">
                <Reveal>
                  <div className="lg:sticky lg:top-24">
                    <div className="font-mono text-xs uppercase tracking-widest text-accent">
                      {job.period}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-ink">
                      {job.role}
                    </h3>
                    <div className="mt-1 text-ink-muted">{job.company}</div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {job.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] text-ink-faint"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* right: highlights as a numbered ledger */}
              <div className="lg:col-span-8">
                <ul className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="bg-surface">
                      <Reveal delay={i * 0.06}>
                        <div className="group flex gap-5 p-6 transition-colors hover:bg-surface-2">
                          <span className="mt-1 font-mono text-sm text-accent/70 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[15px] leading-relaxed text-ink-muted transition-colors group-hover:text-ink">
                            {h}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
