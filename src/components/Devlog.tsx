const posts = [
  {
    date: "2026-08-31",
    title: "바둑한판 v1.06 배포 — 모바일 스크롤 & 오디오 안정화",
    tag: "Release",
    excerpt:
      "iPhone SE 세로 화면에서 AI 대국 설정 페이지가 스크롤되지 않던 이슈와, 오디오 파일 404 스팸을 개선했습니다.",
  },
  {
    date: "2026-08-15",
    title: "운영서버 재배포 파이프라인 자동화",
    tag: "Infra",
    excerpt:
      "빌드→SCP→systemctl 롤링 배포 스크립트로 배포 시간을 5분에서 30초로 단축.",
  },
  {
    date: "2026-08-03",
    title: "홈페이지 프로젝트 시작",
    tag: "Studio",
    excerpt:
      "가림토 홈페이지 프로젝트 킥오프. 인디 게임 스튜디오 브랜딩과 게임 카탈로그 페이지 준비.",
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
