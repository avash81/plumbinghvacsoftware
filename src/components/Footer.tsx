/**
 * Footer.tsx
 * ---------------------------------------------------------
 * Bespoke, clean footer tailored specifically for PHS (Plumbing HVAC Software).
 * Follows the clean, spacious layout requested by the user while incorporating
 * unique trade-specific resources and full Google AdSense policy compliance.
 * ---------------------------------------------------------
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, Wrench, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#111514] text-neutral-300 pt-16 md:pt-20 pb-12 text-sm font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Newsletter & Brand (Left) + 3 Unique Resource Columns (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800/80">
          {/* Brand & Newsletter Column (Unique to PHS) */}
          <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-6">
            {/* PHS Brand Identity Lockup */}
            <div
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-3 cursor-pointer select-none group"
            >
              <div className="w-9 h-9 rounded-sm bg-[#0e6e6a] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0a4f4c] transition-colors">
                <Wrench className="w-4 h-4 stroke-[2.4]" />
              </div>
              <div>
                <span className="text-xl font-black spec-font tracking-tight text-white block leading-none">
                  PHS<span className="text-[#0e6e6a]">.</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-neutral-400 block mt-1">
                  PLUMBING & HVAC SOFTWARE
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Weekly Trade Operations Intel
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed font-body">
                Independent software audits, pricing benchmarks, and field dispatch playbooks delivered to US plumbing & HVAC contractors.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your contractor email"
                    required
                    className="w-full px-4 py-3 bg-[#191f1d] border border-neutral-700/70 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#0e6e6a] focus:ring-1 focus:ring-[#0e6e6a] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>

              {subscribed && (
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-medium animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Welcome! You're subscribed to our weekly trade software audits.</span>
                </div>
              )}

              <p className="text-[11px] text-neutral-500 mt-2.5">
                Zero vendor bias. No sponsored rankings. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* 3 Nav Columns: Software Research, Company & Trust, Legal (AdSense Core) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            {/* 1. Software Research (Unique to PHS) */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white tracking-wide">
                Software Research
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/software-reviews')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Software Reviews
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/compare')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Head-to-Head Compare
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/best-of')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Best Of Roundups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/guides')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Operations Playbooks
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/tools')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Software Finder Quiz
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/tools')}
                    className="hover:text-white transition-colors text-left"
                  >
                    ROI & Cost Calculator
                  </button>
                </li>
              </ul>
            </div>

            {/* 2. Company & Trust (AdSense & EEAT Mandatory) */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white tracking-wide">
                Company & Trust
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/about')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Our Story & Mission
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/how-we-test')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Testing Methodology
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/how-we-test')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Editorial Standards
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/how-we-make-money')}
                    className="hover:text-white transition-colors text-left"
                  >
                    How We Make Money
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact Editorial Team
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Submit Tips & Feedback
                  </button>
                </li>
              </ul>
            </div>

            {/* 3. Legal & Compliance (AdSense Critical) */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white tracking-wide">
                Legal & Policy
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/privacy-policy')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/terms-of-service')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/privacy-policy')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/how-we-make-money')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Affiliate Disclosure
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/how-we-test')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Editorial Independence
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Single Line with PHS Brand & Reader Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} PHS (Plumbing HVAC Software) — Independent Trade Research. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0e6e6a]" />
            <span>Independent & Evidence-Based</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
