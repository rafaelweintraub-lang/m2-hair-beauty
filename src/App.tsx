import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyM2 } from "./components/WhyM2";
import { Ryo } from "./components/Ryo";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { copy, type Lang } from "./i18n";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = copy[lang];

  useReveal();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "ja";
  }, [lang]);

  return (
    <div className="bg-ivory font-sans text-ink">
      <Header lang={lang} onLangChange={setLang} t={t} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <WhyM2 t={t} />
        <Ryo t={t} />
        <Gallery t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} lang={lang} onLangChange={setLang} />
    </div>
  );
}
