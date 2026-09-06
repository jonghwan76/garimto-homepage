type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * GARIMTO official logo — Concept A4 (Intersection).
 * Serif "G" whose crossbar extends as a board grid line,
 * with a small gold token at the intersection.
 * Suggests baduk/chess/janggi without being genre-specific.
 */
export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="가림토 GARIMTO 로고"
    >
      <defs>
        <linearGradient
          id="garimto-logo-gold"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f0cc7c" />
          <stop offset="100%" stopColor="#a37d34" />
        </linearGradient>
      </defs>

      {/* Dark rounded badge */}
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />

      {/* Board grid — horizontal line through the G's crossbar */}
      <line
        x1="4"
        y1="23"
        x2="36"
        y2="23"
        stroke="#a37d34"
        strokeWidth="0.8"
        opacity="0.55"
      />
      {/* Board grid — vertical line */}
      <line
        x1="27"
        y1="6"
        x2="27"
        y2="34"
        stroke="#a37d34"
        strokeWidth="0.8"
        opacity="0.55"
      />

      {/* Serif G */}
      <text
        x="19"
        y="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#garimto-logo-gold)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        G
      </text>

      {/* Token at the grid intersection */}
      <circle cx="27" cy="23" r="1.8" fill="#f0cc7c" />
    </svg>
  );
}
