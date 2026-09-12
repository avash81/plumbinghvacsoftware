import React from 'react';
import { ShieldCheck, Clock } from 'lucide-react';

interface VerifiedDateBadgeProps {
  date: string;
  testedVersion?: string;
  className?: string;
}

export const VerifiedDateBadge: React.FC<VerifiedDateBadgeProps> = ({
  date,
  testedVersion,
  className = '',
}) => {
  return (
    <div
      id="verified-date-badge"
      className={`inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xs bg-[#fbfaf8] border border-[#dde3e1] text-xs text-[#16201f] font-medium ${className}`}
    >
      <div className="inline-flex items-center gap-1.5 font-bold text-[#0e6e6a] uppercase tracking-wider text-[11px] spec-font">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0e6e6a] stroke-[2.5]" />
        <span>VERIFIED: {date}</span>
      </div>
      {testedVersion && (
        <>
          <span className="text-[#dde3e1] font-bold">•</span>
          <div className="inline-flex items-center gap-1 text-[#16201f]/70 text-[11px] mono-font">
            <Clock className="w-3 h-3 text-[#0e6e6a]" />
            <span>v{testedVersion}</span>
          </div>
        </>
      )}
    </div>
  );
};
