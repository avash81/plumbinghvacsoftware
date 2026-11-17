import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  Layers3,
  ReceiptText,
  Search,
  Truck,
  Wrench,
} from 'lucide-react';
import { FAQAccordion } from '../components/FAQAccordion';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

const categories = [
  { title: 'Dispatch and scheduling', detail: 'Keep jobs and crews in sync.', route: '/software-reviews', icon: CalendarDays },
  { title: 'Invoicing and payments', detail: 'Get estimates and billing moving.', route: '/software-reviews', icon: ReceiptText },
  { title: 'QuickBooks sync', detail: 'Spend less time reconciling.', route: '/software-reviews', icon: CircleDollarSign },
  { title: 'Flat-rate pricebooks', detail: 'Build consistent service pricing.', route: '/guides', icon: ClipboardList },
  { title: 'GPS and fleet tracking', detail: 'See where the work is happening.', route: '/software-reviews', icon: Truck },
  { title: 'Job costing and inventory', detail: 'Understand the cost of each job.', route: '/software-reviews', icon: Layers3 },
] as const;

const faqs = [
  {
    question: 'How do I find the right software for my needs?',
    answer:
      'Start with technician headcount and the work you actually sell. Small residential crews usually need fast quoting and invoicing. Larger fleets need inventory, dispatch, and job costing. Our software finder will provide recommendations after verified reviews are published.',
  },
  {
    question: 'Are the reviews trustworthy?',
    answer:
      'PHS does not sell placement in the rankings. Scores come from the same criteria on every product: dispatch and mobile use, invoicing, QuickBooks sync, pricebook support, value, and support. Some outbound links are affiliate links, and those are labeled.',
  },
  {
    question: 'How do I write a review for software I have used?',
    answer:
      'PHS is not currently collecting user-submitted reviews. Use the contact page to get in touch with the editorial team.',
  },
  {
    question: 'Can I compare more than one product?',
    answer:
      'Comparisons will be published after we have verified product reviews to compare.',
  },
  {
    question: 'How do I claim a software listing?',
    answer:
      'There are no published software listings yet. Vendor submissions are not enabled.',
  },
  {
    question: 'Is the site free?',
    answer:
      'Yes. Reviews, comparisons, guides, and tools are free to read. There is no contractor subscription.',
  },
  {
    question: 'How are ratings calculated?',
    answer:
      'The overall score is the average of six ratings: value, ease of use, dispatch and mobile, invoicing, QuickBooks sync, and customer support. Each one is scored out of 5.',
  },
  {
    question: 'Can I save a product for later?',
    answer: 'Bookmark the review or comparison URL. Those addresses stay stable when a page is updated.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      onNavigate('/software-reviews');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <section className="market-hero relative isolate -mx-4 overflow-hidden border-b border-line px-4 pb-0 pt-14 text-center sm:-mx-6 sm:px-6 sm:pt-20 lg:-mx-8 lg:px-8">
        <div className="market-hero__dots pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-sm sm:text-sm">
            <Wrench className="h-4 w-4 text-primary" aria-hidden="true" />
            Independent software research for the trades
          </p>
          <h1 className="mt-7 text-5xl text-ink sm:mt-8">
            Find the right software for your next service call.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Find independent research and practical guidance for plumbing and HVAC software decisions.
          </p>

          <div className="market-hero__actions mt-8 flex max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <form onSubmit={handleSearchSubmit} className="market-hero__search flex min-h-14 w-full max-w-xl items-center gap-2 rounded-xl border border-line bg-white p-1.5 shadow-md focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-orange-100">
              <label htmlFor="home-search" className="sr-only">Search software</label>
              <Search className="ml-3 h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
              <input
                id="home-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search software or features"
                className="min-w-0 flex-1 border-0 bg-transparent px-2 py-3 text-sm text-ink outline-none placeholder:text-muted focus:ring-0 sm:text-base"
              />
              <button type="submit" className="market-cta inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold text-white transition-colors sm:px-5">
                Search <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <button type="button" onClick={() => onNavigate('/tools')} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-line bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-neutral-50">
              Try the software finder
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted sm:text-sm">
            <span>Independent software research for the trades</span>
            <button type="button" onClick={() => onNavigate('/how-we-test')} className="underline decoration-line underline-offset-4 hover:text-primary">
              How we evaluate software
            </button>
            <button type="button" onClick={() => onNavigate('/how-we-make-money')} className="underline decoration-line underline-offset-4 hover:text-primary">
              Affiliate disclosure
            </button>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-white p-6 text-center shadow-lg sm:mt-16 sm:p-8">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">Reviews are in progress</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
              We’ve removed the example listings. Product reviews and comparisons will appear here once they’re researched and verified.
            </p>
            <button type="button" onClick={() => onNavigate('/how-we-test')} className="mt-5 inline-flex min-h-10 items-center gap-2 font-semibold text-primary hover:text-primary-dark">
              How we evaluate software <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section aria-label="Editorial commitments" className="grid gap-3 border-b border-line py-6 sm:grid-cols-3 sm:gap-6">
        {[
          { title: 'Scores you can inspect', icon: BadgeCheck, route: '/how-we-test' },
          { title: 'Affiliate links disclosed', icon: CircleDollarSign, route: '/how-we-make-money' },
          { title: 'Built around trade workflows', icon: Truck, route: '/software-reviews' },
        ].map(({ title, icon: Icon, route }) => (
          <button key={title} type="button" onClick={() => onNavigate(route)} className="flex items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm"><Icon className="h-5 w-5" aria-hidden="true" /></span>
            <span className="text-sm font-semibold text-ink">{title}</span>
            <ArrowRight className="ml-auto h-4 w-4 text-muted" aria-hidden="true" />
          </button>
        ))}
      </section>

      <section className="mt-16" aria-labelledby="browse-heading">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-semibold text-primary">BROWSE BY WORKFLOW</p>
          <h2 id="browse-heading" className="market-section-heading mt-2 text-3xl font-semibold sm:text-4xl">What does your business need to do better?</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ title, detail, route, icon: Icon }) => (
            <button key={title} type="button" onClick={() => onNavigate(route)} className="market-resource-link flex min-h-28 items-center gap-4 rounded-2xl border border-line bg-white p-5 text-left hover:border-primary/40">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-ink">{title}</span>
                <span className="mt-1 block text-sm text-muted">{detail}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 sm:grid-cols-2" aria-label="Research and tools">
        <button type="button" onClick={() => onNavigate('/tools')} className="market-resource-link rounded-2xl border border-line bg-white p-6 text-left">
          <span className="block text-sm font-semibold text-primary">FREE TOOLS</span>
          <span className="mt-2 block font-serif text-2xl text-ink">Plan your software budget</span>
          <span className="mt-3 block text-sm leading-6 text-muted">Estimate the value of recovered technician hours against your monthly software cost.</span>
        </button>
        <button type="button" onClick={() => onNavigate('/how-we-test')} className="market-resource-link rounded-2xl border border-line bg-white p-6 text-left">
          <span className="block text-sm font-semibold text-primary">OUR PROCESS</span>
          <span className="mt-2 block font-serif text-2xl text-ink">How we evaluate software</span>
          <span className="mt-3 block text-sm leading-6 text-muted">See the research standards we use for plumbing and HVAC software reviews.</span>
        </button>
      </section>

      <section className="mt-16 rounded-2xl border border-line bg-white p-5 sm:p-8">
        <FAQAccordion faqs={faqs} title="Questions contractors ask first" />
      </section>
    </div>
  );
};
