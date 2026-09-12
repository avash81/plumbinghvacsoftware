import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X } from 'lucide-react';

interface CookieConsentBannerProps {
  onNavigate: (route: string) => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tradefield_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tradefield_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('tradefield_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Cookie consent banner" className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 flex justify-center pointer-events-none animate-fadeIn">
      <div className="bg-[#16201f] text-white border-2 border-[#dde3e1]/30 rounded-xs p-4 sm:p-5 shadow-2xl max-w-2xl w-full pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xs bg-[#0e6e6a] text-white flex items-center justify-center shrink-0 mt-0.5">
            <Shield className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold spec-font tracking-wide uppercase text-neutral-200">
              Cookie & Affiliate Tracking Disclosure
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-300 font-body leading-relaxed">
              We use essential cookies and anonymized referral tags to support our free independent testing. Affiliate cookies (30–90 days) track partner referrals without storing personal identifiable data. Learn more in our{' '}
              <button
                type="button"
                onClick={() => onNavigate('/privacy-policy')}
                className="text-[#0e6e6a] underline hover:text-white"
              >
                Privacy Policy
              </button>{' '}
              and{' '}
              <button
                type="button"
                onClick={() => onNavigate('/how-we-make-money')}
                className="text-[#0e6e6a] underline hover:text-white"
              >
                Affiliate Disclosure
              </button>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 border border-neutral-600 hover:bg-neutral-800 text-neutral-300 text-[11px] font-bold rounded-xs uppercase tracking-wider transition-all"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-1.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-[11px] font-bold rounded-xs uppercase tracking-wider transition-all shadow-xs"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
};
