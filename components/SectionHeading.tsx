"use client";

import { Reveal } from "./Reveal";

type Props = {
  /** mono eyebrow, e.g. "01 / about" */
  index: string;
  title: string;
  /** optional right-aligned note */
  aside?: string;
};

export function SectionHeading({ index, title, aside }: Props) {
  return (
    <div className="mb-12 sm:mb-16">
      <Reveal>
        <div className="flex items-baseline gap-3">
          <span className="eyebrow">{index}</span>
          <span className="h-px flex-1 translate-y-[-3px] bg-line" />
          {aside && (
            <span className="font-mono text-xs text-ink-faint">{aside}</span>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
