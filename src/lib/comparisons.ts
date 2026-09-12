import { ComparisonPair } from '../types';

export const COMPARISONS: Record<string, ComparisonPair> = {
  'quoteiq-vs-jobber': {
    slug: 'quoteiq-vs-jobber',
    productA: 'quoteiq',
    productB: 'jobber',
    title: 'QuoteIQ vs Jobber (2026): In-Depth Comparison for Trade Pros',
    subtitle: 'Which field service software delivers better value for plumbing and HVAC businesses?',
    metaDescription: 'Detailed head-to-head comparison of QuoteIQ and Jobber. Compare real pricing, dispatch features, QuickBooks integration, and customer portal capabilities.',
    winnerOverall: 'jobber',
    winnerSmallTeams: 'quoteiq',
    winnerHvac: 'jobber',
    winnerPlumbing: 'quoteiq',
    headToHeadSummary:
      'QuoteIQ and Jobber represent two distinct approaches to field service operations. QuoteIQ is engineered for maximum speed, simplicity, and low overhead for 1–5 tech owner-operators, while Jobber is the polished, scalable powerhouse for established 2–15 technician service teams needing route optimization, deep 2-way QuickBooks sync, and client self-service portals.',
    keyDifferences: [
      {
        category: 'Pricing & Entry Barrier',
        productAAdvantage: 'Starts at $29.99/mo with 3 users for $79.99/mo; no high setup fees.',
        productBAdvantage: 'Core plan starts at $49/mo (1 user), but full features require Connect ($129/mo) or Grow ($249/mo).',
        verdict: 'QuoteIQ wins decisively on raw affordability for solo operators and teams with 1–4 technicians.',
      },
      {
        category: 'Customer Experience & Client Portal',
        productAAdvantage: 'Quick mobile quote approvals and instant SMS payment links.',
        productBAdvantage: 'Industry-best 24/7 Client Hub: Homeowners can approve quotes, view past work, pay invoices, and request new service anytime.',
        verdict: 'Jobber wins for contractors who want a high-end customer-facing portal.',
      },
      {
        category: 'Scheduling & Route Optimization',
        productAAdvantage: 'Fast drag-and-drop calendar with instant job status colors.',
        productBAdvantage: 'Live GPS routing, route optimization that recalculates technician drive times, and geofenced arrival tracking.',
        verdict: 'Jobber wins for fleets with 3+ trucks driving across large metro areas.',
      },
      {
        category: 'QuickBooks Integration',
        productAAdvantage: 'Bidirectional sync on Pro tier for invoices, customers, and payments.',
        productBAdvantage: 'One of the most battle-tested QuickBooks Online integrations with automated tax calculation and account mapping.',
        verdict: 'Jobber has slight edge in multi-tax jurisdiction accounting.',
      },
      {
        category: 'Ease of Setup on Day One',
        productAAdvantage: 'Technicians can start sending real estimates in under 45 minutes without dedicated training.',
        productBAdvantage: 'Comprehensive setup wizard and template library; typically takes 2–3 days for full team adoption.',
        verdict: 'QuoteIQ wins for instant out-of-the-box readiness.',
      },
    ],
    priceComparisonSummary:
      'For a 3-person plumbing crew: QuoteIQ Pro costs $79.99/month. Jobber Connect (up to 5 users) costs $129–$169/month. Over a year, QuoteIQ saves approx $600–$1,000 in baseline software fees.',
    faqs: [
      {
        question: 'Is QuoteIQ or Jobber better for a solo plumber just starting out?',
        answer: 'QuoteIQ is typically better for solo plumbers due to its lower $29.99/mo starting price, faster mobile estimate builder, and streamlined menus tailored for owner-operators who do not need complex fleet dispatch boards.',
      },
      {
        question: 'Can I switch from QuoteIQ to Jobber later as my team grows?',
        answer: 'Yes. Both platforms allow complete CSV export of customer databases, billing addresses, service history, and notes, making data migration straightforward when your fleet expands beyond 5 trucks.',
      },
      {
        question: 'Do both platforms support Good/Better/Best proposal options?',
        answer: 'Yes, both offer multi-tier quoting. Jobber requires the Grow tier ($249/mo) for interactive line-item add-ons, while QuoteIQ includes tiered options in its Pro plan ($79.99/mo).',
      },
      {
        question: 'Which software has better offline functionality in signal dead zones?',
        answer: 'Jobber has a slightly more robust offline synchronization engine that allows technicians to complete entire invoices and store signatures in rural basements before automatically reconnecting and syncing upon reaching LTE/5G signal.',
      },
      {
        question: 'How do credit card processing fees compare between Jobber and QuoteIQ?',
        answer: 'QuoteIQ uses Stripe integration at standard rates (2.9% + 30¢), while Jobber Payments offers 2.7% + 30¢ on credit card transactions with next-business-day payouts.',
      },
      {
        question: 'Which tool makes customer communication easier on busy days?',
        answer: 'QuoteIQ excels at rapid 1-tap SMS quotes and payment links. Jobber excels at automated quote follow-ups, automated review generation, and its 24/7 self-service Client Hub.',
      },
      {
        question: 'Does QuoteIQ or Jobber handle seasonal maintenance agreements better?',
        answer: 'Jobber has native recurring service contracts with automated billing schedules. QuoteIQ supports recurring customer tags and agreement templates on higher tiers.',
      },
      {
        question: 'Can office dispatchers track technicians on a live map in both apps?',
        answer: 'Yes. QuoteIQ provides GPS tracking on its Elite plan ($149.99/mo), while Jobber provides live GPS waypoints and route optimization on Connect ($129/mo) and Grow plans.',
      },
    ],
    lastVerifiedDate: 'August 2026',
  },

  'jobber-vs-housecall-pro': {
    slug: 'jobber-vs-housecall-pro',
    productA: 'jobber',
    productB: 'housecall-pro',
    title: 'Jobber vs Housecall Pro (2026): The Ultimate Home Service Showdown',
    subtitle: 'A detailed breakdown between the two most popular field service platforms in North America.',
    metaDescription: 'Compare Jobber vs Housecall Pro for plumbing and HVAC. Unbiased analysis of pricing, marketing automation, dispatching, QuickBooks sync, and mobile apps.',
    winnerOverall: 'jobber',
    winnerSmallTeams: 'jobber',
    winnerHvac: 'housecall-pro',
    winnerPlumbing: 'jobber',
    headToHeadSummary:
      'Jobber and Housecall Pro are the two titans of the small-to-midsize trade software market. Jobber excels with its clean workflow, exceptional routing, and 24/7 Client Hub. Housecall Pro counters with aggressive consumer marketing tools (automated direct mail postcards, consumer financing on proposals, and Uber-style on-my-way GPS alerts).',
    keyDifferences: [
      {
        category: 'Marketing Automation & Postcards',
        productAAdvantage: 'Automated email/SMS quote follow-ups and review requests.',
        productBAdvantage: 'Native physical postcard mailer automation, recurring automated seasonal marketing drips, and consumer financing integration.',
        verdict: 'Housecall Pro wins decisively for aggressive customer acquisition and repeat booking automation.',
      },
      {
        category: 'Dispatching & Scheduling UI',
        productAAdvantage: 'Cleanest dispatch interface with multi-day view, map overlay, and smart route optimization.',
        productBAdvantage: 'Solid dispatch board with technician shift management and on-my-way SMS alerts.',
        verdict: 'Jobber provides a smoother day-to-day dispatch experience for office staff.',
      },
      {
        category: 'Accounting & QuickBooks Support',
        productAAdvantage: 'Flawless QuickBooks Online sync with automatic batch reconciliation.',
        productBAdvantage: 'Supports both QuickBooks Online and QuickBooks Desktop (via MAX tier).',
        verdict: 'Housecall Pro wins if you require QuickBooks Desktop; Jobber wins for pure QuickBooks Online simplicity.',
      },
      {
        category: 'Consumer Financing for Big-Ticket Jobs',
        productAAdvantage: 'Requires third-party integration or manual financing links.',
        productBAdvantage: 'Built-in Wisetack financing allows HVAC customers to apply for $5,000–$25,000 equipment loans right inside the digital proposal.',
        verdict: 'Housecall Pro wins for HVAC system replacement sales.',
      },
    ],
    priceComparisonSummary:
      'Jobber Connect ($129/mo for up to 5 users) vs Housecall Pro Essentials ($129/mo for up to 5 users) are priced almost identically at base. However, Housecall Pro add-ons (like advanced phone and marketing features) can increase total monthly costs.',
    faqs: [
      {
        question: 'Which is better for HVAC contractors selling replacement systems?',
        answer: 'Housecall Pro often gives HVAC contractors an edge on large system replacements because of built-in point-of-sale consumer financing and postcard maintenance marketing.',
      },
      {
        question: 'Which has the better customer-facing portal?',
        answer: 'Jobber Client Hub is universally praised as cleaner and more intuitive for residential homeowners who want self-service access to past receipts and service histories.',
      },
      {
        question: 'Do both offer free trials?',
        answer: 'Yes, both offer 14-day free trials so you can test dispatching and invoice generation with your own team.',
      },
    ],
    lastVerifiedDate: 'August 2026',
  },

  'servicetitan-vs-fieldedge': {
    slug: 'servicetitan-vs-fieldedge',
    productA: 'servicetitan',
    productB: 'fieldedge',
    title: 'ServiceTitan vs FieldEdge (2026): Enterprise HVAC & Plumbing Software Compared',
    subtitle: 'Which heavy-duty platform is right for high-volume commercial and multi-truck trade companies?',
    metaDescription: 'Compare ServiceTitan vs FieldEdge. Analysis of enterprise dispatch, truck inventory management, QuickBooks Desktop integration, and total cost of ownership.',
    winnerOverall: 'servicetitan',
    winnerSmallTeams: 'fieldedge',
    winnerHvac: 'servicetitan',
    winnerPlumbing: 'fieldedge',
    headToHeadSummary:
      'For contractors with 10+ trucks generating several million dollars in annual revenue, ServiceTitan and FieldEdge are common finalists. ServiceTitan is the modern cloud enterprise suite with unmatched analytics and call center metrics, while FieldEdge is the deep-rooted legacy platform with the strongest QuickBooks Desktop sync.',
    keyDifferences: [
      {
        category: 'Inventory & Parts Management',
        productAAdvantage: 'Truck-level inventory, warehouse replenishment, vendor purchase orders, and warranty return tracking.',
        productBAdvantage: 'Basic part tracking and customer equipment history logs.',
        verdict: 'ServiceTitan wins for complex multi-warehouse supply chain operations.',
      },
      {
        category: 'QuickBooks Desktop Integration',
        productAAdvantage: 'Supports QB Desktop via sync utility, but heavily prefers enterprise accounting / QB Enterprise.',
        productBAdvantage: 'Deepest native live synchronization with QuickBooks Desktop on the market, built over decades.',
        verdict: 'FieldEdge wins if keeping QuickBooks Desktop is non-negotiable.',
      },
      {
        category: 'Total Cost of Ownership',
        productAAdvantage: 'Massive feature set, but starts at $250+/tech/mo plus $5,000+ onboarding.',
        productBAdvantage: 'Typically $100–$150/tech/mo with lower setup fees.',
        verdict: 'FieldEdge is substantially more affordable for 10–20 tech teams.',
      },
    ],
    priceComparisonSummary:
      'ServiceTitan typically requires a $2,500–$10,000 implementation fee and $250–$399/tech/month on multi-year contracts. FieldEdge averages $125/tech/month with lower onboarding costs.',
    faqs: [
      {
        question: 'At what company size does ServiceTitan make financial sense?',
        answer: 'Generally when a plumbing or HVAC company reaches 12–15+ field technicians and at least $2.5M in annual revenue, where improved dispatch efficiency and inventory control offset the $30k+ annual software expense.',
      },
      {
        question: 'Can smaller shops under 5 techs use ServiceTitan?',
        answer: 'It is rarely recommended. The high monthly minimums, complex menus, and long implementation timelines create unnecessary friction for small shops.',
      },
    ],
    lastVerifiedDate: 'August 2026',
  },

  'quoteiq-vs-housecall-pro': {
    slug: 'quoteiq-vs-housecall-pro',
    productA: 'quoteiq',
    productB: 'housecall-pro',
    title: 'QuoteIQ vs Housecall Pro (2026): Budget Agility vs Marketing Power',
    subtitle: 'Comparing mobile-first agility against comprehensive residential marketing automation.',
    metaDescription: 'QuoteIQ vs Housecall Pro comparison. See feature breakdowns, pricing differences, proposal tools, and recommendations for 1-10 technician trade businesses.',
    winnerOverall: 'housecall-pro',
    winnerSmallTeams: 'quoteiq',
    winnerHvac: 'housecall-pro',
    winnerPlumbing: 'quoteiq',
    headToHeadSummary:
      'If you are an owner-operator wanting to keep overhead low while looking ultra-professional on mobile, QuoteIQ delivers remarkable value at $29.99–$79.99/mo. If you have 3–10 techs and want automated direct-mail postcards, consumer financing, and customer tracking maps, Housecall Pro is worth the higher investment.',
    keyDifferences: [
      {
        category: 'Monthly Cost',
        productAAdvantage: '$29.99/mo Starter, $79.99/mo Pro (includes 3 users).',
        productBAdvantage: '$79/mo Basic (1 user), $169/mo Essentials (up to 5 users).',
        verdict: 'QuoteIQ provides roughly 50% lower operational cost.',
      },
      {
        category: 'Marketing Tools',
        productAAdvantage: 'Automated SMS review requests and quick client broadcast messages.',
        productBAdvantage: 'Full automated postcard mailing system, recurring email marketing, and automated Google review triggers.',
        verdict: 'Housecall Pro has a far more advanced direct marketing suite.',
      },
    ],
    priceComparisonSummary:
      'QuoteIQ Pro ($79.99/mo) vs Housecall Pro Essentials ($169/mo monthly or $129/mo billed annually). QuoteIQ saves over $600/year for a 3-person crew.',
    faqs: [
      {
        question: 'Which one is easier for older technicians to use on their phones?',
        answer: 'QuoteIQ has larger touch targets and fewer nested submenus, making it very quick for non-technical field workers to create and sign off on invoices.',
      },
    ],
    lastVerifiedDate: 'August 2026',
  },

  'service-fusion-vs-jobber': {
    slug: 'service-fusion-vs-jobber',
    productA: 'service-fusion',
    productB: 'jobber',
    title: 'Service Fusion vs Jobber (2026): Flat-Rate vs Per-User Pricing',
    subtitle: 'Which software provides better economic scaling and workflow for 5–20 technician teams?',
    metaDescription: 'Detailed comparison of Service Fusion and Jobber. Compare unlimited user pricing against per-seat plans, GPS fleet tracking, and customer experience.',
    winnerOverall: 'jobber',
    winnerSmallTeams: 'jobber',
    winnerHvac: 'service-fusion',
    winnerPlumbing: 'jobber',
    headToHeadSummary:
      'The big difference between Service Fusion and Jobber is the business model: Service Fusion charges a flat monthly rate with unlimited users (great for 8–20 techs), whereas Jobber charges tiered pricing with per-user limits, but delivers a significantly more modern UI and superior homeowner portal.',
    keyDifferences: [
      {
        category: 'User Scalability & Cost',
        productAAdvantage: 'Unlimited office and field users on all tiers starting at $169/mo.',
        productBAdvantage: 'Tiered user caps with $29/user/month additional seats.',
        verdict: 'Service Fusion saves thousands per year for 10+ technician crews.',
      },
      {
        category: 'UI & User Experience',
        productAAdvantage: 'Functional but denser, enterprise-style interface.',
        productBAdvantage: 'Industry-leading visual design, effortless client booking, and intuitive dispatch board.',
        verdict: 'Jobber wins for overall ease of use and staff happiness.',
      },
    ],
    priceComparisonSummary:
      'For a 12-technician HVAC team: Service Fusion Plus costs $259/month total. Jobber Grow with 12 users costs $249–$349/month base. As the team expands to 18 techs, Service Fusion stays at $259 while Jobber increases with user add-on packs.',
    faqs: [
      {
        question: 'Is Service Fusion truly unlimited users?',
        answer: 'Yes, Service Fusion includes unlimited office dispatchers, field technicians, managers, and bookkeepers on all of its standard monthly packages.',
      },
    ],
    lastVerifiedDate: 'August 2026',
  },
};

export const COMPARISON_LIST = Object.values(COMPARISONS);

export function getComparisonBySlug(slug: string): ComparisonPair | undefined {
  return COMPARISONS[slug];
}
