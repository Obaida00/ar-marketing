import { Badge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, Star } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem
} from "@/data/types";

type ProjectHeaderProps = {
  item: DevelopmentPortfolioItem | PhotographyPortfolioItem | GraphicDesignPortfolioItem | VFXPortfolioItem | MarketingPortfolioItem;
};

export default function ProjectHeader({ item }: ProjectHeaderProps) {
  // Determine CTA text and URL based on category
  let ctaText = "طلب مشروع مشابه";
  let ctaUrl = "/#contact";
  let showLivePreview = false;
  let livePreviewUrl = "";
  let categoryDisplayName = "مشروع";

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem;
    ctaText = "طلب مشروع مشابه";
    ctaUrl = "/#contact";
    showLivePreview = !!devItem.url;
    livePreviewUrl = devItem.url || "";
    categoryDisplayName = "برمجة وتطوير";
  } else if (item.itemCategory === "Photography") {
    ctaText = "طلب جلسة تصوير مشابهة";
    categoryDisplayName = "تصوير";
  } else if (item.itemCategory === "Design") {
    ctaText = "طلب تصميم مشابه";
    categoryDisplayName = "تصميم";
  } else if (item.itemCategory === "Vfx") {
    ctaText = "طلب عمل مؤثرات مشابهة";
    categoryDisplayName = "مؤثرات بصرية";
  } else if (item.itemCategory === "Marketing") {
    ctaText = "طلب حملة تسويقية مشابهة";
    categoryDisplayName = "تسويق";
  }

  return (
    <div className="relative w-full flex flex-col gap-6 text-start">
      {/* Featured Badge & Category */}
      <div className="flex flex-wrap items-center gap-3">
        {item.featured && (
          <Badge
            variant="outline"
            className="border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-500 flex items-center gap-1.5"
          >
            <HugeiconsIcon
              strokeWidth={2.5}
              className="text-amber-500 size-3.5"
              icon={Star}
            />
            مميز
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 px-2.5 py-1 text-xs font-medium"
        >
          {categoryDisplayName}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl">
        {item.title}
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
        {item.description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-2">
        <Link
          href={ctaUrl}
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "px-6 py-5 text-sm font-semibold rounded-lg"
          )}
        >
          {ctaText}
        </Link>
        {showLivePreview && (
          <Link
            href={livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "px-6 py-5 text-sm font-semibold rounded-lg border-border/40 hover:bg-muted"
            )}
          >
            <HugeiconsIcon
              icon={PlayIcon}
              className="size-4 me-1.5"
            />
            مشاهدة العرض الحي
          </Link>
        )}
      </div>
    </div>
  );
}