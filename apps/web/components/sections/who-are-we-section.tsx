import React from "react"
import SectionTemplate from "../section-template"
import SectionHeading from "../section-heading"
import Image from "next/image"
export default function WhoAreWeSection() {
  return (
    <SectionTemplate className="gap-4 relative sm:items-center md:flex-row md:items-center md:justify-between md:gap-10">
      <div className="flex flex-col gap-6 max-w-xl">
        <SectionHeading
          title="شريكك في بناء علامة تجارية تنمو بثقة"
          align="start"
          className="*:leading-16"
        />
        <p className="font-thmanyah-subheading-sans leading-10 text-muted-foreground not-lg:text-center">
          نساعد الشركات والعلامات التجارية على النمو من خلال خدمات تسويقية
          وإبداعية مرنة، سواء كنت تحتاج إلى خدمة متخصصة أو إلى حلول متكاملة تغطي
          مختلف جوانب حضورك الرقمي. نعمل معك لفهم أهدافك، وتقديم الحلول
          المناسبة، وتحويل أفكارك إلى نتائج ملموسة
        </p>
      </div>
      <div className="ease h-full w-[80%] absolute md:-left-50 lg:-left-90 top-20 -rotate-15 blur-out-xl blur-in-2xl  rounded-2xl overflow-auto not-md:hidden">
        <div className="relative h-full w-full">
          <Image
            src="/svg/bullseye.svg"
            fill
            alt="target"
            className="rounded-lg object-cover opacity-25"
          />
        </div>
      </div>
    </SectionTemplate>
  )
}
