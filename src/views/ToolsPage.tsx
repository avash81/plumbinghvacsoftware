import React, { useState } from 'react';
import { Calculator, SlidersHorizontal, Scale, ArrowRight } from 'lucide-react';
import { SoftwareFinderQuiz } from '../components/SoftwareFinderQuiz';
import { PricingCalculator } from '../components/PricingCalculator';

interface ToolsPageProps {
  onNavigate: (route: string) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'calculator'>('quiz');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="page-intro max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F4C6E]/10 text-[#0F4C6E] text-xs font-bold uppercase tracking-wider font-display">
          <Calculator className="w-3.5 h-3.5 text-[#0F4C6E]" />
          <span>Interactive Decision Tools</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#17242C]">
          Software Finder & ROI Calculator
        </h1>
        <p className="text-sm md:text-base text-[#17242C]/75 font-body leading-relaxed">
          Interactive tools designed to match your specific fleet size, trade workflow, and budget with the ideal software platform.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex flex-col gap-3 border-b border-[#D3DDE3] pb-4 sm:flex-row">
        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className={`flex min-h-12 w-full items-center gap-2 rounded-xl px-4 py-3 text-left font-bold font-display text-sm transition-all sm:w-auto sm:px-5 ${
            activeTab === 'quiz'
              ? 'bg-[#0F4C6E] text-white shadow-xs'
              : 'bg-white text-[#17242C]/70 border border-[#D3DDE3] hover:text-[#0F4C6E]'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Software Finder Quiz (4 Questions)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('calculator')}
          className={`flex min-h-12 w-full items-center gap-2 rounded-xl px-4 py-3 text-left font-bold font-display text-sm transition-all sm:w-auto sm:px-5 ${
            activeTab === 'calculator'
              ? 'bg-[#0F4C6E] text-white shadow-xs'
              : 'bg-white text-[#17242C]/70 border border-[#D3DDE3] hover:text-[#0F4C6E]'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>FSM ROI & Cost Calculator</span>
        </button>
      </div>

      {/* Render Active Tool */}
      <div>
        {activeTab === 'quiz' ? (
          <SoftwareFinderQuiz onNavigate={onNavigate} />
        ) : (
          <PricingCalculator />
        )}
      </div>
    </div>
  );
};
