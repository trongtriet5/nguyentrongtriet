import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(253,191,5,0.14),transparent_45%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:items-center md:py-28">
        <div className="max-w-2xl text-center md:text-left">
          <p className="font-mono text-sm tracking-wide text-accent">
            {profile.title}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover active:bg-accent sm:w-auto"
            >
              View projects
            </a>
            <a
              href={profile.resumeHref}
              download
              className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              Download resume
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-muted">
            {profile.location} · {profile.email}
          </p>
        </div>

        <div className="shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-accent/70 shadow-[0_0_0_6px_rgba(253,191,5,0.08)] sm:h-48 sm:w-48">
            <Image
              src="/images/avatar.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
