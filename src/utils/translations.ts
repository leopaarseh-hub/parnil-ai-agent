export type SupportedLang = 'de' | 'en' | 'tr' | 'fa';

export interface TranslationDict {
  // Common / Navigation
  studioName: string;
  studioTagline: string;
  activeBrief: string;
  exclusiveInterfaceScoping: string;
  buildCustomBrief: string;
  viewThemes: string;
  parnilSitemapLink: string;
  backToHome: string;

  // Hero
  heroHeadingStart: string;
  heroHeadingAccent: string;
  heroHeadingEnd: string;
  heroDescription: string;

  // Stats
  awardsNum: string;
  awardsLabel: string;
  modulesNum: string;
  modulesLabel: string;
  reviewsNum: string;
  reviewsLabel: string;
  responseNum: string;
  responseLabel: string;

  // Section Headers
  themeSectionTitle: string;
  themeSectionEyebrow: string;
  themeSectionDesc: string;
  verdictTitle: string;
  verdictEyebrow: string;
  verdictDesc: string;

  // Wizard General
  pipelineHeading: string;
  stepOf: string;
  stepIdentity: string;
  stepGoals: string;
  stepAesthetic: string;
  stepBlueprint: string;
  stepScope: string;
  validationNameError: string;
  validationEmailError: string;
  advanceStage: string;
  compileSpec: string;
  exitBuilder: string;
  back: string;

  // Wizard Step 1: Identity
  step1Title: string;
  step1Desc: string;
  companyNameLabel: string;
  companyNamePlaceholder: string;
  taglineLabel: string;
  taglinePlaceholder: string;
  categoryLabel: string;

  // Wizard Step 2: Goals
  step2Title: string;
  step2Desc: string;

  // Wizard Step 3: Aesthetic
  step3Title: string;
  step3Desc: string;

  // Wizard Step 4: Blueprint
  step4Title: string;
  step4Desc: string;

  // Wizard Step 5: Scope
  step5Title: string;
  step5Desc: string;
  budgetLabel: string;
  credentialsLabel: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;

  // Loading
  compileStageActive: string;
  assemblingBrief: string;
  compilingDesc: string;

  // Brief Document Layout
  dispatchSystem: string;
  briefCompiled: string;
  modifySpec: string;
  regenerateBrief: string;
  downloadPdf: string;
  architectureSpec: string;
  specSub: string;
  engineProtocol: string;
  activeStatus: string;
  businessDomain: string;
  targetCapital: string;
  targetTimeline: string;
  styleAlignment: string;
  sectionStrategy: string;
  sectionArchitecture: string;
  sectionCopywriting: string;
  sectionStyle: string;
  sectionInfrastructure: string;
  sectionMilestones: string;
  specAuthor: string;
  specAuthorLine2: string;
  copyMetadata: string;
  copiedLabel: string;

  // New Brief Document Section specifics
  primaryDisplayHeadline: string;
  headlineExplanation: string;
  recommendedHeroAction: string;
  ctaExplanation: string;
  styleThemeMatrix: string;
  premiumConfiguration: string;
  typographyRecommendation: string;
  styleBoardAccents: string;
  engineRuntime: string;
  hostIntegration: string;
  decoupledCms: string;
  motionPatterns: string;

  // Call to action form
  partnerKickoff: string;
  alignVisualsTitle: string;
  alignVisualsDesc: string;
  urgencyLabel: string;
  standardScaleOption: string;
  accelerateOption: string;
  enterpriseOption: string;
  bespokeRequestLabel: string;
  bespokePlaceholder: string;
  dispatchBriefBtn: string;
  successTitle: string;
  successDesc: string;
  returnToCustomization: string;

  // Business Category Labels
  catTechLabel: string;
  catTechDesc: string;
  catEcomLabel: string;
  catEcomDesc: string;
  catPortLabel: string;
  catPortDesc: string;
  catServLabel: string;
  catServDesc: string;
  catHospLabel: string;
  catHospDesc: string;
  catEduLabel: string;
  catEduDesc: string;
  catOtherLabel: string;
  catOtherDesc: string;

  // Goals Labels
  goalLeadsLabel: string;
  goalLeadsDesc: string;
  goalEcomLabel: string;
  goalEcomDesc: string;
  goalShowcaseLabel: string;
  goalShowcaseDesc: string;
  goalEducateLabel: string;
  goalEducateDesc: string;
  goalCommLabel: string;
  goalCommDesc: string;

  // Styles Labels
  styleLuxuryLabel: string;
  styleLuxuryDesc: string;
  styleModernLabel: string;
  styleModernDesc: string;
  styleMinimalLabel: string;
  styleMinimalDesc: string;
  stylePlayfulLabel: string;
  stylePlayfulDesc: string;
  styleCorpLabel: string;
  styleCorpDesc: string;

  // Page Blueprint options
  pageHomeLabel: string;
  pageHomeDesc: string;
  pageAboutLabel: string;
  pageAboutDesc: string;
  pageServLabel: string;
  pageServDesc: string;
  pagePortLabel: string;
  pagePortDesc: string;
  pageContactLabel: string;
  pageContactDesc: string;
  pageBlogLabel: string;
  pageBlogDesc: string;
  pageShopLabel: string;
  pageShopDesc: string;

  // Budgets
  budgetUnder5: string;
  budget5To10: string;
  budget10To25: string;
  budget25To50: string;
  budgetOver50: string;

  // Testimonials Quotes
  testimonial1Quote: string;
  testimonial1Author: string;
  testimonial1Role: string;
  testimonial2Quote: string;
  testimonial2Author: string;
  testimonial2Role: string;

  // Landing CTA section banner
  acceleratorBannerLabel: string;
  acceleratorBannerTitle: string;
  acceleratorBannerDesc: string;
  launchGeneratorBtn: string;
}

export const TRANSLATIONS: Record<SupportedLang, TranslationDict> = {
  de: {
    studioName: "Parnil Studio",
    studioTagline: "Maßgeschneiderte digitale Kunstwerke",
    activeBrief: "AKTIVER SPEZIFIKATIONS-ENTWURF",
    exclusiveInterfaceScoping: "Exklusive Interface-Analyse",
    buildCustomBrief: "Briefing erstellen",
    viewThemes: "Design-Themen ansehen",
    parnilSitemapLink: "parnil.studio/flagship/aether-dashboard",
    backToHome: "Zurück zur Startseite",

    heroHeadingStart: "KI-Berater für Ihr",
    heroHeadingAccent: "Wachstum",
    heroHeadingEnd: "in 3 Minuten.",
    heroDescription: "Führen Sie ein kurzes Gespräch mit dem KI-Wachstumsberater von Parnil. Er analysiert Ihr Unternehmen und liefert Ihnen in unter 3 Minuten eine maßgeschneiderte Strategie, einen Website-Plan und eine klare Investitionsschätzung. Starten Sie unten.",

    awardsNum: "34+",
    awardsLabel: "Internationale Design-Auszeichnungen",
    modulesNum: "100%",
    modulesLabel: "Handgefertigte Weblösungen, null Vorlagen",
    reviewsNum: "4.9★",
    reviewsLabel: "Kundenbewertungen weltweit",
    responseNum: "20ms",
    responseLabel: "Ziel-Serverantwort für statische Medien",

    themeSectionTitle: "Kreative Kunstrichtungen Entdecken",
    themeSectionEyebrow: "Muster-Ästhetik-Studio",
    themeSectionDesc: "Wählen Sie ein visuelles Konzept aus unserer Galerie, um den interaktiven Generator zu starten, oder passen Sie es im nächsten Schritt manuell an.",
    verdictTitle: "Nachhaltiges Vertrauen. Maßgeschneidert gebaut.",
    verdictEyebrow: "KUNDEN-FEEDBACK",
    verdictDesc: "Unser Fokus liegt konsequent auf Performance und Designqualität. Lesen Sie, wie unsere maßgeschneiderten Client-Schnittstellen aufstrebenden Teams Sicherheit geben.",

    pipelineHeading: "INTERAKTIVE KREATIVE DESIGN-PIPELINE",
    stepOf: "SCHRITT {x} VON 5",
    stepIdentity: "1. Identität",
    stepGoals: "2. Ziele",
    stepAesthetic: "3. Ästhetik",
    stepBlueprint: "4. Blueprint",
    stepScope: "5. Umfang",
    validationNameError: "Bitte geben Sie Ihren Geschäfts- oder Firmennamen in Schritt 1 ein.",
    validationEmailError: "Bitte geben Sie Ihre E-Mail-Adresse für die Lieferung im Schritt 5 ein.",
    advanceStage: "Nächster Schritt",
    compileSpec: "Spezifikationsbriefing erstellen",
    exitBuilder: "Builder verlassen",
    back: "Zurück",

    step1Title: "Strategische Identität definieren",
    step1Desc: "Wie heißt Ihr Unternehmen und was ist Ihr primäres Marktsegment? Dies verankert Sitemap und Copywriting-Formeln.",
    companyNameLabel: "Projekt- oder Firmenname",
    companyNamePlaceholder: "z.B. NeuraCore AI",
    taglineLabel: "Slogan / Mission (Optional)",
    taglinePlaceholder: "z.B. Moderne Analytik, vereinfacht.",
    categoryLabel: "Kategorie des Unternehmens auswählen",

    step2Title: "Kern-Wachstumsziel",
    step2Desc: "Welche primäre Aktion sollen Besucher ausführen? Dies definiert optimierte CTAs und Einstiegshaken.",

    step3Title: "Art Direction & Visuelle Ästhetik",
    step3Desc: "Wählen Sie ein visuelles Design aus, das die Farbpalette und das typografische Layout Ihres Projekts bestimmt.",

    step4Title: "Informations-Blueprint & Hauptseiten",
    step4Desc: "Wählen Sie aus, welche Seiten in der ersten Release-Version Ihres Parnil-Projekts enthalten sein sollen.",

    step5Title: "Projektumfang, Timeline & Lieferung",
    step5Desc: "Teilen Sie uns Ihr Budget und Ihre zeitliche Dringlichkeit mit, damit wir unsere Senior-Entwicklerressourcen einteilen können.",
    budgetLabel: "Voraussichtlicher Budgetrahmen",
    credentialsLabel: "Ihre Lieferdaten",
    fullNameLabel: "Ihr vollständiger Name",
    fullNamePlaceholder: "z.B. Christian Davenport",
    emailLabel: "Spezifikation senden an",
    emailPlaceholder: "z.B. chris@domain.de",

    compileStageActive: "SPEZIFIKATION WIRD ZUSAMMENGESTELLT",
    assemblingBrief: "Erstellung des maßgeschneiderten Briefings",
    compilingDesc: "Ziele werden analysiert, Textvorlagen generiert, empfohlene typografische Skalierungen und Sitemaps strukturiert...",

    dispatchSystem: "GENERATOR-EMPFANGSSYSTEM",
    briefCompiled: "Dynamisches Briefing erfolgreich erstellt",
    modifySpec: "Spezifikation anpassen",
    regenerateBrief: "Titel neu generieren",
    downloadPdf: "PDF herunterladen / Drucken",
    architectureSpec: "Web-Architektur- & Identitäts-Spezifikation",
    specSub: "Technische Spezifikations-Vorschlag von Parnil Studio für {name} am {date}.",
    engineProtocol: "ENGINE-PROTOKOLL",
    activeStatus: "AKTIVER SPEZIFIKATIONS-ENTWURF",
    businessDomain: "Unternehmensbereich",
    targetCapital: "Budgetrahmen",
    targetTimeline: "Zeitrahmen",
    styleAlignment: "Design-Ästhetik",
    sectionStrategy: "1. Projektstrategie & Markenausrichtung",
    sectionArchitecture: "2. Informationsarchitektur & Navigation",
    sectionCopywriting: "3. Copywriting-Ansätze für die Startseite",
    sectionStyle: "4. Designstil & Visuelle Richtungsweisung",
    sectionInfrastructure: "5. Empfohlene Produktions-Infrastruktur",
    sectionMilestones: "6. Meilensteine bei der Umsetzung",
    specAuthor: "PARNIL BUILD ENGINE",
    specAuthorLine2: "Bespoke Architectural Division, London Office",
    copyMetadata: "SOURCE-METADATEN IN ZWISCHENABLAGE KOPIEREN",
    copiedLabel: "✓ KOPIERT",

    primaryDisplayHeadline: "PRIMÄRE DISPLAY-ÜBERSCHRIFT",
    headlineExplanation: "Präzisiert formuliert, um mit hoher Autorität die Aufmerksamkeit der Besucher innerhalb der ersten 3 Sekunden zu fesseln.",
    recommendedHeroAction: "EMPFOHLENE CTA-AKTION",
    ctaExplanation: "Die Handlungsaufforderung „{x}“ nutzt Aufgaben-Progression und erzielt statistisch bis zu 40% höhere Klickraten.",
    styleThemeMatrix: "DESIGN-STIL-MATRIX",
    premiumConfiguration: "Premium-Konfiguration",
    typographyRecommendation: "TYPOGRAFIE-EMPFEHLUNG",
    styleBoardAccents: "ÄSTHETISCHE FARB-ACCENTS",
    engineRuntime: "LAUFZEIT-UMGEBUNG",
    hostIntegration: "HOST-INTEGRATION",
    decoupledCms: "CMS-ARCHITEKTUR",
    motionPatterns: "INTERAKTIVE BEWEGUNG",

    partnerKickoff: "PARTNER KICKOFF-HUB",
    alignVisualsTitle: "Visualisierung abstimmen. Projekt starten.",
    alignVisualsDesc: "Bereit, dieses Konzept in eine produktionsreife Web-Plattform zu verwandeln? Bestätigen Sie Ihre Optionen, um diese Spezifikation direkt an unser Design-Team zu übertragen.",
    urgencyLabel: "Projekt-Dringlichkeit",
    standardScaleOption: "Standard-Verlauf (Start in 6-12 Wochen)",
    accelerateOption: "Express-Lieferung (Launch in 4-6 Wochen)",
    enterpriseOption: "Strategisches Enterprise-Portfolio (Erfordert individuelles Scoping)",
    bespokeRequestLabel: "Zusätzliche Wünsche (Optional)",
    bespokePlaceholder: "Benötigen Sie Stripe-Zahlungen, spezielle Übersetzungen oder Datenbanken?",
    dispatchBriefBtn: "Briefing freigeben & absenden",
    successTitle: "Briefing erfolgreich übertragen",
    successDesc: "Unser leitender Interface-Architekt wird Ihr Spezifikations-Dossier prüfen. Ein individueller Entwurf sowie eine Kalendereinladung wurden an Ihre E-Mail-Adresse gesendet.",
    returnToCustomization: "← Zurück zur Anpassung",

    catTechLabel: "SaaS & Tech Startup",
    catTechDesc: "Abgestimmte Dashboards, Dark-Mode Bento-Raster und fließende Produkt-Drahtgittermodelle.",
    catEcomLabel: "E-Commerce-Plattform",
    catEcomDesc: "Transaktionsorientierte Pipelines, Headless-Stores und visuelle Produkt-Kataloge.",
    catPortLabel: "Architektur-Portfolio",
    catPortDesc: "Asymmetrische Portfolios, großzügiger Leerraum und fließende Übergänge.",
    catServLabel: "Dienstleistungen / Kanzleien",
    catServDesc: "Symmetrische Gitterlayouts, Vertrauensmetriken und redaktionelle Artikel.",
    catHospLabel: "Gastronomie & Hotellerie",
    catHospDesc: "Atmosphärische Header-Bilder, maßgeschneiderte Buchungen und digitale Menüs.",
    catEduLabel: "Bildung & Soziales",
    catEduDesc: "Strukturierte Informationscluster und barrierefreie Spendenportale.",
    catOtherLabel: "Individuelle Vision",
    catOtherDesc: "Völlig freie Entfaltung des Designkonzepts ohne vordefinierte Grenzen.",

    goalLeadsLabel: "Lead-Generierung & Anfragen",
    goalLeadsDesc: "Perfekt für Beratungsfirmen oder Agenturen, die nahtlose Terminbuchungen benötigen.",
    goalEcomLabel: "Direkter E-Commerce-Umsatz",
    goalEcomDesc: "Optimierte Warenkorb-Trichter, Filter-Grids und Headless Stripe-Checkouts.",
    goalShowcaseLabel: "Portfolio präsentieren & Autorität aufbauen",
    goalShowcaseDesc: "Konzentriert sich ganz auf hochauflösende Grafiken, Testimonials und Tech-Specs.",
    goalEducateLabel: "Inhalte & Insights teilen",
    goalEducateDesc: "Bietet strukturierte Newslettern, elegante Markdown-Blogs und Whitepapers.",
    goalCommLabel: "Community aufbauen",
    goalCommDesc: "Umfasst geschützte Mitgliederportale, Custom Foren und Abonnements.",

    styleLuxuryLabel: "Editorial Luxury",
    styleLuxuryDesc: "Feine goldene Neon-Akzente, Serifenschrift-Narrative, großzügiger Weißraum und tiefdunkle Kontraste.",
    styleModernLabel: "Tech Neo-Modernist",
    styleModernDesc: "Responsive Bento-Raster, florierende Lichteffekte, reaktive Copy-Flächen und mutige Typografie.",
    styleMinimalLabel: "Silent Minimalist",
    styleMinimalDesc: "Strenge Raster-Reduziertheit, asymmetrische Linienführungen und extrem fokussierte Typografie.",
    stylePlayfulLabel: "Warm & Playful",
    stylePlayfulDesc: "Organisch abgerundete Karten, lebhafte Pastelltöne, menschliche Töne und fröhliche Interaktionen.",
    styleCorpLabel: "Industrial Corporate",
    styleCorpDesc: "Seriöses Tiefblau, symmetrische Tabellen-Anordnungen, klare Vertrauens-Badges und Kanzlei-Layouts.",

    pageHomeLabel: "Startseite (Home)",
    pageHomeDesc: "Das Flaggschiff-Erlebnis Ihres Projekts",
    pageAboutLabel: "Über Uns (About)",
    pageAboutDesc: "Geschichte, Werte und Team-Vorstellung",
    pageServLabel: "Dienstleistungen (Services)",
    pageServDesc: "Kompetenz-Matrizen und Preistabellen",
    pagePortLabel: "Bespoke Portfolio Grid",
    pagePortDesc: "Kunden-Fallstudien und Galerien",
    pageContactLabel: "Kontakt-Zentrale",
    pageContactDesc: "Formulare, Maps und Buchungen",
    pageBlogLabel: "Redaktionelles Magazin (Blog)",
    pageBlogDesc: "Elegantes Editorial für Artikel und News",
    pageShopLabel: "Transaktions-Shop (Shop)",
    pageShopDesc: "Headless Stripe Checkout & Warenkorb",

    budgetUnder5: "Unter 5.000 €",
    budget5To10: "5.000 € - 10.000 €",
    budget10To25: "10.000 € - 25.000 €",
    budget25To50: "25.000 € - 50.000 €",
    budgetOver50: "Mehr als 50.000 €",

    testimonial1Quote: "Parnil hat nicht nur eine Website gebaut, sie haben unsere wichtigste Neukundengewinnung engineered. Unsere Pipeline wuchs in zwei Quartalen um 140%.",
    testimonial1Author: "Dominic Thorne",
    testimonial1Role: "Chief Product Officer, NeuraSaaS",
    testimonial2Quote: "Ihr Luxus-Design-Framework ist atemberaubend. Die Balance zwischen Raum und exzellenter Typografie gleicht architektonischer Kunst.",
    testimonial2Author: "Ariadne Sterling",
    testimonial2Role: "Principal Partner, Sterling & Architects",

    acceleratorBannerLabel: "ARCHITEKTUR-BLUEPRINT ACCELERATOR",
    acceleratorBannerTitle: "Formulieren Sie Ihr präzises Briefing in Sekundenschnelle.",
    acceleratorBannerDesc: "Wählen Sie Ihre Geschäftsbranche, Stilvorgaben und die Seitengröße. Unser System stellt sofort ein professionelles Konzept für Sie zusammen.",
    launchGeneratorBtn: "Interaktiven Generator starten"
  },
  en: {
    studioName: "Parnil Studio",
    studioTagline: "Bespoke creative digital artworks",
    activeBrief: "ACTIVE SPECIFICATION DRAFT",
    exclusiveInterfaceScoping: "Exclusive Interface Scoping",
    buildCustomBrief: "Build Custom Brief",
    viewThemes: "View Design Themes",
    parnilSitemapLink: "parnil.studio/flagship/aether-dashboard",
    backToHome: "Back to home",

    heroHeadingStart: "Your AI Growth",
    heroHeadingAccent: "Consultant",
    heroHeadingEnd: "in 3 Minutes.",
    heroDescription: "Have a quick chat with Parnil's AI growth consultant. It analyzes your business and hands you a tailored strategy, website plan, and clear investment estimate — in under 3 minutes. Start below.",

    awardsNum: "34+",
    awardsLabel: "International visual design awards",
    modulesNum: "100%",
    modulesLabel: "Handmade web solutions, zero templates used",
    reviewsNum: "4.9★",
    reviewsLabel: "Client reviews across globally noted agencies",
    responseNum: "20ms",
    responseLabel: "Target server response for static assets",

    themeSectionTitle: "Explore Creative Movements",
    themeSectionEyebrow: "Aesthetic Directional Showcase",
    themeSectionDesc: "Choose an initial design style to launch the customized generator, or configure it step-by-step manually.",
    verdictTitle: "Sustained Trust. Built Custom.",
    verdictEyebrow: "VERDICT SELECTION",
    verdictDesc: "Our focus is aligned strictly with performance and design fidelity. Read how our bespoke client interfaces provide sustainable acquisition security for emerging teams.",

    pipelineHeading: "INTERACTIVE BRIEF GENERATIVE PIPELINE",
    stepOf: "STEP {x} OF 5",
    stepIdentity: "1. Identity",
    stepGoals: "2. Goals",
    stepAesthetic: "3. Aesthetic",
    stepBlueprint: "4. Blueprint",
    stepScope: "5. Scope",
    validationNameError: "Please enter your business or company name on Stage 1.",
    validationEmailError: "Please enter your delivery email address on Stage 5.",
    advanceStage: "Advance Stage",
    compileSpec: "Compile Spec Blueprint",
    exitBuilder: "Exit Builder",
    back: "Back",

    step1Title: "Define Your Strategic Identity",
    step1Desc: "What is your business name and primary market segment? This anchors sitemap and copywriting formulas.",
    companyNameLabel: "Project or Company Name",
    companyNamePlaceholder: "e.g. NeuraCore AI",
    taglineLabel: "Tagline / Mission (Optional)",
    taglinePlaceholder: "e.g. Modern analytics, simplified.",
    categoryLabel: "Select Business Category",

    step2Title: "Core Strategic Growth Goal",
    step2Desc: "What is the premium action you want visitors to make? This defines optimized CTA phrasing and wireframe hooks.",

    step3Title: "Art Direction & Visual Aesthetic",
    step3Desc: "Parnil’s visuals are built strictly on creative alignment. Choose your visual direction to dictate palette values and typographic pairings.",

    step4Title: "Information Blueprint & Core Pages",
    step4Desc: "Select which page scopes you require in Parnil’s initial production release. Home is included by default.",

    step5Title: "Project Scope, Timeline & Delivery",
    step5Desc: "Let us know your targeted budget threshold and preferred kickoff timeframe so we can map out our senior developer resources.",
    budgetLabel: "Approximate Budget Priority Tier",
    credentialsLabel: "Your Delivery Credentials",
    fullNameLabel: "Your Full Name",
    fullNamePlaceholder: "e.g. Christian Davenport",
    emailLabel: "Deliver Proposal To Address",
    emailPlaceholder: "e.g. chris@domain.com",

    compileStageActive: "COMPILE STAGE ACTIVE",
    assemblingBrief: "Assembling Bespoke Brief",
    compilingDesc: "Analyzing goals, generating copy templates, structuring recommended typography scales & sitemaps...",

    dispatchSystem: "GENERATOR DISPATCH SYSTEM",
    briefCompiled: "Dynamic Brief Specs Compiled",
    modifySpec: "Modify Spec",
    regenerateBrief: "Regen Titles",
    downloadPdf: "Download PDF / Print",
    architectureSpec: "Web Architecture & Identity Specification",
    specSub: "Technical configuration proposal compiled by Parnil Studio for {name} on {date}.",
    engineProtocol: "ENGINE PROTOCOL",
    activeStatus: "ACTIVE PROPOSAL",
    businessDomain: "Business Domain",
    targetCapital: "Target Capital",
    targetTimeline: "Target Timeline",
    styleAlignment: "Axe Ethos Alignment",
    sectionStrategy: "1. Project Strategy & Alignment",
    sectionArchitecture: "2. Information Architecture",
    sectionCopywriting: "3. Flagship Launch Copywriting",
    sectionStyle: "4. Design Style & Visual Direction",
    sectionInfrastructure: "5. Recommended Production Infrastructure",
    sectionMilestones: "6. Implementation Milestones",
    specAuthor: "PARNIL DECOUPLED BUILD ENGINE",
    specAuthorLine2: "Bespoke Architectural Division, London Office",
    copyMetadata: "COPY SOURCE METADATA",
    copiedLabel: "✓ SOURCE COPIED",

    primaryDisplayHeadline: "PRIMARY DISPLAY HEADLINE",
    headlineExplanation: "Compiled using a conversational authority formula, instantly capturing immediate industry gravity and positioning your value metric within 3 seconds of entry.",
    recommendedHeroAction: "RECOMMENDED HERO ACTION (CTA)",
    ctaExplanation: "The action label “{x}” leverages psychological task progression dynamics, resulting in a 40%+ higher click rate than generic words.",
    styleThemeMatrix: "STYLE THEME MATRIX",
    premiumConfiguration: "Premium Configuration",
    typographyRecommendation: "TYPOGRAPHY RECOMMENDATION",
    styleBoardAccents: "STYLE BOARD ACCENTS",
    engineRuntime: "ENGINE RUNTIME",
    hostIntegration: "HOST INTEGRATION",
    decoupledCms: "DECOUPLED CMS",
    motionPatterns: "MOTION PATTERNS",

    partnerKickoff: "PARTNER KICKOFF HUB",
    alignVisualsTitle: "Align Visuals. Initiate Private Discovery.",
    alignVisualsDesc: "Ready to transform this structured blueprint into a custom web, production-grade platform? Confirm your schedule preferences below to dispatch this spec bundle directly to our senior design team.",
    urgencyLabel: "Launch Focus Urgency",
    standardScaleOption: "Standard Scale (6 - 12 weeks kickoff)",
    accelerateOption: "Accelerate Dispatch (4 - 6 weeks launch)",
    enterpriseOption: "Strategic Multi-Suite Enterprise (Requires bespoke scoping)",
    bespokeRequestLabel: "Incorporate Bespoke Requests (Optional)",
    bespokePlaceholder: "Need Stripe gateways, specific translations, or localized databases?",
    dispatchBriefBtn: "Authorize & Dispatch Spec Brief",
    successTitle: "Brief Sent to Senior Architecture Suite",
    successDesc: "Our chief interface engineer will review your spec portfolio. A custom blueprint draft and calendar invite has been dispatched to your registered profile address.",
    returnToCustomization: "← Return to Customization Controls",

    catTechLabel: "SaaS & Tech Startup",
    catTechDesc: "Bespoke dashboards, dark-mode bento blocks, and fluid product wireframes.",
    catEcomLabel: "E-commerce Hub",
    catEcomDesc: "Transactional commerce pipelines, headless stores, and visual catalog cards.",
    catPortLabel: "Architectural Portfolio",
    catPortDesc: "Asymmetric portfolios, generous white margins, and modern smooth fades.",
    catServLabel: "Professional Services",
    catServDesc: "Firm credibility layouts, symmetrical grids, trust metrics, and expert blogs.",
    catHospLabel: "Hospitality & Culinary",
    catHospDesc: "Cinematic full-height atmospheric headers, custom bookings, and menus.",
    catEduLabel: "Education & Cause",
    catEduDesc: "Accessible informative clusters, responsive calendars, and direct donations.",
    catOtherLabel: "Bespoke Custom Idea",
    catOtherDesc: "Completely unconstrained design scope, custom responsive elements.",

    goalLeadsLabel: "Generate Leads & Sales Opportunities",
    goalLeadsDesc: "Perfect for consultancies or service-led hubs needing seamless meeting setups.",
    goalEcomLabel: "Direct E-Commerce Conversion",
    goalEcomDesc: "Optimized cart funnels, robust filter grids, and headless stripe checkouts.",
    goalShowcaseLabel: "Celebrate Intellectual Portfolio & Authority",
    goalShowcaseDesc: "Focuses entirely on high-resolution graphics, testimonials, and detail specs.",
    goalEducateLabel: "Broadcast Industry Insights",
    goalEducateDesc: "Provides structured newsletter collection, rich markdown blogs, and whitepapers.",
    goalCommLabel: "Facilitate Direct Member Interactions",
    goalCommDesc: "Includes protected portal gateways, custom forums, and subscription lists.",

    styleLuxuryLabel: "Editorial Luxury",
    styleLuxuryDesc: "Sartorial gold, serif display narrative structure, silent whitespace padding, high-contrast dark backgrounds.",
    styleModernLabel: "Tech Neo-Modernist",
    styleModernDesc: "Bento-block responsive outlines, soft neon bioluminescent glows, reactive copy grids, confident styles.",
    styleMinimalLabel: "Silent Minimalist",
    styleMinimalDesc: "Pure structural grid restraint, medium zinc overlays, asymmetric focal entries, and high white density.",
    stylePlayfulLabel: "Warm & Playful",
    stylePlayfulDesc: "Organic curved cards, responsive bright pastels, warm human copy tones, bouncy spring loaders.",
    styleCorpLabel: "Industrial Corporate",
    styleCorpDesc: "Deep professional corporate blues, symmetrical metric charts, clear trust badges, structured advisors.",

    pageHomeLabel: "Home Page",
    pageHomeDesc: "Core entry flagship viewport",
    pageAboutLabel: "About Agency",
    pageAboutDesc: "pedigree, values, team, index",
    pageServLabel: "Services/Tech Tiers",
    pageServDesc: "competency matrices, pricing structure",
    pagePortLabel: "Bespoke Portfolio Grid",
    pagePortDesc: "client case studies, galleries",
    pageContactLabel: "Contact Launchpad",
    pageContactDesc: "lead forms, maps, timetables",
    pageBlogLabel: "Blog & Editorial Hub",
    pageBlogDesc: "markdown articles, newsletters",
    pageShopLabel: "Digital Transactional Shop",
    pageShopDesc: "stripe integrations, checkouts",

    budgetUnder5: "Under $5,000",
    budget5To10: "$5,000 - $10,000",
    budget10To25: "$10,000 - $25,000",
    budget25To50: "$25,000 - $50,000",
    budgetOver50: "$50,000+",

    testimonial1Quote: "Parnil did not just build a website, they engineered our primary client acquisition engine. Our pipeline grew by 140% in two quarters.",
    testimonial1Author: "Dominic Thorne",
    testimonial1Role: "Chief Product Officer, NeuraSaaS",
    testimonial2Quote: "Their luxury design framework is breathtaking. The balance of negative space and typography is equivalent to architectural fine art.",
    testimonial2Author: "Ariadne Sterling",
    testimonial2Role: "Principal Partner, Sterling & Architects",

    acceleratorBannerLabel: "ARCHITECTURAL BLUEPRINT ACCELERATOR",
    acceleratorBannerTitle: "Formulate Your Precise Website Proposal In Seconds.",
    acceleratorBannerDesc: "Choose your business domain, style guidelines, and page scale. Our system instantly compiles an expert-grade spec outline detailing homepage taglines, sitemap, next steps, and technical stacks.",
    launchGeneratorBtn: "Launch Interactive Generator"
  },
  tr: {
    studioName: "Parnil Stüdyo",
    studioTagline: "Kişiye özel yaratıcı dijital sanat eserleri",
    activeBrief: "AKTİF ŞARTNAME TASLAĞI",
    exclusiveInterfaceScoping: "Özel Arayüz Kapsam Belirleme",
    buildCustomBrief: "Özel Şartname Oluştur",
    viewThemes: "Tasarım Temalarını İncele",
    parnilSitemapLink: "parnil.studio/flagship/aether-dashboard",
    backToHome: "Ana sayfaya dön",

    heroHeadingStart: "Yapay Zeka",
    heroHeadingAccent: "Büyüme Danışmanınız",
    heroHeadingEnd: "3 Dakikada.",
    heroDescription: "Parnil'in yapay zeka büyüme danışmanıyla kısa bir sohbet edin. İşletmenizi analiz eder ve 3 dakikadan kısa sürede size özel bir strateji, web sitesi planı ve net bir yatırım tahmini sunar. Aşağıdan başlayın.",

    awardsNum: "34+",
    awardsLabel: "Uluslararası görsel tasarım ödülü",
    modulesNum: "100%",
    modulesLabel: "El yapımı web çözümleri, sıfır hazır şablon kullanımı",
    reviewsNum: "4.9★",
    reviewsLabel: "Küresel ölçekte müşteri değerlendirmeleri",
    responseNum: "20ms",
    responseLabel: "Statik medya için hedeflenen sunucu yanıt süresi",

    themeSectionTitle: "Yaratıcı Akımları Keşfet",
    themeSectionEyebrow: "Estetik Yönelim Vitrini",
    themeSectionDesc: "Kişiselleştirilmiş şartname oluşturucuyu başlatmak için bir başlangıç stili seçin veya adımları manuel olarak yapılandırın.",
    verdictTitle: "Sürdürülebilir Güven. Özel Üretim.",
    verdictEyebrow: "MÜŞTERİ GÖRÜŞLERİ",
    verdictDesc: "Odağımız tamamen performans ve tasarım hassasiyetidir. Kişiye özel tasarlanmış arayüzlerimizin yeni kurulan ekiplere nasıl sürdürülebilir kazanım güvenliği sağladığını okuyun.",

    pipelineHeading: "ETKİLEŞİMLİ ŞARTNAME ÜRETİM HATTI",
    stepOf: "ADIM {x} / 5",
    stepIdentity: "1. Kimlik",
    stepGoals: "2. Hedefler",
    stepAesthetic: "3. Estetik",
    stepBlueprint: "4. Plan",
    stepScope: "5. Kapsam",
    validationNameError: "Lütfen 1. Adımda şirketinizin veya projenizin adını girin.",
    validationEmailError: "Lütfen 5. Adımda şartnamenin gönderileceği e-posta adresini girin.",
    advanceStage: "Sonraki Adım",
    compileSpec: "Şartname Planını Derle",
    exitBuilder: "Builder'dan Çık",
    back: "Geri",

    step1Title: "Stratejik Kimliğinizi Tanımlayın",
    step1Desc: "İşletmenizin adı ve birincil pazar segmenti nedir? Bu sorular site haritasını ve metin yazarlığı formüllerini belirler.",
    companyNameLabel: "Proje veya Şirket Adı",
    companyNamePlaceholder: "Örn. NeuraCore AI",
    taglineLabel: "Slogan / Misyon (Seçimsel)",
    taglinePlaceholder: "Örn. Modern analitik, basitleştirildi.",
    categoryLabel: "İşletme Kategorisini Seçin",

    step2Title: "Temel Stratejik Büyüme Hedefi",
    step2Desc: "Ziyaretçilerin yapmasını istediğiniz öncelikli eylem nedir? Bu soru metin yazarlığı ve harekete geçirici mesajları belirler.",

    step3Title: "Sanat Yönetimi ve Görsel Estetik",
    step3Desc: "Projenizin renk paletini ve tipografik düzenini belirlemek için bir görsel yön seçin.",

    step4Title: "Bilgi Planı & Temel Sayfalar",
    step4Desc: "Parnil projenizin ilk sürümünde hangi sayfaların yer almasını istediğinizi seçin.",

    step5Title: "Proje Kapsamı, Zaman Çizelgesi & Teslimat",
    step5Desc: "Geliştirici kaynaklarımızı planlayabilmemiz için bütçenizi ve zamanlama önceliğinizi bize bildirin.",
    budgetLabel: "Yaklaşık Bütçe Ölçeği",
    credentialsLabel: "Teslimat Kimlik Bilgileriniz",
    fullNameLabel: "Tam Adınız",
    fullNamePlaceholder: "Örn. Christian Davenport",
    emailLabel: "Şartnameyi Gönderilecek Adres",
    emailPlaceholder: "Örn. chris@domain.com",

    compileStageActive: "DERLEME AŞAMASI AKTİF",
    assemblingBrief: "Kişiselleştirilmiş Şartname Derleniyor",
    compilingDesc: "Hedefler analiz ediliyor, metin şablonları oluşturuluyor, önerilen tipografi ölçekleri ve site haritaları yapılandırılıyor...",

    dispatchSystem: "JENERATÖR GÖNDERİM SİSTEMİ",
    briefCompiled: "Dinamik Şartname Planı Derlendi",
    modifySpec: "Şartnameyi Düzenle",
    regenerateBrief: "Başlıkları Yenile",
    downloadPdf: "PDF İndir / Yazdır",
    architectureSpec: "Web Mimarisi & Kimlik Şartnamesi",
    specSub: "Parnil Studio tarafından {name} için {date} tarihinde oluşturulmuş teknik detay önerisi.",
    engineProtocol: "MOTOR PROTOKOLÜ",
    activeStatus: "AKTİF PROJE TEKLİFİ",
    businessDomain: "İşletme Sektörü",
    targetCapital: "Hedef Bütçe",
    targetTimeline: "Teslimat Süresi",
    styleAlignment: "Tasarım Estetiği",
    sectionStrategy: "1. Proje Stratejisi & Hizalama",
    sectionArchitecture: "2. Bilgi Mimarisi & Site Haritası",
    sectionCopywriting: "3. Amiral Gemisi Lansman Metinleri",
    sectionStyle: "4. Tasarım Stili & Görsel Yönlendirme",
    sectionInfrastructure: "5. Önerilen Üretim Altyapısı",
    sectionMilestones: "6. Uygulama Kilometre Taşları",
    specAuthor: "PARNIL MERKEZİ ÜRETİM MOTORU",
    specAuthorLine2: "Bespoke Architectural Division, London Office",
    copyMetadata: "KAYNAK METADATAYI KOPYALA",
    copiedLabel: "✓ KAYNAK KOPYALANDI",

    primaryDisplayHeadline: "BİRİNCİL EKRAN BAŞLIĞI",
    headlineExplanation: "Ziyaretçilerin ilgisini ilk 3 saniye içinde çekmek amacıyla, konuşma dili otorite formülüyle özel olarak tasarlanmıştır.",
    recommendedHeroAction: "ÖNERİLEN CTA EYLEMİ",
    ctaExplanation: "“{x}” aksiyon etiketi psikolojik görev tamamlama dinamiklerini tetikler ve standart butonlara göre %40 daha fazla tıklama alır.",
    styleThemeMatrix: "TASARIM STİL MATRİSİ",
    premiumConfiguration: "Premium Konfigürasyon",
    typographyRecommendation: "TİPOGRAFİ TAVSİYESİ",
    styleBoardAccents: "RENK PALETİ PANOSU",
    engineRuntime: "ALTYAPI ÇALIŞMA SÜRESİ",
    hostIntegration: "BULUT SUNUCU ENTEGRASYONU",
    decoupledCms: "BAĞIMSIZ CMS PLATFORMU",
    motionPatterns: "KULLANICI HAREKET ŞABLONLARI",

    partnerKickoff: "ORTAK BAŞLANGIÇ MERKEZİ",
    alignVisualsTitle: "Görselleri Hizala. Keşif Aşamasını Başlat.",
    alignVisualsDesc: "Bu yapılandırılmış planı üretime hazır, özel bir web platformuna dönüştürmeye hazır mısınız? Bu şartname paketini tasarım ekibimize iletmek için tercihlerinizi onaylayın.",
    urgencyLabel: "Lansman Önceliği",
    standardScaleOption: "Standart Süreç (6 - 12 hafta içinde başlangıç)",
    accelerateOption: "Hızlandırılmış Gönderim (4 - 6 hafta içinde lansman)",
    enterpriseOption: "Stratejik Enterprise Portföyü (Özel kapsam gerektirir)",
    bespokeRequestLabel: "Özel Talepleriniz (İsteğe Bağlı)",
    bespokePlaceholder: "Stripe ödeme altyapısı, özel dil destekleri veya yerelleştirilmiş veritabanı gerekiyor mu?",
    dispatchBriefBtn: "Şartnameyi Onayla ve Gönder",
    successTitle: "Şartname Kıdemli Mimari Ekibe İletildi",
    successDesc: "Baş arayüz mühendisimiz şartname dosyanızı inceleyecektir. Özel bir taslak ve takvim daveti kayıtlı e-posta adresinize gönderilmiştir.",
    returnToCustomization: "← Özelleştirme Kontrollerine Dön",

    catTechLabel: "SaaS & Teknoloji Girişimi",
    catTechDesc: "Özel paneller, karanlık mod bento şemaları ve akıcı ürün çizimleri.",
    catEcomLabel: "E-Ticaret Merkezi",
    catEcomDesc: "Ödeme süreçleri, headless mağazalar ve görsel ürün katalog kartları.",
    catPortLabel: "Mimari Portföy",
    catPortDesc: "Asimetrik tasarımlar, geniş boşluklar ve pürüzsüz görsel geçişler.",
    catServLabel: "Profesyonel Hizmetler",
    catServDesc: "Şirket prestij sunumları, simetrik ızgara tasarımları ve uzmanlık makaleleri.",
    catHospLabel: "Restoran & Otelcilik",
    catHospDesc: "Tam ekran atmosferik başlıklar, özel rezervasyon ve menü modülleri.",
    catEduLabel: "Eğitim & Sosyal Girişim",
    catEduDesc: "Erişilebilir bilgi panelleri, duyarlı etkinlik takvimleri ve doğrudan bağış modülleri.",
    catOtherLabel: "Özel Tasarım Fikri",
    catOtherDesc: "Herhangi bir sınır olmaksızın, tamamen projenize özel tasarlanmış web ögeleri.",

    goalLeadsLabel: "Müşteri Adayı & Talep Toplama",
    goalLeadsDesc: "Hızlı randevular ve kesintisiz toplantı kurulumu gerektiren danışmanlıklar için mükemmeldir.",
    goalEcomLabel: "Doğrudan E-Ticaret Dönüşümü",
    goalEcomDesc: "Optimize edilmiş sepet adımları, filtreleme panelleri ve stripe ödeme sistemleri.",
    goalShowcaseLabel: "Portföy Sunumu & Marka Otoritesi",
    goalShowcaseDesc: "Tamamen yüksek çözünürlüklü grafiklere, müşteri yorumlarına ve teknik detaylara odaklanır.",
    goalEducateLabel: "Bilgi & Insights Paylaşımı",
    goalEducateDesc: "Düzenli bülten aboneliği, markdown tabanlı blog yazıları ve raporlar sağlar.",
    goalCommLabel: "Doğrudan Üye Etkileşimini Kolaylaştırma",
    goalCommDesc: "Şifre korumalı üye portalları, özel forumlar ve abonelik listeleri içerir.",

    styleLuxuryLabel: "Editorial Luxury",
    styleLuxuryDesc: "Özel altın neon dokunuşları, serif başlıklar, şık kenarlıklar ve sinematik geçişler.",
    styleModernLabel: "Tech Neo-Modernist",
    styleModernDesc: "Kutulu bento tasarımları, yumuşak neon parlamaları, dinamik başlıklar ve modern tipografi.",
    styleMinimalLabel: "Silent Minimalist",
    styleMinimalDesc: "Yalın ızgara düzeni, derin gri yüzeyler ve son derece keskin tipografik odak noktaları.",
    stylePlayfulLabel: "Warm & Playful",
    stylePlayfulDesc: "Yumuşak kavisli kartlar, canlı pastel tonlar, samimi dil anlatımları ve hareketli ögeler.",
    styleCorpLabel: "Industrial Corporate",
    styleCorpDesc: "Profesyonel lacivert tonlar, simetrik veri şemaları, net güven rozetleri ve kurumsal düzenler.",

    pageHomeLabel: "Ana Sayfa",
    pageHomeDesc: "Projenizin en önemli ana vitrini",
    pageAboutLabel: "Hakkımızda",
    pageAboutDesc: "Tarihçe, değerlerimiz ve ekip tanıtımları",
    pageServLabel: "Hizmetlerimiz / Yetkinlikler",
    pageServDesc: "Detaylı hizmet listesi ve bütçe şeması",
    pagePortLabel: "Vaka Analizleri & Portföy",
    pagePortDesc: "Projeler, müşteri galerileri",
    pageContactLabel: "İletişim Başlangıç Noktası",
    pageContactDesc: "Formlar, haritalar ve zaman çizelgeleri",
    pageBlogLabel: "Editöryal Blog / Haberler",
    pageBlogDesc: "Haberler ve düzenli makale gönderimleri",
    pageShopLabel: "Dijital Satış Mağazası",
    pageShopDesc: "Headless sepet tasarımları ve stripe entegrasyonu",

    budgetUnder5: "5.000 € Altı",
    budget5To10: "5.000 € - 10.000 €",
    budget10To25: "10.000 € - 25.000 €",
    budget25To50: "25.000 € - 50.000 €",
    budgetOver50: "50.000 € Üstü",

    testimonial1Quote: "Parnil sadece bir web sitesi yapmadı, asıl müşteri edinme mekanizmamızı kurdu. Satış sirkülasyonumuz iki çeyrekte %140 büyüdü.",
    testimonial1Author: "Dominic Thorne",
    testimonial1Role: "CPO, NeuraSaaS",
    testimonial2Quote: "Lüks tasarım yaklaşımları gerçekten nefes kesici. Tipografi ve boşlukların dengesi adeta mimari sanat eseri değerinde.",
    testimonial2Author: "Ariadne Sterling",
    testimonial2Role: "Yönetici Ortak, Sterling & Architects",

    acceleratorBannerLabel: "MİMARİ TASLAK HIZLANDIRICI",
    acceleratorBannerTitle: "Saniyeler İçinde Kusursuz Bir Teklif Şartnamesi Derleyin.",
    acceleratorBannerDesc: "Sektörünüzü, tasarım zevkinizi ve sayfa boyutunuzu seçin. Sistemimiz; site haritasını, amiral gemisi lansman başlıklarını ve gerekli altyapıyı anında derlesin.",
    launchGeneratorBtn: "Generator'ı Başlat"
  },
  fa: {
    studioName: "استودیو پارنیل",
    studioTagline: "طراحی سفارشی آثار فاخر خلاقانه و دیجیتال",
    activeBrief: "پیش‌نویس مشخصات فعال پروژه",
    exclusiveInterfaceScoping: "تعیین محدوده اختصاصی رابط کاربری",
    buildCustomBrief: "تدوین پروپوزال و بریف اختصاصی",
    viewThemes: "نمایه‌های طراحی معماری",
    parnilSitemapLink: "parnil.studio/flagship/aether-dashboard",
    backToHome: "بازگشت به خانه",

    heroHeadingStart: "مشاور رشد",
    heroHeadingAccent: "هوش مصنوعی",
    heroHeadingEnd: "در ۳ دقیقه.",
    heroDescription: "با مشاور رشد هوش مصنوعی پارنیل گفتگوی کوتاهی داشته باشید. کسب‌وکار شما را تحلیل می‌کند و در کمتر از ۳ دقیقه استراتژی اختصاصی، طرح وب‌سایت و برآورد سرمایه‌گذاری شفاف به شما می‌دهد. از پایین شروع کنید.",

    awardsNum: "34+",
    awardsLabel: "جوایز بین‌المللی طراحی بصری",
    modulesNum: "100%",
    modulesLabel: "طراحی‌های اختصاصی دست‌ساز بدون قالب‌های آماده",
    reviewsNum: "4.9★",
    reviewsLabel: "نظرات کارفرمایان در برجسته‌ترین پلتفرم‌های جهانی",
    responseNum: "20ms",
    responseLabel: "سرعت لود هدف برای منابع استاتیک وب",

    themeSectionTitle: "جنبش‌های خلاقانه طراحی را کاوش کنید",
    themeSectionEyebrow: "نمایشگاه هدایت زیبایی‌شناختی",
    themeSectionDesc: "یک سبک طراحی اولیه برای راه‌اندازی ژنراتور سفارشی انتخاب کنید یا گام‌به‌گام به صورت دستی پیکربندی کنید.",
    verdictTitle: "اعتماد پایدار. ساخت به صورت سفارشی.",
    verdictEyebrow: "برداشت نهایی کارفرمایان",
    verdictDesc: "تمرکز ما دقیقاً معطوف به کارایی و کیفیت بی‌چون‌وچرای طراحی است. بخوانید که چگونه رابط‌های بومی ما ثبات کسب مشتری را برای تیم‌های در خال توسعه تضمین می‌کنند.",

    pipelineHeading: "فرآیند تعاملی تدوین بریف هوشمند",
    stepOf: "گام {x} از ۵",
    stepIdentity: "۱. هویت",
    stepGoals: "۲. اهداف",
    stepAesthetic: "۳. زیباشناسی",
    stepBlueprint: "۴. نقشه راه",
    stepScope: "۵. بودجه و محدوده",
    validationNameError: "لطفاً نام کسب‌وکار یا شرکت خود را در گام ۱ وارد کنید.",
    validationEmailError: "لطفاً آدرس ایمیل دریافت بریف را در گام ۵ وارد کنید.",
    advanceStage: "باز کردن گام بعدی",
    compileSpec: "تدوین و خروجی نهایی بریف",
    exitBuilder: "خروج از ابزار",
    back: "قبلی",

    step1Title: "هویت استراتژیک خود را تعیین کنید",
    step1Desc: "نام پروژه یا عنوان مجموعه و بازار هدف شما چیست؟ این بخش ساختار سایت و فرمول‌های محتوایی را شکل می‌دهد.",
    companyNameLabel: "نام پروژه یا مجموعه کسب‌وکار",
    companyNamePlaceholder: "مثلاً NeuraCore AI",
    taglineLabel: "شعار برند یا ماموریت پروژه (اختیاری)",
    taglinePlaceholder: "مثلاً آنالیزهای مدرن، ساده‌شده.",
    categoryLabel: "دسته‌بندی حوزه کاری خود را انتخاب کنید",

    step2Title: "هدف استراتژیک رشد و پیشرفت",
    step2Desc: "چه اقدام کلیدی‌ای می‌خواهید مخاطبین در وب‌سایت انجام دهند؟ این مورد دکمه‌های فراخوانی و ساختار لندینگ را تعیین می‌کند.",

    step3Title: "هدایت هنری و زیبایی‌شناسی بصری",
    step3Desc: "یکی از سبک‌های متمایز را انتخاب کنید تا ترکیب فونت‌ها، رنگ‌ها و تعاملات بر اساس آن تنظیم شوند.",

    step4Title: "چارچوب صفحات و نقشه راه کلی اطلاعات",
    step4Desc: "شخصی‌سازی کنید که کدام بخش‌ها و صفحات در فاز نخست لانچ پروژه استودیو پارنیل توسعه داده شوند.",

    step5Title: "محدوده پروژه، زمان تحویل و بودجه",
    step5Desc: "حریم بودجه و اورژانسی بودن زمان تحویل را مشخص کنید تا منابع برنامه‌نویس ارشد خود را برای شما تخصیص دهیم.",
    budgetLabel: "بازه تخمینی سرمایه‌گذاری پروژه",
    credentialsLabel: "مشخصات تحویل و ارتباطی شما",
    fullNameLabel: "نام و نام خانوادگی شما",
    fullNamePlaceholder: "مثلاً علی پارسا",
    emailLabel: "آدرس ایمیل جهت ارسال بریف نهایی",
    emailPlaceholder: "مثلاً ali@domain.com",

    compileStageActive: "مرحله کامپایل و هوش مصنوعی فعال است",
    assemblingBrief: "در حال پیکربندی و تدوین بریف سفارشی شما",
    compilingDesc: "در حال تحلیل و بررسی اهداف، ایجاد کدهای متنی، ساختار فونت‌ها، ترکیب رنگ‌ها و ترسیم سلسله مراتب نقشه راه...",

    dispatchSystem: "سیستم اعزام و پردازش ژنراتور",
    briefCompiled: "بریف فنی داینامیک با موفقیت تدوین شد",
    modifySpec: "کالیبره و ویرایش مجدد مشخصات",
    regenerateBrief: "ایجاد مجدد عناوین",
    downloadPdf: "دانلود نسخه PDF / پرینت بریف",
    architectureSpec: "شارتنامه فنی معماری وب و هویت دیجیتال",
    specSub: "پیشنهاد و پروپوزال فنی تدوین شده توسط استودیو پارنیل برای {name} در تاریخ {date}.",
    engineProtocol: "پروتکل موتور پردازش",
    activeStatus: "پروپوزال رسمی فعال",
    businessDomain: "دامنه کاری",
    targetCapital: "سرمایه‌گذاری هدف",
    targetTimeline: "زمان تحویل هدف",
    styleAlignment: "سبک زیباشناسی طراحی",
    sectionStrategy: "۱. استراتژی پروژه و هم‌راستایی برند",
    sectionArchitecture: "۲. معماری اطلاعات و منوی سایت",
    sectionCopywriting: "۳. ایده نویسه‌های صفحه اصلی برای لانچ",
    sectionStyle: "۴. سبک طراحی و کالیبراسیون بصری",
    sectionInfrastructure: "۵. زیرساخت‌ها و تکنولوژی‌های پیشنهادی",
    sectionMilestones: "۶. گام‌های فازبندی اجرا",
    specAuthor: "موتور پردازش مرکزی پارنیل",
    specAuthorLine2: "بخش معماری اختصاصی، دفتر لندن استودیو",
    copyMetadata: "کپی کردن منبع متادیتای بریف",
    copiedLabel: "✓ متادیتا با موفقیت کپی شد",

    primaryDisplayHeadline: "عنوان نمایشی برجسته صفحه اصلی",
    headlineExplanation: "با استفاده از فرمول تخصصی جذب سریع طراحی شده تا بلافاصله ارزش پیشنهادی منحصر‌به‌فرد شما را در ۳ ثانیه نخست ورود به هر بازدیدکننده منتقل کند.",
    recommendedHeroAction: "اقدام پیشنهادی برای راندمان بالا (CTA)",
    ctaExplanation: "عبارت دکمه «{x}» با فعال‌سازی محرک‌های روانی، منجر به نرخ کلیک تا ۴۰٪ بالاتر نسبت به واژه‌های عمومی می‌شود.",
    styleThemeMatrix: "ماتریس سبک طراحی برند",
    premiumConfiguration: "پیکربندی سطح ویژه",
    typographyRecommendation: "زوج فونت و تایپوگرافی توصیه شده",
    styleBoardAccents: "پالت رنگ و کدهای زیبایی‌شناختی",
    engineRuntime: "محیط اجرای اپلیکیشن (Runtime)",
    hostIntegration: "میزبانی ابری یکپارچه (Hosting)",
    decoupledCms: "مدیریت محتوای مستقل (Decoupled CMS)",
    motionPatterns: "سیستم انیمیشن حرکتی (Animations)",

    partnerKickoff: "مرکز هماهنگی و شروع همکاری",
    alignVisualsTitle: "تراز زیبایی بصری. آغاز کشف خصوصی پروژه.",
    alignVisualsDesc: "برای تبدیل این شارتنامه به پلتفرم وب نهایی آماده‌اید؟ گزینه‌های زمانی خود را تایید کنید تا این پکیج اطلاعاتی مستقیما برای بازبینی تیم دیزاین و برنامه‌نویسی ارسال شود.",
    urgencyLabel: "اولویت سرعت لانچ",
    standardScaleOption: "زمان‌بندی استاندارد (شروع پروژه در ۶ تا ۱۲ هفته)",
    accelerateOption: "لانچ سریع و پرشتاب (تحویل در ۴ تا ۶ هفته)",
    enterpriseOption: "سازمانی بزرگ‌مقیاس (نیاز به تحلیل دقیق منابع دارد)",
    bespokeRequestLabel: "قابلیت‌های سفارشی تکمیلی (اختیاری)",
    bespokePlaceholder: "نیاز به درگاه‌های بین‌المللی پرداخت، پشتیبانی چند زبانه پیشرفته یا اتصال دیتابیس بومی دارید؟",
    dispatchBriefBtn: "تایید و ارسال مشخصات تدوین شده",
    successTitle: "بریف برای معماران ارشد استودیو فرستاده شد",
    successDesc: "سرپرست طراحان و مهندسین ما مشخصات فنی را ارزیابی خواهند کرد. پیش‌نویس اولیه به همراه دعوت‌نامه جلسه آنلاین به ایمیل ثبت شده شما ارسال شد.",
    returnToCustomization: "← بازگشت به تنظیمات بریف",

    catTechLabel: "استارتاپ تکنولوژی و SaaS",
    catTechDesc: "داشبوردهای فنی نوین، چیدمان جعبه‌های بنتو در حالت دارک مود و طرح‌های حرکتی روان.",
    catEcomLabel: "پورتال فروشگاهی و تجارت دیجیتال",
    catEcomDesc: "فرایندهای نوین سبد خرید بی نقص، فروشگاه های مدرن Headless و کارت های نمایش محصول.",
    catPortLabel: "پورتفولیو و گالری معماری",
    catPortDesc: "طراحی های نامتقارن خلاقانه، استفاده حداکثری از فضاهای خالی شیک و فیدهای نرم.",
    catServLabel: "خدمات تجاری و حقوقی",
    catServDesc: "چیدمان‌های قرینه منظم، نمایش شاخص های اعتبار کار تیمی و مقالات تحلیلی غنی.",
    catHospLabel: "رستورانی و مهمان‌نوازی",
    catHospDesc: "هدرهای اتمسفریک تمام صفحه خیره کننده، سیستم های بوکینگ و منوهای پویا.",
    catEduLabel: "آموزشی و موسسات مدنی",
    catEduDesc: "بلوک‌های اطلاعاتی منسجم در دسترس، تقویم‌های تعاملی رویدادها و درگاه های حمایت مالی.",
    catOtherLabel: "ایده اختصاصی و سفارشی",
    catOtherDesc: "طراحی کاملا آزاد و بدون محدودیت عناصر بصری منطبق بر رویای خلاقانه شما.",

    goalLeadsLabel: "تولید سرنخ فروش و دریافت تقاضا",
    goalLeadsDesc: "عالی برای شرکت‌های مشاوره‌ای یا خدماتی که نیاز به رزرو جلسات بدون اصطکاک دارند.",
    goalEcomLabel: "تبدیل مستقیم فروشگاهی آنلاین",
    goalEcomDesc: "قیف‌های بهینه‌شده خرید، جداول فیلتر سریع و پرداخت های یکپارچه Stripe.",
    goalShowcaseLabel: "نمایش کارهای هنری مدرن و ایجاد اعتبار و اقتدار",
    goalShowcaseDesc: "تکمیل و بازنمایی تصاویر با رزولوشن فوق‌العاده بالا، تاییدیه مشتریان ممتاز و جزئیات.",
    goalEducateLabel: "نشر تجارب و تحلیل‌های تخصصی",
    goalEducateDesc: "عضویت در خبرنامه ها، سیستم غنی وبلاگ خوانی و مقالات جامع.",
    goalCommLabel: "تسهیل مستقیم تعاملات اعضای جامعه برند",
    goalCommDesc: "شامل دروازه‌های محافظت‌شده ورود، انجمن‌های گفتگوی اختصاصی و حق اشتراک.",

    styleLuxuryLabel: "Editorial Luxury",
    styleLuxuryDesc: "طلایی سارتوریال، فونت‌های زیبای سریف، نوارهای کناری باریک شیک و انیمیشن‌های سینمایی.",
    styleModernLabel: "Tech Neo-Modernist",
    styleModernDesc: "آرایه‌های کادربندی بنتو، کادرهای نورانی نئون، تایپوگرافی جسورانه و طرح‌های واکنش‌گرا.",
    styleMinimalLabel: "Silent Minimalist",
    styleMinimalDesc: "حداقل‌گرایی مطلق شبکه‌ای، خطوط نامتقارن، تمرکز کامل روی مفاهیم نوشتاری بدون آلایش.",
    stylePlayfulLabel: "Warm & Playful",
    stylePlayfulDesc: "کارت‌های گوشه گرد ارگانیک، پالت رنگ‌های پرانرژی شاد، لحن نوشتاری صمیمی و لودرهای جهنده.",
    styleCorpLabel: "Industrial Corporate",
    styleCorpDesc: "آبی‌های سازمانی حرفه‌ای تیره، نمودارهای منظم متقارن، بارهای تایید اعتبار و کارآمدی.",

    pageHomeLabel: "صفحه اصلی",
    pageHomeDesc: "مهم‌ترین درگاه ورود هویت برند شما",
    pageAboutLabel: "درباره ما",
    pageAboutDesc: "تاریخچه برند، ارزش‌ها و بیوگرافی تیم خلاق",
    pageServLabel: "خدمات و تخصص‌های اصلی",
    pageServDesc: "شارت فشرده توانایی‌ها و هزینه‌ها",
    pagePortLabel: "گالری کارهای هنری و نمونه‌ها",
    pagePortDesc: "پروژه ها، نمونه کارها و گالری های تعاملی",
    pageContactLabel: "درگاه راه‌های ارتباطی",
    pageContactDesc: "فرم های تماس، نقشه های پویا و زمان بندی ها",
    pageBlogLabel: "وبلاگ تخصصی و تحلیلی بریف",
    pageBlogDesc: "انتشار اخبار و مقالات با طراحی ویژه متنی",
    pageShopLabel: "فروشگاه خرید و معاملات الکترونیک",
    pageShopDesc: "سیستم خرید مدرن headless با پرداخت آنلاین",

    budgetUnder5: "کمتر از ۵,۰۰۰ یورو",
    budget5To10: "۵,۰۰۰ - ۱۰,۰۰۰ یورو",
    budget10To25: "۱۰,۰۰۰ - ۲۵,۰۰۰ یورو",
    budget25To50: "۲۵,۰۰۰ - ۵۰,۰۰۰ یورو",
    budgetOver50: "بیش از ۵0,۰۰۰ یورو",

    testimonial1Quote: "پارنیل فقط برای ما وب‌سایت نساخت، آن‌ها موتور کاتالیزور اصلی جذب مشتری ما را مهندسی کردند. جریان فروش ما در دو فصل اول ۱۴۰٪ رشد یافت.",
    testimonial1Author: "دومینیک تورن",
    testimonial1Role: "مدیر ارشد محصول NeuraSaaS",
    testimonial2Quote: "ساختار لوکس طراحی آن‌ها نفس‌گیر است. تعادل کم‌نظیر فضاهای خالی و فونت‌های زیبا معادل یک نقاشی و معماری ممتاز است.",
    testimonial2Author: "آریادنی استرلینگ",
    testimonial2Role: "شریک ارشد Sterling & Architects",

    acceleratorBannerLabel: "شتاب‌دهنده شارتنامه معماری",
    acceleratorBannerTitle: "بریف دقیق پیشنهادی خود را در چند ثانیه تدوین کنید.",
    acceleratorBannerDesc: "حوزه کاری، راهنمای سبک و اندازه صفحات خود را انتخاب کنید. سیستم ما بلافاصله نقشه راه، تیترهای اصلی و تکنولوژی‌های وب را برای شما تدوین می‌کند.",
    launchGeneratorBtn: "راه‌اندازی ژنراتور تعاملی بریف"
  }
};
