"use client";

import { about, education } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";
import { Counter } from "./Counter";

export function About() {
  return (
    <section id="about" className="container-x scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="01 / about" title="Systems, not screens." />

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {about.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink-muted"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats + education rail */}
        <div className="lg:col-span-5 lg:pl-8">
          <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {about.stats.map((s) => (
              <RevealChild key={s.label} className="bg-surface p-5">
                <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {s.label}
                </div>
              </RevealChild>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <div className="mt-6 rounded-xl border border-line bg-surface p-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent">
                Education
              </div>
              <div className="mt-3 text-lg font-medium text-ink">
                {education.school}
              </div>
              <div className="mt-1 text-sm text-ink-muted">{education.degree}</div>
              <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink-faint">
                <span>{education.period}</span>
                <span className="text-accent">GPA {education.gpa}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
