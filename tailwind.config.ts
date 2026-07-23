import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terminal / technical dark system — one accent, disciplined neutrals.
        canvas: "#0B0C0E", // near-black background
        surface: "#111316", // raised panels
        "surface-2": "#16191d", // hover / nested panels
        line: "#23272e", // hairline borders
        "line-strong": "#31363f",
        ink: "#ECEDEE", // primary text
        "ink-muted": "#9AA1AC", // secondary text
        "ink-faint": "#5A616B", // captions / disabled
        accent: "#D4FF4F", // electric lime — the single accent
        "accent-dim": "#A6CB3C",
        "accent-glow": "rgba(212,255,79,0.12)",
        signal: "#D4FF4F",
        warn: "#FFB86B",
        danger: "#FF6B6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
