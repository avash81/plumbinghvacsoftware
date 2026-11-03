/**
 * HomePage.tsx
 * ---------------------------------------------------------
 * Clean, structured home page layout matching the reference format:
 * 1. Hero with Rate and Find headline, subtitle, and pill search bar
 * 2. Popular Software grid (3 columns) with badges, ratings, and summaries
 * 3. Explore by Category grid (3 columns) with checkmark items
 * 4. Trending Software / Showdowns grid (3 columns)
 * 5. Frequently Asked Questions accordion (2 columns)
 * ---------------------------------------------------------
 */

import React, { useState } from 'react';
import {
  Search,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
  Wrench,
  Scale,
  Layers,
  Award,
  Calculator,
  ShieldCheck,
  FileText,
  Clock,
} from 'lucide-react';
import { PRODUCT_LIST, PRODUCTS } from '../lib/products';
import { COMPARISON_LIST } from '../lib/comparisons';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      onNavigate('/software-reviews');
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Trade software categories matching Image 3 structure
  const categories = [
    { title: 'Plumbing Dispatch Software', route: '/software-reviews' },
    { title: 'HVAC Scheduling & Tune-ups', route: '/software-reviews' },
    { title: 'QuickBooks Accounting Sync', route: '/software-reviews' },
    { title: 'Flat-Rate Quoting & Pricebooks', route: '/guides' },
    { title: 'Mobile Invoicing & Payments', route: '/software-reviews' },
    { title: 'GPS Fleet & Vehicle Tracking', route: '/software-reviews' },
    { title: 'Commercial Project Job Costing', route: '/software-reviews' },
    { title: 'Multi-Truck Inventory Management', route: '/software-reviews' },
    { title: 'Customer Portal & Online Booking', route: '/software-reviews' },
  ];

  // Frequently Asked Questions matching Image 5 structure
  const faqs = [
    {
      q: 'How do I find the right software for my needs?',
      a: 'Start by evaluating your technician headcount and trade focus. Small residential crews benefit from mobile-first quoting and fast invoicing, while commercial fleets require multi-truck inventory and progress billing. You can also run our Software Finder Quiz in under 30 seconds for personalized recommendations.',
    },
    {
      q: 'Are the reviews trustworthy?',
      a: 'Yes. PHS operates under strict editorial independence. We do not accept paid placement fees, sponsored reviews, or preferential rankings. All software evaluations are conducted against standardized benchmarks covering dispatch speed, QuickBooks sync reliability, and mobile offline capabilities.',
    },
    {
      q: "How do I write a review for software I've used?",
      a: 'We welcome verified field feedback from licensed contractors and trade business owners. Navigate to our Contact page to submit your real-world experience, technician feedback, and workflow ratings to our editorial team.',
    },
    {
      q: 'Can I compare multiple software options?',
      a: 'Yes. Our Head-to-Head Compare engine allows you to inspect features, per-user pricing, mobile apps, and accounting integrations side by side to make an objective decision without sales pressure.',
    },
    {
      q: 'How do I claim my software vendor listing?',
      a: 'Software vendors may submit technical documentation, API specs, and verified pricing tier updates to our editorial team via our contact page. Listings are reviewed and verified objectively against our evaluation criteria.',
    },
    {
      q: 'Is it free to use PlumbingHVACSoftware.com?',
      a: 'Yes, 100% free. All software reviews, feature matrices, comparison tools, and operations playbooks are accessible to trade contractors with zero paywalls or subscription requirements.',
    },
    {
      q: 'How are software ratings calculated?',
      a: 'Our composite rating averages scores across six core operational pillars: Dispatch & Mobile UX, Invoicing & Payment Speed, QuickBooks Reconciliation, Pricebook Support, Value for Money, and Customer Support reliability.',
    },
    {
      q: 'Can I save my favorite software for later?',
      a: 'You can bookmark specific software reviews or comparison URLs directly in your browser. All links are evergreen and updated regularly as software vendors roll out new product features.',
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 py-8 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO SECTION (Matching Image 1) */}
      <section className="text-center max-w-3xl mx-auto pt-4 md:pt-8 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          Rate and Find Trusted Software
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 max-w-2xl mx-auto font-body leading-relaxed">
          Rate and review software based on your experiences, and explore trusted software to make informed decisions
        </p>

        {/* Pill Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="pt-4 max-w-2xl mx-auto"
        >
          <div className="relative flex items-center bg-white rounded-full border border-[#dde3e1] shadow-md shadow-neutral-200/60 hover:border-[#0e6e6a] transition-all p-1.5 pl-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent text-sm md:text-base text-[#16201f] placeholder-[#16201f]/40 outline-none pr-3"
            />
            <button
              type="submit"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
              aria-label="Search software"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
            </button>
          </div>
        </form>
      </section>

      {/* 2. POPULAR SOFTWARE SECTION (Matching Image 2) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#16201f] relative inline-block">
              <span className="relative z-10">Popular Software</span>
              <span className="absolute bottom-1 left-0 w-12 h-1 bg-[#0e6e6a]/40 rounded-full" />
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/software-reviews')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#0e6e6a] text-[#0e6e6a] hover:bg-[#0e6e6a] hover:text-white rounded-lg text-xs md:text-sm font-semibold transition-all"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => onNavigate('/software-reviews/test-1')}
            className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl p-5 md:p-6 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                Test Software 1
              </h3>
              <div className="mt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-[11px] font-semibold">
                  Field Dispatch Software
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0e6e6a]/15 text-[#0e6e6a] flex items-center justify-center font-bold text-lg shrink-0">
                  <Wrench className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#16201f] ml-1">4.8</span>
                    <span className="text-[11px] text-[#16201f]/60">(Verified Audit)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#16201f]/75 mt-3 line-clamp-2 leading-relaxed">
                Streamlined technician dispatch, instant SMS on-the-way alerts, and automatic two-way QuickBooks accounting synchronization.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#dde3e1] flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>Starting at $49/mo</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Review <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigate('/software-reviews/test-2')}
            className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl p-5 md:p-6 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                Test Software 2
              </h3>
              <div className="mt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-[11px] font-semibold">
                  Commercial Fleet Operations
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">
                  <Layers className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#16201f] ml-1">4.6</span>
                    <span className="text-[11px] text-[#16201f]/60">(Verified Audit)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#16201f]/75 mt-3 line-clamp-2 leading-relaxed">
                Comprehensive fleet scheduling, multi-warehouse parts inventory tracking, progressive billing, and commercial job costing.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#dde3e1] flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>Starting at $99/mo</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Review <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Interactive Matchmaker / Quiz Card */}
          <div
            onClick={() => onNavigate('/tools')}
            className="bg-[#0e6e6a]/5 border border-[#0e6e6a]/30 hover:border-[#0e6e6a] rounded-xl p-5 md:p-6 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                Software Finder Matchmaker
              </h3>
              <div className="mt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e6e6a] text-white text-[11px] font-semibold">
                  Interactive Selection Tool
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0e6e6a] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  <Calculator className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#16201f] ml-1">5.0</span>
                    <span className="text-[11px] text-[#16201f]/60">(Decision Tool)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#16201f]/75 mt-3 line-clamp-2 leading-relaxed">
                Filter and match your exact fleet size, plumbing or HVAC specialization, and budget in 4 simple diagnostic questions.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#0e6e6a]/20 flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>100% Free Contractor Tool</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Launch Quiz <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY CATEGORY SECTION (Matching Image 3) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#16201f] relative inline-block">
              <span className="relative z-10">Explore by Category</span>
              <span className="absolute bottom-1 left-0 w-12 h-1 bg-[#0e6e6a]/40 rounded-full" />
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/guides')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#0e6e6a] text-[#0e6e6a] hover:bg-[#0e6e6a] hover:text-white rounded-lg text-xs md:text-sm font-semibold transition-all"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Category Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onNavigate(cat.route)}
              className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl p-4 flex items-center gap-3 transition-all hover:shadow-xs cursor-pointer group"
            >
              <div className="w-5 h-5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center shrink-0 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-[#16201f] group-hover:text-[#0e6e6a] transition-colors leading-snug">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRENDING SHOWDOWNS & COMPARISONS (Matching Image 4) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#16201f] relative inline-block">
              <span className="relative z-10">Trending Showdowns</span>
              <span className="absolute bottom-1 left-0 w-12 h-1 bg-[#0e6e6a]/40 rounded-full" />
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/compare')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#0e6e6a] text-[#0e6e6a] hover:bg-[#0e6e6a] hover:text-white rounded-lg text-xs md:text-sm font-semibold transition-all"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Trending Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Showdown 1 */}
          <div
            onClick={() => onNavigate('/compare/test-1-vs-test-2')}
            className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl p-5 md:p-6 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center font-bold">
                    <Scale className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                      Test 1 vs Test 2
                    </h3>
                    <div className="flex items-center text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      <span className="text-[11px] text-[#16201f]/60 ml-1 font-semibold">4.8 (Head-to-Head)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#dde3e1] my-3.5" />

              <p className="text-xs text-[#16201f]/75 line-clamp-3 leading-relaxed">
                Direct head-to-head showdown contrasting agile 1–5 tech dispatch against multi-truck commercial project management, retainage billing, and inventory tracking.
              </p>
            </div>

            <div className="pt-3 mt-3 flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>Verified Matchup</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Compare Now <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Showdown 2: Best Of Pillar Roundup */}
          <div
            onClick={() => onNavigate('/best-of/test-best-of')}
            className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl p-5 md:p-6 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                      Top Ranked Pillar Roundup
                    </h3>
                    <div className="flex items-center text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      <span className="text-[11px] text-[#16201f]/60 ml-1 font-semibold">4.9 (Curated)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#dde3e1] my-3.5" />

              <p className="text-xs text-[#16201f]/75 line-clamp-3 leading-relaxed">
                In-depth editorial roundup ranking platforms by crew size, featuring top-ranked awards, real-world tradeoffs, and contractor evaluation checklists.
              </p>
            </div>

            <div className="pt-3 mt-3 flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>Curated Pillar Guide</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Rankings <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Showdown 3: Operations Playbook */}
          <div
            onClick={() => onNavigate('/guides/how-to/test-guide')}
            className="bg-white border border-[#dde3e1] hover:border-[#0e6e6a] rounded-xl p-5 md:p-6 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-[#16201f] group-hover:text-[#0e6e6a] transition-colors">
                      Operations Playbook
                    </h3>
                    <div className="flex items-center text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      <span className="text-[11px] text-[#16201f]/60 ml-1 font-semibold">5.0 (Field Guide)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#dde3e1] my-3.5" />

              <p className="text-xs text-[#16201f]/75 line-clamp-3 leading-relaxed">
                Standard operating procedures for on-site mobile documentation, automated SMS customer alerts, and same-day payment closeout in the field.
              </p>
            </div>

            <div className="pt-3 mt-3 flex items-center justify-between text-xs font-bold text-[#0e6e6a]">
              <span>Field SOP Guide</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore SOPs <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS SECTION (Matching Image 5) */}
      <section className="space-y-6 pt-4">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#16201f] relative inline-block">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute bottom-1 left-0 w-16 h-1 bg-[#0e6e6a]/40 rounded-full" />
          </h2>
          <p className="text-xs md:text-sm text-[#16201f]/75 font-body leading-relaxed">
            Got questions? We've got answers. Delve into our Frequently Asked Questions (FAQs) section to find comprehensive information about your inquiries.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#dde3e1] rounded-xl overflow-hidden transition-all shadow-2xs self-start"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 md:p-5 text-left font-bold text-sm md:text-base text-[#16201f] flex items-center justify-between gap-3 hover:text-[#0e6e6a] transition-colors"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className="shrink-0 text-[#16201f]/50">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#0e6e6a]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 md:px-5 md:pb-5 pt-0 text-xs md:text-sm text-[#16201f]/80 leading-relaxed font-body border-t border-neutral-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
