import { InstagramIcon } from "./InstagramIcon";
import { INSTAGRAM_URL, WHATSAPP_URL, type Copy, type Lang } from "../i18n";
import { LangToggle } from "./LangToggle";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  t: Copy;
  lang: Lang;
  onLangChange: (l: Lang) => void;
};

export function Footer({ t, lang, onLangChange }: Props) {
  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="flex items-baseline">
            <span className="font-serif text-[22px] font-medium tracking-tight">M2</span>
            <span className="mx-2.5 h-3.5 w-px bg-ivory/25" />
            <span className="text-[10px] tracking-[0.26em] text-ivory/60 uppercase">
              Hair &amp; Beauty
            </span>
          </p>
          <p className="mt-2 text-[12px] tracking-[0.04em] text-ivory/50">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] tracking-[0.04em] text-ivory/70">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-clay"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-clay"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <span className="text-ivory/50">Rua José Maria Lisboa, 208</span>
        </div>

        <div className="flex items-center gap-6">
          <LangToggle lang={lang} onLangChange={onLangChange} dark />
          <span className="text-[11px] tracking-[0.06em] text-ivory/40">
            {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
