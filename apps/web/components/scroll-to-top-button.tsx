"use client"
import { ArrowUp01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { useLenis } from "@/components/providers/lenis-provider"

export default function ScrollToTopButton() {
  const { scrollTo } = useLenis()
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 300)
  })

  return (
    <motion.button
      onClick={() => scrollTo(0)}
      aria-label="العودة إلى الأعلى"
      className="fixed bottom-8 right-8 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full border border-primary/60 bg-background/80 text-foreground shadow-lg shadow-black/30 backdrop-blur-md"
      initial={false}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 16 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <HugeiconsIcon icon={ArrowUp01Icon} className="size-5" strokeWidth={2} />
    </motion.button>
  )
}
