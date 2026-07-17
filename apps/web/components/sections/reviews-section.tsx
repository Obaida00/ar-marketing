import ReviewCard from "@/components/review-card"
import SectionTemplate from "@/components/section-template"

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

export default function ReviewsSection() {
  return (
    <SectionTemplate id="reviews" className="not-md:pt-15 not-lg:items-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center font-thmanyah-heading text-5xl">
          الآراء والتقييمات
        </h1>
        <p className="max-w-lg font-thmanyah-serif text-lg leading-loose text-muted-foreground">
          شاهد ماذا يقول الناس عنا
        </p>
      </div>
      <div className="grid items-center gap-3 self-center sm:grid-cols-1 md:grid-cols-2 lg:max-w-[80%] lg:grid-cols-12">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            avatar={`https://avatar.vercel.sh/${review.name}`}
            layout={
              review.layout as "featured" | "small" | "medium" | "wide" | "tall"
            }
            name={review.name}
            username={review.username}
            quote={review.quote}
          />
        ))}
      </div>
    </SectionTemplate>
  )
}
