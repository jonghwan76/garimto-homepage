import Link from "next/link";
import {
  LogoMonogram,
  LogoSeal,
  LogoGeometric,
  LogoPalgwae,
  LogoInfinity,
} from "@/components/logos/LogoVariants";
import {
  LogoA1Token,
  LogoA2Board,
  LogoA3Trio,
  LogoA4Intersection,
} from "@/components/logos/LogoAVariants";

const aVariants = [
  {
    key: "A1",
    name: "G · Token",
    desc: "G 여백에 게임 토큰 (바둑돌·체스헤드·장기알 통용)",
    tone: "심플 · 범용 · 어떤 게임이든 연상",
    Comp: LogoA1Token,
  },
  {
    key: "A2",
    name: "G · Board",
    desc: "G 뒤에 은은한 3×3 격자점 (바둑·체스판 암시)",
    tone: "은근함 · 배경 격자 · 세계관 힌트",
    Comp: LogoA2Board,
  },
  {
    key: "A3",
    name: "G · Trio",
    desc: "G 옆에 세 종류 게임알 (원/사각/다이아몬드)",
    tone: "명시적 · 다장르 · 스튜디오 라인업 상징",
    Comp: LogoA3Trio,
  },
  {
    key: "A4",
    name: "G · Intersection",
    desc: "G 크로스바가 격자 교차선으로 확장, 교차점에 토큰",
    tone: "컨셉추얼 · 로고 자체가 보드 · 가장 독특",
    Comp: LogoA4Intersection,
  },
];

const variants = [
  {
    key: "A",
    name: "Monogram G (원본)",
    desc: "미니멀 인디 스튜디오 · Editorial 세리프",
    tone: "Modern · 확장성 甲 · 장르 무관",
    Comp: LogoMonogram,
  },
  {
    key: "B",
    name: "Seal 도장",
    desc: "전통 인장 스타일 · 한글 '가' 각인",
    tone: "Heritage · 한국성 · 클래식 브랜드",
    Comp: LogoSeal,
  },
  {
    key: "C",
    name: "Geometric",
    desc: "원+삼각+사각 · 규칙과 플레이 상징",
    tone: "Abstract · Contemporary · Steam 인디 스타일",
    Comp: LogoGeometric,
  },
  {
    key: "D",
    name: "Palgwae 팔괘",
    desc: "건괘 ☰ · 동양 사상 심볼",
    tone: "Traditional · 바둑 넘어선 한국성 · Deep",
    Comp: LogoPalgwae,
  },
  {
    key: "E",
    name: "Infinity 리본",
    desc: "이어짐과 반복 · 무한 플레이 순환",
    tone: "Modern · Playful · 완전 추상",
    Comp: LogoInfinity,
  },
];

export const metadata = {
  title: "Logo Preview · GARIMTO",
  robots: { index: false, follow: false },
};

export default function LogoPreviewPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition"
        >
          ← 홈으로
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-gradient-gold">
          GARIMTO 로고 컨셉 미리보기
        </h1>
        <p className="mt-2 text-muted">
          A 계열 4종 (보드게임 뉘앙스 추가) + 원본 5종 · 실제 렌더링으로 비교 ·
          마음에 드는 컨셉 알려주시면 정식 로고로 다듬어 드립니다.
        </p>
      </header>

      {/* A-line variants (boardgame-inspired) */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-accent">
          A 계열 · 보드게임 뉘앙스 추가
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {aVariants.map(({ key, name, desc, tone, Comp }) => (
            <section
              key={key}
              className="glass rounded-2xl p-6 lift"
              aria-label={`Concept ${key}: ${name}`}
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-2xl font-black text-accent">{key}</span>
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-sm text-muted">{desc}</p>
              <p className="mt-1 text-xs text-muted opacity-80">{tone}</p>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 p-6">
                  <Comp size={128} />
                  <span className="text-xs text-muted">128px · 대형</span>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 p-6">
                  <Comp size={64} />
                  <span className="text-xs text-muted">64px · 중형</span>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 p-6">
                  <div className="flex items-center gap-2.5">
                    <Comp size={32} />
                    <span className="text-lg font-bold text-gradient-gold">
                      GARIMTO
                    </span>
                  </div>
                  <span className="text-xs text-muted">32px · 네비게이션</span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <h2 className="mb-4 text-xl font-bold text-muted">
        원본 5종 · 다른 컨셉 방향
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {variants.map(({ key, name, desc, tone, Comp }) => (
          <section
            key={key}
            className="glass rounded-2xl p-6 lift"
            aria-label={`Concept ${key}: ${name}`}
          >
            <div className="mb-4 flex items-baseline gap-3">
              <span className="text-2xl font-black text-accent">
                {key}
              </span>
              <h2 className="text-xl font-bold">{name}</h2>
            </div>
            <p className="text-sm text-muted">{desc}</p>
            <p className="mt-1 text-xs text-muted opacity-80">{tone}</p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Large */}
              <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 p-6">
                <Comp size={128} />
                <span className="text-xs text-muted">128px · 대형</span>
              </div>

              {/* Medium */}
              <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 p-6">
                <Comp size={64} />
                <span className="text-xs text-muted">64px · 중형</span>
              </div>

              {/* Nav-size with wordmark */}
              <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 p-6">
                <div className="flex items-center gap-2.5">
                  <Comp size={32} />
                  <span className="text-lg font-bold text-gradient-gold">
                    GARIMTO
                  </span>
                </div>
                <span className="text-xs text-muted">32px · 네비게이션</span>
              </div>
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-12 rounded-2xl border border-border/40 p-6 text-sm text-muted">
        <p>
          <strong className="text-foreground">피드백 방법:</strong> 원하는 컨셉
          알파벳 (A/B/C/D/E) 또는 &quot;A 인데 색을 좀 더 어둡게&quot; 같은
          디렉션 주시면 정식 로고로 다듬어 반영하겠습니다.
        </p>
      </footer>
    </main>
  );
}
