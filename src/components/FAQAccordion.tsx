import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { generateFAQSchema } from '../lib/seo-schema';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const schemaJson = JSON.stringify(generateFAQSchema(faqs));

  return (
    <div id="faq-section" className={`my-8 ${className}`}>
      {/* Auto-injected FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-[#0e6e6a]/10 flex items-center justify-center text-[#0e6e6a]">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#16201f] font-display">
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#dde3e1] rounded-xl bg-white overflow-hidden transition-all duration-200"
            >
              <button
                id={`faq-btn-${index}`}
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-semibold text-[#16201f] hover:bg-[#fbfaf8] transition-colors focus:outline-none focus:bg-[#fbfaf8]"
                aria-expanded={isOpen}
              >
                <span className="text-base font-display text-[#16201f]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0e6e6a] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-4 pb-5 md:px-5 md:pb-6 text-sm text-[#16201f]/85 font-body leading-relaxed border-t border-[#dde3e1]/50 bg-[#fbfaf8]/40 pt-4"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
