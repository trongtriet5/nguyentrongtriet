import { profile } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
