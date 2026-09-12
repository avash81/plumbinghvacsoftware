/**
 * Footer.tsx
 * ---------------------------------------------------------
 * Global site footer.
 * Contains trust statements, secondary navigation, and legal links.
 *
 * Data source: lib/products.ts (for quick review links)
 * Related: App.tsx, Header.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 3, 12
 * ---------------------------------------------------------
 */

import React from 'react';
import { Wrench, ShieldCheck, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { PRODUCT_LIST } from '../lib/products';
import { COMPARISON_LIST } from '../lib/comparisons';

interface FooterProps {
  onNavigate: (route: string) => void;
}

/**
 * Global footer with comprehensive sitemap and mandatory legal disclosures.
 */
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#16201f] text-neutral-300 pt-16 pb-12 border-t-4 border-[#0e6e6a] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-xs bg-[#0e6e6a] flex items-center justify-center text-white font-bold">
                <Wrench className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black spec-font text-white tracking-tight">
                PHS<span className="text-[#0e6e6a]">.</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-body max-w-sm">
              Independent evaluation hub for plumbing and HVAC field service software. Built for US trade contractors and owner-operators.
            </p>

            <div className="p-3.5 bg-neutral-900 border border-neutral-800 rounded-xs text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wider text-[11px] spec-font">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Neutrality Guarantee</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Vendors cannot pay for rankings. All products are evaluated using the same objective, hands-on criteria.
              </p>
            </div>
          </div>

          {/* Software Reviews Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest spec-font">
              Software Reviews
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {PRODUCT_LIST.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/software-reviews/${p.slug}`)}
                    className="hover:text-white transition-colors"
                  >
                    {p.name} Review
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Head-to-Head Comparisons Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest spec-font">
              Top Comparisons
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {COMPARISON_LIST.map((c) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/compare/${c.slug}`)}
                    className="hover:text-white transition-colors text-left line-clamp-1"
                  >
                    {c.title.split(':')[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Company Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest spec-font">
              Trust & Transparency
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/how-we-test')}
                  className="hover:text-white transition-colors"
                >
                  How We Test & Methodology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/how-we-make-money')}
                  className="hover:text-white transition-colors"
                >
                  How We Make Money (Affiliate Disclosure)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/tools')}
                  className="hover:text-white transition-colors"
                >
                  Software Finder Quiz
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors"
                >
                  About Our Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Tip Submission
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest spec-font">
              Weekly Operations Tips
            </h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Join 4,000+ trade owners receiving our weekly FSM pricing audits and operations playbooks.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full p-2.5 bg-neutral-900 border border-neutral-800 rounded-xs text-xs text-white focus:border-[#0e6e6a] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-all"
              >
                Join Playbook
              </button>
            </form>
          </div>
        </div>

        {/* FTC Disclosure & Legal Bottom Bar */}
        <div className="pt-8 space-y-4 text-xs text-neutral-500">
          <p className="leading-relaxed">
            <strong className="text-neutral-400">Disclosure:</strong> PHS is reader-supported. If you buy through our links, we may earn a commission. This never affects our reviews or the price you pay.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-[11px] mono-font">
            <span>© 2026 PHS (Plumbing HVAC Software). All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <span>Plumbing & HVAC FSM Resource Hub</span>
              <span>•</span>
              <button
                type="button"
                onClick={() => onNavigate('/how-we-make-money')}
                className="text-neutral-400 hover:text-white"
              >
                Disclosures
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onNavigate('/how-we-test')}
                className="text-neutral-400 hover:text-white"
              >
                Editorial Standards
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onNavigate('/privacy-policy')}
                className="text-neutral-400 hover:text-white"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onNavigate('/terms-of-service')}
                className="text-neutral-400 hover:text-white"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
