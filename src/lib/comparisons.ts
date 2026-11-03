/**
 * comparisons.ts
 * ---------------------------------------------------------
 * Comparison database configured with template head-to-head showdowns.
 * All previous comparisons have been removed and replaced with
 * Test Software 1 vs Test Software 2 to demonstrate the layout.
 * ---------------------------------------------------------
 */

import { ComparisonPair } from '../types';

export const COMPARISONS: Record<string, ComparisonPair> = {
  'test-1-vs-test-2': {
    slug: 'test-1-vs-test-2',
    productA: 'test-1',
    productB: 'test-2',
    title: 'Test Software 1 vs Test Software 2: In-Depth Comparison Template',
    subtitle: 'Which field service software model delivers better value for your plumbing or HVAC business?',
    metaDescription: 'Head-to-head comparison template showcasing pricing models, dispatch features, mobile workflows, and QuickBooks integration side by side.',
    winnerOverall: 'test-1',
    winnerSmallTeams: 'test-1',
    winnerHvac: 'test-2',
    winnerPlumbing: 'test-1',
    headToHeadSummary:
      'This template demonstrates a head-to-head comparison layout between two contrasting software philosophies: Test Software 1 highlights lightweight agility, rapid invoicing, and minimal overhead for 1–5 tech owner-operators, while Test Software 2 highlights deep multi-fleet inventory, progressive milestone billing, and commercial job costing for 5–25+ technician fleets.',
    keyDifferences: [
      {
        category: 'Pricing & Team Headcount',
        productAAdvantage: 'Starts at $49/mo with low overhead; optimized for owner-operators and 1–5 technician crews without complex tier fees.',
        productBAdvantage: 'Starts at $99/mo with scalable flat-rate and high-capacity tiers covering 5–25 technicians and office dispatchers.',
        verdict: 'Test Software 1 wins for solo and small residential teams; Test Software 2 wins for larger commercial crews needing predictable seat pricing.',
      },
      {
        category: 'Dispatching & Scheduling Board',
        productAAdvantage: 'Clean drag-and-drop calendar designed for fast 2-tap technician assignments on smartphones and tablets.',
        productBAdvantage: 'Multi-screen dispatch grid with live GPS vehicle mapping, technician skill filters, and route optimization.',
        verdict: 'Test Software 2 wins for fleets running 5+ trucks across wide metro service territories.',
      },
      {
        category: 'Invoicing & Accounting Sync',
        productAAdvantage: 'Real-time two-way sync with QuickBooks Online, automated customer payment links, and instant receipts.',
        productBAdvantage: 'Supports both QuickBooks Online and QuickBooks Desktop, with advanced commercial retainage and progress billing.',
        verdict: 'Test Software 1 for simple residential billing; Test Software 2 for commercial multi-phase billing.',
      },
      {
        category: 'Inventory & Parts Management',
        productAAdvantage: 'Basic van-stock tracking and itemized pricebook search.',
        productBAdvantage: 'Multi-warehouse truck replenishment, supplier catalog price sync, and automated purchase order generation.',
        verdict: 'Test Software 2 wins decisively for HVAC fleets managing substantial truck inventory.',
      },
      {
        category: 'Implementation & Time to Value',
        productAAdvantage: 'Contractors can create invoices and dispatch technicians within 24 to 48 hours of signup.',
        productBAdvantage: 'Comprehensive implementation playbook with custom pricebook import and team onboarding.',
        verdict: 'Test Software 1 wins for immediate same-week deployment.',
      },
    ],
    priceComparisonSummary:
      'For a 3-person residential trade crew: Test Software 1 Pro costs approx $99/month. Test Software 2 Standard costs $99–$189/month. Over a full operating year, choosing the right platform model aligns directly with whether your priority is lightweight simplicity or commercial job costing.',
    faqs: [
      {
        question: 'How do I choose between Test Software 1 and Test Software 2 for my trade shop?',
        answer:
          'If your company operates 1–5 residential service vans and wants fast invoicing with minimal administrative overhead, the Test Software 1 model is ideal. If you manage 5+ technicians, commercial service agreements, and parts warehousing, the Test Software 2 model provides the necessary depth.',
      },
      {
        question: 'Can customer and service history be exported if our company scales?',
        answer:
          'Yes. Both template structures demonstrate full CSV export compatibility for customer records, billing addresses, past work orders, and equipment serial numbers.',
      },
      {
        question: 'Do both platforms support Good/Better/Best proposal options?',
        answer:
          'Yes. Both models illustrate multi-option quoting allowing technicians to offer standard repairs alongside system upgrade options directly on mobile tablets.',
      },
      {
        question: 'How does offline synchronization work in signal dead zones?',
        answer:
          'Both platforms illustrate offline caching capabilities that allow technicians to capture photos, notes, and digital customer signatures in basements before automatically syncing once cell signal is restored.',
      },
    ],
    lastVerifiedDate: 'Verified Evergreen',
  },
};

// Aliases for slug convenience
COMPARISONS['test1-vs-test2'] = COMPARISONS['test-1-vs-test-2'];
COMPARISONS['test1'] = COMPARISONS['test-1-vs-test-2'];
COMPARISONS['test2'] = COMPARISONS['test-1-vs-test-2'];

export const COMPARISON_LIST = [COMPARISONS['test-1-vs-test-2']];

export function getComparisonBySlug(slug: string): ComparisonPair | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return COMPARISONS[normalized];
}
