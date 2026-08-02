import { FrameworkItem, StatCard, PackagePlan, BlogPost, QuizQuestion } from '../types';

export const statsData: StatCard[] = [
  {
    id: 'stat-1',
    numberDisplay: '8%',
    secondaryNumber: '80%',
    isUp: false,
    highlightColor: '#C7362E', // Red highlight as specified in spec
    title: {
      ar: 'فجوة إدراك التميز بين الشركات والعملاء',
      en: 'Perception Gap in Experience Excellence'
    },
    description: {
      ar: 'فقط 8% من العملاء يرون أن الشركات تقدم تجربة مميزة حقيقية، بينما تعتقد 80% من تلك الشركات أنها تقدم تجربة فائقة.',
      en: 'Only 8% of customers believe companies provide a truly superior experience, while 80% of companies believe they do.'
    },
    source: 'Bain & Company'
  },
  {
    id: 'stat-2',
    numberDisplay: '34% / 13%',
    isUp: false,
    highlightColor: '#C7362E',
    title: {
      ar: 'أثر التجربة السيئة على مخاطر فقدان الإيرادات',
      en: 'Revenue Risk Impact of Bad Experiences'
    },
    description: {
      ar: '34% من العملاء يقلصون حجم إنفاقهم مباشرة بعد تعرضهم لتجربة سيئة واحدة، و13% يقطعون تعاملهم تماماً مع المنشأة.',
      en: '34% of customers cut their spending after a single poor experience, and 13% stop buying completely.'
    },
    source: 'Qualtrics XM Institute'
  },
  {
    id: 'stat-3',
    numberDisplay: '72%',
    isUp: true,
    highlightColor: '#102A43',
    title: {
      ar: 'الاستعداد للإنفاق مقابل تجربة عميل ممتازة',
      en: 'Willingness to Pay for Great CX'
    },
    description: {
      ar: '72% من العملاء مستعدون لإدراج ميزانيات أعلى والإنفاق بشكل أكثر سخاءً مقابل الحصول على تجربة عميل سلسة وموثوقة.',
      en: '72% of customers are willing to spend significantly more for a smooth, reliable, and premium customer experience.'
    },
    source: 'Qualtrics'
  }
];

export const frameworkItems: FrameworkItem[] = [
  {
    id: 'strategy-branding',
    number: 1,
    title: {
      ar: 'الاستراتيجية والعلامة',
      en: 'Strategy & Branding'
    },
    subtitle: {
      ar: 'بناء الهوية وتحديد وعد التجربة',
      en: 'Building Identity & Experience Promise'
    },
    description: {
      ar: 'صياغة رؤية تجربة العميل وتوحيد تموضع العلامة التجارية مع توقعات وسلوكيات شريحة العملاء المستهدفة.',
      en: 'Crafting the CX vision and aligning brand positioning with the expectations and behaviors of target customer segments.'
    },
    icon: 'Compass',
    color: '#102A43',
    accentBg: '#F0F4F8',
    pillars: [
      {
        title: { ar: 'ميثاق تجربة العميل', en: 'CX Charter' },
        desc: { ar: 'تحديد القيم الجوهرية والمعايير التي تحكم كافة التفاعلات مع العميل.', en: 'Defining core values and standards governing every customer interaction.' }
      },
      {
        title: { ar: 'شخصيات العملاء (Personas)', en: 'Customer Personas' },
        desc: { ar: 'تحليل أعمق لنقاط الألم والدوافع ونمط اتخاذ القرار.', en: 'Deep analysis of pain points, motivators, and decision-making patterns.' }
      },
      {
        title: { ar: 'خريطة رحلة العميل (CJ Maps)', en: 'Journey Mapping' },
        desc: { ar: 'توثيق المحطات والتحديات من الوعي حتى الولاء الكامل.', en: 'Documenting touchpoints and bottlenecks from awareness to loyalty.' }
      }
    ],
    keyDeliverables: {
      ar: ['وثيقة استراتيجية CX الشاملة', 'خارطة رحلة العميل التفصيلية', 'دليل معايير صوت العلامة التجارية'],
      en: ['Comprehensive CX Strategy Document', 'Detailed Customer Journey Map', 'Brand Voice & Standards Guide']
    }
  },
  {
    id: 'marketing-tech',
    number: 2,
    title: {
      ar: 'التسويق والتقنية',
      en: 'Marketing & Tech'
    },
    subtitle: {
      ar: 'تمكين الاتصال وأنظمة بيانات العملاء',
      en: 'Enabling Communication & Data Systems'
    },
    description: {
      ar: 'دمج الحلول التقنية المتقدمة وأدوات أتمتة التسويق لجمع وتحليل ملاحظات العملاء وتخصيص التفاعلات.',
      en: 'Integrating advanced tech solutions and marketing automation tools to capture real-time feedback and personalize touchpoints.'
    },
    icon: 'Cpu',
    color: '#C7362E',
    accentBg: '#FFF5F5',
    pillars: [
      {
        title: { ar: 'منظومة بيانات العميل (CDP/CRM)', en: 'Customer Data Platform' },
        desc: { ar: 'توحيد رؤية 360 درجة لكل عميل عبر القنوات المزدوجة.', en: 'Unifying a 360-degree view of every customer across omnichannel touchpoints.' }
      },
      {
        title: { ar: 'أنظمة قياس الصوت (VoC)', en: 'Voice of Customer (VoC)' },
        desc: { ar: 'أتمتة الاستبيانات ومؤشرات (NPS, CSAT, CES) في الوقت الفعلي.', en: 'Automating real-time surveys and indicators (NPS, CSAT, CES).' }
      },
      {
        title: { ar: 'التواصل المخصص (Personalization)', en: 'Targeted Engagement' },
        desc: { ar: 'توجيه الرسائل والمحتوى في الوقائع اللحظية المناسبة.', en: 'Triggering relevant context-aware messages and content in real time.' }
      }
    ],
    keyDeliverables: {
      ar: ['خطة البنية التحتية التقنية لـ CX', 'لوحة قياس مؤشرات الأداء الحية (Dashboard)', 'أتمتة استطلاعات الرأي والتغذية الراجعة'],
      en: ['CX Technology Stack Plan', 'Live KPI Measurement Dashboard', 'Automated Feedback Survey Setup']
    }
  },
  {
    id: 'operations-culture',
    number: 3,
    title: {
      ar: 'العمليات والثقافة',
      en: 'Operations & Culture'
    },
    subtitle: {
      ar: 'تحويل بيئة العمل وتناغم الفرق',
      en: 'Transforming Workplace & Team Alignment'
    },
    description: {
      ar: 'غرس ثقافة تمركز حول العميل لدى جميع الموظفين، وتطوير إجرائات العمل الداخلية لتيسير تقديم الخدمة.',
      en: 'Embedding a customer-centric culture across all teams and streamlining back-office operational workflows.'
    },
    icon: 'Users',
    color: '#102A43',
    accentBg: '#F0F4F8',
    pillars: [
      {
        title: { ar: 'تمكين وتدريب الصف الأول', en: 'Frontline Empowerment' },
        desc: { ar: 'إعطاء الموظف الصلاحية لحل المشكلات فور حدوثها دون بيروقراطية.', en: 'Empowering staff to resolve customer friction instantly without bureaucracy.' }
      },
      {
        title: { ar: 'إعادة هندسة الإجراءات (BPR)', en: 'Process Re-Engineering' },
        desc: { ar: 'إزالة التعقيدات التشغيلية لتقليل زمن الاستجابة والتنفيذ.', en: 'Eliminating operational bottlenecks to cut resolution cycle times.' }
      },
      {
        title: { ar: 'برامج التقدير والحوافز', en: 'Incentive Structure' },
        desc: { ar: 'ربط المكافآت السنوية بنسبة رضا العميل ومعدل استبقائه.', en: 'Tying performance incentives to customer satisfaction and retention.' }
      }
    ],
    keyDeliverables: {
      ar: ['برنامج تدريبي لثقافة العميل أولاً', 'دليل الإجراءات القياسية المحدث SOPs', 'نظام مكافآت ومؤشرات أداء الفرق'],
      en: ['Customer-First Culture Training Program', 'Updated SOPs Procedure Manual', 'Team Incentives & Recognition System']
    }
  },
  {
    id: 'service-delivery',
    number: 4,
    title: {
      ar: 'تقديم الخدمة',
      en: 'Service Delivery'
    },
    subtitle: {
      ar: 'التميز المتسق في نقاط التماس',
      en: 'Consistent Excellence Across Touchpoints'
    },
    description: {
      ar: 'ضمان تقديم خدمات وتجارب خالية من الفجوات، تتميز بالسرعة، السهولة، واللمسة الإنسانية الراقية.',
      en: 'Ensuring seamless service execution characterized by speed, ease, and a refined human touch.'
    },
    icon: 'Zap',
    color: '#C7362E',
    accentBg: '#FFF5F5',
    pillars: [
      {
        title: { ar: 'معايير جودة الخدمة (SLAs)', en: 'Service Level Agreements' },
        desc: { ar: 'التزام دقيق بالأوقات ومستويات الدعم والاستجابة.', en: 'Strict commitment to SLA resolution windows and response times.' }
      },
      {
        title: { ar: 'إدارة التعافي من الخطأ', en: 'Service Recovery Framework' },
        desc: { ar: 'بروتوكول فوري لتحويل العميل الغاضب إلى داعم وفي للعلامة.', en: 'Instant protocol to turn service failures into customer loyalty moments.' }
      },
      {
        title: { ar: 'التواجد المتعدد القنوات', en: 'Omnichannel Excellence' },
        desc: { ar: 'سلاسة الانتقال بين الموقع، التقديم الميداني، والتواصل الهاتفي.', en: 'Seamless transition across web, app, field, and phone support.' }
      }
    ],
    keyDeliverables: {
      ar: ['دليل جودة تقديم الخدمة', 'بروتوكول معالجة الشكاوى والتعافي', 'مخطط التواجد المتعدد المتكامل'],
      en: ['Service Delivery Quality Manual', 'Complaint Resolution Protocol', 'Integrated Omnichannel Architecture']
    }
  }
];

export const packagesData: PackagePlan[] = [
  {
    id: 'starter',
    name: {
      ar: 'باقة التقييم والتشخيص السريع',
      en: 'Quick Assessment & Diagnostic'
    },
    description: {
      ar: 'مثالية للمنشآت الراغبة في اكتشاف الفجوات الحالية وتحديد خارطة طريق التحول.',
      en: 'Ideal for organizations seeking to identify current gaps and map their CX transformation.'
    },
    targetAudience: {
      ar: 'الشركات الناشئة والمتوسطة',
      en: 'Startups & Mid-sized Enterprises'
    },
    duration: {
      ar: '2 إلى 3 أسابيع',
      en: '2 to 3 Weeks'
    },
    features: {
      ar: [
        'مراجعة شاملة لرحلة العميل الحالية',
        'مراجعة 5 قنوات رئيسية للتواصل',
        'تقرير تشخيص الفجوات مع التوصيات',
        'جلسة تقديم النتائج للقيادة التنفيذية'
      ],
      en: [
        'Comprehensive audit of current customer journey',
        'Review of 5 primary interaction channels',
        'Gap diagnostic report with prioritized actions',
        'Executive presentation & debrief session'
      ]
    }
  },
  {
    id: 'transformation',
    name: {
      ar: 'باقة إعادة الهيكلة والتصميم الشامل',
      en: 'Complete CX Redesign & Strategy'
    },
    badge: {
      ar: 'الأكثر طلباً',
      en: 'Most Popular'
    },
    recommended: true,
    description: {
      ar: 'التقييم، صياغة الاستراتيجية، وتصميم رحلات العملاء ومصفوفة قياس الأداء كاملة.',
      en: 'End-to-end evaluation, strategy formulation, journey mapping, and KPI framework creation.'
    },
    targetAudience: {
      ar: 'الشركات والمؤسسات الطامحة لقفزة نوعية',
      en: 'Established Companies & Enterprise'
    },
    duration: {
      ar: '6 إلى 8 أسابيع',
      en: '6 to 8 Weeks'
    },
    features: {
      ar: [
        'تحديد ميثاق وشخصيات العملاء (Personas)',
        'رسم خرائط رحلة العميل التفصيلية (CJ Maps)',
        'بناء مصفوفة مؤشرات الأداء (NPS, CSAT, CES)',
        'تطوير دليل إجراءات العمل القياسية SOPs',
        'ورشتان تفاعليتان لتدريب الفرق القيادية'
      ],
      en: [
        'Customer personas & charter development',
        'Detailed Customer Journey Mapping (CJ Maps)',
        'KPI framework creation (NPS, CSAT, CES)',
        'Standard Operating Procedures (SOPs) manual',
        '2 Interactive leadership training workshops'
      ]
    }
  },
  {
    id: 'enterprise',
    name: {
      ar: 'باقة الشريك الاستراتيجي والتحول الرقمي',
      en: 'Strategic Partner & Digital Execution'
    },
    description: {
      ar: 'شراكة كاملة تتضمن الإشراف على التطبيق، أتمتة الأنظمة وتوجيه التغيير الثقافي.',
      en: 'Full advisory partnership overseeing execution, tech automation, and cultural change management.'
    },
    targetAudience: {
      ar: 'المؤسسات الكبرى والقطاعات الحكومية',
      en: 'Large Enterprises & Public Sector'
    },
    duration: {
      ar: '6 أشهر إلى سنة (شراكة مستمرة)',
      en: '6 to 12 Months (Ongoing)'
    },
    features: {
      ar: [
        'جميع مميزات باقة التصميم الشامل',
        'تطبيق وتكامل أنظمة VoC والتسويق الرقمي',
        'إدارة التغيير الثقافي وتدريب الصف الأول',
        'متابعة ومراجعة شهرية لمؤشرات الأداء',
        'مستشار CX مخصص للمنشأة'
      ],
      en: [
        'All features of the Complete Redesign Plan',
        'VoC system integration & tech automation',
        'Culture change management & frontline training',
        'Monthly KPI tracking and board reporting',
        'Dedicated Senior CX Advisor'
      ]
    }
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-1',
    title: {
      ar: 'كيف تسد فجوة الـ 80% في إدراك تميز تجربة العميل؟',
      en: 'How to Bridge the 80% Perception Gap in Customer Experience'
    },
    excerpt: {
      ar: 'بينما تعتقد 80% من الشركات أن منتجاتها وخدماتها استثنائية، يوافقها 8% فقط من العملاء. اكتشف كيف تعالج هذا الخلل الهيكلي.',
      en: 'While 80% of companies believe they deliver superior experiences, only 8% of customers agree. Learn how to fix this gap.'
    },
    content: {
      ar: 'تشير أبحاث المؤسسات العالمية مثل Bain & Company إلى فجوة هائلة بين تصور الادارات التنفيذية وانطباع العميل الفعلي. لتجاوز هذه العقبة، يجب الاعتماد على أنظمة الصوت المباشر للعميل (VoC) بدلاً من الانطباعات الداخلية.',
      en: 'Research by firms like Bain & Company reveals a massive divide between executive perceptions and actual customer sentiment. Bridging this gap requires continuous Voice of Customer (VoC) feedback over internal assumptions.'
    },
    category: { ar: 'استراتيجية CX', en: 'CX Strategy' },
    date: '2026-07-28',
    readTime: { ar: '4 دقائق', en: '4 min read' },
    author: { name: 'فريق CX Strategy Lab', role: 'خبراء تجربة العميل' }
  },
  {
    id: 'post-2',
    title: {
      ar: 'العائد المالي لتقليل خسائر العملاء: تحليل أرقام Qualtrics',
      en: 'The ROI of Reducing Customer Churn: Qualtrics Data Analysis'
    },
    excerpt: {
      ar: '34% من العملاء ينقصون إنفاقهم بعد أول تجربة سيئة. يوضح هذا المقال معادلة حساب التكلفة الفعلية لخسارة العملاء.',
      en: '34% of clients reduce spending following a single bad interaction. This article breaks down the true cost of customer attrition.'
    },
    content: {
      ar: 'التعافي الفوري من الخطأ (Service Recovery) يمثل درع الحماية الأكثر فعالية لحماية الأرباح. الاستثمار في حل المشكلات عند النقطة الأولى يحمي المنشأة من الانخفاض الحاد في الإيرادات.',
      en: 'Proactive service recovery acts as the ultimate shield for bottom-line protection. Resolving friction points at first touch protects revenue from sharp drops.'
    },
    category: { ar: 'النمو والأرقام', en: 'Growth & Metrics' },
    date: '2026-07-20',
    readTime: { ar: '6 دقائق', en: '6 min read' },
    author: { name: 'د. خالد العمري', role: 'مستشار التحول الرقمي' }
  },
  {
    id: 'post-3',
    title: {
      ar: 'أهمية بناء ثقافة تمركز حول العميل داخل فرق العمل',
      en: 'Building a Customer-Centric Culture Within Your Teams'
    },
    excerpt: {
      ar: 'الأنظمة والتقنيات وحدها لا تكفي بدون بيئة عمل تحفز وتكافئ الموظف الذي يصنع فرقا في تجربة العميل.',
      en: 'Technology alone fails without an organizational culture that empowers frontline employees to deliver memorable moments.'
    },
    content: {
      ar: 'تفاعل الصف الأول مع المشكلات اليومية هو المحك الفعلي لتطبيقات تجربة العميل. من المهم تمكين الموظفين بصلاحيات مرنة للحل الفوري دون تدرج بيروقراطي.',
      en: 'Frontline reactions define the true reality of your customer experience. Empowering employees with frontline discretion builds genuine customer trust.'
    },
    category: { ar: 'الثقافة والعمليات', en: 'Culture & Operations' },
    date: '2026-07-15',
    readTime: { ar: '5 دقائق', en: '5 min read' },
    author: { name: 'سارة التميمي', role: 'مدير تطوير الثقافة المؤسسية' }
  }
];

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: 1,
    question: {
      ar: 'كيف يتم قياس ملاحظات العملاء وتغذيتهم الراجعة في منشأتكم؟',
      en: 'How does your company gather and measure customer feedback?'
    },
    options: [
      { text: { ar: 'لا يوجد نظام منتظم، نعتمد على الانطباعات العامة', en: 'No formal system; based on intuition' }, score: 1 },
      { text: { ar: 'استبيانات يدوية سنوية أو نصف سنوية', en: 'Manual annual or biannual surveys' }, score: 2 },
      { text: { ar: 'نظام قياس تلقائي لحظي (NPS/CSAT) مرتبطة بالأنظمة', en: 'Automated real-time survey system (NPS/CSAT)' }, score: 3 }
    ]
  },
  {
    id: 2,
    question: {
      ar: 'ما مدى صلاحية موظفي الصف الأول في حل مشكلات العملاء فورياً؟',
      en: 'What level of authority do your frontline staff have for instant issue resolution?'
    },
    options: [
      { text: { ar: 'تتطلب موافقة الإدارة ورئيس القسم دائماً', en: 'Always requires management approval' }, score: 1 },
      { text: { ar: 'صلاحية مريحة ضمن حدود مالية أو إجرائية ضيقة', en: 'Limited discretion within tight constraints' }, score: 2 },
      { text: { ar: 'تمكين كامل وحرية تصرف فورية لتعويض العميل', en: 'Full empowerment for instant customer recovery' }, score: 3 }
    ]
  },
  {
    id: 3,
    question: {
      ar: 'هل تمتلك منشأتكم وثيقة ومخطط معتمد لخرائط رحلة العميل (CJ Maps)؟',
      en: 'Do you have documented and updated Customer Journey Maps?'
    },
    options: [
      { text: { ar: 'لا توجد أي خرائط موثقة لرحلة العميل', en: 'No documented journey maps exist' }, score: 1 },
      { text: { ar: 'توجد خرائط قديمة لا تراجع بانتظام', en: 'Outdated maps that are rarely reviewed' }, score: 2 },
      { text: { ar: 'خرائط محدثة ومربوطة بمؤشرات أداء كل قسم', en: 'Up-to-date maps linked to departmental KPIs' }, score: 3 }
    ]
  },
  {
    id: 4,
    question: {
      ar: 'هل ترتبط مكافآت وحوافز فرق العمل بنسبة رضا العميل؟',
      en: 'Are team incentives tied to customer satisfaction metrics?'
    },
    options: [
      { text: { ar: 'تعتمد فقط على المبيعات والأهداف المالية', en: 'Tied solely to sales and financial targets' }, score: 1 },
      { text: { ar: 'تدخل نسبياً بشكل غير مباشر في التقييم', en: 'Partially considered in overall appraisals' }, score: 2 },
      { text: { ar: 'مرتبطة بشكل مباشر وصريح بمؤشرات تجربة العميل', en: 'Directly linked to CX performance metrics' }, score: 3 }
    ]
  }
];

export const gutenbergBlockThemeSpec = {
  themeJson: {
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "version": 3,
    "settings": {
      "color": {
        "palette": [
          { "name": "White Canvas", "slug": "white", "color": "#FFFFFF" },
          { "name": "Navy Blue Text", "slug": "navy", "color": "#102A43" },
          { "name": "Accent Red", "slug": "red", "color": "#C7362E" },
          { "name": "Light Neutral", "slug": "light-gray", "color": "#F0F4F8" }
        ]
      },
      "typography": {
        "fontFamilies": [
          {
            "fontFamily": "Plus Jakarta Sans, Cairo, sans-serif",
            "name": "Primary Font",
            "slug": "primary"
          }
        ]
      },
      "layout": {
        "contentSize": "1140px",
        "wideSize": "1320px"
      }
    },
    "styles": {
      "color": {
        "background": "var(--wp--preset--color--white)",
        "text": "var(--wp--preset--color--navy)"
      }
    }
  },
  templates: [
    { name: "front-page.html", label: "الصفحة الرئيسية (Front Page)", type: "Core Page" },
    { name: "single.html", label: "قالب المقال الفردي (Single Post)", type: "Post Layout" },
    { name: "archive.html", label: "قالب أرشيف المدونة (Archive)", type: "Blog Listing" }
  ]
};
