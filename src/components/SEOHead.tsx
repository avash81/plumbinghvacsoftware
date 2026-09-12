/**
 * SEOHead.tsx
 * ---------------------------------------------------------
 * Core SEO component for title, meta, and JSON-LD management.
 * Injects meta tags and schema scripts into the document head.
 *
 * Data source: N/A (Props driven)
 * Related: lib/seo-schema.ts
 *
 * Guide reference: project-implementation-guide.md, Section 5
 * ---------------------------------------------------------
 */

import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: Record<string, any> | Record<string, any>[];
}

/**
 * Dynamic SEO component that updates document metadata and injects structured data.
 * Must be included at the top of every page view.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  schema,
}) => {
  const fullTitle = title.includes('PHS') ? title : `${title} | PHS`;
  const canonicalUrl = `https://plumbinghvacsoftware.com${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Update Standard Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Open Graph Meta Tags
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', ogType);
    setMetaTag('og:site_name', 'PHS — Plumbing HVAC Software');

    // 4. Update Twitter Cards
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', fullTitle);
    setTwitterTag('twitter:description', description);

    // 5. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);
  }, [fullTitle, description, canonicalUrl, ogType]);

  if (!schema) return null;

  const schemasArray = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemasArray.map((schemaObj, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}
    </>
  );
};
