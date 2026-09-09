import type { BannerCourt } from "@/content/banners";

type BannerPoleProps = {
  banner: BannerCourt;
  index?: number;
};

/**
 * Medieval gonfalon — hangs from a crossbar on rings,
 * wavy sides + swallowtail tip. Social mark as house seal.
 */
export default function BannerPole({ banner, index = 0 }: BannerPoleProps) {
  const uid = `bnr-${banner.id}`;
  const swayDelay = `${index * 0.55}s`;
  const lineCount = wrapLine(banner.line).length;
  const court = courtLines(banner.court);

  return (
    <a
      href={banner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="banner-hang group relative block w-[8.75rem] focus:outline-none sm:w-[10.25rem]"
      style={{ animationDelay: swayDelay }}
      aria-label={`${banner.court} on ${banner.platform}`}
    >
      <svg
        viewBox="0 0 160 460"
        className="banner-cloth h-auto w-full drop-shadow-[0_16px_28px_rgba(0,0,0,0.6)] transition-[filter] duration-300 group-hover:brightness-110"
        style={{ animationDelay: swayDelay }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${uid}-wood`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a7560" />
            <stop offset="40%" stopColor="#5a4a3a" />
            <stop offset="100%" stopColor="#2a2218" />
          </linearGradient>
          <linearGradient id={`${uid}-cloth`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={banner.cloth} />
            <stop offset="42%" stopColor={banner.clothDeep} />
            <stop offset="100%" stopColor="#080605" />
          </linearGradient>
          <linearGradient id={`${uid}-fold`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
            <stop offset="28%" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.22" />
            <stop offset="78%" stopColor="#fff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`${uid}-edge`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c4a574" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#c4a574" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c4a574" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id={`${uid}-seal`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2218" />
            <stop offset="100%" stopColor="#0c0a08" />
          </linearGradient>
          <filter id={`${uid}-soft`} x="-15%" y="-5%" width="130%" height="115%">
            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Crossbar */}
        <rect x="12" y="22" width="136" height="11" rx="3" fill={`url(#${uid}-wood)`} />
        <rect x="12" y="22" width="136" height="3" rx="1" fill="#c4a574" fillOpacity="0.22" />
        <circle cx="18" cy="27.5" r="3.5" fill="#1a1612" />
        <circle cx="142" cy="27.5" r="3.5" fill="#1a1612" />

        <path
          d="M80 0 V18"
          stroke="#c4a574"
          strokeWidth="1.6"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        <circle cx="80" cy="4" r="5" fill="none" stroke="#c4a574" strokeWidth="1.8" />

        {[40, 80, 120].map((x) => (
          <g key={x}>
            <ellipse
              cx={x}
              cy="38"
              rx="5"
              ry="7"
              fill="none"
              stroke="#c4a574"
              strokeWidth="1.8"
            />
            <path
              d={`M${x} 44 V52`}
              stroke="#c4a574"
              strokeWidth="1.2"
              strokeOpacity="0.7"
            />
          </g>
        ))}

        {/* Gonfalon cloth */}
        <path
          d="M 28 52
             C 26 90, 34 130, 26 170
             C 20 210, 32 250, 28 290
             C 24 320, 36 345, 30 365
             L 52 420
             L 68 378
             L 80 438
             L 92 378
             L 108 420
             C 124 345, 136 320, 132 290
             C 128 250, 140 210, 134 170
             C 126 130, 134 90, 132 52
             C 110 48, 100 50, 80 48
             C 60 50, 50 48, 28 52
             Z"
          fill={`url(#${uid}-cloth)`}
          filter={`url(#${uid}-soft)`}
        />

        <path
          d="M 28 52
             C 26 90, 34 130, 26 170
             C 20 210, 32 250, 28 290
             C 24 320, 36 345, 30 365
             L 52 420
             L 68 378
             L 80 438
             L 92 378
             L 108 420
             C 124 345, 136 320, 132 290
             C 128 250, 140 210, 134 170
             C 126 130, 134 90, 132 52
             C 110 48, 100 50, 80 48
             C 60 50, 50 48, 28 52
             Z"
          fill={`url(#${uid}-fold)`}
          opacity="0.85"
        />

        <path
          d="M 34 58
             C 32 95, 40 132, 32 170
             C 26 208, 38 248, 34 286
             C 30 316, 42 340, 36 358
             M 126 58
             C 128 95, 120 132, 128 170
             C 134 208, 122 248, 126 286
             C 130 316, 118 340, 124 358"
          fill="none"
          stroke={`url(#${uid}-edge)`}
          strokeWidth="1.2"
        />

        <path
          d="M32 54 H128"
          stroke="#c4a574"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {[
          [52, 420],
          [80, 438],
          [108, 420],
        ].map(([x, y], i) => (
          <g key={i} opacity="0.85">
            <line
              x1={x}
              y1={y}
              x2={x - 2 + i}
              y2={y + 14}
              stroke="#c4a574"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx={x - 2 + i} cy={y + 16} r="2.2" fill="#c45c3e" />
          </g>
        ))}

        {/* Heraldic seal with social logo */}
        <g transform="translate(80 108)">
          <circle r="28" fill={`url(#${uid}-seal)`} stroke="#c4a574" strokeWidth="1.6" />
          <circle r="24" fill="none" stroke="#c4a574" strokeOpacity="0.35" strokeWidth="0.8" />
          <g transform="translate(-11 -11) scale(0.92)" fill="#c4a574">
            <SocialMark id={banner.id} />
          </g>
        </g>

        {/* Platform */}
        <text
          x="80"
          y="154"
          textAnchor="middle"
          fill="#c4a574"
          fontSize="7.5"
          letterSpacing="2.4"
          fontFamily="Cinzel, Georgia, serif"
        >
          {banner.platform.toUpperCase()}
        </text>

        {/* Court name */}
        {court.map((line, i) => (
          <text
            key={line}
            x="80"
            y={178 + i * 18}
            textAnchor="middle"
            fill="#ebe3d4"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.8"
            fontFamily="Cinzel, Georgia, serif"
          >
            {line}
          </text>
        ))}

        <path
          d={`M52 ${188 + court.length * 18} H108`}
          stroke="#c4a574"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        <circle
          cx="80"
          cy={188 + court.length * 18}
          r="2.5"
          fill="#c45c3e"
        />

        {wrapLine(banner.line).map((line, i) => (
          <text
            key={`${line}-${i}`}
            x="80"
            y={210 + court.length * 18 + i * 14}
            textAnchor="middle"
            fill="#a89880"
            fontSize="7.5"
            fontFamily="Cormorant Garamond, Georgia, serif"
          >
            {line}
          </text>
        ))}

        <text
          x="80"
          y={210 + court.length * 18 + lineCount * 14 + 22}
          textAnchor="middle"
          fill="#c45c3e"
          fontSize="8"
          letterSpacing="1"
          fontFamily="Cinzel, Georgia, serif"
        >
          {banner.handle.length > 16
            ? `${banner.handle.slice(0, 14)}…`
            : banner.handle}
        </text>

        {banner.tally ? (
          <g>
            <text
              x="80"
              y={210 + court.length * 18 + lineCount * 14 + 48}
              textAnchor="middle"
              fill="#ebe3d4"
              fontSize="16"
              fontWeight="700"
              fontFamily="Cinzel, Georgia, serif"
            >
              {banner.tally.value.toLocaleString()}
            </text>
            <text
              x="80"
              y={210 + court.length * 18 + lineCount * 14 + 62}
              textAnchor="middle"
              fill="#c4a574"
              fontSize="7"
              letterSpacing="1.8"
              fontFamily="Cinzel, Georgia, serif"
            >
              {banner.tally.label.toUpperCase()}
            </text>
          </g>
        ) : null}

        {banner.placeholder ? (
          <text
            x="80"
            y={
              210 +
              court.length * 18 +
              lineCount * 14 +
              (banner.tally ? 80 : 40)
            }
            textAnchor="middle"
            fill="#a89880"
            fontSize="7"
            letterSpacing="1.6"
            fontFamily="Cinzel, Georgia, serif"
            opacity="0.65"
          >
            RAISE TBD
          </text>
        ) : null}
      </svg>

      <span className="sr-only">
        {banner.court} — {banner.platform}. {banner.line}
      </span>
    </a>
  );
}

/** 24×24 brand marks — gold-filled seals on the cloth. */
function SocialMark({ id }: { id: string }) {
  switch (id) {
    case "github":
      return (
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      );
    case "linkedin":
      return (
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
      );
    case "x":
      return (
        <path d="M18.9 1.15h3.45l-7.54 8.62 8.87 11.73H17.1l-5.3-6.93-6.07 6.93H2.27l8.07-9.22L1.72 1.15h6.72l4.79 6.34 5.67-6.34zm-1.21 18.3h1.91L6.48 3.07H4.43l13.26 16.38z" />
      );
    case "telegram":
      return (
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.2-1.97 9.28c-.15.66-.54.82-1.09.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.22-3.07 5.59-5.05c.24-.22-.05-.33-.38-.12l-6.9 4.34-2.97-.93c-.65-.2-.66-.65.13-.96l11.61-4.48c.54-.2 1.01.13.92.9z" />
      );
    case "upwork":
      return (
        <path d="M18.56 10.77c-1.4 0-2.68.73-3.53 1.9l-.52-2.47h-2.1l.9 4.28v.01c-.1.5-.5 3.3-3.4 3.3-1.68 0-2.96-1.4-2.96-3.27 0-2.9 2.36-5.4 4.67-7.1L9.9 2.8C7.2 4.9 4.4 8.1 4.4 11.9c0 3.1 2.02 5.5 4.9 5.5 2.27 0 3.83-1.1 4.58-2.38l.4 1.94h2.23l1.2-5.7c.46-2.2 2-3.5 3.85-3.5.18 0 .36.01.53.03V5.3a5.4 5.4 0 0 0-.53-.03c-1.2 0-2.3.47-3.1 1.27a5.3 5.3 0 0 0-1.9 3.23z" />
      );
    case "leetcode":
      return (
        <g transform="translate(1 1) scale(0.92)">
          <path d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104 5.3 5.3 0 0 0-.125.513 5.28 5.28 0 0 0 .255 2.285 5.27 5.27 0 0 0 1.839 2.403 5.3 5.3 0 0 0 2.582 1.022 5.25 5.25 0 0 0 2.639-.44 5.3 5.3 0 0 0 1.935-1.458l3.598-3.853a1.35 1.35 0 0 0 0-1.883 1.35 1.35 0 0 0-1.883 0l-3.598 3.853a2.62 2.62 0 0 1-3.47.225 2.62 2.62 0 0 1-.9-1.19 2.6 2.6 0 0 1-.126-1.127 2.6 2.6 0 0 1 .6-1.206l3.855-4.127 5.406-5.788a1.37 1.37 0 0 0 0-1.913A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.94 0 1.38 1.38 0 0 0 0 1.94c.54.54 1.4.54 1.94 0a1.38 1.38 0 0 0 0-1.94z" />
          <path d="M16.108 2.442a1.37 1.37 0 0 0-1.94 0l-2.07 2.07a1.37 1.37 0 1 0 1.94 1.94l2.07-2.07a1.37 1.37 0 0 0 0-1.94z" />
        </g>
      );
    case "codeforces":
      return (
        <g transform="translate(2 1)">
          <rect x="0" y="9" width="5" height="12" rx="1" />
          <rect x="7.5" y="2" width="5" height="19" rx="1" />
          <rect x="15" y="5" width="5" height="16" rx="1" />
        </g>
      );
    default:
      return (
        <circle cx="12" cy="12" r="8" fill="none" stroke="#c4a574" strokeWidth="2" />
      );
  }
}

function courtLines(court: string): string[] {
  const words = court.toUpperCase().split(" ");
  if (words.length <= 2) return [words.join(" ")];
  return [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
}

function wrapLine(text: string): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (next.length > 18) {
      if (current) lines.push(current);
      current = w;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}
