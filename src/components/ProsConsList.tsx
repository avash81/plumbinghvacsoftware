import React from 'react';
import { Check, X, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ProsConsListProps {
  pros: string[];
  cons: string[];
  productName?: string;
  className?: string;
}

export const ProsConsList: React.FC<ProsConsListProps> = ({
  pros,
  cons,
  productName,
  className = '',
}) => {
  return (
    <div
      id="pros-cons-container"
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 my-6 ${className}`}
    >
      {/* Pros Column */}
      <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-5 md:p-6 shadow-xs">
        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-emerald-200/60">
          <div className="w-8 h-8 rounded-full bg-emerald-600/15 flex items-center justify-center text-emerald-800">
            <ThumbsUp className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-emerald-950 font-display">
              {productName ? `${productName} Pros` : 'The Good'}
            </h3>
            <p className="text-xs text-emerald-800/80">Key verified strengths & advantages</p>
          </div>
        </div>
        <ul className="space-y-3">
          {pros.map((pro, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#16201f] leading-relaxed">
              <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Column */}
      <div className="bg-rose-50/50 border border-rose-200/80 rounded-xl p-5 md:p-6 shadow-xs">
        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-rose-200/60">
          <div className="w-8 h-8 rounded-full bg-rose-600/15 flex items-center justify-center text-rose-800">
            <ThumbsDown className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-rose-950 font-display">
              {productName ? `${productName} Cons` : 'The Drawbacks'}
            </h3>
            <p className="text-xs text-rose-800/80">Real trade-offs & limitations</p>
          </div>
        </div>
        <ul className="space-y-3">
          {cons.map((con, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#16201f] leading-relaxed">
              <div className="mt-0.5 w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0">
                <X className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
