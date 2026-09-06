const pillars = [
  {
    title: "정통성",
    desc: "규칙과 정신은 원형을 존중합니다. 우리가 다시 만드는 건 그 위의 경험 층.",
  },
  {
    title: "현대적 UX",
    desc: "모바일 · 데스크톱 어디서든 자연스럽게 몰입되는 인터페이스와 반응성.",
  },
  {
    title: "AI 조우",
    desc: "인간 대 인간의 놀이에, 학습 가능한 상대와 코치로서의 AI를 더합니다.",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              About Studio
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              시간을 넘어 이어질{" "}
              <span className="text-gradient-gold">놀이를 만듭니다.</span>
            </h2>
            <div className="hairline my-8" />
            <p className="text-base leading-relaxed text-muted">
              가림토(GARIMTO)는 정통 보드게임을 오늘의 언어로 재구성하는
              1인 게임 스튜디오입니다. 백엔드·AI·프론트엔드를 한 사람이 처음부터 끝까지
              만들며, 코드와 규칙 사이의 시적인 공간을 탐구합니다.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              첫 프로젝트{" "}
              <a
                href="https://baduk.garimto.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-strong underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                바둑한판
              </a>
              은 KataGo AI 대국·실시간 온라인 대국·기보 리뷰까지 갖춘 종합 바둑
              플랫폼으로, 현재 베타 서비스 중입니다.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="lift glass flex gap-4 rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft font-mono text-lg font-bold text-accent-strong">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
