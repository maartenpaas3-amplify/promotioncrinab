import { ContentFR } from './fr';
import { contentEN } from './en';

export const contentAR: ContentFR = {
  header: {
    brandName: "بروموسيون كريناب",
    tagline: "التخزين التبريدي واللوجستيك الصناعي — الرباط",
    taglineShort: "تخزين تبريدي",
    nav: {
      hero: "الرئيسية",
      solutions: "حلول التخزين",
      facility: "منشآتنا",
      virtualTour: "جولة افتراضية",
      gallery: "معرض الصور",
      advantages: "لماذا نحن",
      contact: "طلب عرض سعر"
    },
    ctaButton: "طلب عرض سعر",
    phoneDisplay: "+212 661-536504",
    phoneHref: "tel:+212661536504",
    whatsappHref: "https://wa.me/212661536504",
    addressShort: "لوت 54، توش مارك، الرباط، المغرب",
  },
  hero: {
    titleLine1: "خزن بدقة عالية.",
    titleLine2: "وانمُ بدون حدود.",
    subheadline: "تخزين تبريدي وصناعي خاضع للتحكم الحراري في الرباط، مخصص لمهنيي الصناعات الغذائية والتوزيع.",
    ctaPrimary: "طلب عرض سعر",
    ctaSecondary: "اتصل بنا",
    trustLine: "احترافية عالية • حراسة أمنية 24/7 • معايير صحية صارمة • طاقة استيعابية مرنة",
    tempReadoutLabel: "درجة الحرارة الخاضعة للتحكم:",
    targetTempPositive: "+2°C",
    targetTempNegative: "-20°C",
    shutterPrompt: "اسحب للأعلى أو انقر لفتح البوابة",
  },
  solutions: {
    sectionTitle: "حلول التخزين المخصصة",
    sectionSubtitle: "3 بيئات حرارية مخصصة لتلبية متطلبات سلسلة التبريد والتخزين المهني.",
    acceptedProductsLabel: "أمثلة على المنتجات المقبولة:",
    tempRangeLabel: "النطاق:",
    requestQuoteForCategory: "طلب عرض سعر لـ",
    mostPopularLabel: "الأكثر طلباً",
    activeViewLabel: "العرض النشط",
    categories: [
      {
        id: "positive",
        title: "التبريد الإيجابي (+2°C إلى +8°C)",
        subtitle: "حفظ مثالي للمنتجات الطازجة والقابلة للتلف",
        tempRange: "+2°C / +8°C",
        badgeText: "تبريد إيجابي",
        description: "غرف تبريد إيجابية ذات رطوبة محكومة، مثالية للحفاظ على طزاجة وجودة البضائع ذات الدوران السريع.",
        items: [
          "مشتقات الحليب والألبان",
          "الفواكه والخضروات الطازجة",
          "الوجبات الجاهزة والتموين",
          "المشروبات والعصائر الطبيعية",
          "المنتجات الطازجة المعبأة"
        ],
        specs: [
          { label: "الضبط", value: "تنظيم تلقائي للحرارة" },
          { label: "الرطوبة", value: "بيئة محكومة الرطوبة" },
          { label: "التتبع", value: "مراقبة وتتبع مستمر" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "negative",
        title: "التبريد السلبي (-18°C إلى -25°C)",
        subtitle: "تجميد صناعي عالي الأداء وتخزين شديد البرودة",
        tempRange: "-18°C / -25°C",
        badgeText: "تجميد عميق",
        description: "مساحات تخزين تحت الصفر مجهزة بآلات تبريد صناعية متطورة لضمان عدم انقطاع سلسلة التبريد.",
        items: [
          "الدواجن واللحوم المقطعة",
          "الفواكه البحرية والأسماك",
          "المنتجات المجمدة والمثلجات",
          "العجائن والمكونات المجمدة",
          "مخزون الاحتياطي الاستراتيجي"
        ],
        specs: [
          { label: "الطاقة", value: "مجموعات تبريد احتياطية مزدوجة" },
          { label: "إذابة الصقيع", value: "دورة تلقائية ذكية" },
          { label: "العزل", value: "ألواح عازلة عالية الأداء" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "general",
        title: "التخزين العام والجاف",
        subtitle: "لوجستيك المواد الاستهلاكية والتعبئة والمواد الخام",
        tempRange: "+15°C / +25°C",
        badgeText: "تخزين جاف",
        description: "قاعات تخزين نظيفة وجيدة التهوية ومحمية من العوامل الجوية، مخصصة للمستلزمات المهنية والتعبئة والتغليف.",
        items: [
          "التعبئة والتغليف والكرتون الصناعي",
          "الأطباق الغذائية والأغلفة",
          "الأكياس والحاويات اللوجستية",
          "المستلزمات والمواد الاستهلاكية B2B",
          "المواد الخام المعبأة"
        ],
        specs: [
          { label: "الحماية", value: "مقاومة للغبار والآفات" },
          { label: "الارتفاع", value: "ارتفاع مناسب للتخزين" },
          { label: "الأرضية", value: "أرضية خرسانية عالية التحمل" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  },
  facilityPresentation: {
    badge: "منشآت على مساحة 5 000 م²", /* PLACEHOLDER — awaiting client confirmation of actual facility size */
    sectionTitle: "البنية التحتية و 11 منطقة تشغيلية",
    sectionSubtitle: "جولة افتراضية تفاعلية لمناطقنا التشغيلية الـ 11 المصممة للسلامة والكفاءة الصناعية.",
    certifiedLabel: "11 منطقة تشغيلية مؤمنة",
    allZonesLabel: "جميع المناطق الـ 11",
    zoneProgressLabel: "المنطقة",
    ofLabel: "من",
    tourTitle: "جولة توجيهية للمجمع اللوجستي",
    prevZone: "المنطقة السابقة",
    nextZone: "المنطقة التالية",
    viewDetails: "عرض التفاصيل والمواصفات الكاملة",
    specsTitle: "المواصفات الفنية والمعدات:",
    closeLabel: "إغلاق",
    areas: [
      {
        id: "entrance",
        title: "البوابة الرئيسية والمدخل الآمن",
        category: "الوصول والأمان",
        shortDesc: "نقطة مراقبة وتفتيش للدخول مع حواجز وتصفية المركبات.",
        fullDesc: "يتم تصفية الدخول إلى موقع بروموسيون كريناب بدقة من البوابة الرئيسية مع مراقبة الحراسة لكل شاحنة ومركبة.",
        specs: ["مركز حراسة", "مراقبة الدخول", "مدخل الشاحنات"],
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "reception",
        title: "الاستقبال اللوجستي والمكاتب",
        category: "الإدارة",
        shortDesc: "مكتب إداري مخصص للمعالجة السريعة لوثائق الشحن وإجراءات الدخول والخروج.",
        fullDesc: "مكتب استقبال حديث يتيح للسائقين ومنسقي اللوجستيك اعتماد وثائق النقل بسرعة ودون إضاعة الوقت.",
        specs: ["استقبال السائقين", "تسجيل الوثائق", "إدارة التدفقات"],
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "positive_rooms",
        title: "غرف التبريد الإيجابي",
        category: "التبريد الإيجابي",
        shortDesc: "غرف واسعة ومقسمة معزولة حرارياً ومحفوظة بين +2°م و +8°م.",
        fullDesc: "مجهزة برفوف رفيعة قابلة للتعديل لضمان توزيع متجانس للهواء وتدفق الحرارة المناسب.",
        specs: ["تحكم في الحرارة", "إضاءة مناسبة", "أرضية عالية التحمل"],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "negative_rooms",
        title: "غرف التبريد السلبي (التجميد)",
        category: "التجميد الشديد",
        shortDesc: "غرف تبريد ذات سعة كبيرة محفوظة في درجات حرارة تحت الصفر.",
        fullDesc: "أبواب عازلة ذات إغلاق محكم لمنع التسرب الحراري والحفاظ على استقرار البرودة.",
        specs: ["حرارة تحت الصفر", "أبواب عازلة", "معدات أمان"],
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "storage_areas",
        title: "باحات التخزين العام",
        category: "التخزين الجاف",
        shortDesc: "قاعات واسعة ومجهزة لمنصات البضائع ومواد التغليف.",
        fullDesc: "ممرات عريضة تتيح حركة آمنة للرافعات الشوكية ونواقل المنصات مع علامات توجيهية.",
        specs: ["منطقة تخزين مجهزة", "ممرات حركة", "تخزين منصات"],
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "corridors",
        title: "ممرات العبور العازلة للحرارة",
        category: "انسيابية الحركة",
        shortDesc: "مناطق عبور عازلة تحفظ سلسلة التبريد أثناء نقل المنصات.",
        fullDesc: "تمنع ممرات العبور الصدمات الحرارية أثناء عمليات الشحن والتفريغ وتحافظ على الحرارة المطلوبة.",
        specs: ["عوازل حرارية للعبور", "حماية ضد الصدمات", "انسيابية الحركة"],
        imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "loading",
        title: "أرصفة الشحن والتفريغ",
        category: "اللوجستيك",
        shortDesc: "أرصفة مجهزة ومناسبة للشاحنات المبردة المقطورة والشاحنات الصلبة.",
        fullDesc: "تسمح أرصفة الشحن بإجراء عمليات التحميل والتنزيل مع الحماية من التغيرات الحرارية.",
        specs: ["أرصفة شحن", "نواقل هيدروليكية", "عوازل إحكام"],
        imageUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "equipment",
        title: "محطة التبريد المركزية والمعدات",
        category: "الهندسة الصناعية",
        shortDesc: "تجهيزات تبريد صناعية تضمن إنتاج البرودة بشكل مستمر.",
        fullDesc: "محطة ميكانيكية تخضع للصيانة الدورية مع مولدات طاقة احتياطية لتفادي أي انقطاع.",
        specs: ["محطة تبريد", "طاقة احتياطية", "صيانة مستمرة"],
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "safety",
        title: "أنظمة السلامة ومكافحة الحرائق",
        category: "الحماية",
        shortDesc: "أنظمة مراقبة للموقع ومعدات شاملة للحماية من الحرائق.",
        fullDesc: "أنظمة حماية متكاملة تغطي كافة أرجاء المجمع لضمان سلامة الأشخاص والممتلكات.",
        specs: ["مراقبة بالموقع", "كشف الحرائق", "معدات السلامة"],
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "access",
        title: "ساحة الدوران وحركة الشاحنات",
        category: "ساحة العبور",
        shortDesc: "ساحة واسعة تتيح دوران ومناورة الشاحنات بسهولة.",
        fullDesc: "ساحة حركة مصممة لتفادي الاكتظاظ وتسهيل الحركة اليومية للبضائع.",
        specs: ["ساحة مناورة", "منطقة انتظار", "إضاءة المنطقة"],
        imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "other_spaces",
        title: "مساحات أخرى متاحة وتوسعة وظيفية",
        category: "مساحات مرنة",
        shortDesc: "مساحات متعددة الاستخدامات وقابلة للتهيئ لتجهيز الطلبيات والتغليف أو التخزين المؤقت.",
        fullDesc: "مساحات إضافية مرنة قابلة للتكيف وفق الاحتياجات الخاصة (تجميل الطلبيات، إعادة التغليف أو المناطق المؤقتة).",
        specs: ["مساحات مرنة", "وصول معدات المناورة", "منطقة قابلة للتهيئ"],
        imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  facilityVideo: {
    sectionTitle: "جولة افتراضية للمنشأة",
    sectionSubtitle: "استكشف موقعنا بالكامل عبر فيديو تعريفي شامل: من المداخل الخارجية إلى غرف التبريد وأرصفة الشحن.",
    chapterSelectorTitle: "فصول الجولة بالفيديو:",
    chapters: [
      {
        id: "ch-exterior",
        title: "1. المظهر الخارجي",
        timestamp: "0:00",
        description: "نظرة عامة على المبنى والساحات الخارجية للموقع.",
        posterUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-entrance",
        title: "2. المدخل والاستقبال",
        timestamp: "0:45",
        description: "نقطة المراقبة ومكتب الاستقبال اللوجستي لتسجيل الوثائق.",
        posterUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-storage",
        title: "3. مناطق التخزين",
        timestamp: "1:30",
        description: "قاعات التخزين العام وممرات حركة معدات المناورة.",
        posterUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-positive",
        title: "4. غرف التبريد الإيجابي",
        timestamp: "2:15",
        description: "غرف حفظ المنتجات تحت حرارة موجبة (+2°م إلى +8°م).",
        posterUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-negative",
        title: "5. غرف التجميد الشديد",
        timestamp: "3:00",
        description: "غرف التبريد السلبي للمنتجات المجمدة.",
        posterUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-equipment",
        title: "6. محطة التبريد المركزية",
        timestamp: "3:45",
        description: "المعدات الفنية والتجهيزات الميكانيكية للإنتاج.",
        posterUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-loading",
        title: "7. أرصفة الشحن والتفريغ",
        timestamp: "4:30",
        description: "أرصفة مجهزة بنواقل وعوازل لمنع التسرب الحراري.",
        posterUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-access",
        title: "8. الساحة وممرات الوصول",
        timestamp: "5:15",
        description: "ساحة الحركة والمناورة المخصصة لشاحنات النقل الثقيل.",
        posterUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
      }
    ],
    modalPlayTitle: "فيديو تعريفي — بروموسيون كريناب",
    modalPlaySubtitle: "جولة فيديو شاملة للمنشآت اللوجستية والتبريد."
  },
  gallery: { ...contentEN.gallery },
  whyChooseUs: {
    sectionTitle: "لماذا تختار بروموسيون كريناب",
    sectionSubtitle: "منصة لوجستية صُممت لضمان السلامة الحرارية، وأمن بضائعك، والمرونة التجارية الكاملة.",
    statsLabel: "المؤشرات الرئيسية للمركب",
    stats: [
      { value: "5 000 م²", /* PLACEHOLDER — awaiting client confirmation of actual facility size */ label: "المساحة الإجمالية للمركب", sublabel: "غرف تبريد وقاعات تخزين" },
      { value: "3", label: "أنظمة حرارية متكاملة", sublabel: "تبريد إيجابي، سلبي وتخزين جاف" },
      { value: "11", label: "مناطق تشغيلية", sublabel: "مسار لوجستي آمن ومؤمن" },
      { value: "24/7", label: "حراسة وأمن على مدار الساعة", sublabel: "مراقبة مستمرة للموقع" }
    ],
    clusters: [
      {
        clusterTitle: "1. التحكم الحراري، والأمن، والصرامة الصحية",
        clusterSubtitle: "معايير دولية ومراقبة مستمرة لحماية شاملة لمنتجاتك.",
        items: [
          {
            title: "احترافية استثنائية ومتابعة 24/7",
            description: "دعم مخصص وإدارة مستمرة من قبل خبرائنا في سلسلة التبريد. تسجيل مستمر لدرجات الحرارة ومتابعة صارمة لضمان تتبع المنتجات.",
            iconName: "ThermometerCheck",
            metric: "احترافية استثنائية"
          },
          {
            title: "النظافة والسلامة الصحية",
            description: "مخطط صارم للسلامة الصحية، تنظيف وتطهير يومي، مكافحة الآفات وبروتوكولات نظافة صارمة ملائمة للمتطلبات الغذائية.",
            iconName: "ShieldCheck",
            metric: "مطابقة صحية صارمة"
          },
          {
            title: "أمن وحراسة 24/7 ومولد طاقة احتياطي",
            description: "حراسة أمنية على مدار الساعة، كاميرات مراقبة موقعية، ونظام كهربائي احتياطي يضمن عدم انقطاع التبريد.",
            iconName: "Zap",
            metric: "أمن 24/7 ومولد احتياطي"
          }
        ]
      },
      {
        clusterTitle: "2. مرونة السعة والموقع المتميز",
        clusterSubtitle: "تنظيم مرن مصمم لتسهيل حركة البضائع ودعم نمو أعمالك.",
        items: [
          {
            title: "طاقة استيعابية مرنة حسب الطلب",
            description: "من حجز بضعة أماكن للمنصات إلى تخصيص غرف تبريد كاملة، مع عقود إيجار مرنة تناسب مواسم نشاطك.",
            iconName: "Layers",
            metric: "طاقة استيعابية مرنة حسب الطلب"
          },
          {
            title: "موقع استراتيجي بالرباط",
            description: "موقع متميز بـ لوت 54، توش مارك في الرباط، قريب من المحاور الطرقية الكبرى لتسهيل عمليات التوريد والتوزيع.",
            iconName: "MapPin",
            metric: "قرب من المحاور الطرقية والعاصمة"
          },
          {
            title: "أرصفة شحن وانسيابية في الحركة",
            description: "أرصفة هيدروليكية وعوازل إحكام تحفظ سلسلة التبريد وتسهل دوران الشاحنات مع فريق متخصص للشحن والتفريغ.",
            iconName: "Truck",
            metric: "انسيابية وسرعة في الشحن"
          }
        ]
      }
    ]
  },
  contact: {
    ...contentEN.contact,
    hoursWeekday: "ساعات العمل: سيتم التأكيد مع الفريق",
    hoursSaturday: "الاستقبال والدخول: حسب الموعد",
    hoursSunday: "الأحد: حسب الموعد",
    summaryPanel: {
      ...contentEN.contact.summaryPanel,
      title: "ملخص الطلب",
      subtitle: "تحديث مباشر وتفاعلي",
      selectedTypeLabel: "النظام الحراري:",
      estimatedVolumeLabel: "الحجم التقديري:",
      durationLabel: "مدة العقد:",
      serviceIncludedLabel: "تفاصيل العرض:",
      includedFeatures: [
        "سيتم تحديد الخدمات والضمانات وشروط التخزين التفصيلية مع فريقنا التجاري عند إعداد عرض السعر."
      ],
      submitButton: "إرسال طلب عرض السعر",
      submitSuccess: "تم إرسال طلبك بنجاح! سيتواصل معك فريقنا التجاري خلال 24 ساعة.",
      requiredDisclaimer: "*حقول إجبارية. يتم التعامل مع البيانات بسرية تامة."
    },
    options: {
      durationUnit: "أشهر",
      durationOptions: [
        { value: 1, label: "شهر واحد (قصير المدى)" },
        { value: 3, label: "3 أشهر (موسمي)" },
        { value: 6, label: "6 أشهر (متوسط المدى)" },
        { value: 12, label: "12 شهرًا (عقد سنوي)" }
      ],
      storageTypes: [
        { value: "positive", label: "التبريد الإيجابي (+2°C / +8°C)" },
        { value: "negative", label: "التبريد السلبي (-18°C / -25°C)" },
        { value: "general", label: "تخزين جاف / عادي" }
      ],
      volumeUnits: [
        { value: "pallets", label: "أماكن المنصات (EUR/VMF)" },
        { value: "m3", label: "أمتار مكعبة (m³)" },
        { value: "tons", label: "أطنان" }
      ]
    }
  },
  footer: {
    ...contentEN.footer,
    legalTitle: "الالتزامات والمعلومات",
    legalList: [
      "متابعة السلامة والنظافة الصحية",
      "الحفاظ المستمر على سلسلة التبريد",
      "الحراسة وأمن الموقع",
      "الشروط والأحكام وسياسة الخصوصية"
    ]
  }
};
