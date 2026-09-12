/**
 * types.ts
 * ---------------------------------------------------------
 * Shared TypeScript interfaces, types, and enums.
 * Acts as the structural source of truth for product and content models.
 *
 * Data source: N/A
 * Related: lib/products.ts, lib/guides.ts
 *
 * Guide reference: project-implementation-guide.md, Section 6.1a
 * ---------------------------------------------------------
 */

export interface ProductPricingTier {
  name: string;
  priceMonthly: number | string;
  priceAnnualBilled?: number | string;
  usersIncluded: string;
  extraUserCost?: string;
  highlight?: boolean;
  features: string[];
}

export interface ProductRating {
  overall: number; // out of 5 or 10
  valueForMoney: number;
  easeOfUse: number;
  dispatchAndMobile: number;
  invoicingAndPayments: number;
  quickbooksSync: number;
  customerSupport: number;
}

export interface ProductFeatureMatrix {
  mobileAppIosAndroid: boolean | string;
  offlineMode: boolean | string;
  dragDropDispatch: boolean | string;
  gpsTracking: boolean | string;
  quickbooksOnlineSync: boolean | string;
  quickbooksDesktopSync: boolean | string;
  flatRatePricebook: boolean | string;
  onMyWaySmsAlerts: boolean | string;
  onlineBookingPortal: boolean | string;
  automatedFollowups: boolean | string;
  jobCostingReporting: boolean | string;
  equipmentHistoryTracking: boolean | string;
  customQuoteOptionsTiered: boolean | string;
  serviceAgreementsRecurring: boolean | string;
  creditCardProcessingFee: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  logoPath: string;
  website: string;
  bestFor: string;
  targetTeamSize: string;
  startingPrice: string;
  priceModel: string;
  freeTrialDays: number;
  hasFreeTrial: boolean;
  contractRequired: boolean;
  ratings: ProductRating;
  pros: string[];
  cons: string[];
  keyStrengths: string[];
  pricingTiers: ProductPricingTier[];
  features: ProductFeatureMatrix;
  verdict: string;
  plumbingSuitability: string;
  hvacSuitability: string;
  affiliateSlug: string;
  affiliateStatus: 'active' | 'pending' | 'none' | 'restricted';
  affiliateNotes: string | null;
  trades: ('plumbing' | 'hvac' | 'both')[];
  lastVerifiedDate: string;
  testedVersion: string;
  operatorVoices?: {
    name: string;
    business: string;
    quote: string;
  }[];
}

export interface AffiliateLinkConfig {
  productSlug: string;
  targetUrl: string;
  isAffiliate: boolean;
  commissionType: string;
  commissionDetails: string;
  cookieDuration: string;
  regionalRestrictions?: string;
  disclosureText: string;
}

export interface AuthorData {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  tradeExperience: string;
  image?: string;
  contactEmail?: string;
  contactTwitter?: string;
  contactLinkedin?: string;
}

export interface ComparisonPair {
  slug: string;
  productA: string; // slug
  productB: string; // slug
  title: string;
  subtitle: string;
  metaDescription: string;
  winnerOverall: string;
  winnerSmallTeams: string;
  winnerHvac: string;
  winnerPlumbing: string;
  headToHeadSummary: string;
  author?: AuthorData;
  keyDifferences: {
    category: string;
    productAAdvantage: string;
    productBAdvantage: string;
    verdict: string;
  }[];
  priceComparisonSummary: string;
  faqs: { question: string; answer: string }[];
  lastVerifiedDate: string;
}

export interface BestOfArticle {
  slug: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  readTime: string;
  lastUpdated: string;
  intro: string;
  author?: AuthorData;
  topPicks: {
    rank: number;
    productSlug: string;
    awardTitle: string; // e.g. "Best Overall for 2-15 Techs", "Best for Solo & Budget-Conscious"
    shortWhy: string;
    keyTradeoff: string;
  }[];
  buyingGuideChecklist: string[];
  faqs: { question: string; answer: string }[];
}

export interface GuideArticle {
  slug: string;
  category: 'cost' | 'how-to' | 'seasonal' | 'software-tips';
  categoryLabel: string;
  title: string;
  intro: string; // 2-3 sentence intro
  content: string; // Markdown-like body content
  whatToDoNext: string[]; // Direct action list
  faqs: { question: string; answer: string }[];
  author: string;
  lastUpdated: string;
  readTime: string;
  relatedProducts: string[]; // slugs
}
