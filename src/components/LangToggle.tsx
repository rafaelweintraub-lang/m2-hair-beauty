import type { Lang } from "../i18n";

type Props = {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  dark?: boolean;
};

export function LangToggle({ lang, onLangChange, dark = false }: Props) {
  const base = dark ? "text-ivory" : "text-ink";
  const idle = dark ? "text-ivory/45 hover:text-ivory" : "text-ink-soft/60 hover:text-ink";

  return (
    <div className="flex items-center gap-1.5 text-[11px] tracking-[0.14em]">
      <button
        onClick={() => onLangChange("pt")}
        aria-pressed={lang === "pt"}
        className={`transition-colors ${lang === "pt" ? `font-medium ${base}` : idle}`}
      >
        PT
      </button>
      <span className={dark ? "text-ivory/25" : "text-line"}>/</span>
      <button
        onClick={() => onLangChange("ja")}
        aria-pressed={lang === "ja"}
        className={`transition-colors ${lang === "ja" ? `font-medium ${base}` : idle}`}
      >
        JP
      </button>
    </div>
  );
}
