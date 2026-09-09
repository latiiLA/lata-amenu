import Link from "next/link";
import BannerPole from "@/components/banner-pole";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TrialChart from "@/components/trial-chart";
import { protagonist, series } from "@/content/character";
import { banners } from "@/content/banners";
import { trials } from "@/content/trials";

export const metadata = {
  title: `The Banners — ${series.title}`,
  description: `Where to find ${protagonist.name} across the courts — GitHub, LeetCode, Codeforces, and more.`,
};

export default function BannersPage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,36,51,0.16),transparent_48%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} dragons={false} className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="mx-auto max-w-3xl pt-14 text-center sm:pt-16">
            <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
              The Banners · {protagonist.house}
            </p>
            <h1 className="font-heading mt-4 text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase">
              Raised abroad
            </h1>
            <div className="banner-rule mx-auto mt-6 w-32" aria-hidden="true" />
            <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-[var(--parchment-dim)]">
              House colors hanging in foreign halls. Touch a pennant — follow it to that court.
            </p>
          </div>

          {/* Great hall beam + hanging row */}
          <section className="relative mx-auto mt-6 max-w-6xl">
            <div className="pointer-events-none relative mx-4 h-5 sm:mx-10" aria-hidden>
              <div className="absolute inset-x-0 top-1 h-4 rounded-sm bg-[linear-gradient(180deg,#6a5a48,#2a241c)] shadow-[0_8px_24px_rgba(0,0,0,0.5)]" />
              <div className="absolute inset-x-[8%] top-0 h-1.5 rounded-full bg-[var(--sigil)]/25" />
            </div>

            <ul className="flex flex-wrap items-start justify-center gap-x-1 gap-y-4 px-1 pt-1 sm:gap-x-4 md:gap-x-6">
              {banners.map((banner, i) => (
                <li
                  key={banner.id}
                  className="flex justify-center"
                  style={{ marginTop: `${(i % 2) * 18}px` }}
                >
                  <BannerPole banner={banner} index={i} />
                </li>
              ))}
            </ul>

            <div
              className="pointer-events-none mx-auto mt-2 h-10 max-w-3xl bg-[radial-gradient(ellipse_at_center,rgba(196,165,116,0.12),transparent_70%)]"
              aria-hidden
            />
          </section>

          <TrialChart trials={trials} />

          <p className="mx-auto mt-10 max-w-xl text-center font-heading text-[0.6rem] tracking-[0.18em] text-[var(--sigil)] uppercase">
            Upwork profile link still to raise · Trial numbers are a snapshot
          </p>

          <p className="mx-auto mt-10 max-w-xl text-center text-lg text-[var(--parchment-dim)]">
            Prefer a private word?{" "}
            <Link href="/contact" className="text-[var(--sigil)] underline-offset-4 hover:underline">
              Send a raven
            </Link>
            .
          </p>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
