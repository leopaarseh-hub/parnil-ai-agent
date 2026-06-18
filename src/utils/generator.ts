import { FormState, GeneratedBrief, DesignStyle } from '../types';

// Curated Design direction configurations
const STYLE_DIRECTIONS: Record<DesignStyle, {
  fontPairing: string;
  colors: string[];
  layoutDescription: string;
  vibeTags: string[];
  inspirationQuote: string;
}> = {
  modern: {
    fontPairing: "Plus Jakarta Sans & Space Grotesk",
    colors: ["#0f172a", "#3b82f6", "#10b981", "#f8fafc"],
    layoutDescription: "Dynamic grid structures, bold typographic scaling, layered interactive states, and soft neon edge-glow accents.",
    vibeTags: ["Innovative", "Tech-Forward", "Dynamic", "Confident", "High-Contrast"],
    inspirationQuote: "Modern design is not just what it looks like; it's how it makes the user feel connected to the future.",
  },
  minimal: {
    fontPairing: "Inter & System-UI",
    colors: ["#0a0a0a", "#737373", "#e5e5e5", "#ffffff"],
    layoutDescription: "Generous whitespace, subtle low-contrast grids, razor-sharp alignment, and intentional asymmetric focal points.",
    vibeTags: ["Pristine", "Sincere", "Undistracted", "High-Fidelity", "Spacious"],
    inspirationQuote: "Simplicity is not the lack of clutter, but the presence of clarity. Everything on the grid serves a singular purpose.",
  },
  luxury: {
    fontPairing: "Playfair Display & Plus Jakarta Sans",
    colors: ["#0a0a0a", "#ccff00", "#161616", "#f3f4f6"],
    layoutDescription: "Fluid full-height layouts, elegant neon chartreuse detailing, delicate borders, serif narrative blocks, and cinematic fade-in transitions.",
    vibeTags: ["Exclusive", "Artisanal", "Bespoke", "Sophisticated", "Harmonious"],
    inspirationQuote: "Luxury isn't about complexity; it is the seamless synergy of premium craftsmanship, meticulous spacing, and timeless typography.",
  },
  playful: {
    fontPairing: "Outfit & Fredoka",
    colors: ["#0f172a", "#f43f5e", "#f59e0b", "#10b981"],
    layoutDescription: "Organic rounded card elements, cheerful micro-interactions, floating graphic containers, bouncy physics-inspired loaders, and warm pastel gradients.",
    vibeTags: ["Energetic", "Friendly", "Engaging", "Memorable", "Creative"],
    inspirationQuote: "Interaction should spark joy. We convert complex technical flows into intuitive, lighthearted digital playscapes.",
  },
  corporate: {
    fontPairing: "Inter & Plus Jakarta Sans",
    colors: ["#0f172a", "#0f365c", "#64748b", "#f1f5f9"],
    layoutDescription: "Highly organized column charts, solid headers, trust badges, clear metric grids, standard polished dark/light panels, and professional callouts.",
    vibeTags: ["Authoritative", "Credible", "Symmetrical", "Structured", "Institutional"],
    inspirationQuote: "Professionalism is established in detail. Perfect layout consistency and deliberate text hierarchy build user confidence.",
  }
};

// Sitemap generator helper
function generateSitemap(pages: string[]): string[] {
  const base = ['Home'];
  const others = pages.filter(p => p !== 'Home');
  return [...base, ...others];
}

// Custom generator logic
export function generateClientBrief(state: FormState): GeneratedBrief {
  const {
    businessName = 'Your Business',
    businessType = 'SaaS/Tech Startup',
    businessDescription = '',
    mainGoal = 'Drive Leads & Inquiries',
    selectedStyle = 'modern',
    selectedPages = ['Home', 'About', 'Contact'],
    budgetRange = '$5,000 - $10,000',
    clientName = 'Valued Partner'
  } = state;

  // 1. Project Summary Customization
  const formattedStyleName = selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1);
  let summary = `Our strategic mission for **${businessName}** is to engineer a bespoke, ${formattedStyleName.toLowerCase()}-style digital interface designed to effectively ${mainGoal.toLowerCase()}. `;
  
  if (businessDescription) {
    summary += `Drawing on your core identity—*"${businessDescription}"*—we will build a cohesive visual system that immediately conveys your unique value. `;
  } else {
    summary += `We will transform your brand's digital presence, translating your industry advantages into a high-converting web interface. `;
  }

  summary += `With an elite, custom-tailored technical framework, we aim to deliver a fully responsive, pixel-perfect experience that exceeds market standards and reinforces digital authority.`;

  // 2. Headline & CTA generation based on Type & Goal
  let headline = `Unveiling the Future of ${businessType}`;
  let cta = 'Get Started Now';

  const headlineTemplate: Record<string, string[]> = {
    'E-commerce': [
      `Elevate Your Everyday. Curated Quality, Delivered.`,
      `The Next Generation of Shopping for ${businessName}.`,
      `Meticulously Crafted Products. Delivered Directly to You.`
    ],
    'SaaS/Tech Startup': [
      `The Ultimate Operating System for Modern Teams.`,
      `Scale Smarter. Automate Faster. Build Stronger.`,
      `Intelligent Automation Crafted for ${businessName}.`
    ],
    'Creative Portfolio': [
      `Where Absolute Form Meets Flawless Function.`,
      `Crafting Digital Masterpieces that Inspires.`,
      `Bespoke Architectural UI & Visual Storytelling.`
    ],
    'Professional Services': [
      `Strategic Counsel Engineered for Reliable Success.`,
      `Your Trusted Partners in Technical Innovation.`,
      `Elite Consulting and Dynamic Solutions for Growth.`
    ],
    'Restaurant/Hospitality': [
      `Savor the Craft. An Unforgettable Hospitality Experience.`,
      `Where Exceptional Culinary Artistry Meets Unmatched Atmosphere.`,
      `Bespoke Cuisine & Curated Gathering Spaces.`
    ],
    'Educational/Non-profit': [
      `Empowering Communities. Shaping Better Tomorrows.`,
      `Knowledge Engineered for Universal Human Progress.`,
      `Join the Movement to Build a Sustainable Future.`
    ],
    'Other': [
      `Redefining the Digital Boundary. Tailored to Perfection.`,
      `The Premier Digital Address for ${businessName}.`,
      `Engineered for Scale, Styled for Distinction.`
    ]
  };

  const ctaTemplates: Record<string, string[]> = {
    'Sell Products directly': ['Unlock Premium Access', 'Shop the Collection', 'Explore catalog'],
    'Drive Leads & Inquiries': ['Schedule Private Consultation', 'Request Custom Proposal', 'Partner With Us'],
    'Showcase Creative Work': ['View Our Gallery', 'Explore the Portfolio', 'Discover the Craft'],
    'Educate and Inform': ['Start Learning', 'Explore the Guides', 'Read whitepaper'],
    'Establish Authority/Trust': ['Review Our Case Studies', 'Connect with Experts', 'Get in Touch'],
    'Build Community': ['Join the Circle', 'Start Your Free Account', 'Become a Member']
  };

  const chosenHeadlines = headlineTemplate[businessType] || headlineTemplate['Other'];
  headline = chosenHeadlines[Math.floor(Math.random() * chosenHeadlines.length)] || chosenHeadlines[0];

  const chosenCtas = ctaTemplates[mainGoal] || ['Learn More', 'Get Started'];
  cta = chosenCtas[Math.floor(Math.random() * chosenCtas.length)] || chosenCtas[0];

  // 3. Recommended Technical Stack based on Budget & Business Type
  let frontend = 'React 19, TypeScript, and Vite';
  let hosting = 'Cloud Run Container Engine or Vercel Edge Server';
  let cms = 'Decoupled Headless Sanity.io or custom Airtable Schema';
  let animations = 'Motion (Motion/React) and native CSS Bezier Transitions';

  const isHighBudget = budgetRange.includes('$25,000') || budgetRange.includes('$50,000') || budgetRange.includes('$50,000+');
  const isEcommerce = businessType === 'E-commerce';

  if (isEcommerce) {
    if (isHighBudget) {
      frontend = 'Next.js 15 (React Server Components), TypeScript, Tailwind v4';
      cms = 'Shopify Plus headless GraphQL API Storefront';
      hosting = 'AWS Lambda Edge or Vercel Enterprise Serverless Network';
    } else {
      frontend = 'Custom Shopify Liquid Custom-Themed Storefront';
      cms = 'Shopify Standard CMS Interface';
      hosting = 'Shopify Cloud Edge Hosting CDN';
    }
  } else if (isHighBudget) {
    frontend = 'Next.js 15 App Router, TypeScript, Tailwind CSS v4';
    cms = 'Strati.co Headless Enterprise or Contentful Core';
    hosting = 'Cloud Run Dockerized with Geo-Redundant Caching';
  }

  // 4. Estimation of Timeline based on pages and budget
  let estimatedTimeline = '4-6 Weeks';
  const pageCount = selectedPages.length;
  if (pageCount > 8) {
    estimatedTimeline = '10-12 Weeks';
  } else if (pageCount > 5) {
    estimatedTimeline = '7-9 Weeks';
  } else if (isHighBudget) {
    estimatedTimeline = '8-10 Weeks (includes full UX research phase & accessibility testing)';
  } else {
    estimatedTimeline = '4-5 Weeks';
  }

  // 5. Next Steps for client
  const nextSteps = [
    `1. Book your 30-minute discovery workshop call with Parnil's Chief Designer.`,
    `2. Prepare logo brand pack, high-resolution lifestyle assets, and product specs.`,
    `3. Approve the recommended ${selectedPages[1] || 'About'} page wireframe markup.`,
    `4. Review initial visual styling direction prototypes and signature micro-animations.`
  ];

  const designDirection = STYLE_DIRECTIONS[selectedStyle] || STYLE_DIRECTIONS['modern'];

  return {
    id: `PRN-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    businessName,
    businessType,
    mainGoal,
    selectedStyle,
    budgetRange,
    summary,
    sitemap: generateSitemap(selectedPages),
    headline,
    cta,
    designDirection,
    recommendedStack: {
      frontend,
      hosting,
      cms,
      animations
    },
    estimatedTimeline,
    nextSteps
  };
}
