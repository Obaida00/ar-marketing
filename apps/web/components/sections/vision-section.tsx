"use client"
import Image from "next/image"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "../section-heading"
import { motion } from "motion/react"

export default function VisionSection() {
  return (
    <SectionTemplate id="vision" className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="رؤيتنا" align="start"/>
      </motion.div>
      <div className="flex items-center justify-between gap-8">
        <motion.p
          className="max-w-lg font-thmanyah-heading text-2xl leading-loose not-lg:text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          نؤمن بأن التسويق الرقمي هو مفتاح النجاح في العصر الحديث، ونعمل على
          تطوير حلول تسويقية مبتكرة تساعد الشركات على النمو والتطور.
        </motion.p>
        <motion.div
          className="ease absolute -left-40 z-0 h-100 w-[50%] scale-100 rotate-4 rounded-2xl border border-muted-foreground/70 bg-accent/30 p-4 shadow-2xl shadow-black/50 duration-200 not-lg:hidden hover:border-primary hover:shadow-primary/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/Marketing2.jpg"
              fill
              alt="رؤية AR Marketing"
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </SectionTemplate>
  )
}
