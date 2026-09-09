"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/content/projects";

type FantasyMapProps = {
  projects: Project[];
};

/** War-table chart — parchment under a timber frame, not a boxed UI panel. */
export default function FantasyMap({ projects }: FantasyMapProps) {
  const [active, setActive] = useState<string | null>(projects[0]?.slug ?? null);
  const selected = projects.find((p) => p.slug === active) ?? projects[0];

  const pathD =
    projects.length >= 2
      ? projects
          .map((p, i) => `${i === 0 ? "M" : "L"} ${p.map.x * 8} ${p.map.y * 5}`)
          .join(" ")
      : "";

  return (
    <div className="war-table relative w-full">
      {/* Timber outer frame */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-sm bg-[linear-gradient(135deg,#5a4a38,#2a2218_40%,#1a1612_70%,#6a5a48)] shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:-inset-3"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-sm border border-[var(--sigil)]/25"
        aria-hidden
      />

      <div className="fantasy-map relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2a2218_0%,#161210_55%,#0c0a09_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply parchment-stain" />
        <div className="pointer-events-none absolute inset-0 opacity-30 grain" />

        {/* Corner nails */}
        {[
          "left-3 top-3",
          "right-3 top-3",
          "left-3 bottom-3",
          "right-3 bottom-3",
        ].map((pos) => (
          <span
            key={pos}
            className={`pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#c4a574,#4a3c2e)] shadow-[0_1px_3px_rgba(0,0,0,0.6)] ${pos}`}
            aria-hidden
          />
        ))}

        <div className="relative grid lg:grid-cols-[1.4fr_0.9fr]">
          <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[34rem]">
            <svg
              viewBox="0 0 800 500"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M60 320 C120 180, 220 140, 310 200 C380 250, 420 160, 520 190 C620 220, 700 140, 760 220 L780 480 L40 480 Z"
                fill="#1e1914"
                stroke="#c4a574"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
              <path
                d="M80 120 C160 60, 240 90, 280 150 C300 190, 220 230, 140 210 C90 195, 50 160, 80 120 Z"
                fill="#241e18"
                stroke="#c4a574"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              <path
                d="M560 80 C640 40, 720 70, 750 130 C760 170, 700 200, 640 180 C580 155, 530 110, 560 80 Z"
                fill="#241e18"
                stroke="#c4a574"
                strokeOpacity="0.2"
                strokeWidth="1"
              />

              <path
                d="M100 360 C200 300, 280 340, 360 280 S520 240, 620 300 S720 340, 760 300"
                fill="none"
                stroke="#8f2433"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                className="map-route"
              />
              {pathD ? (
                <path
                  d={pathD}
                  fill="none"
                  stroke="#c4a574"
                  strokeOpacity="0.55"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="map-campaign"
                />
              ) : null}

              <g transform="translate(700 420)">
                <circle r="28" fill="none" stroke="#c4a574" strokeOpacity="0.4" />
                <path d="M0 -22 L6 0 L0 8 L-6 0 Z" fill="#c4a574" fillOpacity="0.7" />
                <text y="40" textAnchor="middle" fill="#a89880" fontSize="9" letterSpacing="2">
                  N
                </text>
              </g>

              <text x="40" y="40" fill="#a89880" fontSize="11" letterSpacing="3" opacity="0.7">
                CHART OF SECURED REALMS
              </text>
            </svg>

            {projects.map((project) => {
              const isActive = project.slug === selected?.slug;
              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setActive(project.slug)}
                  className="map-marker group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${project.map.x}%`, top: `${project.map.y}%` }}
                  aria-pressed={isActive}
                  aria-label={project.realm}
                >
                  <span
                    className={`map-marker-pulse absolute inset-0 rounded-full ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  />
                  <span
                    className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 transition-transform ${
                      isActive
                        ? "scale-125 border-[var(--ember)] bg-[var(--crimson)]"
                        : "border-[var(--sigil)] bg-[var(--stone)] group-hover:border-[var(--ember)]"
                    }`}
                  />
                  <span className="absolute left-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-heading text-[0.6rem] tracking-[0.18em] text-[var(--parchment)] uppercase sm:block">
                    {project.realm}
                  </span>
                </button>
              );
            })}

            <p className="pointer-events-none absolute bottom-3 left-4 font-heading text-[0.55rem] tracking-[0.2em] text-[var(--parchment-dim)]/60 uppercase">
              Here be systems
            </p>
          </div>

          {/* Selected realm — council scroll, not a side panel card */}
          <aside className="relative border-t border-[var(--sigil)]/20 lg:border-t-0 lg:border-l lg:border-[var(--sigil)]/20">
            <div className="relative h-full bg-[linear-gradient(165deg,rgba(232,213,181,0.12),rgba(12,10,9,0.92)_35%)] p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-20 parchment-stain" />
              {selected ? (
                <div className="relative">
                  <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[var(--crimson)] uppercase">
                    Beacon lit · Mark {selected.chronicle}
                  </p>
                  <h2 className="font-heading mt-3 text-2xl font-semibold tracking-wide text-[var(--parchment)] sm:text-3xl">
                    {selected.realm}
                  </h2>
                  <p className="mt-1 font-heading text-[0.7rem] tracking-[0.18em] text-[var(--sigil)] uppercase">
                    Campaign {String(selected.episode).padStart(2, "0")}
                  </p>
                  <div className="banner-rule mt-4 w-20" aria-hidden />
                  <p className="mt-4 text-lg text-[var(--parchment)]">{selected.title}</p>
                  <p className="mt-3 text-lg leading-relaxed text-[var(--parchment-dim)]">
                    {selected.tagline}
                  </p>
                  <p className="mt-4 font-heading text-[0.6rem] tracking-[0.16em] text-[var(--parchment-dim)]/70 uppercase">
                    Arms · {selected.stack.slice(0, 4).join(" · ")}
                  </p>
                  <Link
                    href={`/work/${selected.slug}`}
                    className="mt-8 inline-flex h-11 items-center border border-[var(--crimson)] bg-[var(--crimson)] px-5 font-heading text-[0.7rem] tracking-[0.18em] text-[var(--parchment)] uppercase transition-colors hover:bg-[color-mix(in_srgb,var(--crimson)_85%,white)]"
                  >
                    Call the war council →
                  </Link>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
