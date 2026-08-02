import React, { useState } from 'react';
import { Language } from '../types';
import { PackagesSection } from './PackagesSection';
import { 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Target, 
  Layers, 
  Zap, 
  Send,
  MessageSquare,
  Building,
  User,
  Phone,
  Mail
} from 'lucide-react';

interface ServicesPageProps {
  lang: Language;
  onGoHome: () => void;
  onSelectPackage: (pkgName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onGoHome,
  onSelectPackage,
}) => {
  const isRtl = lang === 'ar';

  // State for active FAQ item
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // State for embedded contact form
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    serviceType: 'تشخيص بنيوي',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      question: {
        ar: 'ما الفرق بين خدماتكم والوكالات التسويقية الاستشارية العادية؟',
        en: 'How do your services differ from standard marketing & consulting agencies?'
      },
      answer: {
        ar: 'نحن لا نقدم حملات تسويقية ولا شعارات ترويجية، بل نركز حصرياً على الهندسة البنيوية والتشغيلية لتجربة العميل. نسد الفجوة بين استراتيجيات الإدارة العليا وما يستلمة العميل بالفعل في الواقع عبر معالجة جذور الخلل في السياسات، الحوافز، والعمليات.',
        en: 'We do not deliver promotional ad campaigns or branding slogans. Instead, we focus on structural and operational customer experience engineering—bridging the gap between C-suite strategy and what the client actually receives by fixing root operational flaws.'
      }
    },
    {
      question: {
        ar: 'كم تستغرق الباقات الاستشارية عادةً؟',
        en: 'How long do consulting packages usually take?'
      },
      answer: {
        ar: 'تتراوح المدة حسب الباقة المختارة: باقة التشخيص البنيوي تستغرق من 2 إلى 3 أسابيع، بينما تستغرق باقة إعادة تصميم رحلة العميل والتشغيل من 6 إلى 8 أسابيع، وباقة التمكين الشامل والتحول المستدام تمتد من 12 إلى 16 أسبوعاً مع متابعة ميدانية.',
        en: 'Timelines vary by scope: Structural Audit takes 2-3 weeks, CX & Operational Redesign takes 6-8 weeks, and Full Enablement & Transformation spans 12-16 weeks with hands-on field supervision.'
      }
    },
    {
      question: {
        ar: 'كيف نحدد الخدمة أو الباقة المناسبة لمنشأتنا؟',
        en: 'How do we determine the right service package for our company?'
      },
      answer: {
        ar: 'يمكنك مراجعة دليلك للاختيار في قسم "كيف تعرف الخدمة المناسبة" أعلاه، أو حجز جلسة تشخيصية سريعة مع فريقنا لمراجعة وضع منشأتك الحالي وتحديد نقطة البداية الأكثر أثراً وقيمة لعملياتك.',
        en: 'You can review the selector guide in the "How to Choose the Right Service" section above, or schedule a quick diagnostic call with our team to assess your current setup and identify the optimal entry point.'
      }
    },
    {
      question: {
        ar: 'هل تشمل الخدمات تدريب فريق العمل الميداني؟',
        en: 'Do your services include frontline staff training?'
      },
      answer: {
        ar: 'نعم، في باقات تصميم التشغيل والتمكين الشامل نضع أدلة إجرائية ومصفوفات سلوكية لفرق الصف الأول وندربهم على آليات تقديم التجربة المعيارية المستهدفة لضمان الاتساق الجوهري.',
        en: 'Yes, in our Operational Redesign and Full Transformation packages, we develop operational playbooks, behavior matrices, and train frontline teams to ensure standardized delivery.'
      }
    },
    {
      question: {
        ar: 'ما هي المخرجات النهائية التي نستلمها بعد الانتهاء؟',
        en: 'What are the final deliverables we receive upon completion?'
      },
      answer: {
        ar: 'تتضمن المخرجات تقريراً تشخيصياً شاملاً للفجوات، خريطة رحلة العميل الحالية والمستهدفة، دليل معايير التشغيل (SOPs)، مصفوفة مؤشرات الأداء الحقيقية (KPIs)، وخطة عمل للتنفيذ الميداني.',
        en: 'Deliverables include a comprehensive Gap Audit Report, Current & Future State CX Journey Maps, Standard Operating Procedures (SOPs), Retention KPI Matrices, and an Operational Implementation Roadmap.'
      }
    }
  ];

  const workSteps = [
    {
      step: '01',
      title: { ar: 'التشخيص البنيوي واكتشاف الجذر', en: 'Structural Audit & Root Discovery' },
      desc: { 
        ar: 'نبدأ بالبحث الميداني وتحليل الفجوة بين الوعد التسويقي والواقع التشغيلي لمعرفة الجذر الحقيقي للمشكلة.', 
        en: 'We begin with field research and gap analysis between marketing promises and operational reality to isolate the root problem.' 
      },
      icon: Search
    },
    {
      step: '02',
      title: { ar: 'إعادة تصميم التشغيل ورحلة العميل', en: 'Operational & CX Redesign' },
      desc: { 
        ar: 'نعيد صياغة نقاط التماس، السياسات الداعمة، والحوافز الداخلية لتكون خادمة للانطباع النهائي المعياري.', 
        en: 'We redesign touchpoints, supporting policies, and internal incentives to directly produce the target customer experience.' 
      },
      icon: Layers
    },
    {
      step: '03',
      title: { ar: 'التفعيل والتمكين الميداني', en: 'Field Activation & Enablement' },
      desc: { 
        ar: 'نمكّن فرق الصف الأول بالأدوات الأدلة السلوكية والأدوات التشغيلية الكفيلة بتطبيق التجربة بدون تعقيد.', 
        en: 'We equip frontline teams with behavior playbooks and streamlined tools to execute the experience effortlessly.' 
      },
      icon: Zap
    },
    {
      step: '04',
      title: { ar: 'القياس وضمان الأثر المستدام', en: 'Measurement & Retention Control' },
      desc: { 
        ar: 'نضع مؤشرات قياس تقيس تكرار العميل والولاء الحقيقي، ونسلم لوحة متابعة تضمن الاستمرارية والتطوير.', 
        en: 'We set up metrics tracking real retention and loyalty, delivering a control dashboard to ensure sustainable impact.' 
      },
      icon: Target
    }
  ];

  const packageSelectorGuide = [
    {
      condition: {
        ar: 'إذا كنت تعاني من تسرب العملاء أو تراجع التكرار ولا تعرف السبب الحقيقي خلف الفجوة:',
        en: 'If you suffer from customer churn or low repeat rates and don’t know the root cause:'
      },
      recommendedPackage: {
        ar: 'الباقة التشخيصية (التقييم البنيوي وتحديد الفجوة)',
        en: 'Diagnostic Package (Structural Assessment & Gap Identification)'
      },
      actionText: { ar: 'اختر باقة التشخيص', en: 'Select Diagnostic Package' },
      pkgId: 'باقة التشخيص والتقييم البنيوي'
    },
    {
      condition: {
        ar: 'إذا كان لديك رؤية واضحة ولكن العمليات الميدانية وسلوك الموظفين لا يعكسها بشكل معاييري:',
        en: 'If you have a clear strategy but frontline ops and employee behavior fail to execute it:'
      },
      recommendedPackage: {
        ar: 'باقة إعادة تصميم رحلة العميل والتشغيل',
        en: 'CX & Operational Redesign Package'
      },
      actionText: { ar: 'اختر باقة التصميم والتشغيل', en: 'Select Redesign Package' },
      pkgId: 'باقة تصميم رحلة العميل والتشغيل'
    },
    {
      condition: {
        ar: 'إذا كنت تسعى لتحول شامل في المنظمة وبناء ثقافة تجربة عميل مستدامة مع تدريب مستمر:',
        en: 'If you aim for enterprise-wide transformation and an enduring CX culture with coaching:'
      },
      recommendedPackage: {
        ar: 'باقة التمكين الشامل والتحول المستدام',
        en: 'Full Enablement & Enterprise Transformation'
      },
      actionText: { ar: 'اختر باقة التمكين الشامل', en: 'Select Transformation Package' },
      pkgId: 'باقة التمكين الشامل والتحول المستدام'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#102A43] pt-6 pb-20 text-right rtl:text-right ltr:text-left">
      
      {/* 1. Header & Title Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#627D98] mb-6">
          <button 
            onClick={onGoHome}
            className="hover:text-[#102A43] transition-colors cursor-pointer"
          >
            {isRtl ? 'الرئيسية' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-[#C7362E] font-bold">
            {isRtl ? 'الخدمات والباقات' : 'Services & Packages'}
          </span>
        </div>
      </div>

      {/* Main Page Header Banner */}
      <div className="w-full bg-white border-y border-[#E4E7EB] py-10 sm:py-14 mb-12 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-right rtl:text-right ltr:text-left">
          
          <div className="text-xs font-bold text-[#627D98] uppercase tracking-wider mb-2">
            {isRtl ? 'الخدمات' : 'Services'}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#102A43] leading-tight mb-4 max-w-4xl">
            {isRtl ? 'نبدأ من المشكلة، لا من الحل المفترض' : 'We Start from the Problem, Not the Assumed Solution'}
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-[#486581] font-medium leading-relaxed mb-6">
            {isRtl
              ? 'نساعدك على فهم فجوات تجربة العميل والنمو قبل الاستثمار في حلول قد لا تعالج السبب الحقيقي. اختر نقطة البداية التي تناسب احتياجك: جلسة لتشخيص المشكلة، أو تقييم ميداني للتجربة، أو عقد استشاري لدعم القرارات والتطوير المستمر.'
              : 'We help you understand customer experience and growth gaps before investing in solutions that may not address the true root cause. Choose the starting point that fits your needs: a problem diagnostic session, a field audit of the experience, or an advisory retainer.'}
          </p>

          <a
            href="#packages"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#C7362E] text-white rounded-lg text-sm font-bold hover:bg-[#a82a23] transition-colors shadow-xs cursor-pointer"
          >
            {isRtl ? 'اطلب الخدمة' : 'Request Service'}
          </a>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">

        {/* 2. Packages Section */}
        <div>
          <PackagesSection lang={lang} onSelectPackage={onSelectPackage} />
        </div>

        {/* 3. New Container: كيف أعرف الخدمة المناسبة؟ */}
        <section className="bg-white border border-[#E4E7EB] rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#102A43] text-xs font-bold">
              <HelpCircle className="w-4 h-4 text-[#C7362E]" />
              <span>{isRtl ? 'دليل الاختيار الذكي' : 'Smart Selection Guide'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#102A43]">
              {isRtl ? 'كيف اعرف الخدمة المناسبة لمنشأتي؟' : 'How Do I Know the Right Service for My Business?'}
            </h2>
            <p className="text-sm sm:text-base text-[#627D98] leading-relaxed">
              {isRtl 
                ? 'اختر التحدي الذي يمثل وضعك الحالي لنساعدك في توجيه استثمارك إلى النقطة الأكثر تأثيراً:' 
                : 'Select the challenge that best describes your current setup to direct your investment to the most impactful starting point:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageSelectorGuide.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8F5] border border-[#E4E7EB] rounded-xl p-6 flex flex-col justify-between hover:border-[#102A43] transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#102A43] text-white flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#334E68] font-semibold leading-relaxed">
                    {item.condition[lang]}
                  </p>
                  <div className="pt-3 border-t border-[#E4E7EB]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#627D98]">
                      {isRtl ? 'الباقة الموصى بها:' : 'Recommended Package:'}
                    </span>
                    <h3 className="text-sm font-bold text-[#C7362E] mt-1">
                      {item.recommendedPackage[lang]}
                    </h3>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onSelectPackage(item.pkgId)}
                    className="w-full py-2.5 px-4 bg-white border border-[#D9E2EC] text-[#102A43] rounded-lg text-xs font-bold hover:bg-[#102A43] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{item.actionText[lang]}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Section: كيف نعمل (How We Work Process) */}
        <section className="space-y-10">
          <div className="text-right rtl:text-right ltr:text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[#102A43] text-xs font-bold">
              <Layers className="w-4 h-4 text-[#C7362E]" />
              <span>{isRtl ? 'منهجية التنفيذ' : 'Implementation Methodology'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-[#102A43]">
              {isRtl ? 'كيف نعمل؟' : 'How We Work'}
            </h2>
            <p className="text-sm sm:text-base text-[#627D98]">
              {isRtl 
                ? 'خطوات منهجية واضحة تضمن الانتقال السلس من التحليل التشخيصي إلى الأثر العملي المستدام.' 
                : 'A structured step-by-step roadmap ensuring seamless movement from audit to lasting impact.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workSteps.map((stepItem, idx) => {
              const IconComp = stepItem.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#E4E7EB] rounded-2xl p-6 relative flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-[#F0F4F8] group-hover:text-[#E4E7EB]">
                        {stepItem.step}
                      </span>
                      <div className="p-2.5 bg-[#F0F4F8] text-[#C7362E] rounded-xl">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#102A43] mb-2">
                      {stepItem.title[lang]}
                    </h3>
                    
                    <p className="text-xs text-[#627D98] leading-relaxed">
                      {stepItem.desc[lang]}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#F0F4F8] flex items-center gap-1.5 text-[11px] font-bold text-[#C7362E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'مخرج عملي معياري' : 'Standardized Deliverable'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Frequently Asked Questions (الأسئلة الشائعة) */}
        <section className="bg-white border border-[#E4E7EB] rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#102A43] text-xs font-bold">
              <HelpCircle className="w-4 h-4 text-[#C7362E]" />
              <span>{isRtl ? 'إجابات وموضحات' : 'Answers & Clarifications'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#102A43]">
              {isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-sm sm:text-base text-[#627D98]">
              {isRtl 
                ? 'إليك أهم الإجابات عن التساؤلات الأكثر تكراراً بشأن خدماتنا الاستشارية وآلية التعاون.' 
                : 'Key answers to common questions about our consulting model and collaboration process.'}
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-[#E4E7EB] rounded-xl overflow-hidden bg-[#FAF8F5] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-right rtl:text-right ltr:text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#102A43] hover:bg-[#F0F4F8] transition-colors cursor-pointer"
                  >
                    <span>{faq.question[lang]}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C7362E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#627D98] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-[#486581] leading-relaxed border-t border-[#E4E7EB]/50 bg-white">
                      <p className="pt-3">{faq.answer[lang]}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Embedded Form (نموذج طلب استشارة) */}
        <section className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7362E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C7362E]">
                <MessageSquare className="w-4 h-4" />
                <span>{isRtl ? 'تواصل مباشر' : 'Direct Engagement'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                {isRtl ? 'جاهز لبدء التشخيص وتطوير تجربة عملائك؟' : 'Ready to Diagnose & Elevate Your CX?'}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isRtl
                  ? 'قم بتعبئة النموذج وسيتواصل معك أحد مستشارينا خلال 24 ساعة لمناقشة وضع منشأتك وتحديد الخطوة القادمة.'
                  : 'Fill out the form below and one of our advisors will contact you within 24 hours to discuss your setup.'}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C7362E]" />
                  <span>{isRtl ? 'سرية تامة لبيانات ومعلومات المنظمة' : 'Strict confidentiality guaranteed'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7362E]" />
                  <span>{isRtl ? 'جلسة تشخيصية أولية مجانية' : 'Complimentary initial diagnostic check'}</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white text-[#102A43] rounded-2xl p-6 sm:p-8 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#C7362E] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#C7362E]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43]">
                    {isRtl ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                  </h3>
                  <p className="text-sm text-[#627D98] max-w-md mx-auto">
                    {isRtl 
                      ? 'شكراً لتواصلك معنا. قام فريقنا الاستشاري باستلام تفاصيل طلبك وسنتواصل معك قريباً جداً.' 
                      : 'Thank you for reaching out. Our team has received your inquiry and will be in touch shortly.'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C7362E] hover:underline pt-4 cursor-pointer"
                  >
                    <span>{isRtl ? 'إرسال طلب آخر' : 'Submit another request'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#102A43] mb-4 border-b border-[#E4E7EB] pb-3">
                    {isRtl ? 'نموذج طلب الاستشارة التشخيصية' : 'Diagnostic Consultation Request Form'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#334E68] mb-1">
                        {isRtl ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#9FB3C8] absolute left-3 rtl:right-3 rtl:left-auto top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isRtl ? 'أدخل اسمك' : 'Enter your name'}
                          className="w-full bg-[#FAF8F5] border border-[#D9E2EC] rounded-lg py-2.5 px-3 rtl:pr-9 ltr:pl-9 text-xs font-medium focus:outline-none focus:border-[#102A43]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334E68] mb-1">
                        {isRtl ? 'رقم الجوال / الهاتف *' : 'Phone Number *'}
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#9FB3C8] absolute left-3 rtl:right-3 rtl:left-auto top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={isRtl ? '05xxxxxxxx' : '+966...'}
                          className="w-full bg-[#FAF8F5] border border-[#D9E2EC] rounded-lg py-2.5 px-3 rtl:pr-9 ltr:pl-9 text-xs font-medium focus:outline-none focus:border-[#102A43]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#334E68] mb-1">
                        {isRtl ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#9FB3C8] absolute left-3 rtl:right-3 rtl:left-auto top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-[#FAF8F5] border border-[#D9E2EC] rounded-lg py-2.5 px-3 rtl:pr-9 ltr:pl-9 text-xs font-medium focus:outline-none focus:border-[#102A43]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334E68] mb-1">
                        {isRtl ? 'اسم المنشأة / المشروع' : 'Company / Project Name'}
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#9FB3C8] absolute left-3 rtl:right-3 rtl:left-auto top-3" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={isRtl ? 'اسم المنشأة' : 'Company name'}
                          className="w-full bg-[#FAF8F5] border border-[#D9E2EC] rounded-lg py-2.5 px-3 rtl:pr-9 ltr:pl-9 text-xs font-medium focus:outline-none focus:border-[#102A43]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#334E68] mb-1">
                      {isRtl ? 'نوع الباقة أو الخدمة المطلوبة' : 'Service / Package Requested'}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9E2EC] rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none focus:border-[#102A43]"
                    >
                      <option value="باقة التشخيص والتقييم البنيوي">
                        {isRtl ? 'باقة التشخيص والتقييم البنيوي' : 'Diagnostic Audit Package'}
                      </option>
                      <option value="باقة تصميم رحلة العميل والتشغيل">
                        {isRtl ? 'باقة تصميم رحلة العميل والتشغيل' : 'CX & Operational Redesign Package'}
                      </option>
                      <option value="باقة التمكين الشامل والتحول المستدام">
                        {isRtl ? 'باقة التمكين الشامل والتحول المستدام' : 'Full Enablement Transformation Package'}
                      </option>
                      <option value="استشارة تشخيصية مخصصة">
                        {isRtl ? 'استشارة تشخيصية مخصصة' : 'Custom Diagnostic Consultation'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#334E68] mb-1">
                      {isRtl ? 'تفاصيل التحدي أو الملاحظات' : 'Brief Challenge Description'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isRtl ? 'اكتب باختصار أبرز تحديات تجربة العميل لديك...' : 'Describe your primary CX challenge...'}
                      className="w-full bg-[#FAF8F5] border border-[#D9E2EC] rounded-lg p-3 text-xs font-medium focus:outline-none focus:border-[#102A43]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C7362E] text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#b02c25] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-4"
                  >
                    <span>{isRtl ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}</span>
                    <Send className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
