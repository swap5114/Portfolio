# Swapnil Jain — Portfolio

A premium, terminal/technical-themed personal portfolio for a backend / full-stack
engineer. Built to make a recruiter think *"this person ships production systems"*
within 30 seconds.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

---

## ✍️ Editing content (the only file you usually need)

All copy, links, projects, skills, and metrics live in **`data/content.ts`**.
Change text there — never the components. Anything you must replace before deploy
is marked with `// TODO:`.

Before going live:

1. **Links** — set your real GitHub + LinkedIn URLs in `socials` (`data/content.ts`).
2. **Résumé** — drop your PDF at `public/resume/swapnil-jain-resume.pdf`.
3. **Videos** — drop clips in `public/videos/` and set `video:` on each project
   (see `public/videos/README.md`).
4. **Domain** — set `siteMeta.url` to your deployed domain (for absolute OG URLs).

---

## Design system

- **Direction:** dark terminal / technical — near-black canvas, one electric-lime
  accent (`#D4FF4F`), subtle film grain, monospace labels.
- **Type:** Space Grotesk (display) · IBM Plex Sans (body) · JetBrains Mono
  (labels/code) — all self-hosted at build via `next/font` (no runtime font fetch).
- **Motion:** Lenis smooth scroll, staggered scroll reveals, animated counters,
  custom cursor — all disabled under `prefers-reduced-motion`.

Colors and fonts are centralized in `tailwind.config.ts` and `app/globals.css`.

---

## Project structure

```
app/
  layout.tsx            # fonts, metadata, providers
  page.tsx              # section composition
  globals.css           # theme tokens, grain, base styles
  icon.tsx              # generated favicon (SJ monogram)
  opengraph-image.tsx   # generated 1200×630 social card
components/
  Nav, Hero, About, Experience, Projects, ProjectCard,
  VideoPlayer, Skills, Achievements, Contact, Footer
  Providers (Lenis), Cursor, Grain, Reveal, Counter, SectionHeading
data/
  content.ts            # ← all site content lives here
public/
  videos/  images/  resume/
```

---

## Deploy to Vercel

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new).
Zero config — framework auto-detected as Next.js. No environment variables needed
(contact form uses a `mailto:` fallback).

---

## Accessibility & performance

- Semantic landmarks, labelled form fields, keyboard-focusable project reveals.
- `prefers-reduced-motion` fully respected (scroll, cursor, grain, counters).
- Videos are `preload="none"` and never autoplay — no media cost on first load.
- Fonts self-hosted; images via `next/image` where used.
```
