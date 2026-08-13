import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-border/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="experience-heading"
          className="text-sm font-mono uppercase tracking-widest text-accent"
        >
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          Work history
        </p>

        <ol className="mt-12 space-y-12 border-l border-border pl-8">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-[9px] w-[9px] rounded-full ${
                  job.current ? "bg-accent" : "bg-border"
                }`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-ink">
                  {job.role} <span className="text-ink-muted">·</span>{" "}
                  <span className="text-accent">{job.company}</span>
                </h3>
                <p className="font-mono text-xs text-ink-muted">
                  {job.period}
                  {job.current && (
                    <span className="ml-2 rounded-full border border-accent/60 px-2 py-0.5 text-accent">
                      Current
                    </span>
                  )}
                </p>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Domains">
                {job.domains.map((domain) => (
                  <li
                    key={domain}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {domain}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
