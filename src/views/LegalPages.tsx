/**
 * LegalPages.tsx
 * ---------------------------------------------------------
 * Collection of mandatory legal and disclosure components.
 * Includes Privacy Policy and Terms of Service.
 *
 * Guide reference: project-implementation-guide.md, Section 14
 * ---------------------------------------------------------
 */

import React from 'react';
import { ShieldCheck, FileText, Lock, ArrowLeft } from 'lucide-react';

export const PrivacyPolicyPage: React.FC<{ onNavigate: (route: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <button
        type="button"
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0e6e6a] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="space-y-3 border-b-2 border-[#16201f] pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider spec-font">
          <Lock className="w-3.5 h-3.5" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black spec-font text-[#16201f]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#16201f]/60 mono-font">
          Last Updated: August 2026 • Compliant with CCPA and Standard US Data Practices
        </p>
      </div>

      <div className="bg-white border border-[#dde3e1] rounded-sm p-6 md:p-8 space-y-6 text-sm text-[#16201f]/85 font-body leading-relaxed shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">1. Information We Collect</h2>
          <p>
            PHS (Plumbing HVAC Software, operated at plumbinghvacsoftware.com, "we," "our," or "us") operates an independent software evaluation and comparison publication. We respect your privacy and do not sell personal information.
          </p>
          <p>
            <strong>Usage & Analytics Data:</strong> When you navigate our website, we may collect aggregated, non-personally identifiable metrics such as browser type, operating system, pages visited, time spent on pages, and referring URLs through privacy-conscious analytics tools to measure guide readership.
          </p>
          <p>
            <strong>User-Submitted Information:</strong> If you use our contact form or interactive ROI calculators, any details you voluntarily provide (such as your name, business email, or trade specialization) are used solely to respond to your inquiry.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">2. Affiliate Tracking & Third-Party Cookies</h2>
          <p>
            We participate in affiliate marketing programs. When you click outbound referral links to third-party software vendors (such as QuoteIQ or Jobber), the vendor or their affiliate network may place a temporary tracking cookie on your device to attribute referral commissions. These cookies do not contain personally identifying information and operate under the third party’s respective privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">3. CCPA / CPRA Rights (California Residents)</h2>
          <p>
            Under the California Consumer Privacy Act, California residents have the right to know what personal data is collected, request deletion, and opt out of the sale or sharing of personal data. We do not sell user data. To make an inquiry, contact us via our editorial contact form.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">4. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy, please submit a message via our{' '}
            <button
              onClick={() => onNavigate('/contact')}
              className="text-[#0e6e6a] font-bold underline"
            >
              Contact Page
            </button>.
          </p>
        </section>
      </div>
    </div>
  );
};

export const TermsOfServicePage: React.FC<{ onNavigate: (route: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <button
        type="button"
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0e6e6a] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="space-y-3 border-b-2 border-[#16201f] pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider spec-font">
          <FileText className="w-3.5 h-3.5" />
          <span>Terms of Use</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black spec-font text-[#16201f]">
          Terms of Service & Editorial Disclaimer
        </h1>
        <p className="text-xs text-[#16201f]/60 mono-font">
          Last Updated: August 2026
        </p>
      </div>

      <div className="bg-white border border-[#dde3e1] rounded-sm p-6 md:p-8 space-y-6 text-sm text-[#16201f]/85 font-body leading-relaxed shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">1. Educational and Informational Purpose Only</h2>
          <p>
            All software reviews, comparisons, ROI calculations, and guides published on PHS (Plumbing HVAC Software) are provided for informational and educational purposes only. While our team performs rigorous hands-on verification and regular quarterly pricing audits, software pricing, packaging, and feature sets change frequently.
          </p>
          <p>
            Contractors and business owners are advised to verify active terms, contract commitments, and integration compatibility directly with software vendors prior to purchasing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">2. No Guarantee of Business Results</h2>
          <p>
            PHS does not guarantee specific revenue growth, operational savings, or tax outcomes resulting from the implementation of any recommended field service management tool.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">3. Intellectual Property & Trademarks</h2>
          <p>
            Product names, logos, brands, and other trademarks featured or referred to within PHS are the property of their respective trademark holders. These trademark holders are not affiliated with PHS unless explicitly disclosed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold spec-font text-[#16201f]">4. Limitation of Liability</h2>
          <p>
            In no event shall PHS or its contributors be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use this site or any linked software services.
          </p>
        </section>
      </div>
    </div>
  );
};
