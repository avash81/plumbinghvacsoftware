import React, { useState } from 'react';
import { Menu, X, Search, Wrench } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const navLinks = [
    { label: 'Reviews', route: '/software-reviews' },
    { label: 'Compare', route: '/compare' },
    { label: 'Best of', route: '/best-of' },
    { label: 'Guides', route: '/guides' },
    { label: 'Tools', route: '/tools' },
  ];

  const handleNav = (route: string) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    setMobileMenuOpen(false);
    onNavigate(q ? `/search?q=${encodeURIComponent(q)}` : '/software-reviews');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.75rem] items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={() => handleNav('/')}
            className="flex shrink-0 items-center gap-3 text-left"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-2xl font-semibold leading-none text-ink">PHS</span>
              <span className="mt-1 block text-[10px] font-medium text-muted">Plumbing & HVAC software</span>
            </span>
          </button>

          <nav className="ml-1 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route || currentRoute.startsWith(item.route);
              return (
                <button
                  key={item.route}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleNav(item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#eaf2f5] text-primary'
                      : 'text-ink/80 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <form onSubmit={submitSearch} className="ml-auto hidden max-w-[15rem] flex-1 items-center rounded-xl border border-line bg-[#f7f9fa] focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 md:flex">
            <label htmlFor="header-search" className="sr-only">Search software</label>
            <input
              id="header-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search software"
              className="w-full min-w-0 bg-transparent px-3 py-2.5 text-sm outline-none"
            />
            <button type="submit" className="px-3 text-primary" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
          </form>

          <button
            id="header-quiz-cta"
            type="button"
            onClick={() => handleNav('/tools')}
            className="hidden min-h-11 shrink-0 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark md:inline-flex"
          >
            Find software
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-slate-100 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? 'mobile-primary-navigation' : undefined}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-primary-navigation" className="space-y-2 border-t border-line bg-white px-4 py-4 shadow-lg lg:hidden">
          <form onSubmit={submitSearch} className="mb-3 flex rounded-xl border border-line bg-[#f7f9fa]">
            <label htmlFor="mobile-search" className="sr-only">Search software</label>
            <input
              id="mobile-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search software"
              className="w-full min-w-0 rounded-l-xl bg-transparent px-3 py-3 text-base outline-none"
            />
            <button type="submit" className="px-3 text-primary" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
          </form>
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route || currentRoute.startsWith(item.route);
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNav(item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full rounded-xl px-3 py-3 text-left text-base font-medium transition-colors ${
                  isActive ? 'bg-[#eaf2f5] text-primary' : 'text-ink hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => handleNav('/how-we-test')}
            className="w-full rounded-xl px-3 py-3 text-left text-sm text-muted transition-colors hover:bg-slate-50 hover:text-primary"
          >
            How we test
          </button>
          <button
            type="button"
            onClick={() => handleNav('/tools')}
            className="mt-2 min-h-12 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Find software
          </button>
        </div>
      )}
    </header>
  );
};
