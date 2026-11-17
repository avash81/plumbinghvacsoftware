import { AffiliateLinkConfig } from '../types';

export const AFFILIATE_CONFIG: Record<string, AffiliateLinkConfig> = {};

export function getAffiliateLink(productSlug: string): AffiliateLinkConfig {
  const normalized = (productSlug || '').toLowerCase().trim();
  return (
    AFFILIATE_CONFIG[normalized] || {
      productSlug: normalized,
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
