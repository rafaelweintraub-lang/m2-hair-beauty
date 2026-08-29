import type { CSSProperties } from "react";
import type { Copy } from "../i18n";

export function About({ t }: { t: Copy }) {
  return (
    <section id="sobre" className="scroll-mt-20 border-y border-line bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* narrative */}
          <div className="lg:col-span-5">
            <h2
              data-reveal
              className="font-serif text-[36px] leading-[1.08] font-medium text-ink sm:text-[44px] lg:text-[50px]"
            >
              <span className="block">{t.about.titleA}</span>
              <span className="block text-clay italic">{t.about.titleB}</span>
            </h2>

            <p
              data-reveal
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              className="mt-8 text-[16px] leading-[1.95] text-ink-soft"
            >
              {t.about.textA}
              <span className="font-medium text-ink">Ryo Matsunaga</span>
              {t.about.textB}
            </p>

            <div className="mt-12">
              {t.about.values.map((v, i) => (
                <div
                  key={v.t}
                  data-reveal
                  style={{ "--reveal-delay": `${180 + i * 100}ms` } as CSSProperties}
                  className="group border-t border-line py-6 last:border-b"
                >
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-serif text-[23px] font-medium text-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-[25px]">
                      {v.t}
                    </h3>
                    <span className="text-[11px] tracking-[0.2em] text-ink-soft/60">
                      {v.sub}
                    </span>
                    <span className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-clay/70" />
                  </div>
                  <p className="mt-2.5 max-w-md text-[14px] leading-relaxed text-ink-soft">
                    {v.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* craft photograph — the hero of the section */}
          <div
            className="lg:col-span-7"
            data-reveal
            style={{ "--reveal-delay": "150ms" } as CSSProperties}
          >
            <div className="group relative overflow-hidden">
              <img
                src="./images/m2-detail.jpg"
                alt="Detalhe de corte preciso no ateliê M2"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.015] sm:aspect-[5/5] lg:aspect-[7/6] lg:h-[620px]"
              />
            </div>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-10 bg-clay" />
              <p className="text-[11.5px] tracking-[0.22em] text-ink-soft uppercase">
                {t.about.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
