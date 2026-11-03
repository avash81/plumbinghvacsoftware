/**
 * CompareHubPage.tsx
 * ---------------------------------------------------------
 * Directory of head-to-head software comparisons.
 * Helps users decide between specific competing platforms.
 *
 * Data source: lib/comparisons.ts, lib/products.ts
 * Related: ComparisonDetailPage.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.2
 * ---------------------------------------------------------
 */

import React, { useState } from 'react';
import { Scale, ArrowRight, Check, ArrowRightLeft, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPARISON_LIST, getComparisonBySlug } from '../lib/comparisons';
import { PRODUCTS, PRODUCT_LIST } from '../lib/products';
import { ComparisonTable } from '../components/ComparisonTable';

interface CompareHubPageProps {
  onNavigate: (route: string) => void;
}

export const CompareHubPage: React.FC<CompareHubPageProps> = ({ onNavigate }) => {
  const [selectedProductA, setSelectedProductA] = useState('test-1');
  const [selectedProductB, setSelectedProductB] = useState('test-2');

  const pA = PRODUCTS[selectedProductA] || PRODUCTS['test-1'];
  const pB = PRODUCTS[selectedProductB] || PRODUCTS['test-2'];

  // Check if there is a pre-written dedicated comparison
  const directSlug1 = `${selectedProductA}-vs-${selectedProductB}`;
  const directSlug2 = `${selectedProductB}-vs-${selectedProductA}`;
  const dedicatedComparison = getComparisonBySlug(directSlug1) || getComparisonBySlug(directSlug2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#16201f]/75 font-body mb-4">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="hover:text-[#0e6e6a]"
        >
          Home
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#16201f] font-semibold">Compare Software</span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Scale className="w-4 h-4" />
          <span>Head-to-Head Comparison Hub</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#16201f]">
          Compare Field Service Software
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 font-body leading-relaxed">
          Side-by-side technical and financial breakdowns. Select any two platforms to compare features, pricing models, mobile offline performance, and real trade advantages.
        </p>

        {/* FTC Disclosure */}
        <div className="pt-2">
          <p className="text-[10px] text-[#16201f]/70 italic">
            * We may earn a commission if you sign up for software through links on this page. Our research remains independent and evidence-based. <button onClick={() => onNavigate('/how-we-make-money')} className="underline hover:text-[#0e6e6a]">Learn more</button>.
          </p>
        </div>
      </div>

      {/* Interactive 2-Tool Comparison Selector */}
      <div className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-[#dde3e1]">
          <ArrowRightLeft className="w-5 h-5 text-[#0e6e6a]" />
          <h2 className="text-xl font-bold font-display text-[#16201f]">
            Interactive Matchup Tool
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* Product A Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#16201f]/75 font-display">
              Software A:
            </label>
            <select
              value={selectedProductA}
              onChange={(e) => setSelectedProductA(e.target.value)}
              className="w-full p-3 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-base font-bold font-display text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              {PRODUCT_LIST.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} ({p.startingPrice})
                </option>
              ))}
            </select>
          </div>

          {/* VS Divider with Swap */}
          <div className="md:col-span-1 flex justify-center text-center">
            <button
              type="button"
              onClick={() => {
                const temp = selectedProductA;
                setSelectedProductA(selectedProductB);
                setSelectedProductB(temp);
              }}
              className="w-10 h-10 rounded-full bg-[#0e6e6a]/10 hover:bg-[#0e6e6a] text-[#0e6e6a] hover:text-white font-bold text-xs flex items-center justify-center font-display transition-colors shadow-2xs"
              title="Click to swap software"
            >
              VS
            </button>
          </div>

          {/* Product B Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#16201f]/75 font-display">
              Software B:
            </label>
            <select
              value={selectedProductB}
              onChange={(e) => setSelectedProductB(e.target.value)}
              className="w-full p-3 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-base font-bold font-display text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              {PRODUCT_LIST.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} ({p.startingPrice})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Comparison Table Preview */}
        <div className="pt-4 border-t border-[#dde3e1]">
          {dedicatedComparison && (
            <div className="mb-4 p-4 bg-[#0e6e6a]/5 border border-[#0e6e6a]/20 rounded-xl flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#0e6e6a] uppercase font-display block">
                  Dedicated Deep-Dive Available
                </span>
                <span className="text-sm font-bold text-[#16201f]">
                  {dedicatedComparison.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate(`/compare/${dedicatedComparison.slug}`)}
                className="px-4 py-2 bg-[#0e6e6a] text-white text-xs font-bold rounded-lg shrink-0 flex items-center gap-1 hover:bg-[#0a4f4c]"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <ComparisonTable products={[pA, pB]} highlightSlug={pA.ratings.overall >= pB.ratings.overall ? pA.slug : pB.slug} />
        </div>
      </div>

      {/* Featured Editorial Comparisons Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Featured Editorial Showdowns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPARISON_LIST.map((comp) => {
            const prodA = PRODUCTS[comp.productA];
            const prodB = PRODUCTS[comp.productB];
            const winner = PRODUCTS[comp.winnerOverall];

            return (
              <div
                key={comp.slug}
                onClick={() => onNavigate(`/compare/${comp.slug}`)}
                className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-2xl p-6 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase font-display">
                      Verified Matchup
                    </span>
                    <span className="text-xs text-[#16201f]/50 font-data">
                      {comp.lastVerifiedDate}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors leading-snug">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-[#16201f]/75 mt-2 line-clamp-3 leading-relaxed">
                    {comp.headToHeadSummary}
                  </p>

                  <div className="my-4 py-2 px-3 bg-[#fbfaf8] rounded-xl border border-[#dde3e1] text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#16201f]/60">{prodA?.name}:</span>
                      <span className="font-bold font-data text-[#16201f]">{prodA?.startingPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#16201f]/60">{prodB?.name}:</span>
                      <span className="font-bold font-data text-[#16201f]">{prodB?.startingPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dde3e1] flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
                  <span>Overall Winner: {winner?.name || 'Category Dependent'}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Compare <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
