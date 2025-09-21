import { b as createAstro, c as createComponent, d as renderHead, e as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { Globe, Award, Coins, TrendingUp, Heart, Star, Coffee, Mail, Phone, MapPin } from 'lucide-react';

const $$Astro$1 = createAstro("https://inventorsingh.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Swasia"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-white text-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/workspaces/swasia/src/layouts/Layout.astro", void 0);

const translations = {
  en: {
    // Hero Section
    heroTitle: "SWASIA",
    heroQuote: "Building the future together, one child at a time.",
    heroMission: "Empowering children with practical skills that create opportunities and strengthen communities.",
    paisaCourseTitle: "Foundation Course: Paisa",
    paisaCourseDesc: "Teaching children practical money skills that build confidence, create opportunities, and strengthen villages.",
    learnPaisaBtn: "Learn About Paisa",
    viewAwardsBtn: "View Awards Program",
    // Paisa Program
    paisaProgramTitle: "Foundation Course: Paisa",
    paisaProgramDesc: "More than money — Paisa becomes a medium of positive change, sparking innovation in the next generation and laying the foundation for resilient communities.",
    earningTitle: "Earning",
    earningDesc: "Encouraging creativity, skills, and small entrepreneurship",
    usingTitle: "Using",
    usingDesc: "Understanding savings, investment, and generosity",
    raisingTitle: "Raising",
    raisingDesc: "Learning to raise money responsibly with guidance from mentors",
    gamifiedLearningTitle: "Gamified Learning",
    gamifiedLearningDesc: "Children learn through engaging, game-like activities that make financial education fun and culturally rooted. They collaborate, set goals, and build resilience through practice and shared community values.",
    // Awards Program
    awardsTitle: "SWASIA AWARDS",
    awardsDesc: "Children earn certificates as they master skills and help their communities grow.",
    bronzeLevel: "Bronze Level",
    silverLevel: "Silver Level",
    goldLevel: "Gold Level",
    paisaBasics: "Paisa Basics",
    smartManagement: "Smart Management",
    communityLeader: "Community Leader",
    bronzeDesc: "Understanding money fundamentals and basic earning skills",
    silverDesc: "Mastering savings, budgeting, and investment principles",
    goldDesc: "Leading projects that benefit others and raise funds responsibly",
    buildingLeadersTitle: "Building Tomorrow's Leaders",
    buildingLeadersDesc: "Through hands-on learning and community connection, children develop confidence, skills, and the wisdom to create positive change in their villages.",
    sponsorName: "— Gurprit Singh, Sponsor —",
    // Support Section
    supportTitle: "Support the Mission",
    supportDesc: "Every cup of coffee helps fund Paisa education programs and supports children in developing life-changing money management skills. Your contribution directly impacts rural communities and builds resilient futures.",
    supportBtn: "☕ Support Swasia",
    supportNote: "Every contribution, no matter the size, makes a difference in a child's future",
    // Contact Section
    contactTitle: "Join Swasia",
    contactDesc: "Help children in your community develop skills that last a lifetime.",
    email: "Email",
    phone: "Phone",
    focus: "Focus",
    ruralCommunities: "Rural Communities",
    startProgramBtn: "Start a Program",
    partnerBtn: "Partner With Us",
    copyright: "© 2025 Swasia Initiative",
    tagline: "Building futures together"
  },
  hi: {
    // Hero Section
    heroTitle: "स्वासिया",
    heroQuote: "आज का बचपन, कल का समृद्ध भारत।",
    heroMission: "बच्चों को व्यावहारिक कौशल के साथ सशक्त बनाना जो अवसर पैदा करते हैं और समुदायों को मजबूत बनाते हैं।",
    paisaCourseTitle: "आधारभूत पाठ्यक्रम: पैसा",
    paisaCourseDesc: "बच्चों को व्यावहारिक पैसे के कौशल सिखाना जो आत्मविश्वास बढ़ाते हैं, अवसर पैदा करते हैं, और गांवों को मजबूत बनाते हैं।",
    learnPaisaBtn: "पैसे के बारे में जानें",
    viewAwardsBtn: "पुरस्कार कार्यक्रम देखें",
    // Paisa Program
    paisaProgramTitle: "आधारभूत पाठ्यक्रम: पैसा",
    paisaProgramDesc: "सिर्फ पैसे से कहीं अधिक — पैसा सकारात्मक बदलाव का माध्यम बनता है, अगली पीढ़ी में नवाचार को प्रेरित करता है और लचीले समुदायों की नींव रखता है।",
    earningTitle: "कमाना",
    earningDesc: "रचनात्मकता, कौशल और छोटे उद्यमिता को प्रोत्साहित करना",
    usingTitle: "उपयोग",
    usingDesc: "बचत, निवेश और उदारता को समझना",
    raisingTitle: "जुटाना",
    raisingDesc: "सलाहकारों के मार्गदर्शन में जिम्मेदारी से पैसा जुटाना सीखना",
    gamifiedLearningTitle: "गेमिफाइड लर्निंग",
    gamifiedLearningDesc: "बच्चे आकर्षक, खेल-जैसी गतिविधियों के माध्यम से सीखते हैं जो वित्तीय शिक्षा को मजेदार और सांस्कृतिक रूप से जुड़ी बनाती हैं। वे सहयोग करते हैं, लक्ष्य निर्धारित करते हैं, और अभ्यास और साझा सामुदायिक मूल्यों के माध्यम से लचीलापन बनाते हैं।",
    // Awards Program
    awardsTitle: "स्वासिया पुरस्कार",
    awardsDesc: "बच्चे कौशल में महारत हासिल करने और अपने समुदायों की वृद्धि में मदद करने पर प्रमाण पत्र अर्जित करते हैं।",
    bronzeLevel: "कांस्य स्तर",
    silverLevel: "रजत स्तर",
    goldLevel: "स्वर्ण स्तर",
    paisaBasics: "पैसे की मूल बातें",
    smartManagement: "स्मार्ट प्रबंधन",
    communityLeader: "समुदायिक नेता",
    bronzeDesc: "पैसे की मूलभूत समझ और बुनियादी कमाई के कौशल",
    silverDesc: "बचत, बजट और निवेश के सिद्धांतों में महारत",
    goldDesc: "ऐसी परियोजनाओं का नेतृत्व करना जो दूसरों को लाभ पहुंचाती हैं और जिम्मेदारी से फंड जुटाती हैं",
    buildingLeadersTitle: "कल के नेताओं का निर्माण",
    buildingLeadersDesc: "व्यावहारिक शिक्षा और सामुदायिक संपर्क के माध्यम से, बच्चे आत्मविश्वास, कौशल और अपने गांवों में सकारात्मक बदलाव लाने की बुद्धि विकसित करते हैं।",
    sponsorName: "— गुरप्रीत सिंह, प्रायोजक —",
    // Support Section
    supportTitle: "मिशन का समर्थन करें",
    supportDesc: "हर कप कॉफी पैसा शिक्षा कार्यक्रमों को फंड करने में मदद करती है और बच्चों को जीवन बदलने वाले पैसे प्रबंधन कौशल विकसित करने में सहायता करती है। आपका योगदान सीधे ग्रामीण समुदायों को प्रभावित करता है और लचीले भविष्य का निर्माण करता है।",
    supportBtn: "☕ स्वासिया का समर्थन करें",
    supportNote: "हर योगदान, चाहे कितना भी छोटा हो, एक बच्चे के भविष्य में बदलाव लाता है",
    // Contact Section
    contactTitle: "स्वासिया में शामिल हों",
    contactDesc: "अपने समुदाय के बच्चों को ऐसे कौशल विकसित करने में मदद करें जो जीवन भर काम आएं।",
    email: "ईमेल",
    phone: "फोन",
    focus: "फोकस",
    ruralCommunities: "ग्रामीण समुदाय",
    startProgramBtn: "कार्यक्रम शुरू करें",
    partnerBtn: "हमारे साथ साझेदारी करें",
    copyright: "© 2025 स्वासिया पहल",
    tagline: "मिलकर भविष्य का निर्माण"
  }
};
function useTranslation(locale = "hi") {
  return {
    t: (key) => translations[locale][key] || translations.en[key],
    locale
  };
}

function LanguageSwitcher({ currentLocale }) {
  const switchLanguage = (locale) => {
    const currentPath = window.location.pathname;
    const baseUrl = "/swasia";
    if (locale === "hi") {
      const newPath = currentPath.replace(/\/en/, "");
      window.location.href = newPath || baseUrl;
    } else {
      const cleanPath = currentPath.replace(baseUrl, "").replace(/\/en/, "");
      window.location.href = `${baseUrl}/en${cleanPath}`;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2", children: [
    /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-gray-600" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => switchLanguage("hi"),
        className: `px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${currentLocale === "hi" ? "bg-red-800 text-white" : "text-gray-600 hover:bg-gray-100"}`,
        children: "हिं"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => switchLanguage("en"),
        className: `px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${currentLocale === "en" ? "bg-red-800 text-white" : "text-gray-600 hover:bg-gray-100"}`,
        children: "EN"
      }
    )
  ] }) });
}

function HeroSection({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  return /* @__PURE__ */ jsxs("section", { className: "min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative", children: [
    /* @__PURE__ */ jsx(LanguageSwitcher, { currentLocale: locale }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full mx-auto mb-8 border-4 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/swasia/swasia-logo.png",
          alt: "Swasia Logo",
          className: "w-40 h-40 object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-7xl font-bold text-red-800 mb-8 tracking-wide", children: t("heroTitle") }),
      /* @__PURE__ */ jsxs("blockquote", { className: "text-xl md:text-2xl text-red-800 italic mb-8 max-w-3xl mx-auto", children: [
        '"',
        t("heroQuote"),
        '"'
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-red-700 mb-8 max-w-2xl mx-auto leading-relaxed", children: t("heroMission") }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-lg border-2 border-red-800 mb-8 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-red-700" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-800", children: t("paisaCourseTitle") })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-red-700", children: t("paisaCourseDesc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => document.getElementById("paisa-section")?.scrollIntoView({ behavior: "smooth" }),
            className: "px-8 py-4 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg",
            children: t("learnPaisaBtn")
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => document.getElementById("awards-section")?.scrollIntoView({ behavior: "smooth" }),
            className: "px-8 py-4 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-50 transition-all duration-200 font-medium",
            children: t("viewAwardsBtn")
          }
        )
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://inventorsingh.github.io");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { locale = "hi" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "HeroSection", HeroSection, { "locale": locale, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/swasia/src/components/HeroSection", "client:component-export": "default" })}`;
}, "/workspaces/swasia/src/components/Hero.astro", void 0);

function PaisaProgram({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  const paisaComponents = [
    {
      icon: Coins,
      title: t("earningTitle"),
      description: t("earningDesc"),
      color: "text-yellow-700"
    },
    {
      icon: TrendingUp,
      title: t("usingTitle"),
      description: t("usingDesc"),
      color: "text-red-700"
    },
    {
      icon: Heart,
      title: t("raisingTitle"),
      description: t("raisingDesc"),
      color: "text-orange-700"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "paisa-section", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-red-800 mb-6", children: t("paisaProgramTitle") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-red-700 max-w-3xl mx-auto", children: t("paisaProgramDesc") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: paisaComponents.map((component, index) => {
      const Icon = component.icon;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 border-2 border-red-700 hover:shadow-lg transition-all duration-300",
          children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-yellow-200" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-800 mb-4", children: component.title }),
            /* @__PURE__ */ jsx("p", { className: "text-red-700 leading-relaxed", children: component.description })
          ] })
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-12 border-2 border-red-800 shadow-lg text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/swasia/swasia-logo.png",
          alt: "Swasia Logo",
          className: "w-24 h-24 object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-red-800 mb-6", children: t("gamifiedLearningTitle") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-red-700 max-w-3xl mx-auto leading-relaxed", children: t("gamifiedLearningDesc") })
    ] })
  ] }) });
}

function AwardsProgram({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  const certificationLevels = [
    {
      level: t("bronzeLevel"),
      title: t("paisaBasics"),
      description: t("bronzeDesc"),
      color: "text-orange-700",
      medalColor: "from-orange-400 to-yellow-500"
    },
    {
      level: t("silverLevel"),
      title: t("smartManagement"),
      description: t("silverDesc"),
      color: "text-gray-700",
      medalColor: "from-gray-300 to-gray-400"
    },
    {
      level: t("goldLevel"),
      title: t("communityLeader"),
      description: t("goldDesc"),
      color: "text-yellow-700",
      medalColor: "from-yellow-400 to-amber-500"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "awards-section", className: "py-20 bg-gradient-to-br from-yellow-50 to-orange-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/swasia/swasia-logo.png",
          alt: "Swasia Logo",
          className: "w-28 h-28 object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-red-800 mb-6", children: t("awardsTitle") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-red-700 max-w-3xl mx-auto", children: t("awardsDesc") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: certificationLevels.map((cert, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-white rounded-2xl p-8 border-2 border-red-700 hover:shadow-lg transition-all duration-300",
        children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: `w-20 h-20 bg-gradient-to-br ${cert.medalColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-red-800`, children: /* @__PURE__ */ jsx(Award, { className: "w-10 h-10 text-red-800" }) }),
          /* @__PURE__ */ jsx("div", { className: `inline-block px-6 py-2 rounded-full text-lg font-bold mb-4 ${cert.color} bg-yellow-100 border-2 border-red-700`, children: cert.level }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-800 mb-4", children: cert.title }),
          /* @__PURE__ */ jsx("p", { className: "text-red-700 leading-relaxed", children: cert.description })
        ] })
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-12 shadow-lg border-2 border-red-800 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-8 h-8 text-yellow-600" }),
        /* @__PURE__ */ jsx(Star, { className: "w-10 h-10 text-yellow-600" }),
        /* @__PURE__ */ jsx(Star, { className: "w-8 h-8 text-yellow-600" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-red-800 mb-6", children: t("buildingLeadersTitle") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-red-700 max-w-4xl mx-auto leading-relaxed", children: t("buildingLeadersDesc") }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx("p", { className: "text-red-800 font-semibold", children: t("sponsorName") }) })
    ] })
  ] }) });
}

function SupportSwasia({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-yellow-50 to-orange-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 md:p-12 border-2 border-red-800 shadow-lg", children: [
    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-800", children: /* @__PURE__ */ jsx(Coffee, { className: "w-8 h-8 text-red-700" }) }),
    /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-red-800", children: t("supportTitle") }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-red-700 mb-8 max-w-2xl mx-auto", children: t("supportDesc") }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://buymeacoffee.com/inventor.singh",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl border-2 border-yellow-300",
        "aria-label": "Support the Swasia Project",
        children: [
          /* @__PURE__ */ jsx(Coffee, { className: "w-6 h-6" }),
          t("supportBtn"),
          /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-red-600" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 mt-4 font-medium", children: t("supportNote") })
  ] }) }) });
}

function ContactSection({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-yellow-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6 tracking-wide", children: t("contactTitle") }),
    /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed", children: t("contactDesc") }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-red-700/30 rounded-2xl p-6 border-2 border-yellow-400/30", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-red-800" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-yellow-300", children: t("email") }),
        /* @__PURE__ */ jsx("p", { className: "text-yellow-100", children: "Singh.Gurprit@outlook.com" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-red-700/30 rounded-2xl p-6 border-2 border-yellow-400/30", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-red-800" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-yellow-300", children: t("phone") }),
        /* @__PURE__ */ jsx("p", { className: "text-yellow-100", children: "+1 438 722 3299" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-red-700/30 rounded-2xl p-6 border-2 border-yellow-400/30", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-red-800" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-yellow-300", children: t("focus") }),
        /* @__PURE__ */ jsx("p", { className: "text-yellow-100", children: t("ruralCommunities") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:Singh.Gurprit@outlook.com?subject=Starting a Swasia Program&body=Hi, I'm interested in starting a Swasia program in my community.",
          className: "px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 font-bold shadow-lg border-2 border-yellow-300",
          children: t("startProgramBtn")
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:Singh.Gurprit@outlook.com?subject=Partnership Opportunity&body=Hi, I'd like to discuss partnering with Swasia.",
          className: "px-8 py-4 border-2 border-yellow-400 text-yellow-100 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200 font-medium",
          children: t("partnerBtn")
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t-2 border-yellow-400/30 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-yellow-200 text-lg", children: t("copyright") }),
      /* @__PURE__ */ jsx("p", { className: "text-yellow-300 italic mt-2", children: t("tagline") })
    ] })
  ] }) });
}

export { $$Layout as $, AwardsProgram as A, ContactSection as C, PaisaProgram as P, SupportSwasia as S, $$Hero as a };
