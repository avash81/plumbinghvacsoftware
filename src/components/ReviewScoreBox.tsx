import React from 'react';
import { ProductData } from '../types';
import { AffiliateCTA } from './AffiliateCTA';

interface ReviewScoreBoxProps {
  product: ProductData;
  className?: string;
}

export const ReviewScoreBox: React.FC<ReviewScoreBoxProps> = ({ product, className = '' }) => {
  const { ratings } = product;
  const scoreDimensions = [
    { label: 'Value for money', score: ratings.valueForMoney },
    { label: 'Ease of use', score: ratings.easeOfUse },
    { label: 'Dispatch and mobile', score: ratings.dispatchAndMobile },
    { label: 'Invoicing and payments', score: ratings.invoicingAndPayments },
    { label: 'QuickBooks sync', score: ratings.quickbooksSync },
    { label: 'Customer support', score: ratings.customerSupport },
  ];

  return (
    <section
      id={`review-score-box-${product.slug}`}
      className={`bg-white border border-line ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-line">
          <p className="text-sm text-muted">Editorial score</p>
          <p className="font-serif text-7xl leading-none text-primary mt-2 tabular-nums">
            {ratings.overall.toFixed(1)}
          </p>
          <p className="text-sm text-muted mt-2">out of 5</p>
          <p className="mt-6 text-sm text-ink leading-snug">{product.bestFor}</p>
          <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Starts at</dt>
              <dd className="text-ink">{product.startingPrice}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Trial</dt>
              <dd className="text-ink text-right">
                {product.hasFreeTrial ? `${product.freeTrialDays} days` : 'Demo required'}
              </dd>
            </div>
          </dl>
          <AffiliateCTA
            productSlug={product.slug}
            productName={product.name}
            variant="primary"
            className="w-full mt-6"
            showDisclosureDetail
          />
        </div>

        <div className="lg:col-span-8 p-6 md:p-8">
          <h2 className="text-2xl">{product.name}</h2>
          <p className="text-sm text-muted mt-1">{product.tagline}</p>
          <ul className="mt-6 space-y-4">
            {scoreDimensions.map((dim) => (
              <li key={dim.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{dim.label}</span>
                  <span className="tabular-nums text-primary">{dim.score.toFixed(1)}</span>
                </div>
                <div className="h-1.5 bg-[#e4ebf0]">
                  <div className="h-full bg-primary" style={{ width: `${(dim.score / 5) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted">
            Six criteria, each scored out of 5. Checked {product.lastVerifiedDate}
            {product.testedVersion ? ` · ${product.testedVersion}` : ''}.
          </p>
        </div>
      </div>
    </section>
  );
};
