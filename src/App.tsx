/**
 * App.tsx
 * ---------------------------------------------------------
 * Primary application entry point and client-side router.
 * Handles all top-level route resolution and global state.
 *
 * Data source: lib/products.ts, lib/guides.ts, etc.
 * Related: components/Header.tsx, components/Footer.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 3.2
 * ---------------------------------------------------------
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS, getProductBySlug } from './lib/products';
import { getComparisonBySlug } from './lib/comparisons';
import { getBestOfBySlug } from './lib/best-of';
import { getGuideBySlug } from './lib/guides';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { generateMetadata } from './lib/seo';
import { generateWebsiteSchema } from './lib/seo-schema';
import { CookieConsentBanner } from './components/CookieConsentBanner';

// Views
import { HomePage } from './views/HomePage';
import { ReviewHubPage } from './views/ReviewHubPage';
import { ProductReviewPage } from './views/ProductReviewPage';
import { CompareHubPage } from './views/CompareHubPage';
import { ComparisonDetailPage } from './views/ComparisonDetailPage';
import { BestOfHubPage } from './views/BestOfHubPage';
import { BestOfArticlePage } from './views/BestOfArticlePage';
import { GuidesHubPage } from './views/GuidesHubPage';
import { GuideDetailPage } from './views/GuideDetailPage';
import { ToolsPage } from './views/ToolsPage';
import { HowWeTestPage } from './views/HowWeTestPage';
import { HowWeMakeMoneyPage } from './views/HowWeMakeMoneyPage';
import { AboutPage, ContactPage } from './views/AboutPage';
import { PrivacyPolicyPage, TermsOfServicePage } from './views/LegalPages';
import { AuthorDetailPage } from './views/AuthorDetailPage';
import { SearchPage } from './views/SearchPage';
import { NotFoundPage } from './views/NotFoundPage';
import { getAuthorBySlug, AUTHORS } from './lib/authors';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: string) => {
    if (route === currentPath) return;
    window.history.pushState({}, '', route);
    setCurrentPath(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Resolver Logic
  const renderCurrentView = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Reviews Hub
    if (currentPath === '/software-reviews' || currentPath === '/software-reviews/') {
      return <ReviewHubPage onNavigate={navigate} />;
    }

    // 2b. Product Review Detail
    if (currentPath.startsWith('/software-reviews/')) {
      const slug = currentPath.replace('/software-reviews/', '').replace(/\/$/, '');
      const product = getProductBySlug(slug);
      if (product) {
        return <ProductReviewPage product={product} onNavigate={navigate} />;
      }
      return <ReviewHubPage onNavigate={navigate} />;
    }

    // 3. Comparisons Hub
    if (currentPath === '/compare' || currentPath === '/compare/') {
      return <CompareHubPage onNavigate={navigate} />;
    }

    // 3b. Comparison Detail
    if (currentPath.startsWith('/compare/')) {
      const slug = currentPath.replace('/compare/', '').replace(/\/$/, '');
      const comparison = getComparisonBySlug(slug);
      if (comparison) {
        return <ComparisonDetailPage comparison={comparison} onNavigate={navigate} />;
      }
      return <CompareHubPage onNavigate={navigate} />;
    }

    // 4. Best Of Hub
    if (currentPath === '/best-of' || currentPath === '/best-of/') {
      return <BestOfHubPage onNavigate={navigate} />;
    }

    // 4b. Best Of Article Detail
    if (currentPath.startsWith('/best-of/')) {
      const slug = currentPath.replace('/best-of/', '').replace(/\/$/, '');
      const article = getBestOfBySlug(slug);
      if (article) {
        return <BestOfArticlePage article={article} onNavigate={navigate} />;
      }
      return <BestOfHubPage onNavigate={navigate} />;
    }

    // 5. Guides Hub
    if (currentPath === '/guides' || currentPath === '/guides/') {
      return <GuidesHubPage onNavigate={navigate} />;
    }

    // 5b. Guide Detail
    if (currentPath.startsWith('/guides/')) {
      const parts = currentPath.replace('/guides/', '').replace(/\/$/, '').split('/');
      const slug = parts[parts.length - 1];
      const guide = getGuideBySlug(slug);
      if (guide) {
        return <GuideDetailPage guide={guide} onNavigate={navigate} />;
      }
      return <GuidesHubPage onNavigate={navigate} />;
    }

    // 6. Tools (Quiz & ROI Calculator)
    if (
      currentPath === '/tools' ||
      currentPath === '/tools/' ||
      currentPath.startsWith('/tools/')
    ) {
      return <ToolsPage onNavigate={navigate} />;
    }

    // 6b. Search Results Page
    if (currentPath === '/search' || currentPath === '/search/') {
      return <SearchPage onNavigate={navigate} />;
    }

    // 7. How We Test
    if (currentPath === '/how-we-test' || currentPath === '/how-we-test/') {
      return <HowWeTestPage onNavigate={navigate} />;
    }

    // 8. How We Make Money (Affiliate Disclosure)
    if (currentPath === '/how-we-make-money' || currentPath === '/how-we-make-money/') {
      return <HowWeMakeMoneyPage onNavigate={navigate} />;
    }

    // 9. Legal Pages
    if (currentPath === '/privacy-policy' || currentPath === '/privacy-policy/') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/terms-of-service' || currentPath === '/terms-of-service/') {
      return <TermsOfServicePage onNavigate={navigate} />;
    }

    // 10. Authors
    if (currentPath.startsWith('/authors/')) {
      const slug = currentPath.replace('/authors/', '').replace(/\/$/, '');
      const author = getAuthorBySlug(slug) || AUTHORS['marcus-vance'];
      return <AuthorDetailPage author={author} onNavigate={navigate} />;
    }
    if (currentPath === '/authors' || currentPath === '/authors/') {
      return <AuthorDetailPage author={AUTHORS['marcus-vance']} onNavigate={navigate} />;
    }

    // 11. About & Contact
    if (currentPath === '/about' || currentPath === '/about/') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/contact' || currentPath === '/contact/') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 12. Fallback to Custom 404 Page
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] flex flex-col justify-between text-[#16201f] selection:bg-[#0e6e6a]/20 selection:text-[#0e6e6a]">
      <SEOHead {...generateMetadata(currentPath)} />
      <div>
        {/* Global Navigation Header */}
        <Header currentRoute={currentPath} onNavigate={navigate} />

        {/* Main Content Area */}
        <main id="main-content">
          {renderCurrentView()}
        </main>
      </div>

      {/* Cookie Consent Notice */}
      <CookieConsentBanner onNavigate={navigate} />

      {/* Global Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
