import React, { useState } from 'react';
import { ArrowUpRight, Globe, ChevronDown, Menu, X } from 'lucide-react';
import ParnilLogo from './ParnilLogo';
import { SupportedLang } from '../utils/translations';

interface HeaderProps {
  onStartGenerator: () => void;
  activeTab: 'landing' | 'generator' | 'brief';
  onNavigateHome: () => void;
  activeLang: SupportedLang;
  onChangeLang: (lang: SupportedLang) => void;
}

// Main marketing site this Estimator subdomain belongs to. Anchor links target
// sections on the primary parnil.co page so the nav matches the main site 1:1.
const MAIN_SITE = 'https://parnil.co';

// Mirror of parnil.co's primary navigation. "Estimator" is this very app, so it
// stays in-app (returns to the Estimator landing) instead of leaving the domain.
const LOCAL_HEADER_TRANSLATIONS: Record<SupportedLang, {
  home: string;
  about: string;
  services: string;
  estimator: string;
  faq: string;
  contact: string;
  bookAppointment: string;
}> = {
  de: {
    home: "Start",
    about: "Über uns",
    services: "Leistungen",
    estimator: "Kalkulator",
    faq: "FAQ",
    contact: "Kontakt",
    bookAppointment: "Termin buchen"
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    estimator: "Estimator",
    faq: "FAQ",
    contact: "Contact",
    bookAppointment: "Book Appointment"
  },
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    estimator: "Tahmin Aracı",
    faq: "SSS",
    contact: "İletişim",
    bookAppointment: "Randevu Al"
  },
  fa: {
    home: "خانه",
    about: "درباره ما",
    services: "خدمات",
    estimator: "برآوردگر",
    faq: "سوالات متداول",
    contact: "تماس",
    bookAppointment: "رزرو وقت"
  }
};

const LANG_DISPLAY_NAMES: Record<SupportedLang, string> = {
  de: "Deutsch",
  en: "English",
  tr: "Türkçe",
  fa: "فارسی"
};

export default function Header({ onNavigateHome, activeLang, onChangeLang }: HeaderProps) {
  const currentLang = activeLang || 'de';
  const tr = LOCAL_HEADER_TRANSLATIONS[currentLang] || LOCAL_HEADER_TRANSLATIONS.en;
  const isRtl = currentLang === 'fa';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // The Estimator entry is the only link that stays inside this subdomain.
  type NavItem =
    | { label: string; href: string; active?: boolean }
    | { label: string; action: () => void; active?: boolean };

  const navItems: NavItem[] = [
    { label: tr.home, href: `${MAIN_SITE}/#home` },
    { label: tr.about, href: `${MAIN_SITE}/#about` },
    { label: tr.services, href: `${MAIN_SITE}/#services` },
    { label: tr.estimator, action: onNavigateHome, active: true },
    { label: tr.faq, href: `${MAIN_SITE}/#faq` },
    { label: tr.contact, href: `${MAIN_SITE}/#contact` }
  ];

  const linkBase =
    "text-xs tracking-wider uppercase font-mono transition-colors";
  const linkIdle = "text-brand-paper/65 hover:text-brand-paper";
  const linkActive = "text-brand-acid";

  return (
    <header
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-brand-paper/10 bg-brand-ink/85 backdrop-blur-xl ${isRtl ? 'font-fa' : ''}`}
    >
      <div id="navigation-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo links to the main parnil.co site */}
          <a
            id="brand-logo"
            href={`${MAIN_SITE}/#home`}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <ParnilLogo size="full" className="group" />
          </a>

          {/* Desktop primary navigation (mirrors parnil.co) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              'href' in item ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${linkBase} ${item.active ? linkActive : linkIdle}`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.action}
                  className={`${linkBase} cursor-pointer ${item.active ? linkActive : linkIdle}`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Language switcher + Book Appointment + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Globe Language Selector Dropdown */}
            <div className="relative">
              {dropdownOpen && (
                <div
                  className="fixed inset-0 z-40 bg-transparent cursor-default"
                  onClick={() => setDropdownOpen(false)}
                />
              )}

              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`relative z-50 flex items-center gap-1.5 px-3 py-2 bg-[#0E1520] hover:bg-[#121c2c] border border-brand-paper/10 hover:border-brand-paper/20 rounded-xl font-mono text-[11px] font-bold text-brand-paper/85 hover:text-brand-paper transition-all cursor-pointer select-none active:scale-[0.98]`}
              >
                <Globe className="h-4 w-4 text-brand-paper/60" />
                <span className="uppercase">{activeLang}</span>
                <ChevronDown className={`h-3.5 w-3.5 text-brand-paper/40 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  className={`absolute z-50 mt-2 min-w-[140px] bg-[#0E1520] border border-brand-paper/10 rounded-xl p-1.5 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150 ${
                    isRtl ? 'left-0 origin-top-left' : 'right-0 origin-top-right'
                  }`}
                >
                  {((['de', 'en', 'tr', 'fa'] as const)).map((l) => {
                    const isSelected = activeLang === l;
                    return (
                      <button
                        key={l}
                        type="button"
                        onClick={() => {
                          onChangeLang(l);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isRtl ? 'text-right' : 'text-left'
                        } ${
                          isSelected
                            ? 'bg-brand-acid text-brand-ink font-semibold'
                            : 'text-brand-paper/65 hover:text-brand-paper hover:bg-brand-paper/5'
                        }`}
                      >
                        <span className="font-sans">{LANG_DISPLAY_NAMES[l]}</span>
                        <span className="text-[10px] uppercase opacity-60 font-mono">({l})</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Book Appointment CTA -> main site contact section */}
            <a
              id="header-cta-appointment"
              href={`${MAIN_SITE}/#contact`}
              className="relative hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-brand-ink bg-brand-acid hover:bg-brand-acid-hover hover:shadow-[0_0_25px_rgba(200,255,0,0.35)] transition-all duration-300 group overflow-hidden cursor-pointer font-display"
            >
              <span>{tr.bookAppointment}</span>
              <ArrowUpRight className={`h-3 w-3 text-brand-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRtl ? '-scale-x-100' : ''}`} />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-[#0E1520] border border-brand-paper/10 hover:border-brand-paper/20 text-brand-paper/80 hover:text-brand-paper transition-all cursor-pointer"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-paper/10 bg-brand-ink/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              'href' in item ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-3 rounded-xl text-sm font-mono uppercase tracking-wider transition-colors ${
                    item.active ? 'text-brand-acid bg-brand-acid/10' : 'text-brand-paper/70 hover:text-brand-paper hover:bg-brand-paper/5'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    item.action();
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-3 rounded-xl text-sm font-mono uppercase tracking-wider transition-colors ${
                    isRtl ? 'text-right' : 'text-left'
                  } ${
                    item.active ? 'text-brand-acid bg-brand-acid/10' : 'text-brand-paper/70 hover:text-brand-paper hover:bg-brand-paper/5'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
            <a
              href={`${MAIN_SITE}/#contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-brand-ink bg-brand-acid hover:bg-brand-acid-hover transition-all cursor-pointer font-display"
            >
              <span>{tr.bookAppointment}</span>
              <ArrowUpRight className={`h-3 w-3 ${isRtl ? '-scale-x-100' : ''}`} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
