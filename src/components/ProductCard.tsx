import React from 'react';
import { Star, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { ProductData } from '../types';
import { AffiliateCTA } from './AffiliateCTA';
import { VerifiedDateBadge } from './VerifiedDateBadge';

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
    <div
      id={`product-card-${product.slug}`}
      className={`bg-white border p-6 transition-all duration-200 flex flex-col justify-between hover:shadow-md rounded-xl ${
        highlight
          ? 'border-[#0e6e6a] shadow-xs ring-1 ring-[#0e6e6a]'
          : 'border-[#dde3e1] hover:border-[#0e6e6a]'
      }`}
    >
      <div>
        {/* Top Header with Badges & Rank */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {rank && (
              <span className="w-6 h-6 rounded-md bg-[#16201f] text-white text-xs font-bold flex items-center justify-center font-display">
                #{rank}
              </span>
            )}
            {badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-[11px] font-semibold">
                {badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 bg-[#0e6e6a]/10 text-[#0e6e6a] px-2.5 py-0.5 rounded-full text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.ratings.overall.toFixed(1)}</span>
          </div>
        </div>

        {/* Title and Tagline */}
        <h3
          onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
          className="text-xl font-bold font-display text-[#16201f] hover:text-[#0e6e6a] cursor-pointer transition-colors leading-tight"
        >
          {product.name}
        </h3>
        <p className="text-xs text-[#16201f]/75 mt-1 font-body line-clamp-2">
          {product.tagline}
        </p>

        {/* Pricing Specs Box */}
        <div className="my-4 py-2.5 px-3 bg-[#fbfaf8] border border-[#dde3e1] text-xs font-medium space-y-1.5 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-[11px] uppercase tracking-wider text-[#16201f]/70 font-bold">Starts At:</span>
            <span className="font-bold text-[#16201f] text-sm">{product.startingPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] uppercase tracking-wider text-[#16201f]/70 font-bold">Team Size:</span>
            <span className="font-bold text-[#0e6e6a]">{product.targetTeamSize}</span>
          </div>
        </div>

        {/* Key Pros Summary */}
        <div className="space-y-1.5 my-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#16201f]/75 font-display block">
            Key Pros:
          </span>
          <ul className="space-y-1 text-xs text-[#16201f]/85">
            {product.pros.slice(0, 3).map((pro, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#0e6e6a] shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="line-clamp-2">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 mt-4 border-t border-[#dde3e1] space-y-2">
        <AffiliateCTA
          productSlug={product.slug}
          productName={product.name}
          variant="primary"
          className="w-full"
        />

        <button
          type="button"
          onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
          className="w-full py-2 text-center text-xs font-bold uppercase tracking-wider text-[#0e6e6a] hover:text-[#0a4f4c] hover:bg-[#0e6e6a]/5 transition-colors flex items-center justify-center gap-1 rounded-md"
        >
          Full Review <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
