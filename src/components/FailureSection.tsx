import React from 'react';
import { Language } from '../types';
import { formatNumbers } from '../utils/numberUtils';

interface FailureSectionProps {
  lang: Language;
}

export const FailureSection: React.FC<FailureSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const failures = [
    {
      num: '01',
      title: { ar: 'الاستراتيجية معزولة', en: 'Isolated Strategy' },
      body: {
        ar: 'تعيش الخطط في عروض القيادة لكنها لا تتحوّل إلى مهام تشغيلية بمالكين ومقاييس.',
        en: 'Plans live in executive slide decks but never translate into operational tasks with owners and metrics.'
      }
    },
    {
      num: '02',
      title: { ar: 'الفِرق تعمل في صوامع', en: 'Siloed Operations' },
      body: {
        ar: 'كل وظيفة تُحسّن مخرجاتها الخاصة، بينما يستوعب العميل الفجوات بينها.',
        en: 'Each department optimizes its own output, while the customer absorbs the structural gaps between them.'
      }
    },
    {
      num: '03',
      title: { ar: 'مقاييس النجاح غير متوائمة', en: 'Misaligned Success Metrics' },
      body: {
        ar: 'ما يُقاس على مستوى القسم نادرًا ما يرتبط بما يُقدّره العميل فعلًا.',
        en: 'What is measured at the department level rarely correlates with what the customer actually values.'
      }
    },
    {
      num: '04',
      title: { ar: 'الوعود غير مُشغَّلة', en: 'Un-operationalized Promises' },
      body: {
        ar: 'تُطلَق وعود العلامة في السوق قبل وجود نموذج التسليم القادر على الوفاء بها.',
        en: 'Brand promises go to market long before a delivery model capable of keeping them exists.'
      }
    }
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-[#E4E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column in RTL */}
          <div className="lg:col-span-4 space-y-4 text-right rtl:text-right ltr:text-left">
            <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
              {formatNumbers('03', lang)} — {isRtl ? 'سبب الفشل' : 'WHY THEY FAIL'}
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
              {isRtl ? 'لماذا تفشل معظم مبادرات تجربة العميل بهدوء.' : 'Why most CX initiatives quietly fail.'}
            </h2>

            <p className="text-base text-[#102A43]/80 leading-relaxed pt-2">
              {isRtl ? (
                <>المشكلة نادرًا ما تكون في الورشة أو في خريطة الرحلة أو في الشخصية. <span className="text-[#C7362E] font-semibold">المشكلة بنيوية — وتتطلّب جوابًا بنيويًا</span>.</>
              ) : (
                'The issue is rarely the workshop, journey map, or persona. The problem is structural — and requires a structural answer.'
              )}
            </p>
          </div>

          {/* Right List Column */}
          <div className="lg:col-span-7 lg:col-start-6 text-right rtl:text-right ltr:text-left">
            <ol className="divide-y divide-[#D9E2EC] border-t border-b border-[#D9E2EC]">
              {failures.map((item) => (
                <li key={item.num} className="grid grid-cols-12 gap-6 py-7 items-start text-right rtl:text-right ltr:text-left">
                  <span className="col-span-2 sm:col-span-1 font-heading text-lg font-bold text-[#C7362E]">
                    {formatNumbers(item.num, lang)}
                  </span>

                  <div className="col-span-10 sm:col-span-11 space-y-2 text-right rtl:text-right ltr:text-left">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#102A43]">
                      {item.title[lang]}
                    </h3>

                    <p className="text-base text-[#486581] leading-relaxed">
                      {item.body[lang]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};
