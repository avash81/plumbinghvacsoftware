/**
 * ReviewHubPage.tsx
 * ---------------------------------------------------------
 * Directory of all software reviews with filtering and search.
 * Acts as the primary entry point for the "Software Reviews" section.
 *
 * Data source: lib/products.ts
 * Related: components/ProductCard.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.1
 * ---------------------------------------------------------
 */

import React, { useState } from 'react';
import { Search, Filter, Star, Layers, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { PRODUCT_LIST } from '../lib/products';
import { ProductCard } from '../components/ProductCard';

interface ReviewHubPageProps {
  onNavigate: (route: string) => void;
}

/**
 * Filterable directory of trade software.
 * Supports keyword search, team size filtering, and pricing model sorting.
 */
export const ReviewHubPage: React.FC<ReviewHubPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [pricingFilter, setPricingFilter] = useState('all');
  const [tradeFilter, setTradeFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'name'>('rating');

  const filteredProducts = PRODUCT_LIST.filter((p) => {
    // Search match
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.bestFor.toLowerCase().includes(searchQuery.toLowerCase());

    // Size filter match
    let matchesSize = true;
    if (sizeFilter === 'solo') matchesSize = p.targetTeamSize.includes('1') || p.slug === 'test-1';
    if (sizeFilter === 'small') matchesSize = p.targetTeamSize.includes('5') || p.slug === 'test-1';
    if (sizeFilter === 'large') matchesSize = p.targetTeamSize.includes('25') || p.slug === 'test-2';

    // Pricing filter
    let matchesPricing = true;
    if (pricingFilter === 'flat') matchesPricing = p.priceModel.toLowerCase().includes('flat') || p.slug === 'test-2';
    if (pricingFilter === 'under100') matchesPricing = p.startingPrice.includes('49') || p.startingPrice.includes('99');

    // Trade filter
    let matchesTrade = true;
    if (tradeFilter === 'plumbing') matchesTrade = p.plumbingSuitability.toLowerCase().includes('plumbing') || p.trades.includes('plumbing') || p.trades.includes('both');
    if (tradeFilter === 'hvac') matchesTrade = p.hvacSuitability.toLowerCase().includes('hvac') || p.trades.includes('hvac') || p.trades.includes('both');

    return matchesSearch && matchesSize && matchesPricing && matchesTrade;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.ratings.overall - a.ratings.overall;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#16201f]/75 font-body mb-4">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="hover:text-[#0e6e6a]"
        >
          Home
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#16201f] font-semibold">Software Reviews</span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Layers className="w-4 h-4" />
          <span>FSM Software Reviews Hub</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-[#16201f]">
          Field Service Software Reviews
        </h1>
        <p className="text-sm md:text-base text-[#16201f]/75 font-body leading-relaxed">
          Independent evaluations of top field service platforms. We rank tools based on scheduling, mobile apps, pricing, and QuickBooks sync.
        </p>

        {/* FTC Disclosure */}
        <div className="pt-2">
          <p className="text-[10px] text-[#16201f]/70 italic">
            * We may earn a commission if you sign up for software through links on this page. Our research remains independent and evidence-based. <button onClick={() => onNavigate('/how-we-make-money')} className="underline hover:text-[#0e6e6a]">Learn more</button>.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-[#dde3e1] rounded-2xl p-4 md:p-6 shadow-xs space-y-4">
        {/* Quick Trade Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#dde3e1]/60">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#16201f]/60 font-display mr-1">
            Quick Filters:
          </span>
          <button
            type="button"
            onClick={() => {
              setTradeFilter('all');
              setSizeFilter('all');
              setPricingFilter('all');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              tradeFilter === 'all' && sizeFilter === 'all' && pricingFilter === 'all'
                ? 'bg-[#0e6e6a] text-white'
                : 'bg-[#fbfaf8] border border-[#dde3e1] text-[#16201f]/80 hover:text-[#0e6e6a]'
            }`}
          >
            All Platforms
          </button>
          <button
            type="button"
            onClick={() => {
              setTradeFilter('plumbing');
              setSizeFilter('all');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              tradeFilter === 'plumbing'
                ? 'bg-[#0e6e6a] text-white'
                : 'bg-[#fbfaf8] border border-[#dde3e1] text-[#16201f]/80 hover:text-[#0e6e6a]'
            }`}
          >
            Plumbing Focus
          </button>
          <button
            type="button"
            onClick={() => {
              setTradeFilter('hvac');
              setSizeFilter('all');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              tradeFilter === 'hvac'
                ? 'bg-[#0e6e6a] text-white'
                : 'bg-[#fbfaf8] border border-[#dde3e1] text-[#16201f]/80 hover:text-[#0e6e6a]'
            }`}
          >
            HVAC Focus
          </button>
          <button
            type="button"
            onClick={() => {
              setSizeFilter('solo');
              setTradeFilter('all');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              sizeFilter === 'solo'
                ? 'bg-[#0e6e6a] text-white'
                : 'bg-[#fbfaf8] border border-[#dde3e1] text-[#16201f]/80 hover:text-[#0e6e6a]'
            }`}
          >
            1–5 Techs (Residential)
          </button>
          <button
            type="button"
            onClick={() => {
              setSizeFilter('large');
              setTradeFilter('all');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              sizeFilter === 'large'
                ? 'bg-[#0e6e6a] text-white'
                : 'bg-[#fbfaf8] border border-[#dde3e1] text-[#16201f]/80 hover:text-[#0e6e6a]'
            }`}
          >
            15+ Fleets (Commercial)
          </button>
          <button
            type="button"
            onClick={() => {
              setPricingFilter('under100');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              pricingFilter === 'under100'
                ? 'bg-[#0e6e6a] text-white'
                : 'bg-[#fbfaf8] border border-[#dde3e1] text-[#16201f]/80 hover:text-[#0e6e6a]'
            }`}
          >
            Under $100/mo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search Box */}
          <div className="relative lg:col-span-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#fbfaf8] border border-[#dde3e1] rounded-lg text-sm focus:ring-2 focus:ring-[#0e6e6a] focus:outline-none"
            />
          </div>

          {/* Trade Filter */}
          <div>
            <select
              value={tradeFilter}
              onChange={(e) => setTradeFilter(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#fbfaf8] border border-[#dde3e1] rounded-lg text-sm text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              <option value="all">All Trades</option>
              <option value="plumbing">Plumbing Focus</option>
              <option value="hvac">HVAC Focus</option>
            </select>
          </div>

          {/* Size Filter */}
          <div>
            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#fbfaf8] border border-[#dde3e1] rounded-lg text-sm text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              <option value="all">All Team Sizes</option>
              <option value="solo">Solo & 1–2 Techs</option>
              <option value="small">2–10 Techs</option>
              <option value="large">15+ Techs</option>
            </select>
          </div>

          {/* Pricing Model Filter */}
          <div>
            <select
              value={pricingFilter}
              onChange={(e) => setPricingFilter(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#fbfaf8] border border-[#dde3e1] rounded-lg text-sm text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              <option value="all">All Pricing</option>
              <option value="under100">Under $100/mo</option>
              <option value="flat">Flat-Rate</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3.5 py-2 bg-[#fbfaf8] border border-[#dde3e1] rounded-lg text-sm text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              <option value="rating">Sort: Rated</option>
              <option value="name">Sort: A-Z</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-[#16201f]/75 pt-2 border-t border-[#dde3e1]/60">
          <span>
            Showing <strong>{filteredProducts.length}</strong> of {PRODUCT_LIST.length} software platforms
          </span>
          {(searchQuery || sizeFilter !== 'all' || pricingFilter !== 'all' || tradeFilter !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSizeFilter('all');
                setPricingFilter('all');
                setTradeFilter('all');
              }}
              className="text-[#0e6e6a] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
};
