type LogoProps = {
  size?: number;
  className?: string;
};

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
        <linearGradient id="garimtoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0cc7c" />
          <stop offset="55%" stopColor="#dcb35c" />
          <stop offset="100%" stopColor="#a37d34" />
        </linearGradient>
        <radialGradient id="garimtoStone" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3b3b3b" />
          <stop offset="60%" stopColor="#111111" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* Gold rounded badge */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        fill="url(#garimtoGold)"
      />

      {/* Inner shadow rim */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        fill="none"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="1"
      />

      {/* Go board crosshair grid (intersection) */}
      <g
        stroke="#1a1206"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.65"
      >
        <line x1="8" y1="20" x2="32" y2="20" />
        <line x1="20" y1="8" x2="20" y2="32" />
      </g>

      {/* Black stone on the intersection */}
      <circle cx="20" cy="20" r="7" fill="url(#garimtoStone)" />

      {/* Subtle glossy highlight */}
      <ellipse
        cx="17.8"
        cy="17.5"
        rx="2.2"
        ry="1.4"
        fill="#ffffff"
        opacity="0.35"
      />
    </svg>
  );
}
