import React, { useState } from 'react';
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
  title = 'Frequently asked questions',
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const schemaJson = JSON.stringify(generateFAQSchema(faqs));

  return (
    <div id="faq-section" className={className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <h2 className="text-3xl mb-2">{title}</h2>
      <div className="border-t border-line">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="border-b border-line">
              <button
                id={`faq-btn-${index}`}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left py-4 flex items-start justify-between gap-6"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base text-ink">{faq.question}</span>
                <span className="text-muted text-sm shrink-0" aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              <p
                id={`faq-answer-${index}`}
                hidden={!isOpen}
                className="pb-4 text-sm text-ink/80 leading-relaxed max-w-2xl"
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
