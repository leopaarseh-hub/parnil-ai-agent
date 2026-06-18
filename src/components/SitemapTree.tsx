import React from 'react';
import { Network, Home, FolderKanban, Info, Contact, BookOpen, ShoppingBag, Eye, HelpCircle } from 'lucide-react';

interface SitemapTreeProps {
  pages: string[];
  activeLang?: 'de' | 'en' | 'tr' | 'fa';
}

const PAGE_ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="h-4.5 w-4.5 text-accent-gold" />,
  About: <Info className="h-4.5 w-4.5 text-blue-400" />,
  Services: <FolderKanban className="h-4.5 w-4.5 text-purple-400" />,
  Portfolio: <Eye className="h-4.5 w-4.5 text-emerald-400" />,
  Contact: <Contact className="h-4.5 w-4.5 text-rose-400" />,
  Blog: <BookOpen className="h-4.5 w-4.5 text-amber-400" />,
  Shop: <ShoppingBag className="h-4.5 w-4.5 text-teal-400" />
};

function normalizePageKey(pageName: string): 'Home' | 'About' | 'Services' | 'Portfolio' | 'Contact' | 'Blog' | 'Shop' | string {
  const name = pageName.toLowerCase().trim();
  
  if (/home|start|ana|خانه|اصلی/.test(name)) return 'Home';
  if (/about|über|hakk|درباره|پیشینه/.test(name)) return 'About';
  if (/service|dienst|hizmet|خدمات|کارها/.test(name)) return 'Services';
  if (/portfolio|referenz|referans|نمونه|پروژه/.test(name)) return 'Portfolio';
  if (/contact|kontakt|iletişim|تماس|ارتباط/.test(name)) return 'Contact';
  if (/blog|news|haber|وبلاگ|خبر/.test(name)) return 'Blog';
  if (/shop|store|mağaza|فروشگاه|خرید/.test(name)) return 'Shop';
  
  return pageName;
}

const SITEMAP_TRANSLATIONS: Record<'de' | 'en' | 'tr' | 'fa', {
  hierarchyBlueprint: string;
  recommendedStructure: string;
  mapDepth: string;
  routingActive: string;
  primaryLanding: string;
  fallbackTag: string;
  fallbackDesc: string;
  fallbackRole: string;
  conversionVector: string;
  pages: Record<string, {
    title: string;
    tag: string;
    desc: string;
    conversionRole: string;
  }>;
}> = {
  de: {
    hierarchyBlueprint: "HIERARCHIEBLAU-PAUSE",
    recommendedStructure: "Empfohlene Sitemap-Struktur",
    mapDepth: "KARTENTIEFE: Ebene 2",
    routingActive: "● VERSCHLÜSSELTES ROUTING AKTIV",
    primaryLanding: "HAUPT-LANDINGPAGE",
    fallbackTag: "Zusatzseite",
    fallbackDesc: "Strategischer, dynamischer Inhaltsbereich, der auf die zentralen Unternehmensziele abgestimmt ist.",
    fallbackRole: "Markenvertrauen & Nutzerbindung",
    conversionVector: "KONVERSIONSVEKTOR:",
    pages: {
      Home: {
        title: "STARTSEITE",
        tag: "Flaggschiff-Einstieg",
        desc: "Präsentation des Serviceangebots, interaktive Referenzen, dynamische Produktübersichten und direkte Kontaktanbahnung.",
        conversionRole: "Markenidentität & Direkte Nutzerführung"
      },
      About: {
        title: "ÜBER UNS",
        tag: "Unternehmensstory",
        desc: "Details zu Expertise, Unternehmenswerten, interaktiven Meilensteinen und Teamvorstellung.",
        conversionRole: "Vertrauensaufbau & Glaubwürdigkeit"
      },
      Services: {
        title: "LEISTUNGEN",
        tag: "Kompetenz-Katalog",
        desc: "Strukturierte Leistungsbereiche, technische Kompetenzen, transparente Prozesse und Preisanfragen.",
        conversionRole: "Leistungsbeschreibung & Aktivierung"
      },
      Portfolio: {
        title: "PORTFOLIO",
        tag: "Referenz-Galerie",
        desc: "Interaktive Fallstudien, dynamische Projektauswahl und hochauflösende Medienberichte.",
        conversionRole: "Praktischer Nachweis von Qualität & Kreativität"
      },
      Contact: {
        title: "KONTAKT",
        tag: "Anlaufstelle",
        desc: "Sofortiges Lead-Formular, interaktive Karte, direkte Terminbuchung und Zeitzonendetails.",
        conversionRole: "Direkte Neukundengewinnung & Anfragen"
      },
      Blog: {
        title: "BLOG",
        tag: "Fachmagazin",
        desc: "Aktuelle Fachbeiträge, redaktioneller Inhalt und Formulare zur Newsletter-Anmeldung.",
        conversionRole: "Organische SEO-Reichweite & Markenkompetenz"
      },
      Shop: {
        title: "SHOP",
        tag: "E-Commerce-Engine",
        desc: "Schneller Check-out-Prozess, strukturierte Produktansichten und sichere Bezahlungsabwicklung.",
        conversionRole: "Direkte digitale Umsatzgenerierung"
      }
    }
  },
  en: {
    hierarchyBlueprint: "HIERARCHY BLUEPRINT",
    recommendedStructure: "Recommended Sitemap Structure",
    mapDepth: "MAP DEPTH: level 2",
    routingActive: "● ENCRYPTED ROUTING ACTIVE",
    primaryLanding: "PRIMARY LANDING",
    fallbackTag: "Support Screen",
    fallbackDesc: "Strategic dynamic content viewport aligned with core organizational standards.",
    fallbackRole: "Enhance Brand Trust & UX Loyalty",
    conversionVector: "CONVERSION VECTOR:",
    pages: {
      Home: {
        title: "HOME",
        tag: "Flagship Entry",
        desc: "Bespoke hero viewport, interactive credentials, dynamic product loops, and contact kickoff hook.",
        conversionRole: "Core Brand Alignment & Direct Navigation Router"
      },
      About: {
        title: "ABOUT",
        tag: "Narrative Pillar",
        desc: "Agency/Corporate pedigree details, core mission values, visual interactive milestones, and team index.",
        conversionRole: "Build Credibility, Trust, and Interpersonal Alignment"
      },
      Services: {
        title: "SERVICES",
        tag: "Capabilities Catalog",
        desc: "Structured tiers, technical competencies, transparent process matrix, and pricing setups.",
        conversionRole: "Clarify Deliverables & Prime Users for Action"
      },
      Portfolio: {
        title: "PORTFOLIO",
        tag: "High-Fidelity Showcase",
        desc: "Interactive grid, modular filter chips, dynamic client case studies, and full-resolution media screens.",
        conversionRole: "Empirical Evidence of Craft & Creative Execution"
      },
      Contact: {
        title: "CONTACT",
        tag: "Action Hub",
        desc: "Instant lead-mapping inputs, geographic dynamic maps, direct calendar schedules, and global timezone clocks.",
        conversionRole: "Main Contact/Inbound Lead Generation Gateway"
      },
      Blog: {
        title: "BLOG",
        tag: "Editorial Hub",
        desc: "Dynamic catalog sorting, rich markdown typography, customizable newsletter collection forms.",
        conversionRole: "Inbound SEO Keyword Arbitrage & Brand Authority"
      },
      Shop: {
        title: "SHOP",
        tag: "Transactional Engine",
        desc: "Headless fast Checkout flow, robust filter matrices, stripe integrations, and digital secure product delivery.",
        conversionRole: "Direct-to-Consumer Core Revenue Conversion Block"
      }
    }
  },
  tr: {
    hierarchyBlueprint: "HİYERARŞİ PLANI",
    recommendedStructure: "Önerilen Site Haritası Yapısı",
    mapDepth: "HARİTA DERİNLİĞİ: Seviye 2",
    routingActive: "● ŞİFRELİ YÖNLENDİRME AKTİF",
    primaryLanding: "ANA GİRİŞ SAYFASI",
    fallbackTag: "Destek Sayfası",
    fallbackDesc: "Çekirdek organizasyonel hedeflerle uyumlu stratejik dinamik içerik ekranı.",
    fallbackRole: "Marka Güveni ve Kullanıcı Deneyimi Bağlılığını Artırma",
    conversionVector: "DÖNÜŞÜM VEKTÖRÜ:",
    pages: {
      Home: {
        title: "ANA SAYFA",
        tag: "Zirve Giriş",
        desc: "Bireysel karşılama ekranı, etkileşimli referanslar, dinamik ürün döngüleri ve doğrudan iletişim tetikleyicisi.",
        conversionRole: "Temel Marka Uyumu ve Doğrudan Yönlendirme"
      },
      About: {
        title: "HAKKIMIZDA",
        tag: "Hikaye Sütunu",
        desc: "Acente kurumsal geçmişi, temel misyon değerleri, görsel etkileşimli kilometre taşları ve ekip listesi.",
        conversionRole: "Güven ve Kurumsal İnandırıcılık İnşası"
      },
      Services: {
        title: "HİZMETLER",
        tag: "Yetenekler Kataloğu",
        desc: "Yapılandırılmış kademeler, teknik yetkinlikler, şeffaf süreç matrisi ve fiyatlandırma planları.",
        conversionRole: "Teslimatları Netleştirme ve Kullanıcıyı Harekete Geçirme"
      },
      Portfolio: {
        title: "PORTFOLYO",
        tag: "Yüksek Kalite Vitrini",
        desc: "Etkileşimli ızgara, modüler filtreleme etiketleri, örnek vaka çalışmaları ve tam çözünürlüklü medya ekranları.",
        conversionRole: "Yaratıcı Uygulama ve Kalitenin Somut Kanıtı"
      },
      Contact: {
        title: "İLETİŞİM",
        tag: "Aksiyon Merkezi",
        desc: "Anlık talep formu, coğrafi dinamik haritalar, doğrudan takvim planlaması ve küresel saat dilimi göstergeleri.",
        conversionRole: "Doğrudan Potansiyel Müşteri ve Talep Kazanımı"
      },
      Blog: {
        title: "BLOG",
        tag: "Yayın Merkezi",
        desc: "Dinamik katalog sıralama, zengin içerikli makaleler, özelleştirilebilir bülten kayıt formları.",
        conversionRole: "SEO Filtreleme Organik Trafik & Marka Otoritesi"
      },
      Shop: {
        title: "MAĞAZA",
        tag: "Ticari Motor",
        desc: "Hızlı ödeme akışı, güçlü ürün matrisi, Stripe entegrasyonu ve dijital güvenli teslimat.",
        conversionRole: "Doğrudan Gelir Dönüşüm Bloğu"
      }
    }
  },
  fa: {
    hierarchyBlueprint: "نقشه ساختار وب‌سایت",
    recommendedStructure: "ساختار پیشنهادی صفحات وب‌سایت",
    mapDepth: "عمق ساختار: سطح ۲",
    routingActive: "● سیستم مسیریابی فعال و ایمن",
    primaryLanding: "صفحه اصلی پورتال",
    fallbackTag: "صفحه پشتیبان استراتژیک",
    fallbackDesc: "بخش محتوایی پویا و هماهنگ با اهداف کلی کسب‌وکار شما.",
    fallbackRole: "افزایش اعتماد به برند و وفاداری کاربر به رابط کاربری",
    conversionVector: "شاخص هدف نهایی:",
    pages: {
      Home: {
        title: "صفحه اصلی",
        tag: "قسمت ورودی اصلی",
        desc: "بخش ابتدایی خیره‌کننده، سوابق و افتخارات تعاملی، نمایش پویای خدمات و دعوت به اقدام سریع.",
        conversionRole: "معرفی هویت اصلی برند و هدایت دقیق کاربر به صفحات هدف"
      },
      About: {
        title: "درباره ما",
        tag: "داستان و پیشینه برند",
        desc: "جزئیات سوابق شرکت، ارزش‌های اصلی، رویدادهای تاریخی بصری تعاملی و فهرست اعضای تیم.",
        conversionRole: "جلب اعتماد عمیق مخاطب، اعتبارگذاری و ایجاد ارتباط معتبر"
      },
      Services: {
        title: "خدمات",
        tag: "کاتالوگ توانمندی‌ها",
        desc: "دسته‌بندی‌های سازمان‌یافته، تخصص‌های فنی، فرآیندهای شفاف و جداول تعرفه‌ها.",
        conversionRole: "شفاف‌سازی خروجی‌ها و آماده‌سازی مخاطب برای اقدام خرید یا سفارش"
      },
      Portfolio: {
        title: "نمونه کارها",
        tag: "گالری نمونه کارهای باکیفیت",
        desc: "شبکه‌ای تعاملی از پروژه‌ها، فیلترهای پویا، بررسی دقیق تجربیات قبلی و نمایش مدیا با وضوح بالا.",
        conversionRole: "اثبات عینی مهارت، کیفیت اجرا و خلاقیت ما"
      },
      Contact: {
        title: "تماس با ما",
        tag: "هسته ارتباطات سریع",
        desc: "فرم تماس مستقیم، نقشه‌های تعاملی جغرافیایی، تقویم رزرو زمان و نمایشگرهای مناطق زمانی.",
        conversionRole: "درگاه اصلی دریافت سفارشات و جذب مشتریان بالقوه"
      },
      Blog: {
        title: "وبلاگ",
        tag: "پایگاه انتشار مطالب آموزشی",
        desc: "دسته‌بندی پویای مطالب، خوانایی بالا و نوشتار خوانا، فرم‌های اشتراک خبرنامه‌های دوره‌ای.",
        conversionRole: "بهینه‌سازی سئو با کلمات کلیدی هدفمند و تثبیت تخصص برند"
      },
      Shop: {
        title: "فروشگاه",
        tag: "موتور پردازش معاملات",
        desc: "مراحل خرید و پرداخت فوق‌العاده سریع، جداول محصولات دقیق، اتصال به درگاه‌ها و تحویل امن دیجیتالی.",
        conversionRole: "ایجاد درگاه مستقیم تبدیل مخاطب به خریدار برای درآمدزایی شبانه‌روزی"
      }
    }
  }
};

export default function SitemapTree({ pages, activeLang = 'de' }: SitemapTreeProps) {
  const currentLang = activeLang || 'de';
  const tr = SITEMAP_TRANSLATIONS[currentLang] || SITEMAP_TRANSLATIONS.de;

  // Find if "Home" (or equivalent) exists in lists
  const hasHomeEquivalent = pages.some(p => normalizePageKey(p) === 'Home');
  const activePages = hasHomeEquivalent ? pages : [tr.pages.Home.title, ...pages];

  return (
    <div id="sitemap-visual-layout" className="space-y-8 bg-[#0b0f17]/60 border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md">
      {/* Structural background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 -z-10" />
      
      {/* Hierarchy Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-accent-gold" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#9cb2c9]/60">{tr.hierarchyBlueprint}</span>
          </div>
          <h4 className="text-lg font-bold text-white font-sans">{tr.recommendedStructure}</h4>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-[10px] text-[#9cb2c9]/40 font-mono">{tr.mapDepth}</span>
          <p className="text-[11px] text-emerald-400 font-mono">{tr.routingActive}</p>
        </div>
      </div>

      {/* Graphical Tree Container */}
      <div className="flex flex-col items-center">
        
        {/* Level 1: Root Node (Home Page) */}
        <div className="relative pb-10 flex flex-col items-center w-full max-w-xl">
          {/* Node */}
          <div className="w-full relative z-10 p-4.5 bg-gradient-to-b from-[#162031] to-[#0d1624] border-2 border-accent-gold/40 shadow-[0_4px_20px_rgba(197,168,128,0.15)] rounded-xl flex items-center gap-4">
            <div className="p-3.5 bg-accent-gold/10 rounded-lg border border-accent-gold/20 shrink-0">
              <Home className="h-5.5 w-5.5 text-accent-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-sans uppercase tracking-wide">{tr.pages.Home.title}</span>
                <span className="text-[9px] bg-accent-gold/10 text-accent-gold border border-accent-gold/20 px-2 py-0.5 rounded-full font-mono uppercase">{tr.primaryLanding}</span>
              </div>
              <p className="text-xs text-[#9cb2c9]/60 truncate mt-1">
                {tr.pages.Home.desc}
              </p>
            </div>
          </div>
          
          {/* Vertical connecting line to level 2 */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-accent-gold/50 to-blue-500/30" />
        </div>

        {/* Level 2: Children Node Grid */}
        <div className="w-full relative">
          
          {/* Absolute horizontal connecting guide line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500/30 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
            {activePages.filter(p => normalizePageKey(p) !== 'Home').map((pageName) => {
              const matchedKey = normalizePageKey(pageName);
              const info = tr.pages[matchedKey] ? {
                tag: tr.pages[matchedKey].tag,
                desc: tr.pages[matchedKey].desc,
                conversionRole: tr.pages[matchedKey].conversionRole,
                icon: PAGE_ICON_MAP[matchedKey] || <HelpCircle className="h-4.5 w-4.5 text-zinc-400" />
              } : {
                tag: tr.fallbackTag,
                desc: tr.fallbackDesc,
                conversionRole: tr.fallbackRole,
                icon: <HelpCircle className="h-4.5 w-4.5 text-zinc-400" />
              };

              return (
                <div 
                  key={pageName}
                  className="relative group p-4.5 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-accent-gold/30 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between space-y-4"
                >
                  {/* Subtle link connection hook (Desktop Only) */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-blue-500/10 group-hover:bg-accent-gold/20 transition-all hidden md:block animate-pulse" />

                  {/* Header info */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg group-hover:border-accent-gold/20 transition-colors shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-white tracking-wide">{pageName}</h5>
                      <span className="text-[9px] text-[#9cb2c9]/50 font-mono tracking-wider uppercase block">{info.tag}</span>
                    </div>
                  </div>

                  {/* Describe Node */}
                  <p className="text-xs text-[#9cb2c9]/60 leading-relaxed font-sans">{info.desc}</p>

                  {/* Conversion Vector */}
                  <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[9px] text-[#9cb2c9]/40 font-mono uppercase">{tr.conversionVector}</span>
                    <span className="text-[10px] text-accent-gold font-medium font-sans truncate text-right max-w-[150px]">{info.conversionRole}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
