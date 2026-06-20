import React from 'react';
import { Shield, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import ParnilLogo from './ParnilLogo';
import { SupportedLang } from '../utils/translations';

interface FooterProps {
  onStartGenerator: () => void;
  activeLang?: SupportedLang;
}

// Main marketing site this Estimator subdomain belongs to.
const MAIN_SITE = 'https://parnil.co';
const CONTACT_EMAIL = 'info@parnil.co';
const CONTACT_PHONE = '+49 163 384 9414';
const INSTAGRAM_URL = 'https://instagram.com/parnil.co';

const LOCAL_FOOTER_TRANSLATIONS: Record<SupportedLang, {
  tagline: string;
  navHeading: string;
  home: string;
  about: string;
  services: string;
  estimator: string;
  faq: string;
  legalHeading: string;
  privacy: string;
  imprint: string;
  contactHeading: string;
  location: string;
  allRightsReserved: string;
  designDevBy: string;
}> = {
  de: {
    tagline: "Digitale Erlebnisse, die Marken wachsen lassen.",
    navHeading: "Navigation",
    home: "Start",
    about: "Über uns",
    services: "Leistungen",
    estimator: "Kalkulator",
    faq: "FAQ",
    legalHeading: "Rechtliches",
    privacy: "Datenschutz",
    imprint: "Impressum",
    contactHeading: "Kontakt",
    location: "Düsseldorf, Deutschland",
    allRightsReserved: "Alle Rechte vorbehalten.",
    designDevBy: "Design & Entwicklung von"
  },
  en: {
    tagline: "Digital experiences that grow brands.",
    navHeading: "Navigation",
    home: "Home",
    about: "About",
    services: "Services",
    estimator: "Estimator",
    faq: "FAQ",
    legalHeading: "Legal",
    privacy: "Privacy Policy",
    imprint: "Imprint",
    contactHeading: "Contact",
    location: "Düsseldorf, Germany",
    allRightsReserved: "All Rights Reserved.",
    designDevBy: "Design & Development by"
  },
  tr: {
    tagline: "Markaları büyüten dijital deneyimler.",
    navHeading: "Menü",
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    estimator: "Tahmin Aracı",
    faq: "SSS",
    legalHeading: "Yasal",
    privacy: "Gizlilik Politikası",
    imprint: "Künye",
    contactHeading: "İletişim",
    location: "Düsseldorf, Almanya",
    allRightsReserved: "Tüm Hakları Saklıdır.",
    designDevBy: "Tasarım ve Geliştirme:"
  },
  fa: {
    tagline: "تجربه‌های دیجیتالی که برندها را رشد می‌دهند.",
    navHeading: "ناوبری",
    home: "خانه",
    about: "درباره ما",
    services: "خدمات",
    estimator: "برآوردگر",
    faq: "سوالات متداول",
    legalHeading: "اطلاعات قانونی",
    privacy: "حریم خصوصی",
    imprint: "اطلاعات حقوقی",
    contactHeading: "تماس",
    location: "دوسلدورف، آلمان",
    allRightsReserved: "تمامی حقوق محفوظ است.",
    designDevBy: "طراحی و توسعه توسط"
  }
};

export default function Footer({ onStartGenerator, activeLang = 'de' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const currentLang = activeLang || 'de';
  const tr = LOCAL_FOOTER_TRANSLATIONS[currentLang] || LOCAL_FOOTER_TRANSLATIONS.en;
  const isRtl = currentLang === 'fa';

  const linkClass = "text-sm text-brand-paper/60 hover:text-brand-acid transition-colors font-sans";

  return (
    <footer
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`relative border-t border-brand-paper/10 bg-brand-ink pt-16 pb-12 overflow-hidden ${isRtl ? 'font-fa' : ''}`}
    >
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-brand-acid/5 blur-[100px]" />
      <div className="absolute bottom-0 left-12 -z-10 h-64 w-64 rounded-full bg-brand-ice/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-paper/10">
          {/* Brand + tagline */}
          <div className="md:col-span-5 space-y-5">
            <a href={`${MAIN_SITE}/#home`} className="inline-flex cursor-pointer">
              <ParnilLogo size="full" />
            </a>
            <p className="text-sm text-brand-paper/60 max-w-sm leading-relaxed font-sans font-light">
              {tr.tagline}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-raised border border-brand-paper/10 text-brand-paper/60 hover:text-brand-acid hover:border-brand-acid/40 transition-all cursor-pointer"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-paper/80 font-mono">{tr.navHeading}</h4>
            <ul className="space-y-2.5">
              <li><a href={`${MAIN_SITE}/#home`} className={linkClass}>{tr.home}</a></li>
              <li><a href={`${MAIN_SITE}/#about`} className={linkClass}>{tr.about}</a></li>
              <li><a href={`${MAIN_SITE}/#services`} className={linkClass}>{tr.services}</a></li>
              <li>
                <button type="button" onClick={onStartGenerator} className={`${linkClass} cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}>
                  {tr.estimator}
                </button>
              </li>
              <li><a href={`${MAIN_SITE}/#faq`} className={linkClass}>{tr.faq}</a></li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-paper/80 font-mono">{tr.contactHeading}</h4>
              <ul className="space-y-3 text-sm text-brand-paper/60 font-sans">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 hover:text-brand-acid transition-colors">
                    <Mail className="h-4 w-4 text-brand-paper/40 shrink-0" />
                    <span dir="ltr">{CONTACT_EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-2.5 hover:text-brand-acid transition-colors">
                    <Phone className="h-4 w-4 text-brand-paper/40 shrink-0" />
                    <span dir="ltr">{CONTACT_PHONE}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-brand-paper/40 shrink-0" />
                  <span>{tr.location}</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-5 text-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-paper/80 font-mono">{tr.legalHeading}:</span>
              <a href={`${MAIN_SITE}/#privacy`} className={linkClass}>{tr.privacy}</a>
              <a href={`${MAIN_SITE}/#imprint`} className={linkClass}>{tr.imprint}</a>
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
