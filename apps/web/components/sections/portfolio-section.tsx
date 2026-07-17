import SectionTemplate from "@/components/section-template"

export default function PortfolioSection() {
  return (
    <SectionTemplate
      id="portfolio"
      className=""
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center font-thmanyah-heading text-5xl">أعمالنا</h1>
        <p className="max-w-lg text-center font-thmanyah-serif text-lg leading-loose text-muted-foreground">
          ألقِ نظرة على بعضٍ من أعمالنا المميزة
        </p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <p className="font-thmanyah-heading text-4xl text-muted-foreground">
          هذا القسم ستتم تعبئته حالما يتم الربط مع قاعدة البيانات
        </p>
      </div>
    </SectionTemplate>
  )
}
