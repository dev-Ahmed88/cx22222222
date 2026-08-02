import { Language } from '../types';

export interface PuzzlePieceItem {
  id: string;
  row: number; // 0 to 3
  col: number; // 0 to 3
  title: { ar: string; en: string };
  fullTitle: { ar: string; en: string };
  category: 'group1' | 'group2' | 'group3' | 'group4' | 'core';
  categoryLabel: { ar: string; en: string };
  isCenter?: boolean;
  description: { ar: string; en: string };
  pillars: { ar: string[]; en: string[] };
  keyDeliverables: { ar: string[]; en: string[] };
  icon: string;
}

export const puzzleCategories = [
  { id: 'all', label: { ar: 'جميع القطع (16 قطعة)', en: 'All Pieces (16)' }, color: '#1C1614' },
  { id: 'core', label: { ar: 'النواة المركزية (تجربة العميل)', en: 'Central Core (CX)' }, color: '#C7362E' },
  { id: 'group1', label: { ar: 'الاستراتيجية والعلامة', en: 'Strategy & Brand' }, color: '#2C2420' },
  { id: 'group2', label: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' }, color: '#5C4A3E' },
  { id: 'group3', label: { ar: 'العمليات والثقافة', en: 'Operations & Culture' }, color: '#786054' },
  { id: 'group4', label: { ar: 'تقديم الخدمة والابتكار', en: 'Service Delivery & Innovation' }, color: '#B84E38' },
];

export const puzzleGridData: PuzzlePieceItem[] = [
  // ROW 0
  {
    id: 'strategy',
    row: 0,
    col: 0,
    title: { ar: 'استراتيجية', en: 'Strategy' },
    fullTitle: { ar: 'استراتيجية تجربة العميل', en: 'Customer Experience Strategy' },
    category: 'group1',
    categoryLabel: { ar: 'الاستراتيجية والعلامة', en: 'Strategy & Branding' },
    description: {
      ar: 'صياغة الميثاق والرؤية المستقبلية لتجربة العميل وتوافقها التام مع الأهداف الاستراتيجية العليا للمنشأة.',
      en: 'Formulating the charter and strategic vision for CX aligned with top-level business goals.'
    },
    pillars: {
      ar: ['ميثاق التجربة', 'الأهداف الاستراتيجية العليا', 'توافق الرؤية والقيادة'],
      en: ['CX Charter', 'Top Executive Goals', 'Vision & Leadership Alignment']
    },
    keyDeliverables: {
      ar: ['وثيقة ميثاق CX الشاملة', 'خارطة الطريق الاستراتيجية', 'مصفوفة حوكمة التميز'],
      en: ['Comprehensive CX Strategy Document', 'Strategic Roadmap', 'Governance & Quality Matrix']
    },
    icon: 'Compass'
  },
  {
    id: 'brand',
    row: 0,
    col: 1,
    title: { ar: 'العلامة', en: 'Brand' },
    fullTitle: { ar: 'هوية ووعد العلامة التجارية', en: 'Brand Promise & Identity' },
    category: 'group1',
    categoryLabel: { ar: 'الاستراتيجية والعلامة', en: 'Strategy & Branding' },
    description: {
      ar: 'ترجمة وعد العلامة التجارية وقيمها الهيكلية إلى سلوكيات ومعايير ملموسة في كل محطة تفاعل.',
      en: 'Translating brand promise and core values into tangible behaviors at every touchpoint.'
    },
    pillars: {
      ar: ['وعد العلامة التجاري', 'صوت وهوية الاتصال', 'معايير التميز الانطباعي'],
      en: ['Brand Promise', 'Tone of Voice', 'Perception Standards']
    },
    keyDeliverables: {
      ar: ['دليل صوت الهوية ومعاييرها', 'هندسة انطباعات العملاء', 'دليل التوافق البصري واللفظي'],
      en: ['Brand Voice & Standards Guide', 'Touchpoint Experience Guidelines', 'Visual & Verbal Identity Manual']
    },
    icon: 'Award'
  },
  {
    id: 'marketing',
    row: 0,
    col: 2,
    title: { ar: 'تسويق', en: 'Marketing' },
    fullTitle: { ar: 'التسويق الموجه بتجربة العميل', en: 'Customer-Centric Marketing' },
    category: 'group2',
    categoryLabel: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' },
    description: {
      ar: 'صياغة حملات تسويقية مبنية على بيانات وااحتياجات العملاء الفعلية بدلاً من الافتراضات العشوائية.',
      en: 'Crafting marketing campaigns rooted in actual customer data and behavioral insights.'
    },
    pillars: {
      ar: ['التجزئة المتقدمة للعملاء', 'التشغيل اللحظي Contextual Triggering', 'التواصل المخصص Personalized Outreach'],
      en: ['Advanced Customer Segmentation', 'Real-Time Triggering', 'Personalized Communication']
    },
    keyDeliverables: {
      ar: ['خطة الحملات المخصصة', 'خرائط التفاعل التسويقي', 'قياس عائد الاستثمار التسويقي ROI'],
      en: ['Targeted Campaign Strategy', 'Marketing Engagement Mapping', 'Customer Acquisition ROI Framework']
    },
    icon: 'Target'
  },
  {
    id: 'sales',
    row: 0,
    col: 3,
    title: { ar: 'مبيعات', en: 'Sales' },
    fullTitle: { ar: 'مبيعات وتجربة الشراء السلسة', en: 'Sales & Seamless Purchasing' },
    category: 'group2',
    categoryLabel: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' },
    description: {
      ar: 'إزالة الاحتكاك من رحلة التعاقد والشراء، وتسهيل إجراءات البيع لبناء مسار شراء سلس وموثوق.',
      en: 'Removing friction from the sales funnel and purchasing journey to foster trust.'
    },
    pillars: {
      ar: ['تبسيط رحلة الشراء', 'البيع الاستشاري البناء', 'سهولة التعاقد والدفع'],
      en: ['Buying Journey Simplification', 'Consultative Value Selling', 'Seamless Contracting']
    },
    keyDeliverables: {
      ar: ['دليل رحلة الشراء السريعة', 'نظام مسار الفرص البيعية', 'معايير جودة المعاملات البيعية'],
      en: ['Fast-Track Buying Process Guide', 'Sales Pipeline Journey Map', 'Transaction Quality Standards']
    },
    icon: 'TrendingUp'
  },

  // ROW 1
  {
    id: 'research',
    row: 1,
    col: 0,
    title: { ar: 'بحوث', en: 'Research' },
    fullTitle: { ar: 'أبحاث ودراسات سلوك العملاء', en: 'Customer Research & Insights' },
    category: 'group1',
    categoryLabel: { ar: 'الاستراتيجية والعلامة', en: 'Strategy & Branding' },
    description: {
      ar: 'إجراء الدراسات الكمية والنوعية ورسم شخصيات العملاء (Personas) لتحليل الاحتياجات ونقاط الألم.',
      en: 'Conducting quantitative and qualitative research to build accurate personas and pin point friction.'
    },
    pillars: {
      ar: ['شخصيات العملاء (Personas)', 'خرائط رحلة العميل (CJM)', 'دراسات نقاط الألم Friction Points'],
      en: ['Detailed Customer Personas', 'Customer Journey Maps', 'Pain Point Root Cause Analysis']
    },
    keyDeliverables: {
      ar: ['وثيقة شخصيات العملاء (Personas)', 'خرائط رحلة العميل الموثقة', 'تقرير تحليل الثغرات الفرص'],
      en: ['Customer Personas Dossier', 'End-to-End Journey Maps', 'Unmet Needs & Gap Analysis']
    },
    icon: 'Search'
  },
  {
    id: 'cx-core',
    row: 1,
    col: 1,
    title: { ar: 'تجربة العميل', en: 'Customer Experience' },
    fullTitle: { ar: 'تجربة العميل (النواة المركزية)', en: 'Customer Experience (Central Core Engine)' },
    category: 'core',
    categoryLabel: { ar: 'النواة المركزية', en: 'Central Core Engine' },
    isCenter: true,
    description: {
      ar: 'النواة المركزية والقلب النابض للمؤسسة، حيث تتداخل وتتجمع فيها كافة الأقسام والمكونات (الـ 15 قطعة الأخرى) لتقديم قيمة استثنائية موحدة للعميل.',
      en: 'The core engine binding all 15 business components into a single unified customer-centric ecosystem.'
    },
    pillars: {
      ar: ['التكامل المؤسسي الشامل', 'التمركز الفعلي حول العميل', 'حلقة التغذية الراجعة المغلقة Close-the-loop'],
      en: ['Cross-Departmental Synergy', 'True Customer Centricity', 'Closed-Loop Action Engine']
    },
    keyDeliverables: {
      ar: ['نظام تشغيل تجربة العميل (CX-OS)', 'مصفوفة الترابط والاعتماد المتبادل', 'لوحة التحكم المركزية القيادية'],
      en: ['CX Operating System (CX-OS)', 'Interdependence Matrix', 'Executive CX Command Dashboard']
    },
    icon: 'Heart'
  },
  {
    id: 'content',
    row: 1,
    col: 2,
    title: { ar: 'محتوى', en: 'Content' },
    fullTitle: { ar: 'صناعة واستراتيجية المحتوى', en: 'Content Strategy & Messaging' },
    category: 'group2',
    categoryLabel: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' },
    description: {
      ar: 'تطوير محتوى إرشادي وتثقيفي قيم يرافق العميل في مختلف محطات رحلته ويمده بالمعلومات الواضحة.',
      en: 'Creating valuable, clear content that guides the customer across every lifecycle stage.'
    },
    pillars: {
      ar: ['المحتوى التوجيهي والمساعد', 'وضوح لغة التواصل', 'التعبير الديناميكي عن الحلول'],
      en: ['Guidance & Educational Content', 'Clarity of Message', 'Dynamic Contextual Copy']
    },
    keyDeliverables: {
      ar: ['دليل استراتيجية المحتوى الموجه', 'مكتبة الأسئلة المتكررة والإرشادات', 'محتوى أدوات المساعدة الذاتية'],
      en: ['Customer-Centric Content Playbook', 'Self-Service Knowledge Base', 'Onboarding Content Suite']
    },
    icon: 'FileText'
  },
  {
    id: 'channels',
    row: 1,
    col: 3,
    title: { ar: 'قنوات', en: 'Channels' },
    fullTitle: { ar: 'إدارة القنوات المتعددة (Omnichannel)', en: 'Omnichannel Engagement' },
    category: 'group2',
    categoryLabel: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' },
    description: {
      ar: 'ربط وتكامل كافة قنوات التواصل (الموقع، التطبيق، الفروع، الهاتف، التواصل الاجتماعي) لضمان تجربة متصلة.',
      en: 'Integrating digital and physical channels for uninterrupted customer journeys.'
    },
    pillars: {
      ar: ['التواجد المتصل Omnichannel', 'اتساق التجربة عبر المنافذ', 'سلاسة التنقل بدون تكرار البيانات'],
      en: ['Seamless Omnichannel Connectivity', 'Cross-Channel Consistency', 'Zero-Repetition Handoffs']
    },
    keyDeliverables: {
      ar: ['مخطط توزيع وحوكمة القنوات', 'بروتوكول تحويل البيانات اللحظي', 'معايير الجودة الرقمية والميدانية'],
      en: ['Omnichannel Governance Blueprint', 'Real-Time Channel Handoff Matrix', 'Channel SLA Standards']
    },
    icon: 'Share2'
  },

  // ROW 2
  {
    id: 'operations',
    row: 2,
    col: 0,
    title: { ar: 'عمليات', en: 'Operations' },
    fullTitle: { ar: 'إعادة هندسة الإجراءات والعمليات', en: 'Process & Operational Engineering' },
    category: 'group3',
    categoryLabel: { ar: 'العمليات والثقافة', en: 'Operations & Culture' },
    description: {
      ar: 'تبسيط وترشيد العمليات الخلفية (Back-office) لتقليل زمن الاستجابة ومنع التعقيدات أمام العميل.',
      en: 'Streamlining back-office workflows to accelerate service delivery and remove bureaucracy.'
    },
    pillars: {
      ar: ['هندسة الإجراءات (BPR)', 'تقليل زمن دورة تنفيذ الخدمة', 'التعافي التشغيلي من الأخطاء'],
      en: ['Business Process Re-engineering', 'Cycle Time Reduction', 'Operational Resilience']
    },
    keyDeliverables: {
      ar: ['دليل الإجراءات القياسية المحدث SOPs', 'مخطط سير العمل المبسط', 'خطة القضاء على البيروقراطية'],
      en: ['Updated SOPs Procedure Manual', 'Streamlined Workflow Blueprint', 'Friction Elimination Plan']
    },
    icon: 'Settings'
  },
  {
    id: 'staff',
    row: 2,
    col: 1,
    title: { ar: 'الكوادر', en: 'People & Staff' },
    fullTitle: { ar: 'تمكين الكوادر وثقافة العمل', en: 'People, Talent & Culture' },
    category: 'group3',
    categoryLabel: { ar: 'العمليات والثقافة', en: 'Operations & Culture' },
    description: {
      ar: 'بناء وتدريب فريق العمل وتزويدهم بالصلاحيات الكافية لحل مشكلات العملاء ومكافأتهم على التميز.',
      en: 'Training, empowering, and incentivizing staff to champion customer happiness.'
    },
    pillars: {
      ar: ['تمكين الصف الأول (Frontline)', 'ثقافة العميل أولاً (Customer-First)', 'ربط الحوافز برضا العميل'],
      en: ['Frontline Empowerment', 'Customer-First Mindset', 'Incentives Tied to Satisfaction']
    },
    keyDeliverables: {
      ar: ['برنامج تدريب ثقافة الخدمة الممتازة', 'مصفوفة الصلاحيات المباشرة', 'نظام تقدير ومكافآت الموظفين'],
      en: ['Customer Culture Training Kit', 'Frontline Empowerment Guidelines', 'Employee CX Recognition System']
    },
    icon: 'Users'
  },
  {
    id: 'technology',
    row: 2,
    col: 2,
    title: { ar: 'تقنية', en: 'Technology' },
    fullTitle: { ar: 'الأنظمة التقنية وبنية العميل (CRM/CDP)', en: 'CX Tech Stack & CRM Systems' },
    category: 'group2',
    categoryLabel: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' },
    description: {
      ar: 'تأمين المنصات والأنظمة المتقدمة لتوحيد سجّلات البيانات وإتاحة رؤية 360 درجة لموظفي الدعم.',
      en: 'Deploying CRM, CDP, and ticketing platforms for a 360-degree customer view.'
    },
    pillars: {
      ar: ['منظومة بيانات العميل (CDP/CRM)', 'أتمتة طلبات الخدمة والمهام', 'تكامل الأنظمة البرمجية APIs'],
      en: ['360-Degree CDP / CRM Stack', 'Service Automation & Ticketing', 'Seamless API Integrations']
    },
    keyDeliverables: {
      ar: ['مخطط البنية التحتية التقنية لـ CX', 'دليل ربط وتكامل الأنظمة', 'حزمة أدوات الأتمتة والذكاء'],
      en: ['CX Technology Architecture Plan', 'System Integration Specification', 'Service Automation Toolset']
    },
    icon: 'Cpu'
  },
  {
    id: 'data',
    row: 2,
    col: 3,
    title: { ar: 'بيانات ورؤى', en: 'Data & Insights' },
    fullTitle: { ar: 'بيانات ورؤى العملاء التنبؤية', en: 'Data & Analytics Insights' },
    category: 'group2',
    categoryLabel: { ar: 'التسويق والتقنية', en: 'Marketing & Tech' },
    description: {
      ar: 'تحليل سلوكيات العملاء والتنبؤ برغباتهم المستقبلية باستخدام التحليلات المتقدمة والذكاء الاصطناعي.',
      en: 'Leveraging data analytics to predict customer behavior and drive proactive actions.'
    },
    pillars: {
      ar: ['التحليل التنبؤي للسلوك', 'لوحات المراقبة اللحظية', 'تحليل انطباعات ومشاعر العملاء'],
      en: ['Predictive Behavior Modeling', 'Real-Time Analytics Dashboard', 'Sentiment & Emotion Analysis']
    },
    keyDeliverables: {
      ar: ['لوحة قياس البيانات التفاعلية (Dashboard)', 'تقرير التحليلات التنبؤية والاتجاهات', 'نموذج التنبؤ بنسبة تسرب العملاء'],
      en: ['Interactive Data Dashboard', 'Predictive Trends & Insights Report', 'Customer Churn Risk Model']
    },
    icon: 'BarChart3'
  },

  // ROW 3
  {
    id: 'service',
    row: 3,
    col: 0,
    title: { ar: 'خدمة', en: 'Service' },
    fullTitle: { ar: 'تقديم الخدمة والدعم المباشر', en: 'Service Delivery & Support' },
    category: 'group4',
    categoryLabel: { ar: 'تقديم الخدمة والابتكار', en: 'Service Delivery & Innovation' },
    description: {
      ar: 'تقديم الدعم الفني والخدمي بأعلى معايير السرعة، والدقة، والاحترافية عند كل طلب.',
      en: 'Providing high-touch support and service execution adhering strictly to SLAs.'
    },
    pillars: {
      ar: ['معايير SLAs الدقيقة', 'بروتوكول التعافي السريع Service Recovery', 'سهولة ونقاء مسار الخدمة'],
      en: ['Strict Service Level SLAs', 'Service Recovery Protocol', 'Frictionless Service Execution']
    },
    keyDeliverables: {
      ar: ['دليل معايير تقديم الخدمة الجودة', 'بروتوكول معالجة الشكاوى والتصعيد', 'مقياس الاستجابة والحل من المرة الأولى FCR'],
      en: ['Service Quality Standards Manual', 'Complaint Escalation Protocol', 'First Contact Resolution (FCR) System']
    },
    icon: 'Zap'
  },
  {
    id: 'product',
    row: 3,
    col: 1,
    title: { ar: 'منتج', en: 'Product' },
    fullTitle: { ar: 'تصميم وجاذبية المنتج', en: 'Product Design & Experience' },
    category: 'group3',
    categoryLabel: { ar: 'العمليات والثقافة', en: 'Operations & Culture' },
    description: {
      ar: 'تطوير المنتج وسهولة استخدامه ليحقق أقصى فاعلية وقيمة مضافة تلبي طموح العميل.',
      en: 'Designing intuitive products that create immediate value and delight.'
    },
    pillars: {
      ar: ['سهولة استخدام المنتج UX', 'القيمة المضافة الملموسة', 'التطوير المبني على ملحوظات العملاء'],
      en: ['Product Usability (UX)', 'Tangible Added Value', 'Feedback-Driven Product Iteration']
    },
    keyDeliverables: {
      ar: ['تقرير اختبارات تجربة واستخدام المنتج', 'دليل مواصفات تجربة العميل بالمنتج', 'خارطة ميزات ومراحل المنتج'],
      en: ['Product Usability Testing Report', 'Product Experience Specification', 'Customer-Centric Feature Roadmap']
    },
    icon: 'Package'
  },
  {
    id: 'innovation',
    row: 3,
    col: 2,
    title: { ar: 'ابتكار', en: 'Innovation' },
    fullTitle: { ar: 'الابتكار وتصميم التجارب الجديدة', en: 'CX Innovation & Experience Design' },
    category: 'group4',
    categoryLabel: { ar: 'تقديم الخدمة والابتكار', en: 'Service Delivery & Innovation' },
    description: {
      ar: 'استكشاف نماذج خدمة جديدة غير تقليدية تفاجئ العميل وتحدث ميزة تنافسية فارقة.',
      en: 'Exploring innovative service concepts that set new market benchmarks.'
    },
    pillars: {
      ar: ['التفكير التصميمي Design Thinking', 'ابتكار تجارب سابقة لتوقع العميل', 'تجريب وتطوير النماذج الأولية Prototypes'],
      en: ['Experience Design Thinking', 'Exceeding Expectations Innovation', 'Rapid Prototyping']
    },
    keyDeliverables: {
      ar: ['دليل الابتكار في تجربة العميل', 'نماذج الخدمات التجريبية المبتكرة', 'خطة إطلاق الفكرة المستقبليّة'],
      en: ['CX Innovation Framework', 'Prototyped Service Offerings', 'Next-Gen CX Concept Manual']
    },
    icon: 'Sparkles'
  },
  {
    id: 'measurement',
    row: 3,
    col: 3,
    title: { ar: 'قياس', en: 'Measurement' },
    fullTitle: { ar: 'قياس ومراقبة الأداء (VoC Metrics)', en: 'Performance Measurement & VoC' },
    category: 'group4',
    categoryLabel: { ar: 'تقديم الخدمة والابتكار', en: 'Service Delivery & Innovation' },
    description: {
      ar: 'متابعة مؤشرات رضا العملاء وصوت العميل (NPS, CSAT, CES, FCR) بشكل لحظي وربطها بالتحسين المستمر.',
      en: 'Continuous tracking of NPS, CSAT, CES, and FCR metrics to guide operational decisions.'
    },
    pillars: {
      ar: ['مؤشرات الرضا والصوت (NPS/CSAT)', 'مؤشر مجهود العميل (CES)', 'حلقة المعالجة والمتابعة (Close-the-Loop)'],
      en: ['NPS / CSAT Feedback Tracking', 'Customer Effort Score (CES)', 'Closed-Loop Improvement Engine']
    },
    keyDeliverables: {
      ar: ['لوحة متابعة مؤشرات VoC التفاعلية', 'تقرير قياس الأداء وتحليل الاتجاهات', 'دليل حلقة الاستجابة التلقائية'],
      en: ['Real-Time VoC Metrics Dashboard', 'CX Performance Trends Report', 'Closed-Loop Response Playbook']
    },
    icon: 'PieChart'
  }
];
