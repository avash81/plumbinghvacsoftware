/**
 * affiliate-links.ts
 * ---------------------------------------------------------
 * Central management for all outbound affiliate links and disclosure data.
 * Keeps commercial URLs and commission details separate from editorial data.
 *
 * Data source: N/A (Static Config)
 * Related: types.ts, lib/products.ts
 *
 * Guide reference: project-implementation-guide.md, Section 6.1, 13
 * ---------------------------------------------------------
 */

import { AffiliateLinkConfig } from '../types';

/**
 * Mapping of product slugs to their respective affiliate configurations.
 * Contains target URLs, disclosure text, and commission details.
 */
export const AFFILIATE_CONFIG: Record<string, AffiliateLinkConfig> = {
  quoteiq: {
    productSlug: 'quoteiq',
    targetUrl: 'https://myquoteiq.com/?via=tradefield-guide',
    isAffiliate: true,
    commissionType: '40% Recurring Revenue Share',
    commissionDetails: '40% recurring monthly commission, 90-day cookie window. Open internationally.',
    cookieDuration: '90 days',
    regionalRestrictions: 'None (US, Canada, and global availability)',
    disclosureText: 'Commercial affiliate relationship confirmed. We earn a 40% recurring commission if you purchase via our link at no additional cost to you.',
  },
  jobber: {
    productSlug: 'jobber',
    targetUrl: 'https://getjobber.com/?utm_source=tradefield-guide&utm_medium=affiliate',
    isAffiliate: true,
    commissionType: 'CPA / Tiered Referral',
    commissionDetails: 'Fixed referral bonus per qualified account activation. Program eligibility subject to regional partner terms.',
    cookieDuration: '30 days',
    regionalRestrictions: 'Primary qualification for US and Canadian businesses.',
    disclosureText: 'Commercial affiliate relationship confirmed. We may earn a referral fee upon verified account creation at zero added cost to you.',
  },
  'housecall-pro': {
    productSlug: 'housecall-pro',
    targetUrl: 'https://www.housecallpro.com/?tap_a=tradefield-guide',
    isAffiliate: true,
    commissionType: '$40 – $400 CPA',
    commissionDetails: '$40 per verified demo / $400 per paid subscription. Strictly requires US/Canada business traffic.',
    cookieDuration: '30 days',
    regionalRestrictions: 'Commission strictly payable for US and Canada based business traffic.',
    disclosureText: 'Commercial affiliate partner. We earn a fixed commission on eligible US/Canada signups. Tested editorially without bias.',
  },
  servicetitan: {
    productSlug: 'servicetitan',
    targetUrl: 'https://www.servicetitan.com/',
    isAffiliate: false,
    commissionType: 'None (Direct Editorial Link)',
    commissionDetails: 'ServiceTitan operates only direct private customer referrals; no public content affiliate relationship exists.',
    cookieDuration: 'N/A',
    regionalRestrictions: 'N/A',
    disclosureText: 'No affiliate relationship. We link directly to ServiceTitan with zero financial incentive or commission.',
  },
  fieldedge: {
    productSlug: 'fieldedge',
    targetUrl: 'https://fieldedge.com/',
    isAffiliate: false,
    commissionType: 'None (Direct Editorial Link)',
    commissionDetails: 'No public content marketing affiliate program available. Reviewed strictly as an industry standard.',
    cookieDuration: 'N/A',
    regionalRestrictions: 'N/A',
    disclosureText: 'No affiliate relationship. We link directly to FieldEdge with zero financial incentive.',
  },
  'service-fusion': {
    productSlug: 'service-fusion',
    targetUrl: 'https://www.servicefusion.com/',
    isAffiliate: false,
    commissionType: 'None / Editorial Status',
    commissionDetails: 'Evaluated under neutral editorial guidelines. Partnership under active verification.',
    cookieDuration: 'N/A',
    regionalRestrictions: 'N/A',
    disclosureText: 'Editorial evaluation only. No active commission relationship is currently active.',
  },
  simpro: {
    productSlug: 'simpro',
    targetUrl: 'https://www.simprogroup.com/',
    isAffiliate: false,
    commissionType: 'None / Direct Editorial Link',
    commissionDetails: 'Simpro Enterprise has no active content publishing agreement with our site.',
    cookieDuration: 'N/A',
    regionalRestrictions: 'N/A',
    disclosureText: 'No affiliate relationship. Evaluated purely on technical merits and field testing data.',
  },
  fieldpulse: {
    productSlug: 'fieldpulse',
    targetUrl: 'https://www.fieldpulse.com/',
    isAffiliate: false,
    commissionType: 'None / Direct Editorial Link',
    commissionDetails: 'Evaluated under independent testing criteria.',
    cookieDuration: 'N/A',
    regionalRestrictions: 'N/A',
    disclosureText: 'Independent review link. We do not earn commission on FieldPulse subscriptions.',
  },
};

/**
 * Retrieves the affiliate configuration for a specific product.
 * Falls back to a direct (non-affiliate) link if no configuration exists.
 */
export function getAffiliateLink(productSlug: string): AffiliateLinkConfig {
  return (
    AFFILIATE_CONFIG[productSlug] || {
      productSlug,
      targetUrl: '#',
      isAffiliate: false,
      commissionType: 'None',
      commissionDetails: 'Direct link',
      cookieDuration: 'N/A',
      disclosureText: 'Independent link. No affiliate relationship.',
    }
  );
}

export const AFFILIATE_CONFIGS = AFFILIATE_CONFIG;

