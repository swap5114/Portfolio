"use client";

import { skills } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealChild } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="04 / stack"
          title="Tools, grouped by job."
          aside="proven in the projects above"
        />

        <RevealGroup
          className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {skills.map((group) => (
            <RevealChild key={group.title} className="bg-surface p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
                <span>{"›"}</span>
                {group.title}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1.5 text-[13px] text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
