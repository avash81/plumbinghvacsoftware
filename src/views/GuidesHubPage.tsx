import React, { useState } from 'react';
import { BookOpen, ArrowRight, DollarSign, Wrench, Snowflake, Cpu } from 'lucide-react';
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
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <BookOpen className="w-4 h-4" />
          <span>Operational Guides & Field Playbooks</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#16201f]">
          Trade Software & Operations Guides (2026)
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 font-body leading-relaxed">
          Actionable guides on pricing breakdowns, after-hours dispatching systems, seasonal tune-up marketing campaigns, and QuickBooks sync best practices.
        </p>
      </div>

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
    </div>
  );
};
