import Link from "next/link";
import { notFound } from "next/navigation";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import RealmMark from "@/components/realm-mark";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { protagonist, series } from "@/content/character";
import { getProjectBySlug, projects } from "@/content/projects";

type WorkDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: `The Works — ${series.title}` };
  return {
    title: `${project.realm} · ${project.title} — ${series.title}`,
    description: project.tagline,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const chapters = [
    {
      roman: "I",
      label: "The threat",
      creed: "What stood against the seat",
      body: project.threat,
    },
    {
      roman: "II",
      label: "The strategy",
      creed: "How the Seatkeeper moved",
      body: project.strategy,
    },
    {
      roman: "III",
      label: "The victory",
      creed: "What the realm kept",
      body: project.victory,
    },
  ];

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,36,51,0.12),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} dragons={false} className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="mx-auto max-w-3xl pt-12 sm:pt-16">
            <Link
              href="/work"
              className="font-heading text-[0.65rem] tracking-[0.22em] text-[var(--sigil)] uppercase transition-colors hover:text-[var(--ember)]"
            >
              ← Chart of realms
            </Link>

            {/* Council header */}
            <header className="mt-10 flex flex-col items-center text-center sm:mt-14">
              <RealmMark
                chronicle={project.chronicle}
                campaign={project.episode}
                realm={project.realm}
                coords={project.map}
                className="mb-8"
              />
              <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
                War council · {project.realm}
                {project.placeholder ? " · Chart TBD" : ""}
              </p>
              <h1 className="font-heading mt-4 text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[0.04em] text-[var(--parchment)]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-2xl leading-relaxed text-[var(--parchment-dim)]">
                {project.tagline}
              </p>
              <p className="mt-6 font-heading text-[0.65rem] tracking-[0.2em] text-[var(--sigil)] uppercase">
                Secured by {protagonist.name} · {protagonist.epithet}
              </p>
            </header>

            {/* Order of battle strip — not a 3-col card grid */}
            <div className="campaign-order mt-12 overflow-hidden">
              <div className="relative grid gap-0 sm:grid-cols-3">
                {[
                  { k: "Year of the realm", v: project.year },
                  { k: "Office held", v: project.role },
                  { k: "Arms borne", v: project.stack.join(" · ") },
                ].map((item, i) => (
                  <div
                    key={item.k}
                    className={`relative px-5 py-5 text-center ${
                      i > 0 ? "border-t border-[var(--sigil)]/20 sm:border-t-0 sm:border-l" : ""
                    }`}
                  >
                    <p className="font-heading text-[0.55rem] tracking-[0.22em] text-[var(--crimson)] uppercase">
                      {item.k}
                    </p>
                    <p className="mt-2 text-base leading-snug text-[var(--parchment)] sm:text-lg">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapters of the campaign */}
            <div className="mt-16 space-y-0">
              {chapters.map((chapter, i) => (
                <section
                  key={chapter.label}
                  className="campaign-chapter relative border-l-2 border-[var(--crimson)]/40 pl-6 sm:pl-8"
                >
                  <div
                    className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-[var(--crimson)] bg-[var(--stone)]"
                    aria-hidden
                  />
                  {i < chapters.length - 1 ? (
                    <div
                      className="absolute -left-px top-5 bottom-0 w-px bg-[var(--sigil)]/15"
                      aria-hidden
                    />
                  ) : null}

                  <p className="font-heading text-[0.6rem] tracking-[0.28em] text-[var(--sigil)] uppercase">
                    Chapter {chapter.roman} · {chapter.creed}
                  </p>
                  <h2 className="font-heading mt-2 text-xl tracking-wide text-[var(--parchment)] sm:text-2xl">
                    {chapter.label}
                  </h2>
                  <p className="mt-4 pb-12 text-xl leading-relaxed text-[var(--parchment)]/90">
                    {chapter.body}
                  </p>
                </section>
              ))}
            </div>

            <section className="mt-4">
              <p className="font-heading text-[0.6rem] tracking-[0.28em] text-[var(--sigil)] uppercase">
                Spoils of the field
              </p>
              <h2 className="font-heading mt-2 text-xl tracking-wide text-[var(--parchment)] sm:text-2xl">
                Claimed in the field
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.claimed.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-[var(--sigil)]/15 bg-[linear-gradient(135deg,rgba(36,28,22,0.5),rgba(12,10,9,0.3))] px-4 py-3 text-lg text-[var(--parchment)]/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {project.links && project.links.length > 0 ? (
              <div className="mt-14 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.label + link.href}
                    href={link.href}
                    className="inline-flex h-10 items-center border border-[var(--sigil)]/35 px-4 font-heading text-[0.65rem] tracking-[0.18em] text-[var(--parchment)] uppercase transition-colors hover:border-[var(--ember)]/50 hover:text-[var(--ember)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {project.placeholder ? (
              <p className="mt-14 border-l-2 border-[var(--crimson)]/50 pl-4 text-base leading-relaxed text-[var(--parchment-dim)]">
                This campaign is a placeholder on the chart. Send your real project story and we will
                rewrite it in{" "}
                <code className="text-[var(--sigil)]">content/projects.ts</code>.
              </p>
            ) : null}
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
