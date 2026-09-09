/** Heraldic campaign seal — round iron & wax, not a square tile. */

type RealmMarkProps = {
  chronicle: string;
  campaign: number;
  realm: string;
  coords: { x: number; y: number };
  className?: string;
};

export default function RealmMark({
  chronicle,
  campaign,
  realm,
  coords,
  className = "",
}: RealmMarkProps) {
  const uid = `rm-${chronicle}-${campaign}`;

  return (
    <div
      className={`realm-mark relative aspect-square w-full max-w-[9.5rem] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]">
        <defs>
          <radialGradient id={`${uid}-iron`} cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#3a322c" />
            <stop offset="55%" stopColor="#1a1612" />
            <stop offset="100%" stopColor="#0a0806" />
          </radialGradient>
          <radialGradient id={`${uid}-wax`} cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#a12c3a" />
            <stop offset="70%" stopColor="#6e1a24" />
            <stop offset="100%" stopColor="#3a0e14" />
          </radialGradient>
        </defs>

        {/* Outer iron ring */}
        <circle cx="60" cy="60" r="56" fill={`url(#${uid}-iron)`} stroke="#c4a574" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#c4a574" strokeOpacity="0.35" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="44" fill="none" stroke="#8f2433" strokeOpacity="0.4" strokeWidth="0.6" />

        {/* Crosshair chart */}
        <path d="M60 22 V98 M22 60 H98" stroke="#c4a574" strokeOpacity="0.2" strokeWidth="0.6" />
        <circle cx="60" cy="60" r="28" fill="none" stroke="#c4a574" strokeOpacity="0.18" strokeWidth="0.5" />

        {/* Beacon */}
        <circle
          cx={32 + coords.x * 0.56}
          cy={32 + coords.y * 0.56}
          r="3"
          fill="#c45c3e"
          className="map-pulse"
        />

        {/* Inner wax disc */}
        <circle cx="60" cy="60" r="22" fill={`url(#${uid}-wax)`} stroke="#c4a574" strokeOpacity="0.45" strokeWidth="1" />

        <text
          x="60"
          y="52"
          textAnchor="middle"
          fill="#c4a574"
          fontSize="7"
          letterSpacing="1.5"
          fontFamily="Cinzel, Georgia, serif"
        >
          {`MARK ${chronicle}`}
        </text>
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fill="#ebe3d4"
          fontSize="18"
          fontWeight="700"
          fontFamily="Cinzel, Georgia, serif"
        >
          {String(campaign).padStart(2, "0")}
        </text>
      </svg>

      <p className="pointer-events-none absolute -bottom-1 left-1/2 w-[110%] -translate-x-1/2 truncate text-center font-heading text-[0.5rem] tracking-[0.16em] text-[var(--sigil)] uppercase">
        {realm}
      </p>
    </div>
  );
}
