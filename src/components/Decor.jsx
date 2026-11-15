/**
 * Decorative sparkles, dots and line doodles in the "mini" colours.
 * All are aria-hidden, non-interactive and absolutely positioned, so the
 * parent needs `position: relative`. Pass offsets through `style`.
 */

const STROKE = {
  blue: "text-tone-blue",
  green: "text-tone-green",
  amber: "text-spark",
  red: "text-tone-red",
  orange: "text-accent",
};

const FILL = {
  blue: "bg-tone-blue",
  green: "bg-tone-green",
  amber: "bg-spark",
  red: "bg-tone-red",
  orange: "bg-accent",
};

/** Outline four-point sparkle that twinkles slowly. */
export function Sparkle({ tone = "amber", size = 20, delay = 0, className = "", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`twinkle pointer-events-none absolute ${STROKE[tone]} ${className}`}
      style={{ "--d": `${delay}s`, ...style }}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M12 2.5c.6 5.6 3.9 8.9 9.5 9.5-5.6.6-8.9 3.9-9.5 9.5-.6-5.6-3.9-8.9-9.5-9.5 5.6-.6 8.9-3.9 9.5-9.5Z" />
    </svg>
  );
}

/** Small solid dot. */
export function Dot({ tone = "blue", size = 8, className = "", style }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${FILL[tone]} ${className}`}
      style={{ width: size, height: size, ...style }}
    />
  );
}

/** Line drawings in blue ink with small coloured accents. */
const DOODLES = {
  terminal: (
    <>
      <rect x="6" y="12" width="52" height="40" rx="6" />
      <path d="M6 21h52" />
      <circle cx="12" cy="16.5" r="1.6" className="fill-tone-red stroke-none" />
      <circle cx="17.5" cy="16.5" r="1.6" className="fill-spark stroke-none" />
      <circle cx="23" cy="16.5" r="1.6" className="fill-tone-green stroke-none" />
      <path d="m15 30 6 5-6 5" />
      <path d="M25 41h11" />
      <path d="M42 30h8M39 36h11" strokeOpacity="0.45" />
    </>
  ),
  database: (
    <>
      <ellipse cx="32" cy="14" rx="18" ry="6" />
      <path d="M14 14v34c0 3.3 8 6 18 6s18-2.7 18-6V14" />
      <path d="M14 26c0 3.3 8 6 18 6s18-2.7 18-6M14 38c0 3.3 8 6 18 6s18-2.7 18-6" />
      <circle cx="21" cy="31" r="1.5" className="fill-tone-green stroke-none" />
      <circle cx="21" cy="43" r="1.5" className="fill-spark stroke-none" />
    </>
  ),
  mug: (
    <>
      <path d="M14 27h30v16a11 11 0 0 1-11 11h-8a11 11 0 0 1-11-11V27Z" />
      <path d="M44 31h3.5a6 6 0 0 1 0 12H44" />
      <path d="M22 10c-3 4 3 6 0 11M30 7c-3 4 3 6 0 11M38 10c-3 4 3 6 0 11" strokeOpacity="0.55" />
      <path d="M20 35c3 2 9 2 12 0" className="stroke-accent" />
      <path d="M8 59h42" />
    </>
  ),
  braces: (
    <>
      <path d="M23 10c-6 0-8 3-8 8v6c0 4-2 6-6 8 4 2 6 4 6 8v6c0 5 2 8 8 8" />
      <path d="M41 10c6 0 8 3 8 8v6c0 4 2 6 6 8-4 2-6 4-6 8v6c0 5-2 8-8 8" />
      <circle cx="26" cy="32" r="2.2" className="fill-spark stroke-none" />
      <circle cx="32" cy="32" r="2.2" className="fill-tone-red stroke-none" />
      <circle cx="38" cy="32" r="2.2" className="fill-tone-green stroke-none" />
    </>
  ),
};

export function Doodle({ name, size = 64, className = "", style }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute text-tone-blue ${className}`}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {DOODLES[name]}
    </svg>
  );
}
