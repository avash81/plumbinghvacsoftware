/**
 * seo.ts
 * ---------------------------------------------------------
 * Centralized SEO metadata generator.
 * Provides consistent titles and descriptions for all routes.
 * ---------------------------------------------------------
 */

import { getProductBySlug, PRODUCT_LIST } from './products';
import { getComparisonBySlug } from './comparisons';
import { getBestOfBySlug } from './best-of';
import { getGuideBySlug } from './guides';
import { getAuthorBySlug } from './authors';
import {
  generateWebsiteSchema,
  generateProductReviewSchema,
  generateArticleSchema,
  generateBestOfPillarSchema,
  generateComparisonSchema,
  generateAuthorSchema,
  generateCollectionSchema,
  generateBreadcrumbSchema,
} from './seo-schema';

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: any | any[];
}

/**
 * Generates SEO metadata based on the current path.
 * Used to ensure consistent indexing and social sharing.
 */
export function generateMetadata(path: string): SEOMetadata {
  const normalizedPath = path.replace(/\/$/, '') || '/';

  // 1. Home
  if (normalizedPath === '/') {
    return {
      title: 'PHS — Plumbing HVAC Software (FSM Comparisons)',
      description: 'Independent, evidence-based field service management software reviews, pricebook comparisons, and guides for USA plumbing and HVAC contractors.',
      canonicalPath: '/',
      schema: generateWebsiteSchema(),
    };
  }

  // 2. Reviews Hub
  if (normalizedPath === '/software-reviews') {
    const breadcrumbs = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://plumbinghvacsoftware.com/' },
      { name: 'Software Reviews', url: 'https://plumbinghvacsoftware.com/software-reviews/' },
    ]);
    const collectionSchema = generateCollectionSchema(
      'Plumbing & HVAC Field Service Software Reviews',
      'Independent hands-on reviews, pricing breakdowns, and feature ratings for top trade contractor software.',
      'https://plumbinghvacsoftware.com/software-reviews/',
      PRODUCT_LIST.map((p) => ({
        name: `${p.name} Review`,
        url: `https://plumbinghvacsoftware.com/software-reviews/${p.slug}`,
      }))
    );
    return {
      title: 'FSM Software Reviews — Plumbing & HVAC',
      description: 'In-depth reviews and technical breakdowns of the leading field service management platforms for trade contractors.',
      canonicalPath: '/software-reviews',
      schema: [breadcrumbs, collectionSchema],
    };
  }

  // 2b. Product Review Detail
  if (normalizedPath.startsWith('/software-reviews/')) {
    const slug = normalizedPath.replace('/software-reviews/', '');
    const product = getProductBySlug(slug);
    if (product) {
      const breadcrumbs = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://plumbinghvacsoftware.com/' },
        { name: 'Reviews', url: 'https://plumbinghvacsoftware.com/software-reviews/' },
        { name: product.name, url: `https://plumbinghvacsoftware.com/software-reviews/${product.slug}/` },
      ]);
      const productSchema = generateProductReviewSchema(product);
      return {
        title: `${product.name} Review: Pricing & Features`,
        description: `Our hands-on review of ${product.name}. We analyze pricing, QuickBooks sync, and dispatching features for plumbing & HVAC shops.`,
        canonicalPath: `/software-reviews/${slug}`,
        ogType: 'product',
        schema: [breadcrumbs, productSchema],
      };
    }
  }

  // 3. Comparisons Hub
  if (normalizedPath === '/compare') {
    return {
      title: 'Head-to-Head FSM Comparisons — Plumbing & HVAC',
      description: 'Side-by-side feature and pricing comparisons between competing field service management software platforms.',
      canonicalPath: '/compare',
    };
  }

  // 3b. Comparison Detail
  if (normalizedPath.startsWith('/compare/')) {
    const slug = normalizedPath.replace('/compare/', '');
    const comparison = getComparisonBySlug(slug);
    if (comparison) {
      const breadcrumbs = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://plumbinghvacsoftware.com/' },
        { name: 'Compare', url: 'https://plumbinghvacsoftware.com/compare/' },
        { name: comparison.title, url: `https://plumbinghvacsoftware.com/compare/${comparison.slug}/` },
      ]);
      const comparisonSchema = generateComparisonSchema(comparison);
      return {
        title: comparison.title,
        description: `Direct head-to-head comparison between leading FSM tools. We analyze the best choice for your trade business.`,
        canonicalPath: `/compare/${slug}`,
        schema: [breadcrumbs, comparisonSchema],
      };
    }
  }

  // 4. Best Of Hub
  if (normalizedPath === '/best-of') {
    return {
      title: 'Best Field Service Management Software',
      description: 'Ranked lists of the best FSM software for every business stage, from solo owner-operators to large commercial fleets.',
      canonicalPath: '/best-of',
    };
  }

  // 4b. Best Of Article Detail
  if (normalizedPath.startsWith('/best-of/')) {
    const slug = normalizedPath.replace('/best-of/', '');
    const article = getBestOfBySlug(slug);
    if (article) {
      const breadcrumbs = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://plumbinghvacsoftware.com/' },
        { name: 'Best Of', url: 'https://plumbinghvacsoftware.com/best-of/' },
        { name: article.title, url: `https://plumbinghvacsoftware.com/best-of/${article.slug}/` },
      ]);
      const bestOfSchema = generateBestOfPillarSchema(article);
      return {
        title: article.title,
        description: article.intro.substring(0, 160),
        canonicalPath: `/best-of/${slug}`,
        ogType: 'article',
        schema: [breadcrumbs, bestOfSchema],
      };
    }
  }

  // 5. Guides Hub
  if (normalizedPath === '/guides') {
    return {
      title: 'Plumbing & HVAC Operations Guides — PHS',
      description: 'Professional operations playbooks for trade contractors. Guides on pricing, QuickBooks sync, and dispatch management.',
      canonicalPath: '/guides',
    };
  }

  // 5b. Guide Detail
  if (normalizedPath.startsWith('/guides/')) {
    const parts = normalizedPath.replace('/guides/', '').split('/');
    const slug = parts[parts.length - 1];
    const guide = getGuideBySlug(slug);
    if (guide) {
      const breadcrumbs = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://plumbinghvacsoftware.com/' },
        { name: 'Guides', url: 'https://plumbinghvacsoftware.com/guides/' },
        { name: guide.title, url: `https://plumbinghvacsoftware.com/guides/${guide.category}/${guide.slug}/` },
      ]);
      const articleSchema = generateArticleSchema(guide);
      return {
        title: guide.title,
        description: guide.intro.substring(0, 160),
        canonicalPath: `/guides/${guide.category}/${slug}`,
        ogType: 'article',
        schema: [breadcrumbs, articleSchema],
      };
    }
  }

  // 6. Tools
  if (normalizedPath.startsWith('/tools')) {
    return {
      title: 'FSM Software Tools & Calculators — PHS',
      description: 'Interactive software finder quiz and ROI calculators for plumbing and HVAC field service management.',
      canonicalPath: '/tools',
    };
  }

  // 7. Authors
  if (normalizedPath.startsWith('/authors/')) {
    const slug = normalizedPath.replace('/authors/', '');
    const author = getAuthorBySlug(slug);
    if (author) {
      const authorSchema = generateAuthorSchema(author);
      return {
        title: `${author.name} — Field Service Industry Expert`,
        description: author.bio.substring(0, 160),
        canonicalPath: `/authors/${slug}`,
        schema: authorSchema,
      };
    }
  }

  // 8. Static Pages
  if (normalizedPath === '/how-we-test') {
    return {
      title: 'Our Review Methodology — How We Test Software',
      description: 'Learn about our hands-on evaluation framework and how we rate field service management software.',
      canonicalPath: '/how-we-test',
    };
  }

  if (normalizedPath === '/how-we-make-money') {
    return {
      title: 'Affiliate Disclosure — How We Make Money',
      description: 'Transparent disclosure about our affiliate relationships and how we support our independent research.',
      canonicalPath: '/how-we-make-money',
    };
  }

  if (normalizedPath === '/about') {
    return {
      title: 'About PHS — Plumbing HVAC Software Research',
      description: 'The team behind PHS and our mission to provide independent research for trade contractors.',
      canonicalPath: '/about',
    };
  }

  if (normalizedPath === '/contact') {
    return {
      title: 'Contact PHS — Submit Tips or Feedback',
      description: 'Get in touch with the PHS team for feedback, tip submissions, or partnership inquiries.',
      canonicalPath: '/contact',
    };
  }

  // Default / 404
  return {
    title: '404 Page Not Found — PHS',
    description: 'The page you are looking for does not exist on Plumbing HVAC Software.',
    canonicalPath: normalizedPath,
  };
}
