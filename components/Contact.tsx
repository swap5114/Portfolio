"use client";

import { useState } from "react";
import {
  contact,
  profile,
  socials,
  resumeHref,
  web3formsAccessKey,
} from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Sends via Web3Forms — no backend, works on Vercel. The message lands in
  // your inbox; the visitor's own mail client is never required.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          subject: `Portfolio · ${name || "someone"} wants to talk`,
          from_name: name || "Portfolio visitor",
          name,
          email: from,
          message,
          // Web3Forms replies land back at the sender's address:
          replyto: from,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setFrom("");
        setMessage("");
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly.");
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="06 / contact" title={contact.heading} />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* left: pitch + direct links */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-muted">
                {contact.body}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={`mailto:${contact.email}`}
                className="mt-8 inline-block font-display text-2xl font-semibold text-ink transition-colors hover:text-accent sm:text-3xl"
              >
                {contact.email}
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:border-accent/40"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                      {s.label}
                    </span>
                    <span className="text-sm text-ink-muted transition-colors group-hover:text-accent">
                      {s.handle} ↗
                    </span>
                  </a>
                ))}
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    Résumé
                  </span>
                  <span className="text-sm text-ink-muted transition-colors group-hover:text-accent">
                    download PDF ↓
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* right: mailto form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-accent">
                  {"//"} send a message
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="name"
                    value={name}
                    onChange={setName}
                    placeholder="Jane Recruiter"
                    required
                  />
                  <Field
                    label="email"
                    type="email"
                    value={from}
                    onChange={setFrom}
                    placeholder="jane@company.com"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                    message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="We're building something that can't afford to quietly fail…"
                    className="w-full resize-none rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-accent/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  data-cursor="send"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {sending ? "Sending…" : "Send message"}
                  {!sending && (
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  )}
                </button>

                {status === "success" ? (
                  <p className="mt-4 font-mono text-[11px] text-accent">
                    ✓ Thanks — your message is on its way to {profile.email}. I'll reply soon.
                  </p>
                ) : status === "error" ? (
                  <p className="mt-4 font-mono text-[11px] text-red-500">
                    ✕ {error}{" "}
                    <a href={`mailto:${contact.email}`} className="underline">
                      {contact.email}
                    </a>
                  </p>
                ) : (
                  <p className="mt-4 font-mono text-[11px] text-ink-faint">
                    goes straight to {profile.email} — no mail app needed
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-accent/50"
      />
    </div>
  );
}
