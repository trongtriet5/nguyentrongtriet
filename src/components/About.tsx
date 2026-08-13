import { skillGroups } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border/80 bg-surface-muted/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="about-heading"
            className="text-sm font-mono uppercase tracking-widest text-accent"
          >
            About
          </h2>
          <p className="mt-3 text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            I turn operational data into reporting systems that people
            actually use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Two years across retail, HR, and e-commerce taught me the same
            lesson from different angles: a dashboard only matters if it
            changes a decision. I work end-to-end — from SQL Server stored
            procedures and data pipelines to the Power BI reports that
            reach store managers, recruiters, and operations teams.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-ink-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
