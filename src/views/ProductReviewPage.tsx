/**
 * ProductReviewPage.tsx
 * ---------------------------------------------------------
 * Deep-dive review template for individual software products.
 * Includes verdict, pros/cons, trade suitability, and pricing tables.
 *
 * Data source: lib/products.ts, lib/affiliate-links.ts, lib/comparisons.ts
 * Related: components/ReviewScoreBox.tsx, components/ProsConsList.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.1, 4.3
 * ---------------------------------------------------------
 */

import React from 'react';
import { ChevronRight, ShieldCheck, Check, X, Wrench, DollarSign, Scale, ExternalLink, ArrowRight, Award } from 'lucide-react';
import { ProductData } from '../types';
import { getAffiliateLink } from '../lib/affiliate-links';
import { COMPARISON_LIST } from '../lib/comparisons';
import { PRODUCTS } from '../lib/products';
import { ReviewScoreBox } from '../components/ReviewScoreBox';
import { ProsConsList } from '../components/ProsConsList';
import { FAQAccordion } from '../components/FAQAccordion';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { VerifiedDateBadge } from '../components/VerifiedDateBadge';

interface ProductReviewPageProps {
  product: ProductData;
  onNavigate: (route: string) => void;
}

/**
 * Dynamic product review template that adapts to the provided product data.
 * Features automated SEO schema, breadcrumbs, and related comparison links.
 */
export const ProductReviewPage: React.FC<ProductReviewPageProps> = ({
  product,
  onNavigate,
}) => {
  const affiliateConfig = getAffiliateLink(product.slug);

  // Filter comparisons that feature this product
  const relatedComparisons = COMPARISON_LIST.filter(
    (c) => c.productA === product.slug || c.productB === product.slug
  );

  const productFaqs = [
    {
      question: `Is ${product.name} suitable for a residential plumbing business?`,
      answer: product.plumbingSuitability,
    },
    {
      question: `How does ${product.name} handle HVAC seasonal maintenance agreements?`,
      answer: product.hvacSuitability,
    },
    {
      question: `Does ${product.name} require a long-term annual contract?`,
      answer: product.contractRequired
        ? `${product.name} typically operates under customized annual service contracts with dedicated onboarding.`
        : `No. ${product.name} provides flexible month-to-month subscription plans with zero long-term cancellation penalties.`,
    },
    {
      question: `What are the payment processing fees when collecting card payments in ${product.name}?`,
      answer: `Processing card payments with ${product.name} is billed at ${product.features.creditCardProcessingFee}.`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb Navigation */}
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
          onClick={() => onNavigate('/software-reviews')}
          className="hover:text-[#0e6e6a]"
        >
          Reviews
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#16201f] font-semibold">{product.name} Review</span>
      </nav>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <VerifiedDateBadge date={product.lastVerifiedDate} testedVersion={product.testedVersion} />

          {affiliateConfig.isAffiliate ? (
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs font-medium">
              Affiliate Relationship Disclosed
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs font-medium">
              Direct Editorial Link (No Commission)
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          {product.name} Review: Pricing, Features & Verdict for Plumbing & HVAC
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-8 h-8 rounded-full bg-[#16201f] flex items-center justify-center text-white text-[10px] font-bold">
            MV
          </div>
          <div className="text-xs">
            <span className="text-[#16201f]/60">Written by </span>
            <button
              onClick={() => onNavigate('/authors/marcus-vance')}
              className="text-[#16201f] font-bold hover:text-[#0e6e6a] hover:underline"
            >
              Marcus Vance
            </button>
            <span className="text-[#16201f]/40 mx-2">|</span>
            <span className="text-[#16201f]/60">Verified {product.lastVerifiedDate}</span>
          </div>
        </div>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed max-w-4xl">
          An honest, evidence-backed evaluation of {product.name}. We analyze real pricing tiers, field mobile usability, QuickBooks sync, and suitability for 1–20 technician trade businesses.
        </p>
      </div>

      {/* Main Review Score Box Component */}
      <ReviewScoreBox product={product} />

      {/* Editorial Verdict / Summary Section */}
      <section className="bg-[#fbfaf8] border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold font-display text-[#16201f] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0e6e6a]" />
          <span>The Bottom Line Verdict</span>
        </h2>
        <p className="text-base text-[#16201f]/90 leading-relaxed font-body">
          {product.verdict}
        </p>

        <div className="pt-4 border-t border-[#dde3e1] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="font-bold text-[#16201f] block font-display">Target Team Size:</span>
            <span className="text-[#0e6e6a] font-medium mt-0.5 block">{product.targetTeamSize}</span>
          </div>
          <div>
            <span className="font-bold text-[#16201f] block font-display">Pricing Model:</span>
            <span className="text-[#16201f]/75 mt-0.5 block">{product.priceModel}</span>
          </div>
          <div>
            <span className="font-bold text-[#16201f] block font-display">Free Trial Period:</span>
            <span className="text-emerald-700 font-semibold mt-0.5 block">
              {product.hasFreeTrial ? `${product.freeTrialDays} Days (No CC)` : 'Demo Required'}
            </span>
          </div>
        </div>
      </section>

      {/* Pros & Cons Section */}
      <section>
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          {product.name} Pros & Cons
        </h2>
        <ProsConsList pros={product.pros} cons={product.cons} productName={product.name} />
      </section>

      {/* Real Operator Voice / Case Study Quote (Human Connection Strategy) */}
      {product.operatorVoices && product.operatorVoices.length > 0 && (
        <section className="bg-emerald-50 border-y border-emerald-100 py-10 my-6">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold uppercase tracking-widest text-[10px] spec-font">
              <Check className="w-4 h-4" />
              <span>What Real Owners Say</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-display font-medium text-emerald-900 leading-relaxed italic">
              "{product.operatorVoices[0].quote}"
            </blockquote>
            <cite className="block not-italic">
              <span className="font-bold text-[#16201f] text-sm md:text-base">{product.operatorVoices[0].name}</span>
              <span className="text-neutral-500 text-xs md:text-sm block">{product.operatorVoices[0].business}</span>
            </cite>
          </div>
        </section>
      )}

      {/* Trade Specific Suitability Breakdown */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Trade-Specific Performance: Plumbing vs HVAC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Plumbing Card */}
          <div className="bg-white border border-[#dde3e1] rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3 text-[#0e6e6a]">
              <div className="w-8 h-8 rounded-lg bg-[#0e6e6a]/10 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#16201f]">
                Plumbing & Drain Suitability
              </h3>
            </div>
            <p className="text-sm text-[#16201f]/85 leading-relaxed font-body">
              {product.plumbingSuitability}
            </p>
          </div>

          {/* HVAC Card */}
          <div className="bg-white border border-[#dde3e1] rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3 text-[#0e6e6a]">
              <div className="w-8 h-8 rounded-lg bg-[#0e6e6a]/10 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-[#0e6e6a]" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#16201f]">
                HVAC & Heating/Cooling Suitability
              </h3>
            </div>
            <p className="text-sm text-[#16201f]/85 leading-relaxed font-body">
              {product.hvacSuitability}
            </p>
          </div>
        </div>
      </section>

      {/* Verified Pricing Tiers Table */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold font-display text-[#16201f]">
              {product.name} Pricing Plans & Feature Breakdown
            </h2>
            <p className="text-xs md:text-sm text-[#16201f]/70 font-body">
              Verified directly with official rate cards. No concealed sales numbers.
            </p>
          </div>
          <span className="text-xs text-[#16201f]/60 font-data">Currency: USD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {product.pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-xs ${
                tier.highlight
                  ? 'border-[#0e6e6a] ring-2 ring-[#0e6e6a]/20'
                  : 'border-[#dde3e1]'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold font-display text-[#16201f]">
                    {tier.name}
                  </h3>
                  {tier.highlight && (
                    <span className="px-2 py-0.5 rounded-full bg-[#0e6e6a] text-white text-[10px] font-bold uppercase font-display">
                      Popular
                    </span>
                  )}
                </div>

                <div className="my-4">
                  <span className="text-3xl font-black font-data text-[#16201f]">
                    {typeof tier.priceMonthly === 'number'
                      ? `$${tier.priceMonthly}`
                      : tier.priceMonthly}
                  </span>
                  {typeof tier.priceMonthly === 'number' && (
                    <span className="text-xs text-[#16201f]/60 ml-1 font-body">/ month</span>
                  )}

                  {tier.priceAnnualBilled && (
                    <div className="text-xs text-[#0e6e6a] font-medium mt-1">
                      ${tier.priceAnnualBilled}/mo billed annually
                    </div>
                  )}
                </div>

                <div className="py-2 px-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1] text-xs font-semibold text-[#16201f]/80 mb-4">
                  Users: {tier.usersIncluded}
                  {tier.extraUserCost && ` • Extra: ${tier.extraUserCost}`}
                </div>

                <ul className="space-y-2 text-xs text-[#16201f]/85 font-body">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0e6e6a] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#dde3e1]">
                <AffiliateCTA
                  productSlug={product.slug}
                  productName={product.name}
                  variant={tier.highlight ? 'primary' : 'secondary'}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Hub-and-Spoke Comparison Links */}
      {relatedComparisons.length > 0 && (
        <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold font-display text-[#16201f] flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#0e6e6a]" />
            <span>Head-to-Head Comparisons Featuring {product.name}</span>
          </h2>
          <p className="text-xs md:text-sm text-[#16201f]/75">
            See how {product.name} stacks up directly against its top competitors in real head-to-head showdowns:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {relatedComparisons.map((c) => {
              const otherSlug = c.productA === product.slug ? c.productB : c.productA;
              const otherProduct = PRODUCTS[otherSlug];

              return (
                <div
                  key={c.slug}
                  onClick={() => onNavigate(`/compare/${c.slug}`)}
                  className="p-4 rounded-xl border border-[#dde3e1] hover:border-[#0e6e6a] cursor-pointer transition-all hover:bg-neutral-50 flex items-center justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-sm text-[#16201f] group-hover:text-[#0e6e6a] transition-colors font-display">
                      {product.name} vs {otherProduct?.name || 'Competitor'}
                    </h3>
                    <span className="text-xs text-[#16201f]/60 line-clamp-1 mt-0.5">
                      {c.subtitle}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#0e6e6a] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <FAQAccordion faqs={productFaqs} title={`${product.name} Frequently Asked Questions`} />

      {/* Bottom Sticky Action Box */}
      <div className="bg-[#0e6e6a] rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-display">
            Ready to test {product.name}?
          </h3>
          <p className="text-xs md:text-sm text-neutral-200 mt-1">
            {product.hasFreeTrial
              ? `Start your ${product.freeTrialDays}-day trial. No credit card required.`
              : 'Visit official vendor website for live product demo.'}
          </p>
        </div>

        <AffiliateCTA
          productSlug={product.slug}
          productName={product.name}
          variant="pill"
          label={`Visit ${product.name} Official Website`}
        />
      </div>

      {/* Internal Navigation: Back to Pillar */}
      <div className="pt-6 border-t border-[#dde3e1] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('/best-of')}
          className="text-xs font-bold text-[#0e6e6a] hover:text-[#0a4f4c] flex items-center gap-1.5 uppercase tracking-wider"
        >
          <Award className="w-4 h-4" />
          <span>Back to Best Of Roundups</span>
        </button>

        <button
          onClick={() => onNavigate('/software-reviews')}
          className="text-xs font-bold text-[#16201f]/60 hover:text-[#0e6e6a] flex items-center gap-1.5 uppercase tracking-wider"
        >
          <span>All Software Reviews</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
