import EpisodeArt, { type EpisodeArtVariant } from "@/components/episode-art";
import type { LineageEntry } from "@/content/lineage";

const ART: EpisodeArtVariant[] = ["map", "fire", "raven", "map", "fire"];

type StoryEpisodesProps = {
  entries: LineageEntry[];
  /** e.g. "Season One · Forging" */
  seasonLabel?: string;
  season?: number;
};

/** Education / service presented as prestige-drama episodes. */
export default function StoryEpisodes({
  entries,
  seasonLabel = "The Story",
  season,
}: StoryEpisodesProps) {
  return (
    <ol className="grid max-w-5xl gap-10 sm:gap-12">
      {entries.map((entry, i) => {
        const episode = i + 1;
        const roleLadder =
          entry.roles && entry.roles.length > 1 ? entry.roles.map((r) => r.title).join(" → ") : null;
        const seasonTag =
          season != null
            ? `Season ${String(season).padStart(2, "0")} · Episode ${String(episode).padStart(2, "0")}`
            : `${seasonLabel} · Episode ${String(episode).padStart(2, "0")}`;

        return (
          <li
            key={entry.mark + entry.title}
            className="group grid gap-5 sm:grid-cols-[minmax(0,18rem)_1fr] sm:items-center sm:gap-8"
          >
            <EpisodeArt
              variant={ART[i % ART.length]}
              episode={episode}
              className="w-full"
            />
            <div className="min-w-0">
              <p className="font-heading text-[0.65rem] tracking-[0.22em] text-[var(--sigil)] uppercase">
                {seasonTag}
              </p>
              <h3 className="font-heading mt-2 text-2xl font-semibold tracking-wide text-[var(--parchment)] sm:text-3xl">
                {entry.title}
              </h3>
              <p className="mt-2 text-lg text-[var(--ember)]">{entry.place}</p>
              <p className="mt-1 font-heading text-[0.65rem] tracking-[0.16em] text-[var(--parchment-dim)] uppercase">
                {entry.years}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--parchment-dim)]">
                {entry.detail}
              </p>
              {roleLadder ? (
                <p className="mt-4 font-heading text-[0.65rem] tracking-[0.14em] text-[var(--sigil)] uppercase">
                  Posts · {roleLadder}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
