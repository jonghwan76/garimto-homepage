type Game = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  status: "live" | "beta" | "soon";
  emoji: string;
};

const games: Game[] = [
  {
    title: "바둑한판",
    subtitle: "정통 바둑, 다시 재미있게",
    description:
      "KataGo AI 대국·실시간 온라인 대국·기보 저장 및 리뷰까지. 입문자부터 유단자까지 모두를 위한 바둑 플랫폼.",
    tags: ["KataGo AI", "실시간 대국", "PC · 모바일"],
    href: "https://baduk.garimto.kr",
    status: "beta",
    emoji: "⚫",
  },
  {
    title: "Untitled Janggi",
    subtitle: "장기, 새롭게 재해석",
    description: "정통 장기의 룰은 살리고, 모던한 UX 와 AI 상대로 다시 만나는 프로젝트.",
    tags: ["Planning"],
    status: "soon",
    emoji: "♟",
  },
  {
    title: "Coming Soon",
    subtitle: "다음 프로젝트를 준비 중",
    description: "정통 놀이를 이어가는 새로운 시도를 준비하고 있어요.",
    tags: ["Concept"],
    status: "soon",
    emoji: "✦",
  },
];

const statusBadge = {
  live: { text: "Live", cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  beta: { text: "Beta", cls: "bg-accent-soft text-accent-strong border-accent/40" },
  soon: { text: "Coming Soon", cls: "bg-surface-elev text-muted border-border" },
} as const;

export default function Games() {
  return (
    <section id="games" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              Our Games
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              지금, <span className="text-gradient-gold">플레이할 수 있는 것들</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            정통성에 뿌리를 두고, 오늘의 감각으로 다시 만드는 게임들.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => {
            const badge = statusBadge[g.status];
            const CardTag = g.href ? "a" : "div";
            const cardProps = g.href
              ? { href: g.href, target: "_blank", rel: "noopener noreferrer" as const }
              : {};
            return (
              <CardTag
                key={i}
                {...cardProps}
                className={`lift group relative flex flex-col overflow-hidden rounded-2xl glass p-6 ${
                  g.href ? "cursor-pointer" : "cursor-default opacity-80"
                }`}
              >
                {/* 상단 시각 영역 */}
                <div className="relative mb-6 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-surface-elev via-surface to-background">
                  <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                    {g.emoji}
                  </span>
                  <span
                    className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${badge.cls}`}
                  >
                    {badge.text}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">{g.title}</h3>
                <p className="mt-1 text-sm text-accent-strong">{g.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {g.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface-elev px-2.5 py-0.5 text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {g.href && (
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-accent-strong">
                    플레이하러 가기
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                )}
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
