"use client"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"
import { motion } from "motion/react"

export default function PortfolioSection() {
  return (
    <SectionTemplate id="portfolio" className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading
          title="أعمالنا"
          subtitle="ألقِ نظرة على بعضٍ من أعمالنا المميزة"
          className="gap-3"
        />
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <p className="font-thmanyah-heading text-4xl text-muted-foreground">
          هذا القسم ستتم تعبئته حالما يتم الربط مع قاعدة البيانات
        </p>
      </motion.div>
    </SectionTemplate>
  )
}
