import type { CSSProperties } from "react";
import type { Copy } from "../i18n";

export function WhyM2({ t }: { t: Copy }) {
  return (
    <section className="border-y border-line bg-sand">
      {/* PART A — balanced two-column composition */}
      <div className="mx-auto max-w-[1400px] px-6 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* intro */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div data-reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" />
              <span className="text-[11px] tracking-[0.28em] text-ink-soft uppercase">
                {t.why.eyebrow}
              </span>
            </div>
            <h2
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
              className="mt-5 font-serif text-[36px] leading-[1.08] font-medium text-ink sm:text-[44px] lg:text-[50px]"
            >
              {t.why.title}
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
              className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft"
            >
              {t.why.sub}
            </p>
          </div>

          {/* 2x2 editorial value grid */}
          <div className="grid sm:grid-cols-2 lg:col-span-7">
            {t.why.items.map((item, i) => (
              <div
                key={item.t}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
                className={`group border-t border-ink/15 p-7 transition-colors duration-500 hover:bg-ivory/50 sm:p-8 ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i < 2 ? "sm:border-b" : ""}`}
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-clay transition-transform duration-500 group-hover:scale-150" />
                <h3 className="mt-4 font-serif text-[22px] leading-tight font-medium text-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-[23px]">
                  {item.t}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PART B — cinematic atmospheric band, flush transition */}
      <div className="relative mt-16 h-[340px] overflow-hidden lg:mt-20 sm:h-[420px] lg:h-[480px]">
        <img
          src="./images/m2-atmos.jpg"
          alt={t.band.line}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.015]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0">
          <p
            data-reveal
            className="mx-auto max-w-[1400px] px-6 pb-9 font-serif text-[26px] leading-snug font-medium text-ivory italic sm:text-[32px] lg:px-10 lg:pb-11 lg:text-[38px]"
          >
            <span className="mr-4 inline-block h-px w-8 bg-clay align-middle" />
            {t.band.line}
          </p>
        </div>
      </div>
    </section>
  );
}
