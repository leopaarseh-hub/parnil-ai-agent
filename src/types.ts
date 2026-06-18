export type DesignStyle = 'modern' | 'minimal' | 'luxury' | 'playful' | 'corporate';

export interface FormState {
  businessType: string;
  businessName: string;
  businessDescription: string;
  mainGoal: string;
  selectedStyle: DesignStyle;
  selectedPages: string[];
  budgetRange: string;
  clientName: string;
  clientEmail: string;
  timelinePreference: string;
}

export interface GeneratedBrief {
  id: string;
  date: string;
  businessName: string;
  businessType: string;
  mainGoal: string;
  selectedStyle: DesignStyle;
  budgetRange: string;
  summary: string;
  sitemap: string[];
  headline: string;
  cta: string;
  designDirection: {
    fontPairing: string;
    colors: string[];
    layoutDescription: string;
    vibeTags: string[];
    inspirationQuote: string;
  };
  recommendedStack: {
    frontend: string;
    hosting: string;
    cms: string;
    animations: string;
  };
  estimatedTimeline: string;
  nextSteps: string[];
}
