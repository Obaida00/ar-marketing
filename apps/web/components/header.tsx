import { Button, buttonVariants } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpLeft } from "@hugeicons/core-free-icons"
import Link from "next/link"
import React from "react"
import { cn } from "@workspace/ui/lib/utils"

export default function Header() {
  return (
    <header className="fixed z-99 flex w-full items-center justify-between border-b border-accent bg-background/60 p-5 backdrop-blur-3xl">
      <Link
        href={"/"}
        className="font-thmanyah-heading text-2xl font-bold text-foreground"
      >
        <span className="text-primary">AR</span> Marketing
      </Link>
      <nav className="flex items-center gap-10">
        <Link
          href={"#services"}
          className={cn(
            "font-thmanyah-subheading-sans text-foreground!",
            buttonVariants({ variant: "link" })
          )}
        >
          خدماتنا
        </Link>
        <Link
          href={"/"}
          className={cn(
            "font-thmanyah-subheading-sans text-foreground!",
            buttonVariants({ variant: "link" })
          )}
        >
          أعمالنا
        </Link>
        <Link
          href={"/"}
          className={cn(
            "font-thmanyah-subheading-sans text-foreground!",
            buttonVariants({ variant: "link" })
          )}
        >
          متجرنا
          <HugeiconsIcon strokeWidth={2} icon={ArrowUpLeft}></HugeiconsIcon>
        </Link>
        <Link
          href={"/"}
          className={cn(
            "font-thmanyah-subheading-sans text-foreground!",
            buttonVariants({ variant: "link" })
          )}
        >
          من نحن؟
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button size={"lg"} className="font-thmanyah-subheading-sans">
          إنشاء حساب
        </Button>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="border border-primary/60 bg-accent font-thmanyah-subheading-sans hover:bg-accent/80"
        >
          تسجيل الدخول
        </Button>
      </div>
    </header>
  )
}
