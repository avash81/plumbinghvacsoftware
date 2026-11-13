import React from 'react';
import { AlertCircle, ArrowLeft, Search, Layers, Scale, BookOpen, Calculator } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-2">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <span className="mono-font text-xs font-bold text-[#0F4C6E] uppercase tracking-widest block">
          Error 404 • Resource Not Found
        </span>
        <h1 className="text-3xl md:text-4xl font-black spec-font text-[#17242C]">
          Page Not Located in Work Order
        </h1>
        <p className="text-sm md:text-base text-[#17242C]/75 max-w-lg mx-auto font-body">
          The requested page may have been relocated or updated during our latest software pricing audit. Explore our core comparison hubs below:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
        <button
          type="button"
          onClick={() => onNavigate('/software-reviews')}
          className="p-4 bg-white border border-[#D3DDE3] hover:border-[#0F4C6E] rounded-xl transition-all flex items-center gap-3 group text-left hover:shadow-xs"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0F4C6E]/10 text-[#0F4C6E] flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#17242C] group-hover:text-[#0F4C6E] font-display">
              Software Reviews Hub
            </div>
            <div className="text-[11px] text-[#17242C]/60">Evaluated trade platforms</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/compare')}
          className="p-4 bg-white border border-[#D3DDE3] hover:border-[#0F4C6E] rounded-xl transition-all flex items-center gap-3 group text-left hover:shadow-xs"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0F4C6E]/10 text-[#0F4C6E] flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#17242C] group-hover:text-[#0F4C6E] font-display">
              Head-to-Head Comparisons
            </div>
            <div className="text-[11px] text-[#17242C]/60">Feature-by-feature showdowns</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/best-of')}
          className="p-4 bg-white border border-[#D3DDE3] hover:border-[#0F4C6E] rounded-xl transition-all flex items-center gap-3 group text-left hover:shadow-xs"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0F4C6E]/10 text-[#0F4C6E] flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#17242C] group-hover:text-[#0F4C6E] font-display">
              Best Of Roundups
            </div>
            <div className="text-[11px] text-[#17242C]/60">Ranked by shop size & trade</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/tools')}
          className="p-4 bg-white border border-[#D3DDE3] hover:border-[#0F4C6E] rounded-xl transition-all flex items-center gap-3 group text-left hover:shadow-xs"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0F4C6E]/10 text-[#0F4C6E] flex items-center justify-center shrink-0">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#17242C] group-hover:text-[#0F4C6E] font-display">
              Software Quiz & ROI Calc
            </div>
            <div className="text-[11px] text-[#17242C]/60">Find your best fit in 60s</div>
          </div>
        </button>
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F4C6E] hover:bg-[#0B3A54] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </button>
      </div>
    </div>
  );
};
