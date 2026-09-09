import Link from "next/link";
import { notFound } from "next/navigation";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { protagonist, series } from "@/content/character";
import { getScrollBySlug, scrolls } from "@/content/scrolls";

type ScrollDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return scrolls.map((scroll) => ({ slug: scroll.slug }));
}

export async function generateMetadata({ params }: ScrollDetailProps) {
  const { slug } = await params;
  const scroll = getScrollBySlug(slug);
  if (!scroll) return { title: `The Scrolls — ${series.title}` };
  return {
    title: `${scroll.title} — ${series.title}`,
    description: scroll.tagline,
  };
}

export default async function ScrollDetailPage({ params }: ScrollDetailProps) {
  const { slug } = await params;
  const scroll = getScrollBySlug(slug);
  if (!scroll) notFound();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.08),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} ravens={false} embers={false} className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="mx-auto max-w-2xl pt-12 sm:pt-16">
            <Link
              href="/scrolls"
              className="font-heading text-[0.65rem] tracking-[0.22em] text-[var(--sigil)] uppercase transition-colors hover:text-[var(--ember)]"
            >
              ← All sealed letters
            </Link>

            {/* Unrolled parchment letter */}
            <article className="relative mt-10">
              <div className="scroll-rod relative z-20 mx-[3%] h-4 sm:h-5" aria-hidden>
                <div className="absolute inset-y-0 -left-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] sm:-left-3 sm:w-4" />
                <div className="absolute inset-y-0 -right-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] sm:-right-3 sm:w-4" />
                <div className="h-full rounded-sm bg-[linear-gradient(180deg,#7a6550_0%,#4a3c2e_45%,#2a2218_100%)]" />
              </div>

              <div className="scroll-unrolled relative z-10 -mt-1 -mb-1 px-6 py-10 sm:px-12 sm:py-14">
                <div className="pointer-events-none absolute inset-0 opacity-35 parchment-stain" />
                <div className="pointer-events-none absolute inset-0 opacity-30 grain" />

                <div className="relative">
                  <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[#7a3a2a] uppercase">
                    Scroll {scroll.mark} · Sealed {scroll.dated} · {scroll.reading}
                    {scroll.placeholder ? " · Unsealed draft" : ""}
                  </p>

                  <h1 className="font-heading mt-4 text-[clamp(1.85rem,4.5vw,2.85rem)] font-bold tracking-[0.04em] text-[#2a1e14]">
                    {scroll.title}
                  </h1>

                  <p className="mt-5 text-xl leading-relaxed text-[#4a3828] sm:text-2xl">
                    {scroll.tagline}
                  </p>

                  <p className="mt-6 font-heading text-[0.65rem] tracking-[0.2em] text-[#8f2433] uppercase">
                    By {protagonist.name} · {protagonist.epithet}
                  </p>

                  <p className="mt-3 font-heading text-[0.58rem] tracking-[0.16em] text-[#6a5644]/80 uppercase">
                    {scroll.topics.join(" · ")}
                  </p>

                  <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,transparent,#8a6a48_20%,#8a6a48_80%,transparent)] opacity-50" />

                  <div className="mt-10 space-y-10">
                    {scroll.sections.map((section, i) => (
                      <section key={section.heading ?? i}>
                        {section.heading ? (
                          <h2 className="font-heading text-[0.7rem] tracking-[0.28em] text-[#7a3a2a] uppercase">
                            {section.heading}
                          </h2>
                        ) : null}
                        <p
                          className={`text-lg leading-relaxed text-[#2a1e14]/90 sm:text-xl ${
                            section.heading ? "mt-4" : ""
                          }`}
                        >
                          {section.body}
                        </p>
                      </section>
                    ))}
                  </div>

                  {scroll.placeholder ? (
                    <p className="mt-12 border-l-2 border-[#8f2433]/60 pl-4 text-base leading-relaxed text-[#4a3828]">
                      Unsealed draft. Replace the words in{" "}
                      <code className="text-[#8f2433]">content/scrolls.ts</code> to seal this
                      letter for the realm.
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="scroll-rod relative z-20 mx-[3%] h-4 sm:h-5" aria-hidden>
                <div className="absolute inset-y-0 -left-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] sm:-left-3 sm:w-4" />
                <div className="absolute inset-y-0 -right-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] sm:-right-3 sm:w-4" />
                <div className="h-full rounded-sm bg-[linear-gradient(180deg,#7a6550_0%,#4a3c2e_45%,#2a2218_100%)]" />
              </div>
            </article>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/scrolls"
                className="inline-flex h-11 items-center border border-[var(--sigil)]/40 px-5 font-heading text-[0.7rem] tracking-[0.18em] text-[var(--parchment)] uppercase"
              >
                More letters
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center border border-[var(--crimson)] bg-[var(--crimson)] px-5 font-heading text-[0.7rem] tracking-[0.18em] text-[var(--parchment)] uppercase"
              >
                Send a raven
              </Link>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
