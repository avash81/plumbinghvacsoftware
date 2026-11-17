import React, { useState, useId } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const [techCount, setTechCount] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [monthlyInvoices, setMonthlyInvoices] = useState('');
  const [monthlySoftwareCost, setMonthlySoftwareCost] = useState('');

  // Input element IDs for accessibility
  const techCountId = useId();
  const hourlyRateId = useId();
  const monthlyInvoicesId = useId();
  const softwareCostId = useId();

  const hasAllInputs = [techCount, hourlyRate, monthlyInvoices, monthlySoftwareCost]
    .every((value) => value !== '');
  const techCountValue = Number(techCount);
  const hourlyRateValue = Number(hourlyRate);
  const monthlyInvoicesValue = Number(monthlyInvoices);
  const monthlySoftwareCostValue = Number(monthlySoftwareCost);
  const inputsAreValid =
    hasAllInputs &&
    techCountValue >= 1 &&
    techCountValue <= 25 &&
    hourlyRateValue >= 65 &&
    hourlyRateValue <= 250 &&
    monthlyInvoicesValue >= 10 &&
    monthlyInvoicesValue <= 300 &&
    monthlySoftwareCostValue >= 0;

  // Avg hours saved per tech per week on routing & dispatch = 1.5 hrs.
  // Avg hours saved per week on office invoicing = 3 hrs.
  const weeklyHoursSaved = inputsAreValid ? techCountValue * 1.5 + 3 : 0;
  const monthlyHoursSaved = weeklyHoursSaved * 4.33;
  const monthlyValueRecovered = inputsAreValid
    ? Math.round(monthlyHoursSaved * (hourlyRateValue * 0.65))
    : 0;
  const netMonthlyGain = monthlyValueRecovered - monthlySoftwareCostValue;
  const annualNetROI = inputsAreValid ? netMonthlyGain * 12 : null;
  const roiMultiplier = inputsAreValid
    ? Math.max(1, Math.round(monthlyValueRecovered / Math.max(1, monthlySoftwareCostValue)))
    : null;

  return (
    <div
      id="fsm-roi-calculator"
      className="bg-white border border-[#D3DDE3] rounded-2xl p-4 md:p-8 shadow-sm my-6"
    >
      <div className="flex items-center gap-3 pb-6 border-b border-[#D3DDE3]">
        <div className="w-10 h-10 rounded-xl bg-[#0F4C6E]/10 flex items-center justify-center text-[#0F4C6E] shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg md:text-2xl font-bold font-display text-[#17242C] leading-tight">
            Field Service Software ROI & Cost Calculator
          </h2>
          <p className="text-[10px] md:text-sm text-[#17242C]/70 font-body">
            Calculate estimated software expenses versus recovered billable technician hours
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 pt-6">
        {/* Left Inputs Column */}
        <div className="lg:col-span-6 space-y-5">
          {/* Technician count */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <label htmlFor={techCountId} className="text-xs md:text-sm font-semibold text-[#17242C] font-display">
                Field Technicians in Fleet:
              </label>
              <div className="flex items-center gap-2">
                <input
                  id={techCountId}
                  type="number"
                  min="1"
                  max="25"
                  step="1"
                  value={techCount}
                  onChange={(e) => setTechCount(e.target.value)}
                  className="w-20 rounded-lg border border-[#D3DDE3] bg-[#F3F6F8] px-3 py-2 text-right text-sm font-bold font-data text-[#0F4C6E] focus:ring-2 focus:ring-[#0F4C6E]"
                />
                <span className="text-xs text-[#17242C]/60">{techCount === '1' ? 'Tech' : 'Techs'}</span>
              </div>
            </div>
          </div>

          {/* Hourly billable rate */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <label htmlFor={hourlyRateId} className="text-xs md:text-sm font-semibold text-[#17242C] font-display">
                Average Hourly Billable Rate ($):
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#17242C]/60">$</span>
                <input
                  id={hourlyRateId}
                  type="number"
                  min="65"
                  max="250"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  className="w-24 rounded-lg border border-[#D3DDE3] bg-[#F3F6F8] px-3 py-2 text-right text-sm font-bold font-data text-[#17242C] focus:ring-2 focus:ring-[#0F4C6E]"
                />
                <span className="text-xs text-[#17242C]/60">/hr</span>
              </div>
            </div>
          </div>

          {/* Monthly completed invoices */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <label htmlFor={monthlyInvoicesId} className="text-xs md:text-sm font-semibold text-[#17242C] font-display">
                Monthly Completed Invoices:
              </label>
              <div className="flex items-center gap-2">
                <input
                  id={monthlyInvoicesId}
                  type="number"
                  min="10"
                  max="300"
                  step="5"
                  value={monthlyInvoices}
                  onChange={(e) => setMonthlyInvoices(e.target.value)}
                  className="w-24 rounded-lg border border-[#D3DDE3] bg-[#F3F6F8] px-3 py-2 text-right text-sm font-bold font-data text-[#17242C] focus:ring-2 focus:ring-[#0F4C6E]"
                />
                <span className="text-xs text-[#17242C]/60">jobs/mo</span>
              </div>
            </div>
          </div>

          {/* Software Preset Selector */}
          <div className="pt-2">
            <label htmlFor={softwareCostId} className="block text-[10px] font-bold uppercase tracking-wider text-[#17242C]/60 font-display mb-1.5">
              Estimated Monthly Software Cost:
            </label>
            <input
              id={softwareCostId}
              type="number"
              min="0"
              value={monthlySoftwareCost}
              onChange={(e) => setMonthlySoftwareCost(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#F3F6F8] border border-[#D3DDE3] rounded-lg text-xs md:text-sm font-medium text-[#17242C] focus:ring-2 focus:ring-[#0F4C6E]"
            />
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-[#F3F6F8] border border-[#D3DDE3] rounded-xl p-4 md:p-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#D3DDE3]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#17242C]/60 font-display">
                Estimated Net Annual Value
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-data w-fit">
                {roiMultiplier === null ? '—' : `${roiMultiplier}x Estimated ROI`}
              </span>
            </div>

            <div className="text-center py-2">
              <span className="text-3xl md:text-5xl font-extrabold text-[#0F4C6E] font-display">
                {annualNetROI === null ? '—' : `${annualNetROI < 0 ? '-' : '+'}$${Math.abs(annualNetROI).toLocaleString()}`}
              </span>
              <p className="text-[10px] md:text-xs text-[#17242C]/70 mt-1 font-body">
                Net Annual Value created via billable hours saved & faster invoicing
              </p>
            </div>

            {/* Metric Breakdown Table */}
            <div className="space-y-2 text-[10px] md:text-xs font-medium pt-2 border-t border-[#D3DDE3]">
              <div className="flex justify-between py-1 border-b border-[#D3DDE3]/40">
                <span className="text-[#17242C]/70">Est. Software Subscription:</span>
                <span className="font-data font-bold text-rose-700">
                  {inputsAreValid ? `-$${monthlySoftwareCostValue.toLocaleString()}/mo` : '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D3DDE3]/40">
                <span className="text-[#17242C]/70">Labor & Drive Time Recovered:</span>
                <span className="font-data font-bold text-emerald-700">
                  {inputsAreValid
                    ? `~${Math.round(monthlyHoursSaved)} hrs/mo (+$${monthlyValueRecovered.toLocaleString()})`
                    : '—'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D3DDE3]/40">
                <span className="text-[#17242C]/70">Net Monthly Business Profit Lift:</span>
                <span className="font-data font-bold text-[#0F4C6E]">
                  {inputsAreValid
                    ? `${netMonthlyGain < 0 ? '-' : '+'}$${Math.abs(netMonthlyGain).toLocaleString()}/mo`
                    : '—'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 text-[10px] md:text-[11px] text-[#17242C]/60 italic leading-tight">
            {inputsAreValid
              ? '* Based on industry averages of 1.5 hours saved per field tech per week via routing, plus 3 hours/week on office invoicing.'
              : 'Enter all four values within the indicated ranges to calculate your estimate.'}
          </div>
        </div>
      </div>
    </div>
  );
};
