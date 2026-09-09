import Link from "next/link";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import OathMedal from "@/components/oath-medal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { protagonist, series } from "@/content/character";
import { getCertificates } from "@/content/certificates";

export const metadata = {
  title: `The Oaths — ${series.title}`,
  description: `Hall of seals — certifications of ${protagonist.name}, ${protagonist.epithet}.`,
};

export default function OathsPage() {
  const oaths = getCertificates();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,36,51,0.14),transparent_48%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} dragons={false} className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="mx-auto max-w-3xl pt-14 text-center sm:pt-16">
            <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
              The Oaths · {protagonist.house}
            </p>
            <h1 className="font-heading mt-4 text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase">
              Hall of seals
            </h1>
            <div className="banner-rule mx-auto mt-6 w-32" aria-hidden="true" />
            <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-[var(--parchment-dim)]">
              Medals struck in foreign courts. Touch a seal — the credential opens (Drive or
              platform).
            </p>
            <p className="mt-4 font-heading text-[0.6rem] tracking-[0.18em] text-[var(--sigil)] uppercase">
              Add yours in content/certificates.ts
            </p>
          </div>

          {/* Timber beam the medals hang from */}
          <section className="relative mx-auto mt-8 max-w-6xl">
            <div className="pointer-events-none relative mx-4 h-5 sm:mx-8" aria-hidden>
              <div className="absolute inset-x-0 top-1 h-4 rounded-sm bg-[linear-gradient(180deg,#6a5a48,#2a241c)] shadow-[0_8px_24px_rgba(0,0,0,0.5)]" />
              <div className="absolute inset-x-[10%] top-0 h-1.5 rounded-full bg-[var(--sigil)]/25" />
            </div>

            <ul className="flex flex-wrap items-start justify-center gap-x-4 gap-y-10 px-2 pt-1 sm:gap-x-8 md:gap-x-10">
              {oaths.map((cert, i) => (
                <li
                  key={cert.id}
                  className="flex justify-center"
                  style={{ marginTop: `${(i % 3) * 14}px` }}
                >
                  <OathMedal cert={cert} index={i} />
                </li>
              ))}
            </ul>

            <div
              className="pointer-events-none mx-auto mt-6 h-12 max-w-2xl bg-[radial-gradient(ellipse_at_center,rgba(196,165,116,0.1),transparent_70%)]"
              aria-hidden
            />
          </section>

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
