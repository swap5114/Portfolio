"use client";

import { profile, socials } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="font-mono text-xs text-ink-faint">
          <span className="text-accent">{"//"}</span> designed & built by{" "}
          {profile.name}
          <span className="mx-2 text-line-strong">·</span>
          {year}
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-ink-faint transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="font-mono text-[11px] text-ink-faint/70">
          Next.js · TypeScript · Framer Motion
        </div>
      </div>
    </footer>
  );
}
