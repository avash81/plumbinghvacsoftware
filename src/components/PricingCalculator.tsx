import React, { useState, useId } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../lib/products';

export const PricingCalculator: React.FC = () => {
  const [techCount, setTechCount] = useState<number>(4);
  const [hourlyRate, setHourlyRate] = useState<number>(125);
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(60);
  const [selectedSoftware, setSelectedSoftware] = useState<string>('test-1');

  // Input element IDs for accessibility
  const techCountId = useId();
  const hourlyRateId = useId();
  const monthlyInvoicesId = useId();
  const softwareSelectId = useId();

  // Calculations
  // Avg hours saved per tech per week on routing & dispatch = 1.5 hrs
  // Avg hours saved per week on office invoicing = 3 hrs
  const weeklyHoursSaved = techCount * 1.5 + 3;
  const monthlyHoursSaved = weeklyHoursSaved * 4.33;
  const monthlyValueRecovered = Math.round(monthlyHoursSaved * (hourlyRate * 0.65)); // 65% billable value ratio

  // Estimated monthly software cost
  let estimatedSoftwareCost = 49;
  if (selectedSoftware === 'test-1') {
    estimatedSoftwareCost = techCount <= 1 ? 49 : techCount <= 5 ? 99 : 199;
  } else if (selectedSoftware === 'test-2') {
    estimatedSoftwareCost = techCount <= 5 ? 99 : techCount <= 12 ? 189 : 299;
  }

  const netMonthlyGain = monthlyValueRecovered - estimatedSoftwareCost;
  const annualNetROI = netMonthlyGain * 12;
  const roiMultiplier = Math.max(1, Math.round(monthlyValueRecovered / Math.max(1, estimatedSoftwareCost)));

  return (
    <div
      id="fsm-roi-calculator"
      className="bg-white border border-[#dde3e1] rounded-2xl p-4 md:p-8 shadow-sm my-6"
    >
      <div className="flex items-center gap-3 pb-6 border-b border-[#dde3e1]">
        <div className="w-10 h-10 rounded-xl bg-[#0e6e6a]/10 flex items-center justify-center text-[#0e6e6a] shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg md:text-2xl font-bold font-display text-[#16201f] leading-tight">
            Field Service Software ROI & Cost Calculator
          </h2>
          <p className="text-[10px] md:text-sm text-[#16201f]/70 font-body">
            Calculate estimated software expenses versus recovered billable technician hours
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 pt-6">
        {/* Left Inputs Column */}
        <div className="lg:col-span-6 space-y-5">
          {/* Tech Count Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={techCountId} className="text-xs md:text-sm font-semibold text-[#16201f] font-display">
                Field Technicians in Fleet:
              </label>
              <span className="font-bold font-data text-[#0e6e6a] text-sm md:text-base px-2 py-0.5 bg-[#0e6e6a]/10 rounded">
                {techCount} {techCount === 1 ? 'Tech' : 'Techs'}
              </span>
            </div>
            <input
              id={techCountId}
              type="range"
              min="1"
              max="25"
              value={techCount}
              onChange={(e) => setTechCount(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0e6e6a]"
            />
            <div className="flex justify-between text-[10px] md:text-[11px] text-[#16201f]/50 mt-1">
              <span>1 (Solo)</span>
              <span>10 Techs</span>
              <span>25+ Fleets</span>
            </div>
          </div>

          {/* Hourly Billable Rate */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={hourlyRateId} className="text-xs md:text-sm font-semibold text-[#16201f] font-display">
                Average Hourly Billable Rate ($):
              </label>
              <span className="font-bold font-data text-[#16201f] text-sm md:text-base">
                ${hourlyRate}/hr
              </span>
            </div>
            <input
              id={hourlyRateId}
              type="range"
              min="65"
              max="250"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0e6e6a]"
            />
            <div className="flex justify-between text-[10px] md:text-[11px] text-[#16201f]/50 mt-1">
              <span>$65/hr</span>
              <span>$150/hr</span>
              <span>$250/hr</span>
            </div>
          </div>

          {/* Monthly Completed Invoices */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={monthlyInvoicesId} className="text-xs md:text-sm font-semibold text-[#16201f] font-display">
                Monthly Completed Invoices:
              </label>
              <span className="font-bold font-data text-[#16201f] text-sm md:text-base">
                {monthlyInvoices} jobs/mo
              </span>
            </div>
            <input
              id={monthlyInvoicesId}
              type="range"
              min="10"
              max="300"
              step="5"
              value={monthlyInvoices}
              onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0e6e6a]"
            />
          </div>

          {/* Software Preset Selector */}
          <div className="pt-2">
            <label htmlFor={softwareSelectId} className="block text-[10px] font-bold uppercase tracking-wider text-[#16201f]/60 font-display mb-1.5">
              Select Software to Compare Cost:
            </label>
            <select
              id={softwareSelectId}
              value={selectedSoftware}
              onChange={(e) => setSelectedSoftware(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#fbfaf8] border border-[#dde3e1] rounded-lg text-xs md:text-sm font-medium text-[#16201f] focus:ring-2 focus:ring-[#0e6e6a]"
            >
              <option value="test-1">Test Software 1 (Agile / Tiered $49–$99)</option>
              <option value="test-2">Test Software 2 (Fleet / Commercial $99–$299)</option>
            </select>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-[#fbfaf8] border border-[#dde3e1] rounded-xl p-4 md:p-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#dde3e1]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#16201f]/60 font-display">
                Estimated Net Annual Value
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-data w-fit">
                {roiMultiplier}x Estimated ROI
              </span>
            </div>

            <div className="text-center py-2">
              <span className="text-3xl md:text-5xl font-extrabold text-[#0e6e6a] font-display">
                +${annualNetROI.toLocaleString()}
              </span>
              <p className="text-[10px] md:text-xs text-[#16201f]/70 mt-1 font-body">
                Net Annual Value created via billable hours saved & faster invoicing
              </p>
            </div>

            {/* Metric Breakdown Table */}
            <div className="space-y-2 text-[10px] md:text-xs font-medium pt-2 border-t border-[#dde3e1]">
              <div className="flex justify-between py-1 border-b border-[#dde3e1]/40">
                <span className="text-[#16201f]/70">Est. Software Subscription:</span>
                <span className="font-data font-bold text-rose-700">
                  -${estimatedSoftwareCost.toLocaleString()}/mo
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#dde3e1]/40">
                <span className="text-[#16201f]/70">Labor & Drive Time Recovered:</span>
                <span className="font-data font-bold text-emerald-700">
                  ~{Math.round(monthlyHoursSaved)} hrs/mo (+${monthlyValueRecovered.toLocaleString()})
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#dde3e1]/40">
                <span className="text-[#16201f]/70">Net Monthly Business Profit Lift:</span>
                <span className="font-data font-bold text-[#0e6e6a]">
                  +${netMonthlyGain.toLocaleString()}/mo
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 text-[10px] md:text-[11px] text-[#16201f]/60 italic leading-tight">
            * Based on industry averages of 1.5 hours saved per field tech per week via routing, plus 3 hours/week on office invoicing.
          </div>
        </div>
      </div>
    </div>
  );
};
