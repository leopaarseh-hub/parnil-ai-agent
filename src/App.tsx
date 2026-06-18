import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeShowcase from './components/ThemeShowcase';
import BriefDocument from './components/BriefDocument';
import { FormState, DesignStyle, GeneratedBrief } from './types';
import { generateClientBrief } from './utils/generator';
import { TRANSLATIONS, SupportedLang, TranslationDict } from './utils/translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, ArrowRight, ArrowLeft, Building2, ShoppingBag, 
  Laptop, Palette, BookOpen, Coffee, HelpCircle, Target, 
  TrendingUp, Award, Users, HelpCircle as GoalIcon, Layout, 
  Clock, DollarSign, User, Mail, FileText, Check, FileCheck, Code,
  CheckCircle2, Send, Bot, Loader2, MessageSquare, AlertCircle
} from 'lucide-react';

const INITIAL_FORM_STATE: FormState = {
  businessType: 'SaaS/Tech Startup',
  businessName: '',
  businessDescription: '',
  mainGoal: 'Drive Leads & Inquiries',
  selectedStyle: 'luxury',
  selectedPages: ['Home', 'About', 'Services', 'Contact'],
  budgetRange: '$10,000 - $25,000',
  clientName: '',
  clientEmail: '',
  timelinePreference: 'Standard'
};

const CHAT_GREETINGS: Record<SupportedLang, string> = {
  de: "Hallo! Ich bin der KI-Business-Growth-Consultant von Parnil Studio. Bevor wir eine Website oder ein digitales Produkt empfehlen, möchte ich Ihre Vision verstehen. Erzählen Sie mir ein wenig über Ihr Unternehmen: Wie heißt es und was genau tun Sie?",
  en: "Hello! I am Parnil Studio's Lead AI Business Growth Consultant. Before recommending we build any digital product, I'd love to understand your vision. Tell me a little about your business: What is its name and what do you do?",
  tr: "Merhaba! Parnil Studio'nun Yapay Zeka İş Büyütme Danışmanıyım. Herhangi bir dijital çözüm önermeden önce vizyonunuzu anlamak isterim. İşletmenizden biraz bahseder misiniz: Adı nedir ve neler yapıyorsunuz?",
  fa: "سلام! من مشاور هوش مصنوعی رشد کسب‌وکار استودیو پارنیل هستم. قبل از اینکه هرگونه محصول دیجیتالی را پیشنهاد کنیم، دوست دارم چشم‌انداز شما را درک کنم. کمی درباره کسب‌وکارتان بگویید: نام آن چیست و چه کاری انجام می‌دهید؟"
};

const CHAT_LABELS = {
  de: {
    compileBtn: "Strategischen Entwurf generieren",
    compileProgress: "Strategischer Entwurf wird synthetisiert...",
    inputPlaceholder: "Geben Sie Ihre Nachricht ein...",
    agentTitle: "KI-Wachstumsberater",
    agentSubtitle: "Strategische Entdeckungssitzung",
    disclaimer: "Jedes Gespräch analysiert Ihre Marktbarrieren und schlägt Lösungen vor.",
    needMoreInfo: "Tipp: Unser Berater empfiehlt, mindestens 3-4 Fragen zu beantworten, bevor Sie den Entwurf erstellen, um präzise Ergebnisse zu erhalten.",
  },
  en: {
    compileBtn: "Compile Strategic Brief",
    compileProgress: "Synthesizing custom strategic brief...",
    inputPlaceholder: "Type your message here...",
    agentTitle: "AI Growth Consultant",
    agentSubtitle: "Strategic Discovery Session",
    disclaimer: "Every response helps model your market bottlenecks, target users, and digital solutions.",
    needMoreInfo: "Tip: Our advisor recommends answering at least 3-4 responses before compiling to achieve fully calculated price forecasts.",
  },
  tr: {
    compileBtn: "Stratejik Şartnameyi Derle",
    compileProgress: "Stratejik plan sentezleniyor...",
    inputPlaceholder: "Mesajınızı buraya yazın...",
    agentTitle: "Yapay Zeka Büyüme Danışmanı",
    agentSubtitle: "Stratejik Keşif Oturumu",
    disclaimer: "Her yanıt, pazar dar boğazlarınızı, hedef kitlenizi ve dijital çözümleri modellememize yardımcı olur.",
    needMoreInfo: "İpucu: En doğru bütçe ve süre tahminleri için en az 3-4 soruya cevap vermenizi öneririz.",
  },
  fa: {
    compileBtn: "تدوین بریف استراتژیک",
    compileProgress: "در حال تدوین بریف استراتژیک اختصاصی...",
    inputPlaceholder: "پیام خود را اینجا بنویسید...",
    agentTitle: "مشاور رشد هوش مصنوعی",
    agentSubtitle: "جلسه کشف استراتژیک کسب‌وکار",
    disclaimer: "هر پاسخ به مدل‌سازی موانع بازار، مخاطبان هدف و ارائه راهکار دیجیتال شما کمک می‌کند.",
    needMoreInfo: "نکته: مشاور ما توصیه می‌کند قبل از تدوین بریف، حداقل به ۳ الی ۴ سوال پاسخ دهید تا پیش‌بینی هزینه‌ها کاملاً دقیق باشد.",
  }
};

export default function App() {
  const [activeLang, setActiveLang] = useState<SupportedLang>(() => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.language) {
      const code = window.navigator.language.substring(0, 2).toLowerCase();
      if (code === 'de' || code === 'en' || code === 'tr' || code === 'fa') {
        return code as SupportedLang;
      }
    }
    return 'de';
  });

  const [viewMode, setViewMode] = useState<'landing' | 'generator' | 'brief'>('landing');
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const [generatedBrief, setGeneratedBrief] = useState<GeneratedBrief | null>(null);
  const [compilingProgress, setCompilingProgress] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatMessages, isTyping]);

  // Synchronize translation of greeting if chat dialog hasn't been engaged yet
  useEffect(() => {
    if (chatMessages.length === 1 && chatMessages[0].role === 'model') {
      const currentGreeting = chatMessages[0].text;
      const targetGreeting = CHAT_GREETINGS[activeLang];
      const wasGreeting = Object.values(CHAT_GREETINGS).some(g => currentGreeting.startsWith(g.substring(0, 30)));
      if (wasGreeting) {
        // If it was styling, customize details
        const containsStyleEt = currentGreeting.includes("visual ethos");
        if (containsStyleEt) {
          const matchedStyle = formState.selectedStyle || 'luxury';
          setChatMessages([{ 
            role: 'model', 
            text: activeLang === 'de' ? `${targetGreeting} (Notiert: Sie scheinen sich für unser Design-Ethos "${matchedStyle}" zu interessieren! Lassen Sie uns das Konzept darauf ausrichten.)`
              : activeLang === 'tr' ? `${targetGreeting} (Not edildi: "${matchedStyle}" tasarım yaklaşımımızla ilgileniyorsunuz gibi görünüyor! Çözümü bu estetiğe göre özelleştirelim.)`
              : activeLang === 'fa' ? `${targetGreeting} (توجه: به نظر می‌رسد به رویکرد زیبایی‌شناختی متمایز ما "${matchedStyle}" علاقه‌مند هستید! بگذارید همسو با همین سبک پیش برویم.)`
              : `${targetGreeting} (Noted: you seem interested in our "${matchedStyle}" visual ethos! Let's tailor the solution under this aesthetic.)`
          }]);
        } else {
          setChatMessages([{ role: 'model', text: targetGreeting }]);
        }
      }
    }
  }, [activeLang]);

  const t = TRANSLATIONS[activeLang];

  // Stats Counters data
  const stats = [
    { num: t.awardsNum, label: t.awardsLabel },
    { num: t.modulesNum, label: t.modulesLabel },
    { num: t.reviewsNum, label: t.reviewsLabel },
    { num: t.responseNum, label: t.responseLabel }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: t.testimonial1Quote,
      author: t.testimonial1Author,
      title: t.testimonial1Role,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: t.testimonial2Quote,
      author: t.testimonial2Author,
      title: t.testimonial2Role,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const handleStartGenerator = () => {
    setValidationError(null);
    setViewMode('generator');
    setChatMessages([
      { role: 'model', text: CHAT_GREETINGS[activeLang] }
    ]);
  };

  const handleSelectStyleInShowcase = (style: DesignStyle) => {
    setValidationError(null);
    setFormState(prev => ({ ...prev, selectedStyle: style }));
    setViewMode('generator');
    setChatMessages([
      { role: 'model', text: `${CHAT_GREETINGS[activeLang]} (Noted: you seem interested in our "${style}" visual ethos! Let's tailor the solution under this aesthetic.)` }
    ]);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatInput('');
    
    // Append user message
    const updatedMessages = [...chatMessages, { role: 'user' as const, text: userText }];
    setChatMessages(updatedMessages);
    setIsTyping(true);
    setValidationError(null);

    try {
      const response = await fetch('/api/chat-consultant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // Send the full conversation so the consultant never loses earlier context.
          messages: updatedMessages,
          lang: activeLang
        })
      });

      if (!response.ok) {
        let errorMessage = 'Failed to get consultant response';
        try {
          const errorJson = await response.json();
          if (errorJson && errorJson.error) {
            errorMessage = errorJson.error;
          }
        } catch (jsonErr) {
          // ignore
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setChatMessages(prev => [...prev, { role: 'model' as const, text: data.text }]);
    } catch (err: any) {
      console.error(err);
      setValidationError(err.message || (
        activeLang === 'de' ? "Verbindung zum Berater fehlgeschlagen. Bitte senden Sie Ihre Nachricht erneut."
        : activeLang === 'tr' ? "Danışmanla bağlantı kurulamadı. Lütfen mesajınızı tekrar göndermeyi deneyin."
        : activeLang === 'fa' ? "ارتباط با مشاور برقرار نشد. لطفاً دوباره پیام خود را ارسال کنید."
        : "Failed to connect to the AI Consultant. Please try sending your message again."
      ));
    } finally {
      setIsTyping(false);
    }
  };

  // Compile brief with secure server-side call
  const handleCompileBrief = async () => {
    setValidationError(null);
    if (chatMessages.length < 3) {
      setValidationError(
        activeLang === 'de' ? "Bitte führen Sie ein kurzes Gespräch, bevor wir Ihren Entwurf erstellen."
        : activeLang === 'tr' ? "Lütfen şartnameyi derlemeden önce kısa bir konuşma yapın."
        : activeLang === 'fa' ? "لطفاً قبل از تدوین بریف، اطلاعات کوتاهی با گفتگو به مشاور بدهید."
        : "Please converse with our consultant first so we have sufficient context to analyze."
      );
      return;
    }

    setIsCompiling(true);
    setCompilingProgress(15);
    
    const interval = setInterval(() => {
      setCompilingProgress(prev => {
        if (prev >= 90) return 90;
        return prev + 6;
      });
    }, 120);

    try {
      const response = await fetch("/api/generate-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chatHistory: chatMessages,
          lang: activeLang
        })
      });

      clearInterval(interval);

      if (!response.ok) {
        let errorMessage = "Brief generation failed";
        try {
          const errorJson = await response.json();
          if (errorJson && errorJson.error) {
            errorMessage = errorJson.error;
          }
        } catch (jsonErr) {
          // ignore
        }
        throw new Error(errorMessage);
      }

      const remoteBrief = await response.json();
      setCompilingProgress(100);
      
      setTimeout(() => {
        setGeneratedBrief(remoteBrief);
        setIsCompiling(false);
        setViewMode('brief');
      }, 350);

    } catch (error: any) {
      console.error("Error compiling brief from chat:", error);
      clearInterval(interval);
      setValidationError(error.message || (
        activeLang === 'de' ? "Der Server konnte Ihren Entwurf nicht generieren. Versuchen Sie es erneut."
        : activeLang === 'tr' ? "Şartname oluşturulamadı. Lütfen tekrar deneyin."
        : activeLang === 'fa' ? "تدوین بریف با خطا مواجه شد. لطفاً دوباره تلاش کنید."
        : "Failed to compile your customized strategic brief. Please try again."
      ));
      setIsCompiling(false);
    }
  };

  // Regeneration via server
  const handleRegenerateBrief = async () => {
    setIsCompiling(true);
    setCompilingProgress(20);
    
    try {
      const response = await fetch("/api/generate-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chatHistory: chatMessages,
          lang: activeLang
        })
      });

      if (!response.ok) {
        let errorMessage = "Failed to regenerate brief";
        try {
          const errorJson = await response.json();
          if (errorJson && errorJson.error) {
            errorMessage = errorJson.error;
          }
        } catch (jsonErr) {
          // ignore
        }
        throw new Error(errorMessage);
      }

      const briefData = await response.json();
      setGeneratedBrief(briefData);
    } catch (err: any) {
      console.error("Failed to regenerate brief:", err);
      setValidationError(err.message || "Failed to regenerate brief. Please try again.");
    } finally {
      setCompilingProgress(100);
      setIsCompiling(false);
    }
  };

  return (
    <div 
      id="application-root" 
      dir={activeLang === 'fa' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-brand-ink flex flex-col justify-between selection:bg-brand-acid selection:text-brand-ink ${activeLang === 'fa' ? 'font-fa' : ''}`}
      style={activeLang === 'fa' ? { fontFamily: '"Vazirmatn", sans-serif' } : undefined}
    >
      
      {/* Absolute background mesh glow for the entire applet */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-brand-500/5 via-transparent to-transparent blur-[150px] pointer-events-none -z-20" />

      {/* Header element */}
      <Header 
        activeLang={activeLang} 
        onChangeLang={setActiveLang} 
        activeTab={viewMode}
        onStartGenerator={handleStartGenerator}
        onNavigateHome={() => setViewMode('landing')}
      />

      {/* Primary responsive main display container viewport */}
      <main className="flex-grow z-10">

        {/* VIEW 1: PREMIUM LANDING PORTFOLIO SCREEN */}
        {viewMode === 'landing' && (
          <div id="agency-landing-view" className="space-y-24 pb-24">
            
            {/* HERO HEROICS */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 text-center space-y-8 relative">
              
              {/* Launcher announcement badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1520] border border-brand-paper/10 text-[10px] tracking-widest text-[#00C2FF] uppercase font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-acid animate-pulse"></span>
                <span>{t.exclusiveInterfaceScoping}</span>
              </div>

              {/* Bold Editorial Typography */}
              <h1 className="text-4xl sm:text-6xl lg:text-7.5xl font-extrabold tracking-tight text-brand-paper font-display max-w-5xl mx-auto leading-[1.1] sm:leading-[1.05] space-y-1 sm:space-y-2">
                <span className="block">{t.heroHeadingStart}</span>
                <span className="block text-brand-acid">{t.heroHeadingAccent}</span>
                <span className="block">{t.heroHeadingEnd}</span>
              </h1>

              {/* Substantiating agency tagline */}
              <p className="text-xs sm:text-sm text-brand-paper/70 max-w-2xl mx-auto leading-relaxed font-sans">
                {t.heroDescription}
              </p>

              {/* Active Hero Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  id="landing-hero-start-generator"
                  onClick={handleStartGenerator}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-brand-ink bg-brand-acid hover:bg-brand-acid-hover hover:shadow-[0_0_35px_rgba(200,255,0,0.25)] active:scale-[0.98] transition-all cursor-pointer font-sans cursor-pointer"
                >
                  <span>{t.buildCustomBrief}</span>
                  <ArrowRight className="h-4 w-4 text-brand-ink animate-bounce" />
                </button>
                <a
                  href="#theme-showcase-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-xl text-xs font-mono tracking-widest uppercase text-brand-paper/70 hover:text-brand-paper bg-[#0E1520] border border-brand-paper/10 hover:border-brand-paper/20 transition-all cursor-pointer"
                >
                  <span>{t.viewThemes}</span>
                </a>
              </div>

              {/* Premium Floating Showcase Mockups */}
              <div className="pt-16 max-w-5xl mx-auto relative group animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent z-10 pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-paper/10 bg-[#0E1520]/60 p-1 backdrop-blur-md">
                  <div className="h-7 w-full flex items-center justify-between px-3.5 bg-[#050A14] border-b border-brand-paper/5 text-[9px] text-brand-paper/40 font-mono">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-coral/80"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-acid/80"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-ice/80"></span>
                    </span>
                    <span className="text-brand-paper/60">{t.parnilSitemapLink}</span>
                    <span className="text-brand-ice">HTTPS Secured</span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&h=600&q=80" 
                    alt="Parnil Portfolio Analytics mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto brightness-90 contrast-105"
                  />
                </div>
              </div>

            </div>

            {/* FLOATING AGENCY STATS GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#0E1520] border border-brand-paper/5 backdrop-blur-md">
                {stats.map((s, i) => (
                  <div key={i} className="space-y-1.5 text-center lg:text-left">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#C8FF00] font-display tracking-tight block">{s.num}</span>
                    <p className="text-[11px] text-brand-paper/50 block font-sans leading-normal uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ART PRESETS INDEX (INTERACTIVE SPEC PREVIEW) */}
            <ThemeShowcase onSelectStyle={handleSelectStyleInShowcase} activeLang={activeLang} />

            {/* REALISTIC GRAPHICAL ACCLAIM & CLIENT VERDICT TESTIMONIALS */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs text-brand-acid uppercase font-mono tracking-widest font-bold">
                    <Award className="h-4 w-4 text-brand-acid" />
                    <span>{t.verdictEyebrow}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-paper font-display tracking-tight uppercase">
                    {t.verdictTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-paper/60 leading-relaxed font-sans font-light">
                    {t.verdictDesc}
                  </p>
                </div>

                {/* Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((t, i) => (
                    <div 
                      key={i} 
                      className="p-6 rounded-2xl bg-[#0E1520] border border-brand-paper/5 hover:border-brand-paper/10 transition-all space-y-6 flex flex-col justify-between"
                    >
                      <p className="text-xs sm:text-sm text-brand-paper/80 leading-relaxed font-sans italic">
                        “{t.quote}”
                      </p>
                      
                      <div className="flex items-center gap-3 border-t border-brand-paper/5 pt-4">
                        <img 
                          src={t.avatar} 
                          alt={t.author}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full border border-brand-paper/10"
                        />
                        <div>
                          <h6 className="text-xs font-bold text-brand-paper">{t.author}</h6>
                          <span className="text-[10px] text-brand-paper/40 uppercase font-mono block">{t.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PRIMARY CONVERTING KICKOFF TRIGGER */}
            <div id="landing-kickoff-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#0E1520] to-[#050A14] border border-brand-paper/10 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-acid/5 blur-[100px]" />
                
                <span className="text-xs text-brand-acid font-mono tracking-widest uppercase block relative z-10 font-bold">{t.acceleratorBannerLabel}</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-paper font-display max-w-2xl mx-auto relative z-10 leading-tight uppercase">
                  {t.acceleratorBannerTitle}
                </h3>
                <p className="text-xs sm:text-sm text-brand-paper/60 max-w-xl mx-auto leading-relaxed font-sans relative z-10 font-light">
                  {t.acceleratorBannerDesc}
                </p>
                <div className="pt-4 relative z-10">
                  <button
                    onClick={handleStartGenerator}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-brand-ink bg-brand-acid hover:bg-brand-acid-hover hover:shadow-[0_0_30px_rgba(200,255,0,0.25)] transition-all cursor-pointer font-sans font-extrabold cursor-pointer"
                  >
                     <span>{t.launchGeneratorBtn}</span>
                    <Sparkles className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: DYNAMIC AI GROWTH CONSULTANT INTERVIEW */}
        {viewMode === 'generator' && (
          <div id="ai-consultant-view" className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in flex flex-col space-y-6">
            
            {/* Header Description Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-brand-acid uppercase font-bold block">
                  {CHAT_LABELS[activeLang].agentSubtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-paper tracking-normal uppercase font-display">
                  Parnil Studio Consultant
                </h2>
              </div>

              {/* Action buttons: return to an existing brief, and compile/update */}
              <div className="flex items-center gap-3 self-stretch sm:self-auto">
                {generatedBrief && (
                  <button
                    type="button"
                    onClick={() => setViewMode('brief')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-paper bg-brand-paper/[0.07] hover:bg-brand-paper/[0.12] border border-brand-paper/10 hover:border-brand-paper/20 transition-all cursor-pointer font-mono"
                  >
                    <FileCheck className="h-4 w-4 shrink-0 text-brand-acid" />
                    <span>
                      {activeLang === 'de' ? 'Zurück zum Briefing'
                        : activeLang === 'tr' ? 'Brifinge Dön'
                        : activeLang === 'fa' ? 'بازگشت به بریف'
                        : 'Back to Brief'}
                    </span>
                  </button>
                )}

                {/* Compile / update strategic brief button */}
                <button
                  type="button"
                  onClick={handleCompileBrief}
                  disabled={isCompiling || chatMessages.length < 3}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    chatMessages.length < 3
                      ? 'bg-brand-paper/5 text-brand-paper/30 border border-brand-paper/10 cursor-not-allowed'
                      : 'bg-brand-acid text-brand-ink hover:bg-brand-acid-hover hover:shadow-[0_0_20px_rgba(200,255,0,0.25)]'
                  }`}
                >
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>
                    {generatedBrief
                      ? (activeLang === 'de' ? 'Briefing aktualisieren'
                        : activeLang === 'tr' ? 'Brifingi Güncelle'
                        : activeLang === 'fa' ? 'به‌روزرسانی بریف'
                        : 'Update Brief')
                      : CHAT_LABELS[activeLang].compileBtn}
                  </span>
                </button>
              </div>
            </div>

            {/* Inline validation status log */}
            {validationError && (
              <div className="p-4 bg-brand-coral/10 border border-brand-coral/20 rounded-xl text-brand-paper text-xs flex items-center justify-between gap-3 font-sans animate-fade-in shrink-0">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-4.5 w-4.5 text-brand-coral shrink-0" />
                  <div>
                    <span className="font-semibold text-brand-coral uppercase tracking-wider font-mono text-[10px] block mb-0.5">ALERT LOG:</span>
                    <p className="text-brand-paper/90">{validationError}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setValidationError(null)}
                  className="text-brand-paper/40 hover:text-brand-paper text-xs font-mono px-2 py-1 uppercase rounded hover:bg-brand-paper/5 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Main Interactive Chat Window */}
            <div className="bg-[#0E1520]/90 border border-brand-paper/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative flex flex-col h-[550px] sm:h-[600px]">
              
              {/* Chat Window Channel Status bar */}
              <div className="px-6 py-4 bg-[#0A0D15] border-b border-brand-paper/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-3 w-3 bg-brand-acid rounded-full animate-ping absolute opacity-70" />
                    <div className="h-3 w-3 bg-brand-acid rounded-full relative" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-paper uppercase block tracking-wide">
                      {CHAT_LABELS[activeLang].agentTitle}
                    </span>
                    <span className="text-[9px] font-mono text-brand-acid/80 tracking-wider block uppercase">
                      ● Active Consulting Interview
                    </span>
                  </div>
                </div>

                {/* Exit consultant */}
                <button
                  type="button"
                  onClick={() => setViewMode('landing')}
                  className="px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider uppercase text-brand-paper/40 hover:text-brand-paper border border-[#F5F3EE]/5 hover:border-brand-paper/15 hover:bg-[#F5F3EE]/5 transition-colors cursor-pointer"
                >
                  {activeLang === 'de' ? "Beenden" : activeLang === 'tr' ? "Çıkış" : activeLang === 'fa' ? "خروج" : "Exit"}
                </button>
              </div>

              {/* Chat Message Scrollport */}
              <div 
                ref={chatContainerRef}
                className="flex-grow p-6 overflow-y-auto space-y-4 flex flex-col"
                style={{ direction: activeLang === 'fa' ? 'rtl' : 'ltr' }}
              >
                {chatMessages.map((msg, index) => {
                  const isModel = msg.role === 'model';
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm shadow-sm ${
                        isModel 
                          ? 'bg-[#121A2A]/90 border border-brand-paper/10 text-brand-paper self-start rounded-tl-none font-sans font-normal' 
                          : 'bg-brand-acid/15 border border-brand-acid/25 text-brand-paper self-end rounded-tr-none font-sans font-normal'
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    </motion.div>
                  );
                })}

                {/* Typing status bar indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#121A2A]/90 border border-brand-paper/10 rounded-2xl p-4 self-start rounded-tl-none flex items-center space-x-1.5 w-16 shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-acid animate-bounce delay-75" />
                    <span className="h-2 w-2 rounded-full bg-brand-acid animate-bounce delay-150" />
                    <span className="h-2 w-2 rounded-full bg-brand-acid animate-bounce delay-300" />
                  </motion.div>
                )}
              </div>

              {/* Bottom message compositing controller */}
              <form 
                onSubmit={handleSendMessage}
                className="p-4 bg-[#070A11] border-t border-brand-paper/10 flex items-center gap-3 shrink-0"
              >
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={isTyping}
                  placeholder={CHAT_LABELS[activeLang].inputPlaceholder}
                  className="flex-grow bg-[#050A14] border border-brand-paper/10 rounded-xl px-4 py-3 text-sm text-brand-paper placeholder-brand-paper/20 outline-none focus:border-brand-acid/55 focus:bg-[#050A14]/80 transition-all font-sans"
                />
                
                <button
                  type="submit"
                  disabled={isTyping || !chatInput.trim()}
                  className={`p-3 rounded-xl text-brand-ink transition-all shrink-0 ${
                    !chatInput.trim() || isTyping
                      ? 'bg-brand-paper/5 text-brand-paper/30 cursor-not-allowed'
                      : 'bg-brand-acid hover:bg-brand-acid-hover hover:shadow-[0_0_15px_rgba(200,255,0,0.25)]'
                  }`}
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {/* Loader overlay during compiling phase */}
              {isCompiling && (
                <div className="absolute inset-0 bg-[#050A14] flex flex-col items-center justify-center space-y-6 px-4 z-40">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-2 border-brand-paper/5" />
                    <div className="absolute inset-0 rounded-full border-2 border-t-brand-acid animate-spin" />
                  </div>
                  
                  <div className="space-y-1.5 text-center">
                    <span className="text-[10px] font-mono tracking-widest text-brand-acid block uppercase font-bold animate-pulse">
                      {CHAT_LABELS[activeLang].compileProgress}
                    </span>
                    <h5 className="text-sm font-bold text-brand-paper uppercase font-display tracking-wide">
                      {activeLang === 'de' ? "AUSWERTUNG DER DESIGN-ETHIK" : activeLang === 'tr' ? "TASARIM ETİKLERİ DEĞERLENDİRİLİYOR" : activeLang === 'fa' ? "بررسی و پردازش مدل‌های گرافیکی" : "Evaluating Design Aesthetics"}
                    </h5>
                    <p className="text-xs text-brand-paper/50 max-w-sm mx-auto leading-relaxed">
                      {activeLang === 'de' ? "Ihr Gespräch wird analysiert, um eine optimal zugeschnittene digitale Lösung, einen Vorschlag für die Sitemap und passende Funktionsmerkmale zu kalkulieren."
                        : activeLang === 'tr' ? "Danışma oturumunuz analiz ediliyor; ideal dijital çözüm, site haritası önerisi ve bütçe planı çıkarılıyor."
                        : activeLang === 'fa' ? "مکالمه شما در حال تحلیل است تا بهترین راهکار دیجیتال، ساختار وب‌سایت پیشنهادی، و هزینه و زمان توسعه محاسبه گردد."
                        : "Analyzing corporate objectives to forge architectural layouts, suggested content blueprints, and timeline predictions."}
                    </p>
                  </div>

                  <div className="w-full max-w-xs h-1 bg-brand-paper/5 rounded relative overflow-hidden">
                    <div 
                      className="absolute h-full bg-brand-acid transition-all duration-300" 
                      style={{ width: `${compilingProgress}%` }}
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Hint bar beneath chat window */}
            {chatMessages.length < 3 && (
              <p className="text-[11px] text-center text-brand-paper/40 font-sans leading-relaxed animate-pulse">
                {CHAT_LABELS[activeLang].needMoreInfo}
              </p>
            )}

          </div>
        )}

        {/* VIEW 3: DYNAMIC BRIEF spec blueprint SHEETS DISPLAY */}
        {viewMode === 'brief' && generatedBrief && (
          <BriefDocument 
            brief={generatedBrief} 
            onModify={() => setViewMode('generator')}
            onRegenerate={handleRegenerateBrief}
            activeLang={activeLang}
          />
        )}

      </main>

      {/* Footer element */}
      <Footer onStartGenerator={handleStartGenerator} activeLang={activeLang} />

    </div>
  );
}
