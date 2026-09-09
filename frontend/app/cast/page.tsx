import Link from "next/link";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { cast, protagonist, series } from "@/content/character";

export const metadata = {
  title: `The Arsenal — ${series.title}`,
  description: `The Arsenal of ${protagonist.name}: ${protagonist.epithet}, and the company that rides with The Seat — Go, React, Next.js, and more.`,
};

export default function ArsenalPage() {
  const leads = cast.filter((m) => m.billing === "lead");
  const supporting = cast.filter((m) => m.billing === "supporting");

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,36,51,0.18),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox embers ravens className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex flex-1 flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-24">
          <div className="mx-auto mb-10 h-2 w-40 bg-black/80" aria-hidden="true" />

          <p className="font-heading text-[0.65rem] tracking-[0.4em] text-[var(--sigil)] uppercase">
            {series.title} · End titles
          </p>
          <h1 className="mt-5 font-heading text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-[0.22em] text-[var(--parchment)] uppercase">
            The Arsenal
          </h1>
          <div className="banner-rule mx-auto mt-8 w-36" aria-hidden="true" />

          <div className="mt-16 space-y-4">
            <p className="font-heading text-[0.65rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
              Starring
            </p>
            <p className="font-heading text-[clamp(2rem,5vw,3.5rem)] tracking-[0.12em] text-[var(--parchment)] uppercase">
              {protagonist.name}
            </p>
            <p className="font-heading text-base tracking-[0.22em] text-[var(--ember)] uppercase sm:text-lg">
              {protagonist.epithet}
            </p>
            <p className="mx-auto mt-4 max-w-md text-xl leading-relaxed text-[var(--parchment-dim)]">
              {protagonist.blurb}
            </p>
          </div>

          <div className="mt-20 w-full max-w-lg">
            <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[var(--parchment-dim)] uppercase">
              Also starring
            </p>
            <ul className="mt-8 space-y-8">
              {leads.map((m) => (
                <li key={m.name}>
                  <p className="font-heading text-2xl tracking-[0.12em] text-[var(--parchment)] uppercase sm:text-3xl">
                    {m.name}
                  </p>
                  <p className="mt-2 font-heading text-[0.65rem] tracking-[0.2em] text-[var(--sigil)] uppercase">
                    {m.role}
                  </p>
                  <p className="mx-auto mt-3 max-w-sm text-lg text-[var(--parchment-dim)]">
                    {m.line}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 w-full max-w-2xl">
            <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[var(--parchment-dim)] uppercase">
              Featuring
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {supporting.map((m) => (
                <li key={m.name} className="border-t border-[var(--sigil)]/20 pt-4">
                  <p className="font-heading text-lg tracking-[0.1em] text-[var(--parchment)] uppercase">
                    {m.name}
                  </p>
                  <p className="mt-1 font-heading text-[0.6rem] tracking-[0.16em] text-[var(--ember)] uppercase">
                    {m.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-20 font-heading text-2xl italic text-[var(--sigil)] sm:text-3xl">
            “{protagonist.words}”
          </p>
          <p className="mt-3 font-heading text-[0.6rem] tracking-[0.22em] text-[var(--parchment-dim)] uppercase">
            {protagonist.house}
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center border border-[var(--crimson)] bg-[var(--crimson)] px-6 font-heading text-[0.7rem] tracking-[0.2em] text-[var(--parchment)] uppercase transition-colors hover:bg-[color-mix(in_srgb,var(--crimson)_85%,white)]"
            >
              Send a raven
            </Link>
            <Link
              href="/work"
              className="inline-flex h-11 items-center justify-center border border-[var(--sigil)]/40 px-6 font-heading text-[0.7rem] tracking-[0.2em] text-[var(--parchment)] uppercase transition-colors hover:bg-[var(--sigil)]/10"
            >
              The Works
            </Link>
          </div>

          <div className="mx-auto mt-16 h-2 w-40 bg-black/80" aria-hidden="true" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
