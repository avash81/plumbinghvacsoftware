/**
 * BestOfArticlePage.tsx
 * ---------------------------------------------------------
 * Pillar content template for "Best [Category] Software" lists.
 * Features top picks, award titles, and buying guides.
 *
 * Data source: lib/best-of.ts, lib/products.ts
 * Related: BestOfHubPage.tsx, ProductReviewPage.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.2
 * ---------------------------------------------------------
 */

import React from 'react';
import { ChevronRight, Sparkles, Award, ShieldCheck, Check, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
import { BestOfArticle } from '../types';
import { PRODUCTS, PRODUCT_LIST } from '../lib/products';
import { ComparisonTable } from '../components/ComparisonTable';
import { FAQAccordion } from '../components/FAQAccordion';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { VerifiedDateBadge } from '../components/VerifiedDateBadge';
import { SEOHead } from '../components/SEOHead';
import { generateBreadcrumbSchema, generateBestOfPillarSchema } from '../lib/seo-schema';

interface BestOfArticlePageProps {
  article: BestOfArticle;
  onNavigate: (route: string) => void;
}

export const BestOfArticlePage: React.FC<BestOfArticlePageProps> = ({
  article,
  onNavigate,
}) => {
  const pillarSchema = generateBestOfPillarSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://plumbinghvacsoftware.com/' },
    { name: 'Best Of', url: 'https://plumbinghvacsoftware.com/best-of/' },
    { name: article.title, url: `https://plumbinghvacsoftware.com/best-of/${article.slug}/` },
  ]);

  const featuredProducts = article.topPicks
    .map((p) => PRODUCTS[p.productSlug])
    .filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SEOHead
        title={`${article.title} | 2026 Rankings & Review`}
        description={article.subtitle}
        canonicalPath={`/best-of/${article.slug}`}
        ogType="article"
        schema={[pillarSchema, breadcrumbSchema]}
      />

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
          onClick={() => onNavigate('/best-of')}
          className="hover:text-[#0e6e6a]"
        >
          Best Of
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#16201f] font-semibold">{article.title}</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <VerifiedDateBadge date={article.lastUpdated} />
          <span className="px-2.5 py-1 rounded-md bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase font-display">
            {article.categoryTag}
          </span>
          <span className="text-xs text-[#16201f]/50 font-data">{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed max-w-4xl">
          {article.subtitle}
        </p>
      </div>

      {/* Editorial Intro Callout */}
      <div className="bg-[#fbfaf8] border border-[#dde3e1] rounded-2xl p-6 md:p-8 text-sm text-[#16201f]/90 leading-relaxed font-body shadow-xs space-y-3">
        <h2 className="text-lg font-bold font-display text-[#16201f] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#0e6e6a]" />
          <span>Evaluation Summary</span>
        </h2>
        <p>{article.intro}</p>
      </div>

      {/* Top Ranked Picks Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Top Recommended Platforms at a Glance
        </h2>

        <div className="space-y-6">
          {article.topPicks.map((pick) => {
            const product = PRODUCTS[pick.productSlug];
            if (!product) return null;

            return (
              <div
                key={pick.productSlug}
                className="bg-white border-2 border-[#dde3e1] hover:border-[#0e6e6a] rounded-2xl p-6 md:p-8 shadow-xs transition-all space-y-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#dde3e1]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#0e6e6a] text-white text-xs font-bold flex items-center justify-center font-display">
                        #{pick.rank}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#d97a3f]/15 text-[#d97a3f] text-xs font-bold uppercase font-display">
                        {pick.awardTitle}
                      </span>
                    </div>

                    <h3
                      onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
                      className="text-2xl font-bold font-display text-[#16201f] hover:text-[#0e6e6a] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-xl font-bold font-data text-[#0e6e6a] block">
                      {product.ratings.overall.toFixed(1)} / 5.0
                    </span>
                    <span className="text-xs text-[#16201f]/60 font-medium">
                      Starting at {product.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Why Picked */}
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0e6e6a] font-display">
                    Why We Selected It:
                  </span>
                  <p className="text-sm text-[#16201f]/85 leading-relaxed font-body">
                    {pick.shortWhy}
                  </p>
                </div>

                {/* Trade-off Warning */}
                <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-amber-950 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Key Trade-Off / Limitation:</strong> {pick.keyTradeoff}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
                    className="text-xs font-bold text-[#0e6e6a] hover:underline flex items-center gap-1"
                  >
                    <span>Read Full {product.name} Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <AffiliateCTA
                    productSlug={product.slug}
                    productName={product.name}
                    variant="primary"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Pillar Comparison Matrix
        </h2>
        <ComparisonTable products={featuredProducts} highlightSlug={featuredProducts[0]?.slug} />
      </section>

      {/* Buyer's Guide Checklist */}
      <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Contractor Buyer's Checklist: What to Verify Before Buying
        </h2>
        <ul className="space-y-3">
          {article.buyingGuideChecklist.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-[#16201f]/90 leading-relaxed font-body">
              <div className="w-5 h-5 rounded-full bg-[#0e6e6a]/15 text-[#0e6e6a] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={article.faqs} title="Frequently Asked Questions" />
    </div>
  );
};
