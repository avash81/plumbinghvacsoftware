/**
 * SearchPage.tsx
 * ---------------------------------------------------------
 * Global search results page.
 * Indexes products, guides, and comparisons by keyword.
 *
 * Data source: lib/products.ts, lib/guides.ts, lib/comparisons.ts
 * Related: App.tsx (routing)
 * ---------------------------------------------------------
 */

import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, ArrowRight, Layers, BookOpen, Scale, X } from 'lucide-react';
import { PRODUCT_LIST } from '../lib/products';
import { GUIDE_LIST } from '../lib/guides';
import { COMPARISON_LIST } from '../lib/comparisons';

interface SearchPageProps {
  onNavigate: (route: string) => void;
  initialQuery?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({ onNavigate, initialQuery = '' }) => {
  const [query, setQuery] = useState(() => {
    if (initialQuery) return initialQuery;
    return new URLSearchParams(window.location.search).get('q') || '';
  });

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];

    const q = query.toLowerCase();

    const productResults = PRODUCT_LIST.filter(
      p => p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q)
    ).map(p => ({
      type: 'review' as const,
      title: `${p.name} Review`,
      subtitle: p.tagline,
      route: `/software-reviews/${p.slug}`,
      icon: Layers
    }));

    const guideResults = GUIDE_LIST.filter(
      g => g.title.toLowerCase().includes(q) || g.intro.toLowerCase().includes(q)
    ).map(g => ({
      type: 'guide' as const,
      title: g.title,
      subtitle: g.categoryLabel,
      route: `/guides/${g.slug}`,
      icon: BookOpen
    }));

    const comparisonResults = COMPARISON_LIST.filter(
      c => c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)
    ).map(c => ({
      type: 'comparison' as const,
      title: c.title,
      subtitle: c.subtitle,
      route: `/compare/${c.slug}`,
      icon: Scale
    }));

    return [...productResults, ...guideResults, ...comparisonResults];
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 min-h-[60vh]">
      <div className="page-intro space-y-4">
        <h1 className="text-3xl font-black font-display text-[#17242C]">
          Search PHS Resources
        </h1>
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#17242C]/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search software reviews, operations guides, or comparisons..."
            className="w-full pl-12 pr-12 py-4 bg-white border border-[#D3DDE3] rounded-2xl focus:border-[#0F4C6E] focus:ring-2 focus:ring-[#0F4C6E]/10 outline-none font-body text-lg shadow-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-[#17242C]/40" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {query.length >= 2 ? (
          <>
            <p className="text-sm font-bold text-[#17242C]/50 uppercase tracking-widest">
              Found {results.length} results for "{query}"
            </p>

            <div className="grid grid-cols-1 gap-3">
              {results.length > 0 ? (
                results.map((res, i) => {
                  const Icon = res.icon;
                  return (
                    <a
                      key={i}
                      href={res.route}
                      onClick={(event) => {
                        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        onNavigate(res.route);
                      }}
                      className="p-4 bg-white border border-[#D3DDE3] hover:border-[#0F4C6E] rounded-xl transition-all flex items-center justify-between group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4C6E]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0F4C6E]/5 text-[#0F4C6E] flex items-center justify-center shrink-0 group-hover:bg-[#0F4C6E] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#17242C] group-hover:text-[#0F4C6E] transition-colors font-display">
                            {res.title}
                          </h3>
                          <p className="text-xs text-[#17242C]/60 mt-0.5 line-clamp-1">
                            {res.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-[#0F4C6E] group-hover:translate-x-1 transition-all" />
                    </a>
                  );
                })
              ) : (
                <div className="py-12 text-center space-y-2">
                  <p className="text-[#17242C]/60 font-body">No matching guides or reviews found.</p>
                  <p className="text-xs text-[#17242C]/40">Try searching for keywords like "Jobber", "Pricing", or "HVAC".</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="py-20 text-center space-y-4 max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-300">
              <SearchIcon className="w-8 h-8" />
            </div>
            <p className="text-[#17242C]/60 font-body text-sm">
              Type at least 2 characters to search across our independent database.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
