/**
 * GuideDetailPage.tsx
 * ---------------------------------------------------------
 * Content template for informational guides and articles.
 * Follows the PHS Blog Post Structure: Title, Intro, Body, Action List, FAQ, Byline.
 *
 * Data source: lib/guides.ts
 * Related: components/FAQAccordion.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 4.1
 * ---------------------------------------------------------
 */

import React from 'react';
import { ChevronRight, BookOpen, Clock, User, ShieldCheck, ArrowRight, Award, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { GuideArticle } from '../types';
import { PRODUCTS } from '../lib/products';
import { FAQAccordion } from '../components/FAQAccordion';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { VerifiedDateBadge } from '../components/VerifiedDateBadge';

interface GuideDetailPageProps {
  guide: GuideArticle;
  onNavigate: (route: string) => void;
}

/**
 * Editorial article template that parses markdown-like content into a structured layout.
 * Enforces consistency across all informational content.
 */
export const GuideDetailPage: React.FC<GuideDetailPageProps> = ({
  guide,
  onNavigate,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#17242C]/50 font-bold">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="hover:text-[#0F4C6E]"
        >
          Home
        </button>
        <ChevronRight className="w-2.5 h-2.5" />
        <button
          type="button"
          onClick={() => onNavigate('/guides')}
          className="hover:text-[#0F4C6E]"
        >
          Guides
        </button>
        <ChevronRight className="w-2.5 h-2.5" />
        <span className="text-[#17242C] line-clamp-1">{guide.categoryLabel}</span>
      </nav>

      {/* 1. Title */}
      <header className="page-intro space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#17242C] tracking-tight leading-[1.1]">
          {guide.title}
        </h1>

        {/* 2. Intro */}
        <p className="text-lg md:text-xl text-[#17242C]/80 font-body leading-relaxed border-l-4 border-[#0F4C6E]/20 pl-6">
          {guide.intro}
        </p>
      </header>

      {/* 3. Body (Body Content Parser) */}
      <article className="prose prose-neutral max-w-none text-[#17242C]/90 space-y-6 font-body leading-relaxed text-base md:text-lg">
        {guide.content.split('\n\n').map((paragraph, index) => {
          // Handle H2
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl md:text-3xl font-black font-display text-[#17242C] pt-8 pb-2 border-b border-[#D3DDE3] mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          // Handle H3
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="text-xl md:text-2xl font-bold font-display text-[#17242C] pt-4 pb-2">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          // Handle Callout/Tip
          if (paragraph.startsWith('> Tip:')) {
            return (
              <div key={index} className="p-5 bg-[#0F4C6E]/5 border-l-4 border-[#0F4C6E] rounded-xs my-8 flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[#0F4C6E] shrink-0 mt-0.5" />
                <p className="text-sm md:text-base leading-relaxed m-0 font-medium text-[#17242C]">
                  {paragraph.replace('> Tip: ', '')}
                </p>
              </div>
            );
          }
          // Handle Bullets
          if (paragraph.startsWith('- ')) {
            const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
            return (
              <ul key={index} className="space-y-2 list-none pl-0">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F4C6E] shrink-0 mt-0.5" />
                    <span>{item.replace('- ', '')}</span>
                  </li>
                ))}
              </ul>
            );
          }
          // Handle Numbered Lists
          if (/^\d+\. /.test(paragraph)) {
            const items = paragraph.split('\n').filter(line => /^\d+\. /.test(line.trim()));
            return (
              <ol key={index} className="space-y-4 list-none pl-0">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#17242C] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item.replace(/^\d+\. /, '')}</span>
                  </li>
                ))}
              </ol>
            );
          }
          
          return (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </article>

      {/* 5. What to Do Next */}
      <section className="bg-[#f3f6f5] border border-[#D3DDE3] rounded-2xl p-6 md:p-8 space-y-6">
        <h2 className="text-2xl font-bold font-display text-[#17242C] flex items-center gap-2">
          <ArrowRight className="w-6 h-6 text-[#0F4C6E]" />
          <span>What to Do Next</span>
        </h2>
        <ul className="space-y-3">
          {guide.whatToDoNext.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#17242C]/90 leading-relaxed font-body">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F4C6E] shrink-0 mt-2" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Recommended Software (Earns its place) */}
      {guide.relatedProducts.length > 0 && (
        <section className="space-y-6 pt-10 border-t border-[#D3DDE3]">
          <h2 className="text-xl md:text-2xl font-black font-display text-[#17242C] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#0F4C6E]" />
            <span>Recommended Software</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guide.relatedProducts.map((slug) => {
              const product = PRODUCTS[slug];
              if (!product) return null;
              return (
                <div key={slug} className="flex flex-col group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-[#17242C] font-display group-hover:text-[#0F4C6E] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[#0F4C6E] font-bold text-xs bg-[#0F4C6E]/5 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{product.ratings.overall.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#17242C]/70 line-clamp-2 mb-4 h-10">
                    {product.tagline}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/software-reviews/${product.slug}`)}
                      className="text-xs font-bold text-[#17242C] underline decoration-[#0F4C6E]/30 underline-offset-4 hover:decoration-[#0F4C6E] transition-all flex items-center gap-1"
                    >
                      Full Review <ArrowRight className="w-3 h-3" />
                    </button>
                    <AffiliateCTA productSlug={product.slug} productName={product.name} variant="compact" label="Visit Site" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. FAQ */}
      {guide.faqs.length > 0 && (
        <FAQAccordion faqs={guide.faqs} title="Frequently Asked Questions" />
      )}

      {/* Newsletter Capture: Lead Magnet Incentive */}
      <section className="bg-[#17242C] text-white rounded-2xl p-8 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0F4C6E] text-white text-[10px] font-bold uppercase tracking-widest">
            <Lightbulb className="w-3 h-3" />
            <span>Free Operations Playbook</span>
          </div>
          <h2 className="text-2xl font-black font-display tracking-tight">
            Get the PHS Field Service Scaling Kit
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl">
            Join our newsletter for weekly FSM pricing audits, seasonal checklists, and hiring playbooks for plumbing & HVAC.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Business Email"
            className="flex-1 p-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm focus:border-[#0F4C6E] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#0F4C6E] hover:bg-[#0B3A54] text-white font-bold text-sm uppercase tracking-widest rounded-xl transition-all shadow-lg"
          >
            Send My Kit
          </button>
        </form>
        <p className="text-[10px] text-neutral-500 italic">
          No fluff. Just the data you need to run your trucks. Unsubscribe anytime.
        </p>
      </section>

      {/* 7. Byline */}
      <footer className="pt-12 border-t border-[#D3DDE3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#0F4C6E] text-white flex items-center justify-center text-xs font-bold shrink-0">
            {guide.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="text-sm font-bold text-[#17242C]">
            By <button onClick={() => onNavigate(`/authors/${guide.author.toLowerCase().replace(' ', '-')}`)} className="text-[#0F4C6E] hover:underline">{guide.author}</button>
          </div>
        </div>
        <div className="text-xs font-bold text-[#17242C]/50 uppercase tracking-widest">
          Last updated: {guide.lastUpdated}
        </div>
      </footer>
    </div>
  );
};
