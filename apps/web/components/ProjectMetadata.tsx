import { cn } from "@workspace/ui/lib/utils";
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem
} from "@/data/types";

type ProjectMetadataProps = {
  item: DevelopmentPortfolioItem | PhotographyPortfolioItem | GraphicDesignPortfolioItem | VFXPortfolioItem | MarketingPortfolioItem;
  timeTook: string;
};

export default function ProjectMetadata({ item, timeTook }: ProjectMetadataProps) {
  let categoryText = "غير محدد";
  let statusText = "قيد التنفيذ";

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem;
    categoryText = devItem.category || "برمجة";
    statusText = devItem.status === "Completed" ? "مكتمل" : "قيد التطوير";
  } else if (item.itemCategory === "Photography") {
    const photoItem = item as PhotographyPortfolioItem;
    categoryText = photoItem.category || "تصوير";
    statusText = photoItem.status === "Completed" ? "مكتمل" : "قيد التنفيذ";
  } else if (item.itemCategory === "Design") {
    const designItem = item as GraphicDesignPortfolioItem;
    categoryText = designItem.category || "تصميم";
    statusText = designItem.status === "Completed" ? "مكتمل" : "قيد التصميم";
  } else if (item.itemCategory === "Vfx") {
    const vfxItem = item as VFXPortfolioItem;
    categoryText = vfxItem.category || "مؤثرات بصرية";
    statusText = vfxItem.status === "Completed" ? "مكتمل" : "قيد الإنتاج";
  } else if (item.itemCategory === "Marketing") {
    const marketingItem = item as MarketingPortfolioItem;
    categoryText = "تسويق رقمي";
    statusText = marketingItem.status === "Completed" ? "مكتمل" : "قيد التنفيذ";
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-border/10 text-start w-full">
      <div className="space-y-1">
        <span className="block text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">القسم الفرعي</span>
        <span className="text-base font-semibold text-foreground">{categoryText}</span>
      </div>
      <div className="space-y-1">
        <span className="block text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">الحالة</span>
        <span className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground">
          <span className={cn(
            "size-2 rounded-full",
            statusText.includes("مكتمل") ? "bg-emerald-500" : "bg-amber-500"
          )} />
          {statusText}
        </span>
      </div>
      <div className="col-span-2 md:col-span-1 space-y-1">
        <span className="block text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">مدة العمل</span>
        <span className="text-base font-semibold text-foreground">{timeTook}</span>
      </div>
    </div>
  );
}