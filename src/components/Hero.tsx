import StoneParticles from "./StoneParticles";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* 배경 파티클 */}
      <StoneParticles />

      {/* 그라디언트 오버레이 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,179,92,0.15),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(11,13,16,0.9),_transparent_60%)]"
      />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-strong uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Indie Board-Game Studio
        </span>

        <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
          정통 보드게임을,
          <br />
          <span className="text-gradient-gold">다시 재미있게.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
          가림토는 바둑·장기·오목 같은 정통 보드게임을 현대적인 UX 로 재해석하는
          <br className="hidden md:block" />
          인디 게임 스튜디오입니다. 대표작 <strong className="text-foreground">바둑한판</strong>{" "}
          을 시작으로, 시간을 넘어 이어질 놀이를 만듭니다.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://baduk.garimto.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-black shadow-lg shadow-accent/20 transition hover:bg-accent-strong hover:shadow-xl hover:shadow-accent/30"
          >
            지금 바둑한판 플레이
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#games"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
          >
            스튜디오 소개
          </a>
        </div>

        {/* 스토어 배지 자리 (출시 후 활성화) */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-widest text-muted">Coming Soon</p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-60">
            <div className="flex h-12 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm">
              <span className="text-lg"></span>
              <div className="text-left leading-tight">
                <div className="text-[10px] text-muted">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </div>
            <div className="flex h-12 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm">
              <span className="text-lg">▶</span>
              <div className="text-left leading-tight">
                <div className="text-[10px] text-muted">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
