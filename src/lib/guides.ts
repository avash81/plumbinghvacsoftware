/**
 * guides.ts
 * ---------------------------------------------------------
 * Content library for educational articles and operations playbooks.
 * Focuses on SEO-driven "how-to", seasonal, and cost-related content.
 *
 * Data source: N/A (Static Content)
 * Related: types.ts, views/GuideDetailPage.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.1
 * ---------------------------------------------------------
 */

import { GuideArticle } from '../types';

/**
 * Collection of all guide articles, indexed by slug.
 * Categorized by cost, operations, maintenance, and software tips.
 */
export const GUIDES: Record<string, GuideArticle> = {
  'how-much-does-field-service-software-cost': {
    slug: 'how-much-does-field-service-software-cost',
    category: 'cost',
    categoryLabel: 'Cost & Pricing',
    title: 'How Much Does Field Service Software Cost in 2026?',
    intro: 'Most field service software vendors conceal true costs behind "Book a Demo" buttons. This guide breaks down what plumbing and HVAC contractors actually pay for entry-level, mid-tier, and enterprise platforms.',
    content: `## The 3 Main Pricing Models
Field service software is typically billed in one of three ways. Knowing these models helps you avoid overpaying for features you won't use.

### 1. Tiered Monthly Packages
These are the most common for small to mid-sized shops. You pay a set monthly fee for a specific "tier" of features. Popular options include QuoteIQ ($30–$80/mo) and Jobber ($50–$250/mo).

### 2. Flat-Rate Unlimited User Tiers
Ideal for larger teams. You pay one flat monthly price regardless of how many technicians or office staff you add. Service Fusion ($170–$420/mo) is a leader here.

### 3. Per-Technician Enterprise Licensing
Reserved for high-volume commercial contractors. You pay a high base fee plus a set amount for every field tech. ServiceTitan often starts at $250–$400/tech/mo plus significant setup fees.

## The Hidden Fees to Audit
The monthly subscription is only part of your budget. Always check the "fine print" for these three common add-on costs.

> Tip: Credit card processing rates are the biggest hidden expense. If you process $50k/mo, a 0.3% difference in rates costs you $1,800 a year.

- **Merchant Processing:** Fees range from 2.6% to 3.1% plus 30¢ per transaction.
- **SMS Allowances:** Extra customer texts can cost 2¢–5¢ each if you exceed your limit.
- **QuickBooks Sync:** Some entry-level plans charge extra to sync your invoices.`,
    whatToDoNext: [
      'Calculate your current monthly credit card volume to compare processing rates.',
      'Count your total field and office staff to see if per-user or flat-rate pricing is cheaper.',
      'Check if your current accounting software requires a specific integration.'
    ],
    faqs: [
      {
        question: 'Are annual plans worth the discount?',
        answer: 'Most vendors offer 15–20% off for paying annually. We recommend testing on a monthly plan for 90 days before locking into a long-term commitment.'
      },
      {
        question: 'Do I have to pay for office staff who do not drive trucks?',
        answer: 'On per-user platforms like Jobber, office staff usually count as users. On flat-rate platforms like Service Fusion, they are typically included for free.'
      }
    ],
    author: 'Marcus Vance',
    lastUpdated: 'August 2026',
    readTime: '6 min read',
    relatedProducts: ['quoteiq', 'jobber', 'service-fusion']
  },

  'how-to-stop-missing-after-hours-calls': {
    slug: 'how-to-stop-missing-after-hours-calls',
    category: 'how-to',
    categoryLabel: 'Operations',
    title: 'How to Stop Missing After-Hours Emergency Calls',
    intro: 'After-hours emergency calls command the highest margins in plumbing and HVAC. Most small contractors lose these jobs because homeowners won\'t wait for a voicemail callback.',
    content: `## The 5-Minute Window
When a pipe bursts at 2 AM, homeowners don't leave messages—they call the next person on Google. If you don't answer or respond instantly, you lose the job.

## Setting Up Automated Text-Back
Modern software can automatically text a customer the moment you miss their call. This keeps them on the line while you get to the phone or dispatch a tech.

> Tip: Automated instant SMS responses capture up to 40% of callers who would otherwise move on to your competitor.

### How it Works:
1. A customer calls your business line after hours.
2. The software detects the missed call and sends an immediate SMS.
3. The customer replies with their emergency details.
4. An urgent alert is pushed to your on-call technician's phone.

## On-Call Routing Systems
Don't just rely on your personal cell phone. Use a routing system that rotates through your team or sends "blast" notifications to whoever is available first.`,
    whatToDoNext: [
      'Enable "Missed Call Text-Back" in your CRM or VoIP settings today.',
      'Create a clear after-hours pricing sheet so techs don\'t have to guess at 2 AM.',
      'Test your current voicemail system to see how long it takes for you to get a notification.'
    ],
    faqs: [
      {
        question: 'What is the best way to pay techs for being on-call?',
        answer: 'Most shops pay a flat weekly stipend ($150–$300) plus 1.5x hourly pay with a 2-hour minimum per emergency dispatch.'
      }
    ],
    author: 'Marcus Vance',
    lastUpdated: 'August 2026',
    readTime: '5 min read',
    relatedProducts: ['jobber', 'housecall-pro', 'quoteiq']
  },

  'fall-hvac-tune-up-checklist-campaign': {
    slug: 'fall-hvac-tune-up-checklist-campaign',
    category: 'seasonal',
    categoryLabel: 'Maintenance',
    title: 'Fall HVAC Furnace Tune-Up Playbook',
    intro: 'The shoulder season is the ideal time to fill your schedule with high-retention furnace inspections. This playbook covers the technical checklist and automated marketing cadence to book 100+ visits.',
    content: `## The 18-Point Fall Inspection
A thorough furnace tune-up protects homeowners and generates high-quality replacement leads. Technicians should document everything with photos.

### Key Inspection Points:
- Visual camera inspection of the heat exchanger.
- Flame sensor microamp testing.
- Blower capacitor readings.
- Gas pressure check at the manifold.

> Tip: Use digital job forms in Jobber or Housecall Pro to attach combustion analyzer readouts directly to the customer invoice.

## Automating Your Re-engagement
Do not wait for the phones to ring in October. Launch your automated campaign in late August to past customers who haven't had service in 12+ months.

## Converting to Memberships
Every tune-up is an opportunity to enroll homeowners into a maintenance club. These agreements ($19–$29/mo) provide steady off-season cash flow and brand loyalty.`,
    whatToDoNext: [
      'Export your customer list from your CRM and filter for "No Service in 12 Months".',
      'Set up a 3-touch automation: Email in August, SMS in September, Postcard in October.',
      'Train your techs on how to present the "Good/Better/Best" maintenance agreement options.'
    ],
    faqs: [
      {
        question: 'When is the best time to market fall tune-ups?',
        answer: 'Late August through mid-September is optimal. You want to fill your schedule before the first frost emergency calls begin.'
      }
    ],
    author: 'Elena Rostova',
    lastUpdated: 'August 2026',
    readTime: '7 min read',
    relatedProducts: ['housecall-pro', 'jobber', 'fieldedge']
  },

  'quickbooks-integration-guide-plumbing-hvac': {
    slug: 'quickbooks-integration-guide-plumbing-hvac',
    category: 'software-tips',
    categoryLabel: 'Software Tips',
    title: 'QuickBooks Integration Guide for Trade Pros',
    intro: 'QuickBooks is the backbone of trade bookkeeping, but a poor sync can corrupt your general ledger. Learn how to avoid duplicate customers and tax code errors during FSM software setup.',
    content: `## QuickBooks Online vs. Desktop
Over 80% of modern software is built natively for QuickBooks Online. If you still use the Desktop version, your choices are restricted to specialized platforms like FieldEdge or ServiceTitan.

### Why Online Sync is Faster:
- **Direct REST API:** Data flows instantly between systems.
- **No Hosting Required:** No need for Web Connector or local server hosting.
- **Mobile Friendly:** Office staff can reconcile payments from anywhere.

## The 4 Rules of Clean Sync
1. **Single Source of Truth:** Only edit customer addresses in your FSM software, never in QuickBooks.
2. **Map Tax Codes First:** Ensure your sales tax settings match perfectly between both systems.
3. **Weekly Reconciliation:** Verify that your bank deposits match your software's merchant batch payouts.
4. **Lock Past Periods:** Never allow a sync to touch data in a closed fiscal period.

> Tip: Ensure your software supports "Two-Way Sync" so that a payment collected in the field marks the invoice as paid in QuickBooks automatically.`,
    whatToDoNext: [
      'Audit your current QuickBooks chart of accounts for duplicate service items.',
      'Test a "Test Customer" sync before importing your entire database.',
      'Check if your FSM software requires a specific QuickBooks subscription level (e.g. Plus or Advanced).'
    ],
    faqs: [
      {
        question: 'Will syncing create duplicate customers?',
        answer: 'Top platforms use email and phone matching to prevent duplicates. Always clean your QuickBooks data before the first sync.'
      }
    ],
    author: 'Elena Rostova',
    lastUpdated: 'August 2026',
    readTime: '8 min read',
    relatedProducts: ['jobber', 'fieldedge', 'quoteiq']
  }
};

/**
 * List of all guides as an array for hub pages and category filtering.
 */
export const GUIDE_LIST = Object.values(GUIDES);

/**
 * Returns a specific guide article by its unique slug.
 */
export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES[slug];
}
