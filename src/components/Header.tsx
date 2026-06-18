import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Globe, ChevronDown } from 'lucide-react';
import ParnilLogo from './ParnilLogo';
import { SupportedLang } from '../utils/translations';

interface HeaderProps {
  onStartGenerator: () => void;
  activeTab: 'landing' | 'generator' | 'brief';
  onNavigateHome: () => void;
  activeLang: SupportedLang;
  onChangeLang: (lang: SupportedLang) => void;
}

const LOCAL_HEADER_TRANSLATIONS: Record<SupportedLang, {
  briefGenerator: string;
  backHome: string;
  newBrief: string;
}> = {
  de: {
    briefGenerator: "Briefing-Generator",
    backHome: "← Zur Startseite",
    newBrief: "⚡ Neues Briefing"
  },
  en: {
    briefGenerator: "Brief Generator",
    backHome: "← Back Home",
    newBrief: "⚡ New Brief"
  },
  tr: {
    briefGenerator: "Şartname Jeneratörü",
    backHome: "← Ana Sayfaya Dön",
    newBrief: "⚡ Yeni Şartname"
  },
  fa: {
    briefGenerator: "پردازشگر بریف",
    backHome: "← بازگشت به خانه",
    newBrief: "⚡ بریف جدید"
  }
};

const LANG_DISPLAY_NAMES: Record<SupportedLang, string> = {
  de: "Deutsch",
  en: "English",
  tr: "Türkçe",
  fa: "فارسی"
};

export default function Header({ onStartGenerator, activeTab, onNavigateHome, activeLang, onChangeLang }: HeaderProps) {
  const currentLang = activeLang || 'de';
  const tr = LOCAL_HEADER_TRANSLATIONS[currentLang] || LOCAL_HEADER_TRANSLATIONS.en;
  const isRtl = currentLang === 'fa';
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header 
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-brand-paper/10 bg-brand-ink/85 backdrop-blur-xl ${isRtl ? 'font-fa' : ''}`}
    >
      <div id="navigation-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex h-20 items-center justify-between">
          {/* Logo Brand Frame using new branding schema */}
          <div 
            id="brand-logo" 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={onNavigateHome}
          >
            <ParnilLogo size="full" className="group" />
          </div>

          {/* Call to Action Trigger & Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Globe Language Selector Dropdown Container */}
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
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-between gap-3 ${
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

            {activeTab !== 'generator' && activeTab !== 'brief' && (
              <button
                id="header-cta-generator"
                onClick={onStartGenerator}
                className="relative hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-brand-ink bg-brand-acid hover:bg-brand-acid-hover hover:shadow-[0_0_25px_rgba(200,255,0,0.35)] transition-all duration-300 group overflow-hidden cursor-pointer font-display"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-ink" />
                <span>{tr.briefGenerator}</span>
                <ArrowUpRight className={`h-3 w-3 text-brand-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRtl ? '-scale-x-100' : ''}`} />
              </button>
            )}
            
            {activeTab === 'generator' && (
              <button
                id="header-nav-home"
                onClick={onNavigateHome}
                className="text-xs tracking-widest uppercase text-brand-paper/65 hover:text-brand-paper transition-all font-mono border border-brand-paper/10 hover:border-brand-paper/20 px-4 py-2 rounded-xl bg-brand-paper/[0.03]"
              >
                {tr.backHome}
              </button>
            )}

            {activeTab === 'brief' && (
              <button
                id="header-nav-restart"
                onClick={onStartGenerator}
                className="text-xs tracking-widest uppercase text-brand-acid hover:text-brand-acid-hover transition-all font-mono border border-brand-acid/40 hover:border-brand-acid/80 px-4 py-2 rounded-xl bg-brand-acid/10"
              >
                {tr.newBrief}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
