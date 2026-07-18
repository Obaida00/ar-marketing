"use client"
import React from "react"
import SectionTemplate from "../section-template"
import SectionHeading from "../section-heading"
import { NumberTicker } from "@workspace/ui/components/number-ticker"
import { Separator } from "@workspace/ui/components/separator"

export default function WhyUsSection() {
  return (
    <SectionTemplate>
      <SectionHeading title="أرقام تعكس ثقة العملاء" align="start" />
      <div className="flex w-full flex-col items-center justify-evenly gap-7 md:flex-row md:items-center md:justify-evenly">
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl md:text-4xl lg:text-6xl">
            <NumberTicker value={120} className="font-bold text-primary!" />{" "}
            <span className="text-muted-foreground">+</span>
          </div>
          <p className="font-thmanyah-serif text-2xl text-muted-foreground md:text-lg lg:text-2xl">
            مشروع مكتمل
          </p>
        </div>
        <Separator orientation="horizontal" className="md:hidden" />

        <Separator orientation="vertical" className="hidden h-24 md:block" />
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl md:text-4xl lg:text-6xl">
            <NumberTicker value={50} className="font-bold text-primary!" />{" "}
            <span className="text-muted-foreground">+</span>
          </div>
          <p className="font-thmanyah-serif text-2xl text-muted-foreground md:text-lg lg:text-2xl">
            عميل سعيد
          </p>
        </div>
        <Separator orientation="horizontal" className="md:hidden" />

        <Separator orientation="vertical" className="hidden h-24 md:block" />
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl md:text-4xl lg:text-6xl">
            <NumberTicker value={6} className="font-bold text-primary!" />{" "}
            <span className="text-muted-foreground">+</span>
          </div>
          <p className="font-thmanyah-serif text-2xl text-muted-foreground md:text-lg lg:text-2xl">
            خدمات متخصصة
          </p>
        </div>
        <Separator orientation="horizontal" className="md:hidden" />

        <Separator orientation="vertical" className="hidden h-24 md:block" />
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl md:text-4xl lg:text-6xl">
            <span className="text-4xl md:text-2xl lg:text-4xl text-muted-foreground">%</span>
            <NumberTicker value={98} className="font-bold text-primary!" />{" "}
            <span className="text-muted-foreground">+</span>
          </div>
          <p className="font-thmanyah-serif text-2xl text-muted-foreground md:text-lg">
            نسبة رضا العملاء
          </p>
        </div>
      </div>
    </SectionTemplate>
  )
}
