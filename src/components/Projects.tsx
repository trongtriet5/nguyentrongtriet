"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [active]);

  function openProject(project: Project, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setActive(project);
  }

  function closeProject() {
    setActive(null);
    triggerRef.current?.focus();
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-border/80 bg-surface-muted/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="projects-heading"
          className="text-sm font-mono uppercase tracking-widest text-accent"
        >
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          Dashboards built to answer specific business questions
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <button
                type="button"
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border text-left focus-visible:outline-none"
                onClick={(event) => openProject(project, event.currentTarget)}
                aria-haspopup="dialog"
              >
                <Image
                  src={project.image.thumb}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-200 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View dashboard
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {project.org}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.summary}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-xs text-ink-muted">{metric.label}</dt>
                      <dd className="font-mono text-sm font-semibold text-ink">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-1 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  onClick={(event) =>
                    openProject(project, event.currentTarget)
                  }
                >
                  View full dashboard
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onCancel={closeProject}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeProject();
        }}
        aria-labelledby={active ? "project-dialog-title" : undefined}
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface p-0 text-ink backdrop:bg-black/80 open:animate-none"
      >
        {active && (
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-border p-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {active.org}
                </p>
                <h3
                  id="project-dialog-title"
                  className="mt-1 text-lg font-semibold text-ink"
                >
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeProject}
                className="shrink-0 rounded-full border border-border p-2 text-ink-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Close dashboard preview"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              <Image
                src={active.image.full}
                alt={active.image.alt}
                width={active.image.width}
                height={active.image.height}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="h-auto w-full"
              />
            </div>

            <p className="border-t border-border p-5 text-sm leading-relaxed text-ink-muted">
              {active.description}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
