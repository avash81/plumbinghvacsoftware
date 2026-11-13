import React, { useState, useEffect } from 'react';

interface CookieConsentBannerProps {
  onNavigate: (route: string) => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tradefield_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  const choose = (value: 'accepted' | 'declined') => {
    localStorage.setItem('tradefield_cookie_consent', value);
    setIsVisible(false);
  };

  return (
    <aside aria-label="Cookie consent" className="fixed bottom-0 inset-x-0 z-50 border-t border-line bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-ink/80 flex-1">
          Essential cookies keep the site working. Affiliate cookies record a referral if you leave through a partner link.{' '}
          <button type="button" onClick={() => onNavigate('/privacy-policy')} className="text-primary">
            Privacy policy
          </button>
        </p>
        <div className="flex gap-2 shrink-0">
          <button type="button" onClick={() => choose('declined')} className="px-3 py-2 text-sm border border-line">
            Essential only
          </button>
          <button type="button" onClick={() => choose('accepted')} className="px-3 py-2 text-sm bg-primary text-white">
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
};
