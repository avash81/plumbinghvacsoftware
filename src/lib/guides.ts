/**
 * guides.ts
 * ---------------------------------------------------------
 * Content library for operational playbooks and field guides.
 * Features a clean template guide demonstrating the layout,
 * action checklist, and FAQ structure.
 * ---------------------------------------------------------
 */

import { GuideArticle } from '../types';

export const GUIDES: Record<string, GuideArticle> = {
  'test-guide': {
    slug: 'test-guide',
    category: 'how-to',
    categoryLabel: 'Operations Playbook Template',
    title: 'Trade Operations Playbook: Standard Operating Procedures Template',
    intro:
      'A structured operational guide template illustrating standardized dispatch workflows, mobile technician checklists, and billing best practices for plumbing and HVAC businesses.',
    content: `
### Field Service Operations Framework

Standardizing your field procedures is the single fastest way to reduce billing disputes, avoid unbilled parts, and ensure every technician delivers a consistent customer experience. This template outlines the core components of our operational playbooks.

#### 1. Dispatch & Job Intake Standardization
When a customer calls with a service emergency or scheduled maintenance request:
- **Customer Verification:** Confirm service address, access codes, and equipment brand/model in the CRM.
- **Skill-Based Routing:** Dispatch the technician with the appropriate trade licensing and van inventory.
- **Automated Customer Notification:** Trigger an automated SMS alert with the technician photo and arrival window.

#### 2. On-Site Inspection & Mobile Documentation
Technicians should execute a repeatable 4-point check upon arrival:
- Photograph the existing equipment nameplate, serial number, and immediate installation conditions.
- Perform diagnostic testing and log recorded electrical/pressure readings into the digital work order.
- Present Good/Better/Best repair and replacement options before beginning billable work.
- Obtain digital customer approval on the selected quote tier.

#### 3. Post-Job Closeout & Real-Time Invoicing
Before leaving the customer driveway:
- Ensure all installed parts, filter sizes, and labor hours are recorded in the mobile invoice.
- Collect digital customer signature and process payment via mobile card reader or secure text link.
- Automatically sync completed work orders to the accounting ledger to avoid weekend reconciliation backlogs.
`,
    whatToDoNext: [
      'Audit your current dispatch board for response time bottlenecks.',
      'Establish a standardized 5-step checklist for on-site technician inspections.',
      'Configure automated post-job review request SMS messages to build local Google reviews.',
      'Review two-way QuickBooks synchronization settings to prevent duplicate invoices.',
    ],
    faqs: [
      {
        question: 'What is the purpose of this template guide?',
        answer:
          'This template demonstrates the layout, typography, actionable takeaways, and FAQ accordion used across our operational guides and field playbooks.',
      },
      {
        question: 'How often should trade contractors review their field procedures?',
        answer:
          'Contractors should conduct a quarterly audit of job cycle times, dispatch accuracy, and invoice collection rates to identify operational improvements.',
      },
      {
        question: 'Can these checklists be adapted for residential and commercial jobs?',
        answer:
          'Yes. The template structure applies to both residential service calls and commercial preventive maintenance agreements.',
      },
    ],
    author: 'PHS Editorial & Field Research Team',
    lastUpdated: 'Verified Evergreen',
    readTime: '5 min read',
    relatedProducts: ['test-1', 'test-2'],
  },
};

// Aliases for slug convenience
GUIDES['test-page'] = GUIDES['test-guide'];
GUIDES['test1'] = GUIDES['test-guide'];
GUIDES['test2'] = GUIDES['test-guide'];

export const GUIDE_LIST: GuideArticle[] = [GUIDES['test-guide']];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return GUIDES[normalized];
}
