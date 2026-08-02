import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';

interface DiagnosisSectionProps {
  lang: Language;
}

export const DiagnosisSection: React.FC<DiagnosisSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const breakdownData = [
    {
      category: { ar: 'الاستراتيجية', en: 'Strategy' },
      text: { ar: 'تقول شيئاً', en: 'Says one thing' },
    },
    {
      category: { ar: 'العمليات', en: 'Operations' },
      text: { ar: 'تنفّذ شيئاً آخر', en: 'Executes another' },
    },
    {
      category: { ar: 'التسويق', en: 'Marketing' },
      text: { ar: 'يَعِد بشيء ثالث', en: 'Promises a third' },
    },
    {
      category: { ar: 'العميل', en: 'Customer' },
      text: { ar: 'يعيش شيئاً مختلفاً تماماً', en: 'Experiences something completely different' },
    },
  ];

  return (
    <section id="problem" className="bg-white text-[#102A43] py-20 sm:py-28 border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Problem Left / Right in RTL */}
          <div className="lg:col-span-5 space-y-4 text-right rtl:text-right ltr:text-left">
            <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
              {isRtl ? '٠١ — التشخيص' : '01 — DIAGNOSIS'}
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
              {isRtl ? 'معظم الشركات لا تعاني من مشكلة استراتيجية' : "Most companies don't suffer from a strategy problem"}
            </h2>

            <p className="font-heading italic text-2xl sm:text-3xl text-[#C7362E] font-semibold pt-2">
              {isRtl ? 'بل من مشكلة تنفيذ' : 'Rather an execution problem'}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-right rtl:text-right ltr:text-left">
            <div className="border-t border-b border-[#D9E2EC]">
              {breakdownData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="grid grid-cols-12 gap-4 py-5 border-t first:border-t-0 border-[#D9E2EC] items-center text-right rtl:text-right ltr:text-left"
                >
                  <span className="col-span-4 text-xs font-mono font-semibold tracking-[0.18em] uppercase text-[#627D98]">
                    {item.category[lang]}
                  </span>

                  <span className="col-span-8 text-lg sm:text-xl font-medium text-[#102A43]">
                    {item.text[lang]}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[#102A43]/80 leading-relaxed pt-2">
              {isRtl ? (
                <>الفجوة بين النية والتسليم هي حيث <span className="text-[#C7362E] font-semibold">يتسرّب الهامش والثقة والتمايز بصمت</span>.</>
              ) : (
                'The gap between intent and delivery is where margin, trust, and differentiation quietly leak away.'
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
