/**
 * BestOfHubPage.tsx
 * ---------------------------------------------------------
 * Directory of "Best Of" pillar articles.
 * Categorized by business size and specific trade needs.
 *
 * Data source: lib/best-of.ts
 * Related: BestOfArticlePage.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.2
 * ---------------------------------------------------------
 */

import React from 'react';
import { ArrowRight, Award, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';
import { BEST_OF_LIST } from '../lib/best-of';
import { PRODUCTS } from '../lib/products';

interface BestOfHubPageProps {
  onNavigate: (route: string) => void;
}

export const BestOfHubPage: React.FC<BestOfHubPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
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
        <span className="text-[#16201f] font-semibold">Best Of Roundups</span>
      </nav>

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Award className="w-3.5 h-3.5 text-[#0e6e6a]" />
          <span>Curated Pillar Roundups</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#16201f]">
          Best Field Service Software Roundups
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 font-body leading-relaxed">
          In-depth, ranked roundups curated for specific business segments. Wirecutter-style testing summaries with zero sponsored placement bias.
        </p>

        {/* FTC Disclosure */}
        <div className="pt-2">
          <p className="text-[10px] text-[#16201f]/70 italic">
            * We may earn a commission if you sign up for software through links on this page. Our research remains independent and evidence-based. <button onClick={() => onNavigate('/how-we-make-money')} className="underline hover:text-[#0e6e6a]">Learn more</button>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BEST_OF_LIST.map((article) => (
          <div
            key={article.slug}
            onClick={() => onNavigate(`/best-of/${article.slug}`)}
            className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-2xl p-6 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase font-display">
                  {article.categoryTag}
                </span>
                <span className="text-xs text-[#16201f]/50 font-data">{article.readTime}</span>
              </div>

              <h2 className="text-xl font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-[#16201f]/75 mt-2 line-clamp-3 leading-relaxed">
                {article.subtitle}
              </p>

              {/* Top picks preview */}
              <div className="mt-4 pt-3 border-t border-[#dde3e1] space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16201f]/60 font-display block">
                  Top Ranked Platforms:
                </span>
                <ul className="text-xs text-[#16201f]/85 space-y-1">
                  {article.topPicks.slice(0, 3).map((pick) => {
                    const prod = PRODUCTS[pick.productSlug];
                    return (
                      <li key={pick.productSlug} className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#0e6e6a] shrink-0" />
                        <span className="font-semibold">{prod?.name}:</span>
                        <span className="text-[#16201f]/70 truncate">{pick.awardTitle}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#dde3e1] flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
