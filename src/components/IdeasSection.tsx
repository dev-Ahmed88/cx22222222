import React from 'react';
import { Language } from '../types';

interface IdeasSectionProps {
  lang: Language;
}

export const IdeasSection: React.FC<IdeasSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const articles = [
    {
      tag: { ar: 'مقالة ٠١', en: 'ARTICLE 01' },
      title: { ar: 'التجربة هي الميزة التنافسية الجديدة.', en: 'Experience is the new competitive advantage.' },
      readTime: { ar: '١٢ دقيقة قراءة', en: '12 min read' }
    },
    {
      tag: { ar: 'مقالة ٠٢', en: 'ARTICLE 02' },
      title: { ar: 'لماذا يفشل تموضع العلامة في العمليات.', en: 'Why brand positioning fails in operations.' },
      readTime: { ar: '٩ دقائق قراءة', en: '9 min read' }
    },
    {
      tag: { ar: 'مقالة ٠٣', en: 'ARTICLE 03' },
      title: { ar: 'التكلفة الخفية لعدم اتساق التجربة.', en: 'The hidden cost of experience inconsistency.' },
      readTime: { ar: '١١ دقيقة قراءة', en: '11 min read' }
    },
    {
      tag: { ar: 'مقالة ٠٤', en: 'ARTICLE 04' },
      title: { ar: 'تجربة العميل بوصفها قدرة مؤسسية.', en: 'Customer experience as an organizational capability.' },
      readTime: { ar: '١٤ دقيقة قراءة', en: '14 min read' }
    }
  ];

  return (
    <section id="ideas" className="py-24 sm:py-32 border-b border-[#E4E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-[#E4E7EB] pb-10 text-right rtl:text-right ltr:text-left">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
              {isRtl ? '٠٥ — أفكار ورؤى' : '05 — IDEAS & INSIGHTS'}
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
              {isRtl ? 'أفكار حول تجربة العميل والميزة التنافسية.' : 'Insights on customer experience and competitive advantage.'}
            </h2>
          </div>

          <a 
            href="#blog" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#102A43] text-white px-5 py-3 text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#C7362E] transition-colors shrink-0 rounded-lg shadow-xs cursor-pointer"
          >
            {isRtl ? 'كل المقالات ←' : 'All Articles ←'}
          </a>
        </div>

        {/* 2x2 Grid of Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x lg:rtl:divide-x-reverse divide-[#D9E2EC]">
          {articles.map((item, idx) => (
            <a
              key={idx}
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col justify-between gap-6 py-8 lg:p-8 group hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C7362E]">
                  {item.tag[lang]}
                </span>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#102A43] leading-snug group-hover:text-[#C7362E] transition-colors">
                  {item.title[lang]}
                </h3>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase text-[#627D98]">
                <span>{item.readTime[lang]}</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">←</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
