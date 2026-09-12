/**
 * HomePage.tsx
 * ---------------------------------------------------------
 * Clean, minimalist landing page for PHS.
 * Acts as a router hub into reviews, comparisons, and guides.
 *
 * Data source: lib/seo-schema.ts
 * Related: App.tsx (navigate function)
 *
 * Guide reference: project-implementation-guide.md, Section 3.1
 * ---------------------------------------------------------
 */

import React from 'react';
import { ArrowRight, Search, Scale, Award, BookOpen, Calculator, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { generateWebsiteSchema } from '../lib/seo-schema';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

/**
 * Minimalist entry point restricted to brand identity and primary section navigation.
 * Strictly adheres to Section 3.1 "Zero Product Names on Home" rule.
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const websiteSchemas = generateWebsiteSchema();

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="PHS — Plumbing HVAC Software (2026 FSM Comparisons)"
        description="Independent, evidence-based field service management software reviews, pricebook comparisons, and guides for USA plumbing and HVAC contractors."
        canonicalPath="/"
        schema={websiteSchemas}
      />
      {/* Clean Minimalist Hero Entry */}
      <div className="border-b-4 border-[#16201f] pb-8 md:pb-12 text-left">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="badge-ink">INDEPENDENT FSM ANALYSIS</span>
          <span className="text-[11px] font-bold text-[#0e6e6a] uppercase tracking-wider spec-font">
            USA PLUMBING & HVAC
          </span>
        </div>

        <h1 className="text-[28px] xs:text-4xl sm:text-5xl md:text-6xl font-black spec-font leading-[0.95] text-[#16201f] tracking-tight max-w-3xl">
          Honest software reviews for plumbing & HVAC businesses.
        </h1>

        <p className="mt-4 text-base md:text-lg text-[#16201f]/75 font-body max-w-2xl">
          Independent research for trade contractors. We test the tools so you don't have to guess.
        </p>
      </div>

      {/* Main Section Navigation Hub Grid */}
      <div className="pt-10 md:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* 1. Software Reviews Hub */}
          <div
            id="home-nav-card-reviews"
            onClick={() => onNavigate('/software-reviews')}
            className="p-6 md:p-8 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs cursor-pointer transition-all hover:shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-4 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                <Search className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black spec-font text-[#16201f] group-hover:text-[#0e6e6a] transition-colors flex items-center justify-between">
                <span>Software Reviews</span>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#0e6e6a] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs md:text-sm text-[#16201f]/70 mt-2 font-body">
                Full technical breakdowns and workflow scoring for all major FSM platforms.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold uppercase tracking-wider text-[#0e6e6a] flex items-center gap-1">
              <span>Browse All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 2. Head-to-Head Comparisons */}
          <div
            id="home-nav-card-comparisons"
            onClick={() => onNavigate('/compare')}
            className="p-6 md:p-8 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs cursor-pointer transition-all hover:shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-4 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                <Scale className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black spec-font text-[#16201f] group-hover:text-[#0e6e6a] transition-colors flex items-center justify-between">
                <span>Head-to-Head Comparisons</span>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#0e6e6a] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs md:text-sm text-[#16201f]/70 mt-2 font-body">
                Side-by-side feature comparisons and clear verdicts between competing tools.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold uppercase tracking-wider text-[#0e6e6a] flex items-center gap-1">
              <span>View Matchups</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3. Pillar "Best Of" Roundups */}
          <div
            id="home-nav-card-best-of"
            onClick={() => onNavigate('/best-of')}
            className="p-6 md:p-8 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs cursor-pointer transition-all hover:shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-4 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black spec-font text-[#16201f] group-hover:text-[#0e6e6a] transition-colors flex items-center justify-between">
                <span>Best Of Roundups</span>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#0e6e6a] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs md:text-sm text-[#16201f]/70 mt-2 font-body">
                Ranked guides for every business stage, from solo ops to large fleets.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold uppercase tracking-wider text-[#0e6e6a] flex items-center gap-1">
              <span>Explore Ranked Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 4. Trade Guides & Pricing */}
          <div
            id="home-nav-card-guides"
            onClick={() => onNavigate('/guides')}
            className="p-6 md:p-8 bg-white border border-[#dde3e1] hover:border-[#16201f] rounded-xs cursor-pointer transition-all hover:shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[#0e6e6a]/10 text-[#0e6e6a] flex items-center justify-center mb-4 group-hover:bg-[#0e6e6a] group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black spec-font text-[#16201f] group-hover:text-[#0e6e6a] transition-colors flex items-center justify-between">
                <span>Guides & Playbooks</span>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#0e6e6a] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs md:text-sm text-[#16201f]/70 mt-2 font-body">
                Operations playbooks for flat-rate pricing, QuickBooks sync, and dispatch systems.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold uppercase tracking-wider text-[#0e6e6a] flex items-center gap-1">
              <span>Read Operations Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Interactive Tools Quick Callout */}
        <div className="mt-6 p-5 md:p-6 bg-[#f0efec] border border-[#dde3e1] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#16201f] text-white flex items-center justify-center shrink-0">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black spec-font text-[#16201f]">
                Software Finder & ROI Tool
              </h3>
              <p className="text-xs text-[#16201f]/70 font-body">
                Find the ideal software for your truck count and budget in 30 seconds.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/tools')}
            className="px-5 py-2.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-all shrink-0"
          >
            Launch Software Quiz
          </button>
        </div>

        {/* Small Trust Line */}
        <div className="mt-10 pt-6 border-t border-[#dde3e1] flex flex-wrap items-center justify-between gap-4 text-xs text-[#16201f]/70">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#0e6e6a]" />
            <span>Independent & reader-supported. No paid placements or vendor influence.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('/how-we-test')}
              className="text-[#0e6e6a] font-bold hover:underline uppercase tracking-wider text-[11px]"
            >
              How We Test
            </button>
            <span className="text-[#dde3e1]">•</span>
            <button
              onClick={() => onNavigate('/how-we-make-money')}
              className="text-[#0e6e6a] font-bold hover:underline uppercase tracking-wider text-[11px]"
            >
              How We Make Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

