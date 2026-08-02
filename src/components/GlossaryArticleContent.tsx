import React from 'react';
import { Language } from '../types';

interface GlossaryArticleContentProps {
  lang: Language;
  onNavigateContact: () => void;
}

export const GlossaryArticleContent: React.FC<GlossaryArticleContentProps> = ({
  lang,
  onNavigateContact,
}) => {
  const isRtl = lang === 'ar';

  return (
    <div className="space-y-12 text-slate-800 leading-relaxed font-medium">

      {/* Section: أهم ما يجب معرفته قبل استخدام القاموس */}
      <section id="sec-how-to-use" className="scroll-mt-28 space-y-6 pt-6 border-t border-[#E4E7EB]">
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
          {isRtl ? 'أهم ما يجب معرفته قبل استخدام القاموس' : 'What You Must Know Before Diving In'}
        </h2>
        
        <ul className="space-y-3 text-sm sm:text-base text-slate-700 list-disc pr-5 rtl:pr-5 ltr:pl-5 marker:text-[#C7362E]">
          <li>
            {isRtl 
              ? 'تجربة العميل والتسويق والبزنس ليست ثلاثة مجالات منفصلة؛ الوعد الذي يصنعه التسويق يجب أن يستطيع التشغيل الوفاء به، وأن يظهر أثره في أرقام البزنس.'
              : 'CX, Marketing, and Business are connected. Marketing promises must be fulfilled by operations and reflected in business numbers.'}
          </li>
          <li>
            {isRtl 
              ? 'المؤشر ليس استراتيجية. ارتفاع التفاعل أو الرضا لا يعني تلقائيًا ارتفاع الاحتفاظ أو الربحية.'
              : 'A metric is not a strategy. High engagement or CSAT does not automatically mean higher retention or profitability.'}
          </li>
          <li>
            {isRtl 
              ? 'المصطلحات المتشابهة ليست مترادفات: تجربة العميل تختلف عن خدمة العملاء، والتموضع يختلف عن الرسالة، والاحتفاظ يختلف عن الولاء.'
              : 'Similar terms are not synonyms: CX differs from Customer Service, Positioning from Messaging, and Retention from Loyalty.'}
          </li>
          <li>
            {isRtl 
              ? 'استخدم القاموس لفهم القرار خلف المصطلح، ثم انتقل إلى الدليل المتخصص عندما تحتاج إلى التطبيق أو القياس.'
              : 'Use this glossary to understand decisions behind terms, then apply specialized frameworks.'}
          </li>
        </ul>

        <div className="space-y-3 pt-4">
          <h3 className="text-xl font-heading font-bold text-[#102A43]">
            {isRtl ? 'كيف تستخدم هذا القاموس؟' : 'How to Use This Glossary?'}
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isRtl 
              ? 'ابحث عن المصطلح العربي أو الإنجليزي، أو انتقل مباشرة إلى أحد الأقسام الثلاثة. رُتبت المصطلحات داخل كل قسم بحسب الموضوع، لا بحسب الحروف فقط، لأن فهم العلاقة بينها أهم من حفظها.'
              : 'Browse by topic rather than alphabetical order alone, as understanding relationships between terms matters most.'}
          </p>
        </div>

        {/* Callout Quote */}
        <blockquote className="my-6 p-5 border-r-2 rtl:border-r-2 ltr:border-l-2 border-[#C7362E] text-[#102A43] text-base font-bold italic leading-relaxed bg-[#FAF8F5] rounded-none">
          {isRtl 
            ? '«مبدأ CX Strategy Lab: لا نستخدم المصطلح لأنه رائج. نستخدمه عندما يساعدنا على رؤية مشكلة، أو اتخاذ قرار، أو قياس أثر.»'
            : '"CX Strategy Lab Principle: We don’t use terms because they are trendy. We use them when they help reveal a problem, drive a decision, or measure impact."'}
        </blockquote>
      </section>

      {/* Section 1: مصطلحات تجربة العميل (1 - 20) */}
      <section id="sec-cx-terms" className="scroll-mt-28 space-y-8 pt-8 border-t border-[#E4E7EB]">
        <div className="border-b border-[#102A43] pb-3">
          <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider mb-1">المحور الأول</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
            {isRtl ? 'مصطلحات تجربة العميل (1 - 20)' : 'Customer Experience Terms (1 - 20)'}
          </h2>
        </div>

        <div className="space-y-8 text-sm sm:text-base">

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              1. تجربة العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Experience (CX)</bdi>
            </h3>
            <p className="text-slate-700">
              تجربة العميل هي الانطباع الكلي الذي يتكوّن عبر جميع تفاعلات العميل مع المنشأة قبل الشراء وأثناءه وبعده. تشمل ما حدث فعلًا، وكيف أدركه العميل، وما بقي في ذاكرته.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا تقتصر على تعامل الموظف. الإعلان، والوصول، والسعر، والمنتج، والسياسة، والتقنية، والشكوى كلها تصنع التجربة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              2. إدارة تجربة العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Experience Management (CXM)</bdi>
            </h3>
            <p className="text-slate-700">
              إدارة تجربة العميل هي النظام الذي تستخدمه المنشأة لفهم التجربة وتصميمها وقياسها وتحسينها باستمرار. تتضمن ملكية واضحة، وبيانات، وآلية لاتخاذ القرار، وليست مجرد برنامج استبيانات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الفرق بسيط: تجربة العميل هي ما يعيشه العميل؛ إدارة تجربة العميل هي ما تفعله المنشأة لتشكيل تلك التجربة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              3. خدمة العملاء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Service</bdi>
            </h3>
            <p className="text-slate-700">
              خدمة العملاء هي المساعدة التي تقدمها المنشأة قبل الشراء أو بعده، مثل الإجابة عن استفسار أو معالجة شكوى. إنها نقطة مهمة داخل تجربة العميل، لكنها ليست التجربة كاملة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              إذا كانت سياسة الإرجاع معقدة، فلن يصلح موظف لطيف أصل المشكلة. سيخفف أثرها فقط.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              4. تجربة المستخدم <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">User Experience (UX)</bdi>
            </h3>
            <p className="text-slate-700">
              تجربة المستخدم هي جودة استخدام منتج أو خدمة أو واجهة محددة: هل هي واضحة، سهلة، ومناسبة للمهمة؟ تستخدم غالبًا في المنتجات الرقمية، لكنها لا تقتصر عليها.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              قد ينجح التطبيق في سهولة الحجز وتفشل تجربة العميل لأن الموعد غير متاح فعليًا أو الفرع لا يملك بيانات الحجز.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              5. رحلة العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Journey</bdi>
            </h3>
            <p className="text-slate-700">
              رحلة العميل هي المراحل التي يمر بها لتحقيق هدف مرتبط بالمنشأة، من ظهور الحاجة إلى ما بعد الاستخدام. الرحلة تُرسم من منظور هدف العميل، لا من منظور الهيكل الداخلي.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              «الحجز عبر الموقع» قناة. أما «العثور على موعد مناسب والتأكد منه» فهو جزء من رحلة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              6. خريطة رحلة العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Journey Map</bdi>
            </h3>
            <p className="text-slate-700">
              خريطة رحلة العميل تمثيل بصري يربط المراحل ونقاط التماس والتوقعات والمشاعر والاحتكاكات بما يحدث خلف الكواليس. قيمتها في كشف موضع الخلل ومالكه، لا في شكلها.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الخريطة التي لا تنتهي بأولوية ومسؤول ومؤشر تصبح لوحة اجتماعات.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              7. نقطة التماس <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Touchpoint</bdi>
            </h3>
            <p className="text-slate-700">
              نقطة التماس هي أي لحظة يتفاعل فيها العميل مع العلامة أو يتلقى منها إشارة: إعلان، تقييم في خرائط Google، اتصال، موقف سيارة، تغليف، فاتورة أو رسالة متابعة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              ليست كل نقاط التماس متساوية. أعطي الأولوية للنقاط التي تغيّر الثقة أو القرار أو احتمالية الاستمرار.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              8. لحظة الحقيقة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Moment of Truth</bdi>
            </h3>
            <p className="text-slate-700">
              لحظة الحقيقة هي نقطة في الرحلة يتغير عندها حكم العميل على العلامة بدرجة كبيرة. قد تكون أول استخدام للمنتج، أو وقت تسليم الطلب، أو طريقة معالجة خطأ.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا تبحث عن عشرين لحظة حقيقة. إذا أصبح كل شيء حاسمًا، فلن يكون لديك ترتيب للأولويات.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              9. نقطة الاحتكاك <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Friction Point</bdi>
            </h3>
            <p className="text-slate-700">
              نقطة الاحتكاك هي عائق يزيد وقت العميل أو جهده أو حيرته أو شعوره بالمخاطرة. قد تكون خطوة زائدة، أو معلومة ناقصة، أو سياسة غامضة، أو انتقالًا متكررًا بين الموظفين.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              بعض الاحتكاك مقصود وضروري، مثل التحقق من الهوية في معاملة مالية. المطلوب ليس حذف كل خطوة، بل إزالة الجهد الذي لا يضيف قيمة أو أمانًا مفهومًا.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              10. نقطة الألم <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Pain Point</bdi>
            </h3>
            <p className="text-slate-700">
              نقطة الألم هي مشكلة أو حاجة تسبب للعميل ضررًا أو إحباطًا أثناء محاولته الوصول إلى نتيجة. قد توجد قبل التعامل مع المنشأة أصلًا، مثل صعوبة مقارنة أسعار الذهب، أو داخل الرحلة، مثل غموض المصنعية.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الاحتكاك يصف العائق في المسار، أما الألم فيصف المشكلة التي يعانيها العميل. قد يرتبطان، لكنهما ليسا الشيء نفسه.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              11. مخطط الخدمة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Service Blueprint</bdi>
            </h3>
            <p className="text-slate-700">
              مخطط الخدمة يربط ما يراه العميل بما يحدث في الواجهة وخلف الكواليس: الموظفون، الأنظمة، السياسات، الموردون والاعتماد بين العمليات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              استخدميه عندما تعرفين أين يتعطل العميل، لكن السبب موزع بين أكثر من قسم. خريطة الرحلة تكشف التجربة؛ مخطط الخدمة يساعد على إعادة تصميم آلية تقديمها.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              12. صوت العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Voice of the Customer (VoC)</bdi>
            </h3>
            <p className="text-slate-700">
              صوت العميل هو نظام جمع وتحليل احتياجات العملاء وتوقعاتهم وتجاربهم من مصادر مثل المقابلات والاستبيانات والشكاوى والمراجعين والمكالمات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              قراءة التعليقات ليست برنامجًا لصوت العميل. البرنامج الحقيقي يحول الأنماط إلى أولوية، ثم قرار، ثم متابعة لنتيجة التغيير.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              13. رضا العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Satisfaction (CSAT)</bdi>
            </h3>
            <p className="text-slate-700">
              رضا العميل هو تقييمه لمنتج أو خدمة أو تفاعل محدد. يقاس عادة مباشرة بعد التجربة، ويعبّر عن الرضا في تلك اللحظة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              العميل الراضي ليس بالضرورة وفيًا. قد يكون راضيًا ويختار منافسًا أقرب، أو يستمر رغم عدم رضاه لأن تكلفة التغيير مرتفعة.
            </p>
          </article>

          <article className="space-y-3 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              14. صافي نقاط الترويج <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Net Promoter Score (NPS)</bdi>
            </h3>
            <p className="text-slate-700">
              صافي نقاط الترويج مؤشر يقيس استعداد العميل للتوصية بالعلامة على مقياس من 0 إلى 10. يحسب بطرح نسبة المنتقدين (0 إلى 6) من نسبة المروجين (9 أو 10).
            </p>
            <div className="p-3 bg-[#FAF8F5] border border-[#E4E7EB] text-center font-mono text-xs sm:text-sm font-bold text-[#102A43] dir-ltr">
              NPS = % Promoters − % Detractors
            </div>
            <p className="text-xs text-slate-500 font-bold">
              الرقم وحده لا يخبرك بما يجب إصلاحه. أضيفي سؤال السبب، واربطِي النتيجة بسلوك الاحتفاظ أو الشراء.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              15. مؤشر جهد العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Effort Score (CES)</bdi>
            </h3>
            <p className="text-slate-700">
              مؤشر جهد العميل يقيس مدى سهولة أو صعوبة إنجاز مهمة مثل الحجز أو الإرجاع أو حل مشكلة. يفيد عندما يكون الجهد نفسه موضع القرار.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا تستخدميه للسؤال عن جودة المنتج؛ اسألي به عن سهولة العملية.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              16. إدارة التوقعات <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Expectation Management</bdi>
            </h3>
            <p className="text-slate-700">
              إدارة التوقعات هي مواءمة ما يتوقعه العميل مع ما تستطيع المنشأة تقديمه فعلًا، عبر الرسائل والمعلومات والوعود والتحديثات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              المبالغة الإعلانية قد ترفع الاستحواذ وتخفض الرضا لاحقًا. الوعد ليس نصًا تسويقيًا فقط؛ إنه معيار سيحاكم العميل التجربة على أساسه.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              17. اتساق التجربة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Experience Consistency</bdi>
            </h3>
            <p className="text-slate-700">
              اتساق التجربة هو قدرة المنشأة على تقديم وعد ومستوى موثوق عبر القنوات والفروع والأوقات. لا يعني أن يتحدث كل موظف بالنص نفسه، بل أن يحصل العميل على النتيجة الأساسية نفسها.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الاتساق يبني الثقة. لكنه يتحول إلى جمود إذا ألغى التقدير البشري أو صلاحية معالجة الحالات المختلفة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              18. تجربة متعددة القنوات <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Omnichannel Experience</bdi>
            </h3>
            <p className="text-slate-700">
              التجربة متعددة القنوات هي تجربة مترابطة تسمح للعميل بالانتقال بين الموقع والتطبيق والهاتف والفرع دون فقد المعلومات أو إعادة المهمة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              وجود قنوات كثيرة يسمى Multichannel. ترابطها هو ما يجعل التجربة Omnichannel.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              19. استعادة الخدمة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Service Recovery</bdi>
            </h3>
            <p className="text-slate-700">
              استعادة الخدمة هي الطريقة المنظمة التي تتعامل بها المنشأة مع فشل الخدمة لإصلاح النتيجة والعلاقة. تشمل اكتشاف الخطأ، والاعتراف به، والحل، والتعويض عند الحاجة، ومنع تكراره.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              قسيمة خصم ليست دائمًا استعادة. إذا لم يفهم العميل ما حدث، أو اضطر لمطاردة المنشأة، فقد يتحول التعويض نفسه إلى احتكاك جديد.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              20. إغلاق حلقة الملاحظات <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Closed-Loop Feedback</bdi>
            </h3>
            <p className="text-slate-700">
              إغلاق الحلقة يعني ألا تتوقف ملاحظة العميل عند جمعها. تُراجع، وتُحال إلى مالك، ويُتخذ إجراء، ويُتابع أثره، ثم يُرد على العميل عند الحاجة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الاستبيان الذي لا ينتج قرارًا يضيف بيانات، لا معرفة.
            </p>
          </article>

        </div>
      </section>

      {/* Section 2: مصطلحات البزنس والنمو (21 - 35) */}
      <section id="sec-business-terms" className="scroll-mt-28 space-y-8 pt-8 border-t border-[#E4E7EB]">
        <div className="border-b border-[#102A43] pb-3">
          <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider mb-1">المحور الثاني</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
            {isRtl ? 'مصطلحات البزنس والنمو (21 - 35)' : 'Business & Growth Terms (21 - 35)'}
          </h2>
        </div>

        <div className="space-y-8 text-sm sm:text-base">

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              21. نموذج العمل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Business Model</bdi>
            </h3>
            <p className="text-slate-700">
              نموذج العمل يوضح كيف تخلق المنشأة قيمة، ولمن، وكيف تقدمها وتحصل على عائد منها. يشمل الشريحة، والقيمة المقترحة، والقنوات، والموارد، والتكاليف، ومصادر الإيراد.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              المنتج جزء من نموذج العمل، وليس النموذج كله. منتج جيد داخل اقتصاديات ضعيفة لن يصبح بزنسًا مستدامًا بالتركيز على المحتوى وحده.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              22. القيمة المقترحة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Value Proposition</bdi>
            </h3>
            <p className="text-slate-700">
              القيمة المقترحة هي السبب المحدد الذي يجعل العميل يختار عرضك لحل مشكلة أو تحقيق نتيجة. تجمع بين النتيجة، والشريحة، والبدائل، والدليل.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              «جودة عالية وخدمة ممتازة» ليست قيمة مقترحة؛ يمكن لأي منافس قولها. القيمة يجب أن تساعد العميل على فهم لماذا هذا الخيار أنسب له.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              23. الميزة التنافسية <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Competitive Advantage</bdi>
            </h3>
            <p className="text-slate-700">
              الميزة التنافسية هي قدرة أو أصل يتيح للمنشأة تقديم قيمة أفضل أو تكلفة أقل أو دفاع أقوى أمام المنافسين، ويصعب تقليده أو استبداله.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              التصميم الجميل ميزة مؤقتة إذا استطاع المنافس نسخ المظهر خلال أسبوع. البيانات المتراكمة والعلاقات المباشرة تتحول لأصول أقوى.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              24. الملاءمة بين المنتج والسوق <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Product-Market Fit</bdi>
            </h3>
            <p className="text-slate-700">
              الملاءمة بين المنتج والسوق هي وجود طلب حقيقي من شريحة واضحة على منتج يحل لها مشكلة بدرجة تدعم الاستمرار والنمو.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              المبيعات الأولى لا تثبتها وحدها. اسألي: هل يعود العملاء؟ هل يوصون؟ هل يبقى الطلب دون خصم دائم أو ضغط بيعي مبالغ فيه؟
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              25. السوق المستهدف <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Target Market</bdi>
            </h3>
            <p className="text-slate-700">
              السوق المستهدف هو المجموعة التي تختار المنشأة توجيه القيمة والموارد إليها. يمكن تحديده بحسب الجغرافيا أو القطاع أو القدرة الشرائية أو الحاجة أو السلوك.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              «الكل» ليس سوقًا مستهدفًا. قد يستطيع الجميع شراء المنتج، لكنهم لا يملكون الدافع نفسه ولا يتخذون القرار بالطريقة نفسها.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              26. شريحة العملاء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Segment</bdi>
            </h3>
            <p className="text-slate-700">
              شريحة العملاء مجموعة تتشابه في حاجة أو سلوك أو سياق شراء ذي معنى للقرار. التجزئة المفيدة تغيّر المنتج أو الرسالة أو القناة أو العرض.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              إذا قسمتِ العملاء بحسب العمر ولم يتغير أي قرار بعدها، فالتقسيم وصفي فقط.
            </p>
          </article>

          <article className="space-y-3 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              27. تكلفة اكتساب العميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Acquisition Cost (CAC)</bdi>
            </h3>
            <p className="text-slate-700">
              تكلفة اكتساب العميل هي إجمالي تكاليف المبيعات والتسويق المنسوبة إلى اكتساب عملاء جدد، مقسومًا على عدد العملاء الجدد في الفترة نفسها.
            </p>
            <div className="p-3 bg-[#FAF8F5] border border-[#E4E7EB] text-center font-mono text-xs sm:text-sm font-bold text-[#102A43] dir-ltr">
              CAC = Acquisition costs ÷ New customers acquired
            </div>
            <p className="text-xs text-slate-500 font-bold">
              لا تحسبي تكلفة الإعلان وحدها وتسمّيها CAC. وقت الفريق، والوكالة، والأدوات، والخصومات المرتبطة بالاكتساب قد تكون جزءًا من التكلفة بحسب نموذجك.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              28. القيمة الدائمة للعميل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Lifetime Value (CLV or LTV)</bdi>
            </h3>
            <p className="text-slate-700">
              القيمة الدائمة للعميل هي القيمة الاقتصادية المتوقعة من علاقة العميل طوال مدتها. تساعد على تحديد ما يمكن إنفاقه على الاستحواذ والاحتفاظ.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              في حساب مبسط للأعمال ذات الشراء المتكرر يمكن البدء بمتوسط قيمة الطلب × معدل التكرار × مدة العلاقة، ثم إدخال الهامش للحصول على قراءة اقتصادية أدق.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              29. الاحتفاظ بالعملاء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Retention</bdi>
            </h3>
            <p className="text-slate-700">
              الاحتفاظ هو قدرة المنشأة على إبقاء العملاء نشطين خلال فترة محددة. يُقاس بحسب طبيعة دورة الشراء، لا بتعريف موحد لكل القطاعات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              غياب شراء القهوة شهرًا قد يعني فقد العميل. غياب شراء مرتبة سنة لا يعني شيئًا. السياق يسبق المعادلة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              30. تسرب العملاء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Churn</bdi>
            </h3>
            <p className="text-slate-700">
              التسرب هو نسبة العملاء الذين توقفوا عن استخدام المنتج أو ألغوا الاشتراك أو خرجوا من العلاقة خلال فترة. يجب تعريف «التوقف» قبل الحساب.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              في الاشتراكات يكون الإلغاء واضحًا. في الصالونات أو التجزئة تحتاج المنشأة إلى نافذة زمنية مبنية على نمط الشراء لتحديد العميل المنقطع.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              31. الإيراد المتكرر <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Recurring Revenue</bdi>
            </h3>
            <p className="text-slate-700">
              الإيراد المتكرر هو دخل يتجدد وفق اشتراك أو عقد أو نمط شراء يمكن توقعه نسبيًا. قيمته أنه يقلل تقلب الإيراد ويحسن القدرة على التخطيط.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              ليس كل تكرار ولاءً. قد يستمر العميل بسبب عقد أو صعوبة الإلغاء. راقبي جودة العلاقة، لا انتظام الفاتورة فقط.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              32. هامش الربح <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Profit Margin</bdi>
            </h3>
            <p className="text-slate-700">
              هامش الربح هو نسبة ما يتبقى من الإيراد بعد خصم التكاليف المحددة في نوع الهامش المستخدم. الهامش الإجمالي يختلف عن التشغيلي والصافي.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              نمو المبيعات مع تآكل الهامش قد يوسّع المشكلة. الخصومات والعمولات وتكلفة الخدمة الإضافية يجب أن تظهر في اقتصاديات العرض.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              33. اقتصاديات الوحدة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Unit Economics</bdi>
            </h3>
            <p className="text-slate-700">
              اقتصاديات الوحدة تدرس الإيراد والتكلفة المرتبطين بوحدة أساسية مثل عميل أو طلب أو اشتراك. تكشف هل النمو يضاعف قيمة أم يضاعف خسارة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              إذا كانت تكلفة اكتساب العميل وخدمته أعلى من الهامش المتوقع منه، فزيادة الميزانية ليست خطة نمو.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              34. مؤشر الأداء الرئيسي <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Key Performance Indicator (KPI)</bdi>
            </h3>
            <p className="text-slate-700">
              مؤشر الأداء الرئيسي مقياس مختار لمتابعة التقدم نحو هدف محدد. ليس كل رقم متاح مؤشرًا رئيسيًا.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              عدد المتابعين مقياس. يصبح KPI فقط إذا كان مرتبطًا بهدف وآلية سببية معقولة وقرار سيتغير بناءً عليه.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              35. النمو المستدام <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Sustainable Growth</bdi>
            </h3>
            <p className="text-slate-700">
              النمو المستدام هو نمو تستطيع المنشأة تمويله وتشغيله والحفاظ على جودته دون استنزاف الهامش أو الفريق أو العلاقة مع العميل.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              النمو السريع ليس عكسه بالضرورة. المشكلة في نمو يتجاوز قدرة النظام ويخلق مبيعات لا تستطيع المنشأة خدمتها أو الاحتفاظ بها.
            </p>
          </article>

        </div>
      </section>

      {/* Section 3: مصطلحات التسويق والسلوك (36 - 55) */}
      <section id="sec-marketing-terms" className="scroll-mt-28 space-y-8 pt-8 border-t border-[#E4E7EB]">
        <div className="border-b border-[#102A43] pb-3">
          <p className="text-xs font-bold text-[#C7362E] uppercase tracking-wider mb-1">المحور الثالث</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
            {isRtl ? 'مصطلحات التسويق والسلوك (36 - 55)' : 'Marketing & Behavior Terms (36 - 55)'}
          </h2>
        </div>

        <div className="space-y-8 text-sm sm:text-base">

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              36. التسويق <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Marketing</bdi>
            </h3>
            <p className="text-slate-700">
              التسويق هو نظام فهم السوق وخلق القيمة وتقديمها والتواصل بشأنها وبناء الطلب والعلاقة. الإعلان جزء من التسويق، وليس التسويق كله.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              عندما يختزل التسويق في الترويج، تُترك قرارات الشريحة والعرض والسعر والتجربة للصدفة، ثم يُطلب من الحملة إصلاحها.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              37. التموضع <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Positioning</bdi>
            </h3>
            <p className="text-slate-700">
              التموضع هو المعنى أو المكان الذي تسعى العلامة إلى امتلاكه في ذهن شريحة محددة مقارنة بالبدائل. يحدد: لمن نحن؟ في أي فئة؟ لماذا نحن الخيار الأنسب؟
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الوعي بلا تموضع قد يجعل الاسم مألوفًا، لكنه لا يعطي العميل سببًا واضحًا لاختياره أو تذكره في موقف شراء محدد.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              38. الرسالة التسويقية <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Marketing Message</bdi>
            </h3>
            <p className="text-slate-700">
              الرسالة التسويقية هي التعبير الذي ينقل القيمة والفرق والدليل بطريقة يفهمها العميل. التموضع قرار استراتيجي؛ الرسالة إحدى طرق ترجمته.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الجناس والعبارة الذكية لا يعوضان الغموض. إذا احتاج العميل إلى تفسير طويل ليعرف ما تبيعين ولماذا يهمه، فالرسالة لم تعمل.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              39. وعد العلامة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Brand Promise</bdi>
            </h3>
            <p className="text-slate-700">
              وعد العلامة هو التوقع الأساسي الذي تلتزم العلامة بتقديمه باستمرار. قد يكون وظيفيًا أو عاطفيًا، لكنه يجب أن يترجم إلى معايير تشغيلية.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الوعد الذي يعيش في دليل الهوية فقط شعار. الوعد الحقيقي يغيّر التوظيف والسياسة والعملية والقياس.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              40. اكتساب العملاء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Customer Acquisition</bdi>
            </h3>
            <p className="text-slate-700">
              اكتساب العملاء هو تحويل أفراد أو منشآت من السوق المستهدف إلى عملاء جدد. يشمل القنوات المدفوعة والعضوية والشراكات والمبيعات والإحالات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الاستحواذ لا يساوي النمو إذا كان العملاء يغادرون بالسرعة نفسها. راقبي CAC وجودة العملاء والاحتفاظ معًا.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              41. توليد الطلب <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Demand Generation</bdi>
            </h3>
            <p className="text-slate-700">
              توليد الطلب هو بناء الوعي بالمشكلة والفئة والقيمة قبل طلب الشراء مباشرة. يفيد عندما لا يدرك السوق المشكلة أو لا يعرف نوع الحل.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              ليس معناه اختراع حاجة وهمية. التسويق الجيد يكشف تكلفة الوضع الحالي أو نتيجة ممكنة، ثم يبني فهمًا يساعد العميل على القرار.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              42. توليد العملاء المحتملين <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Lead Generation</bdi>
            </h3>
            <p className="text-slate-700">
              توليد العملاء المحتملين هو جمع اهتمام وبيانات أشخاص أو منشآت قد يتحولون إلى عملاء. قد يحدث عبر نموذج، أو طلب عرض، أو تنزيل مورد، أو استفسار.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              عدد العملاء المحتملين لا يكفي. إذا كانت الشريحة غير مناسبة أو النية ضعيفة، سيبدو التسويق نشطًا وتبقى المبيعات عالقة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              43. قمع التسويق أو المبيعات <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Marketing or Sales Funnel</bdi>
            </h3>
            <p className="text-slate-700">
              القمع نموذج يصف انتقال الجمهور من الوعي إلى الاهتمام والتقييم ثم الشراء. يساعد على قياس التحول بين المراحل، لكنه يبسط الواقع.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              العميل لا يتحرك دائمًا في خط مستقيم. يعود للمقارنة، ويسأل غيره، ويختفي، ثم يرجع من قناة أخرى.
            </p>
          </article>

          <article className="space-y-3 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              44. معدل التحويل <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Conversion Rate</bdi>
            </h3>
            <p className="text-slate-700">
              معدل التحويل هو نسبة من أكملوا الإجراء المطلوب إلى إجمالي المؤهلين أو الزوار في نقطة محددة.
            </p>
            <div className="p-3 bg-[#FAF8F5] border border-[#E4E7EB] text-center font-mono text-xs sm:text-sm font-bold text-[#102A43] dir-ltr">
              Conversion rate = Conversions ÷ Eligible visitors × 100
            </div>
            <p className="text-xs text-slate-500 font-bold">
              حددي المقام بدقة. التحويل من زيارة الصفحة إلى إرسال النموذج يختلف عن التحويل من عميل محتمل مؤهل إلى عقد.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              45. الدعوة إلى إجراء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Call to Action (CTA)</bdi>
            </h3>
            <p className="text-slate-700">
              الدعوة إلى إجراء هي طلب واضح للخطوة التالية، مثل حجز جلسة أو تجربة المنتج أو قراءة دليل. يجب أن تناسب نية العميل ومرحلة القرار.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              «اشتر الآن» لا يصلح لكل شخص. في خدمة استشارية مرتفعة القيمة قد تكون «اطلب جلسة تشخيصية» خطوة أكثر منطقية.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              46. عرض القيمة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Offer</bdi>
            </h3>
            <p className="text-slate-700">
              العرض هو الحزمة التي يشتريها العميل فعليًا: النتيجة، والمكونات، والسعر، والشروط، وتقليل المخاطر، والدليل. يختلف عن القيمة المقترحة التي تشرح سبب اختيار العلامة أو الحل.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الخصم ليس عرضًا كاملًا. خفض السعر يغيّر الرقم، لكنه لا يعالج غموض المخرجات أو ملاءمة الخدمة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              47. التسويق بالمحتوى <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Content Marketing</bdi>
            </h3>
            <p className="text-slate-700">
              التسويق بالمحتوى هو إنشاء ونشر معرفة تساعد جمهورًا محددًا على فهم مشكلة أو اتخاذ قرار، بما يبني أصلًا قابلًا للاكتشاف والثقة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              المحتوى ليس جدول منشورات. المقالة التي تجيب عن سؤال بحث وتبقى مفيدة لعام أصل أقوى من عشرين منشورًا بلا هدف.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              48. الدليل الاجتماعي <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Social Proof</bdi>
            </h3>
            <p className="text-slate-700">
              الدليل الاجتماعي هو استخدام الناس لسلوك الآخرين أو آرائهم كإشارة تقلل عدم اليقين. يظهر في التقييمات، والشهادات، وعدد المستخدمين، وحالات الاستخدام.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا تعرضي رقمًا بلا سياق. «خدمنا 500 عميل» أضعف من شهادة محددة تشرح المشكلة والقرار والنتيجة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              49. تأثير الألفة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Mere-Exposure Effect</bdi>
            </h3>
            <p className="text-slate-700">
              تأثير الألفة هو ميل الناس إلى تفضيل ما أصبح مألوفًا لهم نتيجة التعرض المتكرر. يفسر لماذا قد تزيد قابلية تجربة علامة سمع عنها العميل كثيرًا.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              الألفة لا تعوّض التموضع. قد يتذكر العميل الاسم ولا يعرف ما الذي تتميز به العلامة أو متى يختارها.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              50. التثبيت السعري أو الارتساء <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Anchoring</bdi>
            </h3>
            <p className="text-slate-700">
              الارتساء هو تأثر الحكم بأول رقم أو معلومة مرجعية تظهر في السياق. في التسعير، قد تصبح الباقة الأعلى أو السعر السابق مرساة تُقارن بها الخيارات التالية.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              استخدامه لا يبرر سعرًا سابقًا وهميًا أو مقارنة مضللة. التصميم السلوكي الجيد يساعد العميل على فهم القيمة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              51. النفور من الخسارة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Loss Aversion</bdi>
            </h3>
            <p className="text-slate-700">
              النفور من الخسارة هو ميل الناس إلى إعطاء الخسارة وزنًا نفسيًا أكبر من مكسب مماثل. لذلك قد تكون رسالة «ما الذي تخسره باستمرار المشكلة؟» أقوى من وصف منفعة بعيدة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا تحولي كل رسالة إلى تخويف. المبالغة في الخطر قد ترفع المقاومة وتضعف الثقة.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              52. تحيز الذروة والنهاية <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Peak-End Rule</bdi>
            </h3>
            <p className="text-slate-700">
              تحيز الذروة والنهاية هو ميل الناس إلى تذكر اللحظة الأشد تأثيرًا ونهاية التجربة أكثر من متوسط تفاصيلها. يفيد في فهم لماذا تترك نهاية مرتبكة أثرًا كبيرًا.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              أصلحي الدقة والوضوح والسهولة أولًا، ثم صممي اللحظات التي تستحق أن تُتذكر.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              53. المقاييس الزائفة <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Vanity Metrics</bdi>
            </h3>
            <p className="text-slate-700">
              المقاييس الزائفة أرقام تبدو جيدة في التقرير لكنها لا تفسر تقدمًا ذا معنى ولا تقود إلى قرار، مثل المشاهدات أو المتابعين حين تُعرض بلا صلة بالتحويل أو الاحتفاظ.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              تصبح زائفة عندما تُستخدم لإثبات نجاح لا تقيسه فعلًا.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              54. الإسناد التسويقي <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Marketing Attribution</bdi>
            </h3>
            <p className="text-slate-700">
              الإسناد التسويقي هو محاولة تحديد القنوات ونقاط التماس التي ساهمت في التحويل. توجد نماذج تعطي الفضل لأول تفاعل أو آخر تفاعل أو توزعه بين عدة تفاعلات.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا يوجد نموذج يكشف الحقيقة كاملة. الإسناد أداة تقدير، لا كاميرا تراقب عقل العميل.
            </p>
          </article>

          <article className="space-y-2 border-b border-[#F0F4F8] pb-6">
            <h3 className="text-lg font-bold text-[#102A43]">
              55. النمو العضوي <bdi dir="ltr" className="font-sans text-[#C7362E] text-base">Organic Growth</bdi>
            </h3>
            <p className="text-slate-700">
              النمو العضوي هو النمو الناتج من قوة المنتج والتجربة والاحتفاظ والتوصية والمحتوى والقنوات غير المعتمدة بالكامل على شراء الوصول في كل مرة.
            </p>
            <p className="text-xs text-slate-500 font-bold">
              لا يعني «مجانيًا». الفرق أنه يبني أصولًا تتراكم بدل توقف النتيجة فور توقف الإعلان.
            </p>
          </article>

        </div>
      </section>

      {/* Section 4: كيف ترتبط هذه المصطلحات كنظام واحد؟ */}
      <section id="sec-[#system]" className="scroll-mt-28 space-y-6 pt-8 border-t border-[#E4E7EB]">
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
          {isRtl ? 'كيف ترتبط هذه المصطلحات كنظام واحد؟' : 'How These Terms Connect as One System?'}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isRtl 
            ? 'المصطلحات تصبح مفيدة عندما تكشف سلسلة السبب والأثر. في CX Strategy Lab نقرأها بهذه الصورة المتكاملة:'
            : 'Terms become useful when they reveal the cause and effect sequence across your strategy:'}
        </p>

        {/* Systemic Matrix Table */}
        <div className="overflow-x-auto border border-[#E4E7EB] bg-white rounded-none">
          <table className="w-full text-right rtl:text-right ltr:text-left text-xs sm:text-sm">
            <thead className="bg-[#102A43] text-white font-bold border-b-2 border-[#C7362E]">
              <tr>
                <th className="p-3 sm:p-4">{isRtl ? 'القرار الاستراتيجي' : 'Strategic Decision'}</th>
                <th className="p-3 sm:p-4">{isRtl ? 'ما الذي يترجمه؟' : 'What Translates It?'}</th>
                <th className="p-3 sm:p-4">{isRtl ? 'ما الذي يراه العميل؟' : 'What the Customer Sees'}</th>
                <th className="p-3 sm:p-4">{isRtl ? 'ما الذي نقيسه؟' : 'What We Measure'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7EB]">
              <tr className="hover:bg-[#FAF8F5]">
                <td className="p-3 sm:p-4 font-bold text-[#102A43]">{isRtl ? 'السوق المستهدف والتموضع' : 'Target Market & Positioning'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'القيمة المقترحة ووعد العلامة' : 'Value Prop & Brand Promise'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'الرسالة والعرض ونقاط التماس' : 'Message, Offer & Touchpoints'}</td>
                <td className="p-3 sm:p-4 font-bold text-[#C7362E]">{isRtl ? 'جودة العملاء والتحويل' : 'Lead Quality & Conversion'}</td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="p-3 sm:p-4 font-bold text-[#102A43]">{isRtl ? 'نموذج العمل والعمليات' : 'Business Model & Ops'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'مخطط الخدمة والمعايير والصلاحيات' : 'Service Blueprint & Standards'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'السهولة والوضوح والاتساق' : 'Ease, Clarity & Consistency'}</td>
                <td className="p-3 sm:p-4 font-bold text-[#C7362E]">{isRtl ? 'الجهد والرضا ودقة التنفيذ' : 'CES, CSAT & Execution Accuracy'}</td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="p-3 sm:p-4 font-bold text-[#102A43]">{isRtl ? 'إدارة العلاقة' : 'Relationship Management'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'صوت العميل واستعادة الخدمة' : 'VoC & Service Recovery'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'الاعتراف والاحتواء والقيمة بعد البيع' : 'Acknowledgment & Post-sale Value'}</td>
                <td className="p-3 sm:p-4 font-bold text-[#C7362E]">{isRtl ? 'الاحتفاظ والتسرب والقيمة الدائمة' : 'Retention, Churn & LTV'}</td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="p-3 sm:p-4 font-bold text-[#102A43]">{isRtl ? 'نظام النمو' : 'Growth Engine'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'المحتوى والاستحواذ والإحالات' : 'Content, Acquisition & Referrals'}</td>
                <td className="p-3 sm:p-4 text-slate-700">{isRtl ? 'الثقة والألفة وسبب الاختيار' : 'Trust, Familiarity & Choice Logic'}</td>
                <td className="p-3 sm:p-4 font-bold text-[#C7362E]">{isRtl ? 'تكلفة الاكتساب والهامش والنمو' : 'CAC, Margin & Organic Growth'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-bold">
          {isRtl 
            ? 'إذا ارتفع التحويل وانخفض الاحتفاظ، فلا تحتفلي بالقمع. راجعي الوعد والعرض وجودة العملاء والتجربة بعد البيع.'
            : 'If conversion rises while retention drops, review the promise, offer, and post-sale experience.'}
        </p>
      </section>

      {/* Section 5: أسئلة شائعة عن القاموس */}
      <section id="sec-faq" className="scroll-mt-28 space-y-6 pt-8 border-t border-[#E4E7EB]">
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
          {isRtl ? 'أسئلة شائعة عن مصطلحات تجربة العميل والتسويق' : 'Frequently Asked Questions'}
        </h2>

        <div className="space-y-3">
          
          <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none text-sm sm:text-base">
              <span>{isRtl ? 'س: ما أهم مصطلح يجب أن يبدأ به صاحب المشروع؟' : 'Q: Which term should a business founder start with?'}</span>
              <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
              <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-700 text-xs sm:text-sm leading-relaxed">
              {isRtl 
                ? 'ج: ابدأ بالقيمة المقترحة: من العميل، وما النتيجة التي يشتريها، ولماذا يختار هذا الحل بدل البديل؟ بعد ذلك يصبح التموضع والرسالة والتجربة والمقاييس أكثر وضوحًا.'
                : 'A: Start with the Value Proposition: who is the customer, what outcome do they buy, and why choose you? Everything else flows from here.'}
            </p>
          </details>

          <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none text-sm sm:text-base">
              <span>{isRtl ? 'س: ما الفرق بين تجربة العميل ورحلة العميل؟' : 'Q: What is the difference between CX and Customer Journey?'}</span>
              <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
              <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-700 text-xs sm:text-sm leading-relaxed">
              {isRtl 
                ? 'ج: رحلة العميل هي تسلسل المراحل التي يمر بها لتحقيق هدف. تجربة العميل هي الانطباع الناتج عن تلك الرحلة وعن العلاقة الأوسع مع المنشأة؛ لذلك الرحلة أداة لفهم التجربة وليست مرادفًا لها.'
                : 'A: Customer journey is the chronological sequence of steps. CX is the cumulative impression resulting from those steps.'}
            </p>
          </details>

          <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none text-sm sm:text-base">
              <span>{isRtl ? 'س: ما الفرق بين الاحتفاظ والولاء؟' : 'Q: What is the difference between Retention and Loyalty?'}</span>
              <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
              <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-700 text-xs sm:text-sm leading-relaxed">
              {isRtl 
                ? 'ج: الاحتفاظ سلوك يمكن رصده: استمر العميل أو عاد خلال فترة. الولاء أوسع، ويشمل التفضيل والثقة والاستعداد للتوصية؛ وقد يستمر عميل بسبب عقد أو غياب البديل من دون ولاء حقيقي.'
                : 'A: Retention is an observable behavior (re-purchasing). Loyalty includes mindset, preference, and willingness to advocate.'}
            </p>
          </details>

          <details className="group border border-[#E4E7EB] bg-[#FAF8F5] p-4 rounded-none">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[#102A43] list-none text-sm sm:text-base">
              <span>{isRtl ? 'س: ما الفرق بين التموضع والقيمة المقترحة؟' : 'Q: What is the difference between Positioning and Value Prop?'}</span>
              <span className="text-[#C7362E] font-mono text-base group-open:hidden">+</span>
              <span className="text-[#C7362E] font-mono text-base hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 pt-3 border-t border-[#E4E7EB] text-slate-700 text-xs sm:text-sm leading-relaxed">
              {isRtl 
                ? 'ج: التموضع يحدد المعنى الذي تريد العلامة امتلاكه في ذهن شريحة مقارنة بالبدائل. القيمة المقترحة تشرح النتيجة والقيمة التي يحصل عليها العميل ولماذا يناسبه العرض؛ يتكاملان لكنهما ليسا تعريفًا واحدًا.'
                : 'A: Positioning defines where you fit relative to alternatives. Value proposition explains the concrete benefit and rationale.'}
            </p>
          </details>

        </div>
      </section>

      {/* Section 6: كيف تبدأ من القاموس؟ */}
      <section id="sec-how-to-start" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#E4E7EB]">
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#102A43]">
          {isRtl ? 'كيف تبدأ من القاموس؟' : 'How to Start Using This Glossary?'}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isRtl 
            ? 'اختاري خمسة مصطلحات تسمعينها باستمرار داخل منشأتك، واكتبي التعريف العملي المتفق عليه لكل منها، وطريقة قياسه، والقرار المرتبط به. إذا اختلف الفريق على معنى «عميل نشط» أو «تحويل» أو «شكوى مغلقة»، فالأرقام التي يناقشها لا تصف الشيء نفسه بعد.'
            : 'Pick five terms frequently discussed in your team, define their operational meaning, measurement method, and decision rules. Alignment brings clarity.'}
        </p>
        <p className="text-xs font-bold text-slate-600">
          {isRtl 
            ? 'يمكن استخدام هذا القاموس كنقطة بداية، ثم بناء قاموس قياس داخلي يناسب نموذج عملك.'
            : 'Use this glossary as a starting point to build internal measurement standards.'}
        </p>
      </section>

      {/* Section 7: المصادر */}
      <section id="sec-sources" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#E4E7EB]">
        <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
          {isRtl ? 'المصادر والإنتاج الميداني' : 'Sources & References'}
        </h3>
        <ul className="text-xs text-slate-600 space-y-1.5 list-disc pr-4 rtl:pr-4 ltr:pl-4">
          <li>Bain & Company: Introducing the Net Promoter System</li>
          <li>Qualtrics: Customer Effort Score & User Experience Guides</li>
          <li>Nielsen Norman Group: The Peak–End Rule and UX Principles</li>
          <li>SurveyMonkey & Oracle CX Advisory Frameworks</li>
          <li>CX Strategy Lab Research & Field Practice (2026)</li>
        </ul>
      </section>

    </div>
  );
};
