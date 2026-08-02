import React, { useState } from 'react';
import { Language } from '../types';
import { BookOpen, ArrowLeft, ArrowRight, Clock, Check, X, Calendar, User, Share2 } from 'lucide-react';
import { GlossaryViewer } from './GlossaryViewer';
import { ArticleDetailPage } from './ArticleDetailPage';
import { formatNumbers } from '../utils/numberUtils';

interface BlogPageProps {
  lang: Language;
  onGoHome: () => void;
  onNavigateContact: () => void;
}

interface ArticleItem {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  readTime: string;
  readTimeEn: string;
  content: string;
  contentEn: string;
  date: string;
  author: string;
}

const articlesData: ArticleItem[] = [
  {
    id: 'glossary',
    category: 'القاموس',
    categoryEn: 'Glossary',
    title: 'قاموس تجربة العميل والبزنس والتسويق : 55 مصطلحاً يجب أن تفهمه',
    titleEn: 'CX, Business & Marketing Dictionary: 55 Essential Terms You Must Understand',
    description: 'المرجع الشامل والعملي لـ 55 مصطلحاً أساسياً في تجربة العميل، الاستراتيجية، والتسويق الحديث.',
    descriptionEn: 'The comprehensive practical glossary of 55 core terms in CX, strategy, and modern marketing.',
    readTime: '15 دقيقة تفاعلية',
    readTimeEn: '15 min interactive',
    date: '2026-07-25',
    author: 'حنان عبدالله',
    content: `هذا القاموس يشرح أهم مصطلحات تجربة العميل والبزنس والتسويق بلغة عملية، ويربط بينها بدل تقديمها كتعريفات منفصلة. ستجد المصطلح بالعربية والإنجليزية، ومعناه، وكيف يؤثر في قرار حقيقي داخل المنشأة، من تصميم الرحلة والاحتفاظ بالعملاء إلى التموضع وتكلفة الاستحواذ والنمو.`,
    contentEn: `The CX, Business & Marketing Glossary is your reference for understanding essential terms building a sustainable business. It features 55 terms categorized across CX, Business Strategy, and Growth.`
  },
  {
    id: '1',
    category: 'مقالات',
    categoryEn: 'Articles',
    title: 'لماذا الإعلانات لا تبني البزنس؟',
    titleEn: "Why Ads Don't Build a Business",
    description: 'لماذا تفشل الحملات الإعلانية في بناء قيمة مستدامة، وكيف نبدأ من الجذور',
    descriptionEn: 'Why ad campaigns fail to build sustainable value and how to fix root causes',
    readTime: '6 دقائق قراءة',
    readTimeEn: '6 min read',
    date: '2026-07-28',
    author: 'فريق CX Strategy',
    content: `الحملات الإعلانية المبتكرة والخصومات المتكررة قد تمنحك ارتفاعاً مؤقتاً في المبيعات، لكنها لا تعالج الفجوات الهيكلية في تجربة العميل. إذا كانت المنتجات أو الخدمات تعاني من تعقيد في الاستخدام، أو قصور في الدعم الفني، فإن مضاعفة الإنفاق الإعلاني تعني مضاعفة سرعة اكتشاف العملاء لهذه العيوب. بناء بزنس مستدام يعتمد بالدرجة الأولى على وضوح العرض والقيمة، وتقليل نقاط الاحتكاك في رحلة الشراء، وتحويل العميل من مجرد مشترٍ عابر إلى سفير للعلامة التجارية.`,
    contentEn: `Ad campaigns and discounts may boost sales temporarily, but they don't fix structural gaps in customer experience. Building a sustainable business relies on value clarity and removing friction.`
  },
  {
    id: '2',
    category: 'أدلة',
    categoryEn: 'Guides',
    title: 'الفجوة بين الاستراتيجية والتنفيذ',
    titleEn: 'The Gap Between Strategy & Execution',
    description: 'دليل عملي لتشخيص الفجوة بين ما تعد به وما يعيشه العميل فعلاً',
    descriptionEn: 'A practical guide to diagnosing gaps between promises and real customer experiences',
    readTime: '12 دقيقة قراءة',
    readTimeEn: '12 min read',
    date: '2026-07-25',
    author: 'فريق CX Strategy',
    content: `تضع الإدارات التنفيذية استراتيجيات طموحة للتوسع ورضا العملاء، ولكن عند النزول للواقع التشغيلي والميداني، يكتشف العميل تناقضاً كبيراً بين الصورة الذهنية الموعودة والواقع المعاش. يشرح هذا الدليل الخطوات العملية الخمس لرصد الفجوات الهيكلية بين الأقسام، وبناء مؤشرات أداء تشغيلية ترتبط المباشرة بتجربة العميل اليومية.`,
    contentEn: `Executives set ambitious strategies, but operational reality often diverges. This guide covers five practical steps to align frontline execution with strategic intent.`
  },
  {
    id: '3',
    category: 'دراسات حالة',
    categoryEn: 'Case Studies',
    title: 'المتسوق الخفي: قراءة الواقع بعين العميل',
    titleEn: 'Mystery Shopper: Seeing Reality Through Customer Eyes',
    description: 'كيف كشفنا تسريبات المبيعات في سلسلة مطاعم عبر 40 زيارة ميدانية',
    descriptionEn: 'How we uncovered revenue leaks in a restaurant chain through 40 field visits',
    readTime: '8 دقائق قراءة',
    readTimeEn: '8 min read',
    date: '2026-07-20',
    author: 'فريق CX Strategy',
    content: `من خلال تنفيذ 40 زيارة خفية متخصصة عبر مختلف الفروع والأوقات، استطعنا رصد 7 نقاط تسريب جوهرية في رحلة العميل من استقبال الطلب وحتى ما بعد البيع. أدى علاج هذه الثغرات وتدريب طاقم الخدمة على نقاط التلامس الحرجة إلى ارتفاع متوسط قيمة الفاتورة بنسبة 18% وتحسن NPS بمقدار 24 نقطة.`,
    contentEn: `Through 40 mystery shopping audits across restaurant branches, we identified key revenue leakage points, leading to an 18% ticket value increase.`
  },
  {
    id: '4',
    category: 'مقالات',
    categoryEn: 'Articles',
    title: 'وضوح العرض والقيمة قبل كل شيء',
    titleEn: 'Clarity of Offer & Value First',
    description: 'ثلاث أسئلة تكشف ما إذا كان عرضك حقاً يستحق ما تطلبه من العميل',
    descriptionEn: 'Three questions that reveal if your offer is truly worth what you ask from customers',
    readTime: '5 دقائق قراءة',
    readTimeEn: '5 min read',
    date: '2026-07-15',
    author: 'فريق CX Strategy',
    content: `قبل أن تبدأ بطلب الشراء من العملاء أو زيادة الأسعار، يجب أن تطرح على مشروعك ثلاثة أسئلة حاسمة: هل يفهم العميل النفع المباشر خلال 5 ثوانٍ؟ هل الميزة التنافسية صريحة لا تحتاج شرحاً مطولاً؟ وهل القيمة المقدمة تتجاوز التكلفة المالية والنفسية بشكل ملموس؟`,
    contentEn: `Before asking customers to buy, answer three crucial questions: Is the direct benefit clear in 5 seconds? Is your competitive edge explicit? Does value outweigh cost?`
  },
  {
    id: '5',
    category: 'فيديوهات',
    categoryEn: 'Videos',
    title: 'حلقة الولاء: تصميم تكرار الشراء',
    titleEn: 'Loyalty Loop: Designing Repeat Purchase',
    description: 'فيديو مختصر يشرح آلية بناء تكرار الشراء بدون الاعتماد على الخصومات',
    descriptionEn: 'A short video explaining how to build repeat purchases without discounting',
    readTime: '11 دقيقة مشاهدة',
    readTimeEn: '11 min watch',
    date: '2026-07-10',
    author: 'فريق CX Strategy',
    content: `في هذا المقطع المرئي، نستعرض مفهوم "حلقة الولاء التلقائي" وكيف يمكن للشركات تصميم محفزات غير مالية تعزز عودة العميل للشراء بانتظام. الاعتماد الدائم على الخصومات يدمر هامش الربح، بينما بناء القيمة وتسهيل التجربة هو الضمان الوحيد للنمو المستدام.`,
    contentEn: `In this video, we explore designing non-monetary incentives to encourage repeat purchases without eroding profit margins through discounts.`
  },
  {
    id: '6',
    category: 'أدلة',
    categoryEn: 'Guides',
    title: 'مؤشرات تجربة العميل التي تهم فعلاً',
    titleEn: 'CX Metrics That Actually Matter',
    description: 'ما وراء الـNPS: مؤشرات تربط التجربة بنتائج الأعمال',
    descriptionEn: 'Beyond NPS: Metrics connecting customer experience directly to business metrics',
    readTime: '10 دقائق قراءة',
    readTimeEn: '10 min read',
    date: '2026-07-05',
    author: 'فريق CX Strategy',
    content: `الكثير من المنظمات تجمع استبيانات NPS كإجراء روتيني دون ربطه بالقيمة المالية. في هذا الدليل نبسط كيفية الربط بين مؤشر الجهد (CES)، ومعدل الاحتفاظ بالعملاء (Retention Rate)، وبين القيمة العمرية للعميل (LTV) لتحويل بيانات التجربة إلى قرارات استثمارية واضحة.`,
    contentEn: `Many organizations collect NPS without linking it to financial ROI. This guide connects CES, retention rate, and LTV to drive strategic decision-making.`
  }
];

export const BlogPage: React.FC<BlogPageProps> = ({ lang, onGoHome, onNavigateContact }) => {
  const isRtl = lang === 'ar';
  const [activeTab, setActiveTab] = useState('الكل');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(articlesData[0]);

  const filterCategories = [
    { id: 'الكل', label: isRtl ? 'الكل' : 'All' },
    { id: 'القاموس', label: isRtl ? `قاموس المصطلحات (${formatNumbers(55, lang)})` : 'Glossary (55)' },
    { id: 'مقالات', label: isRtl ? 'مقالات' : 'Articles' },
    { id: 'أدلة', label: isRtl ? 'أدلة' : 'Guides' },
    { id: 'دراسات حالة', label: isRtl ? 'دراسات حالة' : 'Case Studies' },
    { id: 'فيديوهات', label: isRtl ? 'فيديوهات' : 'Videos' },
    { id: 'ندوات', label: isRtl ? 'ندوات' : 'Webinars' },
  ];

  const filteredArticles = activeTab === 'الكل'
    ? articlesData
    : articlesData.filter(item => item.category === activeTab);

  // When an article is selected, render full standalone Article Page view (NO popup modal!)
  if (selectedArticle) {
    return (
      <ArticleDetailPage
        article={selectedArticle}
        lang={lang}
        onBack={() => setSelectedArticle(null)}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#102A43] text-right rtl:text-right ltr:text-left">
      {/* Blog Page Full-Bleed 100% Width Edge-to-Edge Header Banner */}
      <div className="w-full bg-white border-b border-[#E4E7EB] py-8 sm:py-10 shadow-xs mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right rtl:text-right ltr:text-left space-y-2">
          <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider">
            {isRtl ? 'المواد التعليمية' : 'Educational Materials'}
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-[#102A43] leading-[1.3]">
            {isRtl ? 'مكتبة معرفية لبناء بزنس يستحق التكرار' : 'Knowledge library to build a business worth repeating'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-3xl pt-1">
            {isRtl 
              ? 'مقالات، أدلة، ودراسات حالة حول تجربة العميل، وضوح القيمة، وبناء نموذج نمو مستدام'
              : 'Articles, guides, and case studies on customer experience, value clarity, and sustainable growth models'}
          </p>
        </div>
      </div>
      
      {/* Main Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">

        {/* Categories Tabs Filter */}
        <div className="flex items-center gap-2 border-b border-[#E4E7EB] mb-10 overflow-x-auto pb-1 no-scrollbar">
          {filterCategories.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-bold transition-all relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#C7362E] border-b-2 border-[#C7362E]'
                    : 'text-slate-600 hover:text-[#102A43]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Layout: Main Grid (2 cols) + Sidebar */}
        {activeTab === 'القاموس' ? (
          <div className="w-full">
            <GlossaryViewer lang={lang} onNavigateContact={onNavigateContact} />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Main Articles Grid (Takes 2/3 on desktop) */}
            <div className="w-full lg:w-2/3">
              {filteredArticles.length === 0 ? (
                <div className="bg-white rounded-none p-10 text-center border border-[#E4E7EB]">
                  <p className="text-slate-500 font-bold">
                    {isRtl ? 'لا توجد منشورات في هذا التصنيف حالياً' : 'No posts in this category yet'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredArticles.map(article => (
                    <div
                      key={article.id}
                      className="bg-white rounded-none p-6 border border-[#E4E7EB] hover:border-[#C7362E]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Category Badge */}
                        <p className="text-xs font-bold text-[#C7362E] mb-2">
                          {isRtl ? article.category : article.categoryEn}
                        </p>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#C7362E] transition-colors leading-snug mb-2">
                          {formatNumbers(isRtl ? article.title : article.titleEn, lang)}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                          {formatNumbers(isRtl ? article.description : article.descriptionEn, lang)}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-[#F0F4F8] flex items-center justify-between text-xs font-bold">
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="text-[#C7362E] hover:underline flex items-center gap-1"
                        >
                          <span>{article.id === 'glossary' ? (isRtl ? `استكشف القاموس (${formatNumbers(55, lang)} مصطلحاً)` : 'Explore Glossary (55 Terms)') : (isRtl ? 'اقرأ المزيد' : 'Read More')}</span>
                          <span aria-hidden="true">←</span>
                        </button>

                        <span className="text-slate-400 font-medium">
                          {formatNumbers(isRtl ? article.readTime : article.readTimeEn, lang)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar Block matching screenshot */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#EEF4FB] rounded-none p-6 sm:p-8 border border-[#D9E2EC] space-y-5 text-right rtl:text-right ltr:text-left sticky top-24">
                
                <p className="text-xs font-bold text-[#C7362E]">
                  {isRtl ? 'استشارة مباشرة' : 'Direct Consultation'}
                </p>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#102A43] leading-snug">
                  {isRtl ? 'جاهز تحدّد جذر المشكلة؟' : 'Ready to identify the root of the problem?'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {isRtl 
                    ? 'احجز جلسة تشخيصية قصيرة نناقش فيها وضع مشروعك ونحدّد نقطة البداية'
                    : 'Book a short diagnostic session to discuss your project state and define the starting point'}
                </p>

                <button
                  onClick={onNavigateContact}
                  className="w-full bg-[#C7362E] text-white py-3 px-4 rounded-none font-bold text-sm hover:bg-[#a82922] transition-colors shadow-xs"
                >
                  {isRtl ? 'احجز استشارة' : 'Book Consultation'}
                </button>

                <ul className="space-y-2 pt-2 text-xs font-bold text-[#102A43]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C7362E]">•</span>
                    <span>{isRtl ? 'تشخيص مبدئي مجاني' : 'Free initial diagnosis'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C7362E]">•</span>
                    <span>{isRtl ? 'توصيات قابلة للتنفيذ' : 'Actionable recommendations'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C7362E]">•</span>
                    <span>{isRtl ? 'سرية تامة' : 'Complete confidentiality'}</span>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        )}

      </main>

    </div>
  );
};
