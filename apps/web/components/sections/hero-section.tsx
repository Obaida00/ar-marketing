"use client"
import { Rocket01Icon, ArrowDown02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"
import { motion } from "motion/react"

export default function HeroSection() {
  return (
    <SectionTemplate className="min-h-svh gap-4 sm:items-center md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="flex flex-col gap-5 not-md:text-center">
        <motion.div transition={{ delay: 1, duration: 1.2 }}>
          <SectionHeading
            title="علامة تجاريّة تليقُ بمشروعِك"
            subtitle="نساعدك على بناء هوية بصرية قوية تُعبّر عن علامتك التجارية وتميّزها في السوق."
            align="start"
            className="gap-5"
          />
        </motion.div>
        <div className="flex items-center gap-3 not-md:justify-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button className="w-fit font-thmanyah-subheading-sans" size="lg">
              <HugeiconsIcon
                icon={Rocket01Icon}
                className="size-5"
                strokeWidth={2}
              />
              اطلب استشارة
            </Button>
          </motion.div>
          <motion.div whileHover={{scale: 1.1}}>
            <Button
              variant="secondary"
              className="w-fit border border-primary/60 bg-accent font-thmanyah-subheading-sans hover:bg-accent/80"
              size="lg"
            >
              <HugeiconsIcon
                icon={ArrowDown02Icon}
                className="size-5"
                strokeWidth={2}
              />
              تعرف على خدماتنا
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        transition={{ duration: 1.2 }}
        whileHover={{
          border: "1px solid var(--color-primary)",
          rotate: "-2deg",
          transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
        }}
        className="ease h-100 w-[50%] rounded-2xl border border-primary/60 bg-accent/30 p-4 shadow-2xl shadow-black/50 transition-shadow duration-400 not-md:hidden hover:shadow-2xl! hover:shadow-primary/60!"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/Marketing.jpg"
            fill
            alt="Marketing"
            className="rounded-lg object-cover"
          />
        </div>
      </motion.div>
    </SectionTemplate>
  )
}
