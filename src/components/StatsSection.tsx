import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { TrendingDown, AlertCircle, BarChart3, ArrowUpRight } from 'lucide-react';
import { formatNumbers } from '../utils/numberUtils';

interface StatsSectionProps {
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const stats = [
    {
      id: 'delivery-gap',
      number: '80%',
      text: {
        ar: '80% من الشركات تعتقد أنها تقدّم تجربة متفوقة، بينما يرى العملاء أن 8% فقط منها تنجح في ذلك.',
        en: '80% of companies believe they deliver a superior experience, while only 8% of customers agree.'
      },
      source: {
        ar: 'الفجوة الإدراكية — Bain & Company — Closing the Delivery Gap',
        en: 'Perception Gap — Bain & Company — Closing the Delivery Gap'
      },
      badge: {
        ar: 'الفجوة الإدراكية',
        en: 'Delivery Gap'
      },
      highlight: true
    },
    {
      id: 'cost-bad-cx',
      number: '34%',
      text: {
        ar: 'تقلّصون إنفاقهم بعد تجربة سيئة، و13% يوقفون التعامل تماماً.',
        en: 'cut back their spending after a bad experience, and 13% stop doing business entirely.'
      },
      source: {
        ar: 'كلفة التجربة السيئة — Qualtrics XM Institute',
        en: 'Cost of Bad Experience — Qualtrics XM Institute'
      },
      badge: {
        ar: 'كلفة التجربة السيئة',
        en: 'Cost of Bad CX'
      },
      highlight: false
    },
    {
      id: 'cx-value',
      number: '88%',
      text: {
        ar: 'من العملاء يرون أن التجربة التي تقدّمها الشركة لا تقل أهمية عن منتجاتها أو خدماتها.',
        en: 'of customers state that the experience a company provides is as important as its products or services.'
      },
      source: {
        ar: 'قيمة التجربة — Salesforce — State of the Connected Customer',
        en: 'Value of Experience — Salesforce — State of the Connected Customer'
      },
      badge: {
        ar: 'قيمة التجربة',
        en: 'CX Value'
      },
      highlight: false
    }
  ];

  return (
    <section id="stats" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#102A43] border-b border-[#E4E7EB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-right rtl:text-right ltr:text-left">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#627D98]">
            {isRtl ? 'تجربة العميل بالأرقام' : 'CX BY THE NUMBERS'}
          </p>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-heading font-extrabold text-[#102A43] leading-[1.3] max-w-3xl">
            {isRtl ? (
              <>
                تجربة العميل لا تقاس بالانطباع{' '}
                <span className="text-[#C7362E] block sm:inline">بل بنتائج الأعمال</span>
              </>
            ) : (
              <>
                Customer Experience is measured by business outcomes{' '}
                <span className="text-[#C7362E] block sm:inline">not subjective impressions</span>
              </>
            )}
          </h2>
        </div>

        {/* Structured Row List */}
        <div className="border-t border-b border-[#D9E2EC] divide-y divide-[#D9E2EC]">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="py-8 sm:py-10 group transition-colors duration-200 hover:bg-white/60 rounded-xl px-4 sm:px-6 -mx-4 sm:-mx-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                
                {/* Percentage Metric Number */}
                <div className="md:col-span-3 flex items-baseline justify-start rtl:justify-start ltr:justify-start">
                  <span
                    className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105 ${
                      item.highlight ? 'text-[#C7362E]' : 'text-[#102A43]'
                    }`}
                  >
                    {formatNumbers(item.number, lang)}
                  </span>
                </div>

                {/* Body Text & Source Attribution */}
                <div className="md:col-span-9 space-y-2.5">
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-[#102A43] leading-relaxed">
                    {formatNumbers(item.text[lang], lang)}
                  </p>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#627D98] pt-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7362E]/70 inline-block" />
                    <span>{item.source[lang]}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
