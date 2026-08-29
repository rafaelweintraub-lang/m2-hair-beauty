import { useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { whatsappAbout, type Copy } from "../i18n";

export function Services({ t }: { t: Copy }) {
  const [active, setActive] = useState(0);
  const current = t.services.items[active];

  return (
    <section id="servicos" className="scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        {/* section header */}
        <div className="mb-14 grid items-end gap-8 lg:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div data-reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" />
              <span className="text-[11px] tracking-[0.28em] text-ink-soft uppercase">
                {t.services.eyebrow}
              </span>
            </div>
            <h2
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
              className="mt-5 font-serif text-[38px] leading-[1.06] font-medium text-ink sm:text-[46px] lg:text-[52px]"
            >
              {t.services.title}
            </h2>
          </div>
          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
            className="text-[15px] leading-relaxed text-ink-soft lg:col-span-5 lg:pb-2 lg:text-right"
          >
            {t.services.text}
          </p>
        </div>

        {/* visual + list */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* editorial visual — swaps with the active service */}
          <div data-reveal className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] overflow-hidden bg-cream lg:aspect-[4/5]">
              {t.services.items.map((s, i) => (
                <img
                  key={s.img}
                  src={s.img}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
                    i === active ? "scale-100 opacity-100" : "scale-[1.015] opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-5 left-5 bg-ivory/95 px-5 py-3.5 shadow-[0_10px_30px_rgba(34,29,24,0.18)] sm:bottom-7 sm:left-7">
                <span className="flex items-center gap-3">
                  <span className="h-px w-6 bg-clay" />
                  <span className="text-[11px] tracking-[0.2em] text-ink uppercase">
                    {current.tag}
                  </span>
                </span>
                <span className="mt-1 block font-serif text-[17px] font-medium text-ink">
                  {current.name}
                </span>
              </div>
            </div>
          </div>

          {/* service list */}
          <div data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <ul>
              {t.services.items.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.name} className="border-t border-line last:border-b">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="group block w-full py-7 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay lg:py-8"
                    >
                      <div className="flex items-center gap-5">
                        <div className="min-w-0">
                          <p
                            className={`mb-1.5 text-[10.5px] tracking-[0.24em] uppercase transition-colors duration-300 ${
                              isActive ? "text-clay" : "text-ink-soft/60"
                            }`}
                          >
                            {s.tag}
                          </p>
                          <h3
                            className={`font-serif text-[25px] leading-tight font-medium transition-colors duration-300 sm:text-[29px] ${
                              isActive ? "text-ink" : "text-ink-soft group-hover:text-ink"
                            }`}
                          >
                            {s.name}
                          </h3>
                          <p className="mt-1.5 text-[12px] tracking-[0.18em] text-ink-soft/70">
                            {s.sub}
                          </p>
                        </div>
                        <span
                          className={`h-px flex-1 transition-colors duration-500 ${
                            isActive ? "bg-clay" : "bg-line group-hover:bg-clay/50"
                          }`}
                        />
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                            isActive
                              ? "translate-x-0 border-clay bg-clay text-ivory opacity-100"
                              : "-translate-x-2 border-line text-ink-soft opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                          }`}
                        >
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                      </div>
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isActive ? "mt-3.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                            {s.d}
                          </p>
                          <p className="mt-3 flex items-center gap-2.5 text-[13px] font-medium tracking-[0.02em] text-ink">
                            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                            <span className="text-[10.5px] tracking-[0.22em] text-clay uppercase">
                              {t.services.resultLabel}
                            </span>
                            {s.result}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href={whatsappAbout(current.name)}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[13px] tracking-[0.04em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-[0_12px_28px_rgba(150,104,74,0.28)]"
            >
              {t.services.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
