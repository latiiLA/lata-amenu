import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import ScrollCard from "@/components/scroll-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { protagonist, series } from "@/content/character";
import { getFeaturedScrolls } from "@/content/scrolls";

export const metadata = {
  title: `The Scrolls — ${series.title}`,
  description: `Sealed letters and writings from ${protagonist.name}, ${protagonist.epithet}.`,
};

export default function ScrollsPage() {
  const letters = getFeaturedScrolls();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.1),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} ravens className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="max-w-3xl pt-14 sm:pt-20">
            <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
              The Scrolls · {protagonist.epithet}
            </p>
            <h1 className="font-heading mt-4 text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase">
              Sealed letters
            </h1>
            <div className="banner-rule mt-6 w-32" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[var(--parchment-dim)]">
              In this realm, news does not trend — it arrives on parchment. These are the
              Seatkeeper’s letters: craft, systems, and what was learned in the field.
            </p>
            <p className="mt-4 font-heading text-[0.6rem] tracking-[0.18em] text-[var(--sigil)] uppercase">
              To seal a new letter · write it in content/scrolls.ts
            </p>
          </div>

            <ol className="mx-auto mt-14 max-w-3xl space-y-12 sm:space-y-14">
              {letters.map((scroll) => (
                <li key={scroll.slug}>
                  <ScrollCard scroll={scroll} />
                </li>
              ))}
            </ol>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
