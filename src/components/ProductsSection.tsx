import React from 'react';
import { Language } from '../types';

interface ProductsSectionProps {
  lang: Language;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const products = [
    {
      tag: { ar: 'دليل', en: 'GUIDE' },
      title: { ar: 'دليل تصميم التجربة', en: 'Experience Design Playbook' },
      body: {
        ar: 'طريقة مُهيكَلة لترجمة وعود العلامة إلى معايير تشغيلية.',
        en: 'A structured method for converting brand promises into operational standards.'
      }
    },
    {
      tag: { ar: 'قالب', en: 'TEMPLATE' },
      title: { ar: 'قوالب تدقيق تجربة العميل', en: 'CX Audit Worksheets' },
      body: {
        ar: 'قوالب عمل تُستخدم داخل المشاريع لكشف فجوات التنفيذ بسرعة.',
        en: 'Working templates used in engagements to surface execution gaps quickly.'
      }
    },
    {
      tag: { ar: 'ورشة', en: 'WORKSHOP' },
      title: { ar: 'دليل ورشة المواءمة', en: 'Alignment Workshop Guide' },
      body: {
        ar: 'صيغة جاهزة للميسّر لجمع القيادة والعمليات في محادثة واحدة.',
        en: 'A ready facilitator format to bring leadership and operations into one conversation.'
      }
    },
    {
      tag: { ar: 'أدوات', en: 'TOOLKIT' },
      title: { ar: 'أدوات المواءمة الاستراتيجية', en: 'Strategic Alignment Matrix' },
      body: {
        ar: 'أُطر قرار لاختيار أين تستثمر جهد التجربة بأعلى عائد.',
        en: 'Decision frameworks for choosing where to invest experience effort for maximum yield.'
      }
    }
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-[#E4E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-xl space-y-4 text-right rtl:text-right ltr:text-left">
          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
            {isRtl ? '٠٨ — الأدوات والمنتجات' : '08 — RESOURCES & PRODUCTS'}
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
            {isRtl ? 'موارد تنفيذية مستخلصة من الممارسة.' : 'Execution resources derived from practice.'}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <article 
              key={idx}
              className="bg-white border border-[#E4E7EB] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#102A43] transition-colors shadow-xs group text-right rtl:text-right ltr:text-left"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C7362E]">
                  {item.tag[lang]}
                </span>

                <h3 className="font-heading text-lg font-bold text-[#102A43] leading-[1.4]">
                  {item.title[lang]}
                </h3>

                <p className="text-sm text-[#486581] leading-relaxed">
                  {item.body[lang]}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E4E7EB] text-xs font-bold tracking-[0.18em] uppercase text-[#627D98] group-hover:text-[#102A43] transition-colors">
                {isRtl ? 'عرض ←' : 'View ←'}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
