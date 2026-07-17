import { cn } from "@workspace/ui/lib/utils"
import React from "react"

type SectionTemplateProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function SectionTemplate({
  id,
  children,
  className,
}: SectionTemplateProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen flex-col justify-center gap-20 pb-5",
        className
      )}
    >
      {children}
    </section>
  )
}
