import Link from "next/link";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import RealmBackdrop from "@/components/realm-backdrop";
import RealmWords from "@/components/realm-words";
import SiteHeader from "@/components/site-header";
import TitleSequence from "@/components/title-sequence";
import { realm } from "@/content/character";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <TitleSequence />
      <RealmBackdrop />
      <CinematicAtmosphere dragons={false} letterbox={false} />

      <div className="relative z-20 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex flex-1 flex-col justify-center px-6 pb-16 sm:px-10 sm:pb-20 lg:max-w-[58%] xl:max-w-[52%]">
          <RealmWords className="hero-enter font-heading text-[0.7rem] tracking-[0.42em] text-[var(--sigil)] uppercase" />

          <h1 className="hero-enter hero-enter-delay-1 realm-headline mt-6 font-heading text-[clamp(2.4rem,6.5vw,4.75rem)] leading-[1.05] font-semibold tracking-[0.04em] text-[var(--parchment)] uppercase">
            <span className="block">A Developer</span>
            <span className="mt-1 flex flex-wrap items-baseline gap-x-3">
              <span className="realm-of">Of</span>
              <span>the Realm</span>
            </span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-[var(--parchment)]/90 sm:text-xl">
            {realm.line}
          </p>

          <div className="hero-enter hero-enter-delay-3 mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/work"
              className="realm-cta group inline-flex h-12 items-center gap-3 rounded-full border border-[var(--sigil)]/55 bg-transparent px-6 font-heading text-[0.7rem] tracking-[0.2em] text-[var(--parchment)] uppercase transition-colors hover:border-[var(--ember)] hover:bg-[var(--sigil)]/10"
            >
              <KeepIcon />
              View My Works
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-heading text-[0.7rem] tracking-[0.2em] text-[var(--parchment)] uppercase transition-colors hover:text-[var(--sigil)]"
            >
              Send a Raven
              <RavenIcon />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

function KeepIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 20V9l4-3 4 3 4-3 4 3v11" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5M8 9v2M12 8v2M16 9v2" strokeLinecap="round" />
    </svg>
  );
}

function RavenIcon() {
  return (
    <svg viewBox="0 0 64 32" className="h-3.5 w-7" fill="currentColor" aria-hidden>
      <path d="M2 18c6-2 10-8 14-8 2 0 3 1 5 3l3-6c1-2 3-3 5-2 4 2 6 7 7 11 4-1 8-1 12 1 3 1 5 4 4 6-3 1-8 0-12-1-1 3-4 6-8 7-3 1-6 0-8-2l-2 4c-1 1-3 1-4 0l1-5c-3-1-6-3-8-6-2 2-5 3-9 3-3 0-4-2-2-5z" />
    </svg>
  );
}
