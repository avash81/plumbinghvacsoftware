import React from 'react';
import { DollarSign, ShieldCheck, Check, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { AFFILIATE_CONFIGS } from '../lib/affiliate-links';

interface HowWeMakeMoneyPageProps {
  onNavigate: (route: string) => void;
}

export const HowWeMakeMoneyPage: React.FC<HowWeMakeMoneyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <ShieldCheck className="w-4 h-4" />
          <span>FTC Compliance & Affiliate Disclosure</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          How We Make Money (Commercial Disclosures)
        </h1>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed">
          PHS is an independent, reader-supported platform. Here is how we fund our research while staying objective.
        </p>
      </div>

      {/* Main Disclosure Explanation */}
      <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          How Affiliate Marketing Works On This Site
        </h2>
        <div className="space-y-3 text-sm text-[#16201f]/85 leading-relaxed font-body">
          <p>
            If you click a link on our site and purchase software, we may earn a referral commission. This costs you nothing extra and helps us keep our research independent.
          </p>
          <p>
            In many cases, our affiliate links provide access to exclusive discounts that aren't available through standard direct registration.
          </p>
        </div>
      </section>

      {/* Complete Vendor Relationship Table */}
      <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Complete Table of Software Vendor Relationships
        </h2>
        <p className="text-xs md:text-sm text-[#16201f]/70 font-body">
          Every software platform mentioned on PHS is listed below with its current partnership status:
        </p>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs border-collapse font-body">
            <thead>
              <tr className="bg-[#fbfaf8] border-b border-[#dde3e1]">
                <th className="py-3 px-4 font-bold font-display text-[#16201f]">Software Vendor</th>
                <th className="py-3 px-4 font-bold font-display text-[#16201f]">Relationship Type</th>
                <th className="py-3 px-4 font-bold font-display text-[#16201f]">Commission Structure</th>
                <th className="py-3 px-4 font-bold font-display text-[#16201f]">Editorial Rigor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dde3e1]">
              {Object.entries(AFFILIATE_CONFIGS).map(([slug, config]) => (
                <tr key={slug} className="hover:bg-neutral-50/50">
                  <td className="py-3 px-4 font-bold text-[#16201f] font-display">
                    {slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                  </td>
                  <td className="py-3 px-4">
                    {config.isAffiliate ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                        Affiliate Partner
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-[11px] font-semibold">
                        Direct / Non-Affiliate
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-[#16201f]/75">
                    {config.isAffiliate ? 'Standard SaaS referral fee per verified signup' : 'None (Direct link to official vendor website)'}
                  </td>
                  <td className="py-3 px-4 text-[#0e6e6a] font-medium">
                    100% Tested & Verified
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Editorial Rules */}
      <section className="bg-[#f3f6f5] border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          How We Stay Neutral
        </h2>
        <ul className="space-y-3 text-sm text-[#16201f]/85 font-body">
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
            <span><strong>No Pay-to-Play Rankings:</strong> We never accept sponsored fees to change review ratings or swap winner designations in head-to-head showdowns.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
            <span><strong>Equal Treatment for Non-Affiliates:</strong> Software platforms without affiliate programs (like ServiceTitan and Simpro) are reviewed with the exact same depth and placed in comparison matrices based purely on merit.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
            <span><strong>Clear Visual Labeling:</strong> All links that may generate commissions are labeled with our standardized affiliate disclosure badge.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
