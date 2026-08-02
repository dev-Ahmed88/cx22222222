import React from 'react';
import { Language } from '../types';

interface PackagesSectionProps {
  lang: Language;
  onSelectPackage: (pkgName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ lang, onSelectPackage }) => {
  const isRtl = lang === 'ar';

  const packages = [
    {
      id: '01',
      title: {
        ar: 'الجلسة التشخيصية',
        en: 'Diagnostic Session'
      },
      subtitle: {
        ar: 'عندما تعرف أن هناك مشكلة، لكنك لا تعرف أين تبدأ',
        en: 'When you know there is a problem, but don\'t know where to start'
      },
      priceLabel: {
        ar: 'السعر',
        en: 'Price'
      },
      price: {
        ar: '1,200 ريال',
        en: '1,200 SAR'
      },
      priceNote: {
        ar: 'التقرير المكتوب الاختياري: 600 ريال',
        en: 'Optional written report: 600 SAR'
      },
      featuresTitle: {
        ar: 'ماذا تشمل؟',
        en: 'What is included?'
      },
      features: [
        { ar: 'نموذج تمهيدي لفهم المشروع والتحدي.', en: 'Preparatory questionnaire to understand project context.' },
        { ar: 'جلسة استشارية عبر Zoom لمدة 60 دقيقة.', en: '60-minute advisory session via Zoom.' },
        { ar: 'تشخيص أولي للفجوات والأسباب المحتملة.', en: 'Initial diagnosis of gaps and root causes.' },
        { ar: 'تحديد الأولويات والخطوات المقترحة.', en: 'Prioritization and recommended roadmap.' },
        { ar: 'إمكانية طلب تقرير تشخيصي مكتوب.', en: 'Option to request a formal written report.' }
      ],
      isHighlighted: true
    },
    {
      id: '02',
      title: {
        ar: 'المتسوق الخفي',
        en: 'Mystery Shopper Audit'
      },
      subtitle: {
        ar: 'شاهد التجربة كما يعيشها العميل فعلاً',
        en: 'Experience the service as your customer actually lives it'
      },
      priceLabel: {
        ar: 'السعر',
        en: 'Price'
      },
      price: {
        ar: 'يبدأ من 2,500 ريال',
        en: 'Starts from 2,500 SAR'
      },
      priceNote: null,
      featuresTitle: {
        ar: 'ماذا تحصل عليه؟',
        en: 'What do you receive?'
      },
      features: [
        { ar: 'زيارة ميدانية وفق سيناريو مصمم مسبقاً.', en: 'Field mystery visit based on custom scenarios.' },
        { ar: 'تقرير تفصيلي عن الرحلة والملاحظات.', en: 'Detailed audit report with observations.' },
        { ar: 'تحديد الفجوات بحسب أثرها وأولويتها.', en: 'Gap identification prioritized by impact.' },
        { ar: 'توصيات عملية لتحسين التجربة.', en: 'Actionable CX improvement recommendations.' },
        { ar: 'جلسة لمناقشة النتائج مع الادارة.', en: 'Executive debrief session with management.' },
        { ar: 'يتحدد السعر حسب عدد الفروع والزيارات', en: 'Pricing depends on branch count & visits' }
      ],
      isHighlighted: false
    },
    {
      id: '03',
      title: {
        ar: 'العقود الاستشارية',
        en: 'Retainer Advisory'
      },
      subtitle: {
        ar: 'دعم استراتيجي مستمر لاتخاذ قرارات أفضل',
        en: 'Ongoing strategic support for better decision making'
      },
      priceLabel: {
        ar: 'السعر',
        en: 'Price'
      },
      price: {
        ar: 'يُحدد حسب نطاق العمل',
        en: 'Custom scope based pricing'
      },
      priceNote: null,
      featuresTitle: {
        ar: 'قد يشمل نطاق العمل:',
        en: 'Scope may include:'
      },
      features: [
        { ar: 'اجتماعات استشارية دورية.', en: 'Regular advisory meetings.' },
        { ar: 'مراجعة رحلة العميل ونقاط التماس.', en: 'Customer journey & touchpoints review.' },
        { ar: 'تحليل التحديات والبيانات وملاحظات العملاء.', en: 'Data analysis and customer feedback review.' },
        { ar: 'مراجعة المبادرات والسياسات قبل إطلاقها.', en: 'Pre-launch review of policies & initiatives.' },
        { ar: 'تطوير مفاهيم واتجاهات التجربة.', en: 'Developing CX concepts and directions.' },
        { ar: 'يُحدد عدد الساعات، ووتيرة الاجتماعات، ونطاق الدعم', en: 'Hours, frequency & scope tailored to needs' }
      ],
      isHighlighted: false
    }
  ];

  return (
    <section id="packages" className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {packages.map((pkg) => {
          return (
            <div
              key={pkg.id}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all relative text-right rtl:text-right ltr:text-left ${
                pkg.isHighlighted
                  ? 'bg-[#EFF5FA] border-t-4 border-t-[#C7362E] border-x border-b border-[#D4E3EF] shadow-sm'
                  : 'bg-white border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1]'
              }`}
            >
              <div>
                {/* Number top right/left depending on direction */}
                <div className="flex justify-end mb-4">
                  <span className="text-[#627D98] text-sm font-mono font-medium">
                    {pkg.id}
                  </span>
                </div>

                {/* Package Header */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102A43] font-heading">
                    {pkg.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#486581] font-medium leading-relaxed">
                    {pkg.subtitle[lang]}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-b border-[#E2E8F0] my-5" />

                {/* Price Box */}
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-semibold text-[#627D98]">
                    {pkg.priceLabel[lang]}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#102A43]">
                    {pkg.price[lang]}
                  </div>
                  {pkg.priceNote && (
                    <p className="text-xs text-[#627D98] mt-1 font-medium">
                      {pkg.priceNote[lang]}
                    </p>
                  )}
                </div>

                {/* Features Section */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-[#102A43]">
                    {pkg.featuresTitle[lang]}
                  </h4>

                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-[#334E68] font-medium leading-relaxed">
                        <span className="text-[#C7362E] font-bold ml-2 shrink-0 select-none">-</span>
                        <span>{feat[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E2E8F0]/60 mt-4">
                <button
                  onClick={() => onSelectPackage(pkg.title[lang])}
                  className={`w-full py-3 px-4 rounded-lg text-xs font-bold transition-colors cursor-pointer text-center ${
                    pkg.isHighlighted
                      ? 'bg-[#C7362E] text-white hover:bg-[#a82a23] shadow-xs'
                      : 'bg-[#102A43] text-white hover:bg-[#1c3f60] shadow-xs'
                  }`}
                >
                  {isRtl ? 'طلب الخدمة' : 'Request Service'}
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
