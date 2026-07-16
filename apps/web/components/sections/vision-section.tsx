import Image from "next/image"
import SectionTemplate from "@/components/section-template"

export default function VisionSection() {
  return (
    <SectionTemplate id="vision" className="not-md:pt-15 not-lg:items-center">
      <h1 className="text-center font-thmanyah-heading text-5xl">رؤيتنا</h1>
      <div className="flex items-center justify-between gap-8">
        <p className="max-w-lg font-thmanyah-heading text-2xl leading-loose not-lg:text-center">
          نؤمن بأن التسويق الرقمي هو مفتاح النجاح في العصر الحديث، ونعمل على
          تطوير حلول تسويقية مبتكرة تساعد الشركات على النمو والتطور.
        </p>
        <div className="ease absolute -left-40 z-0 h-100 w-[50%] scale-100 rotate-4 rounded-2xl border border-muted-foreground/70 bg-accent/30 p-4 shadow-2xl shadow-black/50 duration-200 not-lg:hidden hover:border-primary hover:shadow-primary/60">
          <div className="relative h-full w-full">
            <Image
              src="/images/Marketing2.jpg"
              fill
              alt="رؤية AR Marketing"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
