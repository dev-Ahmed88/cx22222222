export interface GlossaryTerm {
  id: number;
  termAr: string;
  termEn: string;
  category: 'cx' | 'business' | 'marketing';
  categoryLabelAr: string;
  categoryLabelEn: string;
  defAr: string;
  defEn: string;
  exampleAr?: string;
  exampleEn?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // --- تجربة العميل (CX) ---
  {
    id: 1,
    termAr: 'تجربة العميل',
    termEn: 'Customer Experience (CX)',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'مجموع الانطباعات والمشاعر والتفاعلات التراكمية التي يمر بها العميل مع العلامة التجارية عبر جميع نقاط التلامس المباشرة وغير المباشرة.',
    defEn: 'The cumulative impressions, feelings, and interactions a customer experiences across all touchpoints with a brand.',
    exampleAr: 'بدءاً من رؤية الإعلان ثم زيارة المتجر والتحدث مع خدمة العملاء وصولاً للاستخدام اليومي.'
  },
  {
    id: 2,
    termAr: 'رحلة العميل',
    termEn: 'Customer Journey',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'خريطة تفصيلية توثق جميع الخطوات والمراحل التي يسلكها العميل للوصول إلى هدف محدد (من الاستكشاف إلى الشراء وما بعده).',
    defEn: 'A detailed map of all steps and stages a customer takes to achieve a goal with your brand.'
  },
  {
    id: 3,
    termAr: 'نقاط التلامس',
    termEn: 'Touchpoints',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'أي نقطة التكاء أو تفاعل بين العميل والمنظمة، سواء كانت موقعاً إلكترونياً، تطبيقاً، مكالمة هاتفية، إشعاراً، أو موظف استقبال.',
    defEn: 'Any point of interaction between a customer and an organization.'
  },
  {
    id: 4,
    termAr: 'صافي نقاط الترويج',
    termEn: 'Net Promoter Score (NPS)',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'مقياس يقيس مدى استعداد العميل لتوصية أصدقائه أو زملائه بالتعامل مع شركتك على مقياس من 0 إلى 10.',
    defEn: 'A metric evaluating a customer\'s willingness to recommend your company to others on a scale of 0-10.'
  },
  {
    id: 5,
    termAr: 'مؤشر رضا العملاء',
    termEn: 'Customer Satisfaction (CSAT)',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'مقياس يحدد مدى رضا العميل عن منتج، خدمة، أو معاملة محددة أجراها للتو مع الشركة.',
    defEn: 'A metric measuring customer satisfaction with a specific product, service, or interaction.'
  },
  {
    id: 6,
    termAr: 'مؤشر جهد العميل',
    termEn: 'Customer Effort Score (CES)',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'مقياس يقيس مقدار المجهود والتعقيد الذي بذله العميل للحصول على إجابة، حل مشكلة، أو إتمام عملية شراء.',
    defEn: 'Measures the ease of an interaction or how much effort a customer exerts to resolve an issue or purchase.'
  },
  {
    id: 7,
    termAr: 'نقاط الاحتكاك',
    termEn: 'Friction Points',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'العقبات التشغيلية أو التصميمية التي تبطئ تجربة العميل أو تسبب له الضيق وتدفعه للانسحاب.',
    defEn: 'Operational or design obstacles that slow down or frustrate the customer journey.'
  },
  {
    id: 8,
    termAr: 'صوت العميل',
    termEn: 'Voice of Customer (VoC)',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'منهجية منظمة لجمع، تحليل، وترجمة توقعات وملاحظات العملاء إلى قرارات تحسين مستمرة.',
    defEn: 'A systematic approach to capturing, analyzing, and acting upon customer feedback and expectations.'
  },
  {
    id: 9,
    termAr: 'التسوق الخفي',
    termEn: 'Mystery Shopping',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'أداة رقابية وتطويرية محايدة يعايش فيها مقيّم متخصص تجربة العميل الفعلية لتقييم الالتزام بالمعايير.',
    defEn: 'An evaluation tool where professional evaluators experience customer service firsthand to measure compliance.'
  },
  {
    id: 10,
    termAr: 'التمركز حول العميل',
    termEn: 'Customer Centricity',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'ثقافة وممارسة إدارية تضع العميل واحتياجاته في مركز جميع القرارات الاستراتيجية والتنفيذية.',
    defEn: 'A business strategy that aligns product and service development directly around customer needs.'
  },
  {
    id: 11,
    termAr: 'تكامل القنوات',
    termEn: 'Omnichannel Experience',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'تقديم تجربة سلسة وموحدة ومترابطة للعميل بغض النظر عن تنقله بين المتجر الرقمي، التطبيق، أو الفرع الميداني.',
    defEn: 'A seamless, interconnected customer experience across digital and physical touchpoints.'
  },
  {
    id: 12,
    termAr: 'لحظات الحقيقة',
    termEn: 'Moments of Truth',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'النقاط الحرجة التي ينبني عليها انطباع العميل الحاسم (مثل أول تجربة للمنتج، أو معالجة الشكوى الأولى).',
    defEn: 'Critical instances in the customer journey that define brand perception.'
  },
  {
    id: 13,
    termAr: 'الاستبقاء والاحتفاظ',
    termEn: 'Customer Retention',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'قدرة الشركة على تشجيع العملاء الحاليين على استمرار الشراء والتعامل معها لفترات طويلة.',
    defEn: 'A business\'s ability to keep existing customers and build long-term repeat business.'
  },
  {
    id: 14,
    termAr: 'تهيئة العميل الجديد',
    termEn: 'Customer Onboarding',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'العملية الترحيبية والتعليمية الموجهة للعميل الجديد فور الشراء لمساعدته في استخراج القيمة الحقيقية بأسرع وقت.',
    defEn: 'The process of guiding new users to quickly understand and realize value from your product.'
  },
  {
    id: 15,
    termAr: 'تعافي وإصلاح الخدمة',
    termEn: 'Service Recovery',
    category: 'cx',
    categoryLabelAr: 'تجربة العميل',
    categoryLabelEn: 'Customer Experience',
    defAr: 'الخطوات والإجراءات الفورية المتخذة لإصلاح خطأ أو تجربة سلبية وتحويل العميل الغاضب إلى عميل موالٍ.',
    defEn: 'Action taken by a company in response to a service failure to restore customer goodwill.'
  },

  // --- البزنس والاستراتيجية (Business) ---
  {
    id: 16,
    termAr: 'عرض القيمة',
    termEn: 'Value Proposition',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'البيان الناصع والواضح الذي يوضح المنافع التي سيحصل عليها العميل ولماذا يختارك أنت بدلاً من المنافسين.',
    defEn: 'A concise statement summarizing the unique benefits a company delivers to its customers.'
  },
  {
    id: 17,
    termAr: 'القيمة العمرية للعميل',
    termEn: 'Customer Lifetime Value (LTV)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'إجمالي صافي الأرباح المتوقع تحقيقها من عميل واحد خلال فترة تعامله الكاملة مع المشروع.',
    defEn: 'The total projected net profit attributed to the entire future relationship with a customer.'
  },
  {
    id: 18,
    termAr: 'تكلفة الاستحواذ على العميل',
    termEn: 'Customer Acquisition Cost (CAC)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'مجموع التكاليف التسويقية والبيعية اللازمة لجلب عميل جديد واحد إلى المنظمة.',
    defEn: 'The total cost associated with convincing a prospective customer to buy a product or service.'
  },
  {
    id: 19,
    termAr: 'نسبة القيمة إلى الاستحواذ',
    termEn: 'LTV:CAC Ratio',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'المعيار الذهبي لتقييم صحة البزنس؛ تعكس حجم الأرباح المستدامة مقارنة بتكلفة التسويق (النسبة الناموسية 3:1 فأعلى).',
    defEn: 'A golden metric comparing the lifetime value of a customer to the cost of acquiring them.'
  },
  {
    id: 20,
    termAr: 'معدل تسرب العملاء',
    termEn: 'Churn Rate',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'النسبة المئوية للعملاء الذين ينقطعون عن التعامل مع الشركة أو يلغون اشتراكاتهم خلال فترة محددة.',
    defEn: 'The percentage of customers who stop using a company\'s products or services over a given timeframe.'
  },
  {
    id: 21,
    termAr: 'اقتصاديات الوحدة',
    termEn: 'Unit Economics',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'تحليل الإيرادات المباشرة والتكاليف المباشرة المرتبطة بمنتج منفرد أو عميل منفرد لمعرفة جدوى التوسع.',
    defEn: 'Direct revenues and costs associated with a single business unit or single customer.'
  },
  {
    id: 22,
    termAr: 'المنتج الأدنى القابل للتجربة',
    termEn: 'Minimum Viable Product (MVP)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'نسخة أولية مبسطة تحتوي على الميزات الأساسية فقط لاختبار الطلب الحقيقي واستقبال الملاحظات بأقل كلفة.',
    defEn: 'A version of a product with just enough features to be usable by early customers who can provide feedback.'
  },
  {
    id: 23,
    termAr: 'التطابق بين المنتج والسوق',
    termEn: 'Product-Market Fit (PMF)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'المرحلة التي يثبت فيها المنتج قدرته على تلبية احتياج ملح في سوق واسعة، بحيث يرتفع الطلب بتلقائية.',
    defEn: 'The degree to which a product satisfies strong market demand.'
  },
  {
    id: 24,
    termAr: 'القابلية للتوسع',
    termEn: 'Scalability',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'قدرة نموذج العمل على مضاعفة الإيرادات والأعمال دون زيادة متناسبة ومتوازية في التكاليف التشغيلية.',
    defEn: 'A business model\'s capacity to grow revenue significantly faster than expenses.'
  },
  {
    id: 25,
    termAr: 'الخندق التنافسي',
    termEn: 'Economic Moat',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'الميزة التنافسية الهيكلية (كالشبكة، العلامة، البراءة، أثر الكثافة) التي يصعب على المنافسين نسخها وتضمن استمرارية الأرباح.',
    defEn: 'A structural competitive advantage that protects a business from competitor entry.'
  },
  {
    id: 26,
    termAr: 'هامش الربح الإجمالي',
    termEn: 'Gross Profit Margin',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'نسبة المبالغ المتبقية من الإيرادات بعد خصم تكاليف الإنتاج والبضاعة المباعة المباشرة (COGS).',
    defEn: 'The percentage of revenue remaining after subtracting direct cost of goods sold.'
  },
  {
    id: 27,
    termAr: 'معدل حرق السيولة',
    termEn: 'Burn Rate',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'السرعة التي ينفق بها المشروع الناشئ أو الاستثماري السيولة النقدية المتاحة شهرياً قبل تحقيق التدفق النقدي الموجب.',
    defEn: 'The rate at which a company spends its cash pool before reaching positive cash flow.'
  },
  {
    id: 28,
    termAr: 'عمر السيولة النقدية',
    termEn: 'Runway',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'عدد الأشهر المتبقية للشركة للاستمرار في العمل استناداً إلى الرصيد النقدي الحالي ومعدل الحرق الشري.',
    defEn: 'The amount of time (usually months) a company has before it runs out of money.'
  },
  {
    id: 29,
    termAr: 'الأعمال الموجهة للشركات',
    termEn: 'B2B (Business to Business)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'نماذج أعمال تستهدف بيع حلولها، منتجاتها، أو خدماتها لقطاعات وجهات إدارية وشركات أخرى.',
    defEn: 'Commercial transactions or services conducted between businesses.'
  },
  {
    id: 30,
    termAr: 'الأعمال الموجهة للأفراد',
    termEn: 'B2C (Business to Consumer)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'نماذج أعمال تبيع منتجاتها وخدماتها بشكل مباشر للمستهلكين الأفراد والعملاء النهائيين.',
    defEn: 'Businesses selling products and services directly to end consumers.'
  },
  {
    id: 31,
    termAr: 'الإيراد الشهري المتكرر',
    termEn: 'Monthly Recurring Revenue (MRR)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'مجموع الإيرادات المتوقعة والمضمونة بانتظام شهرياً من اشتراكات العملاء النشطين.',
    defEn: 'Predictable recurring revenue earned by a subscription business every month.'
  },
  {
    id: 32,
    termAr: 'الإيراد السنوي المتكرر',
    termEn: 'Annual Recurring Revenue (ARR)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'القيمة السنوية المتوقعة من العقود واشتراكات العملاء الحالية.',
    defEn: 'The annual value of recurring subscription revenues.'
  },
  {
    id: 33,
    termAr: 'التحول الاستراتيجي',
    termEn: 'Pivot',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'تغيير جوهري في مسار المنتج، الشريحة، أو طريقة تحقيق الإيرادات بناءً على تعلم حقيقي واختبارات في السوق.',
    defEn: 'A fundamental change in business strategy based on market feedback.'
  },
  {
    id: 34,
    termAr: 'العائد على الاستثمار',
    termEn: 'Return on Investment (ROI)',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'نسبة الأرباح المستفادة من مشروع أو حملة معينة مقارنة بالمبلغ المالي الذي تم استثماره فيها.',
    defEn: 'A measure used to evaluate the efficiency and profitability of an investment.'
  },
  {
    id: 35,
    termAr: 'موضعة العلامة التجارية',
    termEn: 'Brand Positioning',
    category: 'business',
    categoryLabelAr: 'البزنس والاستراتيجية',
    categoryLabelEn: 'Business & Strategy',
    defAr: 'المكانة الذهنية الفريدة التي تميّز شركتك في أذهان العملاء مقارنة بخيارات المنافسين في السوق.',
    defEn: 'The unique space a brand occupies in the mind of the target audience.'
  },

  // --- التسويق والنمو (Marketing) ---
  {
    id: 36,
    termAr: 'قمع المبيعات',
    termEn: 'Sales Funnel',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'التسلسل المفهومي للمراحل التي يمر بها العميل من لحظة التعرّف على وجود المنتج حتى اتخاذ قرار الشراء.',
    defEn: 'The visual representation of the stages a customer goes through from awareness to purchase.'
  },
  {
    id: 37,
    termAr: 'التسويق الجاذب',
    termEn: 'Inbound Marketing',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'استراتيجية تركز على جذب العملاء عبر تقديم محتوى تعليمي وقيم يعالج مشكلاتهم بدلاً من الإعلانات المباشرة.',
    defEn: 'A technique for attracting customers by creating valuable content aligned to their needs.'
  },
  {
    id: 38,
    termAr: 'تحسين معدل التحويل',
    termEn: 'Conversion Rate Optimization (CRO)',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'تحسين العناصر والتصميم والكلمات في الموقع أو التطبيق لزيادة نسبة الزوار الذين يقومون بإجراء محدد.',
    defEn: 'The practice of increasing the percentage of visitors who complete a desired action.'
  },
  {
    id: 39,
    termAr: 'الدعوة لاتخاذ إجراء',
    termEn: 'Call to Action (CTA)',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'زر أو نص صريح وموجه يحث العميل على اتخاذ الخطوة التالية مباشرة (مثل: احجز جلسة تشخيصية، حمّل الدليل).',
    defEn: 'A prompt that encourages an immediate response or encourages a purchase.'
  },
  {
    id: 40,
    termAr: 'الدفع مقابل النقرة',
    termEn: 'Pay-Per-Click (PPC)',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'نموذج إعلاني رقمي يدفع فيه المعلن للمنصة الإعلانية فقط عندما يتم النقر بالفعل على إعلانه.',
    defEn: 'An internet advertising model where advertisers pay a fee each time their ad is clicked.'
  },
  {
    id: 41,
    termAr: 'تحسين محركات البحث',
    termEn: 'Search Engine Optimization (SEO)',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'تحسين المحتوى والبنية الفنية للموقع للظهور في نتائج البحث الأولى في جوجل مجاناً وبشكل عضوي.',
    defEn: 'The process of improving website traffic quality and volume from search engine organic results.'
  },
  {
    id: 42,
    termAr: 'تسويق المحتوى',
    termEn: 'Content Marketing',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'إنشاء ونشر مقالات، أدلة، وفيديوهات مفيدة بانتظام لجذب جمهور محدد وبناء ثقة طويلة الأجل.',
    defEn: 'Creating and distributing relevant and consistent content to attract and retain an audience.'
  },
  {
    id: 43,
    termAr: 'اختراق النمو',
    termEn: 'Growth Hacking',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'منهجية مرنة وسريعة تعتمد على التجارب والتكامل التقني لتحقيق نمو سريع ومضاعف بأقل ميزانية إعلانية ممكنة.',
    defEn: 'A process of rapid experimentation across marketing channels to identify efficient ways to grow.'
  },
  {
    id: 44,
    termAr: 'جلب العملاء المرتقبين',
    termEn: 'Lead Generation',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'إثارة اهتمام العملاء المحتملين وتجميع بيانات التواصل معهم لتوجيههم لفريق المبيعات.',
    defEn: 'The initiation of consumer interest or inquiry into products or services of a business.'
  },
  {
    id: 45,
    termAr: 'مغناطيس العملاء',
    termEn: 'Lead Magnet',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'مورد مجاني عالي القيمة (ككتاب إلكتروني، قائمة مراجعة، أو تشخيص) يُقدم للعميل مقابل الحصول على بريده الإلكتروني.',
    defEn: 'A free item or service given away to gather contact details from prospective leads.'
  },
  {
    id: 46,
    termAr: 'اختبار المقارنة',
    termEn: 'A/B Testing',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'مقارنة نسختين من صفحة أو إعلان أو عنوان لمعرفة أيهما يحقق أداءً وأعلى معدل استجابة حقيقي.',
    defEn: 'A randomized experiment comparing two versions of a webpage or app against each other.'
  },
  {
    id: 47,
    termAr: 'قيمة العلامة التجارية',
    termEn: 'Brand Equity',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'القيمة المالية والتسويقية التجارية المضافة التي تحققها الشركة لمجرد امتلاكها اسماً معروفاً وموثوقاً.',
    defEn: 'The commercial value that derives from consumer perception of the brand name.'
  },
  {
    id: 48,
    termAr: 'تسويق العصابات',
    termEn: 'Guerilla Marketing',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'أساليب تكتيكية مبتكرة وغير مألوفة تعتمد على العنصر الإبداعي والمفاجأة لتحقيق انتشار واسع بكلفة ضئيلة.',
    defEn: 'An unconventional, creative marketing strategy designed for maximum impact on a small budget.'
  },
  {
    id: 49,
    termAr: 'المحتوى المنشأ من العملاء',
    termEn: 'User Generated Content (UGC)',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'الصور، التقييمات، والتجارب التي يشاركها العملاء بعفوية على شبكات التواصل وتعتبر أكثر مصداقية.',
    defEn: 'Any form of content created by consumers rather than brands.'
  },
  {
    id: 50,
    termAr: 'إعادة الاستهداف الرقمي',
    termEn: 'Retargeting / Remarketing',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'إظهار إعلانات مخصصة للأشخاص الذين سبق لهم زيارة موقعك أو معايشة متجرك ولم يكملوا عملية الشراء.',
    defEn: 'Serving targeted ads to people who have already visited your website.'
  },
  {
    id: 51,
    termAr: 'معامل الانتشار الفيروسي',
    termEn: 'Viral Coefficient',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'عدد العملاء الجدد الذين يستقطبهم كل عميل حالي لمشروعك بفضل التوصيات أو تصميم الخدمة الذاتي.',
    defEn: 'The number of new users generated by an existing user.'
  },
  {
    id: 52,
    termAr: 'مؤشر الأداء الرئيسي',
    termEn: 'Key Performance Indicator (KPI)',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'مقياس قابل للقياس الكمي يُستخدم لتقييم مدى النجاح في تحقيق هدف استراتيجي أو تشغيلي محدد.',
    defEn: 'A quantifiable metric used to evaluate success in achieving key objectives.'
  },
  {
    id: 53,
    termAr: 'التسويق عبر المؤثرين الصغار',
    termEn: 'Micro-Influencer Marketing',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'التعاون مع صناع محتوى يمتلكون متابعين متخصصين (1,000 إلى 50,000) ويتمتعون بمعدل ثقة وتفاعل عالٍ جداً.',
    defEn: 'Partnering with creators who have specialized niche followings and high engagement rates.'
  },
  {
    id: 54,
    termAr: 'حلقة التغذية الراجعة',
    termEn: 'Feedback Loop',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'دورة استخدام ملاحظات العملاء وشكاواهم لتعديل وتحديث الاستراتيجية والمنتج بشكل نفعي مستمر.',
    defEn: 'A continuous cycle of utilizing customer outputs to refine products and strategy.'
  },
  {
    id: 55,
    termAr: 'حلقة الولاء التلقائي',
    termEn: 'Loyalty Loop',
    category: 'marketing',
    categoryLabelAr: 'التسويق والنمو',
    categoryLabelEn: 'Marketing & Growth',
    defAr: 'نموذج شراء متكرر يتخطى مرحلة تقييم المنافسين؛ حيث يعود العميل للشراء مباشرة بفضل سهولة ووضوح التجربة.',
    defEn: 'A customer lifecycle framework where satisfied users re-purchase directly without evaluating alternatives.'
  }
];
