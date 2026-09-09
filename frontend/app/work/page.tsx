import Link from "next/link";
import CampaignDispatch from "@/components/campaign-dispatch";
import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import FantasyMap from "@/components/fantasy-map";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { protagonist, series } from "@/content/character";
import { getArchiveProjects, getFeaturedProjects } from "@/content/projects";

export const metadata = {
  title: `The Works — ${series.title}`,
  description: `Chart of realms and campaigns secured by ${protagonist.name}.`,
};

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const archive = getArchiveProjects();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,36,51,0.14),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} dragons className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex-1 px-6 pb-20 sm:px-10">
          <div className="max-w-5xl pt-14 sm:pt-20">
            <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
              The Works · {protagonist.epithet}
            </p>
            <h1 className="font-heading mt-4 text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase">
              Chart of realms
            </h1>
            <div className="banner-rule mt-6 w-32" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[var(--parchment-dim)]">
              The war table first. Then the dispatches — each seal a campaign won in the field.
            </p>
          </div>

          <div className="mt-12 max-w-6xl px-1 sm:px-2">
            <FantasyMap projects={featured} />
          </div>

          <section className="mt-24 max-w-5xl">
            <p className="font-heading text-[0.7rem] tracking-[0.28em] text-[var(--crimson)] uppercase">
              War council
            </p>
            <h2 className="font-heading mt-3 text-[clamp(1.75rem,4vw,2.35rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase">
              Campaign dispatches
            </h2>
            <div className="banner-rule mt-5 w-24" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-lg text-[var(--parchment-dim)]">
              Torn missives from the chart. Break a seal to read threat, strategy, and victory.
            </p>

            <ol className="mt-12 space-y-10 sm:space-y-12">
              {featured.map((project) => (
                <li key={project.slug}>
                  <CampaignDispatch project={project} />
                </li>
              ))}
            </ol>
          </section>

          {archive.length > 0 ? (
            <section className="mt-24 max-w-5xl">
              <h2 className="font-heading text-[0.7rem] tracking-[0.28em] text-[var(--parchment-dim)] uppercase">
                Forgotten coasts
              </h2>
              <ul className="mt-6 space-y-4">
                {archive.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group flex flex-wrap items-baseline gap-x-4 gap-y-1"
                    >
                      <span className="font-heading text-lg font-semibold text-[var(--parchment)] group-hover:text-[var(--ember)]">
                        {project.title}
                      </span>
                      <span className="font-heading text-[0.65rem] tracking-[0.14em] text-[var(--parchment-dim)] uppercase">
                        {project.year} · {project.stack.slice(0, 3).join(", ")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
