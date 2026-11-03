/**
 * products.ts
 * ---------------------------------------------------------
 * Central catalog for field service management product data.
 * Configured with template products (Test Software 1 & Test Software 2)
 * for testing and layout demonstration.
 *
 * All previous individual products (Jobber, QuoteIQ, Housecall Pro,
 * ServiceTitan, FieldPulse, FieldEdge, Service Fusion, Simpro)
 * have been completely removed per editorial restructuring.
 * ---------------------------------------------------------
 */

import { ProductData } from '../types';

export const PRODUCTS: Record<string, ProductData> = {
  'test-1': {
    slug: 'test-1',
    name: 'Test Software 1',
    tagline: 'Sample operations and field dispatch platform template',
    logoPath: '/logos/test1.png',
    website: 'https://example.com/test-software-1',
    bestFor: 'Solo plumbers, HVAC owner-operators, and nimble teams (Template Preview)',
    targetTeamSize: '1–5 techs (Template Focus)',
    startingPrice: '$49/mo',
    priceModel: 'Tiered subscription (Sample Model)',
    freeTrialDays: 14,
    hasFreeTrial: true,
    contractRequired: false,
    ratings: {
      overall: 4.8,
      valueForMoney: 4.9,
      easeOfUse: 4.8,
      dispatchAndMobile: 4.7,
      invoicingAndPayments: 4.8,
      quickbooksSync: 4.6,
      customerSupport: 4.7,
    },
    pros: [
      'Clean modern layout demonstrating fast technician job assignment and mobile dispatch',
      'Automated customer notification templates (SMS on-the-way alerts and instant invoicing)',
      'Direct two-way accounting synchronization with automatic invoice reconciliation',
      'Straightforward flat-rate pricing without mandatory multi-year lock-in contracts',
      'Rapid deployment template — designed for quick team adoption in under 48 hours',
    ],
    cons: [
      'Template placeholder: Advanced multi-warehouse inventory requires higher-tier add-on',
      'Template placeholder: Custom enterprise API integrations available only on top tier',
    ],
    keyStrengths: [
      'Rapid mobile estimating with interactive upsell options',
      'Intuitive drag-and-drop scheduling board',
      'Automated post-job review generation links',
    ],
    pricingTiers: [
      {
        name: 'Starter Template',
        priceMonthly: 49,
        priceAnnualBilled: 39,
        usersIncluded: '1 User',
        extraUserCost: '$20/user/mo',
        features: [
          'Estimating & Invoicing',
          'Online payment processing',
          'Client CRM & job notes',
          'Mobile iOS/Android app',
        ],
      },
      {
        name: 'Pro Template',
        priceMonthly: 99,
        priceAnnualBilled: 79,
        usersIncluded: 'Up to 5 Users',
        extraUserCost: '$25/user/mo',
        highlight: true,
        features: [
          'Everything in Starter',
          'Drag-and-drop scheduling calendar',
          'Automated text/email reminders',
          'Two-way QuickBooks Online sync',
          'Custom flat-rate pricebooks',
        ],
      },
      {
        name: 'Enterprise Template',
        priceMonthly: 199,
        priceAnnualBilled: 169,
        usersIncluded: 'Up to 15 Users',
        extraUserCost: '$20/user/mo',
        features: [
          'Everything in Pro',
          'Live GPS technician tracking',
          'Advanced multi-tech dispatch board',
          'Job costing and margin reporting',
          'Dedicated phone support',
        ],
      },
    ],
    features: {
      mobileAppIosAndroid: true,
      offlineMode: 'Full offline sync supported',
      dragDropDispatch: true,
      gpsTracking: 'Live technician route mapping',
      quickbooksOnlineSync: true,
      quickbooksDesktopSync: false,
      flatRatePricebook: true,
      onMyWaySmsAlerts: true,
      onlineBookingPortal: true,
      automatedFollowups: true,
      jobCostingReporting: 'Real-time job profit margins',
      equipmentHistoryTracking: 'Customer serial number & service logs',
      customQuoteOptionsTiered: true,
      serviceAgreementsRecurring: true,
      creditCardProcessingFee: '2.7% + 30¢ standard rate',
    },
    verdict:
      'Test Software 1 serves as an exemplar layout for evaluating agile, mobile-first field service software platforms tailored for owner-operators and small trade fleets.',
    plumbingSuitability:
      'Exceptional for residential service calls, emergency drain cleanings, and fixture replacements.',
    hvacSuitability:
      'Well-suited for seasonal maintenance agreements, AC tune-ups, and residential system installations.',
    affiliateSlug: 'test-1',
    affiliateStatus: 'active',
    affiliateNotes: null,
    trades: ['both'],
    lastVerifiedDate: 'Verified Evergreen',
    testedVersion: 'Version 1.0 (Template)',
    operatorVoices: [
      {
        name: 'Alex Miller',
        business: 'Precision Trade Services (Denver, CO)',
        quote:
          'This template review demonstrates how technician adoption and fast invoicing accelerate cash flow for small service operations.',
      },
    ],
  },

  'test-2': {
    slug: 'test-2',
    name: 'Test Software 2',
    tagline: 'Comprehensive fleet management and project costing platform template',
    logoPath: '/logos/test2.png',
    website: 'https://example.com/test-software-2',
    bestFor: 'Growing service fleets, multi-crew commercial contractors, and commercial shops (Template Preview)',
    targetTeamSize: '5–25 techs (Template Focus)',
    startingPrice: '$99/mo',
    priceModel: 'Flat rate / Tiered (Sample Model)',
    freeTrialDays: 14,
    hasFreeTrial: true,
    contractRequired: false,
    ratings: {
      overall: 4.6,
      valueForMoney: 4.5,
      easeOfUse: 4.6,
      dispatchAndMobile: 4.7,
      invoicingAndPayments: 4.5,
      quickbooksSync: 4.8,
      customerSupport: 4.5,
    },
    pros: [
      'Comprehensive enterprise dispatch board layout with simulated GPS tracking & skill tagging',
      'Robust multi-warehouse parts inventory and purchase order reconciliation template',
      'Deep commercial project management: progress billing, retention sums, and multi-phase quoting',
      'Flat-rate or scalable user tiers that support larger office dispatch and field teams',
      'Native equipment asset registers with maintenance testing compliance history',
    ],
    cons: [
      'Template placeholder: Steeper onboarding learning curve compared to lightweight tools',
      'Template placeholder: Higher starting price point for solo one-truck contractors',
    ],
    keyStrengths: [
      'Multi-phase commercial job costing and labor burden tracking',
      'Detailed truck-level parts inventory tracking',
      'Comprehensive supplier catalog pricing integration',
    ],
    pricingTiers: [
      {
        name: 'Standard Fleet',
        priceMonthly: 99,
        priceAnnualBilled: 85,
        usersIncluded: 'Up to 5 Users',
        extraUserCost: '$25/user/mo',
        features: [
          'Complete dispatching and scheduling',
          'Work orders and digital signatures',
          'QuickBooks Online & Desktop integration',
          'Customer asset maintenance logs',
        ],
      },
      {
        name: 'Commercial Pro',
        priceMonthly: 189,
        priceAnnualBilled: 159,
        usersIncluded: 'Up to 12 Users',
        extraUserCost: '$20/user/mo',
        highlight: true,
        features: [
          'Everything in Standard Fleet',
          'Multi-location inventory tracking',
          'Progressive milestone billing & retention',
          'GPS live route dispatching',
          'Automated purchase order system',
        ],
      },
      {
        name: 'Fleet Enterprise',
        priceMonthly: 299,
        priceAnnualBilled: 250,
        usersIncluded: 'Unlimited Users',
        extraUserCost: '$0',
        features: [
          'Everything in Commercial Pro',
          'Unlimited office and field licenses',
          'Dedicated account manager',
          'Custom reports and KPI dashboards',
          'Open API & webhook integrations',
        ],
      },
    ],
    features: {
      mobileAppIosAndroid: true,
      offlineMode: 'Comprehensive offline field mode',
      dragDropDispatch: true,
      gpsTracking: 'Geofenced timesheets and live vehicle telematics',
      quickbooksOnlineSync: true,
      quickbooksDesktopSync: true,
      flatRatePricebook: true,
      onMyWaySmsAlerts: true,
      onlineBookingPortal: true,
      automatedFollowups: true,
      jobCostingReporting: 'Comprehensive labor burden, materials, and margin tracking',
      equipmentHistoryTracking: 'Industrial asset tracking with compliance inspection sheets',
      customQuoteOptionsTiered: true,
      serviceAgreementsRecurring: true,
      creditCardProcessingFee: '2.6% + 30¢ flat rate',
    },
    verdict:
      'Test Software 2 serves as an exemplar layout for evaluating heavy-duty, commercial-ready field management platforms with deep inventory, multi-phase job costing, and large fleet dispatching.',
    plumbingSuitability:
      'Superb for commercial plumbing, new construction phases, and backflow inspection management.',
    hvacSuitability:
      'Outstanding for commercial chiller maintenance, multi-unit building contracts, and refrigeration logs.',
    affiliateSlug: 'test-2',
    affiliateStatus: 'active',
    affiliateNotes: null,
    trades: ['both'],
    lastVerifiedDate: 'Verified Evergreen',
    testedVersion: 'Version 2.0 (Template)',
    operatorVoices: [
      {
        name: 'Marcus Vance',
        business: 'Apex Mechanical & HVAC (Dallas, TX)',
        quote:
          'This template review illustrates how commercial contractors track multi-truck parts inventory, purchase orders, and job margins across large projects.',
      },
    ],
  },
};

// Aliases for slug flexibility (e.g. test1, test2)
PRODUCTS['test1'] = PRODUCTS['test-1'];
PRODUCTS['test2'] = PRODUCTS['test-2'];

/**
 * List of all products as an array for hub pages and iteration.
 * Uses unique slug entries to prevent duplicate cards.
 */
export const PRODUCT_LIST: ProductData[] = [
  PRODUCTS['test-1'],
  PRODUCTS['test-2'],
];

/**
 * Returns the full product data object for a given unique slug.
 */
export function getProductBySlug(slug: string): ProductData | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return PRODUCTS[normalized];
}
