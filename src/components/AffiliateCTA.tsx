import React from 'react';
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
  const buttonText = label || (config.isAffiliate ? `Visit ${productName}` : `Visit ${productName}`);
  const isPlaceholderLink = config.targetUrl.startsWith('https://example.com/');

  const variantStyles =
    variant === 'secondary'
      ? 'px-4 py-2.5 bg-white border border-ink text-ink hover:bg-ink hover:text-white text-sm'
      : variant === 'compact'
        ? 'px-2.5 py-1.5 bg-primary hover:bg-primary-dark text-white text-xs'
        : variant === 'pill'
          ? 'px-4 py-2.5 bg-white text-primary hover:bg-paper text-sm'
          : 'px-4 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm';

  const handleClick = () => {
    try {
      if (typeof window === 'undefined') return;
      const eventPayload = {
        event: 'affiliate_click',
        product_slug: productSlug,
        product_name: productName,
        is_affiliate: config.isAffiliate,
        target_url: config.targetUrl,
        commission_type: config.commissionType,
        page_location: window.location.pathname,
      };
      const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
      if (w.dataLayer) w.dataLayer.push(eventPayload);
      else w.dataLayer = [eventPayload];
      if (typeof w.gtag === 'function') w.gtag('event', 'affiliate_click', eventPayload);
    } catch {
      /* tracking must not block the visit */
    }
  };

  return (
    <div className={`inline-flex flex-col gap-1.5 ${className}`}>
      {isPlaceholderLink ? (
        <span className="text-xs text-muted">Sample listing. Vendor link unavailable.</span>
      ) : (
        <a
          id={`affiliate-cta-${productSlug}`}
          href={config.targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={`inline-flex items-center justify-center gap-2 text-center ${variantStyles}`}
          title={`Visit ${productName} official website`}
        >
          <span className="truncate">{buttonText}</span>
        </a>
      )}
      {showDisclosureDetail && (
        <p className="text-xs text-muted">
          {config.isAffiliate
            ? 'Affiliate link. The trial price does not change.'
            : 'Direct link. PHS is not paid for this click.'}
        </p>
      )}
    </div>
  );
};
