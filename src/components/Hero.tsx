import React from 'react';
import { Language } from '../types';
import { PuzzleMatrix } from './PuzzleMatrix';
import { formatNumbers } from '../utils/numberUtils';

interface HeroProps {
  lang: Language;
  onExploreFramework: () => void;
  onOpenConsultation: () => void;
  onOpenQuizModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreFramework,
  onOpenConsultation,
}) => {
  const isRtl = lang === 'ar';

  return (
    <section 
      id="hero"
      className="relative pt-16 pb-24 lg:pt-28 lg:pb-32 overflow-hidden border-b border-[#E4E7EB] bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Hero Copy (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-right rtl:text-right ltr:text-left">
            
            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#627D98]">
              {isRtl ? 'استشارات تجربة العميل' : 'Customer Experience Consulting'}
            </p>

            {/* H1 Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-[#102A43] leading-[1.3]">
              {isRtl ? (
                <>تفشل الاستراتيجية حين لا تصل إلى العميل</>
              ) : (
                <>Strategy fails when it doesn't reach the customer</>
              )}
            </h1>

            {/* Lead Description */}
            <p className="text-lg sm:text-xl text-[#486581] leading-[1.9] max-w-2xl font-normal">
              {isRtl ? (
                <>أساعد المؤسسات على سدّ الفجوة بين النية الاستراتيجية والواقع التشغيلي من خلال تصميم تجربة العميل — حتى يصبح الوعد الذي تحدّده القيادة هو التجربة التي يعيشها العميل</>
              ) : (
                <>I help organizations bridge the gap between strategic intent and operational reality through customer experience design — so the promise set by leadership becomes the experience lived by the customer</>
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center bg-[#102A43] text-white px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#C7362E] transition-colors rounded-lg shadow-xs"
              >
                {isRtl ? 'احجز استشارة' : 'Book Consultation'}
              </button>

              <button
                onClick={onExploreFramework}
                className="inline-flex items-center justify-center bg-[#C7362E] text-white px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase hover:opacity-90 transition-opacity rounded-lg shadow-xs"
              >
                {isRtl ? 'استكشف الإطار ←' : 'Explore Framework ←'}
              </button>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E4E7EB] max-w-md">
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-semibold text-[#102A43]">
                  {formatNumbers('+14', lang)}
                </div>
                <div className="mt-1 text-[11px] font-medium tracking-[0.16em] uppercase text-[#627D98]">
                  {isRtl ? 'سنوات في الممارسة' : 'Years Experience'}
                </div>
              </div>

              <div>
                <div className="font-heading text-2xl sm:text-3xl font-semibold text-[#102A43]">
                  {formatNumbers('+40', lang)}
                </div>
                <div className="mt-1 text-[11px] font-medium tracking-[0.16em] uppercase text-[#627D98]">
                  {isRtl ? 'مشروعًا' : 'Projects'}
                </div>
              </div>

              <div>
                <div className="font-heading text-2xl sm:text-3xl font-semibold text-[#102A43]">
                  {formatNumbers('7', lang)}
                </div>
                <div className="mt-1 text-[11px] font-medium tracking-[0.16em] uppercase text-[#627D98]">
                  {isRtl ? 'قطاعات' : 'Sectors'}
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Puzzle Graphic Column (5 columns) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="w-full max-w-[460px] bg-[#F8FAFC] rounded-3xl p-4 sm:p-5 border border-[#D9E2EC] shadow-lg relative overflow-visible">
              <PuzzleMatrix
                lang={lang}
                onSelectPiece={onExploreFramework}
              />
            </div>

            <p className="mt-6 text-center text-xs tracking-[0.22em] uppercase font-medium text-[#627D98]">
              {isRtl ? 'مرّر — تكتمل الصورة' : 'Scroll — the picture completes'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
