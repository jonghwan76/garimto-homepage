/**
 * 5 GARIMTO logo concept variants for design review.
 * Each is a self-contained SVG component with configurable size.
 */

type LogoProps = {
  size?: number;
  className?: string;
};

const gold = {
  light: "#f0cc7c",
  base: "#dcb35c",
  dark: "#a37d34",
};

/* ============================================================
 * A. MONOGRAM "G" — 미니멀 인디 스튜디오
 * 세리프 G, 다크 배지, 골드 그라디언트. Editorial · Modern.
 * ============================================================ */
export function LogoMonogram({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO Monogram G"
    >
      <defs>
        <linearGradient id="mono-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="9.5"
        fill="none"
        stroke="url(#mono-gold)"
        strokeWidth="1"
        opacity="0.4"
      />
      <text
        x="20"
        y="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#mono-gold)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        G
      </text>
    </svg>
  );
}

/* ============================================================
 * B. SEAL 도장 — 전통 인장 스타일
 * "가" 한글, 정사각 골드 배지. Classic · Heritage.
 * ============================================================ */
export function LogoSeal({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO Seal 가"
    >
      <defs>
        <linearGradient id="seal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="55%" stopColor={gold.base} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="3" fill="url(#seal-gold)" />
      <rect
        x="3.5"
        y="3.5"
        width="33"
        height="33"
        rx="1.5"
        fill="none"
        stroke="#1a0f00"
        strokeWidth="1"
        opacity="0.45"
      />
      <text
        x="20"
        y="29"
        fontFamily="'Noto Sans KR', sans-serif"
        fontSize="22"
        fontWeight="900"
        fill="#1a0f00"
        textAnchor="middle"
      >
        가
      </text>
    </svg>
  );
}

/* ============================================================
 * C. GEOMETRIC — 원+삼각+사각
 * 게임의 규칙과 플레이를 상징. Abstract · Contemporary.
 * ============================================================ */
export function LogoGeometric({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO Geometric"
    >
      <defs>
        <linearGradient id="geo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      {/* Triangle (top) */}
      <polygon
        points="20,8 27,20 13,20"
        fill="none"
        stroke="url(#geo-gold)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Circle (bottom-left) */}
      <circle
        cx="14"
        cy="27"
        r="5"
        fill="none"
        stroke="url(#geo-gold)"
        strokeWidth="1.8"
      />
      {/* Square (bottom-right) */}
      <rect
        x="21"
        y="22"
        width="10"
        height="10"
        fill="none"
        stroke="url(#geo-gold)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
 * D. PALGWAE 팔괘 — 건괘 ☰ (하늘) 스타일
 * 동양 사상 심볼, 바둑 넘어선 한국성. Traditional · Deep.
 * ============================================================ */
export function LogoPalgwae({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO Palgwae"
    >
      <defs>
        <linearGradient id="pal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      {/* Outer subtle circle */}
      <circle
        cx="20"
        cy="20"
        r="15"
        fill="none"
        stroke="url(#pal-gold)"
        strokeWidth="0.8"
        opacity="0.35"
      />
      {/* Three solid lines (☰ 건괘 = 하늘/시작) */}
      <g stroke="url(#pal-gold)" strokeWidth="2.4" strokeLinecap="round">
        <line x1="10" y1="13" x2="30" y2="13" />
        <line x1="10" y1="20" x2="30" y2="20" />
        <line x1="10" y1="27" x2="30" y2="27" />
      </g>
    </svg>
  );
}

/* ============================================================
 * E. INFINITY 리본 — 이어짐과 반복
 * 게임의 무한한 플레이 순환. Modern · Playful.
 * ============================================================ */
export function LogoInfinity({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO Infinity"
    >
      <defs>
        <linearGradient id="inf-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gold.dark} />
          <stop offset="50%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      {/* Infinity path */}
      <path
        d="M 10 20
           C 10 12, 18 12, 20 20
           C 22 28, 30 28, 30 20
           C 30 12, 22 12, 20 20
           C 18 28, 10 28, 10 20 Z"
        fill="none"
        stroke="url(#inf-gold)"
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
