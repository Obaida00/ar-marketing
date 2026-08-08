import { searchBySlug } from "@/actions/portfolio-actions"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import { ArrowRight02Icon, SquareArrowUpRightIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

// --- Helper Functions ---

function getOrderCTA(category: string) {
  switch (category) {
    case "Photography":
      return "طلب جلسة تصوير مشابهة"
    case "Design":
      return "طلب تصميم مشابه"
    case "Vfx":
      return "طلب مؤثرات بصرية مشابهة"
    case "Marketing":
      return "طلب حملة تسويقية مشابهة"
    case "Development":
    default:
      return "طلب مشروع مشابه"
  }
}

// --- Category Specific Components ---

function DevelopmentContent({ item }: { item: any }) {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="w-full aspect-video md:aspect-[16/9] relative mb-16 rounded-2xl overflow-hidden bg-muted border border-border/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">نظرة عامة على المشروع</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
        </section>

        {item.features && item.features.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">المميزات الرئيسية</h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {item.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-base text-muted-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">التقنيات المستخدمة</h2>
            <div className="flex flex-wrap gap-3">
              {item.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border border-border/60 bg-muted/30 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {'url' in item && item.url && item.url !== "#" && (
          <div className="pt-4">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 gap-2">
                عرض المشروع الحي <HugeiconsIcon icon={SquareArrowUpRightIcon} size={18} />
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

function PhotographyContent({ item }: { item: any }) {
  const gallery = item.gallery || []
  return (
    <div className="w-full">
      {item.description && (
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      )}

      <div className="w-full aspect-[4/3] md:aspect-[21/9] relative mb-6 md:mb-8 rounded-2xl overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((img: string, idx: number) => (
            <div key={idx} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted group">
              <Image
                src={img}
                alt={`${item.title} - صورة ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function DesignContent({ item }: { item: any }) {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="w-full aspect-video md:aspect-[16/9] relative mb-16 rounded-2xl overflow-hidden bg-muted border border-border/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
            نظرة عامة على العلامة التجارية
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {item.brandOverview || item.description}
          </p>
        </section>

        {item.brandGoals && item.brandGoals.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">أهداف التصميم</h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {item.brandGoals.map((goal: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-base text-muted-foreground leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">الأدوات المستخدمة</h2>
            <div className="flex flex-wrap gap-3">
              {item.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border border-border/60 bg-muted/30 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function VfxContent({ item }: { item: any }) {
  const gallery = item.gallery || []
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="w-full aspect-video relative mb-16 rounded-2xl overflow-hidden bg-muted border border-border/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">نظرة عامة على المشروع</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {item.overview || item.description}
          </p>
        </section>

        {item.result && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">النتيجة النهائية</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{item.result}</p>
          </section>
        )}

        {gallery.length > 0 && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((img: string, idx: number) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                  <Image src={img} alt={`${item.title} - لقطة ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function MarketingContent({ item }: { item: any }) {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="w-full aspect-video md:aspect-[16/9] relative mb-16 rounded-2xl overflow-hidden bg-muted border border-border/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">نظرة عامة على الحملة</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
        </section>

        {item.results && item.results.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">نتائج الحملة</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {item.results.map((result: string, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col p-6 rounded-2xl border border-border/40 bg-muted/20"
                >
                  <span className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.platforms && item.platforms.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">المنصات المستهدفة</h2>
            <div className="flex flex-wrap gap-3">
              {item.platforms.map((platform: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border border-border/60 bg-muted/30 text-sm font-medium text-foreground"
                >
                  {platform}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

// --- Main Page Component ---

export default async function PortfolioItemDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await searchBySlug(slug)

  if (!item) {
    notFound()
  }

  const renderCategoryContent = () => {
    switch (item.itemCategory) {
      case "Development":
        return <DevelopmentContent item={item} />
      case "Photography":
        return <PhotographyContent item={item} />
      case "Design":
        return <DesignContent item={item} />
      case "Vfx":
        return <VfxContent item={item} />
      case "Marketing":
        return <MarketingContent item={item} />
      default:
        return null
    }
  }

  return (
    <article className="container mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-12 md:py-20 lg:py-24">
      
      {/* Centered Header Section */}
      <div className="max-w-4xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-12 md:mb-16 transition-colors group"
        >
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
          العودة إلى معرض الأعمال
        </Link>

        <header className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {item.featured && (
              <Badge
                variant="secondary"
                className="bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium border-0 px-3 py-1"
              >
                مميز
              </Badge>
            )}
            <Badge variant="outline" className="text-muted-foreground font-medium px-3 py-1">
              {item.itemCategory}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] tracking-tight mb-8">
            {item.title}
          </h1>

          {item.itemCategory !== "Photography" && (
            <Link href="/#contact">
              <Button size="lg" className="rounded-full px-8 h-12 text-base">
                {getOrderCTA(item.itemCategory)}
              </Button>
            </Link>
          )}
        </header>

        {/* Minimal Metadata Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 py-8 border-y border-border/40 mb-16 md:mb-24">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">
              التصنيف
            </span>
            <span className="text-sm font-medium text-foreground">
              {'category' in item ? item.category : item.itemCategory}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">
              الحالة
            </span>
            <span className="text-sm font-medium text-foreground">{item.status}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">
              المدة الزمنية
            </span>
            <span className="text-sm font-medium text-foreground">{item.timeTook}</span>
          </div>
        </div>
      </div>

      {/* Dynamic Category Content */}
      {renderCategoryContent()}

      {/* Photography CTA placed at the bottom */}
      {item.itemCategory === "Photography" && (
        <div className="max-w-4xl mx-auto mt-16 md:mt-24 pt-8 border-t border-border/40 text-center">
          <Link href="/#contact">
            <Button size="lg" className="rounded-full px-8 h-12 text-base">
              {getOrderCTA(item.itemCategory)}
            </Button>
          </Link>
        </div>
      )}
    </article>
  )
}
