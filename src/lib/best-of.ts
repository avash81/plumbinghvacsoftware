/**
 * best-of.ts
 * ---------------------------------------------------------
 * Curated roundups database configured with a template roundup.
 * Demonstrates the ranked picks, tradeoffs, and buying checklist layout.
 * ---------------------------------------------------------
 */

import { BestOfArticle } from '../types';

export const BEST_OF_ARTICLES: Record<string, BestOfArticle> = {
  'test-best-of': {
    slug: 'test-best-of',
    title: 'Best Field Service Software: Curated Roundup Template',
    subtitle: 'An independent, evidence-backed evaluation template showing how top trade software platforms are ranked and reviewed.',
    categoryTag: 'Template Roundup',
    readTime: '6 min read',
    lastUpdated: 'Verified Evergreen',
    intro:
      'Choosing the right field service management software is essential for plumbing and HVAC contractors looking to eliminate lost billable hours, streamline dispatch, and accelerate cash flow. This template page demonstrates our structured evaluation format, highlighting top picks, real-world tradeoffs, and actionable contractor buying checklists.',
    topPicks: [
      {
        rank: 1,
        productSlug: 'test-1',
        awardTitle: 'Best Overall for 1–5 Techs & Nimble Service Fleets',
        shortWhy:
          'Demonstrates a balanced platform pairing fast mobile dispatch, automated customer text reminders, and clean two-way QuickBooks accounting synchronization.',
        keyTradeoff:
          'Template note: Designed primarily for residential service work rather than multi-warehouse industrial parts distribution.',
      },
      {
        rank: 2,
        productSlug: 'test-2',
        awardTitle: 'Best for Growing Fleets & Commercial Project Costing',
        shortWhy:
          'Demonstrates enterprise depth with progressive milestone billing, multi-truck parts inventory, and supplier catalog pricing integration.',
        keyTradeoff:
          'Template note: Requires dedicated onboarding and initial pricebook mapping compared to lightweight tools.',
      },
    ],
    buyingGuideChecklist: [
      'Team Headcount & Seat Pricing: Evaluate whether flat-tier pricing or per-user monthly rates best align with your 12-month technician hiring goals.',
      'Ledger Synchronization: Confirm whether your business uses QuickBooks Online or QuickBooks Desktop and ensure seamless two-way ledger reconciliation.',
      'Field Technician Ease of Use: Choose mobile software that technicians can master within two taps on a smartphone to ensure high job-site compliance.',
      'Tiered Quoting (Good/Better/Best): Verify that technicians can present multi-option quotes to boost average ticket value on service calls.',
      'Offline basements & Remote Dead Zones: Ensure the software caches jobs, notes, and digital customer signatures when mobile data is unavailable.',
    ],
    faqs: [
      {
        question: 'What is the purpose of this template page?',
        answer:
          'This template page illustrates how our upcoming in-depth category roundups will be organized, providing clear award badges, candid tradeoffs, and comprehensive contractor buying checklists.',
      },
      {
        question: 'How are software rankings determined?',
        answer:
          'Rankings are based on hands-on workflow testing across dispatch speed, invoicing efficiency, accounting sync reliability, and actual technician mobile experience.',
      },
      {
        question: 'Can contractors switch platforms as their business expands?',
        answer:
          'Yes. Modern cloud field service platforms support complete CSV export and import for customer profiles, service addresses, and historical work orders.',
      },
    ],
  },
};

// Aliases for slug convenience
BEST_OF_ARTICLES['test-page'] = BEST_OF_ARTICLES['test-best-of'];
BEST_OF_ARTICLES['test1'] = BEST_OF_ARTICLES['test-best-of'];
BEST_OF_ARTICLES['test2'] = BEST_OF_ARTICLES['test-best-of'];

export const BEST_OF_LIST = [BEST_OF_ARTICLES['test-best-of']];

export function getBestOfBySlug(slug: string): BestOfArticle | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return BEST_OF_ARTICLES[normalized];
}
