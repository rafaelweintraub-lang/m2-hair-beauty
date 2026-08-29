import type { CSSProperties } from "react";
import { INSTAGRAM_URL, type Copy } from "../i18n";
import { InstagramIcon } from "./InstagramIcon";

const SPANS = [
  "h-[380px] lg:col-span-7 lg:h-[560px]",
  "h-[380px] sm:col-span-6 lg:col-span-5 lg:h-[560px] lg:translate-y-8",
  "h-[320px] sm:col-span-5 lg:col-span-5 lg:h-[400px]",
  "h-[320px] sm:col-span-7 lg:col-span-7 lg:h-[400px] lg:translate-y-8",
];

export function Gallery({ t }: { t: Copy }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-[36px] leading-[1.06] font-medium text-ink sm:text-[44px] lg:text-[50px]">
              {t.gallery.title}
            </h2>
            <p className="mt-3 text-[12px] tracking-[0.24em] text-ink-soft uppercase">
              {t.gallery.sub}
            </p>
          </div>
          <span className="mb-2 hidden h-px w-24 bg-clay sm:block" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-12 lg:pb-8">
          {t.gallery.items.map((item, i) => (
            <figure
              key={item.img}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 110}ms` } as CSSProperties}
              className={`group relative overflow-hidden bg-ivory ${SPANS[i]}`}
            >
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.015]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent p-5 pt-14 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <span className="flex items-baseline gap-2.5">
                  <span className="font-serif text-[13px] text-clay italic">
                    0{i + 1}
                  </span>
                  <span className="text-[11.5px] tracking-[0.2em] text-ivory uppercase">
                    {item.label}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          data-reveal
          className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-[12px] leading-relaxed tracking-[0.04em] text-ink-soft">
            {t.gallery.note}
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-[12.5px] tracking-[0.06em] text-ink transition-colors hover:text-clay"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            @m2ryomatsunaga
          </a>
        </div>
      </div>
    </section>
  );
}
