import React, { useState, useMemo } from 'react';
import { glossaryTerms, GlossaryTerm } from '../data/glossaryData';
import { Search, BookOpen, Filter, X, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { formatNumbers } from '../utils/numberUtils';

interface GlossaryViewerProps {
  lang: Language;
  onNavigateContact: () => void;
  onCloseModal?: () => void;
  isStandaloneModal?: boolean;
}

export const GlossaryViewer: React.FC<GlossaryViewerProps> = ({
  lang,
  onNavigateContact,
  onCloseModal,
  isStandaloneModal = false,
}) => {
  const isRtl = lang === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cx' | 'business' | 'marketing'>('all');
  const [expandedTermId, setExpandedTermId] = useState<number | null>(null);

  // Filtered terms logic
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const matchesQuery =
        term.termAr.toLowerCase().includes(q) ||
        term.termEn.toLowerCase().includes(q) ||
        term.defAr.toLowerCase().includes(q) ||
        term.defEn.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const categories = [
    { id: 'all', labelAr: 'الكل (55)', labelEn: 'All (55)' },
    { id: 'cx', labelAr: 'تجربة العميل CX (15)', labelEn: 'Customer Experience (15)' },
    { id: 'business', labelAr: 'البزنس والاستراتيجية (20)', labelEn: 'Business & Strategy (20)' },
    { id: 'marketing', labelAr: 'التسويق والنمو (20)', labelEn: 'Marketing & Growth (20)' },
  ];

  const toggleExpand = (id: number) => {
    setExpandedTermId(expandedTermId === id ? null : id);
  };

  return (
    <div className="bg-white border border-[#E4E7EB] shadow-xs text-right rtl:text-right ltr:text-left">
      
      {/* Header Banner */}
      <div className="bg-[#102A43] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#C7362E] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isRtl ? 'المرجع الشامل' : 'Comprehensive Reference'}</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white leading-[1.3]">
            {isRtl ? 'قاموس تجربة العميل والبزنس والتسويق' : 'CX, Business & Marketing Dictionary'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-medium">
            {isRtl
              ? `${formatNumbers(55, lang)} مصطلحاً جوهرياً يسد الفجوة بين النية الاستراتيجية والواقع التشغيلي والمصطلحات التسويقية الحديثة.`
              : '55 essential terms bridging the gap between strategic intent, operational execution, and modern marketing metrics.'}
          </p>
        </div>

        {isStandaloneModal && onCloseModal && (
          <button
            onClick={onCloseModal}
            className="absolute top-4 left-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Control Panel: Search + Filters */}
      <div className="p-4 sm:p-6 bg-[#FAF8F5] border-b border-[#E4E7EB] space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 right-4 rtl:right-4 ltr:left-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isRtl
                ? 'ابحث باسم المصطلح أو الاختصار (مثل: NPS, CAC, تجربة العميل, LTV...)'
                : 'Search term or abbreviation (e.g. NPS, CAC, LTV...)'
            }
            className="w-full bg-white border border-[#D9E2EC] py-3 pr-12 pl-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 text-sm font-medium text-[#102A43] focus:outline-none focus:border-[#C7362E] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute top-1/2 -translate-y-1/2 left-4 rtl:left-4 ltr:right-4 text-xs font-bold text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Status Count bar */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-1">
          <span>
            {isRtl ? `تم العثور على ${formatNumbers(filteredTerms.length, lang)} مصطلحاً` : `Found ${formatNumbers(filteredTerms.length, lang)} terms`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#C7362E] hover:underline"
            >
              {isRtl ? 'إعادة ضبط البحث' : 'Clear Search'}
            </button>
          )}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="p-4 sm:p-6 bg-white">
        {filteredTerms.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-[#D9E2EC] space-y-3">
            <p className="text-base font-bold text-[#102A43]">
              {isRtl ? 'لم نجد مصطلحات تطابق بحثك' : 'No matching terms found'}
            </p>
            <p className="text-xs text-slate-500">
              {isRtl ? 'جرب البحث بكلمة مختلفة أو اختر تصنيفاً آخر' : 'Try searching for a different keyword'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#C7362E] text-white text-xs font-bold hover:bg-[#a82922] transition-colors"
            >
              {isRtl ? `عرض كل الـ ${formatNumbers(55, lang)} مصطلحاً` : 'Show all 55 terms'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((term) => {
              const isExpanded = expandedTermId === term.id;
              const isCx = term.category === 'cx';
              const isBusiness = term.category === 'business';

              return (
                <div
                  key={term.id}
                  className={`border transition-all flex flex-col justify-between ${
                    isExpanded
                      ? 'border-[#C7362E] bg-red-50/20 shadow-xs'
                      : 'border-[#E4E7EB] hover:border-[#102A43]/40 bg-white'
                  }`}
                >
                  <div className="p-5">
                    {/* Top Row: Term ID */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-[#C7362E]">
                        #{formatNumbers(term.id, lang)}
                      </span>
                    </div>

                    {/* Term Titles */}
                    <h3 className="text-base font-extrabold text-[#102A43] leading-snug mb-1">
                      {isRtl ? term.termAr : term.termEn}
                    </h3>
                    <p className="text-xs font-bold text-[#C7362E] mb-3">
                      {isRtl ? term.termEn : term.termAr}
                    </p>

                    {/* Definition */}
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {isRtl ? term.defAr : term.defEn}
                    </p>

                    {/* Expanded Content / Example if present */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-[#E4E7EB] space-y-2 animate-fadeIn">
                        {term.exampleAr && (
                          <div className="bg-[#FAF8F5] p-3 text-xs border-r-2 border-[#C7362E]">
                            <span className="font-bold text-[#102A43] block mb-0.5">
                              {isRtl ? 'مثال تطبيقي:' : 'Practical Example:'}
                            </span>
                            <span className="text-slate-600 font-medium">
                              {isRtl ? term.exampleAr : term.exampleEn}
                            </span>
                          </div>
                        )}
                        <p className="text-[11px] text-slate-500 italic">
                          {isRtl ? term.defEn : term.defAr}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Toggle Button */}
                  <button
                    onClick={() => toggleExpand(term.id)}
                    className="w-full bg-[#FAF8F5] hover:bg-[#EEF4FB] py-2 px-5 border-t border-[#E4E7EB] text-xs font-bold text-[#102A43] flex items-center justify-between transition-colors"
                  >
                    <span>
                      {isExpanded
                        ? isRtl ? 'إخفاء التفاصيل' : 'Hide Details'
                        : isRtl ? 'تفاصيل إضافية' : 'More Details'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#C7362E]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom CTA Block */}
      <div className="p-6 bg-[#EEF4FB] border-t border-[#D9E2EC] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-extrabold text-[#102A43]">
            {isRtl ? 'تريد تطبيقا تشخيصيا لهذه المفاهيم في مشروعك؟' : 'Need a diagnostic application of these concepts for your business?'}
          </p>
          <p className="text-xs text-slate-600 font-medium">
            {isRtl
              ? 'احجز جلسة استشارية مبدئية لسد الفجوة بين المصطلحات الاستراتيجية والواقع التشغيلي.'
              : 'Book an initial diagnostic session to bridge the gap between strategy and operational execution.'}
          </p>
        </div>

        <button
          onClick={onNavigateContact}
          className="bg-[#C7362E] text-white px-6 py-3 text-xs font-bold hover:bg-[#a82922] transition-colors whitespace-nowrap"
        >
          {isRtl ? 'احجز تشخيصاً لمشروعك' : 'Book a Diagnosis Session'}
        </button>
      </div>

    </div>
  );
};
