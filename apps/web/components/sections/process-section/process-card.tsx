"use client"
import { ProcessStep } from "@/data/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { motion, useInView } from "motion/react"
import React, { useEffect, useRef } from "react"

type ProcessCardProps = {
  process: ProcessStep
  onActive: (processId: number) => void
}

export default function ProcessCard({ process, onActive }: ProcessCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "-200px",
  })
  useEffect(() => {
    if (isInView) {
      onActive(process.id)
    }
  }, [isInView, process.id, onActive])
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{  margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card
        ref={ref}
        className="h-50 justify-between border border-primary/70 bg-background/80 ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
      >
        <CardHeader>
          <CardTitle className="font-thmanyah-heading text-3xl">
            {process.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="font-thmanyah-subheading-sans text-lg">
            {process.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
