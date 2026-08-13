import Image from "next/image";
import { certifications, education, languageScore } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="border-b border-border/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="certifications-heading"
          className="text-sm font-mono uppercase tracking-widest text-accent"
        >
          Certifications &amp; Education
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          Credentials
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex gap-4 rounded-2xl border border-border bg-surface p-4"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border">
                    <Image
                      src={cert.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-ink">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border font-mono text-xs font-semibold text-accent">
                  {languageScore.title}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug text-ink">
                    {languageScore.title} — {languageScore.score}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">
                    {languageScore.year}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface-muted/60 p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Education
            </h3>
            <p className="mt-3 text-base font-semibold text-ink">
              {education.school}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{education.period}</p>
            <p className="mt-3 text-sm text-ink-muted">{education.major}</p>
            <p className="text-sm text-ink-muted">{education.degree}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
