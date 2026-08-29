export type Lang = "pt" | "ja";

export const WHATSAPP_URL =
  "https://wa.me/5511945020550?text=" +
  encodeURIComponent("Olá! Gostaria de agendar um horário na M2 Hair & Beauty.");

export const whatsappAbout = (service: string) =>
  "https://wa.me/5511945020550?text=" +
  encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${service}`);

export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua José Maria Lisboa, 208 - Jardim Paulista, São Paulo - SP");

export const INSTAGRAM_URL = "https://instagram.com/m2ryomatsunaga";
export const PHONE_TEL = "tel:+551135546667";

export type Copy = {
  nav: {
    sobre: string;
    servicos: string;
    ryo: string;
    contato: string;
    agendar: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    text: string;
    cta: string;
    secondary: string;
    trustLine: string;
    hours: string;
    appointment: string;
  };
  about: {
    titleA: string;
    titleB: string;
    textA: string;
    textB: string;
    values: { t: string; sub: string; d: string }[];
    caption: string;
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    items: {
      tag: string;
      name: string;
      sub: string;
      d: string;
      result: string;
      img: string;
      alt: string;
    }[];
    resultLabel: string;
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { t: string; d: string }[];
  };
  band: {
    line: string;
    label: string;
  };
  ryo: {
    eyebrow: string;
    name: string;
    nameJp: string;
    imageAlt: string;
    imageCaption: string;
    lead: string;
    text: string;
    supporting: string;
    timeline: { years: string; place: string; placeJp: string }[];
  };
  gallery: {
    title: string;
    sub: string;
    items: { img: string; label: string; alt: string }[];
    note: string;
  };
  contact: {
    headlineA: string;
    headlineB: string;
    text: string;
    addressLabel: string;
    address: string[];
    cta: string;
    map: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const copy: Record<Lang, Copy> = {
  pt: {
    nav: {
      sobre: "Sobre",
      servicos: "Serviços",
      ryo: "Ryo",
      contato: "Contato",
      agendar: "Agendar",
    },
    hero: {
      eyebrow: "Jardim Paulista · São Paulo",
      titleA: "Técnica japonesa.",
      titleB: "Cuidado em cada detalhe.",
      text: "Corte, tratamentos e cuidado capilar no Jardim Paulista, em São Paulo.",
      cta: "Agendar pelo WhatsApp",
      secondary: "Conheça a M2",
      trustLine: "Atendimento individual com avaliação profissional.",
      hours: "Ter – Sáb · 9h às 19h",
      appointment: "Atendimento com hora marcada",
    },
    about: {
      titleA: "Cuidado preciso.",
      titleB: "Resultado pensado para você.",
      textA: "A M2 Hair & Beauty é liderada por ",
      textB:
        " e combina experiência internacional, atenção aos detalhes e técnicas de origem japonesa em um atendimento próximo e individualizado.",
      values: [
        { t: "Técnica", sub: "技術", d: "Precisão e atenção ao acabamento." },
        {
          t: "Experiência",
          sub: "経験",
          d: "Uma trajetória construída entre Japão, América do Norte e São Paulo.",
        },
        {
          t: "Atendimento individual",
          sub: "個別対応",
          d: "Cada atendimento começa entendendo o cabelo e os objetivos de cada cliente.",
        },
      ],
      caption: "Ateliê M2 — Jardim Paulista",
    },
    services: {
      eyebrow: "Serviços",
      title: "Serviços em destaque",
      text: "Cuidados pensados de acordo com o seu cabelo e seus objetivos.",
      resultLabel: "Resultado",
      items: [
        {
          tag: "Precisão",
          name: "Corte",
          sub: "カット",
          d: "Corte de precisão que respeita o movimento natural do cabelo.",
          result: "Movimento natural e acabamento preciso.",
          img: "./images/m2-cut.jpg",
          alt: "Corte bob texturizado com linhas precisas",
        },
        {
          tag: "Alisamento & tratamento",
          name: "Hair Quality Improvement Straightening",
          sub: "髪質改善ストレート",
          d: "Alisamento que trata o fio enquanto transforma a textura.",
          result: "Liso tratado e brilho espelhado.",
          img: "./images/m2-straight.jpg",
          alt: "Cabelo liso com brilho espelhado",
        },
        {
          tag: "Tratamento",
          name: "Tratamento ácido-térmico",
          sub: "酸熱トリートメント",
          d: "Tratamento capilar com foco em alinhamento, toque e acabamento.",
          result: "Alinhamento e toque sedoso.",
          img: "./images/m2-treatment.jpg",
          alt: "Fios brilhantes e alinhados após tratamento",
        },
        {
          tag: "Tecnologia & cuidado",
          name: "Tratamento por infravermelho e ultrassom",
          sub: "赤外線超音波トリートメント",
          d: "Tecnologia aplicada ao cuidado dos fios com avaliação profissional.",
          result: "Fios mais fortes e macios.",
          img: "./images/m2-shine.jpg",
          alt: "Cabelo luminoso durante tratamento",
        },
      ],
      cta: "Falar com a M2 sobre este serviço",
    },
    why: {
      eyebrow: "A experiência",
      title: "Por que escolher a M2",
      sub: "O que torna cada visita diferente.",
      items: [
        {
          t: "Avaliação individual",
          d: "Cada atendimento começa com uma conversa e a leitura atenta do fio.",
        },
        {
          t: "Técnica com atenção ao fio",
          d: "Precisão e atenção aplicadas às características de cada cabelo.",
        },
        {
          t: "Atendimento com hora marcada",
          d: "Atendimento individual, com tempo dedicado ao cabelo.",
        },
        {
          t: "Trajetória internacional",
          d: "Japão, América do Norte e São Paulo.",
        },
      ],
    },
    band: {
      line: "Um cabelo de cada vez — com tempo, atenção e técnica.",
      label: "O ateliê M2 — Jardim Paulista",
    },
    ryo: {
      eyebrow: "Trajetória",
      name: "Ryo Matsunaga",
      nameJp: "松永リョウ",
      imageAlt: "Detalhe de cuidado capilar",
      imageCaption: "Cuidado e atenção ao fio",
      lead: "Uma trajetória construída entre Japão, América do Norte e São Paulo.",
      text: "Ryo está à frente da M2 Hair & Beauty. Informações públicas da M2 registram uma trajetória profissional que passa por Tóquio, cidades da América do Norte e São Paulo, onde atua desde 2011.",
      supporting:
        "Experiência internacional traduzida em atenção ao detalhe, técnica e atendimento individual.",
      timeline: [
        { years: "2000 – 2006", place: "Tokyo", placeJp: "東京" },
        { years: "2006 – 2010", place: "North America", placeJp: "北米" },
        { years: "2011 —", place: "São Paulo", placeJp: "サンパウロ" },
      ],
    },
    gallery: {
      title: "Universo M2",
      sub: "Forma, textura e ambiente",
      items: [
        { img: "./images/m2-straight.jpg", label: "Brilho", alt: "Liso com brilho espelhado" },
        { img: "./images/m2-cut.jpg", label: "Forma", alt: "Corte com movimento natural" },
        { img: "./images/m2-treatment.jpg", label: "Textura", alt: "Textura após tratamento" },
        { img: "./images/m2-salon.jpg", label: "Ambiente", alt: "Imagem conceitual de ambiente de salão" },
      ],
      note: "Imagens conceituais de direção visual. Fotografias autorais podem substituir este material na versão final.",
    },
    contact: {
      headlineA: "Seu próximo corte começa",
      headlineB: "com uma conversa.",
      text: "Conte o que você quer para o seu cabelo. A M2 responde pelo WhatsApp e encontra o melhor horário para você.",
      addressLabel: "Onde estamos",
      address: ["Rua José Maria Lisboa, 208", "Jardim Paulista", "São Paulo — SP"],
      cta: "Agendar pelo WhatsApp",
      map: "Ver no mapa",
    },
    footer: {
      tagline: "Técnica japonesa no Jardim Paulista.",
      rights: "© 2026 M2 Hair & Beauty",
    },
  },
  ja: {
    nav: {
      sobre: "について",
      servicos: "メニュー",
      ryo: "Ryo",
      contato: "アクセス",
      agendar: "ご予約",
    },
    hero: {
      eyebrow: "ジャルジン・パウリスタ · サンパウロ",
      titleA: "日本の技術。",
      titleB: "細部まで、心をこめて。",
      text: "カット、トリートメント、ヘアケア。サンパウロ、ジャルジン・パウリスタのサロンにて。",
      cta: "WhatsAppで予約する",
      secondary: "M2について",
      trustLine: "プロによるカウンセリングと、おひとりおひとりへの対応。",
      hours: "火 – 土 · 9:00 – 19:00",
      appointment: "完全予約制",
    },
    about: {
      titleA: "丁寧な手仕事。",
      titleB: "あなたのための、仕上がり。",
      textA: "M2 Hair & Beauty は ",
      textB:
        " が主宰。国際的な経験と細部への心配り、日本にルーツを持つ技術をかけ合わせ、おひとりおひとりに寄り添う施術を行っています。",
      values: [
        { t: "技術", sub: "Técnica", d: "正確さと、仕上がりの細部へのこだわり。" },
        { t: "経験", sub: "Experiência", d: "日本、北米、そしてサンパウロで培ってきた軌跡。" },
        {
          t: "個別対応",
          sub: "Atendimento individual",
          d: "施術はまず、髪とお客様の目的を理解することから始まります。",
        },
      ],
      caption: "M2 アトリエ — ジャルジン・パウリスタ",
    },
    services: {
      eyebrow: "メニュー",
      title: "注目のメニュー",
      text: "お客様の髪と、なりたい姿に合わせてご提案します。",
      resultLabel: "仕上がり",
      items: [
        {
          tag: "精密カット",
          name: "カット",
          sub: "Corte",
          d: "髪の自然な動きを活かす、正確なカット。",
          result: "自然な動きと、正確な仕上がり。",
          img: "./images/m2-cut.jpg",
          alt: "正確なラインのテクスチャーボブ",
        },
        {
          tag: "ストレート & トリートメント",
          name: "髪質改善ストレート",
          sub: "Hair Quality Improvement Straightening",
          d: "質感を整えながら、扱いやすい髪へ。",
          result: "扱いやすい、艶のあるストレート。",
          img: "./images/m2-straight.jpg",
          alt: "鏡のような艶のストレートヘア",
        },
        {
          tag: "トリートメント",
          name: "酸熱トリートメント",
          sub: "Tratamento ácido-térmico",
          d: "手触りと仕上がりにこだわる、髪のためのトリートメント。",
          result: "まとまりと、なめらかな手触り。",
          img: "./images/m2-treatment.jpg",
          alt: "施術後の艶のある髪",
        },
        {
          tag: "テクノロジー",
          name: "赤外線超音波トリートメント",
          sub: "Tratamento por infravermelho e ultrassom",
          d: "プロの評価のもと、髪のケアに活かすテクノロジー。",
          result: "強く、やわらかな髪へ。",
          img: "./images/m2-shine.jpg",
          alt: "トリートメント中の輝く髪",
        },
      ],
      cta: "このメニューについて相談する",
    },
    why: {
      eyebrow: "体験",
      title: "M2 が選ばれる理由",
      sub: "ひとつひとつの来店で、違うと感じていただけること。",
      items: [
        { t: "個別カウンセリング", d: "施術は会話と、髪の状態の見極めから始まります。" },
        { t: "髪への配慮", d: "一人ひとりの髪に合わせた、正確さと丁寧さ。" },
        { t: "完全予約制", d: "おひとりおひとりの髪に、じっくりと向き合う時間。" },
        { t: "国際的な経験", d: "日本、北米、そしてサンパウロ。" },
      ],
    },
    band: {
      line: "おひとりおひとりの髪に、時間と心をこめて。",
      label: "M2 アトリエ — ジャルジン・パウリスタ",
    },
    ryo: {
      eyebrow: "軌跡",
      name: "Ryo Matsunaga",
      nameJp: "松永リョウ",
      imageAlt: "ヘアケアのディテール",
      imageCaption: "髪と向き合う時間",
      lead: "日本、北米、そしてサンパウロで培ってきた軌跡。",
      text: "RyoがM2 Hair & Beautyを主宰しています。M2の公開情報によれば、そのキャリアは東京、北米の各都市、そして2011年以降はサンパウロへと続いています。",
      supporting: "国際的な経験は、細部への心配り、技術、そして個別の対応に活かされています。",
      timeline: [
        { years: "2000 – 2006", place: "東京", placeJp: "Tokyo" },
        { years: "2006 – 2010", place: "北米", placeJp: "North America" },
        { years: "2011 —", place: "サンパウロ", placeJp: "São Paulo" },
      ],
    },
    gallery: {
      title: "M2 のユニバース",
      sub: "かたち、質感、空間",
      items: [
        { img: "./images/m2-straight.jpg", label: "艶", alt: "艶のあるストレート" },
        { img: "./images/m2-cut.jpg", label: "かたち", alt: "自然な動きのあるカット" },
        { img: "./images/m2-treatment.jpg", label: "質感", alt: "トリートメント後の質感" },
        { img: "./images/m2-salon.jpg", label: "空間", alt: "サロン空間のコンセプトイメージ" },
      ],
      note: "※画像はビジュアル方向のコンセプトです。最終版では正式な写真に差し替えます。",
    },
    contact: {
      headlineA: "次のカットは、",
      headlineB: "会話から始まります。",
      text: "なりたい髪のことを、ぜひお聞かせください。WhatsAppでご相談・ご予約を承ります。",
      addressLabel: "サロン所在地",
      address: ["Rua José Maria Lisboa, 208", "Jardim Paulista", "São Paulo — SP"],
      cta: "WhatsAppで予約する",
      map: "地図を見る",
    },
    footer: {
      tagline: "ジャルジン・パウリスタで、日本の技術を。",
      rights: "© 2026 M2 Hair & Beauty",
    },
  },
};
