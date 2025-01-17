'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How are voice processing minutes calculated?',
    answer: 'Voice processing minutes are calculated based on the actual duration of processed audio. We only charge for the time when our AI is actively processing voice input, not for idle time or silence.'
  },
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to the new features. When downgrading, the change will take effect at the start of your next billing cycle.'
  },
  {
    question: 'What happens if I exceed my monthly minutes?',
    answer: 'If you exceed your monthly minutes, you\'ll be charged for additional usage at a per-minute rate. We\'ll notify you when you reach 80% of your limit so you can upgrade if needed.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial on our Starter and Professional plans. This includes full access to all features within the plan, allowing you to thoroughly test our platform.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and offer invoicing options for Business plan customers. We can also accommodate other payment methods for enterprise customers.'
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No, our services are offered on a month-to-month basis with no long-term commitment required. However, you can save up to 20% by choosing annual billing.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-6 bg-gray-900/30 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-medium hover:opacity-90 transition-opacity">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
