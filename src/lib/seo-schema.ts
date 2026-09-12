/**
 * seo-schema.ts
 * ---------------------------------------------------------
 * JSON-LD structured data generators for SEO compliance.
 * Implements Schema.org Article, Review, FAQ, and Organization types.
 *
 * Data source: types.ts (Interfaces passed to generators)
 * Related: components/SEOHead.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 5, 6.1
 * ---------------------------------------------------------
 */

import { ProductData, GuideArticle, BestOfArticle, ComparisonPair, AuthorData } from '../types';

/**
 * Generates the root website and organization schema for the homepage and sitewide trust.
 */
export function generateWebsiteSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PHS — Plumbing HVAC Software',
      alternateName: 'PHS',
      url: 'https://plumbinghvacsoftware.com',
      description: 'Independent field service management software comparisons, reviews, pricing, and guides for USA plumbing and HVAC contractors.',
      publisher: {
        '@type': 'Organization',
        name: 'PHS (Plumbing HVAC Software)',
        url: 'https://plumbinghvacsoftware.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://plumbinghvacsoftware.com/logo.png',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'PHS (Plumbing HVAC Software)',
      url: 'https://plumbinghvacsoftware.com',
      description: 'The independent evaluation hub for plumbing and HVAC field service management (FSM) software.',
      areaServed: 'US',
      knowsAbout: [
        'Field Service Management Software',
        'Plumbing Dispatch Software',
        'HVAC Scheduling Software',
        'Trade Business Invoicing',
        'QuickBooks Trade Integrations',
      ],
    },
  ];
}

/**
 * Generates Product and Review schema for individual software review pages.
 */
export function generateProductReviewSchema(product: ProductData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.tagline,
    brand: {
      '@type': 'Brand',
      name: product.name,
    },
    offers: {
      '@type': 'Offer',
      price: product.startingPrice.replace(/[^0-9.]/g, '') || '49.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Field Service Management Software',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: product.ratings.overall,
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Marcus Vance',
        jobTitle: 'Licensed Master Plumber & Operations Lead',
        url: 'https://plumbinghvacsoftware.com/authors/marcus-vance',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PHS (Plumbing HVAC Software)',
        url: 'https://plumbinghvacsoftware.com',
      },
      reviewBody: product.verdict,
      datePublished: '2026-01-15',
      dateModified: '2026-08-20',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.ratings.overall,
      reviewCount: 48,
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generates FAQPage schema for pages containing FAQ sections.
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Article schema for informational guide posts.
 */
export function generateArticleSchema(guide: GuideArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.intro,
    author: {
      '@type': 'Person',
      name: guide.author,
      url: `https://plumbinghvacsoftware.com/authors/${guide.author.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PHS (Plumbing HVAC Software)',
      url: 'https://plumbinghvacsoftware.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://plumbinghvacsoftware.com/logo.png',
      },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-08-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plumbinghvacsoftware.com/guides/${guide.category}/${guide.slug}`,
    },
  };
}

/**
 * Generates Article and ItemList schema for "Best Of" pillar pages.
 */
export function generateBestOfPillarSchema(article: BestOfArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle,
    author: {
      '@type': 'Person',
      name: article.author?.name || 'Marcus Vance',
      url: `https://plumbinghvacsoftware.com/authors/${(article.author?.name || 'Marcus Vance').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PHS (Plumbing HVAC Software)',
      url: 'https://plumbinghvacsoftware.com',
    },
    datePublished: '2026-01-20',
    dateModified: '2026-08-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plumbinghvacsoftware.com/best-of/${article.slug}`,
    },
    about: {
      '@type': 'ItemList',
      name: article.title,
      itemListElement: article.topPicks.map((pick, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pick.awardTitle,
        description: pick.shortWhy,
        url: `https://plumbinghvacsoftware.com/software-reviews/${pick.productSlug}`,
      })),
    },
  };
}

/**
 * Generates Article schema for product comparison ("X vs Y") pages.
 */
export function generateComparisonSchema(comparison: ComparisonPair) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparison.title,
    description: comparison.subtitle,
    author: {
      '@type': 'Person',
      name: comparison.author?.name || 'Marcus Vance',
      url: `https://plumbinghvacsoftware.com/authors/${(comparison.author?.name || 'Marcus Vance').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PHS (Plumbing HVAC Software)',
      url: 'https://plumbinghvacsoftware.com',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-08-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plumbinghvacsoftware.com/compare/${comparison.slug}`,
    },
  };
}

export function generateAuthorSchema(author: AuthorData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      knowsAbout: author.tradeExperience,
      hasCredential: author.credentials,
      url: `https://plumbinghvacsoftware.com/authors/${author.slug}`,
    },
  };
}

export function generateCollectionSchema(title: string, description: string, url: string, items?: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'PHS (Plumbing HVAC Software)',
      url: 'https://plumbinghvacsoftware.com',
    },
    ...(items && items.length > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: items.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              url: item.url,
            })),
          },
        }
      : {}),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
