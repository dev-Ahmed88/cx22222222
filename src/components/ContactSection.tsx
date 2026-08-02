import React, { useState } from 'react';
import { Language } from '../types';
import { Share2, RotateCcw, ChevronsUpDown } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  selectedPackageName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, selectedPackageName }) => {
  const isRtl = lang === 'ar';
  
  // Step state: 'form' | 'quiz' | 'result'
  const [step, setStep] = useState<'form' | 'quiz' | 'result'>('form');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Form State matching screenshot 3 exactly
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectName: '',
    sector: '',
    stage: 'فكرة',
    projectBrief: '',
    challenge: '',
    service: selectedPackageName || 'جلسة استشارية',
    expectedGoal: ''
  });

  const quizQuestions = [
    {
      category: { ar: 'وضوح العرض والقيمة', en: 'Value Proposition Clarity' },
      question: {
        ar: '1 هل عرض القيمة لديك واضح ومميّز عن المنافسين؟',
        en: '1 Is your value proposition clear and distinct from competitors?'
      },
      options: [
        {
          text: { ar: 'غير واضح ويتداخل مع المنافسين', en: 'Unclear and overlaps with competitors' },
          score: 1
        },
        {
          text: { ar: 'واضح جزئياً لكنه يحتاج صياغة', en: 'Partially clear but needs refinement' },
          score: 2
        },
        {
          text: { ar: 'واضح ومميّز ويعكس ميزة حقيقية', en: 'Clear distinct and reflects a real advantage' },
          score: 3
        }
      ]
    },
    {
      category: { ar: 'التطابق بين الرسائل والتجربة', en: 'Messaging & Experience Alignment' },
      question: {
        ar: '2 هل التجربة الفعلية تطابق ما تعد به في إعلاناتك ورسائلك التسويقية؟',
        en: '2 Does actual customer experience match what your marketing promises?'
      },
      options: [
        {
          text: { ar: 'توجد فجوة بين الوعد والتنفيذ الإداري', en: 'Significant gap between promise and execution' },
          score: 1
        },
        {
          text: { ar: 'تطابق جزئي وتوجد بعض نقاط الاحتكاك', en: 'Partial alignment with some friction points' },
          score: 2
        },
        {
          text: { ar: 'تطابق كامل وتجربة خالية تماماً من التعقيد', en: 'Full alignment with seamless delivery' },
          score: 3
        }
      ]
    },
    {
      category: { ar: 'قياس وتتبع الاحتكاك', en: 'Friction Tracking & VoC' },
      question: {
        ar: '3 كيف تقيس رضا العملاء ونقاط الألم في رحلتهم معك؟',
        en: '3 How do you measure customer satisfaction and pain points?'
      },
      options: [
        {
          text: { ar: 'لا توجد آلية قياس منتظمة نعتمد على الانطباعات', en: 'No systematic measurement reliant on guesswork' },
          score: 1
        },
        {
          text: { ar: 'نقيس بعض المؤشرات بصفة غير دورية', en: 'Occasional surveys without systematic tracking' },
          score: 2
        },
        {
          text: { ar: 'نظام قياس دوري ودقيق يحلل صوت العميل (VoC)', en: 'Rigorous VoC system tracking journey metrics' },
          score: 3
        }
      ]
    },
    {
      category: { ar: 'ثقافة ومشاركة الفريق', en: 'Team Alignment & Culture' },
      question: {
        ar: '4 هل جميع الأقسام تفهم دورها المباشر في صناعة تجربة العميل؟',
        en: '4 Do all departments understand their direct role in customer experience?'
      },
      options: [
        {
          text: { ar: 'التجربة محصورة في خدمة العملاء والمبيعات فقط', en: 'Restricted only to customer support and sales' },
          score: 1
        },
        {
          text: { ar: 'تنسيق جزئي لكن توجد جزر معزولة داخلية', en: 'Partial coordination with departmental silos' },
          score: 2
        },
        {
          text: { ar: 'جميع الأقسام محاذية تماماً ومتحمسة للتميز', en: 'Fully cross-functional alignment and accountability' },
          score: 3
        }
      ]
    },
    {
      category: { ar: 'الربط المالي و LTV', en: 'Financial Impact & Retention' },
      question: {
        ar: '5 هل يمكنك الربط بين تحسين تجربة العميل وزيادة الإيرادات أو الاستبقاء؟',
        en: '5 Can you link CX improvements directly to revenue and retention?'
      },
      options: [
        {
          text: { ar: 'صعب جداً ولا توجد بيانات تربط بينهما', en: 'Hard to link no actionable data' },
          score: 1
        },
        {
          text: { ar: 'نربطها بشكل تقريبي في بعض الحملات', en: 'Rough estimate in select campaigns' },
          score: 2
        },
        {
          text: { ar: 'ربط مباشر ودقيق بين مؤشرات التجربة والقيمة LTV', en: 'Direct link between CX indicators and customer LTV' },
          score: 3
        }
      ]
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleSelectOption = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('result');
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getDiagnosisResult = () => {
    if (totalScore >= 12) {
      return {
        title: isRtl
          ? 'لديك بنية متقدمة والأولوية لمضاعفة القيمة الدائمة (LTV)'
          : 'Solid Foundation: Priority on Maximizing Customer LTV',
        description: isRtl
          ? 'منظومتك تقدم تجربة واعدة جداً الأولوية الآن هي بناء آليات الأتمتة والابتكار المستمر لمنع تسرب العملاء'
          : 'Your system delivers a strong experience Focus on automation and continuous journey innovation'
      };
    } else if (totalScore >= 8) {
      return {
        title: isRtl
          ? 'لديك أساس لكن التجربة تُسرِّب لك المبيعات'
          : 'You have a foundation but the experience leaks sales',
        description: isRtl
          ? 'المكوّنات موجودة لكن الفجوات بين الرسائل والتجربة تُكلّفك عملاء الأولوية: إغلاق نقاط الاحتكاك'
          : 'Components exist but gaps between messaging and experience cost you customers Priority: Closing friction points'
      };
    } else {
      return {
        title: isRtl
          ? 'توجد فجوة جوهرية بين الحملات التسويقية والتنفيذ الفعلي'
          : 'Fundamental Disconnect Between Marketing & Operational CX',
        description: isRtl
          ? 'استمرارك في الضخ الإعلاني دون إعادة هيكلة التجربة يستنزف الميزانية الأولوية: بناء الأساس الاستراتيجي أولاً'
          : 'High ad spending without CX alignment drains budget Priority: Establish strategic CX foundation first'
      };
    }
  };

  const resultData = getDiagnosisResult();
  const progressPercentage = Math.round((currentQuestion / quizQuestions.length) * 100);

  const handleShareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: isRtl ? 'تشخيص تجربة العميل' : 'CX Diagnostic Result',
        text: resultData.title + ' — ' + resultData.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isRtl ? 'تم نسخ رابط النتيجة لحافظتك!' : 'Link copied to clipboard!');
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-20 bg-[#FAF9F6] text-[#102A43] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {step === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* RIGHT COLUMN (In RTL): Logo, Subtitle, Headline, Description */}
            <div className="lg:col-span-5 space-y-6 text-right rtl:text-right ltr:text-left lg:pt-6">
              
              {/* Brand Logo Header */}
              <div className="flex items-center gap-2">
                <span className="text-[#C7362E] font-bold text-2xl leading-none">┌</span>
                <span className="text-[#102A43] font-black text-2xl tracking-wider font-heading">
                  CX STRATEGY LAB
                </span>
              </div>

              {/* Red Subtitle */}
              <p className="text-[#C7362E] font-bold text-base sm:text-lg">
                {isRtl ? 'استشارات تجربة العميل' : 'Customer Experience Advisory'}
              </p>

              {/* Main Headline matching user's image */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#102A43] leading-[1.35]">
                {isRtl ? (
                  <>
                    الحملات لا تصنع قيمة،{' '}
                    <span className="text-[#C7362E]">والإعلانات لا</span>
                    <br />
                    <span className="text-[#C7362E]">تبني البزنس</span>
                  </>
                ) : (
                  <>
                    Campaigns don't create value,{' '}
                    <span className="text-[#C7362E]">and ads don't</span>
                    <br />
                    <span className="text-[#C7362E]">build businesses</span>
                  </>
                )}
              </h1>

              {/* Subtext Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
                {isRtl
                  ? 'الإعلانات، الخصومات والحملات قد تحرّك المبيعات مؤقّتًا، لكنها لا تعالج مشاكل البزنس. نساعدك على تحديد الجذور قبل الاستثمار في الحلول.'
                  : 'Ads, discounts, and campaigns may boost sales temporarily, but they do not solve core business problems. We help you identify root causes before investing in solutions.'}
              </p>
            </div>

            {/* LEFT COLUMN (In RTL): Form Fields Card Box */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
                <form onSubmit={handleFormSubmit} className="space-y-4 text-right rtl:text-right ltr:text-left">
                
                {/* 1. الاسم */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                    {isRtl ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? 'مثال: محمد العتيبي' : 'e.g. John Smith'}
                    className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                  />
                </div>

                {/* 2. رقم التواصل + البريد الإلكتروني */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                      {isRtl ? 'رقم التواصل' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isRtl ? 'مثال: 05xxxxxxxx' : 'e.g. 05xxxxxxxx'}
                      className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                      {isRtl ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                    />
                  </div>
                </div>

                {/* 3. اسم المشروع + القطاع */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                      {isRtl ? 'اسم المشروع' : 'Project Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      placeholder={isRtl ? 'مثال: مطعم الطازج' : 'e.g. Fresh Restaurant'}
                      className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                      {isRtl ? 'القطاع' : 'Sector'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      placeholder={isRtl ? 'مثال: الأغذية والضيافة' : 'e.g. Food & Hospitality'}
                      className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                    />
                  </div>
                </div>

                {/* 4. مرحلة المشروع */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                    {isRtl ? 'مرحلة المشروع' : 'Project Stage'}
                  </label>
                  <div className="relative">
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full py-2.5 px-3.5 pl-8 rtl:pl-8 rtl:pr-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right appearance-none cursor-pointer"
                    >
                      <option value="فكرة">{isRtl ? 'فكرة' : 'Idea'}</option>
                      <option value="تحت التأسيس">{isRtl ? 'تحت التأسيس' : 'Pre-launch'}</option>
                      <option value="MVP">{isRtl ? 'MVP' : 'MVP'}</option>
                      <option value="قائم">{isRtl ? 'قائم' : 'Operational'}</option>
                      <option value="مرحلة نمو">{isRtl ? 'مرحلة نمو' : 'Growth'}</option>
                    </select>
                    <ChevronsUpDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none rtl:left-3 rtl:right-auto" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-normal text-right">
                    {isRtl
                      ? 'اختر ما يصف مشروعك: فكرة، تحت التأسيس، MVP، قائم، مرحلة نمو.'
                      : 'Select what describes your project: Idea, Pre-launch, MVP, Operational, Growth stage.'}
                  </p>
                </div>

                {/* 5. نبذة عن المشروع */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                    {isRtl ? 'نبذة عن المشروع' : 'Project Brief'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectBrief}
                    onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                    placeholder={isRtl ? 'مثال: مطعم يقدم وجبات صحية' : 'e.g. Restaurant serving healthy meals'}
                    className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                  />
                </div>

                {/* 6. ما التحدي الذي تواجهه؟ */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                    {isRtl ? 'ما التحدي الذي تواجهه؟' : 'What challenge are you facing?'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder={isRtl ? 'مثال: وضوح الميزة التنافسية - مبيعات - الاستحواذ على عملاء جدد' : 'e.g. Competitive advantage - sales - customer acquisition'}
                    className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                  />
                </div>

                {/* 7. الخدمة المطلوبة */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                    {isRtl ? 'الخدمة المطلوبة' : 'Required Service'}
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full py-2.5 px-3.5 pl-8 rtl:pl-8 rtl:pr-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right appearance-none cursor-pointer"
                    >
                      <option value="جلسة استشارية">{isRtl ? 'جلسة استشارية' : 'Advisory Session'}</option>
                      <option value="المتسوق الخفي">{isRtl ? 'المتسوق الخفي' : 'Mystery Shopping'}</option>
                      <option value="العقود الاستشارية">{isRtl ? 'العقود الاستشارية' : 'Retainer Advisory Contract'}</option>
                      <option value="غير ذلك">{isRtl ? 'غير ذلك' : 'Other'}</option>
                    </select>
                    <ChevronsUpDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none rtl:left-3 rtl:right-auto" />
                  </div>
                </div>

                {/* 8. ما النتيجة التي تريد الوصول إليها؟ */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#102A43] mb-1.5">
                    {isRtl ? 'ما النتيجة التي تريد الوصول إليها؟' : 'What result do you want to achieve?'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.expectedGoal}
                    onChange={(e) => setFormData({ ...formData, expectedGoal: e.target.value })}
                    placeholder={isRtl ? 'مثال: رفع المبيعات - تقليل الاعتماد على الإعلانات - وضوح المزایا التنافسية' : 'e.g. Increase sales - reduce ad reliance - clarify competitive advantages'}
                    className="w-full py-2.5 px-3.5 rounded-md border border-slate-200 text-xs sm:text-sm font-medium text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#C7362E] focus:ring-1 focus:ring-[#C7362E] bg-white transition-colors text-right rtl:text-right"
                  />
                </div>

                {/* 9. Submit Red Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-md bg-[#C7362E] text-white font-bold text-sm sm:text-base hover:bg-[#b02b24] shadow-sm transition-colors text-center mt-4 cursor-pointer"
                >
                  {isRtl ? 'ابدأ من الأساس' : 'Start from the Foundation'}
                </button>

              </form>
              </div>
            </div>

          </div>
        )}

        {/* Step 2: Quiz Question View (Matching Image 2) */}
        {step === 'quiz' && (
          <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4 text-center">
            
            {/* Header matching Image 2 */}
            <div className="space-y-2 mb-8">
              <p className="text-xs font-semibold text-slate-500">
                {isRtl ? 'تمّ الاستلام' : 'Request Received'}
              </p>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#102A43]">
                {isRtl ? 'شكراً لتواصلك' : 'Thank you for reaching out'}
              </h2>

              <p className="text-xl sm:text-2xl font-bold text-[#C7362E] pt-1">
                {isRtl ? 'احصل على تشخيص مبدئي لمشروعك' : 'Get an initial diagnosis for your project'}
              </p>
            </div>

            {/* Progress bar matching Image 2 */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs text-slate-500 font-bold mb-2">
                <span>
                  {isRtl ? `السؤال ${currentQuestion + 1} من ${quizQuestions.length}` : `Question ${currentQuestion + 1} of ${quizQuestions.length}`}
                </span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C7362E] transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Question Box Card matching Image 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs text-right rtl:text-right ltr:text-left relative pt-8">
              
              {/* Category tag without box frame */}
              <div className="text-xs font-bold text-[#C7362E] mb-2">
                {quizQuestions[currentQuestion].category[lang]}
              </div>

              {/* Question Headline */}
              <h3 className="text-lg sm:text-xl font-bold text-[#102A43] mb-6 leading-snug">
                {quizQuestions[currentQuestion].question[lang]}
              </h3>

              {/* Options list in rounded border boxes */}
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-right rtl:text-right ltr:text-left p-4 rounded-xl border border-slate-200 hover:border-[#102A43] hover:bg-slate-50 transition-all text-sm font-bold text-[#102A43] flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text[lang]}</span>
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 group-hover:border-[#C7362E] group-hover:bg-[#C7362E] transition-all shrink-0 ml-3 rtl:mr-3 rtl:ml-0" />
                  </button>
                ))}
              </div>

            </div>

          </div>
        )}

        {/* Step 3: Result View (Matching Image 1) */}
        {step === 'result' && (
          <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4 text-center">
            
            {/* Header matching Image 1 */}
            <div className="space-y-2 mb-8">
              <p className="text-xs font-semibold text-slate-500">
                {isRtl ? 'تمّ الاستلام' : 'Request Received'}
              </p>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#102A43]">
                {isRtl ? 'شكراً لتواصلك' : 'Thank you for reaching out'}
              </h2>

              <p className="text-xl sm:text-2xl font-bold text-[#C7362E] pt-1">
                {isRtl ? 'احصل على تشخيص مبدئي لمشروعك' : 'Get an initial diagnosis for your project'}
              </p>
            </div>

            {/* 100% Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs text-slate-500 font-bold mb-2">
                <span>{isRtl ? 'السؤال 5 من 5' : 'Question 5 of 5'}</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1 bg-[#C7362E] rounded-full" />
            </div>

            {/* Diagnosis Result Card matching Image 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs text-right rtl:text-right ltr:text-left relative pt-8">
              
              <div className="text-xs font-bold text-[#C7362E] mb-2">
                {isRtl ? 'التشخيص' : 'Diagnosis'}
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43] mb-4 leading-snug">
                {resultData.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                {resultData.description}
              </p>

              <div className="mb-8 text-center">
                <button
                  onClick={handleShareResult}
                  className="px-8 py-3.5 rounded-xl bg-[#C7362E] text-white font-extrabold text-sm hover:bg-[#b02c25] shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{isRtl ? 'شارك النتيجة مع فريقك' : 'Share Result With Your Team'}</span>
                </button>
              </div>

              <hr className="border-slate-100 my-6" />

              {/* Footer in Card matching Image 1 */}
              <div className="flex flex-col items-center justify-center gap-1 text-center">
                <div className="flex items-center gap-1 text-[#102A43] font-black text-xs tracking-wider font-heading">
                  <span className="text-[#C7362E] font-bold">┌</span>
                  <span>CX STRATEGY LAB</span>
                </div>
                <span className="text-slate-400 text-xs font-mono">
                  www.cxstrategy.com
                </span>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setStep('form')}
                  className="text-xs font-bold text-slate-400 hover:text-[#102A43] inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'إعادة النموذج والاستفسارات' : 'Reset Form'}</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
