import React from 'react';
import { Language } from '../types';

interface OutcomesSectionProps {
  lang: Language;
}

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const outcomes = [
    {
      num: '١',
      title: { ar: 'تمايز أقوى', en: 'Stronger Differentiation' },
      body: {
        ar: 'تصبح التجربة جزءًا من المنتج — ويصعب نسخها بنيويًا.',
        en: 'Experience becomes part of the core product — making it structurally hard to copy.'
      }
    },
    {
      num: '٢',
      title: { ar: 'استبقاء أفضل للعملاء', en: 'Higher Customer Retention' },
      body: {
        ar: 'يعود العملاء لأن التجربة تُقدّم باستمرار القيمة التي وُعدوا بها.',
        en: 'Customers return because experience consistently delivers the value promised.'
      }
    },
    {
      num: '٣',
      title: { ar: 'مواءمة أعلى للموظفين', en: 'Greater Employee Alignment' },
      body: {
        ar: 'تفهم الفِرق كيف يُسهم عملها في نتيجة للعميل، لا في مؤشّر داخلي فقط.',
        en: 'Teams understand how their work drives a customer outcome, not just an internal metric.'
      }
    },
    {
      num: '٤',
      title: { ar: 'ميزة تنافسية مستدامة', en: 'Sustainable Competitive Advantage' },
      body: {
        ar: 'تصبح التجربة جزءًا من نموذج العمل — لا حملة ولا مبادرة.',
        en: 'Experience becomes part of the business model — not a campaign or temporary initiative.'
      }
    }
  ];

  return (
    <section id="outcomes" className="bg-white py-20 sm:py-28 border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 text-right rtl:text-right ltr:text-left">
          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
            {isRtl ? '٠٤ — النتيجة' : '04 — THE OUTCOME'}
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
            {isRtl ? 'ما الذي يتغيّر حين تتوائم الاستراتيجية والتجربة.' : 'What changes when strategy and experience align.'}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {outcomes.map((item) => (
            <article key={item.num} className="bg-white border border-[#E4E7EB] rounded-xl p-8 flex flex-col justify-between text-right rtl:text-right ltr:text-left shadow-xs hover:border-[#102A43] transition-colors">
              <div>
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-4">
                  <span className="font-heading text-base font-bold tracking-[0.2em] text-[#C7362E]">
                    {item.num}
                  </span>
                  <span className="text-xs font-mono text-[#627D98] font-semibold">
                    {isRtl ? 'مخرج استراتيجي' : 'Strategic Outcome'}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#102A43]">
                  {item.title[lang]}
                </h3>

                <p className="text-base text-[#102A43]/80 leading-relaxed mt-3">
                  {item.body[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
