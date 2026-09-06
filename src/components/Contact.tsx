export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-border/60 py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          함께 만들거나, 이야기 나눠요.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
          제휴 · 협업 · 피드백 · 채용 문의는 모두 이메일로 받고 있습니다.
          답장은 보통 1~2 영업일 안에 드려요.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@garimto.kr"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-black shadow-lg shadow-accent/20 transition hover:bg-accent-strong"
          >
            hello@garimto.kr
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://github.com/jonghwan76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold transition hover:border-accent hover:text-accent-strong"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.05 11.05 0 0 1 5.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56 4.56-1.53 7.84-5.83 7.84-10.91C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
