import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"

export default function PortfolioSection() {
  return (
    <SectionTemplate id="portfolio" className="">
      <SectionHeading
        title="أعمالنا"
        subtitle="ألقِ نظرة على بعضٍ من أعمالنا المميزة"
        className="gap-3"
      />
      <div className="flex items-center justify-center gap-8">
        <p className="font-thmanyah-heading text-4xl text-muted-foreground">
          هذا القسم ستتم تعبئته حالما يتم الربط مع قاعدة البيانات
        </p>
      </div>
    </SectionTemplate>
  )
}
