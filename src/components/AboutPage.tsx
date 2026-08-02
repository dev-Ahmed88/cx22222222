import React from 'react';
import { Language } from '../types';
import { AboutSection } from './AboutSection';
import { ArrowLeft, ArrowRight, Target, Lightbulb, Compass, Award, CheckCircle2, Users, Building2, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onGoHome: () => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  onGoHome,
  onNavigateContact,
}) => {
  const isRtl = lang === 'ar';

  const teamAdvisors = [
    {
      name: { ar: 'فريق الاستشارة التشغيلية', en: 'Operational Advisory Team' },
      role: { ar: 'خبراء الهندسة البنيوية', en: 'Structural Engineering Experts' },
      bio: {
        ar: 'متخصصون في تحليل العمليات الميدانية وسد الفجوات بين الاستراتيجية العامة والإجراءات اليومية.',
        en: 'Specialized in analyzing field operations and bridging gaps between executive strategy and daily procedures.'
      }
    },
    {
      name: { ar: 'فريق تصميم رحلة العميل', en: 'CX Design Team' },
      role: { ar: 'مهندسو نقاط التماس', en: 'Touchpoint Architects' },
      bio: {
        ar: 'صناع تجارب موحدة ومستدامة تضمن اتساق الانطباع الذهني والوفاء بالوعود.',
        en: 'Creators of unified and sustainable experiences that guarantee consistent brand perception.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#102A43] pt-6 pb-20 text-right rtl:text-right ltr:text-left">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#627D98]">
          <button 
            onClick={onGoHome}
            className="hover:text-[#102A43] transition-colors cursor-pointer"
          >
            {isRtl ? 'الرئيسية' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-[#C7362E] font-bold">
            {isRtl ? 'من نحن' : 'About Us'}
          </span>
        </div>
      </div>

      {/* About Page Hero Banner */}
      <div className="w-full bg-white border-y border-[#E4E7EB] py-10 sm:py-14 mb-12 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-right rtl:text-right ltr:text-left">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider">
              {isRtl ? 'فلسفة الممارسة والمنهجية' : 'Philosophy & Practice'}
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
              {isRtl 
                ? 'من نحن — نعيد تعريف تجربة العميل كنظام تشغيلي بنيوي' 
                : 'About Us — Redefining Customer Experience as a Structural Operating System'}
            </h1>

            <p className="text-base sm:text-lg text-[#102A43]/80 leading-relaxed">
              {isRtl
                ? 'لسنا وكالة تسويق ولا استشاريي ورش عمل. نحن ممارسة متخصصة في سد الفجوة بين استراتيجيات الإدارة العليا وما يستلمه العميل بالفعل في الواقع عبر معالجة جذور الخلل.'
                : 'We are not a marketing agency or workshop consultants. We are a specialized practice bridging the gap between C-suite strategy and what the customer actually receives.'}
            </p>

            <div className="pt-4">
              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 bg-[#102A43] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#C7362E] transition-colors shadow-sm cursor-pointer"
              >
                <span>{isRtl ? 'تواصل مع الفريق الاستشاري' : 'Connect with Our Advisory Team'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#E4E7EB]">
            <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] space-y-3 text-right rtl:text-right ltr:text-left shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#102A43] text-white flex items-center justify-center font-bold text-xs">
                <Target className="w-4 h-4 text-[#C7362E]" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">
                {isRtl ? 'الهدف الحقيقي' : 'True Purpose'}
              </h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                {isRtl ? 'صناعة قيمة حقيقية للعميل تُترجم إلى ربحية وتكرار للبزنس.' : 'Creating genuine customer value that translates into repeatable profit.'}
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] space-y-3 text-right rtl:text-right ltr:text-left shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#102A43] text-white flex items-center justify-center font-bold text-xs">
                <Lightbulb className="w-4 h-4 text-[#C7362E]" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">
                {isRtl ? 'البنيوية لا التجميل' : 'Structure Over Decoration'}
              </h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                {isRtl ? 'تغيير الآليات والسياسات بدلاً من وضع شعارات تسويقية براقة.' : 'Transforming mechanics and policies rather than superficial campaign slogans.'}
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] space-y-3 text-right rtl:text-right ltr:text-left shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#102A43] text-white flex items-center justify-center font-bold text-xs">
                <Compass className="w-4 h-4 text-[#C7362E]" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">
                {isRtl ? 'القياس والدقة' : 'Precision Measurement'}
              </h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                {isRtl ? 'اعتماد مؤشرات حقيقية تقيس سلوك العميل التكراري وليس الانطباع اللحظي.' : 'Using clear indicators that measure customer retention over temporary sentiment.'}
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] space-y-3 text-right rtl:text-right ltr:text-left shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#102A43] text-white flex items-center justify-center font-bold text-xs">
                <Award className="w-4 h-4 text-[#C7362E]" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">
                {isRtl ? 'خبرة الميدان' : 'Field Experience'}
              </h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                {isRtl ? 'تطوير حلول نابعة من تجارب واضحة داخل قطاعات التجزئة والخدمات.' : 'Developing solutions born from real inside experience in services & retail.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Main Practice Section */}
        <AboutSection lang={lang} />

        {/* Advisory Team Overview (Exclusive to About Page) */}
        <section className="bg-white border border-[#E4E7EB] rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-3 text-right rtl:text-right ltr:text-left">
            <div className="inline-flex items-center gap-2 text-[#102A43] text-xs font-bold">
              <Users className="w-4 h-4 text-[#C7362E]" />
              <span>{isRtl ? 'الخبرات والتطوير' : 'Advisory Experts'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#102A43]">
              {isRtl ? 'الكادر الاستشاري والخبرات الميدانية' : 'Advisory Team & Field Mastery'}
            </h2>
            <p className="text-sm sm:text-base text-[#627D98] leading-relaxed">
              {isRtl
                ? 'يضم فريقنا خبراء ومستشارين ذوي خلفيات واسعة في القيادة التشغيلية، تصميم الخدمات، والتحول المؤسسي.'
                : 'Our team comprises advisors with deep backgrounds in operational leadership, service design, and enterprise transformation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamAdvisors.map((advisor, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E4E7EB] rounded-xl p-6 flex flex-col justify-between text-right rtl:text-right ltr:text-left space-y-4 hover:border-[#102A43] transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#C7362E] uppercase tracking-wider">
                    {advisor.role[lang]}
                  </span>
                  <h3 className="text-lg font-bold text-[#102A43]">
                    {advisor.name[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                    {advisor.bio[lang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0F4F8] flex items-center gap-2 text-xs font-bold text-[#102A43]">
                  <CheckCircle2 className="w-4 h-4 text-[#C7362E]" />
                  <span>{isRtl ? 'إشراف ميداني كامل' : 'Full Field Ownership'}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated About Page Action CTA */}
        <section className="bg-[#102A43] text-white rounded-2xl p-8 sm:p-12 shadow-xl text-right rtl:text-right ltr:text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white leading-tight">
              {isRtl ? 'جاهز لمعالجة السبب البنيوي في تجربة عملائك؟' : 'Ready to Tackle the Structural Root in Your CX?'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isRtl
                ? 'تواصل معنا مباشرة لبدء نقاش تشخيصي حول وضع منشأتك الحالية وكيفية بناء ميزة تنافسية مستدامة.'
                : 'Reach out directly to start a diagnostic discussion on your current organization setup.'}
            </p>
            <div className="pt-4">
              <button
                onClick={onNavigateContact}
                className="px-8 py-3.5 bg-[#C7362E] text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#102A43] transition-colors shadow-md cursor-pointer"
              >
                {isRtl ? 'طلب جلسة تشخيصية' : 'Request Diagnostic Session'}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
