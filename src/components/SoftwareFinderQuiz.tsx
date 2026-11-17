import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export const SoftwareFinderQuiz: React.FC<{ onNavigate?: (route: string) => void }> = ({
  onNavigate,
}) => (
  <div className="my-6 rounded-2xl border border-[#D3DDE3] bg-white p-8 text-center shadow-sm">
    <Clock className="mx-auto h-10 w-10 text-[#0F4C6E]" aria-hidden="true" />
    <h2 className="mt-4 text-xl font-bold text-[#17242C]">
      Software recommendations are coming soon
    </h2>
    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#17242C]/75">
      We removed the example listings and will publish recommendations when verified software reviews are available.
    </p>
    {onNavigate && (
      <button
        type="button"
        onClick={() => onNavigate('/software-reviews')}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C6E] hover:underline"
      >
        Check software reviews <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    )}
  </div>
);
