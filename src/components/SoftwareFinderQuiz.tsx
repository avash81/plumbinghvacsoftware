import React, { useState } from 'react';
import { Calculator, ArrowRight, RotateCcw, CheckCircle2, ShieldCheck, Wrench, Users, DollarSign, Cpu } from 'lucide-react';
import { PRODUCTS, PRODUCT_LIST } from '../lib/products';
import { AffiliateCTA } from './AffiliateCTA';
import { ProductData } from '../types';

export const SoftwareFinderQuiz: React.FC<{ onNavigate?: (route: string) => void }> = ({
  onNavigate,
}) => {
  const [step, setStep] = useState<number>(1);
  const [trade, setTrade] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('');
  const [painPoint, setPainPoint] = useState<string>('');
  const [accounting, setAccounting] = useState<string>('');
  const [budget, setBudget] = useState<string>('');

  const [topMatch, setTopMatch] = useState<ProductData | null>(null);
  const [runnerUp, setRunnerUp] = useState<ProductData | null>(null);
  const [matchReason, setMatchReason] = useState<string>('');

  const calculateResult = () => {
    let primary: ProductData = PRODUCTS['test-1'];
    let secondary: ProductData = PRODUCTS['test-2'];
    let reason = '';

    if (teamSize === 'solo' || teamSize === '1-2') {
      primary = PRODUCTS['test-1'];
      secondary = PRODUCTS['test-2'];
      reason =
        'For solo owner-operators or 1–2 person trade crews seeking fast quoting and low overhead, Test Software 1 provides the highest ROI and easiest deployment.';
    } else {
      primary = PRODUCTS['test-2'];
      secondary = PRODUCTS['test-1'];
      reason =
        'For multi-truck service teams needing fleet dispatch, equipment tracking, and commercial project costing, Test Software 2 provides robust operational depth.';
    }

    setTopMatch(primary);
    setRunnerUp(secondary);
    setMatchReason(reason);
    setStep(5);
  };

  const resetQuiz = () => {
    setStep(1);
    setTrade('');
    setTeamSize('');
    setPainPoint('');
    setAccounting('');
    setBudget('');
    setTopMatch(null);
    setRunnerUp(null);
  };

  return (
    <div
      id="software-finder-quiz-container"
      className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 shadow-sm my-6"
    >
      <div className="flex items-center justify-between pb-6 border-b border-[#dde3e1]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0e6e6a]/10 flex items-center justify-center text-[#0e6e6a]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-display text-[#16201f]">
              FSM Software Matchmaker Quiz
            </h2>
            <p className="text-xs md:text-sm text-[#16201f]/70 font-body">
              Answer 4 questions to find the ideal platform for your trade and team size
            </p>
          </div>
        </div>

        {step < 5 && (
          <span className="text-xs font-bold font-data text-[#0e6e6a] bg-[#0e6e6a]/10 px-3 py-1 rounded-full">
            Step {step} of 4
          </span>
        )}
      </div>

      {/* STEP 1: Trade & Team Size */}
      {step === 1 && (
        <div className="py-6 space-y-6">
          <h3 className="text-base md:text-lg font-semibold text-[#16201f] font-display flex items-center gap-2">
            <Wrench className="w-5 h-5 text-[#0e6e6a]" /> What is your primary trade specialty?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'plumbing', label: 'Plumbing & Drain Service', desc: 'Residential & Light Commercial' },
              { id: 'hvac', label: 'HVAC & Heating / Cooling', desc: 'Service, Maintenance & Replacements' },
              { id: 'both', label: 'Full MEP / Multi-Trade', desc: 'Plumbing, HVAC & Electrical' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTrade(item.id)}
                className={`p-3 md:p-4 rounded-xl border text-left transition-all ${
                  trade === item.id
                    ? 'border-[#0e6e6a] bg-[#0e6e6a]/5 ring-2 ring-[#0e6e6a]'
                    : 'border-[#dde3e1] hover:border-[#0e6e6a]/50 bg-white'
                }`}
              >
                <div className="font-semibold text-[#16201f] font-display text-xs md:text-sm">{item.label}</div>
                <div className="text-[10px] md:text-xs text-[#16201f]/60 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>

          <h3 className="text-base md:text-lg font-semibold text-[#16201f] font-display flex items-center gap-2 pt-4">
            <Users className="w-5 h-5 text-[#0e6e6a]" /> How many technicians work in the field?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {[
              { id: 'solo', label: 'Solo Operator', sub: '1 Truck' },
              { id: '1-2', label: '2–4 Techs', sub: 'Growing Team' },
              { id: '3-10', label: '5–14 Techs', sub: 'Established Fleet' },
              { id: '15+', label: '15+ Techs', sub: 'Enterprise / Commercial' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTeamSize(item.id)}
                className={`p-3 md:p-3.5 rounded-xl border text-left transition-all ${
                  teamSize === item.id
                    ? 'border-[#0e6e6a] bg-[#0e6e6a]/5 ring-2 ring-[#0e6e6a]'
                    : 'border-[#dde3e1] hover:border-[#0e6e6a]/50 bg-white'
                }`}
              >
                <div className="font-bold text-[#16201f] text-xs md:text-sm">{item.label}</div>
                <div className="text-[10px] md:text-xs text-[#16201f]/60">{item.sub}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              disabled={!trade || !teamSize}
              onClick={() => setStep(2)}
              className="px-6 py-2.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg flex items-center gap-2 shadow-sm"
            >
              Continue to Step 2 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Primary Operational Goal / Pain Point */}
      {step === 2 && (
        <div className="py-6 space-y-6">
          <h3 className="text-base md:text-lg font-semibold text-[#16201f] font-display flex items-center gap-2">
            What is your biggest operational bottleneck right now?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                id: 'quoting',
                title: 'Estimates & Invoicing Speed',
                desc: 'Takes too long to build quotes; techs not presenting good/better/best options.',
              },
              {
                id: 'dispatch',
                title: 'Scheduling & Tech Routing',
                desc: 'Wasting windshield drive time; missed appointments; messy paper whiteboards.',
              },
              {
                id: 'marketing',
                title: 'Repeat Customer Bookings & Reviews',
                desc: 'Need automated postcards, text follow-ups, and 5-star Google review triggers.',
              },
              {
                id: 'payments',
                title: 'Slow Cash Flow & Invoicing Delays',
                desc: 'Waiting 30+ days to get paid; need instant card payments on job site.',
              },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPainPoint(item.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  painPoint === item.id
                    ? 'border-[#0e6e6a] bg-[#0e6e6a]/5 ring-2 ring-[#0e6e6a]'
                    : 'border-[#dde3e1] hover:border-[#0e6e6a]/50 bg-white'
                }`}
              >
                <div className="font-bold text-[#16201f] text-sm font-display">{item.title}</div>
                <div className="text-xs text-[#16201f]/70 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-2 text-sm text-[#16201f]/70 hover:text-[#16201f] font-medium"
            >
              Back
            </button>
            <button
              type="button"
              disabled={!painPoint}
              onClick={() => setStep(3)}
              className="px-6 py-2.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg flex items-center gap-2 shadow-sm"
            >
              Continue to Step 3 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Accounting Software */}
      {step === 3 && (
        <div className="py-6 space-y-6">
          <h3 className="text-base md:text-lg font-semibold text-[#16201f] font-display flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#0e6e6a]" /> What accounting system do you currently use?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'qbo', title: 'QuickBooks Online (Cloud)', desc: 'Direct REST API 2-way sync' },
              { id: 'qbd', title: 'QuickBooks Desktop / Pro', desc: 'Installed on local office PC' },
              { id: 'other', title: 'FreshBooks / Spreadsheets / Other', desc: 'Will export via CSV or direct entry' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAccounting(item.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  accounting === item.id
                    ? 'border-[#0e6e6a] bg-[#0e6e6a]/5 ring-2 ring-[#0e6e6a]'
                    : 'border-[#dde3e1] hover:border-[#0e6e6a]/50 bg-white'
                }`}
              >
                <div className="font-bold text-[#16201f] text-sm font-display">{item.title}</div>
                <div className="text-xs text-[#16201f]/70 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-4 py-2 text-sm text-[#16201f]/70 hover:text-[#16201f] font-medium"
            >
              Back
            </button>
            <button
              type="button"
              disabled={!accounting}
              onClick={() => setStep(4)}
              className="px-6 py-2.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg flex items-center gap-2 shadow-sm"
            >
              Continue to Step 4 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Budget & Pricing Preference */}
      {step === 4 && (
        <div className="py-6 space-y-6">
          <h3 className="text-base md:text-lg font-semibold text-[#16201f] font-display flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#0e6e6a]" /> What is your monthly software budget target?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'under50', title: 'Under $50–$100/mo', desc: 'Low overhead, solo/starter tier' },
              { id: '100-300', title: '$100–$300/mo', desc: 'Standard sweet spot for 2–8 techs' },
              { id: 'flat', title: 'Flat Rate / Unlimited Users', desc: 'Predictable cost, no per-seat tax' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setBudget(item.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  budget === item.id
                    ? 'border-[#0e6e6a] bg-[#0e6e6a]/5 ring-2 ring-[#0e6e6a]'
                    : 'border-[#dde3e1] hover:border-[#0e6e6a]/50 bg-white'
                }`}
              >
                <div className="font-bold text-[#16201f] text-sm font-display">{item.title}</div>
                <div className="text-xs text-[#16201f]/70 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="px-4 py-2 text-sm text-[#16201f]/70 hover:text-[#16201f] font-medium"
            >
              Back
            </button>
            <button
              type="button"
              disabled={!budget}
              onClick={calculateResult}
              className="px-6 py-2.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-sm font-semibold rounded-lg flex items-center gap-2 shadow-sm"
            >
              Calculate Best Matches <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: RESULTS */}
      {step === 5 && topMatch && (
        <div className="py-6 space-y-6 animate-fadeIn">
          <div className="bg-[#0e6e6a]/10 border border-[#0e6e6a]/30 rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-2 text-[#0e6e6a] font-bold text-xs uppercase tracking-wider font-display mb-1">
              <CheckCircle2 className="w-4 h-4" /> Recommended Top Choice
            </div>
            <h3 className="text-2xl font-bold text-[#16201f] font-display">
              {topMatch.name}
            </h3>
            <p className="text-sm text-[#16201f]/85 mt-2 leading-relaxed font-body">
              {matchReason}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Result Box */}
            <div className="border-2 border-[#0e6e6a] rounded-xl p-5 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0e6e6a] text-white text-[11px] font-bold uppercase">
                      #1 Match
                    </span>
                    <h4 className="text-xl font-bold text-[#16201f] font-display mt-2">
                      {topMatch.name}
                    </h4>
                  </div>
                  <span className="text-lg font-bold text-[#0e6e6a] font-data">
                    {topMatch.ratings.overall.toFixed(1)} / 5.0
                  </span>
                </div>
                <p className="text-xs text-[#16201f]/75 mt-2">{topMatch.tagline}</p>
                <div className="my-3 py-2 px-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1] text-xs font-medium">
                  Starting at: <span className="font-bold font-data text-sm">{topMatch.startingPrice}</span> • Free Trial:{' '}
                  {topMatch.hasFreeTrial ? `${topMatch.freeTrialDays} Days` : 'Demo'}
                </div>
                <ul className="space-y-1.5 text-xs text-[#16201f]/85">
                  {topMatch.pros.slice(0, 3).map((p, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0e6e6a] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#dde3e1]">
                <AffiliateCTA
                  productSlug={topMatch.slug}
                  productName={topMatch.name}
                  variant="primary"
                  className="w-full"
                  showDisclosureDetail={true}
                />
              </div>
            </div>

            {/* Runner-Up Result Box */}
            {runnerUp && (
              <div className="border border-[#dde3e1] rounded-xl p-5 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-200 text-[#16201f] text-[11px] font-bold uppercase">
                        Alternative Option
                      </span>
                      <h4 className="text-xl font-bold text-[#16201f] font-display mt-2">
                        {runnerUp.name}
                      </h4>
                    </div>
                    <span className="text-lg font-bold text-[#16201f]/70 font-data">
                      {runnerUp.ratings.overall.toFixed(1)} / 5.0
                    </span>
                  </div>
                  <p className="text-xs text-[#16201f]/75 mt-2">{runnerUp.tagline}</p>
                  <div className="my-3 py-2 px-3 bg-[#fbfaf8] rounded-lg border border-[#dde3e1] text-xs font-medium">
                    Starting at: <span className="font-bold font-data text-sm">{runnerUp.startingPrice}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#16201f]/85">
                    {runnerUp.pros.slice(0, 3).map((p, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-[#dde3e1]">
                  <AffiliateCTA
                    productSlug={runnerUp.slug}
                    productName={runnerUp.name}
                    variant="secondary"
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={resetQuiz}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e6e6a] hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake quiz with different parameters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
