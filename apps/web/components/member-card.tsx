import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import Image from 'next/image'
import React from "react"

type MemberCardProps = {
  name: string
  role: string
  avatar?: string
  icon: IconSvgElement
}

export default function MemberCard({ name, role, avatar, icon }: MemberCardProps) {
  return (
    <div
      className="group relative aspect-3/4 overflow-hidden rounded-3xl"
    >
      {/* Portrait */}
      <Image
        src={avatar ?? "/images/Marketing2.jpg"} 
        alt={name}
        fill
        priority
        className="object-cover transition-transform duration-600 group-hover:scale-105"
      />

      {/* Progressive Glass */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-white/5 mask-[linear-gradient(to_top,black_55%,transparent_100%)] backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black_55%,transparent_100%)]" />

      {/* Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-56 via-background/40 to-transparent dark:bg-linear-to-t dark:from-black/90" />

      {/* Content */}
      <div className="absolute bottom-0 z-10 w-full p-6 lg:p-7">
        <HugeiconsIcon icon={icon} className="mb-3 text-white/90" size={35} strokeWidth={1.8}/>
        <h3 className="font-thmanyah-heading text-2xl lg:text-3xl text-white">
          {name}
        </h3>
        <p className="mt-1 font-thmanyah-serif text-white dark:text-muted-foreground">
          {role}
        </p>
      </div>
    </div>
  )
}
