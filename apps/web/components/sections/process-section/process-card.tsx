"use client"
import { ProcessStep } from "@/data/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { useInView } from "motion/react"
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
    <div className="">
      <Card ref={ref} className="h-50 justify-between">
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
    </div>
  )
}
