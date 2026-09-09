/** Blade-throne silhouette — fused swords, stepped base, jagged crown. */

type Blade = {
  x: number;
  y: number;
  rot: number;
  len: number;
  wide?: number;
  opacity?: number;
  layer?: "far" | "mid" | "near";
};

const FAR: Blade[] = [
  { x: -78, y: 18, rot: -48, len: 95, wide: 3.5, opacity: 0.35 },
  { x: -70, y: 10, rot: -42, len: 110, wide: 4, opacity: 0.4 },
  { x: 72, y: 12, rot: 44, len: 108, wide: 4, opacity: 0.4 },
  { x: 80, y: 20, rot: 50, len: 92, wide: 3.5, opacity: 0.35 },
  { x: -55, y: -8, rot: -28, len: 78, wide: 3, opacity: 0.45 },
  { x: 58, y: -6, rot: 30, len: 80, wide: 3, opacity: 0.45 },
];

const BACK: Blade[] = [
  { x: -68, y: 6, rot: -36, len: 128, wide: 5, opacity: 0.7 },
  { x: -56, y: 0, rot: -28, len: 142, wide: 4.5 },
  { x: -44, y: -6, rot: -20, len: 156, wide: 5.5 },
  { x: -32, y: -10, rot: -13, len: 168, wide: 4 },
  { x: -20, y: -14, rot: -7, len: 178, wide: 5.5 },
  { x: -10, y: -16, rot: -3, len: 186, wide: 4.5 },
  { x: 0, y: -18, rot: 0, len: 192, wide: 5.5 },
  { x: 10, y: -16, rot: 4, len: 188, wide: 4.5 },
  { x: 22, y: -14, rot: 9, len: 176, wide: 5 },
  { x: 34, y: -10, rot: 15, len: 164, wide: 4.5 },
  { x: 46, y: -6, rot: 22, len: 150, wide: 5 },
  { x: 58, y: 0, rot: 30, len: 136, wide: 4.5 },
  { x: 70, y: 8, rot: 38, len: 120, wide: 5, opacity: 0.7 },
  // mid depth tangle
  { x: -48, y: -22, rot: -16, len: 105, wide: 3.5, opacity: 0.75 },
  { x: -28, y: -30, rot: -8, len: 98, wide: 3, opacity: 0.7 },
  { x: -6, y: -34, rot: -2, len: 102, wide: 3.5, opacity: 0.8 },
  { x: 14, y: -32, rot: 6, len: 100, wide: 3, opacity: 0.75 },
  { x: 36, y: -26, rot: 14, len: 108, wide: 3.5, opacity: 0.7 },
  { x: 52, y: -18, rot: 24, len: 96, wide: 3, opacity: 0.75 },
];

const ARMS: Blade[] = [
  { x: -72, y: 38, rot: -78, len: 78, wide: 4.5 },
  { x: -62, y: 44, rot: -64, len: 72, wide: 4 },
  { x: -52, y: 52, rot: -52, len: 58, wide: 3.5, opacity: 0.85 },
  { x: 72, y: 38, rot: 78, len: 78, wide: 4.5 },
  { x: 62, y: 44, rot: 64, len: 72, wide: 4 },
  { x: 52, y: 52, rot: 52, len: 58, wide: 3.5, opacity: 0.85 },
];

const SEAT_BLADES: Blade[] = [
  { x: -40, y: 62, rot: -88, len: 48, wide: 3.5, opacity: 0.9 },
  { x: -22, y: 68, rot: -95, len: 42, wide: 3, opacity: 0.85 },
  { x: 0, y: 70, rot: 90, len: 40, wide: 3.5, opacity: 0.9 },
  { x: 24, y: 68, rot: 95, len: 44, wide: 3, opacity: 0.85 },
  { x: 42, y: 62, rot: 88, len: 50, wide: 3.5, opacity: 0.9 },
  { x: -30, y: 58, rot: -105, len: 36, wide: 2.5, opacity: 0.7 },
  { x: 32, y: 58, rot: 105, len: 38, wide: 2.5, opacity: 0.7 },
];

const CROSSED: Blade[] = [
  { x: -28, y: 48, rot: -52, len: 92, wide: 4, opacity: 0.85 },
  { x: 30, y: 48, rot: 52, len: 92, wide: 4, opacity: 0.85 },
  { x: -12, y: 54, rot: -38, len: 70, wide: 3, opacity: 0.65 },
  { x: 14, y: 54, rot: 40, len: 68, wide: 3, opacity: 0.65 },
];

function Sword({ blade, uid }: { blade: Blade; uid: string }) {
  const w = blade.wide ?? 4;
  const tip = blade.len;
  const op = blade.opacity ?? 1;

  return (
    <g
      transform={`translate(110 188) rotate(${blade.rot}) translate(${blade.x} ${blade.y})`}
      opacity={op}
      className="throne-blade"
    >
      <path
        d={`M0 0 L${w * 0.55} ${-tip * 0.88} L0 ${-tip} L${-w * 0.55} ${-tip * 0.88} Z`}
        fill={`url(#${uid}-steel)`}
        stroke="#c4a574"
        strokeOpacity="0.4"
        strokeWidth="0.55"
      />
      <path
        d={`M0 -5 L0 ${-tip * 0.8}`}
        stroke="#ebe3d4"
        strokeOpacity="0.18"
        strokeWidth="0.7"
      />
      <rect
        x={-w * 1.15}
        y={-5}
        width={w * 2.3}
        height={4.5}
        rx="0.8"
        fill="#3a3228"
        stroke="#c4a574"
        strokeOpacity="0.35"
        strokeWidth="0.35"
      />
      <rect x={-w * 0.32} y={-0.5} width={w * 0.64} height={13} rx="1" fill="#1a1612" />
      <circle cx="0" cy={13.5} r={w * 0.42} fill="#c4a574" fillOpacity="0.6" />
    </g>
  );
}

export default function ThroneSilhouette({ className = "" }: { className?: string }) {
  const id = "seat";

  return (
    <svg
      viewBox="0 0 220 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0ebe0" stopOpacity="0.65" />
          <stop offset="30%" stopColor="#a8aeb6" stopOpacity="0.75" />
          <stop offset="65%" stopColor="#5c5348" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#12100e" stopOpacity="1" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="78%" r="58%">
          <stop offset="0%" stopColor="#c45c3e" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#8f2433" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#0c0a09" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-forge`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a2a28" />
          <stop offset="45%" stopColor="#1e1614" />
          <stop offset="100%" stopColor="#0a0807" />
        </linearGradient>
        <linearGradient id={`${id}-step`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a221c" />
          <stop offset="100%" stopColor="#100e0c" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Floor bloom */}
      <ellipse
        cx="110"
        cy="272"
        rx="98"
        ry="22"
        fill={`url(#${id}-glow)`}
        filter={`url(#${id}-soft)`}
      />

      {/* Stepped dais — forged stone */}
      <path
        d="M28 258 L192 258 L186 272 L34 272 Z"
        fill={`url(#${id}-step)`}
        stroke="#c4a574"
        strokeOpacity="0.2"
        strokeWidth="0.8"
      />
      <path
        d="M42 242 L178 242 L172 258 L48 258 Z"
        fill={`url(#${id}-step)`}
        stroke="#c4a574"
        strokeOpacity="0.28"
        strokeWidth="0.9"
      />

      {/* Fused seat mass — jagged, blade-built */}
      <path
        d="M52 218
           L46 198 L58 192 L52 178
           L68 184 L74 168 L88 176
           L96 162 L110 170 L124 160
           L132 174 L146 166 L152 182
           L166 176 L160 192 L172 200
           L168 218
           L174 236 Q110 252 46 236 Z"
        fill={`url(#${id}-forge)`}
        stroke="#c4a574"
        strokeOpacity="0.4"
        strokeWidth="1.1"
      />
      {/* Ember seam across the seat */}
      <path
        d="M62 206 Q110 192 158 206"
        stroke="#c45c3e"
        strokeOpacity="0.55"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M70 212 Q110 202 150 212"
        stroke="#8f2433"
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />

      {/* Far haze blades */}
      {FAR.map((b, i) => (
        <Sword key={`far-${i}`} blade={b} uid={id} />
      ))}
      {/* Arms & crossed */}
      {ARMS.map((b, i) => (
        <Sword key={`arm-${i}`} blade={b} uid={id} />
      ))}
      {CROSSED.map((b, i) => (
        <Sword key={`cross-${i}`} blade={b} uid={id} />
      ))}
      {/* Seat-embedded blades */}
      {SEAT_BLADES.map((b, i) => (
        <Sword key={`seat-${i}`} blade={b} uid={id} />
      ))}
      {/* Backrest forest */}
      {BACK.map((b, i) => (
        <Sword key={`back-${i}`} blade={b} uid={id} />
      ))}

      {/* Crown of tips */}
      <g className="throne-crown" transform="translate(110 8)">
        <path
          d="M-18 22 L-6 8 L0 0 L6 8 L18 22 L10 26 L4 14 L0 20 L-4 14 L-10 26 Z"
          fill="#c4a574"
          fillOpacity="0.75"
        />
        <path
          d="M-28 34 L-14 18 M28 34 L14 18 M-8 30 L0 16 L8 30"
          stroke="#c4a574"
          strokeOpacity="0.45"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <circle cx="0" cy="4" r="2.2" fill="#ebe3d4" fillOpacity="0.7" />
      </g>
    </svg>
  );
}
