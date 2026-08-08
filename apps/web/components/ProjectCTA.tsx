import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/components/button";
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem
} from "@/data/types";

type ProjectCTAProps = {
  item: DevelopmentPortfolioItem | PhotographyPortfolioItem | GraphicDesignPortfolioItem | VFXPortfolioItem | MarketingPortfolioItem;
};

export default function ProjectCTA({ item }: ProjectCTAProps) {
  let ctaText = "طلب مشروع مشابه";
  let ctaUrl = "/#contact";
  let showLivePreview = false;
  let livePreviewUrl = "";

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem;
    ctaText = "طلب مشروع مشابه";
    ctaUrl = "/#contact";
    showLivePreview = !!devItem.url;
    livePreviewUrl = devItem.url || "";
  } else if (item.itemCategory === "Photography") {
    ctaText = "طلب جلسة تصوير مشابهة";
  } else if (item.itemCategory === "Design") {
    ctaText = "طلب تصميم مشابه";
  } else if (item.itemCategory === "Vfx") {
    ctaText = "طلب عمل مؤثرات مشابهة";
  } else if (item.itemCategory === "Marketing") {
    ctaText = "طلب حملة تسويقية مشابهة";
  }

  return (
    <div className="mt-8 p-8 md:p-12 rounded-2xl border border-border/10 bg-card/10 backdrop-blur-xs text-center max-w-3xl mx-auto w-full">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">هل تبحث عن عمل مماثل؟</h3>
      <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
        نحن هنا لمساعدتك في تحقيق أهدافك وتحويل رؤيتك إلى واقع ملموس بدقة واحترافية متناهية.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "px-8 py-4 text-sm font-semibold rounded-lg w-full sm:w-auto min-w-[180px]"
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
              "px-8 py-4 text-sm font-semibold rounded-lg w-full sm:w-auto min-w-[180px] border-border/40 hover:bg-muted"
            )}
          >
            مشاهدة العرض الحي
          </Link>
        )}
      </div>
    </div>
  );
}