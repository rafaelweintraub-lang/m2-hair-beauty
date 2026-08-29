import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL, type Copy, type Lang } from "../i18n";
import { LangToggle } from "./LangToggle";

type Props = {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  t: Copy;
};

export function Header({ lang, onLangChange, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["sobre", "servicos", "ryo-section", "contato"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const links = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#servicos", label: t.nav.servicos },
    { href: "#ryo-section", label: t.nav.ryo },
    { href: "#contato", label: t.nav.contato },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[border-color,box-shadow,background-color] duration-300 ${
        scrolled || open
          ? "border-line bg-ivory/95 shadow-[0_1px_24px_rgba(34,29,24,0.06)] backdrop-blur-sm"
          : "border-transparent bg-ivory"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[height] duration-300 lg:px-10 ${
          scrolled && !open ? "h-16" : "h-[72px]"
        }`}
      >
        {/* wordmark */}
        <a href="#top" className="flex items-baseline" onClick={() => setOpen(false)}>
          <span className="font-serif text-[27px] font-medium leading-none tracking-tight text-ink">
            M2
          </span>
          <span className="mx-3 h-4 w-px translate-y-[1px] bg-line" />
          <span className="text-[10.5px] uppercase leading-none tracking-[0.26em] text-ink-soft">
            Hair &amp; Beauty
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-[13px] tracking-[0.04em] transition-colors hover:text-ink ${
                activeId === l.href.slice(1) ? "is-active" : "text-ink-soft"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* desktop utility */}
        <div className="hidden items-center gap-6 lg:flex">
          <LangToggle lang={lang} onLangChange={onLangChange} />
          <span className="h-4 w-px bg-line" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-[12px] tracking-[0.12em] text-ivory uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay"
          >
            {t.nav.agendar}
          </a>
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <LangToggle lang={lang} onLangChange={onLangChange} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="text-ink transition-colors hover:text-clay"
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-line transition-all duration-500 ease-out lg:hidden ${
          open ? "max-h-[420px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-4 font-serif text-[24px] text-ink transition-colors hover:text-clay"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 rounded-full bg-ink px-6 py-3.5 text-center text-[13px] tracking-[0.12em] text-ivory uppercase transition-colors hover:bg-clay"
          >
            {t.nav.agendar}
          </a>
        </nav>
      </div>
    </header>
  );
}
