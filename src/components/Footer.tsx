export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-black text-xs font-black">
            가
          </span>
          <span>© {new Date().getFullYear()} GARIMTO. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted">
          <a
            href="https://baduk.garimto.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            baduk.garimto.kr
          </a>
          <a href="mailto:hello@garimto.kr" className="hover:text-foreground">
            hello@garimto.kr
          </a>
        </div>
      </div>
    </footer>
  );
}
