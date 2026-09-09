import Link from "next/link";
import type { Scroll } from "@/content/scrolls";

type ScrollCardProps = {
  scroll: Scroll;
};

/**
 * A rolled, sealed letter — wooden rods, parchment belly, wax seal.
 * Not a rectangular card.
 */
export default function ScrollCard({ scroll }: ScrollCardProps) {
  return (
    <Link
      href={`/scrolls/${scroll.slug}`}
      className="scroll-letter group relative mx-auto block max-w-2xl focus:outline-none"
      aria-label={`Open sealed letter: ${scroll.title}`}
    >
      {/* Top roller */}
      <div className="scroll-rod relative z-20 mx-[4%] h-4 sm:h-5" aria-hidden>
        <div className="absolute inset-y-0 -left-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] shadow-[inset_0_1px_0_rgba(196,165,116,0.35)] sm:-left-3 sm:w-4" />
        <div className="absolute inset-y-0 -right-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] shadow-[inset_0_1px_0_rgba(196,165,116,0.35)] sm:-right-3 sm:w-4" />
        <div className="h-full rounded-sm bg-[linear-gradient(180deg,#7a6550_0%,#4a3c2e_45%,#2a2218_100%)] shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
        <div className="absolute inset-x-4 top-0.5 h-px bg-[var(--sigil)]/25" />
      </div>

      {/* Parchment body */}
      <div className="scroll-parchment relative z-10 -mt-1 -mb-1 px-5 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
        {/* Fiber / stain layers */}
        <div className="pointer-events-none absolute inset-0 opacity-40 parchment-stain" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] grain" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-[linear-gradient(180deg,rgba(90,70,45,0.28),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(0deg,rgba(70,50,30,0.22),transparent)]"
          aria-hidden
        />

        {/* Side curl shadows */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-[linear-gradient(90deg,rgba(60,40,20,0.28),transparent)] sm:w-7"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-[linear-gradient(270deg,rgba(60,40,20,0.28),transparent)] sm:w-7"
          aria-hidden
        />

        {/* Cord + wax seal */}
        <div className="pointer-events-none absolute -right-1 top-1/2 z-30 -translate-y-1/2 sm:right-2">
          <div className="relative flex flex-col items-center">
            <div className="h-10 w-[2px] bg-[linear-gradient(180deg,#8f2433,#c45c3e,#8f2433)] opacity-80" />
            <div className="scroll-wax relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
              <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
                <circle cx="32" cy="32" r="28" fill="#6e1a24" />
                <circle cx="32" cy="32" r="24" fill="#8f2433" />
                <circle cx="32" cy="32" r="20" fill="#a12c3a" fillOpacity="0.9" />
                <path
                  d="M18 22 Q22 18 28 20 Q32 14 38 18 Q46 16 46 24 Q50 30 46 36 Q48 44 40 44 Q34 50 28 44 Q20 46 18 38 Q12 32 18 22 Z"
                  fill="#7a1f2a"
                  fillOpacity="0.55"
                />
              </svg>
              <span className="relative font-heading text-lg tracking-wide text-[#f0d4a8] sm:text-xl">
                {scroll.mark}
              </span>
            </div>
            <div className="h-10 w-[2px] bg-[linear-gradient(180deg,#8f2433,#c45c3e,#8f2433)] opacity-80" />
          </div>
        </div>

        <div className="relative pr-12 sm:pr-16">
          <p className="font-heading text-[0.58rem] tracking-[0.22em] text-[#7a3a2a] uppercase sm:text-[0.62rem]">
            Scroll {scroll.mark} · Sealed {scroll.dated} · {scroll.reading}
          </p>

          <h2 className="font-heading mt-3 text-[1.45rem] font-semibold leading-snug tracking-wide text-[#2a1e14] transition-colors group-hover:text-[#6e1a24] sm:text-3xl">
            {scroll.title}
          </h2>

          <p className="mt-3 max-w-xl text-lg leading-relaxed text-[#4a3828] sm:text-xl">
            {scroll.tagline}
          </p>

          <p className="mt-5 font-heading text-[0.55rem] tracking-[0.14em] text-[#6a5644]/70 uppercase sm:text-[0.6rem]">
            {scroll.topics.join(" · ")}
            {scroll.placeholder ? " · Unsealed draft" : ""}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 font-heading text-[0.65rem] tracking-[0.2em] text-[#8f2433] uppercase transition-transform group-hover:translate-x-1">
            Break the seal
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>

      {/* Bottom roller */}
      <div className="scroll-rod relative z-20 mx-[4%] h-4 sm:h-5" aria-hidden>
        <div className="absolute inset-y-0 -left-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] shadow-[inset_0_1px_0_rgba(196,165,116,0.35)] sm:-left-3 sm:w-4" />
        <div className="absolute inset-y-0 -right-2 w-3 rounded-full bg-[linear-gradient(90deg,#2a2218,#8a7560,#2a2218)] shadow-[inset_0_1px_0_rgba(196,165,116,0.35)] sm:-right-3 sm:w-4" />
        <div className="h-full rounded-sm bg-[linear-gradient(180deg,#7a6550_0%,#4a3c2e_45%,#2a2218_100%)] shadow-[0_6px_16px_rgba(0,0,0,0.5)]" />
        <div className="absolute inset-x-4 bottom-0.5 h-px bg-black/20" />
      </div>
    </Link>
  );
}
