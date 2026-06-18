import React, { useState } from 'react';
import { GeneratedBrief } from '../types';
import SitemapTree from './SitemapTree';
import { TRANSLATIONS, SupportedLang } from '../utils/translations';
import { 
  FileCheck, Calendar, DollarSign, Cloud, Terminal, Sparkles, 
  Download, Printer, ChevronRight, CheckCircle2, RefreshCw, Send, Sliders
} from 'lucide-react';

interface BriefDocumentProps {
  brief: GeneratedBrief;
  onModify: () => void;
  onRegenerate: () => void;
  activeLang?: SupportedLang;
}

export default function BriefDocument({ brief, onModify, onRegenerate, activeLang }: BriefDocumentProps) {
  const [copied, setCopied] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [formData, setFormData] = useState({
    urgency: 'Flexible',
    customNotes: ''
  });

  const currentLang = activeLang || 'de';
  const t = TRANSLATIONS[currentLang];

  const handleCopyHash = () => {
    navigator.clipboard.writeText(JSON.stringify(brief, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleApprove = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApproved(true);
  };

  const bodyDir = currentLang === 'fa' ? 'rtl' : 'ltr';

  return (
    <div 
      id="brief-document-parent" 
      dir={bodyDir}
      className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 selection:bg-brand-acid selection:text-brand-ink ${currentLang === 'fa' ? 'font-fa' : ''}`}
    >
      
      {/* Document Floating Control Panel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-[20px] bg-surface-raised border border-brand-paper/10 backdrop-blur-md">
        <div>
          <span className="text-xs text-brand-paper/40 font-mono tracking-widest uppercase block">{t.dispatchSystem}</span>
          <div className="flex items-center gap-3 mt-1">
            <h2 className="text-lg font-bold text-brand-paper font-display tracking-tight leading-none">
              {t.briefCompiled}
            </h2>
            <span className="text-xs bg-brand-acid/10 border border-brand-acid/20 text-brand-acid px-2.5 py-0.5 rounded-full font-mono font-medium animate-pulse">
              {brief.id}
            </span>
          </div>
        </div>

        {/* Primary Controls */}
        <div id="document-action-buttons-cluster" className="flex items-center gap-3 self-stretch sm:self-auto justify-end w-full sm:w-auto">
          <button
            onClick={onModify}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-paper/80 hover:text-brand-paper border border-brand-paper/10 hover:border-brand-paper/20 rounded-xl transition-all font-mono cursor-pointer"
          >
            <Sliders className="h-3.5 w-3.5 text-brand-acid" />
            <span>{t.modifySpec}</span>
          </button>

          <button
            onClick={onRegenerate}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-paper bg-brand-paper/[0.07] hover:bg-brand-paper/[0.12] border border-brand-paper/10 hover:border-brand-paper/20 rounded-xl transition-all font-mono cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5 text-brand-acid" />
            <span>{t.regenerateBrief}</span>
          </button>

          <button
            onClick={handlePrint}
            className="p-2.5 text-brand-paper/80 hover:text-brand-paper bg-brand-paper/[0.07] hover:bg-brand-paper/[0.12] border border-brand-paper/10 rounded-xl transition-all cursor-pointer"
            title={t.downloadPdf}
          >
            <Printer className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      {/* Main A4-Format Styled Blueprint Sheet */}
      <div id="print-sheet-canvas" className="bg-brand-ink border border-brand-paper/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden relative">
        {/* Aesthetic Technical Blueprint Grid borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-acid/30 m-4 rounded pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-acid/30 m-4 rounded pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-acid/30 m-4 rounded pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-acid/30 m-4 rounded pointer-events-none" />

        <div className="p-8 sm:p-12 md:p-16 space-y-12">
          
          {/* Cover Header */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-10 border-b border-brand-paper/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-brand-acid uppercase font-mono tracking-widest pl-0.5 mb-1.5 font-bold">
                <FileCheck className="h-3.5 w-3.5" />
                <span>{t.architectureSpec}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-paper font-display uppercase leading-tight">
                {brief.businessName}
              </h1>
              <p className="text-xs sm:text-sm text-brand-paper/60 leading-relaxed font-sans max-w-xl mt-2 pl-0.5 font-light">
                {t.specSub.replace('{name}', brief.businessName).replace('{date}', brief.date)}
              </p>
            </div>
            
            <div className={`text-left ${bodyDir === 'rtl' ? 'md:text-right' : 'md:text-right'} font-mono text-xs space-y-1 shrink-0 bg-surface-raised p-4 rounded-2xl border border-brand-paper/10`}>
              <span className="text-brand-paper/40 block uppercase text-[10px]">{t.engineProtocol}</span>
              <p className="text-brand-paper font-bold">PARNIL-BRIEF-V3.8</p>
              <span className="text-brand-paper/40 block uppercase pt-2 text-[10px]">{t.activeBrief}</span>
              <p className="text-brand-acid font-bold tracking-widest flex items-center gap-1 justify-start">
                <span className="inline-block w-1.5 h-1.5 bg-brand-acid rounded-full animate-pulse"></span>
                {t.activeStatus}
              </p>
            </div>
          </div>

          {/* Grid Layout containing meta statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-[20px] bg-surface-raised border border-brand-paper/10 font-mono">
            <div>
              <span className="text-[10px] text-brand-paper/40 uppercase block">{t.businessDomain}</span>
              <p className="text-xs sm:text-sm font-bold text-brand-paper mt-1 font-sans capitalize">{brief.businessType}</p>
            </div>
            <div>
              <span className="text-[10px] text-brand-paper/40 uppercase block">{t.targetCapital}</span>
              <p className="text-xs sm:text-sm font-bold text-brand-paper mt-1 font-sans">{brief.budgetRange}</p>
            </div>
            <div>
              <span className="text-[10px] text-brand-paper/40 uppercase block">{t.targetTimeline}</span>
              <p className="text-xs sm:text-sm font-bold text-brand-paper mt-1 font-sans">{brief.estimatedTimeline}</p>
            </div>
            <div>
              <span className="text-[10px] text-brand-paper/40 uppercase block">{t.styleAlignment}</span>
              <p className="text-xs sm:text-sm font-bold text-brand-acid mt-1 font-sans capitalize">{brief.selectedStyle}</p>
            </div>
          </div>

          {/* Strategic Narrative / Project Summary */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-extrabold text-brand-paper font-display flex items-center gap-2 uppercase tracking-tight">
              <span className="w-1.5 h-6 rounded bg-brand-acid block"></span>
              {t.sectionStrategy}
            </h3>
            <div className="text-xs sm:text-sm text-brand-paper/80 leading-relaxed font-sans bg-surface-raised border border-brand-paper/5 p-5 rounded-[20px] shadow-inner" dangerouslySetInnerHTML={{ __html: brief.summary }} />
          </div>

          {/* Content Framework & Sitemap */}
          <div className="space-y-6">
            <h3 className="text-base sm:text-lg font-extrabold text-brand-paper font-display flex items-center gap-2 uppercase tracking-tight">
              <span className="w-1.5 h-6 rounded bg-brand-acid block"></span>
              {t.sectionArchitecture}
            </h3>
            <SitemapTree pages={brief.sitemap} activeLang={currentLang} />
          </div>

          {/* High Conversion Wireframe Copy */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-extrabold text-brand-paper font-display flex items-center gap-2 uppercase tracking-tight">
              <span className="w-1.5 h-6 rounded bg-brand-acid block"></span>
              {t.sectionCopywriting}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Homepage Headline Option */}
              <div className="p-6 rounded-[20px] bg-surface-raised border border-brand-paper/5 space-y-4 ">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-acid font-bold">{t.primaryDisplayHeadline}</span>
                <div className="border-l-2 border-brand-acid/40 pl-4 py-1">
                  <h4 className="text-base sm:text-lg font-bold text-brand-paper font-sans leading-snug">
                    “{brief.headline}”
                  </h4>
                </div>
                <p className="text-xs text-brand-paper/50 leading-relaxed font-sans font-light">
                  {t.headlineExplanation}
                </p>
              </div>

              {/* High Inbound conversion CTA */}
              <div className="p-6 rounded-[20px] bg-surface-raised border border-brand-paper/5 space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-ice font-bold">{t.recommendedHeroAction}</span>
                  <div className="mt-3.5">
                    <button className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-ink bg-brand-acid select-none cursor-default font-mono">
                      {brief.cta}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-brand-paper/50 leading-relaxed font-sans font-light">
                  {t.ctaExplanation.replace('{x}', brief.cta)}
                </p>
              </div>

            </div>
          </div>

          {/* Aesthetic Philosophy Direction */}
          <div className="space-y-4 pb-4">
            <h3 className="text-base sm:text-lg font-extrabold text-brand-paper font-display flex items-center gap-2 uppercase tracking-tight">
              <span className="w-1.5 h-6 rounded bg-brand-acid block"></span>
              {t.sectionStyle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-6 rounded-[20px] bg-surface-raised border border-brand-paper/5 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-paper/40 block">{t.styleThemeMatrix}</span>
                  <h4 className="text-base font-extrabold text-brand-paper mt-1 capitalize font-display shrink-0">{brief.selectedStyle} {t.premiumConfiguration}</h4>
                </div>
                <p className="text-xs text-brand-paper/70 leading-relaxed font-sans font-light">{brief.designDirection.layoutDescription}</p>
                
                <div className="h-[1px] bg-brand-paper/10" />

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-paper/40 block">{t.typographyRecommendation}</span>
                  <p className="text-xs font-bold text-brand-paper font-mono bg-brand-ink px-3 py-1.5 rounded-lg border border-brand-paper/5 inline-block">{brief.designDirection.fontPairing}</p>
                </div>
              </div>

              {/* color blocks and quote */}
              <div className="p-6 rounded-[20px] bg-surface-raised border border-brand-paper/5 space-y-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-paper/40 block">{t.styleBoardAccents}</span>
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {brief.designDirection.colors.map((c, i) => (
                      <div key={i} className="space-y-1">
                        <div className="h-10 rounded border border-brand-paper/10" style={{ backgroundColor: c }} />
                        <span className="text-[8px] font-mono text-brand-paper/40 block text-center truncate">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] leading-relaxed italic text-brand-paper/60 font-sans border-t border-brand-paper/5 pt-4">
                  “{brief.designDirection.inspirationQuote}”
                </div>
              </div>
            </div>
          </div>

          {/* Tech Spec Alignment */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-extrabold text-brand-paper font-display flex items-center gap-2 uppercase tracking-tight">
              <span className="w-1.5 h-6 rounded bg-brand-acid block"></span>
              {t.sectionInfrastructure}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#0A1018] border border-brand-paper/10 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-wider text-brand-ice font-bold">{t.engineRuntime}</span>
                <p className="text-xs font-bold text-brand-paper font-mono">{brief.recommendedStack.frontend}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1018] border border-brand-paper/10 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-wider text-brand-acid font-bold">{t.hostIntegration}</span>
                <p className="text-xs font-bold text-brand-paper font-mono">{brief.recommendedStack.hosting}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1018] border border-brand-paper/10 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-wider text-brand-coral font-bold">{t.decoupledCms}</span>
                <p className="text-xs font-bold text-brand-paper font-mono">{brief.recommendedStack.cms}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1018] border border-brand-paper/10 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-wider text-brand-acid/70 font-bold">{t.motionPatterns}</span>
                <p className="text-xs font-bold text-brand-paper font-mono">{brief.recommendedStack.animations}</p>
              </div>
            </div>
          </div>

          {/* Interactive Steps & Next Progression */}
          <div className="space-y-4 pb-1">
            <h3 className="text-base sm:text-lg font-extrabold text-brand-paper font-display flex items-center gap-2 uppercase tracking-tight">
              <span className="w-1.5 h-6 rounded bg-brand-acid block"></span>
              {t.sectionMilestones}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brief.nextSteps.map((step, idx) => (
                <div key={idx} className="p-4 bg-surface-raised border border-brand-paper/10 rounded-xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-acid/15 text-brand-acid border border-brand-acid/30 flex items-center justify-center text-xs font-mono font-medium shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-brand-paper/80 leading-relaxed font-sans">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Sign-off Section */}
          <div className="pt-10 border-t border-brand-paper/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left font-sans">
              <p className="text-xs text-brand-paper/40 font-mono uppercase">{t.specAuthor}</p>
              <h5 className="text-sm font-bold text-brand-paper tracking-wide mt-1 font-display">PARNIL ENGINE</h5>
              <p className="text-[11px] text-brand-paper/50">{t.specAuthorLine2}</p>
            </div>
            
            <button
              onClick={handleCopyHash}
              className="px-5 py-2.5 text-xs font-mono tracking-widest text-[#F5F3EE]/60 hover:text-brand-paper border border-[#F5F3EE]/10 hover:border-brand-paper/20 hover:bg-[#F5F3EE]/5 rounded-xl transition-all cursor-pointer uppercase"
            >
              {copied ? `✓ ${t.copiedLabel}` : `⧉ ${t.copyMetadata}`}
            </button>
          </div>

        </div>
      </div>

      {/* Authorize Project Design Phase / Submit Proposal Interaction */}
      <div id="authorize-design-panel" className="bg-gradient-to-tr from-[#0E1520]/90 to-[#050A14] border border-[#F5F3EE]/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-brand-acid/10 blur-[80px]" />
        
        {!isApproved ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1 text-xs text-brand-acid uppercase font-mono tracking-wider font-bold">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span>{t.partnerKickoff}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-paper font-display uppercase leading-tight">
                {t.alignVisualsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-brand-paper/70 leading-relaxed font-sans max-w-xl font-light">
                {t.alignVisualsDesc}
              </p>
            </div>

            {/* Authorize Form */}
            <form onSubmit={handleApprove} className="md:col-span-5 bg-[#050A14]/60 border border-brand-paper/10 rounded-2xl p-5 space-y-4 w-full">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-brand-paper/50 font-mono block mb-1">{t.urgencyLabel}</label>
                <select 
                  value={formData.urgency} 
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full bg-[#0A1018] rounded-lg border border-brand-paper/10 p-3 text-xs text-brand-paper focus:outline-none focus:border-brand-acid/50 cursor-pointer text-brand-paper/90 select-none"
                >
                  <option value="Flexible">{t.standardScaleOption}</option>
                  <option value="Urgent">{t.accelerateOption}</option>
                  <option value="Enterprise">{t.enterpriseOption}</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-brand-paper/50 font-mono block mb-1">{t.bespokeRequestLabel}</label>
                <textarea
                  placeholder={t.bespokePlaceholder}
                  rows={2}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="w-full bg-[#0A1018] rounded-lg border border-brand-paper/10 p-3 text-xs text-brand-paper placeholder-brand-paper/30 focus:outline-none focus:border-brand-acid/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-ink bg-brand-acid hover:bg-brand-acid-hover hover:shadow-[0_0_20px_rgba(200,255,0,0.25)] transition-all cursor-pointer font-extrabold"
              >
                <span>{t.dispatchBriefBtn}</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 max-w-xl mx-auto">
            <div className="w-14 h-14 bg-brand-acid/15 text-brand-acid border border-brand-acid/30 rounded-full flex items-center justify-center mx-auto text-xl">
              <CheckCircle2 className="h-6 w-6 text-brand-acid" />
            </div>
            
            <div className="space-y-1">
              <span className="text-xs text-brand-acid font-mono uppercase tracking-widest block font-bold">{t.successTitle}</span>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#F5F3EE] font-display uppercase tracking-tight">
                {t.successTitle}
              </h4>
            </div>

            <p className="text-xs text-[#F5F3EE]/80 leading-relaxed font-sans bg-[#050A14]/50 p-4.5 rounded-xl border border-brand-paper/5 text-left font-light">
              {t.successDesc.replace('{x}', brief.id)}
            </p>

            <button
              onClick={() => setIsApproved(false)}
              className="inline-flex gap-1.5 text-xs text-brand-acid hover:text-brand-acid-hover font-mono font-bold uppercase tracking-widest mt-2 cursor-pointer"
            >
              <span>← {t.returnToCustomization}</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
