import type { CSSProperties } from "react";
import { ArrowDown, CalendarCheck, Clock } from "lucide-react";
import { WHATSAPP_URL, type Copy } from "../i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Drop a muted, looped hero clip here later (e.g. "/video/m2-hero.mp4")
 * and the poster image below is replaced automatically — same layout.
 */
const HERO_VIDEO_SRC: string | null = null;

export function Hero({ t }: { t: Copy }) {
  return (
    <section
      id="top"
      className="bg-ivory bg-[radial-gradient(72%_58%_at_16%_6%,rgba(150,104,74,0.08),transparent_68%)]"
    >
      <div className="mx-auto grid max-w-[1400px] lg:min-h-[calc(100svh-72px)] lg:grid-cols-[45fr_55fr]">
        {/* copy */}
        <div className="flex flex-col justify-center px-6 pt-14 pb-12 lg:py-16 lg:pr-16 lg:pl-10 xl:pr-24">
          <div data-reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay" />
            <span className="text-[11px] tracking-[0.28em] text-ink-soft uppercase">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1
            data-reveal
            style={{ "--reveal-delay": "90ms" } as CSSProperties}
            className="mt-8 font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] text-ink sm:text-[52px] lg:text-[56px] xl:text-[64px]"
          >
            <span className="block">{t.hero.titleA}</span>
            <span className="block text-clay italic">{t.hero.titleB}</span>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "180ms" } as CSSProperties}
            className="mt-7 max-w-md text-[15.5px] leading-[1.8] text-ink-soft"
          >
            {t.hero.text}
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "270ms" } as CSSProperties}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[13px] tracking-[0.04em] text-ivory shadow-[0_1px_0_rgba(34,29,24,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-[0_12px_28px_rgba(150,104,74,0.28)]"
            >
              <WhatsAppIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
              {t.hero.cta}
            </a>
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[13px] tracking-[0.04em] text-ink transition-colors hover:border-clay hover:text-clay"
            >
              {t.hero.secondary}
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <p
            data-reveal
            style={{ "--reveal-delay": "340ms" } as CSSProperties}
            className="mt-8 max-w-md font-serif text-[16.5px] leading-relaxed text-ink-soft italic"
          >
            {t.hero.trustLine}
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "420ms" } as CSSProperties}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-[12px] tracking-[0.06em] text-ink-soft"
          >
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-clay" strokeWidth={1.75} />
              {t.hero.hours}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="h-3.5 w-3.5 text-clay" strokeWidth={1.75} />
              {t.hero.appointment}
            </span>
          </div>
        </div>

        {/* photograph / future video */}
        <div className="relative h-[52vh] min-h-[400px] overflow-hidden lg:h-auto lg:min-h-0">
          {HERO_VIDEO_SRC ? (
            <video
              className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              src={HERO_VIDEO_SRC}
              poster="./images/m2-hero.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src="./images/m2-hero.jpg"
              alt="Cabelo longo, brilhante e saudável — M2 Hair & Beauty"
              className="hero-zoom absolute inset-0 h-full w-full object-cover object-[center_20%]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
