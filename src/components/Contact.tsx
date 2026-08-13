"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  async function copyEmail() {
    setFailed(false);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setFailed(true);
      window.setTimeout(() => setFailed(false), 2000);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          id="contact-heading"
          className="text-sm font-mono uppercase tracking-widest text-accent"
        >
          Contact
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          Open to Data Analyst and BI roles — let&apos;s talk about your data.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover active:bg-accent sm:w-auto"
          >
            Email me
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            {copied ? "Copied!" : failed ? "Copy failed — try selecting manually" : profile.email}
          </button>
          <a
            href={`tel:${profile.phoneHref}`}
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            {profile.phone}
          </a>
        </div>

        <p aria-live="polite" className="sr-only">
          {copied ? "Email address copied to clipboard" : ""}
          {failed ? "Could not copy email address" : ""}
        </p>
      </div>
    </section>
  );
}
