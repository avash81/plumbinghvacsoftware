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
        <span className="mono-font text-xs font-bold text-[#0e6e6a] uppercase tracking-widest block">
          Error 404 • Resource Not Found
        </span>
        <h1 className="text-3xl md:text-4xl font-black spec-font text-[#16201f]">
          Page Not Located in Work Order
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 max-w-lg mx-auto font-body">
          The requested page may have been relocated or updated during our latest 2026 software pricing audit. Explore our core comparison hubs below:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
        <button
          type="button"
          onClick={() => onNavigate('/software-reviews')}
          className="p-4 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs transition-all flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#16201f] group-hover:text-[#0e6e6a] spec-font">
              Software Reviews Hub
            </div>
            <div className="text-[11px] text-[#16201f]/60">All 8 evaluated platforms</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/compare')}
          className="p-4 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs transition-all flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#16201f] group-hover:text-[#0e6e6a] spec-font">
              Head-to-Head Comparisons
            </div>
            <div className="text-[11px] text-[#16201f]/60">Feature-by-feature showdowns</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/best-of')}
          className="p-4 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs transition-all flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#16201f] group-hover:text-[#0e6e6a] spec-font">
              Best Of Roundups (2026)
            </div>
            <div className="text-[11px] text-[#16201f]/60">Ranked by shop size & trade</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/tools')}
          className="p-4 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs transition-all flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center shrink-0">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-[#16201f] group-hover:text-[#0e6e6a] spec-font">
              Software Quiz & ROI Calc
            </div>
            <div className="text-[11px] text-[#16201f]/60">Find your best fit in 60s</div>
          </div>
        </button>
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#16201f] hover:bg-[#0e6e6a] text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </button>
      </div>
    </div>
  );
};
