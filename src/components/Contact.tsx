import type { CSSProperties } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import {
  INSTAGRAM_URL,
  MAP_URL,
  PHONE_TEL,
  WHATSAPP_URL,
  type Copy,
} from "../i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact({ t }: { t: Copy }) {
  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden bg-ink text-ivory">
      {/* ambient watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-24 font-serif text-[240px] leading-none text-ivory/[0.04] select-none lg:text-[340px]"
      >
        M2
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          {/* invitation */}
          <div className="lg:col-span-7">
            <div data-reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" />
              <span className="text-[11px] tracking-[0.28em] text-ivory/60 uppercase">
                {t.nav.contato}
              </span>
            </div>
            <h2
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
              className="mt-6 font-serif text-[38px] leading-[1.08] font-medium sm:text-[50px] lg:text-[58px]"
            >
              <span className="block">{t.contact.headlineA}</span>
              <span className="block text-clay italic">{t.contact.headlineB}</span>
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "170ms" } as CSSProperties}
              className="mt-7 max-w-md text-[15px] leading-relaxed text-ivory/70"
            >
              {t.contact.text}
            </p>

            <div
              data-reveal
              style={{ "--reveal-delay": "250ms" } as CSSProperties}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ivory px-8 py-4 text-[14px] tracking-[0.04em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:text-ivory sm:w-auto"
              >
                <WhatsAppIcon className="h-[17px] w-[17px]" />
                {t.contact.cta}
              </a>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ivory/30 px-8 py-4 text-[14px] tracking-[0.04em] text-ivory transition-colors duration-300 hover:border-clay hover:text-clay sm:w-auto"
              >
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
                {t.contact.map}
              </a>
            </div>
          </div>

          {/* details */}
          <div className="lg:col-span-5 lg:pl-8">
            <div data-reveal className="border-t border-ivory/15 py-7">
              <p className="text-[11px] tracking-[0.24em] text-ivory/50 uppercase">
                {t.contact.addressLabel}
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-ivory">
                {t.contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-[13px] tracking-[0.06em] text-ivory/60">
                <Clock className="h-3.5 w-3.5 text-clay" strokeWidth={1.75} />
                {t.hero.hours}
              </p>
            </div>

            <div
              data-reveal
              style={{ "--reveal-delay": "110ms" } as CSSProperties}
              className="border-t border-ivory/15 py-7"
            >
              <p className="text-[11px] tracking-[0.24em] text-ivory/50 uppercase">
                Instagram
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2.5 text-[15px] text-ivory transition-colors hover:text-clay"
              >
                <InstagramIcon className="h-4 w-4" />
                @m2ryomatsunaga
              </a>
            </div>

            <div
              data-reveal
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              className="border-t border-b border-ivory/15 py-7"
            >
              <p className="text-[11px] tracking-[0.24em] text-ivory/50 uppercase">
                Telefone
              </p>
              <a
                href={PHONE_TEL}
                className="group mt-4 inline-flex items-center gap-2.5 text-[15px] text-ivory transition-colors hover:text-clay"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                (11) 3554-6667
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
