import React from 'react';
import { Check, Minus } from 'lucide-react';
import { ProductData } from '../types';
import { AffiliateCTA } from './AffiliateCTA';

interface FeatureDefinition {
  key: string;
  label: string;
  category: string;
  tooltip?: string;
  getValue: (product: ProductData) => string | boolean;
}

interface ComparisonTableProps {
  products: ProductData[];
  highlightSlug?: string;
  onSelectProduct?: (slug: string) => void;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  highlightSlug,
  onSelectProduct,
  className = '',
}) => {
  const featureDefinitions: FeatureDefinition[] = [
    // Pricing & Terms
    {
      key: 'startingPrice',
      label: 'Starting Price',
      category: 'Pricing & Terms',
      getValue: (p) => p.startingPrice,
    },
    {
      key: 'pricingModel',
      label: 'Pricing Structure',
      category: 'Pricing & Terms',
      getValue: (p) => p.priceModel,
    },
    {
      key: 'freeTrial',
      label: 'Free Trial',
      category: 'Pricing & Terms',
      getValue: (p) => (p.hasFreeTrial ? `${p.freeTrialDays} Days` : 'Demo Only'),
    },
    {
      key: 'contract',
      label: 'Annual Contract Required',
      category: 'Pricing & Terms',
      getValue: (p) => (p.contractRequired ? 'Yes (Annual)' : 'No (Month-to-Month)'),
    },
    {
      key: 'ccFees',
      label: 'Card Processing Fee',
      category: 'Pricing & Terms',
      getValue: (p) => p.features.creditCardProcessingFee,
    },

    // Field Operations & Mobile
    {
      key: 'mobileApp',
      label: 'Native iOS & Android App',
      category: 'Field Operations',
      getValue: (p) => p.features.mobileAppIosAndroid,
    },
    {
      key: 'offlineMode',
      label: 'Basement / Offline Mode',
      category: 'Field Operations',
      getValue: (p) => p.features.offlineMode,
    },
    {
      key: 'dispatch',
      label: 'Drag & Drop Dispatch Board',
      category: 'Field Operations',
      getValue: (p) => p.features.dragDropDispatch,
    },
    {
      key: 'gps',
      label: 'Live Tech GPS & Routing',
      category: 'Field Operations',
      getValue: (p) => p.features.gpsTracking,
    },
    {
      key: 'onMyWay',
      label: '"On-My-Way" SMS Alerts',
      category: 'Field Operations',
      getValue: (p) => p.features.onMyWaySmsAlerts,
    },

    // Quoting & Payments
    {
      key: 'goodBetterBest',
      label: 'Good/Better/Best Multi-Quotes',
      category: 'Sales & Invoicing',
      getValue: (p) => p.features.customQuoteOptionsTiered,
    },
    {
      key: 'pricebook',
      label: 'Flat-Rate Pricebook',
      category: 'Sales & Invoicing',
      getValue: (p) => p.features.flatRatePricebook,
    },
    {
      key: 'onlineBooking',
      label: '24/7 Online Client Booking',
      category: 'Sales & Invoicing',
      getValue: (p) => p.features.onlineBookingPortal,
    },
    {
      key: 'recurringPlans',
      label: 'Recurring Maintenance Plans',
      category: 'Sales & Invoicing',
      getValue: (p) => p.features.serviceAgreementsRecurring,
    },

    // Accounting & Equipment
    {
      key: 'qbo',
      label: 'QuickBooks Online Sync',
      category: 'Accounting & Integrations',
      getValue: (p) => p.features.quickbooksOnlineSync,
    },
    {
      key: 'qbd',
      label: 'QuickBooks Desktop Sync',
      category: 'Accounting & Integrations',
      getValue: (p) => p.features.quickbooksDesktopSync,
    },
    {
      key: 'equipment',
      label: 'HVAC/Plumbing Equipment Tracking',
      category: 'Accounting & Integrations',
      getValue: (p) => p.features.equipmentHistoryTracking,
    },
    {
      key: 'jobCosting',
      label: 'Job Costing & Profitability Reports',
      category: 'Accounting & Integrations',
      getValue: (p) => p.features.jobCostingReporting,
    },
  ];

  // Group features by category
  const categories = Array.from(new Set(featureDefinitions.map((f) => f.category)));

  return (
    <div id="comparison-table-wrapper" className={`w-full overflow-x-auto my-6 border border-[#D3DDE3] rounded-sm shadow-sm ${className}`}>
      <table
        id="fsm-comparison-table"
        className="w-full text-left border-collapse bg-white min-w-[500px] md:min-w-[760px] table-fixed"
      >
        {/* Sticky Header Row */}
        <thead>
          <tr className="bg-white border-b-2 border-[#0F4C6E]">
            <th className="p-2 md:p-5 w-[110px] md:w-1/4 text-[9px] md:text-[11px] font-bold text-[#17242C]/70 uppercase tracking-widest spec-font sticky left-0 bg-white z-20 border-r border-[#D3DDE3] border-b-2 border-[#0F4C6E]">
              Core Features / Specs
            </th>
            {products.map((p) => {
              const isHighlighted = p.slug === highlightSlug;
              return (
                <th
                  key={p.slug}
                  className={`p-2 md:p-5 text-center min-w-[130px] border-r border-[#D3DDE3] last:border-r-0 border-b-2 border-[#0F4C6E] transition-colors ${
                    isHighlighted ? 'bg-[#0F4C6E]/5' : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    {isHighlighted && (
                      <span className="badge-accent mb-0.5 text-[8px] md:text-[10px] px-1.5 py-0">
                        Top Choice
                      </span>
                    )}
                    <span className="text-xs md:text-lg font-black text-[#17242C] spec-font truncate max-w-[110px] md:max-w-none">
                      {p.name}
                    </span>
                    <span className="text-[9px] md:text-xs font-bold text-[#0F4C6E] mono-font bg-[#0F4C6E]/10 px-1.5 py-0.5 rounded-xs">
                      {p.ratings.overall.toFixed(1)}
                    </span>
                    <span className="text-[9px] text-[#17242C]/70 text-center font-body line-clamp-2 h-5 md:h-8 leading-tight">
                      {p.bestFor}
                    </span>

                    <div className="pt-1.5 w-full">
                      <AffiliateCTA
                        productSlug={p.slug}
                        productName={p.name}
                        variant="compact"
                        label="Visit Site"
                        className="w-full text-center"
                      />
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Feature Category Groups and Rows */}
        <tbody className="divide-y divide-[#D3DDE3] text-xs">
          {categories.map((category) => (
            <React.Fragment key={category}>
              {/* Category Header Row */}
              <tr className="bg-[#E7EEF2] border-y border-[#D3DDE3]">
                <td
                  colSpan={products.length + 1}
                  className="px-3 py-1.5 text-[9px] md:text-[11px] font-bold text-[#17242C] uppercase tracking-widest spec-font"
                >
                  {category}
                </td>
              </tr>

              {/* Individual Feature Rows */}
              {featureDefinitions
                .filter((f) => f.category === category)
                .map((feature) => (
                  <tr
                    key={feature.key}
                    className="hover:bg-neutral-50/80 transition-colors border-b border-[#D3DDE3]"
                  >
                    <td className="p-2 md:p-4 text-[9px] md:text-xs font-bold uppercase tracking-wider text-[#17242C]/75 sticky left-0 bg-white hover:bg-neutral-50/80 z-10 border-r border-[#D3DDE3] leading-tight break-words">
                      {feature.label}
                    </td>

                    {products.map((p) => {
                      const val = feature.getValue(p);
                      const isHighlighted = p.slug === highlightSlug;

                      return (
                        <td
                          key={p.slug}
                          className={`p-2 md:p-4 text-center border-r border-[#D3DDE3] last:border-r-0 ${
                            isHighlighted ? 'bg-[#0F4C6E]/5' : ''
                          }`}
                        >
                          {typeof val === 'boolean' ? (
                            val ? (
                              <div className="inline-flex items-center justify-center gap-1 text-[#0F4C6E] font-bold text-[9px] md:text-xs">
                                <Check className="w-3 h-3 md:w-4 md:h-4 stroke-[3]" />
                                <span className="hidden sm:inline">Included</span>
                                <span className="sm:hidden">Yes</span>
                              </div>
                            ) : (
                              <span className="text-neutral-300 font-bold text-sm">—</span>
                            )
                          ) : (
                            <span className="mono-font text-[9px] md:text-sm font-bold text-[#17242C] block leading-tight break-words">
                              {val || '—'}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
