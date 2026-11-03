import React, { useState } from 'react';
import { BookOpen, ArrowRight, Layers, Scale, Award, Calculator, Clock, CheckCircle2 } from 'lucide-react';
import { GUIDE_LIST } from '../lib/guides';

interface GuidesHubPageProps {
  onNavigate: (route: string) => void;
}

export const GuidesHubPage: React.FC<GuidesHubPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'cost', label: 'Cost & Pricing' },
    { id: 'how-to', label: 'How-To & Dispatch' },
    { id: 'seasonal', label: 'Seasonal Maintenance' },
    { id: 'software-tips', label: 'QuickBooks & Tech Tips' },
  ];

  const filteredGuides = selectedCategory === 'all'
    ? GUIDE_LIST
    : GUIDE_LIST.filter((g) => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-[#16201f]/60 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="hover:text-[#0e6e6a] transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-[#16201f] font-semibold">Guides</span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <BookOpen className="w-4 h-4" />
          <span>Operational Guides & Field Playbooks</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#16201f]">
          Trade Software & Operations Guides
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 font-body leading-relaxed">
          Actionable, field-tested playbooks for plumbing, HVAC, and electrical shops covering pricing models, dispatch systems, QuickBooks reconciliation, and maintenance agreements.
        </p>
      </div>

      {GUIDE_LIST.length === 0 ? (
        /* Empty State */
        <div className="space-y-8">
          {/* Main Status Notice */}
          <div className="bg-white border border-[#dde3e1] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-5 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider font-display">
                Editorial Overhaul in Progress
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-[#16201f]">
                New Comprehensive Guides Coming Soon
              </h2>
              <p className="text-sm md:text-base text-[#16201f]/75 font-body max-w-xl mx-auto leading-relaxed">
                We have temporarily cleared this section to rewrite and expand our trade operational guides from the ground up. Each guide is being rebuilt with vetted procedures, contractor workflow templates, and verified software integration steps.
              </p>
            </div>

            {/* Upcoming Topics Preview */}
            <div className="pt-6 border-t border-[#dde3e1] text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#16201f]/60 font-display mb-4 text-center">
                Planned Playbooks Under Construction
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-body text-[#16201f]/80">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fbfaf8] border border-[#dde3e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#16201f] block font-display">Pricing & Flat-Rate Setup</strong>
                    <span>Hourly multiplier formulas and pricebook mapping</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fbfaf8] border border-[#dde3e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#16201f] block font-display">Emergency Call Dispatch</strong>
                    <span>After-hours response systems and technician on-call routing</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fbfaf8] border border-[#dde3e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#16201f] block font-display">QuickBooks Synchronization</strong>
                    <span>Preventing duplicate ledgers and tax mapping mistakes</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fbfaf8] border border-[#dde3e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#16201f] block font-display">Seasonal Marketing Cadence</strong>
                    <span>Furnace and AC tune-up automation and club memberships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation to Active Resources */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h3 className="text-center text-xs font-bold uppercase tracking-wider text-[#16201f]/60 font-display">
              Explore Active Software Research & Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/software-reviews')}
                className="p-5 bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl text-left cursor-pointer transition-all hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-3 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                    Software Reviews
                  </h4>
                  <p className="text-xs text-[#16201f]/70 mt-1 font-body">
                    Hands-on audits and verified pricing for top trade software.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0e6e6a]">
                  <span>Browse Reviews</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/compare')}
                className="p-5 bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl text-left cursor-pointer transition-all hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-3 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                    Comparisons
                  </h4>
                  <p className="text-xs text-[#16201f]/70 mt-1 font-body">
                    Head-to-head comparisons of leading field service platforms.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0e6e6a]">
                  <span>Compare Software</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/best-of')}
                className="p-5 bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl text-left cursor-pointer transition-all hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-3 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                    Best Of Roundups
                  </h4>
                  <p className="text-xs text-[#16201f]/70 mt-1 font-body">
                    Ranked recommendations by crew size and trade specialty.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0e6e6a]">
                  <span>View Rankings</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/tools')}
                className="p-5 bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl text-left cursor-pointer transition-all hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-3 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                    Tools & Calculators
                  </h4>
                  <p className="text-xs text-[#16201f]/70 mt-1 font-body">
                    Interactive software finder quiz and custom ROI calculator.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0e6e6a]">
                  <span>Launch Tools</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Guides Present (Grid & Tabs) */
        <>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#dde3e1]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0e6e6a] text-white shadow-xs'
                    : 'bg-white text-[#16201f]/70 border border-[#dde3e1] hover:text-[#0e6e6a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGuides.map((guide) => (
              <div
                key={guide.slug}
                onClick={() => onNavigate(`/guides/${guide.category}/${guide.slug}`)}
                className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-2xl p-6 md:p-8 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase font-display">
                      {guide.categoryLabel}
                    </span>
                    <span className="text-xs text-[#16201f]/50 font-data">{guide.readTime}</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-xs md:text-sm text-[#16201f]/75 mt-2 line-clamp-3 leading-relaxed font-body">
                    {guide.intro}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#dde3e1] flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
