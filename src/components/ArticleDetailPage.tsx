import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { ArrowRight, ArrowLeft, Clock, Plus, Minus, Send, CheckCircle2 } from 'lucide-react';
import { GlossaryViewer } from './GlossaryViewer';
import { GlossaryArticleContent } from './GlossaryArticleContent';
import { GlossaryHeaderBanner } from './GlossaryHeaderBanner';
import { formatNumbers } from '../utils/numberUtils';

export interface ArticleItem {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  readTime: string;
  readTimeEn: string;
  date: string;
  author: string;
  content: string;
  contentEn: string;
}

interface ArticleDetailPageProps {
  article: ArticleItem;
  lang: Language;
  onBack: () => void;
  onNavigateContact: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  lang,
  onBack,
  onNavigateContact,
}) => {
  const isRtl = lang === 'ar';
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-overview');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');

  // Track reading scroll progress
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // Section Table of Contents structure
  const isGlossary = article.id === 'glossary';

  const tocSections = isGlossary
    ? [
        { id: 'sec-overview', labelAr: 'أهم ما يجب معرفته قبل استخدام القاموس', labelEn: 'Overview & Essential Context' },
        { id: 'sec-how-to-use', labelAr: 'كيف تستخدم هذا القاموس؟', labelEn: 'How to Use This Glossary' },
        { id: 'sec-cx-terms', labelAr: 'مصطلحات تجربة العميل', labelEn: 'Customer Experience Terms' },
        { id: 'sec-business-terms', labelAr: 'مصطلحات البزنس والنمو', labelEn: 'Business & Growth Terms' },
        { id: 'sec-marketing-terms', labelAr: 'مصطلحات التسويق والسلوك', labelEn: 'Marketing & Behavior Terms' },
        { id: 'sec-[#system]', labelAr: 'كيف ترتبط هذه المصطلحات كنظام واحد؟', labelEn: 'How These Terms Connect as One System' },
        { id: 'sec-faq', labelAr: 'أسئلة شائعة عن مصطلحات تجربة العميل والتسويق', labelEn: 'Frequently Asked Questions' },
        { id: 'sec-how-to-start', labelAr: 'كيف تبدأ من القاموس؟', labelEn: 'How to Get Started' },
        { id: 'sec-sources', labelAr: 'المصادر والخطوات التالية', labelEn: 'Sources & Next Steps' },
      ]
    : [
        { id: 'sec-overview', labelAr: 'الملخص والوضع الحالي', labelEn: 'Overview & Problem Statement' },
        { id: 'sec-root-cause', labelAr: 'جذر المشكلة في الأداء', labelEn: 'Root Cause Analysis' },
        { id: 'sec-framework', labelAr: 'إطار الحل والتطبيق', labelEn: 'Framework & Implementation' },
        { id: 'sec-system', labelAr: 'ربط المنظومة بالأرقام', labelEn: 'Systemic Alignment' },
        { id: 'sec-faq', labelAr: 'أسئلة شائعة وتطبيقات', labelEn: 'Frequently Asked Questions' },
        { id: 'sec-sources', labelAr: 'توصيات وخطوات عملية', labelEn: 'Actionable Takeaways & Next Steps' },
      ];

  const handleScrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#102A43] font-sans selection:bg-[#C7362E] selection:text-white rounded-none dir-rtl" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 2px fixed top reading progress bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#C7362E] z-50 transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true" 
      />

      {/* Main Article Header Section */}
      <section className="bg-white pt-8 pb-8 px-4 sm:px-8 border-b border-[#E4E7EB]">
        <div className="max-w-5xl mx-auto space-y-4">
          
          {/* Back Navigation Link */}
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#C7362E] transition-colors group py-1"
            >
              <div className="w-6 h-6 rounded-none bg-[#F0F4F8] group-hover:bg-[#C7362E]/10 flex items-center justify-center transition-colors">
                {isRtl ? <ArrowRight className="w-3.5 h-3.5 text-[#C7362E]" /> : <ArrowLeft className="w-3.5 h-3.5 text-[#C7362E]" />}
              </div>
              <span>{isRtl ? 'العودة إلى جميع المقالات والرؤى' : 'Back to all articles & insights'}</span>
            </button>
          </div>

          {/* Article Kicker */}
          <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider">
            {isRtl ? article.category : article.categoryEn} · {isRtl ? 'تجربة العميل والبزنس' : 'Customer Experience & Business'}
          </p>

          {/* H1 Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-[#102A43] leading-[1.3] tracking-normal">
            {isRtl ? article.title : article.titleEn}
          </h1>

          {/* Deck Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {isRtl ? article.description : article.descriptionEn}
          </p>

          {/* Byline Row */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-slate-500 border-t border-[#E4E7EB]">
            <span className="text-[#102A43]">
              {isRtl ? `بقلم ${article.author}` : `By ${article.author}`}
            </span>
            <span>·</span>
            <span>{formatNumbers(article.date, lang)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C7362E]" />
              {formatNumbers(isRtl ? article.readTime : article.readTimeEn, lang)}
            </span>
          </div>

          {/* Banner Graphic matching user uploaded image */}
          {isGlossary && (
            <div className="pt-2">
              <GlossaryHeaderBanner lang={lang} />
            </div>
          )}

        </div>
      </section>

      {/* Main Container: 1200px max width with Sticky TOC Layout */}
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        
        {/* Mobile Collapsible TOC (below lg screens) */}
        <div className="lg:hidden mb-8 border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer text-xs font-extrabold text-[#102A43] uppercase tracking-wider list-none">
              <span>{isRtl ? 'محتويات المقال (جدول التنقل)' : 'Table of Contents'}</span>
              <span className="text-[#C7362E] font-mono text-sm group-open:hidden">+</span>
              <span className="text-[#C7362E] font-mono text-sm hidden group-open:inline">−</span>
            </summary>
            <nav className="mt-4 pt-3 border-t border-[#E4E7EB] space-y-2 text-xs font-bold">
              {tocSections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleScrollToSection(sec.id)}
                  className="block w-full text-right rtl:text-right ltr:text-left py-1.5 px-2 text-slate-700 hover:text-[#C7362E] transition-colors"
                >
                  • {isRtl ? sec.labelAr : sec.labelEn}
                </button>
              ))}
            </nav>
          </details>
        </div>

        {/* 2-Column CSS Layout (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body Column (8 Cols) */}
          <main className="lg:col-span-8 space-y-10 text-slate-800 leading-relaxed font-medium">
            
            {/* Intro Lead Text / Overview */}
            <div id="sec-overview" className="scroll-mt-28 space-y-4 bg-[#FAF8F5] p-6 sm:p-8 border-r-4 rtl:border-r-4 ltr:border-l-4 border-[#C7362E] border-y border-l rtl:border-l border-r-0 border-[#E4E7EB] rounded-none">
              <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] leading-snug">
                {isRtl ? article.title : article.titleEn}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {isRtl ? article.content : article.contentEn}
              </p>
              
              <div className="pt-4 border-t border-[#E4E7EB] text-xs sm:text-sm font-bold text-slate-600 space-y-1">
                <p><span className="text-[#102A43] font-extrabold">{isRtl ? 'الكاتب:' : 'Author:'}</span> {article.author}، {isRtl ? 'فريق الاستشارية والخبراء في CX Strategy Lab' : 'CX Strategy Lab Advisory Team'}</p>
                <p><span className="text-[#102A43] font-extrabold">{isRtl ? 'تاريخ النشر:' : 'Published Date:'}</span> {article.date}</p>
              </div>
            </div>

            {/* Section 1: Overview & Principles */}
            <section id="sec-how-to-use" className="scroll-mt-28 space-y-4 pt-4 border-t border-[#E4E7EB]">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
                {isRtl ? 'أهم ما يجب معرفته قبل استخدام القاموس والقراءة' : 'What You Must Know Before Diving In'}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {isRtl 
                  ? 'تجربة العميل والتسويق والبزنس ليست ثلاثة مجالات منفصلة؛ الوعد الذي يصنعه التسويق يجب أن ينفّذه التشغيل، وأثر الوفاء به يظهر في أرقام البزنس. عندما تعمل هذه المنظومة بتناغم، يتحول العميل من مجرد مشترٍ عابر إلى سفير للعلامة التجارية.'
                  : 'Customer experience, marketing, and strategy are interconnected systems. The promise marketing makes must be executed by operations, and the result directly impacts bottom-line business metrics.'}
              </p>
              
              {/* Blockquote with hairline accent border */}
              <blockquote className="my-6 p-4 border-r-2 rtl:border-r-2 ltr:border-l-2 border-[#C7362E] text-slate-800 text-base font-bold italic leading-relaxed bg-transparent">
                {isRtl 
                  ? '«التسويق يعطي الوعد، والتشغيل يوفي بالعهد، وأرقام البزنس تحصد نتائج هذا الالتزام.»'
                  : '"Marketing gives the promise, operations fulfills it, and business metrics harvest the result."'}
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#FAF8F5] p-4 border border-[#E4E7EB] rounded-none">
                  <p className="text-xs font-bold text-[#C7362E] mb-1">{isRtl ? '01. الوعد' : '01. The Promise'}</p>
                  <p className="text-xs text-slate-700 font-bold">{isRtl ? 'التسويق يصيغ الوعد الصريح والتوقع' : 'Marketing crafts explicit value promises'}</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 border border-[#E4E7EB] rounded-none">
                  <p className="text-xs font-bold text-[#C7362E] mb-1">{isRtl ? '02. الوفاء' : '02. The Fulfillment'}</p>
                  <p className="text-xs text-slate-700 font-bold">{isRtl ? 'التشغيل وتجربة العميل ينفّذان الوعد' : 'Operations & CX deliver on the promise'}</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 border border-[#E4E7EB] rounded-none">
                  <p className="text-xs font-bold text-[#C7362E] mb-1">{isRtl ? '03. الأثر' : '03. The ROI'}</p>
                  <p className="text-xs text-slate-700 font-bold">{isRtl ? 'البزنس يحصد معدل الاحتفاظ والنمو' : 'Business reaps retention and LTV'}</p>
                </div>
              </div>
            </section>

            {/* Full Editorial Glossary Content if glossary article, or Rich Article Body */}
            {isGlossary ? (
              <GlossaryArticleContent lang={lang} onNavigateContact={onNavigateContact} />
            ) : (
              /* Regular Article Body */
              <div id="sec-root-cause" className="scroll-mt-28 space-y-8 pt-6 border-t border-[#E4E7EB]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-[#102A43]">
                    {isRtl ? 'لماذا تتكرر هذه الفجوة في معظم الشركات؟' : 'Why Does This Gap Persist in Most Companies?'}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {isRtl
                      ? 'عندما تركز المؤسسات على الحلول السطحية مثل حملات التخفيضات المكثفة أو تغليف المنتج دون معالجة جذر الاحتكاك التشغيلي، فإنها ترفع تكلفة الاستحواذ (CAC) وتخفض القيمة العمرية للعميل (LTV). الاستدامة الحقيقية تبدأ من مراجعة نقاط التلامس المباشرة.'
                      : 'Focusing on superficial fixes like heavy discounting or product packaging without addressing operational friction increases Customer Acquisition Cost (CAC) while eroding Lifetime Value (LTV).'}
                  </p>
                </div>

                <div id="sec-framework" className="scroll-mt-28 space-y-4 pt-4 border-t border-[#E4E7EB]">
                  <h3 className="text-xl font-heading font-bold text-[#102A43]">
                    {isRtl ? 'ثلاث خطوات عملية لبدء التشخيص وتحديد الفجوات:' : 'Three Actionable Steps to Start Diagnosis:'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 bg-[#FAF8F5] p-4 border border-[#E4E7EB] rounded-none">
                      <span className="w-6 h-6 rounded-none bg-[#C7362E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="text-sm font-bold text-[#102A43]">{isRtl ? 'تحديد نقاط التسريب' : 'Identify Revenue Leaks'}</h4>
                        <p className="text-xs text-slate-600 mt-1">{isRtl ? 'رصد المراحل التي ينسحب فيها العميل أو يعبر عن استيائه في رحلة الشراء' : 'Map the specific touchpoints where customers churn or express friction.'}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-[#FAF8F5] p-4 border border-[#E4E7EB] rounded-none">
                      <span className="w-6 h-6 rounded-none bg-[#C7362E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="text-sm font-bold text-[#102A43]">{isRtl ? 'ربط مؤشرات التجربة بالأرقام المالية' : 'Link CX Metrics to Financials'}</h4>
                        <p className="text-xs text-slate-600 mt-1">{isRtl ? 'ربط رضا العميل ومؤشر الجهد بمعدل العودة واستبقاء العملاء' : 'Connect Customer Effort Score (CES) directly to repeat purchases and LTV.'}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-[#FAF8F5] p-4 border border-[#E4E7EB] rounded-none">
                      <span className="w-6 h-6 rounded-none bg-[#C7362E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="text-sm font-bold text-[#102A43]">{isRtl ? 'إعادة تصميم نقاط التلامس' : 'Redesign Critical Touchpoints'}</h4>
                        <p className="text-xs text-slate-600 mt-1">{isRtl ? 'تبسيط الخطوات وتدريب فريق الصف الأول على خلق قيمة ملموسة' : 'Simplify procedures and train frontline staff to deliver consistent value.'}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Systemic Alignment Section */}
            <div id="sec-system" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#E4E7EB]">
              <h2 className="text-2xl font-heading font-extrabold text-[#102A43]">
                {isRtl ? 'كيف ترتبط هذه العناصر والمصطلحات كنظام واحد؟' : 'How These Elements Connect as One System'}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {isRtl
                  ? 'النجاح المستدام لا يتحقق بمبادرة فردية، بل بربط المبيعات والخدمة والتسويق حول هدف واحد: تقليل الجهد على العميل وتعظيم القيمة المدركة.'
                  : 'Sustainable success comes from linking sales, service, and marketing around a unified goal: reducing effort and maximizing value.'}
              </p>
            </div>

            {/* FAQ Collapsible Accordions with + / - marker */}
            <div id="sec-faq" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#E4E7EB]">
              <h2 className="text-2xl font-heading font-extrabold text-[#102A43]">
                {isRtl ? 'أسئلة شائعة وتطبيقات عمليّة' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-3 text-sm">
                
                <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none">
                    <span>{isRtl ? 'س: كم يستغرق ظهور أثر تحسين تجربة العميل على الأرقام المالية؟' : 'Q: How long does it take to see ROI from CX improvements?'}</span>
                    <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
                    <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
                  </summary>
                  <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-600 text-xs leading-relaxed">
                    {isRtl ? 'ج: عادة تظهر النتائج الأولية في انخفاض الشكاوى وزيادة المبيعات المكررة خلال 30 إلى 90 يوماً من معالجة النقاط الحرجة.' : 'A: Initial results appear in reduced friction and higher repeat sales within 30-90 days.'}
                  </p>
                </details>

                <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none">
                    <span>{isRtl ? 'س: هل تحسين التجربة يتطلب دائماً ميزانيات تقنية ضخمة؟' : 'Q: Does improving CX always require huge tech budgets?'}</span>
                    <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
                    <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
                  </summary>
                  <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-600 text-xs leading-relaxed">
                    {isRtl ? 'ج: لا، أكثر من 70% من التحسينات الجوهرية تتم عبر وضوح العرض، وتبسيط الإجراءات وتدريب الفريق الميداني.' : 'A: No, over 70% of improvements come from simplifying steps and offer clarity.'}
                  </p>
                </details>

                <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none">
                    <span>{isRtl ? 'س: ما أول خطوة يجب اتخاذها لمعرفة جذر مشكلة الانخفاض في المبيعات؟' : 'Q: What is the first step to identify root causes of sales drop?'}</span>
                    <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
                    <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
                  </summary>
                  <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-600 text-xs leading-relaxed">
                    {isRtl ? 'ج: البدء باختبار رحلة العميل الحالية عبر زيارة خفية تشخيصية وتحديد النقاط التي يتوقف فيها العميل أو يشعر بعسر الاستخدام.' : 'A: Start with a diagnostic mystery audit to test the journey and find exact exit points.'}
                  </p>
                </details>

              </div>
            </div>

            {/* Author Bio Block */}
            <div className="p-6 border border-[#E4E7EB] bg-white rounded-none flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-[#102A43] text-white font-extrabold text-sm flex items-center justify-center shrink-0 rounded-none border border-[#102A43]">
                CX
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#102A43]">
                  {isRtl ? 'فريق الاستشارية والخبراء - CX Strategy Lab' : 'CX Strategy Lab Advisory Team'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isRtl 
                    ? 'فريق متخصص في تشخيص تجربة العميل، ربط استراتيجيات النمو بالأداء التشغيلي، ومساعدة المنشآت على تحويل رضا العميل إلى أرباح مستدامة.'
                    : 'Specialized consultants helping organizations align CX, operations, and growth strategies for long-term ROI.'}
                </p>
              </div>
            </div>

            {/* Related Article Cards (2-up grid, top border only, no card box) */}
            <div className="pt-8 border-t border-[#E4E7EB] space-y-4">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                {isRtl ? 'مقالات ذات صلة' : 'Related Articles'}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="pt-4 border-t-2 border-[#102A43] space-y-2 group cursor-pointer" onClick={onBack}>
                  <p className="text-xs font-bold text-[#C7362E]">أدلة تشخيصية</p>
                  <h4 className="text-base font-bold text-[#102A43] group-hover:text-[#C7362E] transition-colors">
                    {isRtl ? 'خمس خطوات لربط الأداء الفعلي باستراتيجية تجربة العميل' : '5 Steps to Align Execution with CX Strategy'}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {isRtl ? 'دليل عملي للرؤساء التنفيذيين ومدراء العمليات لتفادي الفجوات بين الوعد والواقع التشغيلي.' : 'A practical guide for executives to bridge operational gaps.'}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#102A43] space-y-2 group cursor-pointer" onClick={onBack}>
                  <p className="text-xs font-bold text-[#C7362E]">دراسات حالة</p>
                  <h4 className="text-base font-bold text-[#102A43] group-hover:text-[#C7362E] transition-colors">
                    {isRtl ? 'كيف أدى تحسين نقاط التلامس لزيادة قيمة الفاتورة بنسبة 18%' : 'How Touchpoint Optimization Boosted Ticket Value by 18%'}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {isRtl ? 'نتائج تطبيق برنامج الزيارات الخفية والتجربة الميدانية عبر 40 فرعاً.' : 'Results from mystery audits across 40 operational locations.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Single CTA Block */}
            <div id="sec-sources" className="scroll-mt-28 p-6 sm:p-8 border border-[#102A43] bg-white rounded-none space-y-4">
              <span className="text-xs font-bold text-[#C7362E] uppercase tracking-wider">{isRtl ? 'استشارة مباشرة' : 'Direct Consultation'}</span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#102A43]">
                {isRtl ? 'جاهز تحدّد جذر المشكلة في مشروعك؟' : 'Ready to Identify the Root Cause in Your Project?'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isRtl 
                  ? 'احجز جلسة تشخيصية قصيرة نناقش فيها وضع مشروعك ونحدد نقطة البداية الصحيحة لتطوير تجربة العميل والنمو.'
                  : 'Book a diagnostic session to discuss your current setup and identify the right starting point for growth.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onNavigateContact}
                  className="w-full sm:w-auto bg-[#C7362E] hover:bg-[#a82922] text-white font-bold text-sm px-6 py-3 transition-colors rounded-none shadow-xs"
                >
                  {isRtl ? 'احجز استشارة لمشروعك' : 'Book a Consultation'}
                </button>
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto text-[#102A43] hover:text-[#C7362E] text-xs font-bold px-4 py-3 border border-slate-300 hover:border-[#C7362E] transition-colors rounded-none"
                >
                  {isRtl ? 'العودة لجميع المقالات' : 'Back to All Articles'}
                </button>
              </div>
            </div>

          </main>

          {/* Sticky Table of Contents Sidebar Column (4 Cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto space-y-6 dir-rtl">
            
            <div className="bg-white border border-[#E4E7EB] p-6 text-right rtl:text-right ltr:text-left rounded-none">
              
              {/* Sidebar Header */}
              <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 pb-2 border-b border-[#E4E7EB]">
                {isRtl ? 'في هذه الصفحة' : 'On this page'}
              </h3>

              {/* Table of Contents Nav Links */}
              <nav className="space-y-1 text-xs font-bold border-r-2 rtl:border-r-2 ltr:border-l-2 border-[#E4E7EB] pr-3 rtl:pr-3 ltr:pl-3">
                {tocSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollToSection(sec.id)}
                      className={`w-full text-right rtl:text-right ltr:text-left py-2 transition-all block rounded-none ${
                        isActive
                          ? 'text-[#C7362E] font-extrabold -mr-[14px] rtl:-mr-[14px] ltr:-ml-[14px] border-r-2 rtl:border-r-2 ltr:border-l-2 border-[#C7362E] pr-3 rtl:pr-3 ltr:pl-3'
                          : 'text-slate-600 hover:text-[#102A43]'
                      }`}
                    >
                      {isRtl ? sec.labelAr : sec.labelEn}
                    </button>
                  );
                })}
              </nav>

            </div>

            {/* Quick Consultation Sidebar Box */}
            <div className="bg-[#102A43] text-white p-6 space-y-4 text-right rtl:text-right ltr:text-left rounded-none">
              <p className="text-xs font-bold text-[#C7362E]">
                {isRtl ? 'استشارة متخصصة' : 'Specialized Advisory'}
              </p>
              <h4 className="text-base font-bold text-white leading-snug">
                {isRtl ? 'نساعدك على ربط التجربة بأرقام البزنس' : 'Connecting CX to Business Results'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl ? 'احصل على تشخيص دقيق وتوصيات عملية مخصصة لمنشأتك.' : 'Get a custom diagnostic audit for your organization.'}
              </p>
              <button
                onClick={onNavigateContact}
                className="w-full bg-[#C7362E] hover:bg-[#a82922] text-white py-2.5 px-4 text-xs font-bold transition-colors rounded-none"
              >
                {isRtl ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>

          </aside>

        </div>
      </div>

      {/* Full-bleed Newsletter Strip on Paper Background */}
      <section className="bg-[#FAF8F5] border-t border-[#E4E7EB] py-12 px-6 mt-16 rounded-none">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center md:text-right rtl:md:text-right ltr:md:text-left">
            <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider">
              {isRtl ? 'النشرة البريدية الاستراتيجية' : 'Strategic Newsletter'}
            </p>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#102A43]">
              {isRtl ? 'احصل على التحليلات والرؤى الاستشارية أسبوعياً' : 'Receive Weekly Advisory Insights'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {isRtl ? 'أفكار مجربة وتطبيقات عملية حول تجربة العميل ونمو البزنس في بريدك' : 'Actionable concepts and frameworks on CX & business growth directly in your inbox.'}
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px]">
            {emailSubmitted ? (
              <div className="flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 p-3.5 text-xs font-bold rounded-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isRtl ? 'تم الاشتراك بنجاح! شكراً لاهتمامك' : 'Subscribed successfully! Thank you.'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-white border border-[#E4E7EB] px-4 py-2.5 text-xs text-[#102A43] placeholder:text-slate-400 focus:outline-hidden focus:border-[#C7362E] rounded-none w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="bg-[#C7362E] hover:bg-[#a82922] text-white text-xs font-bold px-5 py-2.5 transition-colors rounded-none flex items-center justify-center gap-2 shrink-0"
                >
                  <span>{isRtl ? 'اشترك الآن' : 'Subscribe'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

