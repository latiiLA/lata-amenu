/** Original House Amenu mark — seat & blade. Not any show sigil. */
export default function HouseSigil({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
      <path
        d="M32 10 L36 28 L48 30 L36 34 L32 52 L28 34 L16 30 L28 28 Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path
        d="M22 44 L32 22 L42 44"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
