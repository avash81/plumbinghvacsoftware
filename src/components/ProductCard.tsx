import React from 'react';
import { ArrowRight, Layers3 } from 'lucide-react';
import { ProductData } from '../types';
import { AffiliateCTA } from './AffiliateCTA';

interface ProductCardProps {
  product: ProductData;
  onNavigate: (route: string) => void;
  badge?: string;
  rank?: number;
  highlight?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onNavigate,
  badge,
  rank,
  highlight = false,
}) => {
  return (
    <article
      id={`product-card-${product.slug}`}
      className={`flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 ${
        highlight ? 'border-primary/40 bg-[#f4f9fb]' : 'border-line bg-white'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf2f5] text-primary">
            <Layers3 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            {badge && <p className="mb-1 text-xs font-semibold text-primary">{badge}</p>}
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Sample listing</p>
            <h3 className="truncate font-serif text-2xl text-ink">
              <button
                type="button"
                onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
                className="text-left transition-colors hover:text-primary"
              >
                {product.name}
              </button>
            </h3>
          </div>
        </div>
        {rank != null && <span className="rounded-lg bg-[#f1f5f7] px-3 py-1 text-xs font-semibold text-ink">#{rank}</span>}
      </div>

      <div className="mt-5">
        <p className="text-sm leading-6 text-muted">{product.tagline}</p>
        <p className="mt-3 text-sm font-medium text-ink">Best for</p>
        <p className="mt-1 text-sm leading-6 text-muted">{product.bestFor}</p>
      </div>

      <div className="mt-5 rounded-xl bg-[#f4f7f9] p-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Editorial score</p>
            <p className="mt-1 font-serif text-3xl leading-none text-primary tabular-nums">
              {product.ratings.overall.toFixed(1)}<span className="ml-1 text-sm text-muted">/ 5</span>
            </p>
          </div>
          <div className="text-right">
            <p className="font-serif text-2xl leading-none text-ink">{product.startingPrice}</p>
            <p className="mt-1 text-xs text-muted">{product.targetTeamSize}</p>
          </div>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {product.pros.slice(0, 2).map((pro) => (
          <li key={pro} className="flex items-start gap-2 text-sm leading-5 text-ink/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
            <span>{pro}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <button
          type="button"
          onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Read sample review <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <AffiliateCTA
          productSlug={product.slug}
          productName={product.name}
          variant="primary"
          label="Visit site"
        />
      </div>
    </article>
  );
};
