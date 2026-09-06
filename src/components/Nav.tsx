import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight transition hover:opacity-90"
          aria-label="가림토 홈으로"
        >
          <Logo size={32} />
          <span className="text-gradient-gold">GARIMTO</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          <li>
            <a href="#games" className="transition hover:text-foreground">
              Games
            </a>
          </li>
          <li>
            <a href="#studio" className="transition hover:text-foreground">
              Studio
            </a>
          </li>
          <li>
            <a href="#devlog" className="transition hover:text-foreground">
              Devlog
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-foreground">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="https://baduk.garimto.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-accent/60 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-strong transition hover:bg-accent hover:text-black"
        >
          바둑한판 플레이 →
        </a>
      </nav>
    </header>
  );
}
