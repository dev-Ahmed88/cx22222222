import React from 'react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  return (
    <section id="about" className="bg-white py-20 sm:py-28 border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-4 text-right rtl:text-right ltr:text-left">
            <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
              {isRtl ? '٠٩ — الممارسة وفريق العمل' : '09 — THE PRACTICE'}
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
              {isRtl ? 'لماذا بنيتُ هذا الإطار.' : 'Why I built this framework.'}
            </h2>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-[#102A43] leading-[1.9] text-right rtl:text-right ltr:text-left">
            <p>
              {isRtl ? (
                'عبر سنوات من العمل داخل مؤسسات من الخدمات المالية إلى التجزئة، تكرّر النمط ذاته: استراتيجيات مدروسة لا تصل إلى العميل في أي صورة قابلة للتعرّف.'
              ) : (
                'Over years of working inside organizations from financial services to retail, the same pattern repeated: well-crafted strategies never reached the customer in any recognizable form.'
              )}
            </p>

            <p>
              {isRtl ? (
                'كانت الأدوات المعتادة لتجربة العميل — خرائط الرحلة، الشخصيات، الورش — مفيدة، لكنها لم تكن بنيوية. كانت تصف العَرَض وتتجاوز السبب.'
              ) : (
                'Standard CX tools — journey maps, personas, workshops — were helpful, but they were not structural. They described the symptom and bypassed the cause.'
              )}
            </p>

            <p>
              {isRtl ? (
                'إطار من الاستراتيجية إلى التجربة هو الجواب على هذا النمط. يعامل تجربة العميل كمخرج مرئي لكيفية إدارة المنظمة فعلًا، ويمنح القيادة طريقة لجعل ذلك المخرج مقصودًا.'
              ) : (
                'The Strategy-to-Experience Framework is the response to that pattern. It treats CX as the visible output of how an organization actually operates, giving leadership a way to make that output intentional.'
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
