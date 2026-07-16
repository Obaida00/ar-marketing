import {
  Rocket01Icon,
  ArrowDown02Icon,
  MarketingIcon,
  CodeXmlIcon,
  AdobePhotoshopIcon,
  InstagramIcon,
  Camera01Icon,
  Video02Icon,
  ServerStack01Icon,
  ContentWritingIcon,
  CubeIcon,
  Briefcase,
  ComputerProgramming01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import ServiceShowcaseCard from "@/components/service-showcase-card"
import MemberCard from "@/components/member-card"
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@workspace/ui/components/accordion"
import ReviewCard from "@/components/review-card"
import ContactForm from "@/components/contact-form"
export default function Page() {
  const servicesInfo = [
    {
      icon: CodeXmlIcon,
      title: "البرمجة والتطوير",
      description:
        "نقدم حلول برمجية مبتكرة تلبي احتياجات عملك وتساعدك على النمو",
    },
    {
      icon: MarketingIcon,
      title: "التسويق الرقمي",
      description:
        "نقدم حلول تسويقية مبتكرة تساعدك على الوصول إلى جمهورك المستهدف وزيادة مبيعاتك",
    },
    {
      icon: AdobePhotoshopIcon,
      title: "التصميم الجرافيكي",
      description:
        "حلول تصميم جذابة تُظهر هوية علامتك التجارية وتجذب انتباه عملائك",
    },
    {
      icon: InstagramIcon,
      title: "إدارة صفحات وسائل التواصل الاجتماعي",
      description: "نقدم حلول تسويقية مبتكرة عبر وسائل التواصل الاجتماعي",
    },
    {
      icon: Camera01Icon,
      title: "تصوير المنتجات والإعلانات",
      description: "نقدم خدمات التصوير الاحترافي للمنتجات والإعلانات",
    },
    {
      icon: Video02Icon,
      title: "المونتاج السينمائي",
      description: "نقدم خدمات المونتاج السينمائي لفيديوهاتك ومقاطعك ",
    },
  ]
  const ceos = [
    {
      name: "أيـــهم الشوفـي",
      role: "إدارة",
    },
    {
      name: "رنيم المحيثاوي",
      role: "إدارة",
    },
  ]

  const team = [
    {
      name: "طلال الغزال",
      role: "مطور واجهات أمامية",
      icon: ComputerProgramming01Icon,
    },

    {
      name: "قيس الفارس",
      role: "مطور واجهات خلفية",
      icon: ServerStack01Icon,
    },
    {
      name: "ماهر أبو حمدان",
      role: "مصمم جرافيك",
      icon: AdobePhotoshopIcon,
    },
    {
      name: "مرام طيفور",
      role: "مصممة جرافيك",
      icon: AdobePhotoshopIcon,
    },

    {
      name: "دانا أبو فاعور",
      role: "كاتبة محتوى",
      icon: ContentWritingIcon,
    },
    {
      name: "هادي نصر",
      role: "مصمم رسومات ثلاثية الأبعاد",
      icon: CubeIcon,
    },
    {
      name: "هاني شلغين",
      role: "مصور",
      icon: Camera01Icon,
    },
    {
      name: "جيما",
      role: "مصورة",
      icon: Camera01Icon,
    },
  ]

  const faqs = [
    {
      question: "ما هي الخدمات التي تقدمها AR Marketing؟",
      answer:
        "نقدم حلولًا تسويقية متكاملة تشمل إدارة وسائل التواصل الاجتماعي، تصميم الهوية البصرية، تصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، الحملات الإعلانية، إنتاج المحتوى، وتحسين محركات البحث (SEO).",
    },
    {
      question: "كيف يمكنني طلب خدمة؟",
      answer:
        "يمكنك التواصل معنا من خلال نموذج التواصل على الموقع أو عبر وسائل التواصل الاجتماعي، وسيقوم فريقنا بالتواصل معك لفهم احتياجاتك وتقديم عرض مناسب.",
    },
    {
      question: "هل تقدمون استشارة مجانية قبل بدء المشروع؟",
      answer:
        "نعم، نقدم جلسة استشارية أولية لمناقشة أهداف مشروعك واقتراح أفضل الحلول التسويقية التي تناسب نشاطك.",
    },
    {
      question: "كم تستغرق مدة تنفيذ المشروع؟",
      answer:
        "تختلف مدة التنفيذ حسب نوع المشروع وحجمه، وبعد دراسة المتطلبات سنزودك بجدول زمني واضح يتضمن جميع مراحل التنفيذ.",
    },
    {
      question: "هل يمكنكم إدارة حسابات التواصل الاجتماعي بشكل كامل؟",
      answer:
        "نعم، نوفر خدمة إدارة الحسابات بشكل احترافي، وتشمل إعداد خطة المحتوى، تصميم المنشورات، كتابة النصوص، النشر، متابعة التفاعل، وإعداد التقارير الدورية.",
    },
    {
      question: "هل تقدمون خدمات تصميم الهوية البصرية؟",
      answer:
        "بالتأكيد، نقوم بتصميم هوية بصرية متكاملة تشمل الشعار، الألوان، الخطوط، الأدلة الإرشادية، وجميع العناصر التي تعكس هوية علامتك التجارية.",
    },
    {
      question: "هل يمكنكم إنشاء متجر إلكتروني متكامل؟",
      answer:
        "نعم، نقوم بتطوير متاجر إلكترونية حديثة وسريعة الاستجابة، مع دعم إدارة المنتجات، الطلبات، وسائل الدفع، وتجربة مستخدم مميزة.",
    },
    {
      question: "هل الموقع سيكون متوافقًا مع الهواتف المحمولة؟",
      answer:
        "جميع المواقع التي نقوم بتطويرها تكون متوافقة بالكامل مع الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر لضمان أفضل تجربة للمستخدم.",
    },
    {
      question: "هل تقدمون خدمات تحسين محركات البحث (SEO)؟",
      answer:
        "نعم، نطبق أفضل ممارسات تحسين محركات البحث لزيادة ظهور موقعك في نتائج البحث وتحسين الوصول إلى العملاء المحتملين.",
    },
    {
      question: "هل يمكنكم إدارة الحملات الإعلانية المدفوعة؟",
      answer:
        "نعم، نقوم بإدارة الحملات الإعلانية على منصات مثل Google وMeta مع متابعة الأداء وتحسين النتائج لتحقيق أفضل عائد على الاستثمار.",
    },
    {
      question: "هل أستطيع طلب خدمة واحدة فقط؟",
      answer:
        "بالطبع، يمكنك الاستفادة من أي خدمة بشكل مستقل، كما يمكننا أيضًا اقتراح الخدمات التي تساعدك على تحقيق أهدافك بشكل أفضل.",
    },
    {
      question: "هل يمكن إجراء تعديلات أثناء تنفيذ المشروع؟",
      answer:
        "نعم، يمكن إجراء التعديلات ضمن نطاق العمل المتفق عليه، وسيتم مناقشة أي طلبات إضافية لضمان تحقيق أفضل نتيجة.",
    },
    {
      question: "هل توفرون الدعم الفني بعد تسليم المشروع؟",
      answer:
        "نعم، نقدم فترة دعم فني بعد التسليم لمعالجة أي ملاحظات أو مشكلات، كما نوفر خطط صيانة ودعم مستمرة عند الحاجة.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نوفر عدة وسائل دفع آمنة، ويتم الاتفاق على آلية الدفع وجدول الدفعات قبل بدء تنفيذ المشروع.",
    },
    {
      question: "كيف أتابع تقدم المشروع؟",
      answer:
        "نشارك مع عملائنا مراحل العمل بشكل دوري من خلال تقارير واجتماعات متابعة لضمان الشفافية وإبقاء العميل على اطلاع دائم بتقدم المشروع.",
    },
  ]

  const reviews = [
    {
      name: "أحمد خالد",
      username: "@ahmedk",
      quote:
        "فريق مثالي مليء بالخبرة وعملية التعاون من بداية الطريق إلى التسليم بشكل سليم، وتقديم النتائج الجودة العالية وتحسين المنتج والخدمة لتحقيق أهدافنا.",
      layout: "featured",
    },
    {
      name: "سارة علي",
      username: "@saraali",
      quote: "أعجبني الاهتمام بالتفاصيل وجودة التصاميم.",
      layout: "medium",
    },
    {
      name: "محمد ياسين",
      username: "@mohammad",
      quote: "التزموا بالموعد النهائي وكانت النتيجة أفضل من المتوقع.",
      layout: "medium",
    },
    {
      name: "نور الحسن",
      username: "@nourh",
      quote: "تجربة ممتازة والتواصل مع الفريق كان سريعًا وواضحًا.",
      layout: "wide",
    },
    {
      name: "عمر الشامي",
      username: "@omarsh",
      quote: "ساعدونا في تطوير هوية احترافية تعكس علامتنا التجارية.",
      layout: "small",
    },
  ]
  return (
    // Main container
    <div className="color relative z-0 w-full scrollbar-none overflow-x-hidden bg-background px-10">
      {/* Glow effects: */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]"></div>
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]"></div>
      {/* Content: */}
      <div className="relative flex min-h-svh flex-col justify-center gap-4 sm:items-center md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-col gap-5 not-md:text-center">
          <h1 className="font-thmanyah-heading text-5xl">
            علامة تجاريّة تليقُ بمشروعِك
          </h1>
          <p className="font-thmanyah-serif text-lg text-muted-foreground">
            نساعدك على بناء هوية بصرية قوية تُعبّر عن علامتك التجارية وتميّزها
            في السوق.
          </p>

          <div className="flex items-center gap-3 not-md:justify-center">
            <Button
              className={"w-fit font-thmanyah-subheading-sans"}
              size={"lg"}
            >
              {" "}
              <HugeiconsIcon
                icon={Rocket01Icon}
                className="size-5"
                strokeWidth={2}
              />
              اطلب استشارة
            </Button>
            <Button
              variant={"secondary"}
              className={
                "w-fit border border-primary/60 bg-accent font-thmanyah-subheading-sans hover:bg-accent/80"
              }
              size={"lg"}
            >
              {" "}
              <HugeiconsIcon
                icon={ArrowDown02Icon}
                className="size-5"
                strokeWidth={2}
              />
              تعرف على خدماتنا
            </Button>
          </div>
        </div>
        <div className="ease h-100 w-[50%] rounded-2xl border border-primary/60 bg-accent/30 p-4 shadow-2xl shadow-black/50 duration-200 not-md:hidden hover:-rotate-1 hover:border-primary/80 hover:shadow-primary/60">
          <div className="relative h-full w-full">
            <Image
              src={"/images/Marketing.jpg"}
              fill
              alt="Marketing"
              className="rounded-lg object-cover"
            ></Image>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="relative flex min-h-screen flex-col gap-8 pb-5 sm:pt-20 md:pt-25"
      >
        <div className="flex flex-col gap-5 not-md:text-center">
          <h1 className="font-thmanyah-heading text-5xl">خدماتنا</h1>
          <p className="font-thmanyah-serif text-muted-foreground">
            نقدم إليك أفضل الحلول التسويقية لكي تتميز في مشروعك
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesInfo.map((service, index) => (
            <ServiceShowcaseCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div
        id="our-vision"
        className="relative flex min-h-screen flex-col justify-center gap-20 pb-5 not-md:pt-15 not-lg:items-center"
      >
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center font-thmanyah-heading text-5xl">
            أعمالنا
          </h1>
          <p className="text-muted-foregrou max-w-lg font-thmanyah-serif text-lg leading-loose text-muted-foreground">
            ألقِ نظرة على بعضٍ من أعمالنا المميزة
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          <h1 className="font-thmanyah-heading text-6xl text-muted-foreground">
            هذا القسم ستتم تعبئته حالما يتم الربط مع قاعدة البيانات
          </h1>
        </div>
      </div>
      <div
        id="our-vision"
        className="relative flex min-h-screen flex-col justify-center gap-20 pb-5 not-md:pt-15 not-lg:items-center"
      >
        <h1 className="text-center font-thmanyah-heading text-5xl">رؤيتنا</h1>
        <div className="flex items-center justify-between gap-8">
          <p className="max-w-lg font-thmanyah-heading text-2xl leading-loose not-lg:text-center">
            نؤمن بأن التسويق الرقمي هو مفتاح النجاح في العصر الحديث، ونعمل على
            تطوير حلول تسويقية مبتكرة تساعد الشركات على النمو والتطور.
          </p>
          <div className="ease absolute -left-40 z-0 h-100 w-[50%] scale-100 rotate-4 rounded-2xl border border-muted-foreground/70 bg-accent/30 p-4 shadow-2xl shadow-black/50 duration-200 not-lg:hidden hover:border-primary hover:shadow-primary/60">
            <div className="relative h-full w-full">
              <Image
                src={"/images/Marketing2.jpg"}
                fill
                alt="Marketing"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="who-are-we"
        className="relative flex min-h-screen w-full flex-col items-center justify-center gap-20 pb-5 not-md:pt-20 not-lg:items-center lg:mt-20"
      >
        <div className="flex w-full flex-col justify-evenly gap-20 md:flex-row md:items-center md:justify-evenly md:gap-30">
          <h1 className="text-center font-thmanyah-heading text-5xl text-nowrap">
            الأسئلة المتكررة
          </h1>
          <Accordion className={"self-center border-none lg:max-w-4xl"}>
            {faqs.splice(0, 6).map((faq, index) => (
              <AccordionItem
                className={
                  "border-muted-foreground font-thmanyah-subheading-sans"
                }
                key={index}
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className={"text-muted-foreground"}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div
        id="our-vision"
        className="relative flex min-h-screen flex-col justify-center gap-20 pb-5 not-md:pt-15 not-lg:items-center"
      >
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center font-thmanyah-heading text-5xl">
            الآراء والتقييمات
          </h1>
          <p className="text-muted-foregrou max-w-lg font-thmanyah-serif text-lg leading-loose text-muted-foreground">
            شاهد ماذا يقول الناس عنا
          </p>
        </div>
        <div className="grid items-center gap-3 self-center sm:grid-cols-1 md:grid-cols-2 lg:max-w-[80%] lg:grid-cols-12">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              avatar={`https://avatar.vercel.sh/${review.name}`}
              layout={
                review.layout as
                  "featured" | "small" | "medium" | "wide" | "tall"
              }
              name={review.name}
              username={review.username}
              quote={review.quote}
            />
          ))}
        </div>
      </div>
      <div
        id="our-vision"
        className="relative flex min-h-screen flex-col justify-center gap-20 pb-5 not-md:pt-15 mt-50 not-lg:items-center"
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center font-thmanyah-heading text-5xl">
            حان الوقت لتصنع حضورك الرقمي !
          </h1>
          <p className="text-muted-foregrou max-w-lg font-thmanyah-serif text-lg leading-loose text-muted-foreground">
            ابدأ اليوم، ودعنا نبني معًا علامة تجارية تستحق أن تُرى
          </p>
        </div>
        <div className="w-full max-w-2xl rounded-lg bg-ca border-primary border p-10 self-center">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
