import Link from "next/link";
import { protagonist, series } from "@/content/character";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--sigil)]/15 px-6 py-10 sm:px-10">
      <div className="banner-rule mb-8 w-full" aria-hidden="true" />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[var(--crimson)] uppercase">
            {protagonist.name} · {series.title}
          </p>
          <p className="font-heading mt-2 text-2xl font-semibold tracking-wide text-[var(--parchment)]">
            Ally with {protagonist.epithet}
          </p>
          <p className="mt-2 max-w-sm text-lg text-[var(--parchment-dim)] italic">
            {series.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center border border-[var(--crimson)] bg-[var(--crimson)] px-6 font-heading text-[0.7rem] tracking-[0.2em] text-[var(--parchment)] uppercase transition-colors hover:bg-[color-mix(in_srgb,var(--crimson)_85%,white)]"
          >
            Send a raven
          </Link>
          <Link
            href="/banners"
            className="inline-flex h-11 items-center justify-center border border-[var(--sigil)]/40 px-6 font-heading text-[0.7rem] tracking-[0.2em] text-[var(--parchment)] uppercase transition-colors hover:bg-[var(--sigil)]/10"
          >
            The Banners
          </Link>
        </div>
      </div>
    </footer>
  );
}
