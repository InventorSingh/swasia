import { b as createAstro, c as createComponent, d as renderHead, e as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { Globe, Award, Sprout, Droplets, Package, Users, ShoppingCart, BookOpen, Calendar, Download, Star, Coffee, Heart, Mail, Phone, MapPin } from 'lucide-react';

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
    foundationCourseTitle: "Foundation Course: Grow with Nature",
    foundationCourseDesc: "Ages 6-12 learn agriculture, entrepreneurship, and sustainability through hands-on experience from seeds to harvest.",
    learnMoreBtn: "Learn More",
    viewAwardsBtn: "View Awards Program",
    viewProductsBtn: "View Products",
    // Nature Course
    natureCourseTitle: "Foundation Course: Grow with Nature",
    natureCourseSubtitle: "Target Students: Ages 6–12 | Duration: 4 Weeks (Pilot Program) | Locations: Village Plots, Showrooms in Uchana & Narwana",
    courseBasics: "At Swasia, we believe learning is best when hands, hearts, and minds work together with nature.",
    courseOverviewTitle: "4-Week Course Journey",
    week1Title: "Week 1",
    week1Theme: "Meet the Land",
    week1Activities: "Soil exploration, composting, planting fast-growing seeds, making plant labels",
    week2Title: "Week 2",
    week2Theme: "Water & Care",
    week2Activities: "Watering techniques, indoor planting, building mini water-saving systems",
    week3Title: "Week 3",
    week3Theme: "Harvest & Make",
    week3Activities: "Harvesting greens/herbs, drying, grinding, packaging for sale",
    week4Title: "Week 4",
    week4Theme: "Share & Reflect",
    week4Activities: "Mini-market setup, showcase products, reflection, feedback",
    dailyScheduleTitle: "Daily Schedule (3 Hours)",
    morningCircle: "Morning Circle (15 min)",
    morningCircleDesc: "Share observations and nature stories",
    handsInSoil: "Hands in Soil (30-45 min)",
    handsInSoilDesc: "Plant, water, and care for plots",
    creativeHour: "Creative Hour (30 min)",
    creativeHourDesc: "Eco-products, labels, or crafts",
    reflectionJournal: "Reflection Journal (15-30 min)",
    reflectionJournalDesc: "Note observations and ideas",
    miniWorkshops: "Mini Workshops / Market",
    miniWorkshopsDesc: "Sell or showcase products (as scheduled)",
    whySwasiaWorksTitle: "Why Swasia Works",
    learningByDoing: "Learning by Doing",
    learningByDoingDesc: "Combines theoretical knowledge with practical hands-on experience",
    realWorldOutputs: "Real-World Outputs",
    realWorldOutputsDesc: "Produces actual food, eco-products that students can sell and use",
    sustainableVision: "Sustainable Vision",
    sustainableVisionDesc: "Instills long-term thinking for resilient ecosystems and communities",
    // Products Section
    productsTitle: "Swasia Products & Resources",
    productsDesc: "Quality seeds, guides, and tools to grow your own thriving indoor ecosystem at home.",
    bananaePepperTitle: "Banana Pepper",
    organicSeeds: "Organic Seeds",
    featuredProduct: "Featured Product",
    bananaePepperDesc: "Premium organic banana pepper seeds perfect for indoor gardening. Easy to grow, these peppers add flavor to your meals while teaching children about plant growth cycles.",
    buyNowBtn: "Buy Now",
    seedGuideTitle: "🌱 Swasia Seed-to-Plant Guide",
    seedGuideDesc: "A comprehensive guide showing when to collect seeds and when to plant them, with simple methods that even kids can follow.",
    downloadGuideBtn: "Download Free Guide (PDF)",
    tomato: "Tomato",
    bananaePepper: "Banana Pepper",
    basil: "Basil",
    mint: "Mint",
    cilantro: "Cilantro",
    beans: "Beans",
    marigold: "Marigold",
    aloe: "Aloe Vera",
    spiderPlant: "Spider Plant",
    nasturtium: "Nasturtium",
    yearRound: "Year-round",
    collect: "Collect",
    plant: "Plant",
    comingSoonTitle: "Coming Soon",
    organicSeedKit: "Organic Seed Kit",
    organicSeedKitDesc: "Complete starter kit with 10 varieties of organic seeds for indoor gardening",
    gardeningWorkbook: "Children's Gardening Workbook",
    gardeningWorkbookDesc: "Interactive workbook with activities, growth charts, and learning exercises",
    seasonalCalendar: "Seasonal Planting Calendar",
    seasonalCalendarDesc: "Month-by-month guide for what to plant when in your local climate",
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
    awardsTitle: "SWASIA NATURE AWARDS",
    awardsDesc: "Children earn certificates as they master agricultural skills and help their communities grow.",
    bronzeLevel: "Bronze Level",
    silverLevel: "Silver Level",
    goldLevel: "Gold Level",
    paisaBasics: "Nature Explorer",
    smartManagement: "Garden Guardian",
    communityLeader: "Eco Entrepreneur",
    bronzeDesc: "Understanding soil, seeds, and basic plant care fundamentals",
    silverDesc: "Mastering composting, water conservation, and sustainable growing",
    goldDesc: "Leading projects that create eco-products and support community gardens",
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
    foundationCourseTitle: "आधारभूत पाठ्यक्रम: प्रकृति के साथ बढ़ना",
    foundationCourseDesc: "6-12 साल के बच्चे बीज से फसल तक के व्यावहारिक अनुभव के माध्यम से कृषि, उद्यमिता और स्थिरता सीखते हैं।",
    learnMoreBtn: "और जानें",
    viewAwardsBtn: "पुरस्कार कार्यक्रम देखें",
    viewProductsBtn: "उत्पाद देखें",
    // Nature Course
    natureCourseTitle: "आधारभूत पाठ्यक्रम: प्रकृति के साथ बढ़ना",
    natureCourseSubtitle: "लक्षित छात्र: 6–12 साल | अवधि: 4 सप्ताह (पायलट कार्यक्रम) | स्थान: गांव के खेत, उचाना और नरवाना में शोरूम",
    courseBasics: "स्वासिया में, हमारा मानना है कि सीखना तब सबसे अच्छा होता है जब हाथ, दिल और दिमाग प्रकृति के साथ मिलकर काम करते हैं।",
    courseOverviewTitle: "4 सप्ताह की कोर्स यात्रा",
    week1Title: "सप्ताह 1",
    week1Theme: "भूमि से मुलाकात",
    week1Activities: "मिट्टी की खोज, कंपोस्टिंग, तेजी से उगने वाले बीज बोना, पौधों के लेबल बनाना",
    week2Title: "सप्ताह 2",
    week2Theme: "पानी और देखभाल",
    week2Activities: "पानी देने की तकनीक, इनडोर रोपण, मिनी जल संरक्षण सिस्टम बनाना",
    week3Title: "सप्ताह 3",
    week3Theme: "फसल और निर्माण",
    week3Activities: "साग/जड़ी-बूटियों की कटाई, सुखाना, पीसना, बिक्री के लिए पैकेजिंग",
    week4Title: "सप्ताह 4",
    week4Theme: "साझा करना और चिंतन",
    week4Activities: "मिनी-मार्केट सेटअप, उत्पादों का प्रदर्शन, चिंतन, फीडबैक",
    dailyScheduleTitle: "दैनिक कार्यक्रम (3 घंटे)",
    morningCircle: "मॉर्निंग सर्कल (15 मिनट)",
    morningCircleDesc: "अवलोकन और प्रकृति की कहानियां साझा करना",
    handsInSoil: "मिट्टी में हाथ (30-45 मिनट)",
    handsInSoilDesc: "खेतों में पौधे लगाना, पानी देना और देखभाल करना",
    creativeHour: "रचनात्मक घंटा (30 मिनट)",
    creativeHourDesc: "इको-प्रोडक्ट्स, लेबल या शिल्प कार्य",
    reflectionJournal: "चिंतन डायरी (15-30 मिनट)",
    reflectionJournalDesc: "अवलोकन और विचारों को नोट करना",
    miniWorkshops: "मिनी वर्कशॉप / मार्केट",
    miniWorkshopsDesc: "उत्पादों को बेचना या प्रदर्शित करना (निर्धारित समय के अनुसार)",
    whySwasiaWorksTitle: "स्वासिया क्यों काम करता है",
    learningByDoing: "करके सीखना",
    learningByDoingDesc: "सैद्धांतिक ज्ञान को व्यावहारिक अनुभव के साथ जोड़ता है",
    realWorldOutputs: "वास्तविक दुनिया के परिणाम",
    realWorldOutputsDesc: "वास्तविक भोजन, इको-प्रोडक्ट्स का उत्पादन जिन्हें छात्र बेच और उपयोग कर सकते हैं",
    sustainableVision: "टिकाऊ दृष्टिकोण",
    sustainableVisionDesc: "लचीले पारिस्थितिकी तंत्र और समुदायों के लिए दीर्घकालिक सोच पैदा करता है",
    // Products Section
    productsTitle: "स्वासिया उत्पाद और संसाधन",
    productsDesc: "घर पर अपना समृद्ध इनडोर पारिस्थितिकी तंत्र विकसित करने के लिए गुणवत्तापूर्ण बीज, गाइड और उपकरण।",
    bananaePepperTitle: "केला मिर्च",
    organicSeeds: "जैविक बीज",
    featuredProduct: "विशेष उत्पाद",
    bananaePepperDesc: "इनडोर बागवानी के लिए बेहतरीन जैविक केला मिर्च के बीज। उगाने में आसान, ये मिर्च आपके भोजन में स्वाद जोड़ते हैं और बच्चों को पौधों के विकास चक्र के बारे में सिखाते हैं।",
    buyNowBtn: "अभी खरीदें",
    seedGuideTitle: "🌱 स्वासिया बीज-से-पौधा गाइड",
    seedGuideDesc: "एक व्यापक गाइड जो दिखाता है कि बीज कब इकट्ठा करें और कब लगाएं, सरल तरीकों के साथ जिन्हें बच्चे भी फॉलो कर सकते हैं।",
    downloadGuideBtn: "मुफ्त गाइड डाउनलोड करें (PDF)",
    tomato: "टमाटर",
    bananaePepper: "केला मिर्च",
    basil: "तुलसी",
    mint: "पुदीना",
    cilantro: "धनिया",
    beans: "सेम",
    marigold: "गेंदा",
    aloe: "एलो वेरा",
    spiderPlant: "स्पाइडर प्लांट",
    nasturtium: "नास्टर्टियम",
    yearRound: "साल भर",
    collect: "इकट्ठा करें",
    plant: "लगाएं",
    comingSoonTitle: "जल्दी आ रहा है",
    organicSeedKit: "जैविक बीज किट",
    organicSeedKitDesc: "इनडोर बागवानी के लिए 10 किस्मों के जैविक बीजों के साथ पूरा स्टार्टर किट",
    gardeningWorkbook: "बच्चों की बागवानी कार्यपुस्तिका",
    gardeningWorkbookDesc: "गतिविधियों, विकास चार्ट और सीखने के अभ्यासों के साथ इंटरैक्टिव कार्यपुस्तिका",
    seasonalCalendar: "मौसमी रोपण कैलेंडर",
    seasonalCalendarDesc: "आपकी स्थानीय जलवायु में कब क्या लगाना है, इसके लिए महीना-दर-महीना गाइड",
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
    awardsTitle: "स्वासिया प्रकृति पुरस्कार",
    awardsDesc: "बच्चे कृषि कौशल में महारत हासिल करने और अपने समुदायों की वृद्धि में मदद करने पर प्रमाण पत्र अर्जित करते हैं।",
    bronzeLevel: "कांस्य स्तर",
    silverLevel: "रजत स्तर",
    goldLevel: "स्वर्ण स्तर",
    paisaBasics: "प्रकृति खोजकर्ता",
    smartManagement: "बगीचा संरक्षक",
    communityLeader: "इको उद्यमी",
    bronzeDesc: "मिट्टी, बीज और बुनियादी पौधों की देखभाल की समझ",
    silverDesc: "कंपोस्टिंग, जल संरक्षण और टिकाऊ खेती में महारत",
    goldDesc: "ऐसी परियोजनाओं का नेतृत्व करना जो इको-प्रोडक्ट्स बनाती हैं और सामुदायिक बगीचों का समर्थन करती हैं",
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
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-8 shadow-lg border-2 border-red-800 mb-8 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-red-700" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-800", children: t("foundationCourseTitle") })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-red-700", children: t("foundationCourseDesc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => document.getElementById("nature-course-section")?.scrollIntoView({ behavior: "smooth" }),
            className: "px-8 py-4 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg",
            children: t("learnMoreBtn")
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" }),
            className: "px-8 py-4 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-50 transition-all duration-200 font-medium",
            children: t("viewProductsBtn")
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

function NatureCourse({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  return /* @__PURE__ */ jsx("section", { id: "nature-course-section", className: "py-20 bg-gradient-to-br from-green-50 to-yellow-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/swasia/swasia-logo.png",
          alt: "Swasia Logo",
          className: "w-28 h-28 object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-red-800 mb-6", children: t("natureCourseTitle") }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg text-red-700 mb-4", children: t("natureCourseSubtitle") }),
        /* @__PURE__ */ jsx("div", { className: "bg-yellow-100 rounded-lg p-4 border-2 border-red-200", children: /* @__PURE__ */ jsx("p", { className: "text-red-800 font-medium", children: t("courseBasics") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-red-800 mb-8 text-center", children: t("courseOverviewTitle") }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto", children: /* @__PURE__ */ jsx(Sprout, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-3 text-center", children: t("week1Title") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-700 text-sm mb-3 text-center font-medium", children: t("week1Theme") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("week1Activities") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto", children: /* @__PURE__ */ jsx(Droplets, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-3 text-center", children: t("week2Title") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-700 text-sm mb-3 text-center font-medium", children: t("week2Theme") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("week2Activities") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-100 to-orange-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto", children: /* @__PURE__ */ jsx(Package, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-3 text-center", children: t("week3Title") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-700 text-sm mb-3 text-center font-medium", children: t("week3Theme") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("week3Activities") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-3 text-center", children: t("week4Title") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-700 text-sm mb-3 text-center font-medium", children: t("week4Theme") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("week4Activities") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 border-2 border-red-800 shadow-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-red-800 mb-6 text-center", children: t("dailyScheduleTitle") }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-2", children: t("morningCircle") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("morningCircleDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-2", children: t("handsInSoil") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("handsInSoilDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-2", children: t("creativeHour") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("creativeHourDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-2", children: t("reflectionJournal") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("reflectionJournalDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-red-200 md:col-span-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-2", children: t("miniWorkshops") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("miniWorkshopsDesc") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-red-800 mb-8", children: t("whySwasiaWorksTitle") }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 shadow-lg border-2 border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-3", children: t("learningByDoing") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("learningByDoingDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 shadow-lg border-2 border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-3", children: t("realWorldOutputs") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("realWorldOutputsDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 shadow-lg border-2 border-red-200", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 mb-3", children: t("sustainableVision") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: t("sustainableVisionDesc") })
        ] })
      ] })
    ] })
  ] }) });
}

function ProductsSection({ locale = "hi" }) {
  const { t } = useTranslation(locale);
  return /* @__PURE__ */ jsx("section", { id: "products-section", className: "py-20 bg-gradient-to-br from-amber-50 to-green-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/swasia/swasia-logo.png",
          alt: "Swasia Logo",
          className: "w-28 h-28 object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-red-800 mb-6", children: t("productsTitle") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-red-700 max-w-3xl mx-auto", children: t("productsDesc") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mb-16", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 border-3 border-red-800 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-1/3", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl p-6 shadow-lg border-2 border-red-700", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx(Sprout, { className: "w-16 h-16 text-red-700 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-800 mb-2", children: t("bananaePepperTitle") }),
        /* @__PURE__ */ jsx("p", { className: "text-red-600 font-medium", children: t("organicSeeds") })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-3xl font-bold text-red-800 mb-4", children: t("featuredProduct") }),
        /* @__PURE__ */ jsx("p", { className: "text-red-700 mb-6 text-lg leading-relaxed", children: t("bananaePepperDesc") }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxs("button", { className: "px-8 py-3 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ShoppingCart, { className: "w-5 h-5" }),
            t("buyNowBtn")
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "px-8 py-3 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-50 transition-all duration-200 font-medium flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }),
            t("learnMoreBtn")
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-green-100 to-yellow-100 rounded-3xl p-8 border-3 border-red-800 shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "w-12 h-12 text-red-700 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-red-800 mb-4", children: t("seedGuideTitle") }),
        /* @__PURE__ */ jsx("p", { className: "text-red-700 text-lg max-w-3xl mx-auto mb-6", children: t("seedGuideDesc") }),
        /* @__PURE__ */ jsxs("button", { className: "px-8 py-4 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg flex items-center gap-2 mx-auto", children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          t("downloadGuideBtn")
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8", children: [
        { name: t("tomato"), collection: "Aug-Sep", plantation: "Feb-Mar" },
        { name: t("bananaePepper"), collection: "Aug-Sep", plantation: "Feb-Mar" },
        { name: t("basil"), collection: "Jul-Aug", plantation: "Feb-Mar" },
        { name: t("mint"), collection: "Jul-Aug", plantation: "Feb-Mar" },
        { name: t("cilantro"), collection: "May-Jun", plantation: "Feb-Mar" },
        { name: t("beans"), collection: "Sep-Oct", plantation: "Mar-Apr" },
        { name: t("marigold"), collection: "Aug-Sep", plantation: "Mar-Apr" },
        { name: t("aloe"), collection: "Spring", plantation: "Spring" },
        { name: t("spiderPlant"), collection: t("yearRound"), plantation: t("yearRound") },
        { name: t("nasturtium"), collection: "Aug-Sep", plantation: "Apr-May" }
      ].map((plant, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-3 border-2 border-red-600 shadow-md text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-red-700 rounded-full mx-auto mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsx(Sprout, { className: "w-4 h-4 text-white" }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-800 text-sm mb-1", children: plant.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-red-600 mb-1", children: [
          t("collect"),
          ": ",
          plant.collection
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-red-600", children: [
          t("plant"),
          ": ",
          plant.plantation
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-800 mb-8", children: t("comingSoonTitle") }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 border-2 border-red-700 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Sprout, { className: "w-8 h-8 text-red-700" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-2", children: t("organicSeedKit") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600", children: t("organicSeedKitDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 border-2 border-red-700 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-8 h-8 text-red-700" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-2", children: t("gardeningWorkbook") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600", children: t("gardeningWorkbookDesc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 border-2 border-red-700 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Calendar, { className: "w-8 h-8 text-red-700" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-red-800 mb-2", children: t("seasonalCalendar") }),
          /* @__PURE__ */ jsx("p", { className: "text-red-600", children: t("seasonalCalendarDesc") })
        ] })
      ] })
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

export { $$Layout as $, AwardsProgram as A, ContactSection as C, NatureCourse as N, ProductsSection as P, SupportSwasia as S, $$Hero as a };
