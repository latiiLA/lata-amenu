/** Abstract “episode still” — visual memory without licensed frames. */
const VARIANTS = {
  fire: {
    gradient: "from-[#5c1520] via-[#c45c3e]/40 to-[#0c0a09]",
    motif: "flame",
  },
  raven: {
    gradient: "from-[#1a1612] via-[#3a322c] to-[#8f2433]/50",
    motif: "raven",
  },
  map: {
    gradient: "from-[#2a241c] via-[#6e5b45]/40 to-[#0c0a09]",
    motif: "map",
  },
} as const;

export type EpisodeArtVariant = keyof typeof VARIANTS;

export default function EpisodeArt({
  variant = "fire",
  episode,
  badge = "Ep.",
  className = "",
}: {
  variant?: EpisodeArtVariant;
  episode: number;
  /** Overlay label — "Ep." for Story, "Mk." / "Campaign" for Works */
  badge?: string;
  className?: string;
}) {
  const v = VARIANTS[variant];

  return (
    <div
      className={`episode-art relative aspect-[16/10] overflow-hidden border border-[var(--sigil)]/20 ${className}`}
      aria-hidden="true"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient}`} />
      <div className="absolute inset-0 opacity-30 grain" />

      {v.motif === "flame" && (
        <div className="absolute inset-x-[20%] bottom-0 top-[30%]">
          <div className="flame-lick absolute bottom-0 left-1/2 h-3/4 w-8 -translate-x-1/2 rounded-full bg-[var(--ember)]/50 blur-md" />
          <div className="flame-lick absolute bottom-0 left-[40%] h-1/2 w-5 rounded-full bg-[var(--crimson)]/60 blur-sm [animation-delay:0.3s]" />
          <div className="flame-lick absolute bottom-0 left-[58%] h-2/3 w-6 rounded-full bg-[var(--ember)]/40 blur-md [animation-delay:0.6s]" />
        </div>
      )}

      {v.motif === "raven" && (
        <svg
          viewBox="0 0 120 80"
          className="raven-idle absolute left-1/2 top-1/2 h-16 w-24 -translate-x-1/2 -translate-y-1/2 text-[var(--parchment)]/25"
          fill="currentColor"
        >
          <path d="M10 45c12-4 20-16 28-16 4 0 6 2 10 6l6-12c2-4 6-6 10-4 8 4 12 14 14 22 8-2 16-2 24 2 6 2 10 8 8 12-6 2-16 0-24-2-2 6-8 12-16 14-6 2-12 0-16-4l-4 8c-2 2-6 2-8 0l2-10c-6-2-12-6-16-12-4 4-10 6-18 6-6 0-8-4-4-10z" />
        </svg>
      )}

      {v.motif === "map" && (
        <svg viewBox="0 0 160 100" className="absolute inset-0 h-full w-full opacity-40">
          <path
            d="M20 70 C40 40, 60 50, 80 30 S120 20, 140 45"
            fill="none"
            stroke="#c4a574"
            strokeWidth="1"
            className="map-draw"
          />
          <circle cx="80" cy="30" r="3" fill="#8f2433" className="map-pulse" />
          <circle cx="140" cy="45" r="2.5" fill="#c45c3e" className="map-pulse [animation-delay:0.5s]" />
          <circle cx="20" cy="70" r="2.5" fill="#c4a574" className="map-pulse [animation-delay:1s]" />
        </svg>
      )}

      <span className="absolute bottom-3 left-3 font-heading text-[0.65rem] tracking-[0.25em] text-[var(--parchment)]/80 uppercase">
        {badge} {String(episode).padStart(2, "0")}
      </span>
    </div>
  );
}
