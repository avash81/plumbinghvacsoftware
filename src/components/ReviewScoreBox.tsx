import React from 'react';
import { Star, Check, Award, Tag } from 'lucide-react';
import { ProductData } from '../types';
import { AffiliateCTA } from './AffiliateCTA';
import { VerifiedDateBadge } from './VerifiedDateBadge';

interface ReviewScoreBoxProps {
  product: ProductData;
  className?: string;
}

export const ReviewScoreBox: React.FC<ReviewScoreBoxProps> = ({
  product,
  className = '',
}) => {
  const { ratings } = product;

  const scoreDimensions = [
    { label: 'Value for Money', score: ratings.valueForMoney },
    { label: 'Ease of Use & Tech Setup', score: ratings.easeOfUse },
    { label: 'Dispatch & Mobile Field App', score: ratings.dispatchAndMobile },
    { label: 'Invoicing, Payments & Quotes', score: ratings.invoicingAndPayments },
    { label: 'QuickBooks Accounting Sync', score: ratings.quickbooksSync },
    { label: 'Customer Support Quality', score: ratings.customerSupport },
  ];

  return (
    <div
      id={`review-score-box-${product.slug}`}
      className={`bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 shadow-xs ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#16201f]">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-black font-display text-[#16201f]">
              {product.name} Evaluation Score
            </h2>
            <span className="badge-primary">
              VERIFIED
            </span>
          </div>
          <p className="text-sm text-[#16201f]/75 mt-1 font-body">{product.tagline}</p>
        </div>

        <VerifiedDateBadge date={product.lastVerifiedDate} testedVersion={product.testedVersion} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Column: Big Score & "Best For" summary */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-[#fbfaf8] border border-[#dde3e1] rounded-xl p-6 text-center">
            <span className="text-[11px] font-bold tracking-widest text-[#16201f]/75 uppercase spec-font">
              Overall Editorial Rating
            </span>
            <div className="flex items-center justify-center gap-2 my-2">
              <span className="text-5xl font-black text-[#0e6e6a] font-display">
                {ratings.overall.toFixed(1)}
              </span>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(ratings.overall)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-neutral-200 text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#16201f]/70 mono-font">out of 5.0</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#dde3e1] text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#d97a3f] uppercase tracking-wide spec-font">
                <Award className="w-4 h-4 shrink-0" />
                <span>Best For:</span>
              </div>
              <p className="text-sm font-bold text-[#16201f] mt-1 leading-snug">
                {product.bestFor}
              </p>
            </div>
          </div>

          {/* Pricing & Free Trial Callout */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-sm py-2.5 px-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1]">
              <span className="text-[11px] uppercase tracking-wider text-[#16201f]/70 font-bold flex items-center gap-1.5 spec-font">
                <Tag className="w-4 h-4 text-[#0e6e6a]" /> Starting Price:
              </span>
              <span className="font-bold text-[#16201f] font-data text-base">
                {product.startingPrice}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm py-2.5 px-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1]">
              <span className="text-[11px] uppercase tracking-wider text-[#16201f]/70 font-bold spec-font">Free Trial:</span>
              <span className="font-bold text-emerald-800 text-xs uppercase tracking-wider spec-font">
                {product.hasFreeTrial ? `${product.freeTrialDays} Days (No CC Required)` : 'Demo Required'}
              </span>
            </div>

            <div className="pt-2">
              <AffiliateCTA
                productSlug={product.slug}
                productName={product.name}
                variant="primary"
                className="w-full"
                showDisclosureDetail={true}
              />
            </div>
          </div>
        </div>

        {/* Right Column: 6 Dimensional Score Bars */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <h3 className="text-xs font-bold text-[#16201f] uppercase tracking-widest spec-font mb-1">
            Performance Breakdown Across Key Criteria
          </h3>

          {scoreDimensions.map((dim, index) => {
            const percentage = (dim.score / 5) * 100;
            return (
              <div key={index} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-[#16201f] text-xs uppercase tracking-wide">{dim.label}</span>
                  <span className="font-bold mono-font text-[#0e6e6a]">
                    {dim.score.toFixed(1)} / 5.0
                  </span>
                </div>
                <div className="w-full h-2.5 bg-neutral-100 rounded-xs overflow-hidden border border-[#dde3e1]">
                  <div
                    className="h-full bg-[#0e6e6a] rounded-xs transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 text-[11px] text-[#16201f]/75 italic">
            * Scored according to our standardized 5-point evaluation framework across 25 hands-on criteria.
          </div>
        </div>
      </div>
    </div>
  );
};
