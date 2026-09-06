/**
 * Concept A (Monogram G) — Boardgame-inspired variants.
 * Each keeps the serif G identity but hints at baduk/chess/janggi differently.
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
 * A1. G · TOKEN — G 안에 게임 토큰 (바둑돌 / 체스 헤드 / 장기알)
 * G 의 여백에 원형 토큰이 자리잡음. 가장 심플하고 범용적.
 * ============================================================ */
export function LogoA1Token({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO G with Token"
    >
      <defs>
        <linearGradient id="a1-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
        <radialGradient id="a1-token" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      <text
        x="19"
        y="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#a1-gold)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        G
      </text>
      {/* Game token nestled in the G's opening */}
      <circle
        cx="26"
        cy="23"
        r="3.2"
        fill="url(#a1-token)"
        stroke="#0d0d0d"
        strokeWidth="0.8"
      />
    </svg>
  );
}

/* ============================================================
 * A2. G · BOARD — G 뒤에 은은한 3x3 격자점 (바둑/체스판)
 * G 가 보드 위에 얹혀있는 느낌. 배경 격자로 게임 세계관 암시.
 * ============================================================ */
export function LogoA2Board({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO G on Board"
    >
      <defs>
        <linearGradient id="a2-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      {/* Subtle 3x3 grid dots (board intersections) */}
      <g fill={gold.dark} opacity="0.45">
        <circle cx="11" cy="11" r="0.9" />
        <circle cx="20" cy="11" r="0.9" />
        <circle cx="29" cy="11" r="0.9" />
        <circle cx="11" cy="20" r="0.9" />
        <circle cx="29" cy="20" r="0.9" />
        <circle cx="11" cy="29" r="0.9" />
        <circle cx="20" cy="29" r="0.9" />
        <circle cx="29" cy="29" r="0.9" />
      </g>
      <text
        x="20"
        y="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#a2-gold)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        G
      </text>
    </svg>
  );
}

/* ============================================================
 * A3. G · TRIO — G 옆에 세 종류의 게임 알 (원/사각/다이아몬드)
 * 바둑돌·체스칸·장기알 각각의 실루엣을 나란히 배치. 다장르 명시.
 * ============================================================ */
export function LogoA3Trio({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 44 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO G with Three Pieces"
    >
      <defs>
        <linearGradient id="a3-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="44" height="40" rx="10" fill="#0d0d0d" />
      <text
        x="15"
        y="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#a3-gold)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        G
      </text>
      {/* Three piece silhouettes (baduk stone / chess square / janggi diamond) */}
      <g fill="url(#a3-gold)">
        <circle cx="32" cy="13" r="2.2" />
        <rect x="30" y="18" width="4.4" height="4.4" />
        <polygon points="32,26 34.6,29 32,32 29.4,29" />
      </g>
    </svg>
  );
}

/* ============================================================
 * A4. G · INTERSECTION — G 의 크로스바가 격자 교차선 역할
 * G 의 가로획을 보드판 라인으로 확장, 교차점에 작은 토큰.
 * 가장 컨셉추얼 · 로고 자체가 보드가 됨.
 * ============================================================ */
export function LogoA4Intersection({ size = 40, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="GARIMTO G at Intersection"
    >
      <defs>
        <linearGradient id="a4-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gold.light} />
          <stop offset="100%" stopColor={gold.dark} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#0d0d0d" />
      {/* Extended horizontal grid line through the G's crossbar */}
      <line
        x1="4"
        y1="23"
        x2="36"
        y2="23"
        stroke={gold.dark}
        strokeWidth="0.8"
        opacity="0.55"
      />
      {/* Vertical grid line */}
      <line
        x1="27"
        y1="6"
        x2="27"
        y2="34"
        stroke={gold.dark}
        strokeWidth="0.8"
        opacity="0.55"
      />
      <text
        x="19"
        y="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#a4-gold)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        G
      </text>
      {/* Small token at the intersection */}
      <circle cx="27" cy="23" r="1.8" fill={gold.light} />
    </svg>
  );
}
