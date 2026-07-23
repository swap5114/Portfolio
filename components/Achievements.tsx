"use client";

import { achievements } from "@/data/content";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

export function Achievements() {
  return (
    <section className="border-t border-line py-20">
      <div className="container-x">
        <Reveal>
          <div className="mb-10 flex items-baseline gap-3">
            <span className="eyebrow">05 / signals</span>
            <span className="h-px flex-1 translate-y-[-3px] bg-line" />
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {achievements.map((a) => (
            <RevealChild
              key={a.label}
              className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="font-display text-xl font-semibold text-ink">
                {a.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {a.detail}
              </p>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
