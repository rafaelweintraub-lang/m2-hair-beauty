import type { CSSProperties } from "react";
import type { Copy } from "../i18n";

export function Ryo({ t }: { t: Copy }) {
  return (
    <section id="ryo-section" className="scroll-mt-20 border-t border-clay/40 bg-cocoa text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* identity */}
          <div className="lg:col-span-5">
            <div data-reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" />
              <span className="text-[11px] tracking-[0.28em] text-ivory/60 uppercase">
                {t.ryo.eyebrow}
              </span>
            </div>
            <h2
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
              className="mt-6 font-serif text-[44px] leading-[1.02] font-medium tracking-[-0.01em] sm:text-[54px] lg:text-[62px]"
            >
              {t.ryo.name}
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "150ms" } as CSSProperties}
              className="mt-3 text-[12px] tracking-[0.26em] text-ivory/50 uppercase"
            >
              {t.ryo.nameJp}
            </p>
            <p
              data-reveal
              style={{ "--reveal-delay": "210ms" } as CSSProperties}
              className="mt-8 max-w-sm font-serif text-[22px] leading-[1.35] italic sm:text-[24px]"
            >
              {t.ryo.lead}
            </p>
          </div>

          {/* narrative + chronology */}
          <div className="lg:col-span-7">
            <p
              data-reveal
              className="max-w-xl text-[15.5px] leading-[1.95] text-ivory/75"
            >
              {t.ryo.text}
            </p>
            <blockquote
              data-reveal
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              className="mt-8 max-w-xl border-l-2 border-clay pl-6 font-serif text-[20px] leading-snug italic sm:text-[22px]"
            >
              {t.ryo.supporting}
            </blockquote>

            {/* connected chronology */}
            <ol
              data-reveal
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              className="relative mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8"
            >
              <span
                aria-hidden="true"
                className="absolute top-[5px] bottom-2 left-[5px] w-px bg-ivory/20 sm:top-[5px] sm:right-0 sm:bottom-auto sm:left-0 sm:h-px sm:w-auto"
              />
              {t.ryo.timeline.map((item) => (
                <li key={item.years} className="group relative pl-8 sm:pl-0 sm:pt-9">
                  <span className="absolute top-1 left-0 h-[11px] w-[11px] rounded-full bg-clay ring-4 ring-cocoa transition-transform duration-500 group-hover:scale-125 sm:top-0" />
                  <p className="font-serif text-[26px] font-medium text-clay">
                    {item.years}
                  </p>
                  <p className="mt-1.5 text-[14.5px] font-medium text-ivory">
                    {item.place}
                  </p>
                  <p className="mt-0.5 text-[12px] tracking-[0.16em] text-ivory/50">
                    {item.placeJp}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* supporting atmosphere — context, not a portrait */}
      <div className="mt-16 lg:mt-20">
        <div className="group relative h-[300px] overflow-hidden sm:h-[360px] lg:h-[400px]">
          <img
            src="./images/m2-consult.jpg"
            alt={t.ryo.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%] transition-transform duration-[1800ms] ease-out group-hover:scale-[1.015]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 mx-auto w-full max-w-[1400px] px-6 pb-7 lg:px-10">
            <span className="inline-flex items-center gap-3 bg-cocoa/80 px-4 py-2.5 text-[11px] tracking-[0.22em] text-ivory/85 uppercase">
              <span className="h-px w-6 bg-clay" />
              {t.ryo.imageCaption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
