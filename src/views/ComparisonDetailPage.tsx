/**
 * ComparisonDetailPage.tsx
 * ---------------------------------------------------------
 * Deep-dive head-to-head comparison between two specific products.
 * Includes feature tables, winner analysis, and category-specific winners.
 *
 * Data source: lib/comparisons.ts, lib/products.ts
 * Related: CompareHubPage.tsx, ProductReviewPage.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.2
 * ---------------------------------------------------------
 */

import React from 'react';
import { ChevronRight, Scale, Award, CheckCircle2, DollarSign, Wrench, ArrowRight } from 'lucide-react';
import { ComparisonPair } from '../types';
import { PRODUCTS } from '../lib/products';
import { ComparisonTable } from '../components/ComparisonTable';
import { FAQAccordion } from '../components/FAQAccordion';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { VerifiedDateBadge } from '../components/VerifiedDateBadge';

interface ComparisonDetailPageProps {
  comparison: ComparisonPair;
  onNavigate: (route: string) => void;
}

export const ComparisonDetailPage: React.FC<ComparisonDetailPageProps> = ({
  comparison,
  onNavigate,
}) => {
  const pA = PRODUCTS[comparison.productA];
  const pB = PRODUCTS[comparison.productB];

  if (!pA || !pB) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold font-display">Comparison Not Found</h2>
        <button
          type="button"
          onClick={() => onNavigate('/compare')}
          className="mt-4 px-4 py-2 bg-[#0e6e6a] text-white rounded-lg text-sm"
        >
          Back to Comparisons Hub
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#16201f]/60 font-body">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="hover:text-[#0e6e6a]"
        >
          Home
        </button>
        <ChevronRight className="w-3 h-3" />
        <button
          type="button"
          onClick={() => onNavigate('/compare')}
          className="hover:text-[#0e6e6a]"
        >
          Compare
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#16201f] font-semibold">{pA.name} vs {pB.name}</span>
      </nav>

      {/* Hero Header */}
      <div className="space-y-4">
        <VerifiedDateBadge date={comparison.lastVerifiedDate} />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          {comparison.title}
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-8 h-8 rounded-full bg-[#16201f] flex items-center justify-center text-white text-[10px] font-bold">
            MV
          </div>
          <div className="text-xs">
            <span className="text-[#16201f]/60">Analysis by </span>
            <button
              onClick={() => onNavigate('/authors/marcus-vance')}
              className="text-[#16201f] font-bold hover:text-[#0e6e6a] hover:underline"
            >
              Marcus Vance
            </button>
            <span className="text-[#16201f]/40 mx-2">|</span>
            <span className="text-[#16201f]/60">Verified {comparison.lastVerifiedDate}</span>
          </div>
        </div>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed max-w-4xl">
          {comparison.subtitle}
        </p>
      </div>

      {/* Quick Verdict Matrix Callout */}
      <div className="bg-[#fbfaf8] border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Award className="w-4 h-4" />
          <span>Quick Decision Summary</span>
        </div>

        <p className="text-base text-[#16201f]/90 leading-relaxed font-body">
          {comparison.headToHeadSummary}
        </p>

        {/* Winner Category Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#dde3e1]">
          <div className="p-3 bg-white rounded-xl border border-[#dde3e1]">
            <span className="text-[11px] font-bold text-[#16201f]/60 uppercase font-display block">
              Overall Winner:
            </span>
            <span className="font-bold text-sm text-[#0e6e6a] font-display mt-0.5 block">
              {PRODUCTS[comparison.winnerOverall]?.name || 'Split Choice'}
            </span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#dde3e1]">
            <span className="text-[11px] font-bold text-[#16201f]/60 uppercase font-display block">
              Small / 1–3 Techs:
            </span>
            <span className="font-bold text-sm text-[#0e6e6a] font-display mt-0.5 block">
              {PRODUCTS[comparison.winnerSmallTeams]?.name || 'Split Choice'}
            </span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#dde3e1]">
            <span className="text-[11px] font-bold text-[#16201f]/60 uppercase font-display block">
              HVAC Contractors:
            </span>
            <span className="font-bold text-sm text-[#0e6e6a] font-display mt-0.5 block">
              {PRODUCTS[comparison.winnerHvac]?.name || 'Split Choice'}
            </span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#dde3e1]">
            <span className="text-[11px] font-bold text-[#16201f]/60 uppercase font-display block">
              Plumbing Contractors:
            </span>
            <span className="font-bold text-sm text-[#0e6e6a] font-display mt-0.5 block">
              {PRODUCTS[comparison.winnerPlumbing]?.name || 'Split Choice'}
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Full Feature Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Side-by-Side Feature & Price Comparison
        </h2>
        <ComparisonTable products={[pA, pB]} highlightSlug={pA.ratings.overall >= pB.ratings.overall ? pA.slug : pB.slug} />
      </section>

      {/* Category-by-Category Deep Breakdown */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Key Category Differences & Trade-Offs
        </h2>

        <div className="space-y-4">
          {comparison.keyDifferences.map((diff, index) => (
            <div
              key={index}
              className="bg-white border border-[#dde3e1] rounded-xl p-5 md:p-6 shadow-xs space-y-3"
            >
              <h3 className="text-lg font-bold font-display text-[#16201f]">
                {diff.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                <div className="p-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1]">
                  <span className="font-bold text-[#0e6e6a] block mb-1 font-display">
                    {pA.name} Approach:
                  </span>
                  <p className="text-[#16201f]/85">{diff.productAAdvantage}</p>
                </div>

                <div className="p-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1]">
                  <span className="font-bold text-[#0e6e6a] block mb-1 font-display">
                    {pB.name} Approach:
                  </span>
                  <p className="text-[#16201f]/85">{diff.productBAdvantage}</p>
                </div>
              </div>

              <div className="p-3 bg-[#0e6e6a]/5 rounded-lg border border-[#0e6e6a]/20 text-xs font-medium text-[#16201f]">
                <strong className="text-[#0e6e6a] font-display">Category Verdict:</strong> {diff.verdict}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Price Comparison Scenario */}
      <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-[#0e6e6a] text-xs font-bold uppercase font-display">
          <DollarSign className="w-4 h-4" />
          <span>Real-World Price Comparison Scenario</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold font-display text-[#16201f]">
          What Will You Actually Pay?
        </h2>
        <p className="text-sm text-[#16201f]/85 leading-relaxed font-body">
          {comparison.priceComparisonSummary}
        </p>
      </section>

      {/* Action CTA Cards for both products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#dde3e1] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold font-display text-[#16201f]">{pA.name}</h3>
            <p className="text-xs text-[#16201f]/75 mt-1">{pA.tagline}</p>
            <div className="mt-3 text-xs font-semibold text-[#0e6e6a]">
              Starting at {pA.startingPrice} • {pA.hasFreeTrial ? `${pA.freeTrialDays}-day trial` : 'Demo'}
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-[#dde3e1]">
            <AffiliateCTA productSlug={pA.slug} productName={pA.name} variant="primary" className="w-full" />
          </div>
        </div>

        <div className="bg-white border border-[#dde3e1] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold font-display text-[#16201f]">{pB.name}</h3>
            <p className="text-xs text-[#16201f]/75 mt-1">{pB.tagline}</p>
            <div className="mt-3 text-xs font-semibold text-[#0e6e6a]">
              Starting at {pB.startingPrice} • {pB.hasFreeTrial ? `${pB.freeTrialDays}-day trial` : 'Demo'}
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-[#dde3e1]">
            <AffiliateCTA productSlug={pB.slug} productName={pB.name} variant="primary" className="w-full" />
          </div>
        </div>
      </div>

      {/* FAQs */}
      <FAQAccordion faqs={comparison.faqs} title={`${pA.name} vs ${pB.name} FAQs`} />
    </div>
  );
};
