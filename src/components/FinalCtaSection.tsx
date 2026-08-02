import React from 'react';
import { Language } from '../types';

interface FinalCtaSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ lang, onOpenConsultation }) => {
  const isRtl = lang === 'ar';

  return (
    <section id="book" className="py-20 sm:py-28 text-right rtl:text-right ltr:text-left bg-white border-b border-[#E4E7EB]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
          {isRtl ? '١٠ — الخطوة التالية' : '10 — THE QUESTION & NEXT STEP'}
        </p>

        <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102A43] leading-[1.3] mt-6">
          {isRtl ? (
            <>
              استراتيجيتك يعيشها عملاؤك الآن.
              <span className="block text-[#C7362E] mt-3">
                السؤال هو: هل يعيشونها كما قصدت؟
              </span>
            </>
          ) : (
            <>
              Your customers are living your strategy right now.
              <span className="block text-[#C7362E] mt-3">
                The question is: Are they living it as you intended?
              </span>
            </>
          )}
        </h2>

        <div className="mt-10">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center bg-[#C7362E] text-white px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase hover:bg-[#102A43] transition-colors rounded-xl shadow-lg cursor-pointer"
          >
            {isRtl ? 'احجز استشارة استراتيجية' : 'Book Strategic Consultation'}
          </button>
        </div>
      </div>
    </section>
  );
};
