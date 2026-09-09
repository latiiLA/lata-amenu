import Link from "next/link";
import type { Project } from "@/content/projects";
import RealmMark from "@/components/realm-mark";

type CampaignDispatchProps = {
  project: Project;
};

/**
 * A war-council dispatch — torn missive + ribbon + seal.
 * Not a rectangular ledger card.
 */
export default function CampaignDispatch({ project }: CampaignDispatchProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="campaign-dispatch group relative block focus:outline-none"
      aria-label={`Open campaign: ${project.realm} — ${project.title}`}
    >
      {/* Crimson war ribbon */}
      <div
        className="pointer-events-none absolute -left-1 top-0 z-20 flex h-full w-7 flex-col items-center sm:w-9"
        aria-hidden
      >
        <div className="h-3 w-full bg-[linear-gradient(180deg,#c45c3e,#8f2433)]" />
        <div className="flex flex-1 w-[70%] flex-col items-center justify-center gap-1 bg-[linear-gradient(90deg,#6e1a24,#8f2433,#6e1a24)] py-4 shadow-[4px_0_16px_rgba(0,0,0,0.4)]">
          <span className="font-heading text-[0.5rem] tracking-[0.2em] text-[#f0d4a8]/80 uppercase [writing-mode:vertical-rl] rotate-180">
            Campaign
          </span>
          <span className="font-heading text-lg font-bold tracking-wide text-[#ebe3d4]">
            {String(project.episode).padStart(2, "0")}
          </span>
        </div>
        <div
          className="h-0 w-0 border-l-[14px] border-r-[14px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#6e1a24] sm:border-l-[18px] sm:border-r-[18px]"
        />
      </div>

      {/* Missive body */}
      <div className="campaign-missive relative ml-5 overflow-hidden pl-6 sm:ml-7 sm:pl-10">
        <div className="pointer-events-none absolute inset-0 opacity-30 parchment-stain" />
        <div className="pointer-events-none absolute inset-0 opacity-25 grain" />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-[linear-gradient(90deg,rgba(40,28,18,0.35),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-[linear-gradient(270deg,rgba(40,28,18,0.3),transparent)]"
          aria-hidden
        />

        <div className="relative grid gap-5 p-5 sm:grid-cols-[6.5rem_1fr_auto] sm:items-center sm:gap-8 sm:p-7 sm:pr-8">
          <RealmMark
            chronicle={project.chronicle}
            campaign={project.episode}
            realm={project.realm}
            coords={project.map}
            className="mx-auto sm:mx-0"
          />

          <div className="min-w-0 text-center sm:text-left">
            <p className="font-heading text-[0.6rem] tracking-[0.24em] text-[#7a3a2a] uppercase">
              Dispatch · {project.realm}
              {project.placeholder ? " · Chart TBD" : ""}
            </p>
            <h3 className="font-heading mt-2 text-2xl font-semibold tracking-wide text-[#2a1e14] transition-colors group-hover:text-[#6e1a24] sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-lg leading-relaxed text-[#4a3828]">
              {project.tagline}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
              <span className="font-heading text-[0.55rem] tracking-[0.16em] text-[#6a5644] uppercase">
                Arms · {project.stack.slice(0, 4).join(" · ")}
              </span>
              <span className="font-heading text-[0.55rem] tracking-[0.16em] text-[#8f2433] uppercase">
                {project.year}
              </span>
            </div>
          </div>

          <div className="hidden flex-col items-end gap-2 sm:flex">
            <span className="font-heading text-[0.55rem] tracking-[0.2em] text-[#6a5644]/70 uppercase">
              {project.map.x}°E · {project.map.y}°N
            </span>
            <span className="font-heading text-[0.65rem] tracking-[0.2em] text-[#8f2433] uppercase transition-transform group-hover:translate-x-1">
              Open the council →
            </span>
          </div>
        </div>

        {/* Broken wax drip accent */}
        <div
          className="pointer-events-none absolute right-6 top-0 h-8 w-1.5 bg-[linear-gradient(180deg,#8f2433,transparent)] opacity-70 sm:right-10"
          aria-hidden
        />
      </div>
    </Link>
  );
}
