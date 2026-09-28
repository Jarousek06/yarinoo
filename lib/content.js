// =============================================================
//  OBSAH WEBU YARINOO  —  TADY UPRAVUJ VSECHNY TEXTY
// =============================================================
//  Vsechny texty na webu jsou na jednom miste, abys je snadno
//  nasel a zmenil. Nemus se hrabat v kodu komponent.
//  Staci prepsat text mezi uvozovkami "...". Nemaz carky ani zavorky.
// =============================================================

// ---- ZAKLADNI INFO / KONTAKT ----
export const brand = {
  name: "YARINOO",
  fullName: "Jaroslav Perlík",
  email: "ahoj@yarinoo.cz", // <- sem dej svuj skutecny e-mail
  handle: "@yarrinooo",
};

// ---- HERO (uvodni obrazovka) ----
export const hero = {
  headline: "YARINOO", // velky napis, pismena nabihaji jedno po druhem
  subline: "Tvořím weby, obsah a vlastní cestu.",
  ctaPrimary: "Moje práce", // scrolluje na portfolio
  ctaSecondary: "Napiš mi", // scrolluje na kontakt
  // Text v bezicim pasu dole. Uprav dle sebe, oddeluj hvezdickou.
  ticker: [
    "BASKETBAL",
    "GYM",
    "BOX",
    "PLAVÁNÍ",
    "WEBY",
    "SOCIAL MEDIA",
    "CONTENT",
  ],
};

// ---- O MNE / MOJE CESTA (timeline) ----
export const journey = {
  kicker: "O MNĚ",
  title: "Moje cesta",
  // Kazdy milnik: rok/stitek + kratky popis (2-3 vety)
  milestones: [
    {
      year: "ZÁKLAD",
      label: "Sport jako základ",
      text: "Basketbal, gym, box a plavání. Sport mě naučil disciplíně, drivu a tomu nevzdat se, když to bolí. Tuhle mentalitu beru do všeho, co dělám.",
    },
    {
      year: "START",
      label: "První weby pro české firmy",
      text: "Začal jsem stavět moderní weby pro malé české firmy. Design i kód pod jednou střechou. Rychlé, čisté a připravené na mobil.",
    },
    {
      year: "RŮST",
      label: "Správa sociálních sítí",
      text: "Přebral jsem správu sociálních sítí pro klienty. Obsah, konzistence a růst dosahu. Od nápadu po hotový příspěvek.",
    },
    {
      year: "BRAND",
      label: "Budování brandu YARINOO",
      text: "Začal jsem budovat vlastní značku YARINOO. Vlastní obsah, vlastní hlas a komunita, která roste každý den.",
    },
    {
      year: "DÁL",
      label: "Co je dál",
      text: "Tady to teprve začíná. Větší projekty, silnější brand a spolupráce, které dávají smysl. Sleduj, kam to poletí.",
    },
  ],
};

// ---- CO DELAM (services) ----
export const services = {
  kicker: "CO DĚLÁM",
  title: "Služby",
  items: [
    {
      title: "Weby",
      desc: "Moderní webovky pro malé firmy — design i kód.",
      link: "Mám zájem",
    },
    {
      title: "Sociální sítě",
      desc: "Správa, obsah a růst dosahu na míru.",
      link: "Mám zájem",
    },
    {
      title: "Content",
      desc: "Krátká videa a budování brandu.",
      link: "Mám zájem",
    },
  ],
};

// ---- PORTFOLIO ----
export const portfolio = {
  kicker: "PORTFOLIO",
  title: "Vybrané projekty",
  // filtry nahore: hodnota "tag" musi sedet s tagy u projektu
  filters: [
    { label: "Vše", value: "all" },
    { label: "Weby", value: "web" },
    { label: "Social", value: "social" },
  ],
  // category: "web" nebo "social" (kvuli filtru)
  // img: screenshot webu | href: odkaz na zivy projekt
  projects: [
    {
      name: "Detede",
      category: "web",
      tag: "WEB",
      oneLiner: "Web pro značku dekorační a stínicí techniky.",
      img: "/img/shot-detede.jpg",
      href: "https://detede.netlify.app/",
    },
    {
      name: "Nicole's Coffee",
      category: "web",
      tag: "WEB",
      oneLiner: "Web pro kavárnu a cukrárnu ve Štětí.",
      img: "/img/shot-nicoles.jpg",
      href: "https://nicolescoffe.lovable.app",
    },
    {
      name: "Autoservis Zeidler",
      category: "web",
      tag: "WEB",
      oneLiner: "Web pro autoservis v Roudnici nad Labem.",
      img: "/img/shot-auto.jpg",
      href: "https://autozvladnuto-online.lovable.app",
    },
    {
      name: "Osobní brand",
      category: "social",
      tag: "SOCIAL",
      oneLiner: "Content a budování značky YARINOO na TikToku.",
      img: "/img/p4-brand.jpg",
      href: "https://www.tiktok.com/@yarrinoo",
    },
  ],
};

// ---- SPORT / DISCIPLINA ----
export const sport = {
  kicker: "DISCIPLÍNA",
  quote:
    "Sport mě naučil disciplínu. Tu samou energii dávám do každého projektu.",
  disciplines: ["Basketbal", "Gym", "Box", "Plavání"],
};

// ---- STATISTIKY (pas s cisly, napocitavaji se pri scrollu) ----
// value = cislo, suffix = co je za cislem ("+", "%", ""), label = popisek
export const stats = {
  items: [
    { value: 4, suffix: "", label: "sportovní disciplíny" },
    { value: 10, suffix: "+", label: "hotových projektů" },
    { value: 3, suffix: "+", label: "roky zkušeností" },
    { value: 100, suffix: "%", label: "energie v každém projektu" },
  ],
};

// ---- SOCIALNI SITE ----
export const socials = {
  kicker: "SLEDUJTE MĚ",
  title: "Kde mě najdeš",
  // href si uprav na svoje skutecne odkazy
  platforms: [
    { name: "TikTok", href: "https://www.tiktok.com/@yarrinoo" },
    { name: "Instagram", href: "https://www.instagram.com/yarrinooo" },
    { name: "Kick", href: "https://kick.com/yarrinooo" },
  ],
};

// ---- KONTAKT ----
export const contact = {
  kicker: "KONTAKT",
  title: "Máš projekt? Pojďme na to.",
  text: "Napiš mi a domluvíme se. Weby, sociální sítě nebo content — rád si poslechnu, co potřebuješ.",
  ctaLabel: "Napiš mi e-mail",
};
