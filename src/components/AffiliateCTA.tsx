import React from 'react';
import { ExternalLink, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { getAffiliateLink } from '../lib/affiliate-links';

interface AffiliateCTAProps {
  productSlug: string;
  productName: string;
  variant?: 'primary' | 'secondary' | 'compact' | 'pill';
  label?: string;
  className?: string;
  showDisclosureDetail?: boolean;
}

export const AffiliateCTA: React.FC<AffiliateCTAProps> = ({
  productSlug,
  productName,
  variant = 'primary',
  label,
  className = '',
  showDisclosureDetail = false,
}) => {
  const config = getAffiliateLink(productSlug);

  const defaultLabel = config.isAffiliate
    ? `Visit ${productName} (Official Site)`
    : `Visit ${productName} (Direct Link)`;

  const buttonText = label || defaultLabel;

  const baseStyles =
    'inline-flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#0e6e6a] focus:ring-offset-2 select-none uppercase tracking-wider font-bold text-xs md:text-sm whitespace-nowrap overflow-hidden';

  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles =
      'px-6 py-3 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white rounded-sm shadow-xs hover:shadow-sm active:scale-[0.99] gap-2';
  } else if (variant === 'secondary') {
    variantStyles =
      'px-5 py-2.5 bg-white border-2 border-[#16201f] hover:bg-[#16201f] hover:text-white text-[#16201f] rounded-sm shadow-xs gap-2';
  } else if (variant === 'compact') {
    variantStyles =
      'px-2.5 py-1.5 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white text-[10px] md:text-[11px] font-bold rounded-xs gap-1 shadow-xs';
  } else if (variant === 'pill') {
    variantStyles =
      'px-4 py-2 bg-[#d97a3f] hover:bg-[#c26830] text-white rounded-xs gap-1.5 shadow-xs';
  }

  const handleClick = () => {
    try {
      if (typeof window !== 'undefined') {
        const eventPayload = {
          event: 'affiliate_click',
          product_slug: productSlug,
          product_name: productName,
          is_affiliate: config.isAffiliate,
          target_url: config.targetUrl,
          commission_type: config.commissionType,
          page_location: window.location.pathname,
        };

        // Standard GTM / GA4 dataLayer event
        if ((window as any).dataLayer) {
          (window as any).dataLayer.push(eventPayload);
        } else {
          (window as any).dataLayer = [eventPayload];
        }

        // GA4 gtag event if gtag is present
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'affiliate_click', eventPayload);
        }
      }
    } catch (e) {
      // Ignore non-critical tracking errors
    }
  };

  return (
    <div className={`inline-flex flex-col gap-1.5 ${className}`}>
      <a
        id={`affiliate-cta-${productSlug}`}
        href={config.targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles}`}
        title={`Visit ${productName} official website`}
      >
        <span className="truncate">{buttonText}</span>
        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-85 shrink-0" />
      </a>

      {showDisclosureDetail && (
        <div className="text-[11px] text-[#16201f]/65 flex items-center gap-1">
          {config.isAffiliate ? (
            <>
              <CheckCircle2 className="w-3 h-3 text-[#0e6e6a] shrink-0" />
              <span>Affiliate partner • Free trial eligible • No cost to you</span>
            </>
          ) : (
            <>
              <ShieldAlert className="w-3 h-3 text-neutral-400 shrink-0" />
              <span>Direct editorial link • No commission received</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
