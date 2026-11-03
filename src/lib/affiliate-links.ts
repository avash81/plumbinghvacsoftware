/**
 * affiliate-links.ts
 * ---------------------------------------------------------
 * Central management for outbound links and disclosure data.
 * Updated to support test template products.
 * ---------------------------------------------------------
 */

import { AffiliateLinkConfig } from '../types';

export const AFFILIATE_CONFIG: Record<string, AffiliateLinkConfig> = {
  'test-1': {
    productSlug: 'test-1',
    targetUrl: 'https://example.com/test-software-1',
    isAffiliate: false,
    commissionType: 'Template Link',
    commissionDetails: 'Demonstration template link with independent evaluation.',
    cookieDuration: '30 days',
    regionalRestrictions: 'None (Global)',
    disclosureText: 'Sample link template. Evaluated independently under editorial guidelines.',
  },
  'test-2': {
    productSlug: 'test-2',
    targetUrl: 'https://example.com/test-software-2',
    isAffiliate: false,
    commissionType: 'Template Link',
    commissionDetails: 'Demonstration template link with independent evaluation.',
    cookieDuration: '30 days',
    regionalRestrictions: 'None (Global)',
    disclosureText: 'Sample link template. Evaluated independently under editorial guidelines.',
  },
};

// Aliases
AFFILIATE_CONFIG['test1'] = AFFILIATE_CONFIG['test-1'];
AFFILIATE_CONFIG['test2'] = AFFILIATE_CONFIG['test-2'];

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
