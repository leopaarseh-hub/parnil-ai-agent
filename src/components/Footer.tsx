import React from 'react';
import { Shield } from 'lucide-react';
import ParnilLogo from './ParnilLogo';
import { SupportedLang } from '../utils/translations';

interface FooterProps {
  onStartGenerator: () => void;
  activeLang?: SupportedLang;
}

const LOCAL_FOOTER_TRANSLATIONS: Record<SupportedLang, {
  companyDescription: string;
  visualHonors: string;
  bespokeCode: string;
  activeSystems: string;
  nextProjectSetup: string;
  projectSetupDesc: string;
  launchBuilder: string;
  allRightsReserved: string;
  designDevBy: string;
}> = {
  de: {
    companyDescription: "Wir entwickeln maßgeschneiderte digitale Flaggschiff-Projekte. Durch die Verschmelzung modernster interaktiver Codestrukturen mit zeitloser typografischer Eleganz verwandeln wir das Potenzial Ihres Unternehmens in sichtbare digitale Marktführerschaft.",
    visualHonors: "Design-Awards",
    bespokeCode: "Maßgeschneiderter Code",
    activeSystems: "Aktive Systeme",
    nextProjectSetup: "Nächstes Projekt-Setup",
    projectSetupDesc: "Nutzen Sie unseren interaktiven Generator, um technische Komponenten, Designboards, Texte und Kostenschätzungen in weniger als 3 Minuten zu planen.",
    launchBuilder: "Interaktiven Builder starten",
    allRightsReserved: "Alle Rechte vorbehalten.",
    designDevBy: "Design & Entwicklung von"
  },
  en: {
    companyDescription: "We engineer bespoke digital flagship environments. By synthesizing state-of-the-art interactive code structures with timeless typographic elegance, we translate organizational potential into visible digital leadership.",
    visualHonors: "Visual Honors",
    bespokeCode: "Bespoke Code",
    activeSystems: "Active Systems",
    nextProjectSetup: "Next Project Setup",
    projectSetupDesc: "Use our interactive generator tool to map out technical assets, style boards, headlines, and cost pathways in under 3 minutes.",
    launchBuilder: "Launch Interactive Builder",
    allRightsReserved: "All Rights Reserved.",
    designDevBy: "Design & Development by"
  },
  tr: {
    companyDescription: "Kişiye özel dijital amiral gemisi ortamları tasarlıyoruz. En son teknoloji etkileşimli kod yapılarını zamansız tipografik zarafetle sentezleyerek, kurumsal potansiyeli görünür bir dijital liderliğe dönüştürüyoruz.",
    visualHonors: "Tasarım Ödülü",
    bespokeCode: "Özel Kodlama",
    activeSystems: "Aktif Sistemler",
    nextProjectSetup: "Yeni Proje Kurulumu",
    projectSetupDesc: "Teknik varlıkları, stil panolarını, başlıkları ve bütçe planlarını 3 dakikadan kısa sürede belirlemek için etkileşimli jeneratörümüzü kullanın.",
    launchBuilder: "Etkileşimli Builder'ı Başlat",
    allRightsReserved: "Tüm Hakları Saklıdır.",
    designDevBy: "Tasarım ve Geliştirme:"
  },
  fa: {
    companyDescription: "ما محیط‌های وب پرچم‌دار و فاخری مهندسی می‌کنیم. با تلفیق کدهای تعاملی پیشرو با زیبایی‌شناختی ماندگار تایپوگرافی، ظرفیت‌های سازمان شما را به رهبری دیجیتالی ملموس تبدیل می‌کنیم.",
    visualHonors: "جوایز و افتخارات بصری",
    bespokeCode: "کدهای اختصاصی",
    activeSystems: "سیستم‌های فعال",
    nextProjectSetup: "آماده‌سازی پروژه بعدی",
    projectSetupDesc: "از ابزار تعاملی ما استفاده کنید تا منابع فنی، پالت طرح، عناوین اصلی و مسیر هزینه‌ها را در کمتر از ۳ دقیقه ترسیم کنید.",
    launchBuilder: "راه‌اندازی ابزار تعاملی بریف",
    allRightsReserved: "تمامی حقوق مادی و معنوی محفوظ است.",
    designDevBy: "طراحی و توسعه توسط"
  }
};

export default function Footer({ onStartGenerator, activeLang = 'de' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const currentLang = activeLang || 'de';
  const tr = LOCAL_FOOTER_TRANSLATIONS[currentLang] || LOCAL_FOOTER_TRANSLATIONS.en;

  const isRtl = currentLang === 'fa';

  return (
    <footer 
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`relative border-t border-brand-paper/10 bg-brand-ink pt-16 pb-12 overflow-hidden ${isRtl ? 'font-fa' : ''}`}
    >
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-brand-acid/5 blur-[100px]" />
      <div className="absolute bottom-0 left-12 -z-10 h-64 w-64 rounded-full bg-brand-ice/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-brand-paper/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-5">
            <ParnilLogo size="full" />

            <p className="text-sm text-brand-paper/60 max-w-sm leading-relaxed font-sans font-light">
              {tr.companyDescription}
            </p>

            <div className="flex items-center gap-6 text-xs text-brand-paper/40 font-mono">
              <div>
                <span className="block text-brand-paper font-semibold text-sm">34 +</span>
                <span>{tr.visualHonors}</span>
              </div>
              <div className="h-6 w-[1px] bg-brand-paper/10" />
              <div>
                <span className="block text-brand-paper font-semibold text-sm">100%</span>
                <span>{tr.bespokeCode}</span>
              </div>
              <div className="h-6 w-[1px] bg-brand-paper/10" />
              <div>
                <span className="block text-brand-paper font-semibold text-sm">24 / 7</span>
                <span>{tr.activeSystems}</span>
              </div>
            </div>
          </div>

          {/* Instant Interface CTA */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-paper/80 font-mono">{tr.nextProjectSetup}</h4>
            <div className="p-4 rounded-[20px] bg-surface-raised border border-brand-paper/10 space-y-3">
              <p className="text-xs text-brand-paper/60 leading-relaxed font-sans font-light">
                {tr.projectSetupDesc}
              </p>
              <button
                onClick={onStartGenerator}
                className="flex items-center gap-1.5 text-xs font-bold text-brand-acid hover:text-brand-acid-hover transition-all group font-mono uppercase tracking-widest cursor-pointer"
              >
                <span>{tr.launchBuilder}</span>
                <span className={`transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`}>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Studio Legal and Meta */}
        <div className="pt-8 flex flex-col items-center justify-center text-center gap-4 text-xs text-brand-paper/40 font-mono w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-3.5 w-3.5 text-brand-paper/30" />
              <span>&copy; {currentYear} PARNIL STUDIO. {tr.allRightsReserved}</span>
            </div>
            <div className="text-brand-paper/60">
              {tr.designDevBy}{' '}
              <a 
                href="https://parnil.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-acid hover:text-brand-acid-hover transition-colors underline decoration-brand-acid/30 hover:decoration-brand-acid font-medium"
              >
                Parnil.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
