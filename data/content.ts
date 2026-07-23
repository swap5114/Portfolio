/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit text here — you never need to touch the layout/components to update
 *  copy, links, projects, skills, or metrics.
 *
 *  👉 THINGS TO REPLACE BEFORE DEPLOY are marked with:  // TODO:
 * ─────────────────────────────────────────────────────────────────────────
 */

/* ------------------------------------------------------------------ types */

export type NavLink = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Metric = {
  /** numeric part that animates up, e.g. 99 */
  value: number;
  /** optional suffix rendered after the number, e.g. "%" */
  suffix?: string;
  /** optional prefix rendered before the number, e.g. "−" */
  prefix?: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectHighlight = { label: string; detail: string };

export type Project = {
  id: string;
  name: string;
  tagline: string;
  period: string;
  /** short "what it is" line */
  blurb: string;
  /** the ENGINEERING STORY — why the key decision matters */
  engineering: {
    heading: string;
    body: string;
  };
  highlights: ProjectHighlight[];
  metrics: Metric[];
  stack: string[];
  /**
   * Drop a file into /public/videos/ and set `video` to its filename.
   * Leave `video` undefined to show the poster/placeholder only.
   */
  video?: string;
  /** optional poster frame in /public/images/ shown before video loads */
  poster?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
  /** private repo etc. — shown as a small note */
  note?: string;
};

export type SkillGroup = { title: string; items: string[] };

/* ---------------------------------------------------------------- profile */

export const profile = {
  name: "Swapnil Jain",
  firstName: "Swapnil",
  lastName: "Jain",
  role: "Backend / Full-Stack Engineer",
  location: "Noida, India",
  email: "swapniljain5114@gmail.com",
  phone: "+91 6397834087",

  // One sharp line — the pitch, not a generic tagline.
  headline: "I build backend systems that stay up when data sources don't.",
  subheadline:
    "Fallback-chain architectures, observability middleware, and pluggable integration layers — production-grade systems, not tutorials.",

  // Longer positioning line used in <meta> / OG.
  metaDescription:
    "Swapnil Jain — backend / full-stack engineer. I design multi-tiered systems with fallback-chain reliability, observability middleware, and pluggable integrations. Building Artha.ai.",
};

/* ------------------------------------------------------------------ links */

// TODO: paste your real GitHub + LinkedIn URLs here.
export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/swap5114",
    handle: "@swap5114",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swapnil-jain-1581b0224/",
    handle: "in/swapnil-jain-1581b0224",
  },
  {
    label: "Email",
    href: "mailto:swapniljain5114@gmail.com",
    handle: "swapniljain5114@gmail.com",
  },
];

// Drop your PDF at /public/resume/swapnil-jain-resume.pdf (kebab-case).
export const resumeHref = "/resume/swapnil-jain-resume.pdf";

// Contact form delivery (Web3Forms).
// Get a free access key in ~30s at https://web3forms.com — enter your email,
// the key arrives in your inbox. No account, no card. It's safe to commit:
// Web3Forms access keys are public by design (they only allow sending TO you).
// You can also override it without editing code via NEXT_PUBLIC_WEB3FORMS_KEY.
export const web3formsAccessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE"; // TODO: replace

export const nav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------- about */

export const about = {
  // Personality-forward but professional.
  paragraphs: [
    "Final-year CS student at Bennett University and a working software-development intern. I care about the parts of a system nobody sees until they fail — the retry that saves a request, the log line that cuts an outage from an hour to ten minutes, the interface that lets you swap a vendor without touching the frontend.",
    "Right now I'm focused on backend systems, real-world API integrations, and competitive programming. Most of what I build starts from one question: what happens when a dependency goes down — and how do I make the system route around it before a user ever notices?",
  ],
  focus: ["Backend systems", "Reliability & observability", "API integration", "DSA in C++"],
  stats: [
    { value: 8.4, suffix: " / 10", label: "GPA · B.Tech CSE" },
    { value: 1679, label: "LeetCode rating" },
    { value: 160, suffix: "+", label: "Problems solved (C++)" },
    { value: 15, prefix: "Top ", suffix: "%", label: "Global ranking" },
  ] as Metric[],
};

/* -------------------------------------------------------------- experience */

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "AFI Digital Services LLP",
    period: "Jan 2026 — Present",
    summary:
      "Backend infrastructure for a multi-tiered LMS on the MERN stack — building the layers that keep the platform observable, scalable, and vendor-agnostic.",
    highlights: [
      "Architected a scalable, multi-tiered LMS separating auth, content delivery, progress tracking, and payment into independent service layers — so each tier scales on its own and course-management efficiency improved ~40%.",
      "Built request-logging and error-tracing middleware in Node.js that correlates a request's lifecycle across services, giving full observability across API tiers and cutting mean time to resolution for production incidents by ~30%.",
      "Engineered a pluggable live-class SDK using the Strategy pattern — Dyte, Zoom, Google Meet and MS Teams behind one unified provider interface (OAuth2 + MS Graph API) — enabling zero-frontend-change provider switching.",
      "Built an async video-transcription pipeline with BullMQ + Redis: on upload the API returns instantly while a background worker extracts audio, transcribes it with a locally-hosted Whisper Turbo model (no paid API), and persists transcripts to MongoDB — keeping the request path non-blocking and horizontally scalable.",
      "Fed the stored transcripts to an LLM to auto-generate lesson summaries and quizzes, with Redis-backed job retries making the pipeline resilient to worker crashes and restarts.",
      "Worked Agile/Scrum with bi-weekly sprints and PR-based reviews; validated Razorpay webhook flows with mock HMAC-SHA256 payloads and wrote Postman collection-based API regression tests across every service endpoint.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "BullMQ", "Redis", "Whisper Turbo", "OAuth2", "MS Graph API", "Razorpay"],
  },
];

/* ---------------------------------------------------------------- projects */

export const projects: Project[] = [
  {
    id: "artha",
    name: "Artha.ai",
    tagline: "Pre-Trade Analysis for Indian Retail Traders",
    period: "Jan 2026 — Present",
    featured: true,
    blurb:
      "A decision-support tool for NSE/BSE traders. It pulls from six market-data sources and gives a clear GO / CAUTION / AVOID verdict before you enter a trade — backed by technical, fundamental, risk, and sentiment scoring, an AI-written morning brief, and a post-market debrief. Built to help beginners trade more calmly and take fewer avoidable losses. It never places orders — you always decide.",
    engineering: {
      heading: "Why the tool learns from you, not just the market",
      body:
        "Two traders can take the exact same setup, and one of them should skip it — because their own history shows they lose money on trades like it. So Artha doesn't only score the chart. Every trade you close is turned into a compact 8-feature 'fingerprint', and each new trade is matched against your past ones (by similarity) to show how similar trades actually ended for you — your real win rate by setup. A behavioural layer also watches for the habits that sink beginners: revenge trading after a losing streak, chasing a stock that already ran up, oversizing, and overtrading. All of it feeds a Guardian that can only push a verdict toward caution, never loosen it. The honest tradeoff: it starts cold — the personal matching needs about 10 closed trades before it means much — so early on it leans on plain rules and gets sharper as your journal fills.",
    },
    highlights: [
      {
        label: "6-source data integration",
        detail:
          "Zerodha Kite, yfinance, Finnhub, Screener.in, NSE India, and FMP unified behind one async FastAPI backend — with a Kite → yfinance fallback so a quote never comes back blank.",
      },
      {
        label: "Twice-daily AI briefs",
        detail:
          "An 8:00 AM morning brief and a 4:00 PM post-market debrief — market bias, FII/DII flows, options (PCR/VIX), breadth, sector rotation, and trade setups — written by Claude and emailed to users.",
      },
      {
        label: "GO / CAUTION / AVOID engine",
        detail:
          "Technical, fundamental, risk, and sentiment scores plus a rule-based Trade Guardian produce one clear verdict with entry, stop-loss, and target levels.",
      },
      {
        label: "Learns your trading patterns",
        detail:
          "Each closed trade is fingerprinted into 8 features and matched against your history to surface your real win rate by setup, plus a behavioural check for revenge trading, FOMO, oversizing, and overtrading.",
      },
      {
        label: "Chrome extension (MV3)",
        detail:
          "A side panel that auto-detects the stock symbol across 12+ Indian broker sites (Kite, Groww, TradingView, Angel One, Upstox, and more) and shows pre-trade risk analysis inline.",
      },
    ],
    metrics: [
      { value: 6, label: "Data sources" },
      { value: 99, suffix: "%", label: "Data availability" },
      { value: 12, suffix: "+", label: "Broker sites" },
      { value: 3, label: "Claude models" },
    ],
    stack: [
      "FastAPI",
      "Python",
      "Next.js 14",
      "Claude (Anthropic)",
      "APScheduler",
      "Kite Connect",
      "SQLite → Postgres (Neon)",
      "Chrome MV3",
    ],
    // TODO: drop artha-demo.mp4 into /public/videos/ (and an optional poster).
    video: undefined, // e.g. "artha-demo.mp4"
    poster: undefined, // e.g. "artha-poster.jpg"
    note: "Chrome extension is a private repo — code available on request.",
    links: [
      { label: "Live", href: "https://artha-one-sigma.vercel.app/" },
    ],
  },
  {
    id: "resume-analyzer",
    name: "AI Resume Analyzer",
    tagline: "ATS-style resume scoring, end to end",
    period: "Oct 2025",
    blurb:
      "A multi-tiered REST backend that parses a resume, scores it against a role with the OpenAI API, and gates premium features behind a verified payment flow.",
    engineering: {
      heading: "Separated service layers, traceable end to end",
      body:
        "Auth, AI processing, PDF parsing, and payment are separate service layers rather than one tangled controller — so a slow AI call can't block auth, and a parsing failure is isolated and observable. Structured logging runs across all layers so a single request is traceable end to end, which is what kept scoring latency consistently under 1.5s while the AI pipeline evolved.",
    },
    highlights: [
      {
        label: "AI resume scoring",
        detail:
          "OpenAI-driven scoring lifted ATS keyword-match precision ~40% with consistent sub-1.5s responses.",
      },
      {
        label: "Auth + payments",
        detail:
          "Google OAuth 2.0 reduced login friction ~80%; Razorpay with HMAC-SHA256 webhook verification lifted premium conversions ~15%.",
      },
      {
        label: "Layered REST API",
        detail:
          "Separate service layers for auth, AI, PDF parsing, and payment with structured logging for full request traceability.",
      },
    ],
    metrics: [
      { value: 40, suffix: "%", label: "ATS precision lift" },
      { value: 1.5, prefix: "<", suffix: "s", label: "Response time" },
      { value: 80, suffix: "%", label: "Less login friction" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Razorpay"],
    // TODO: drop resume-analyzer-demo.mp4 into /public/videos/
    video: undefined,
    poster: undefined,
    links: [],
  },
];

/* ------------------------------------------------------------------ skills */

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "Python", "C++", "SQL", "HTML / CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Middleware", "MVC", "MERN"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Redux", "Tailwind CSS", "EJS"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "SQLite", "PostgreSQL-ready schema", "Supabase", "SQL"],
  },
  {
    title: "Auth & Payments",
    items: ["JWT", "OAuth2", "MS Graph API", "Razorpay (HMAC-SHA256)", "Kite Connect API"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3)", "APScheduler", "Git / GitHub", "Postman", "Agile / Scrum"],
  },
  {
    title: "Observability",
    items: [
      "Structured logging",
      "Request-tracing middleware",
      "Async scheduled pipelines",
      "Fallback-chain design",
      "Threshold-based alerting",
    ],
  },
];

/* ------------------------------------------------------- achievements/edu */

export const education = {
  school: "Bennett University",
  degree: "B.Tech, Computer Science Engineering",
  location: "Uttar Pradesh, India",
  period: "2022 — 2026",
  gpa: "8.4 / 10",
};

export const achievements = [
  {
    label: "LeetCode 1679",
    detail: "Contest rating — top 15% globally.",
  },
  {
    label: "160+ problems",
    detail: "Solved in C++, with a focus on data structures & algorithms.",
  },
  {
    label: "Production internship",
    detail: "Shipping backend infrastructure on a live MERN platform as a final-year student.",
  },
];

/* ----------------------------------------------------------------- contact */

export const contact = {
  heading: "Let's talk backends.",
  body:
    "I'm looking for backend / full-stack roles where reliability actually matters. If you're building systems that can't afford to quietly fail, I'd like to hear about them.",
  email: profile.email,
};

export const siteMeta = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.metaDescription,
  // TODO: set to your deployed domain for absolute OG URLs.
  url: "https://swapnil-jain.vercel.app",
};
