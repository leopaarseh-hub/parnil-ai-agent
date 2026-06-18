import React, { useState } from 'react';
import { Sparkles, Code, Palette, CheckCircle2 } from 'lucide-react';
import { DesignStyle } from '../types';
import { SupportedLang } from '../utils/translations';

interface ThemeShowcaseProps {
  onSelectStyle: (style: DesignStyle) => void;
  activeLang: SupportedLang;
}

const LOCAL_THEME_TRANSLATIONS: Record<SupportedLang, {
  preCurated: string;
  experientialAesthetics: string;
  experientialAestheticsItalic: string;
  taglineDesc: string;
  devHandOff: string;
  everyDesignCompiled: string;
  adoptAlignment: string;
  visualPhilosophy: string;
  fontAlignment: string;
  paletteBlockUtils: string;
  copied: string;
  activeLabel: string;
  viewLabel: string;
  themes: Record<DesignStyle, {
    title: string;
    tagline: string;
    description: string;
    vibe: string[];
    fonts: string;
    sampleHeadline: string;
    colors: { name: string; hex: string; bgClass: string; textClass: string }[];
    mockup: {
      est?: string;
      studio?: string;
      title?: string;
      desc?: string;
      readMonograph?: string;
      status?: string;
      neuralCore?: string;
      teamCyclesTitle?: string;
      teamCyclesDesc?: string;
      copied?: string;
      kazeTokyo?: string;
      atelierKazeTitle?: string;
      atelierKazeDesc?: string;
      projectIndex?: string;
      viewArchitecture?: string;
      sauceTitle?: string;
      freeShip?: string;
      sauceDesc?: string;
      grabBottle?: string;
      summitVentures?: string;
      secureGateway?: string;
      marketTitle?: string;
      founded?: string;
      readReport?: string;
    }
  }>;
}> = {
  de: {
    preCurated: "VORSELEKTIERTE DESIGNRICHTUNGEN",
    experientialAesthetics: "Erlebbare Ästhetik. Maßgeschneidert gebaut.",
    experientialAestheticsItalic: "Bespoke.",
    taglineDesc: "Wählen oder wechseln Sie durch unsere fünf charakteristischen Designstile. Wenn Sie das Generator-Tool nutzen, fließen diese Präferenzen direkt in Ihre maßgeschneiderte Sitemap ein.",
    devHandOff: "Bereit zur Entwickler-Übergabe",
    everyDesignCompiled: "Jedes Design wird mit sauberen Utility-Tokens, responsiven Layout-Modifikatoren und optimierten SEO-Metadaten basierend auf dem gewählten Stil kompiliert.",
    adoptAlignment: "Stilrichtung {theme} übernehmen",
    visualPhilosophy: "VISUELLE PHILOSOPHIE",
    fontAlignment: "SCHRIFTART-ALIGNMENT",
    paletteBlockUtils: "PALETTEN-BLOCKS",
    copied: "kopiert!",
    activeLabel: "■ AKTIV",
    viewLabel: "□ ANSEHEN",
    themes: {
      luxury: {
        title: "Editorial Luxury",
        tagline: "High-Fashion Storytelling, luftige Abstände & Neon-Orchidee-Akzente.",
        description: "Konzipiert für anspruchsvolle Premium-Hotellerie, digitale Flaggschiffe und High-End-Marken, die visuelles Gewicht und eine makellose architektonische Struktur verlangen.",
        vibe: ["Cinematisch", "Maßgeschneidert", "Geometrisch", "Extremer Kontrast", "Exquisite Details"],
        fonts: "Unbounded gepaart mit DM Sans",
        sampleHeadline: "Parnil Bespoke Atelier",
        colors: [
          { name: "Tiefschwarz", hex: "#050A14", bgClass: "bg-brand-ink", textClass: "text-[#F5F3EE]" },
          { name: "Neon-Orchidee", hex: "#D946EF", bgClass: "bg-[#D946EF]", textClass: "text-brand-ink" },
          { name: "Schnittstellen-Ebene", hex: "#0E1520", bgClass: "bg-surface-raised", textClass: "text-brand-paper" },
          { name: "Creme-Weiß", hex: "#F5F3EE", bgClass: "bg-brand-paper", textClass: "text-brand-ink" }
        ],
        mockup: {
          est: "SOHO / LONDON",
          studio: "STUDIO PARNIL",
          title: "Die Kunst visueller Vorausschau",
          desc: "Maßgeschneiderte digitale Web-Architektur aus Soho, London. Vollständig responsive Meisterwerke.",
          readMonograph: "Monographie lesen"
        }
      },
      modern: {
        title: "Tech Neo-Modernist",
        tagline: "Markante Typografie, interaktive Raster-Dynamik & weiche Leuchteffekte.",
        description: "Optimal für innovative Technologie-Startups, kreative inhabergeführte Studios und zukunftsorientierte digitale Initiativen.",
        vibe: ["Leucht-Effekte", "Bento-Raster", "Interaktiv", "Neon-Akzente", "Tech-Slab"],
        fonts: "Space Grotesk gepaart mit Plus Jakarta Sans",
        sampleHeadline: "Aether AI Analytics Engine",
        colors: [
          { name: "Schiefergrau", hex: "#0f171c", bgClass: "bg-[#0f171c]", textClass: "text-white" },
          { name: "Synthese-Blau", hex: "#3b82f6", bgClass: "bg-[#3b82f6]", textClass: "text-white" },
          { name: "Yoshi-Smaragd", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-[#0f171c]" },
          { name: "Eis-Weiß", hex: "#f8fafc", bgClass: "bg-[#f8fafc]", textClass: "text-[#0f171c]" }
        ],
        mockup: {
          status: "STATUS: 99.8% STABIL",
          neuralCore: "v2.8 Deep Neural Core",
          teamCyclesTitle: "Team-Zyklen in Echtzeit analysieren.",
          teamCyclesDesc: "Erfassen Sie kontinuierliche Telemetriedaten sofort, ohne Latenzen herkömmlicher Überwachungsschleifen.",
          copied: "kopiert!"
        }
      },
      minimal: {
        title: "Silent Minimalist",
        tagline: "Absolute architektonische Reduktion, viel Weißraum & monochrome Eleganz.",
        description: "Passend für unabhängige Designer, Architekturbüros, Galerien für zeitgenössische Kunst und Marken, die pure Reduktion zelebrieren.",
        vibe: ["Weißraum-Dichte", "Monospace Tech-Marken", "Asymmetrisch", "Kein Ballast", "High-Fidelity"],
        fonts: "Inter gepaart mit System-Monospace",
        sampleHeadline: "Arch. Atelier Kaze",
        colors: [
          { name: "Tiefstes Schwarz", hex: "#0a0a0a", bgClass: "bg-[#0a0a0a]", textClass: "text-white" },
          { name: "Zinkgrau", hex: "#737373", bgClass: "bg-[#737373]", textClass: "text-white" },
          { name: "Softgrau", hex: "#e5e5e5", bgClass: "bg-[#e5e5e5]", textClass: "text-[#0a0a0a]" },
          { name: "Unendliches Weiß", hex: "#ffffff", bgClass: "bg-[#ffffff]", textClass: "text-[#0a0a0a]" }
        ],
        mockup: {
          kazeTokyo: "KAZE / TOKIO",
          atelierKazeTitle: "ATELIER KAZE",
          atelierKazeDesc: "Silent Spaces, rohe Sichtbeton-Wohnmodule und lichtdurchflutete Galeriedecken im Hafen von Tokio.",
          projectIndex: "Projekt-Index",
          viewArchitecture: "Architektur ansehen"
        }
      },
      playful: {
        title: "Warm & Playful",
        tagline: "Freundliche Formen, einladende Farben, schwungvolle Übergänge & nahbare Texte.",
        description: "Perfekt für progressive Lifestyle-Produkte, Community-Netzwerke, handgemachte Lebensmittel und interaktive Plattformen.",
        vibe: ["Warme Verläufe", "Runde Module", "Beschwingt", "Expressive Icons", "Kreative Details"],
        fonts: "Outfit gepaart mit Fredoka",
        sampleHeadline: "Sizzle Sauce Co.",
        colors: [
          { name: "Dunkle Tinte", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "Erdbeer-Sizzle", hex: "#f43f5e", bgClass: "bg-[#f43f5e]", textClass: "text-white" },
          { name: "Honig-Bernstein", hex: "#f59e0b", bgClass: "bg-[#f59e0b]", textClass: "text-slate-900" },
          { name: "Minz-Glitzern", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-white" }
        ],
        mockup: {
          freeShip: "GRATIS VERSAND 📦",
          sauceTitle: "Chilisauce für nette Menschen!",
          sauceDesc: "100% natürliche, lokal bezogene Habaneros, langsam fermentiert für ein komplexes, rauchiges Aroma.",
          grabBottle: "Flasche sichern (12 €)"
        }
      },
      corporate: {
        title: "Industrial Corporate",
        tagline: "Symmetrische Präzision, seriöses Industrie-Blau & datenbasierte Autorität.",
        description: "Optimiert für renommierte Finanzdienstleister, globale Beratungshäuser, SaaS-Unternehmen und anspruchsvolle Kanzleien.",
        vibe: ["Symmetrisch", "Unternehmer-Blau", "Vertrauensstifter", "Exzellenz", "Klare Spalten"],
        fonts: "Inter gepaart mit Plus Jakarta Sans",
        sampleHeadline: "Summit Capital Group",
        colors: [
          { name: "Tiefes Marine", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "Gipfel-Blau", hex: "#0f365c", bgClass: "bg-[#0f365c]", textClass: "text-white" },
          { name: "Schieferblau-Akzent", hex: "#64748b", bgClass: "bg-[#64748b]", textClass: "text-white" },
          { name: "Alabaster-Basis", hex: "#f1f5f9", bgClass: "bg-[#f1f5f9]", textClass: "text-slate-900" }
        ],
        mockup: {
          summitVentures: "SUMMIT VENTURES",
          secureGateway: "SICHERES GATEWAY",
          marketTitle: "Generationenkapital sichern durch ehrliche Märkte.",
          founded: "GEGRÜNDET",
          readReport: "Q3 Wirtschaftsbericht lesen"
        }
      }
    }
  },
  en: {
    preCurated: "PRE-CURATED ART DIRECTION",
    experientialAesthetics: "Experiential Aesthetics. Built Bespoke.",
    experientialAestheticsItalic: "Bespoke.",
    taglineDesc: "Select or cycle through our five signature design alignments. When you use the Brief Generator tool, your selections are mapped directly to these custom agency blueprints.",
    devHandOff: "Developer Hand-off Ready",
    everyDesignCompiled: "Every design is compiled with clean utility tokens, responsive layout modifiers, and optimized SEO metadatas based on its designated theme setup.",
    adoptAlignment: "Adopt {theme} Alignment",
    visualPhilosophy: "VISUAL PHILOSOPHY",
    fontAlignment: "FONT ALIGNMENT",
    paletteBlockUtils: "PALETTE BLOCK UTILS",
    copied: "copied!",
    activeLabel: "■ ACTIVE",
    viewLabel: "□ VIEW",
    themes: {
      luxury: {
        title: "The Editorial Luxury",
        tagline: "High-fashion narrative spacing & neon orchid accents.",
        description: "Crafted for luxury hospitality, digital flagships, and high-end tech-enabled creators requiring bold visual weight and perfect architectural structure.",
        vibe: ["Cinematic", "Bespoke", "Geometric display", "High-Contrast Dark", "Exquisite Details"],
        fonts: "Unbounded paired with DM Sans",
        sampleHeadline: "Parnil Bespoke Atelier",
        colors: [
          { name: "Ink Black", hex: "#050A14", bgClass: "bg-brand-ink", textClass: "text-[#F5F3EE]" },
          { name: "Acid Orchid", hex: "#D946EF", bgClass: "bg-[#D946EF]", textClass: "text-brand-ink" },
          { name: "Surface Raised", hex: "#0E1520", bgClass: "bg-surface-raised", textClass: "text-brand-paper" },
          { name: "Paper Cream", hex: "#F5F3EE", bgClass: "bg-brand-paper", textClass: "text-brand-ink" }
        ],
        mockup: {
          est: "SOHO / LONDON",
          studio: "STUDIO PARNIL",
          title: "The Art of Visual Foresight",
          desc: "Bespoke architectural web engineering emerging from Soho, London. Fully responsive digital masterpieces.",
          readMonograph: "Read the monograph"
        }
      },
      modern: {
        title: "The Neo-Modernist",
        tagline: "Bold typography, interactive grid dynamics & soft bioluminescent glows.",
        description: "Ideal for fast-scaling tech companies, premium creative micro-studios, and startups launching state-of-the-art computational frameworks.",
        vibe: ["Glow Accents", "Bento-Grids", "Interactive States", "Fluorescent Alerts", "Deep Tech-Slab"],
        fonts: "Space Grotesk paired with Plus Jakarta Sans",
        sampleHeadline: "Aether AI Analytics Engine",
        colors: [
          { name: "Space Slate", hex: "#0f171c", bgClass: "bg-[#0f171c]", textClass: "text-white" },
          { name: "Synthesized Blue", hex: "#3b82f6", bgClass: "bg-[#3b82f6]", textClass: "text-white" },
          { name: "Bio Emerald", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-[#0f171c]" },
          { name: "Ice White", hex: "#f8fafc", bgClass: "bg-[#f8fafc]", textClass: "text-[#0f171c]" }
        ],
        mockup: {
          status: "STATUS: 99.8% STABLE",
          neuralCore: "v2.8 Deep Neural Core",
          teamCyclesTitle: "Analyze Team Cycles in Real Time.",
          teamCyclesDesc: "Instantly aggregate continuous telemetry without introducing compile-time latencies of standard monitoring loops.",
          copied: "copied!"
        }
      },
      minimal: {
        title: "Clean Minimalist",
        tagline: "Absolute architectural restraint, heavy whitespace, and monochrome weight.",
        description: "Suited for independent designers, architectural practices, contemporary art galleries, and brands celebrating pure reductionism.",
        vibe: ["Pure Whitespace", "Monospace Tech Marks", "Asymmetric Layouts", "Zero-Clutter", "High-Fidelity"],
        fonts: "Inter paired with clean system monospaces",
        sampleHeadline: "Arch. Atelier Kaze",
        colors: [
          { name: "Absolute Black", hex: "#0a0a0a", bgClass: "bg-[#0a0a0a]", textClass: "text-white" },
          { name: "Medium Zinc", hex: "#737373", bgClass: "bg-[#737373]", textClass: "text-white" },
          { name: "Soft Gray", hex: "#e5e5e5", bgClass: "bg-[#e5e5e5]", textClass: "text-[#0a0a0a]" },
          { name: "Infinite White", hex: "#ffffff", bgClass: "bg-[#ffffff]", textClass: "text-[#0a0a0a]" }
        ],
        mockup: {
          kazeTokyo: "KAZE / TOKYO",
          atelierKazeTitle: "ATELIER KAZE",
          atelierKazeDesc: "Crafting silent spaces, raw reinforced concrete residential modules, and light-capturing gallery ceilings in Tokyo Bay.",
          projectIndex: "Project Index",
          viewArchitecture: "View Architecture"
        }
      },
      playful: {
        title: "The Warm & Playful",
        tagline: "Friendly curves, welcoming palettes, bouncy transitions & human micro-copy.",
        description: "Tailored for progressive lifestyle products, community networks, boutique craft consumables, and interactive education portals.",
        vibe: ["Warm Gradients", "Rounded Modules", "Bouncy Feels", "Expressive Icons", "Whimsical Details"],
        fonts: "Outfit and friendly Sans custom scales",
        sampleHeadline: "Sizzle Sauce Co.",
        colors: [
          { name: "Deep Inkwell", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "Strawberry Sizzle", hex: "#f43f5e", bgClass: "bg-[#f43f5e]", textClass: "text-white" },
          { name: "Honey Amber", hex: "#f59e0b", bgClass: "bg-[#f59e0b]", textClass: "text-slate-900" },
          { name: "Mint Sparkle", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-white" }
        ],
        mockup: {
          freeShip: "FREE SHIP 📦",
          sauceTitle: "Hot sauce for nice people!",
          sauceDesc: "100% natural, family-farmed habaneros sourced locally and slow-fermented for robust, complex smokiness.",
          grabBottle: "Grab a Bottle ($12)"
        }
      },
      corporate: {
        title: "The Global Trusted",
        tagline: "Symmetrical grid precision, corporate blue, and clear data-driven authority.",
        description: "Structured for high-caliber financial institutions, global advisory conglomerates, SaaS platforms, and enterprises prioritizing risk defense.",
        vibe: ["Symmetrical Grids", "Corporate Authority", "Trust Signifiers", "Investment Blue", "Sleek Columns"],
        fonts: "Inter and Plus Jakarta Sans",
        sampleHeadline: "Summit Capital Group",
        colors: [
          { name: "Deep Navy", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "Summit Blue", hex: "#0f365c", bgClass: "bg-[#0f365c]", textClass: "text-white" },
          { name: "Slate Blue Accent", hex: "#64748b", bgClass: "bg-[#64748b]", textClass: "text-white" },
          { name: "Alabaster Base", hex: "#f1f5f9", bgClass: "bg-[#f1f5f9]", textClass: "text-slate-900" }
        ],
        mockup: {
          summitVentures: "SUMMIT VENTURES",
          secureGateway: "SECURE GATEWAY",
          marketTitle: "Preserving Generational Wealth Through Sincere Markets.",
          founded: "FOUNDED",
          readReport: "Read Q3 Economic Report"
        }
      }
    }
  },
  tr: {
    preCurated: "KÜRATÖRLÜK TASARIM YÖNLERİ",
    experientialAesthetics: "Hissedilebilir Estetik. Özel Üretim.",
    experientialAestheticsItalic: "Tasarım.",
    taglineDesc: "Beş imza tasarım yaklaşımımız arasında geçiş yapın. Jeneratör aracını kullandığınızda seçimleriniz doğrudan bu özel acente şablonlarına aktarılacaktır.",
    devHandOff: "Yazılımcı Devrine Hazır",
    everyDesignCompiled: "Her bir tasarım; temiz CSS belirteçleri, duyarlı düzen ayarlayıcıları ve optimize edilmiş SEO etiketleriyle derlenir.",
    adoptAlignment: "{theme} Stilini Kabul Et",
    visualPhilosophy: "GÖRSEL FELSEFE",
    fontAlignment: "TİPOGRAFİ HİZALAMASI",
    paletteBlockUtils: "RENK PALETİ BLOKLARI",
    copied: "kopyalandı!",
    activeLabel: "■ AKTİF",
    viewLabel: "□ İNCELE",
    themes: {
      luxury: {
        title: "Editorial Luxury",
        tagline: "Moda odaklı görsel hikaye anlatımı, şık alanlar ve neon orkide detaylar.",
        description: "Yüksek hacimli görsel prestij ve kusursuz mimari yapı gerektiren lüks otelcilik, dijital ana platformlar ve üst düzey yaratıcılar için tasarlanmıştır.",
        vibe: ["Sinematik", "Butik", "Geometrik", "Yüksek Kontrast", "Nefis Detaylar"],
        fonts: "Unbounded paired with DM Sans",
        sampleHeadline: "Parnil Bespoke Atelier",
        colors: [
          { name: "Mürekkep Siyahı", hex: "#050A14", bgClass: "bg-brand-ink", textClass: "text-[#F5F3EE]" },
          { name: "Asit Orkide", hex: "#D946EF", bgClass: "bg-[#D946EF]", textClass: "text-brand-ink" },
          { name: "Yatay Katman", hex: "#0E1520", bgClass: "bg-surface-raised", textClass: "text-brand-paper" },
          { name: "Krem Kağıt", hex: "#F5F3EE", bgClass: "bg-brand-paper", textClass: "text-brand-ink" }
        ],
        mockup: {
          est: "SOHO / LONDRA",
          studio: "STUDI PARNIL",
          title: "Görsel Öngörü Sanatı",
          desc: "Londra Soho'dan yükselen kişiye özel dijital web mühendisliği. Tamamen duyarlı başyapıtlar.",
          readMonograph: "Eseri inceleyin"
        }
      },
      modern: {
        title: "Tech Neo-Modernist",
        tagline: "Asil tipografi, etkileşimli ızgara mekanikleri ve yumuşak neon parlamaları.",
        description: "Hızlı büyüyen teknoloji şirketleri, inovatif yaratıcı stüdyolar ve modern operasyonel altyapılar başlatan girişimler için idealdir.",
        vibe: ["Neon Parlama", "Bento Panel", "Doğrudan Etkileşim", "Yüksek Frekans", "Derin Altyapı"],
        fonts: "Space Grotesk paired with Plus Jakarta Sans",
        sampleHeadline: "Aether AI Analytics Engine",
        colors: [
          { name: "Uzay Grisi", hex: "#0f171c", bgClass: "bg-[#0f171c]", textClass: "text-white" },
          { name: "Sentez Mavi", hex: "#3b82f6", bgClass: "bg-[#3b82f6]", textClass: "text-white" },
          { name: "Biyo Zümrüt", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-[#0f171c]" },
          { name: "Buzul Beyazı", hex: "#f8fafc", bgClass: "bg-[#f8fafc]", textClass: "text-[#0f171c]" }
        ],
        mockup: {
          status: "DURUM: %99.8 KARARLI",
          neuralCore: "v2.8 Yapay Sinir Çekirdeği",
          teamCyclesTitle: "Takım Döngülerini Gerçek Zamanlı Analiz Edin.",
          teamCyclesDesc: "Standart izleme araçlarının derleme gecikmelerine takılmadan anlık telemetri verilerini toplayın.",
          copied: "kopyalandı!"
        }
      },
      minimal: {
        title: "Silent Minimalist",
        tagline: "Saf mimari sadelik, geniş beyaz alanlar ve monokrom ağırlık.",
        description: "Bağımsız tasarımcılar, mimarlık ofisleri, çağdaş sanat galerileri ve saf sadeliği benimseyen seçkin markalar için uygundur.",
        vibe: ["Geniş Boşluk", "Monospace Kod", "Asimetrik Plan", "Sıfır Kabalık", "Yüksek Kalite"],
        fonts: "Inter paired with clean system monospaces",
        sampleHeadline: "Arch. Atelier Kaze",
        colors: [
          { name: "Mutlak Siyah", hex: "#0a0a0a", bgClass: "bg-[#0a0a0a]", textClass: "text-white" },
          { name: "Çinko Gri", hex: "#737373", bgClass: "bg-[#737373]", textClass: "text-white" },
          { name: "Yumuşak Gri", hex: "#e5e5e5", bgClass: "bg-[#e5e5e5]", textClass: "text-[#0a0a0a]" },
          { name: "Sonsuz Beyاز", hex: "#ffffff", bgClass: "bg-[#ffffff]", textClass: "text-[#0a0a0a]" }
        ],
        mockup: {
          kazeTokyo: "KAZE / TOKYO",
          atelierKazeTitle: "ATÖLYE KAZE",
          atelierKazeDesc: "Tokyo Körfezi'nde sessiz alanlar, brüt beton konut modülleri ve ışığı yakalayan galeri tavanları.",
          projectIndex: "Proje İndeksi",
          viewArchitecture: "Mimariyi İncele"
        }
      },
      playful: {
        title: "Warm & Playful",
        tagline: "Yumuşak eğriler, sıcak renk paletleri, neşeli geçişler ve samimi dil anlatımı.",
        description: "Yenilikçi yaşam tarzı markaları, topluluk ağları, butik üreticiler ve etkileşimli eğitim amaçlı portallar için tasarlanmıştır.",
        vibe: ["Sıcak Gradyan", "Oval Kartlar", "Akışkan Hissiyat", "Semboller", "Sevimli Detaylar"],
        fonts: "Outfit and friendly Sans custom scales",
        sampleHeadline: "Sizzle Sauce Co.",
        colors: [
          { name: "Derin Mürekkep", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "Sizzle Çilek", hex: "#f43f5e", bgClass: "bg-[#f43f5e]", textClass: "text-white" },
          { name: "Bal Kehribar", hex: "#f59e0b", bgClass: "bg-[#f59e0b]", textClass: "text-slate-900" },
          { name: "Nane Parıltısı", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-white" }
        ],
        mockup: {
          freeShip: "ÜCRETSİZ KARGO 📦",
          sauceTitle: "Güzel insanlar için acı sos!",
          sauceDesc: "Zengin ve karmaşık dumanlı aroma için yerel olarak yetiştirilen ve yavaşça fermente edilen %100 doğal habanerolar.",
          grabBottle: "Şişe Satın Al (12 €)"
        }
      },
      corporate: {
        title: "Industrial Corporate",
        tagline: "Simetrik ızgara hassasiyeti, kurumsal mavi ve veri odaklı yüksek otorite.",
        description: "Finansal kurumlar, küresel danışmanlık konsorsiyumları, SaaS platformları ve riski en aza indiren kurumsal yapılar için optimize edilmiştir.",
        vibe: ["Simetrik Düzen", "Kurumsal Güven", "İtibar Nişanesi", "Finans Mavi", "Zarif Kolonlar"],
        fonts: "Inter and Plus Jakarta Sans",
        sampleHeadline: "Summit Capital Group",
        colors: [
          { name: "Derin Lacivert", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "Gipfel Mavi", hex: "#0f365c", bgClass: "bg-[#0f365c]", textClass: "text-white" },
          { name: "Gri-Mavi Vurgu", hex: "#64748b", bgClass: "bg-[#64748b]", textClass: "text-white" },
          { name: "Mermer Beyazı", hex: "#f1f5f9", bgClass: "bg-[#f1f5f9]", textClass: "text-slate-900" }
        ],
        mockup: {
          summitVentures: "SUMMIT VENTURES",
          secureGateway: "GÜVENLİ GEÇİT",
          marketTitle: "Dürüst Piyasalarla Nesiller Boyu Zenginliği Korumak.",
          founded: "KURULUŞ",
          readReport: "Q3 Ekonomik Raporunu Oku"
        }
      }
    }
  },
  fa: {
    preCurated: "جهت‌های هنری پیش‌فرض",
    experientialAesthetics: "زیبایی‌شناسی تجربی. ساخت سفارشی.",
    experientialAestheticsItalic: "سفارشی.",
    taglineDesc: "یکی از پنج تراز طراحی امضای ما را انتخاب یا مرور کنید. در حین استفاده از ابزار ژنراتور، انتخاب‌های شما مستقیماً به کدهای این الگوها متصل می‌شوند.",
    devHandOff: "آماده برای توسعه‌دهنده",
    everyDesignCompiled: "هر طراحی با توکن‌های تمیز وب، کلاس‌های واکنش‌گرا و متادیتای سئو بهینه شده بر اساس چیدمان تم کامپایل می‌شود.",
    adoptAlignment: "اتخاذ سبک {theme}",
    visualPhilosophy: "فلسفه بصری",
    fontAlignment: "زوج فونت توصیه شده",
    paletteBlockUtils: "پالت کدهای رنگی",
    copied: "کپی شد!",
    activeLabel: "■ فعال",
    viewLabel: "□ مشاهده",
    themes: {
      luxury: {
        title: "Editorial Luxury",
        tagline: "فاصله گذاری داستانی با تراز بالا و جزئیات نئون ارکیده.",
        description: "طراحی شده برای هتل‌های مجلل، وب‌سایت‌های پرچمدار، و توسعه‌دهندگان تراز اولی که نیازمند تراز بصری قوی و ساختار طراحی بی‌نقص هستند.",
        vibe: ["سینمایی", "سفارشی", "نمایش هندسی", "تضاد رنگی بالا", "جزئیات بی‌نظیر"],
        fonts: "Unbounded paired with DM Sans",
        sampleHeadline: "Parnil Bespoke Atelier",
        colors: [
          { name: "مشکی تیره", hex: "#050A14", bgClass: "bg-brand-ink", textClass: "text-[#F5F3EE]" },
          { name: "ارکیده اسیدی", hex: "#D946EF", bgClass: "bg-[#D946EF]", textClass: "text-brand-ink" },
          { name: "سطح برجسته", hex: "#0E1520", bgClass: "bg-surface-raised", textClass: "text-brand-paper" },
          { name: "کرم کاغذی", hex: "#F5F3EE", bgClass: "bg-brand-paper", textClass: "text-brand-ink" }
        ],
        mockup: {
          est: "سوهو / لندن",
          studio: "استودیو پارنیل",
          title: "هنر آینده‌نگری بصری",
          desc: "مهندسی وب سفارشی برآمده از سوهو، لندن. شاهکارهای کاملاً واکنش‌گرا و مدرن.",
          readMonograph: "مطالعه کتابچه اثر"
        }
      },
      modern: {
        title: "Tech Neo-Modernist",
        tagline: "تایپوگرافی جسورانه، پویایی شبکه‌ای تعاملی و درخشش ملایم نئون.",
        description: "مناسب برای شرکت‌های فناوری در حال توسعه، استودیوهای خلاقانه مدرن، و استارت‌آپ‌هایی که درگاه‌های پیشرفته تحلیل تلمتری را راه‌اندازی می‌کنند.",
        vibe: ["درخشش نئون", "چیدمان بنتو", "حالات تعاملی", "هسته هوشمند", "داده محور"],
        fonts: "Space Grotesk paired with Plus Jakarta Sans",
        sampleHeadline: "Aether AI Analytics Engine",
        colors: [
          { name: "خاکستری فضایی", hex: "#0f171c", bgClass: "bg-[#0f171c]", textClass: "text-white" },
          { name: "آبی سنتز شده", hex: "#3b82f6", bgClass: "bg-[#3b82f6]", textClass: "text-white" },
          { name: "سبز زنده", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-[#0f171c]" },
          { name: "سفید یخی", hex: "#f8fafc", bgClass: "bg-[#f8fafc]", textClass: "text-[#0f171c]" }
        ],
        mockup: {
          status: "وضعیت: ۹۹.۸٪ پایدار",
          neuralCore: "v2.8 هسته عصبی عمیق",
          teamCyclesTitle: "تحلیل چرخه‌های تیمی در زمان واقعی",
          teamCyclesDesc: "انباشت فوری داده‌های تلمتری مداوم بدون تداخل در چرخه‌های کامپایل سیستم‌های استاندارد.",
          copied: "کپی شد!"
        }
      },
      minimal: {
        title: "Silent Minimalist",
        tagline: "خویشتن‌داری مطلق معماری، فضاهای خالی جادویی و سنگینی تک‌رنگ.",
        description: "مناسب برای طراحان مستقل، دفاتر معماری، گالری‌های هنری معاصر، و برندهایی که کاهش حداکثری و ظریفی را در طراحی ارج می‌نهند.",
        vibe: ["فضای خالی محض", "نشانه اسمبلی تک‌رنگ", "طرح‌های نامتقارن", "بدون پیوست اضافه", "وضوح بالا"],
        fonts: "Inter paired with clean system monospaces",
        sampleHeadline: "Arch. Atelier Kaze",
        colors: [
          { name: "سیاه کامل", hex: "#0a0a0a", bgClass: "bg-[#0a0a0a]", textClass: "text-white" },
          { name: "روی متوسط", hex: "#737373", bgClass: "bg-[#737373]", textClass: "text-white" },
          { name: "خاکستری نرم", hex: "#e5e5e5", bgClass: "bg-[#e5e5e5]", textClass: "text-[#0a0a0a]" },
          { name: "سفید بی‌نهایت", hex: "#ffffff", bgClass: "bg-[#ffffff]", textClass: "text-[#0a0a0a]" }
        ],
        mockup: {
          kazeTokyo: "کازه / توکیو",
          atelierKazeTitle: "آتلیه کازه",
          atelierKazeDesc: "خلق فضاهای بی صدا، خانه‌های بتنی پیش‌ساخته مدرن، و سقف‌های گالری نورگیر در خلیج توکیو.",
          projectIndex: "شاخص پروژه‌ها",
          viewArchitecture: "مشاهده معماری"
        }
      },
      playful: {
        title: "Warm & Playful",
        tagline: "منحنی‌های مهربان، پالت‌های پذیرا، انیمیشن‌های پر انرژی و لحن نوشتار گرم.",
        description: "سفارشی‌سازی خلاقانه برای محصولات سبک زندگی نوین، شبکه‌های اجتماعی، مواد غذایی خلاقانه، و پورتال‌های تعاملی آموزشی.",
        vibe: ["گرادیان‌های گرم", "ماژول‌های گرد", "حس پر انرژی", "نمادهای رسا", "جزئیات فانتزی"],
        fonts: "Outfit and friendly Sans custom scales",
        sampleHeadline: "Sizzle Sauce Co.",
        colors: [
          { name: "دوات تیره", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "توت‌فرنگی تند", hex: "#f43f5e", bgClass: "bg-[#f43f5e]", textClass: "text-white" },
          { name: "عسلی کهربایی", hex: "#f59e0b", bgClass: "bg-[#f59e0b]", textClass: "text-slate-900" },
          { name: "درخشش نعناع", hex: "#10b981", bgClass: "bg-[#10b981]", textClass: "text-white" }
        ],
        mockup: {
          freeShip: "ارسال رایگان 📦",
          sauceTitle: "سس تند برای آدم‌های خوب!",
          sauceDesc: "۱۰۰٪ طبیعی، تهیه شده از فلفل‌های هابانرو محلی تخمیر شده برای ایجاد طعم دودی غنی و پیچیده.",
          grabBottle: "خرید سس (۱۲ یورو)"
        }
      },
      corporate: {
        title: "Industrial Corporate",
        tagline: "تنظیمات قرینه شبکه، آبی‌های سازمانی و اعتبار شفاف داده‌محور.",
        description: "ساختاریافته برای موسسات مالی عالی‌رتبه، مشاوران تجاری بین‌المللی، پلتفرم‌های ابری، و مجموعه‌های پیشگیری از ریسک.",
        vibe: ["شبکه‌های متقارن", "اعتبار سازمانی", "نشانه‌های اعتبار", "آبی‌های سرمایه‌گذاری", "ستون‌های ظریف"],
        fonts: "Inter and Plus Jakarta Sans",
        sampleHeadline: "Summit Capital Group",
        colors: [
          { name: "سرمه‌ای تیره", hex: "#0f172a", bgClass: "bg-[#0f172a]", textClass: "text-white" },
          { name: "آبی فراز", hex: "#0f365c", bgClass: "bg-[#0f365c]", textClass: "text-white" },
          { name: "خاکستری سنگی", hex: "#64748b", bgClass: "bg-[#64748b]", textClass: "text-white" },
          { name: "پایه گچی", hex: "#f1f5f9", bgClass: "bg-[#f1f5f9]", textClass: "text-slate-900" }
        ],
        mockup: {
          summitVentures: "SUMMIT VENTURES",
          secureGateway: "درگاه امن",
          marketTitle: "حفظ ثروت نسل‌ها از طریق بازارهای صادقانه و شفاف",
          founded: "تأسیس",
          readReport: "مطالعه گزارش اقتصادی فصل سوم"
        }
      }
    }
  }
};

export default function ThemeShowcase({ onSelectStyle, activeLang = 'de' }: ThemeShowcaseProps) {
  const [activeTab, setActiveTab] = useState<DesignStyle>('luxury');

  const currentLang = activeLang || 'de';
  const tr = LOCAL_THEME_TRANSLATIONS[currentLang] || LOCAL_THEME_TRANSLATIONS.en;
  const currentThemesDict = tr.themes;

  const renderLayoutMockup = (style: DesignStyle) => {
    switch (style) {
      case 'luxury':
        return (
          <div className="w-full h-full p-6 bg-brand-ink border border-[#D946EF]/20 flex flex-col justify-between text-brand-paper rounded-[20px]">
            <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#D946EF]">
              <span>{currentThemesDict.luxury.mockup.est}</span>
              <span>{currentThemesDict.luxury.mockup.studio}</span>
            </div>
            <div className="my-auto space-y-3">
              <h1 className="font-display text-lg font-bold leading-tight text-[#D946EF]">
                {currentThemesDict.luxury.mockup.title}
              </h1>
              <p className="text-xs text-brand-paper/60 font-sans leading-relaxed tracking-wide font-light">
                {currentThemesDict.luxury.mockup.desc}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[9px] uppercase tracking-widest text-[#F5F3EE]/40 border-b border-[#D946EF]/10 pb-1">
                {currentThemesDict.luxury.mockup.readMonograph}
              </span>
              <div className="w-6 h-6 rounded-full bg-[#D946EF] flex items-center justify-center text-[9px] text-brand-ink font-bold">👁</div>
            </div>
          </div>
        );
      case 'modern':
        return (
          <div className="w-full h-full p-5 bg-[#0f172a] rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[8px] bg-blue-950/70 border border-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">AETHER ENGINE</span>
              </div>
              <span className="text-[9px] text-[#9cb2c9]/40 font-mono">{currentThemesDict.modern.mockup.status}</span>
            </div>
            <div className="my-4 space-y-2">
              <div className="inline-block px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400">
                {currentThemesDict.modern.mockup.neuralCore}
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white leading-none">
                {currentThemesDict.modern.mockup.teamCyclesTitle}
              </h2>
              <p className="text-[11px] text-[#9cb2c9]/60 leading-relaxed font-sans">
                {currentThemesDict.modern.mockup.teamCyclesDesc}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-2.5 flex items-center justify-between text-[10px]">
              <span className="text-[#9cb2c9]/80 font-mono">npm install @aether/core</span>
              <span className="text-emerald-400 font-mono">{currentThemesDict.modern.mockup.copied}</span>
            </div>
          </div>
        );
      case 'minimal':
        return (
          <div className="w-full h-full p-6 bg-white text-black flex flex-col justify-between rounded-lg font-sans">
            <div className="flex justify-between items-center text-[9px] tracking-widest text-neutral-500 uppercase font-mono">
              <span>{currentThemesDict.minimal.mockup.kazeTokyo}</span>
              <span>01 / 12</span>
            </div>
            <div className="my-auto space-y-2">
              <h1 className="text-2xl font-normal tracking-tighter text-black leading-none">
                {currentThemesDict.minimal.mockup.atelierKazeTitle}
              </h1>
              <p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-light">
                {currentThemesDict.minimal.mockup.atelierKazeDesc}
              </p>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-neutral-400">
              <span>{currentThemesDict.minimal.mockup.projectIndex}</span>
              <span>{currentThemesDict.minimal.mockup.viewArchitecture}</span>
            </div>
          </div>
        );
      case 'playful':
        return (
          <div className="w-full h-full p-6 bg-[#fff7ed] text-slate-900 flex flex-col justify-between rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-rose-500 tracking-tight font-sans">🌶️ SIZZLE.</span>
              <span className="text-[9px] bg-amber-200 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                {currentThemesDict.playful.mockup.freeShip}
              </span>
            </div>
            <div className="my-auto space-y-2">
              <h1 className="text-2xl font-black text-slate-900 leading-tight">
                {currentThemesDict.playful.mockup.sauceTitle}
              </h1>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {currentThemesDict.playful.mockup.sauceDesc}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-rose-500 hover:bg-rose-600 font-bold text-white text-xs rounded-xl shadow-md transition-all cursor-default">
                {currentThemesDict.playful.mockup.grabBottle}
              </button>
            </div>
          </div>
        );
      case 'corporate':
        return (
          <div className="w-full h-full p-5 bg-[#f8fafc] text-slate-900 flex flex-col justify-between rounded-lg border border-slate-200">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span className="font-semibold text-slate-800">{currentThemesDict.corporate.mockup.summitVentures}</span>
              <span>{currentThemesDict.corporate.mockup.secureGateway}</span>
            </div>
            <div className="my-3 space-y-2">
              <h2 className="text-lg font-bold text-slate-900 leading-tight">
                {currentThemesDict.corporate.mockup.marketTitle}
              </h2>
              <div className="grid grid-cols-3 gap-2 py-1">
                <div className="p-2 bg-white rounded border border-slate-200 text-center">
                  <span className="block text-[8px] uppercase text-slate-400">AUM</span>
                  <span className="text-xs font-bold text-indigo-900">$3.8B+</span>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200 text-center">
                  <span className="block text-[8px] uppercase text-slate-400">ROI</span>
                  <span className="text-xs font-bold text-emerald-600">+19.2%</span>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200 text-center">
                  <span className="block text-[8px] uppercase text-slate-400">{currentThemesDict.corporate.mockup.founded}</span>
                  <span className="text-xs font-bold text-slate-800">2012</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-500">{currentThemesDict.corporate.mockup.readReport}</span>
              <span className="p-1 rounded bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs text-[10px]">🗂️</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const activeTheme = currentThemesDict[activeTab];

  return (
    <div id="theme-showcase-section" className="py-16 border-t border-b border-brand-paper/5 bg-brand-ink">
      <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-acid/10 border border-brand-acid/20 text-xs text-brand-acid tracking-wide uppercase font-mono">
          <Palette className="h-3 w-3 animate-pulse" />
          <span>{tr.preCurated}</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-paper font-display">
          {tr.experientialAesthetics.includes('Bespoke') ? (
            <>Experiential Aesthetics. Built <span className="italic text-brand-acid">Bespoke.</span></>
          ) : tr.experientialAesthetics.includes('Tasarım') ? (
            <>Hissedilebilir Estetik. <span className="italic text-brand-acid">Özel Üretim.</span></>
          ) : tr.experientialAesthetics.includes('سفارشی') ? (
            <>زیبایی‌شناسی تجربی. ساخت <span className="italic text-brand-acid">سفارشی.</span></>
          ) : (
            <>Erlebbare Ästhetik. <span className="italic text-brand-acid">Maßgeschneidert gebaut.</span></>
          )}
        </h2>
        
        <p className="text-sm text-brand-paper/60 leading-relaxed font-sans font-light">
          {tr.taglineDesc}
        </p>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Style selection drawer (Left Side) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
          <div id="theme-selectors-container" className="space-y-2">
            {(Object.keys(currentThemesDict) as DesignStyle[]).map((key) => {
              const th = currentThemesDict[key];
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4 rounded-[20px] border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isSelected 
                      ? 'bg-brand-paper/[0.03] border-brand-acid shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                      : 'bg-transparent border-brand-paper/5 hover:border-brand-paper/15'
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold transition-colors font-display truncate ${isSelected ? 'text-brand-acid' : 'text-brand-paper/80 group-hover:text-brand-paper'}`}>
                        {th.title}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-acid shrink-0" />
                      )}
                    </div>
                    <span className="text-[11px] text-brand-paper/50 block truncate w-full">{th.tagline}</span>
                  </div>
                  <span className={`text-xs font-mono transition-transform duration-300 group-hover:translate-x-1 shrink-0 whitespace-nowrap ${isSelected ? 'text-brand-acid' : 'text-brand-paper/40'}`}>
                    {isSelected ? tr.activeLabel : tr.viewLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-4.5 rounded-[20px] bg-brand-acid/[0.02] border border-brand-acid/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-brand-acid font-mono">
              <Code className="h-3.5 w-3.5" />
              <span>{tr.devHandOff}</span>
            </div>
            <p className="text-xs text-brand-paper/60 leading-relaxed font-sans font-light">
              {tr.everyDesignCompiled}
            </p>
            <button
              onClick={() => onSelectStyle(activeTab)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-ink bg-brand-acid hover:bg-brand-acid-hover px-4 py-3.5 rounded-xl font-display cursor-pointer transition-all active:scale-[0.98] w-full justify-center"
            >
              <span>{tr.adoptAlignment.replace('{theme}', activeTheme.title)}</span>
              <span className="font-sans">→</span>
            </button>
          </div>
        </div>

        {/* Live Mockup viewport preview (Middle & Right Side) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-raised border border-brand-paper/5 rounded-[20px] p-6 sm:p-8 backdrop-blur-md">
          
          {/* Mockup Renderer */}
          <div className="h-80 md:h-full min-h-[320px] relative rounded-xl overflow-hidden shadow-2xl border border-brand-paper/10 p-1 bg-surface-deepest">
            {/* Window bar */}
            <div className="h-6 flex items-center justify-between px-3 bg-brand-ink border-b border-brand-paper/5 rounded-t-lg">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-brand-coral"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <div className="w-2 h-2 rounded-full bg-brand-acid"></div>
              </div>
              <div className="text-[9px] text-brand-paper/30 font-mono">parnil.studio/sandbox/{activeTab}</div>
              <div className="w-3"></div>
            </div>
            {/* Viewport content */}
            <div className="h-[calc(100%-24px)] overflow-hidden bg-brand-ink rounded-b-lg">
              {renderLayoutMockup(activeTab)}
            </div>
          </div>

          {/* Theme specifications & code tokens */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-paper/40">{tr.visualPhilosophy}</span>
                <h3 className="text-lg font-extrabold text-brand-paper mt-1 leading-snug font-display">{activeTheme.title}</h3>
                <p className="text-xs text-brand-paper/60 leading-relaxed font-sans mt-2">{activeTheme.description}</p>
              </div>

              <div className="h-[1px] bg-brand-paper/10" />

              <div className="space-y-2.5">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-paper/40 block mb-1">{tr.fontAlignment}</span>
                  <div className="flex items-center gap-1.5 text-xs text-brand-paper/80 font-mono">
                    <span className="px-2 py-1 rounded bg-brand-paper/[0.04] border border-brand-paper/5 text-xs text-brand-paper">
                      {activeTheme.fonts}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5F3EE]/40 block mb-1.5">{tr.paletteBlockUtils}</span>
                  <div className="grid grid-cols-4 gap-2">
                    {activeTheme.colors.map((color, idx) => {
                      const computedHex = activeTheme.colors[idx]?.hex || color.hex;
                      return (
                        <div key={idx} className="space-y-1">
                          <div className={`h-8 rounded ${color.bgClass} border border-brand-paper/10 relative group/hex flex items-center justify-center`}>
                            <span className="hidden group-hover/hex:inline-block text-[8px] bg-black/80 px-1 py-0.5 rounded text-white font-mono">{computedHex}</span>
                          </div>
                          <span className="text-[9px] text-[#F5F3EE]/50 block font-mono truncate">{color.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-paper/[0.06]">
              <div className="flex flex-wrap gap-1.5">
                {activeTheme.vibe.map((v, i) => (
                  <span key={i} className="text-[9px] uppercase font-mono text-brand-acid bg-brand-acid/5 border border-brand-acid/10 px-2 py-0.5 rounded-full">
                    #{v}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
