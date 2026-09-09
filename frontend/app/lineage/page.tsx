import Link from "next/link";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import StoryEpisodes from "@/components/story-episodes";
import { protagonist, series } from "@/content/character";
import { getForging, getService } from "@/content/lineage";

export const metadata = {
  title: `The Story — ${series.title}`,
  description: `The Story of ${protagonist.name}: education episodes, A2SV, and service.`,
};

export default function LineagePage() {
  const forging = getForging();
  const service = getService();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(143,36,51,0.1),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} embers ravens={false} className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="max-w-5xl pt-14 sm:pt-20">
            <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
              {protagonist.house} · Two seasons
            </p>
            <h1 className="font-heading mt-4 text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase">
              The Story
            </h1>
            <div className="banner-rule mt-6 w-32" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[var(--parchment-dim)]">
              Season One forges the Seatkeeper. Season Two puts him in the field.
            </p>
          </div>

          <section className="mt-16">
            <h2 className="font-heading text-[0.7rem] tracking-[0.28em] text-[var(--sigil)] uppercase">
              Season 01 · Forging
            </h2>
            <p className="mt-3 max-w-xl text-lg text-[var(--parchment-dim)]">
              Schools and A2SV — where the Seatkeeper was tempered.
            </p>
            <div className="mt-10">
              <StoryEpisodes entries={forging} season={1} seasonLabel="Forging" />
            </div>
          </section>

          <section className="mt-20">
            <h2 className="font-heading text-[0.7rem] tracking-[0.28em] text-[var(--sigil)] uppercase">
              Season 02 · Service
            </h2>
            <p className="mt-3 max-w-xl text-lg text-[var(--parchment-dim)]">
              Research at Adama, then four posts at Cooperative Bank of Oromia — trainee to senior
              switch. Dates seal when you send them.
            </p>
            <div className="mt-10">
              <StoryEpisodes entries={service} season={2} seasonLabel="Service" />
            </div>
          </section>

          <p className="mx-auto mt-16 max-w-3xl text-lg text-[var(--parchment-dim)]">
            See the billing —{" "}
            <Link href="/cast" className="text-[var(--sigil)] underline-offset-4 hover:underline">
              The Arsenal
            </Link>{" "}
            · or continue to{" "}
            <Link href="/work" className="text-[var(--sigil)] underline-offset-4 hover:underline">
              The Works
            </Link>
            .
          </p>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
