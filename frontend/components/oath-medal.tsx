import type { Certificate } from "@/content/certificates";
import { certificateWhen } from "@/content/certificates";

type OathMedalProps = {
  cert: Certificate;
  index?: number;
};

const METAL = [
  { rim: "#c4a574", face: "#2a2218", glow: "#8f2433" },
  { rim: "#9aa0a8", face: "#1a1e24", glow: "#5a6a7a" },
  { rim: "#c45c3e", face: "#241410", glow: "#8f2433" },
  { rim: "#c4a574", face: "#1e1914", glow: "#6e5b45" },
] as const;

/**
 * Hall-of-honor medallion — round iron & gold, hangs on a ribbon.
 * Not parchment. Not a scroll. Not a rectangle.
 */
export default function OathMedal({ cert, index = 0 }: OathMedalProps) {
  const metal = METAL[index % METAL.length];
  const uid = `oath-${cert.id}`;
  const external = cert.href.startsWith("http");
  const titleLines = wrapTitle(cert.title);

  return (
    <a
      href={cert.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="oath-medal group relative flex w-[11.5rem] flex-col items-center focus:outline-none sm:w-[13rem]"
      style={{ animationDelay: `${index * 0.35}s` }}
      aria-label={`${cert.title} from ${cert.from}, ${certificateWhen(cert)}. Open certificate.`}
    >
      {/* Ribbon from the beam */}
      <div className="relative z-10 flex flex-col items-center" aria-hidden>
        <div className="h-5 w-[3px] bg-[linear-gradient(180deg,#c4a574,#8f2433)] opacity-80" />
        <div
          className="h-14 w-8 -mb-2"
          style={{
            background: `linear-gradient(90deg, ${metal.glow}, #c45c3e 45%, ${metal.glow})`,
            clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Circular medal */}
      <svg
        viewBox="0 0 200 200"
        className="oath-disc relative z-20 h-auto w-full drop-shadow-[0_14px_28px_rgba(0,0,0,0.55)] transition-[filter,transform] duration-400 group-hover:brightness-110 group-hover:scale-[1.03]"
        aria-hidden
      >
        <defs>
          <radialGradient id={`${uid}-face`} cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#3a322c" />
            <stop offset="55%" stopColor={metal.face} />
            <stop offset="100%" stopColor="#080605" />
          </radialGradient>
          <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ebe3d4" />
            <stop offset="40%" stopColor={metal.rim} />
            <stop offset="100%" stopColor="#4a3c2e" />
          </linearGradient>
        </defs>

        {/* Outer gear / coin edge */}
        <circle cx="100" cy="100" r="96" fill={`url(#${uid}-rim)`} />
        <circle cx="100" cy="100" r="88" fill={`url(#${uid}-face)`} />
        <circle cx="100" cy="100" r="82" fill="none" stroke={metal.rim} strokeOpacity="0.55" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="74" fill="none" stroke={metal.glow} strokeOpacity="0.45" strokeWidth="1" />

        {/* Decorative ticks around the rim */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
          const x1 = 100 + Math.cos(a) * 90;
          const y1 = 100 + Math.sin(a) * 90;
          const x2 = 100 + Math.cos(a) * 95;
          const y2 = 100 + Math.sin(a) * 95;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={metal.rim}
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Center wax core */}
        <circle cx="100" cy="100" r="48" fill={metal.glow} fillOpacity="0.9" />
        <circle cx="100" cy="100" r="42" fill="#6e1a24" />
        <circle cx="100" cy="100" r="38" fill="none" stroke="#f0d4a8" strokeOpacity="0.35" strokeWidth="1" />

        <text
          x="100"
          y="92"
          textAnchor="middle"
          fill="#c4a574"
          fontSize="9"
          letterSpacing="2"
          fontFamily="Cinzel, Georgia, serif"
        >
          OATH
        </text>
        <text
          x="100"
          y="118"
          textAnchor="middle"
          fill="#ebe3d4"
          fontSize="22"
          fontWeight="700"
          fontFamily="Cinzel, Georgia, serif"
        >
          {String(index + 1).padStart(2, "0")}
        </text>
      </svg>

      {/* Label plate under the medal */}
      <div className="oath-plaque relative z-10 -mt-2 w-[95%] px-2 pt-3 text-center">
        <div className="mx-auto mb-3 h-px w-12 bg-[var(--sigil)]/40" aria-hidden />
        <h2 className="font-heading text-[0.85rem] font-semibold leading-snug tracking-wide text-[var(--parchment)] transition-colors group-hover:text-[var(--ember)] sm:text-[0.95rem]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <dl className="mt-3 space-y-1.5">
          <div>
            <dt className="font-heading text-[0.45rem] tracking-[0.2em] text-[var(--parchment-dim)]/70 uppercase">
              Taken
            </dt>
            <dd className="font-heading mt-0.5 text-[0.65rem] tracking-[0.14em] text-[var(--sigil)] uppercase">
              {certificateWhen(cert)}
            </dd>
          </div>
          <div>
            <dt className="font-heading text-[0.45rem] tracking-[0.2em] text-[var(--parchment-dim)]/70 uppercase">
              From
            </dt>
            <dd className="font-heading mt-0.5 text-[0.65rem] tracking-[0.12em] text-[var(--crimson)] uppercase">
              {cert.from}
              {cert.placeholder ? " · TBD" : ""}
            </dd>
          </div>
          {cert.court ? (
            <div>
              <dt className="sr-only">Court</dt>
              <dd className="font-heading text-[0.45rem] tracking-[0.16em] text-[var(--parchment-dim)]/60 uppercase">
                {cert.court}
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </a>
  );
}

function wrapTitle(title: string): string[] {
  const words = title.split(" ");
  if (words.length <= 3) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}
