import React, { useState } from 'react';
import { Calculator, Sparkles, SlidersHorizontal, Scale, ArrowRight } from 'lucide-react';
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
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Interactive Decision Tools</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#16201f]">
          Field Service Software Calculators & Quiz
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 font-body leading-relaxed">
          Interactive tools designed to match your specific fleet size, trade workflow, and budget with the ideal software platform.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center gap-3 border-b border-[#dde3e1] pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold font-display text-sm transition-all ${
            activeTab === 'quiz'
              ? 'bg-[#0e6e6a] text-white shadow-xs'
              : 'bg-white text-[#16201f]/70 border border-[#dde3e1] hover:text-[#0e6e6a]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Software Finder Quiz (4 Questions)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('calculator')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold font-display text-sm transition-all ${
            activeTab === 'calculator'
              ? 'bg-[#0e6e6a] text-white shadow-xs'
              : 'bg-white text-[#16201f]/70 border border-[#dde3e1] hover:text-[#0e6e6a]'
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
