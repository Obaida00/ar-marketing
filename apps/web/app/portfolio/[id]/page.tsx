import { getItem } from "@/app/actions/portfolio-actions"
import SectionTemplate from "@/components/section-template"
import { PlayIcon, Star } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Badge } from "@workspace/ui/components/badge"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem,
} from "@/data/types"

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const item = await getItem(id)
  console.log(item)
  if (!item) {
    return (
      <SectionTemplate className="items-center justify-center">
        <h1 className="text-3xl">No items found</h1>
      </SectionTemplate>
    )
  }
  const timeTook =
    "timeTook" in item && item.timeTook !== undefined
      ? item.timeTook
      : "Unknown"

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem
    const url = devItem.url || ""
    return (
      <>
        <SectionTemplate className="pt-20">
          <div className="relative flex min-h-screen w-full items-center p-15">
            <Image
              src={devItem.image}
              alt="Project image"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="to absolute inset-0 h-full w-full bg-transparent bg-linear-to-t from-black to-90%" />
            <div className="relative flex flex-col gap-3">
              {devItem.featured && (
                <Badge
                  variant={"outline"}
                  className="px-3 py-2 border-warning/60 bg-warning/20 text-warning shadow-lg shadow-warning/30"
                >
                  <HugeiconsIcon strokeWidth={2.5} className="text-warning" icon={Star}></HugeiconsIcon>
                  Featured
                </Badge>
              )}
              <h1 className="font-sans text-5xl font-bold text-white">
                {devItem.title}
              </h1>
              <h3 className="text-white/70 dark:text-muted-foreground">{devItem.description}</h3>
              <div className="flex items-center gap-4">
                <Link
                  href={url}
                  className={cn(
                    buttonVariants({ size: "lg", className: "w-fit" })
                  )}
                >
                  <HugeiconsIcon
                    icon={PlayIcon}
                    className="size-5"
                  ></HugeiconsIcon>{" "}
                  See live preview
                </Link>
                <Link
                  href={'/#contact'}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg", className: "w-fit", variant: "secondary" })
                  )}
                >
                  Order similar project
                </Link>
              </div>
            </div>
          </div>
        </SectionTemplate>
        <SectionTemplate className="min-h-0 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left/Main Column - Overview & Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Project Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {devItem.description}
                </p>
              </div>
              
              {/* Features List */}
              {devItem.features && devItem.features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {devItem.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <HugeiconsIcon icon={Star} className="size-4" strokeWidth={2.5} />
                        </div>
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right/Sidebar Column - Project Details & Tech Stack */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Category</span>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {devItem.category}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Status</span>
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-semibold",
                      devItem.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    )}>
                      {devItem.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="text-foreground font-medium">{timeTook}</span>
                  </div>
                </div>
              </div>

              {devItem.technologies && devItem.technologies.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {devItem.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1 text-sm font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </SectionTemplate>
      </>
    )
  }

  if (item.itemCategory === "Photography") {
    const photoItem = item as PhotographyPortfolioItem
    const gallery = photoItem.gallery || []
    const category = photoItem.category || "Unknown"
    return (
      <>  
        <SectionTemplate className="pt-20">
          <div className="relative flex min-h-screen w-full items-center p-15">
            <Image
              src={photoItem.image}
              alt={photoItem.title}
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="to absolute inset-0 h-full w-full bg-transparent bg-linear-to-t from-black to-90%" />
            <div className="relative flex flex-col gap-3">
              {photoItem.featured && (
                <Badge
                  variant={"outline"}
                  className="px-3 py-2 border-warning/60 bg-warning/20 text-warning shadow-lg shadow-warning/30"
                >
                  <HugeiconsIcon strokeWidth={2.5} className="text-warning" icon={Star}></HugeiconsIcon>
                  Featured
                </Badge>
              )}
              <h1 className="font-sans text-5xl font-bold text-white">
                {photoItem.title}
              </h1>
              <h3 className="text-white/70 dark:text-muted-foreground">{photoItem.description}</h3>
              <div className="flex items-center gap-4">
                <Link
                  href={'/#contact'}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg", className: "w-fit" })
                  )}
                >
                  Order similar shoot
                </Link>
              </div>
            </div>
          </div>
        </SectionTemplate>
        
        <SectionTemplate className="min-h-0 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left Column - Details */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Category</span>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {category}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Status</span>
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-semibold",
                      photoItem.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    )}>
                      {photoItem.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="text-foreground font-medium">{timeTook}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Gallery Showcase */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-foreground">Project Gallery</h2>
              {gallery && gallery.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gallery.map((imgUrl, idx) => (
                    <div key={idx} className="group relative aspect-4/3 overflow-hidden rounded-xl border border-border bg-muted/10 shadow-md">
                      <Image
                        src={imgUrl}
                        alt={`Gallery Image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-border p-12 text-center">
                  <p className="text-muted-foreground">No gallery images available for this project.</p>
                </div>
              )}
            </div>
          </div>
        </SectionTemplate>
      </>
    )
  }

  if (item.itemCategory === "Design") {
    const designItem = item as GraphicDesignPortfolioItem
    const brandOverview = designItem.brandOverview || ""
    const brandGoals = designItem.brandGoals || []
    const technologies = designItem.technologies || []
    const category = designItem.category || "Unknown"
    return (
      <>
        <SectionTemplate className="pt-20">
          <div className="relative flex min-h-screen w-full items-center p-15">
            <Image
              src={designItem.image}
              alt={designItem.title}
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="to absolute inset-0 h-full w-full bg-transparent bg-linear-to-t from-black to-90%" />
            <div className="relative flex flex-col gap-3">
              {designItem.featured && (
                <Badge
                  variant={"outline"}
                  className="px-3 py-2 border-warning/60 bg-warning/20 text-warning shadow-lg shadow-warning/30"
                >
                  <HugeiconsIcon strokeWidth={2.5} className="text-warning" icon={Star}></HugeiconsIcon>
                  Featured
                </Badge>
              )}
              <h1 className="font-sans text-5xl font-bold text-white">
                {designItem.title}
              </h1>
              <h3 className="text-white/70 dark:text-muted-foreground">{designItem.description}</h3>
              <div className="flex items-center gap-4">
                <Link
                  href={'/#contact'}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg", className: "w-fit" })
                  )}
                >
                  Order similar design
                </Link>
              </div>
            </div>
          </div>
        </SectionTemplate>
        
        <SectionTemplate className="min-h-0 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left/Main Column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Brand Overview */}
              {brandOverview && (
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Brand Overview</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {brandOverview}
                  </p>
                </div>
              )}
              
              {/* Brand Goals */}
              {brandGoals && brandGoals.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Brand Goals</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {brandGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <HugeiconsIcon icon={Star} className="size-4" strokeWidth={2.5} />
                        </div>
                        <span className="text-base text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right/Sidebar Column */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Category</span>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {category}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Status</span>
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-semibold",
                      designItem.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    )}>
                      {designItem.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="text-foreground font-medium">{timeTook}</span>
                  </div>
                </div>
              </div>

              {technologies && technologies.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1 text-sm font-medium">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </SectionTemplate>
      </>
    )
  }

  if (item.itemCategory === "Vfx") {
    const vfxItem = item as VFXPortfolioItem
    const overview = vfxItem.overview || ""
    const result = vfxItem.result || ""
    const category = vfxItem.category || "Unknown"
    return (
      <>
        <SectionTemplate className="pt-20">
          <div className="relative flex min-h-screen w-full items-center p-15">
            <Image
              src={vfxItem.image}
              alt={vfxItem.title}
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="to absolute inset-0 h-full w-full bg-transparent bg-linear-to-t from-black to-90%" />
            <div className="relative flex flex-col gap-3">
              {vfxItem.featured && (
                <Badge
                  variant={"outline"}
                  className="px-3 py-2 border-warning/60 bg-warning/20 text-warning shadow-lg shadow-warning/30"
                >
                  <HugeiconsIcon strokeWidth={2.5} className="text-warning" icon={Star}></HugeiconsIcon>
                  Featured
                </Badge>
              )}
              <h1 className="font-sans text-5xl font-bold text-white">
                {vfxItem.title}
              </h1>
              <h3 className="text-white/70 dark:text-muted-foreground">{vfxItem.description}</h3>
              <div className="flex items-center gap-4">
                <Link
                  href={'/#contact'}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg", className: "w-fit" })
                  )}
                >
                  Order similar VFX
                </Link>
              </div>
            </div>
          </div>
        </SectionTemplate>
        
        <SectionTemplate className="min-h-0 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left/Main Column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Overview */}
              {overview && (
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Project Overview</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {overview}
                  </p>
                </div>
              )}
              
              {/* Results */}
              {result && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Final Outcome</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {result}
                  </p>
                </div>
              )}
            </div>

            {/* Right/Sidebar Column */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Category</span>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {category}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Status</span>
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-semibold",
                      vfxItem.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    )}>
                      {vfxItem.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="text-foreground font-medium">{timeTook}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </SectionTemplate>
      </>
    )
  }

  if (item.itemCategory === "Marketing") {
    const marketingItem = item as MarketingPortfolioItem
    const platforms = marketingItem.platforms || []
    const results = marketingItem.results || []
    return (
      <>
        <SectionTemplate className="pt-20">
          <div className="relative flex min-h-screen w-full items-center p-15">
            <Image
              src={marketingItem.image}
              alt={marketingItem.title}
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="to absolute inset-0 h-full w-full bg-transparent bg-linear-to-t from-black to-90%" />
            <div className="relative flex flex-col gap-3">
              {marketingItem.featured && (
                <Badge
                  variant={"outline"}
                  className="px-3 py-2 border-warning/60 bg-warning/20 text-warning shadow-lg shadow-warning/30"
                >
                  <HugeiconsIcon strokeWidth={2.5} className="text-warning" icon={Star}></HugeiconsIcon>
                  Featured
                </Badge>
              )}
              <h1 className="font-sans text-5xl font-bold text-white">
                {marketingItem.title}
              </h1>
              <h3 className="text-white/70 dark:text-muted-foreground">{marketingItem.description}</h3>
              <div className="flex items-center gap-4">
                <Link
                  href={'/#contact'}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg", className: "w-fit" })
                  )}
                >
                  Order similar campaign
                </Link>
              </div>
            </div>
          </div>
        </SectionTemplate>
        
        <SectionTemplate className="min-h-0 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left/Main Column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Campaign Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {marketingItem.description}
                </p>
              </div>

              {/* Campaign Results Cards */}
              {results && results.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Campaign Accomplishments & Metrics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {results.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/50 shadow-xs">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <HugeiconsIcon icon={Star} className="size-5" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">{res}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right/Sidebar Column */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Category</span>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      Marketing
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Status</span>
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-semibold",
                      marketingItem.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    )}>
                      {marketingItem.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="text-foreground font-medium">{timeTook}</span>
                  </div>
                </div>
              </div>

              {platforms && platforms.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Targeted Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1 text-sm font-medium">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </SectionTemplate>
      </>
    )
  }

  return (
    <SectionTemplate className="pt-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{item.description}</p>
      </div>
    </SectionTemplate>
  )
}