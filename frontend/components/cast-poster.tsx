const POSTER_TONES = [
  "from-[#3a1518] via-[#1a1210] to-[#0c0a09]",
  "from-[#2a2418] via-[#161210] to-[#0c0a09]",
  "from-[#1a2428] via-[#121816] to-[#0c0a09]",
  "from-[#2a1814] via-[#141010] to-[#0c0a09]",
] as const;

type CastPosterProps = {
  name: string;
  role: string;
  line: string;
  billing?: "lead" | "supporting" | "star";
  index?: number;
};

export default function CastPoster({
  name,
  role,
  line,
  billing = "supporting",
  index = 0,
}: CastPosterProps) {
  const monogram = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || "—";
  const tone = POSTER_TONES[index % POSTER_TONES.length];
  const isLead = billing === "lead" || billing === "star";

  return (
    <article
      className={`cast-poster group relative overflow-hidden border border-[var(--sigil)]/20 ${
        isLead ? "min-h-[22rem] sm:min-h-[26rem]" : "min-h-[16rem]"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${tone}`} />
      <div className="absolute inset-0 opacity-25 grain" />
      <div className="pointer-events-none absolute -right-6 -top-8 font-heading text-[7rem] leading-none tracking-tight text-[var(--parchment)]/[0.06] uppercase sm:text-[9rem]">
        {monogram}
      </div>

      {/* Sigil ring */}
      <div
        className="absolute left-1/2 top-[28%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-28 sm:w-28"
        aria-hidden="true"
      >
        <div className="cast-ring absolute inset-0 rounded-full border border-[var(--sigil)]/35" />
        <div className="absolute inset-3 rounded-full border border-[var(--crimson)]/25" />
        <span className="font-heading text-2xl tracking-[0.12em] text-[var(--sigil)] sm:text-3xl">
          {monogram.slice(0, 1)}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--stone)] via-[var(--stone)]/90 to-transparent px-5 pb-5 pt-16">
        <p className="font-heading text-[0.6rem] tracking-[0.24em] text-[var(--crimson)] uppercase">
          {billing === "star" ? "Starring" : role}
        </p>
        <h3
          className={`font-heading mt-2 font-bold tracking-[0.06em] text-[var(--parchment)] uppercase ${
            isLead ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {name}
        </h3>
        {billing !== "star" ? (
          <p className="mt-1 font-heading text-[0.65rem] tracking-[0.16em] text-[var(--ember)] uppercase">
            {role}
          </p>
        ) : (
          <p className="mt-1 font-heading text-[0.65rem] tracking-[0.16em] text-[var(--ember)] uppercase">
            {role}
          </p>
        )}
        <p className="mt-3 text-base leading-relaxed text-[var(--parchment-dim)] sm:text-lg">
          {line}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(196,92,62,0.12),transparent_55%)]" />
    </article>
  );
}
