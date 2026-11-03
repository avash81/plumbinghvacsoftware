/**
 * Header.tsx
 * ---------------------------------------------------------
 * Global navigation component.
 * Contains brand logo, desktop navigation, and mobile hamburger menu.
 *
 * Data source: N/A
 * Related: App.tsx (navigate function), Footer.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 3, 11
 * ---------------------------------------------------------
 */

import React, { useState } from 'react';
import { Wrench, Menu, X, ChevronDown, Award, Scale, BookOpen, Layers, ShieldCheck, Calculator } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

/**
 * Sticky header component with responsive navigation and brand identity.
 */
export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Reviews', route: '/software-reviews', icon: Layers },
    { label: 'Compare', route: '/compare', icon: Scale },
    { label: 'Best Of', route: '/best-of', icon: Award },
    { label: 'Guides', route: '/guides', icon: BookOpen },
    { label: 'Tools', route: '/tools', icon: Calculator },
  ];

  const handleNav = (route: string) => {
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#dde3e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <div
            id="brand-logo-container"
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-sm bg-[#0e6e6a] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0a4f4c] transition-colors">
              <Wrench className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div>
              <span className="text-xl xs:text-2xl font-black spec-font tracking-tight text-[#16201f] block leading-none">
                PHS<span className="text-[#0e6e6a]">.</span>
              </span>
              <span className="text-[8px] xs:text-[10px] font-bold tracking-tighter xs:tracking-widest uppercase text-[#16201f]/60 block mt-1 whitespace-nowrap">
                PLUMBING & HVAC SOFTWARE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => {
              const isActive =
                currentRoute === item.route ||
                (item.route !== '/' && currentRoute.startsWith(item.route));

              return (
                <button
                  key={item.route}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleNav(item.route)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#0e6e6a] bg-[#0e6e6a]/10 border-b-2 border-[#0e6e6a]'
                      : 'text-[#16201f]/80 hover:text-[#0e6e6a] hover:bg-neutral-100/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="h-5 w-px bg-[#dde3e1] mx-2" />

            {/* Quick Match CTA button */}
            <button
              id="header-quiz-cta"
              type="button"
              onClick={() => handleNav('/tools')}
              className="px-4 py-2 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition-all flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Software Quiz</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#16201f] hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#dde3e1] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentRoute === item.route || currentRoute.startsWith(item.route);

            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNav(item.route)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-base font-semibold ${
                  isActive ? 'bg-[#0e6e6a]/10 text-[#0e6e6a]' : 'text-[#16201f] hover:bg-neutral-50'
                }`}
              >
                <Icon className="w-5 h-5 text-[#0e6e6a]" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 border-t border-[#dde3e1] space-y-2">
            <button
              type="button"
              onClick={() => handleNav('/how-we-test')}
              className="w-full text-left px-4 py-2 text-xs font-medium text-[#16201f]/75 hover:text-[#0e6e6a]"
            >
              Testing Methodology
            </button>
            <button
              type="button"
              onClick={() => handleNav('/how-we-make-money')}
              className="w-full text-left px-4 py-2 text-xs font-medium text-[#16201f]/75 hover:text-[#0e6e6a]"
            >
              Affiliate Disclosures
            </button>
            <button
              type="button"
              onClick={() => handleNav('/tools')}
              className="w-full mt-2 py-3 bg-[#0e6e6a] text-white text-center text-sm font-bold rounded-xl"
            >
              Take the Software Finder Quiz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
