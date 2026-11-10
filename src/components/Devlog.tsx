const posts = [
  {
    date: "2026-11-10",
    title: "바둑한판 Google Play 심사 통과 — 정식 출시 준비",
    tag: "Release",
    excerpt:
      "안드로이드 앱이 심사를 통과해 게시를 앞두고 있습니다. 출시 전 운영 점검(서버·인증서·핵심 기능)을 모두 통과했습니다.",
  },
  {
    date: "2026-11-02",
    title: "종국 계가에서 사석을 들어내도록 수정",
    tag: "Fix",
    excerpt:
      "계가 시 죽은 돌이 반영되지 않아 승패가 뒤집히는 경우가 있었습니다. 훈련실·실시간 대국·자가대국 세 경로를 모두 바로잡았습니다.",
  },
  {
    date: "2026-10-31",
    title: "서버 보안 설정 강화 — 취약한 기본값 차단",
    tag: "Infra",
    excerpt:
      "서명키가 기본값으로 조용히 넘어가던 경로를 전부 막고, 설정이 미흡하면 서버가 아예 기동하지 않도록 했습니다.",
  },
  {
    date: "2026-10-19",
    title: "복기 정확도·손실 지표 전면 재설계",
    tag: "Fix",
    excerpt:
      "한 수의 손실을 같은 국면의 최선수와 비교하도록 바꾸고, 형세 부호가 뒤집히던 문제를 해결해 복기 수치를 신뢰할 수 있게 했습니다.",
  },
  {
    date: "2026-10-18",
    title: "AI 코치 해설 도입 — 둔 수에 대한 실시간 코멘트",
    tag: "Feature",
    excerpt:
      "대국 중 승률이 크게 흔들린 수에 코치가 이유를 짚어주고, 대국이 끝나면 전체 흐름을 한 번에 총평합니다.",
  },
];

export default function Devlog() {
  return (
    <section id="devlog" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              Devlog
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              만들어가는 <span className="text-gradient-gold">과정을 기록합니다</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-accent-strong hover:text-accent"
          >
            전체 글 보기 →
          </a>
        </div>

        <div className="divide-y divide-border/60 rounded-2xl glass">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group grid grid-cols-1 gap-4 p-6 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-8"
            >
              <time className="font-mono text-xs uppercase tracking-widest text-muted">
                {p.date}
              </time>
              <div>
                <div className="mb-1 inline-block rounded-full border border-border bg-surface-elev px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                  {p.tag}
                </div>
                <h3 className="text-lg font-bold transition group-hover:text-accent-strong">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{p.excerpt}</p>
              </div>
              <span className="hidden text-accent-strong transition-transform group-hover:translate-x-1 md:inline">
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
