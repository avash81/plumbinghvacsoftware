import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, FileSpreadsheet, RefreshCw, Cpu, Layers } from 'lucide-react';

interface HowWeTestPageProps {
  onNavigate: (route: string) => void;
}

export const HowWeTestPage: React.FC<HowWeTestPageProps> = ({ onNavigate }) => {
  const criteria = [
    {
      title: '1. Mobile Usability (25%)',
      desc: 'We test field apps on iOS and Android. Does it work without cell service? How easy is it to upload photos or send invoices?',
    },
    {
      title: '2. Customer Communication (20%)',
      desc: 'We evaluate "On My Way" alerts, booking widgets, and quote follow-ups.',
    },
    {
      title: '3. Accounting Sync (20%)',
      desc: 'We verify bi-directional sync with QuickBooks Online and Desktop to ensure no double-entry errors.',
    },
    {
      title: '4. Total Cost (20%)',
      desc: 'We calculate true costs, including per-user fees, setup charges, and credit card processing rates.',
    },
    {
      title: '5. Trade Features (15%)',
      desc: 'We check for flat-rate price books, maintenance agreements, and multi-option quoting.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <ShieldCheck className="w-4 h-4" />
          <span>Editorial Standard & Methodology</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          How We Test Field Service Software
        </h1>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed">
          We evaluate software based on real workflows and direct testing. We never accept payments to change our reviews or rankings.
        </p>
      </div>

      {/* 5-Point Evaluation Framework */}
      <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-6 shadow-xs">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Our 5-Point Evaluation Framework
        </h2>

        <div className="space-y-4">
          {criteria.map((item, index) => (
            <div key={index} className="p-4 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl space-y-1.5">
              <h3 className="font-bold text-base text-[#16201f] font-display">
                {item.title}
              </h3>
              <p className="text-sm text-[#16201f]/80 leading-relaxed font-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Cadence */}
      <section className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-[#0e6e6a]">
          <RefreshCw className="w-5 h-5" />
          <h2 className="text-xl md:text-2xl font-bold font-display text-[#16201f]">
            Quarterly Verification Cadence
          </h2>
        </div>
        <p className="text-sm text-[#16201f]/85 leading-relaxed font-body">
          SaaS pricing models and feature sets evolve rapidly. Every review and comparison on PHS includes a <strong>Verified Date Badge</strong> indicating the most recent date our research team re-tested the software and audited current rate cards.
        </p>
      </section>

      {/* Editorial Independence Charter */}
      <section className="bg-[#f3f6f5] border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          The PHS Neutrality Guarantee
        </h2>
        <ul className="space-y-2.5 text-sm text-[#16201f]/85 font-body">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
            <span><strong>No Pay-for-Ranking:</strong> Software vendors cannot purchase top spots in our roundups or reviews.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
            <span><strong>Equal Review Rigor:</strong> Non-affiliate tools (ServiceTitan, FieldEdge, Simpro) receive the exact same hands-on evaluation as affiliate partners.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0e6e6a] shrink-0 mt-0.5" />
            <span><strong>Clear Disclosure:</strong> Every affiliate relationship is transparently labeled in compliance with FTC guidelines.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
