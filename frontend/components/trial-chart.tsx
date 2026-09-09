import type { TrialCourt } from "@/content/trials";

type TrialChartProps = {
  trials: TrialCourt[];
};

/** Three prove-grounds, one ledger — same chart language for each court. */
export default function TrialChart({ trials }: TrialChartProps) {
  return (
    <section className="mx-auto mt-20 max-w-5xl" aria-labelledby="trial-chart-heading">
      <div className="text-center">
        <p className="font-heading text-[0.7rem] tracking-[0.32em] text-[var(--crimson)] uppercase">
          Trial Chart
        </p>
        <h2
          id="trial-chart-heading"
          className="font-heading mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[0.06em] text-[var(--parchment)] uppercase"
        >
          Prove grounds
        </h2>
        <div className="banner-rule mx-auto mt-5 w-24" aria-hidden="true" />
        <p className="mx-auto mt-5 max-w-lg text-lg text-[var(--parchment-dim)]">
          LeetCode, Codeforces, and GitHub — same chart, different courts. Numbers of problems
          solved and forge strikes, side by side.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-5">
        {trials.map((trial) => (
          <li key={trial.id}>
            <TrialMark trial={trial} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function TrialMark({ trial }: { trial: TrialCourt }) {
  const segmentTotal = trial.segments.reduce((sum, s) => sum + s.count, 0) || 1;

  return (
    <a
      href={trial.href}
      target="_blank"
      rel="noopener noreferrer"
      className="trial-mark group relative flex h-full flex-col overflow-hidden border border-[var(--sigil)]/25 bg-[linear-gradient(165deg,rgba(36,28,22,0.95),rgba(10,8,7,0.98))] p-5 transition-[border-color,transform] hover:-translate-y-1 hover:border-[var(--sigil)]/50 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 parchment-stain" />
      <div className="pointer-events-none absolute inset-0 opacity-25 grain" />

      {/* Chart grid backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        aria-hidden
      >
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="currentColor"
            className="text-[var(--sigil)]"
          />
        ))}
      </svg>

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="font-heading text-[0.6rem] tracking-[0.22em] text-[var(--sigil)] uppercase">
            {trial.platform}
          </p>
          <p className="font-heading mt-1 text-lg tracking-wide text-[var(--parchment)]">
            {trial.court}
          </p>
        </div>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sigil)]/40 bg-[var(--stone)] text-[var(--sigil)]"
          aria-hidden
        >
          <TrialIcon id={trial.id} />
        </span>
      </div>

      <p className="relative mt-6 font-heading text-[clamp(2.5rem,5vw,3.25rem)] font-bold leading-none tracking-tight text-[var(--parchment)] tabular-nums">
        {trial.total.toLocaleString()}
      </p>
      <p className="relative mt-2 font-heading text-[0.65rem] tracking-[0.2em] text-[var(--crimson)] uppercase">
        {trial.unit}
      </p>
      <p className="relative mt-3 text-base leading-snug text-[var(--parchment-dim)] italic">
        {trial.blurb}
      </p>

      {/* Consistent segmented bar */}
      <div
        className="relative mt-6 flex h-3 w-full overflow-hidden rounded-sm border border-[var(--sigil)]/20 bg-[var(--stone)]"
        role="img"
        aria-label={trial.segments.map((s) => `${s.label}: ${s.count}`).join(", ")}
      >
        {trial.segments.map((seg) => (
          <span
            key={seg.label}
            className="h-full transition-[width] duration-500 group-hover:brightness-110"
            style={{
              width: `${(seg.count / segmentTotal) * 100}%`,
              backgroundColor: seg.tone,
              minWidth: seg.count > 0 ? "3px" : 0,
            }}
          />
        ))}
      </div>

      <ul className="relative mt-4 grid gap-2">
        {trial.segments.map((seg) => (
          <li
            key={seg.label}
            className="flex items-center justify-between gap-2 font-heading text-[0.65rem] tracking-[0.08em] text-[var(--parchment-dim)] uppercase"
          >
            <span className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-sm"
                style={{ backgroundColor: seg.tone }}
                aria-hidden
              />
              {seg.label}
            </span>
            <span className="tabular-nums text-[var(--parchment)]">
              {seg.count.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex items-end justify-between gap-2 pt-6">
        <span className="font-heading text-[0.65rem] tracking-[0.14em] text-[var(--ember)]">
          {trial.handle}
        </span>
        <span className="text-[0.7rem] text-[var(--parchment-dim)]/70">{trial.asOf}</span>
      </div>
    </a>
  );
}

function TrialIcon({ id }: { id: TrialCourt["id"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5 fill-current",
    "aria-hidden": true as const,
  };

  if (id === "leetcode") {
    return (
      <svg {...common}>
        <path d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104 5.3 5.3 0 0 0-.125.513 5.28 5.28 0 0 0 .255 2.285 5.27 5.27 0 0 0 1.839 2.403 5.3 5.3 0 0 0 2.582 1.022 5.25 5.25 0 0 0 2.639-.44 5.3 5.3 0 0 0 1.935-1.458l3.598-3.853a1.35 1.35 0 0 0 0-1.883 1.35 1.35 0 0 0-1.883 0l-3.598 3.853a2.62 2.62 0 0 1-3.47.225 2.62 2.62 0 0 1-.9-1.19 2.6 2.6 0 0 1-.126-1.127 2.6 2.6 0 0 1 .6-1.206l3.855-4.127 5.406-5.788a1.37 1.37 0 0 0 0-1.913A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.94 0 1.38 1.38 0 0 0 0 1.94c.54.54 1.4.54 1.94 0a1.38 1.38 0 0 0 0-1.94z" />
        <path d="M16.108 2.442a1.37 1.37 0 0 0-1.94 0l-2.07 2.07a1.37 1.37 0 1 0 1.94 1.94l2.07-2.07a1.37 1.37 0 0 0 0-1.94z" />
      </svg>
    );
  }

  if (id === "codeforces") {
    return (
      <svg {...common}>
        <rect x="2" y="10" width="4" height="12" rx="1" />
        <rect x="10" y="2" width="4" height="20" rx="1" />
        <rect x="18" y="6" width="4" height="16" rx="1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}
