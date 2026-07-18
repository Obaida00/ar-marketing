import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import { buttonVariants } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"
import React from "react"

export default function ServiceShowcaseCard({
  icon,
  title,
  description,
}: {
  icon: IconSvgElement
  title: string
  description: string
}) {
  return (
    <Card className="border border-primary/70 bg-background/80 ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 justify-between">
      <CardHeader>
        <CardTitle>
          <div className="flex h-15 w-15 items-center justify-center rounded-xl border border-primary/80 bg-accent/40">
            <HugeiconsIcon
              icon={icon}
              className="size-8 text-primary"
              strokeWidth={2}
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="font-thmanyah-heading text-2xl">
          {title}
        </CardTitle>
        <CardDescription className="font-thmanyah-subheading-sans leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={"#contact"}
          className={cn(
            buttonVariants({
              variant: "default",
              className: "px-5 font-thmanyah-subheading-sans",
            })
          )}
        >
          اطلب الآن
        </Link>
      </CardFooter>
    </Card>
  )
}
