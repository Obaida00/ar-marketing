import { Rocket01Icon, ArrowDown02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import SectionTemplate from "@/components/section-template"

export default function HeroSection() {
  return (
    <SectionTemplate className="min-h-svh gap-4 sm:items-center md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="flex flex-col gap-5 not-md:text-center">
        <h1 className="font-thmanyah-heading text-5xl">
          علامة تجاريّة تليقُ بمشروعِك
        </h1>
        <p className="font-thmanyah-serif text-lg text-muted-foreground">
          نساعدك على بناء هوية بصرية قوية تُعبّر عن علامتك التجارية وتميّزها
          في السوق.
        </p>
        <div className="flex items-center gap-3 not-md:justify-center">
          <Button className="w-fit font-thmanyah-subheading-sans" size="lg">
            <HugeiconsIcon icon={Rocket01Icon} className="size-5" strokeWidth={2} />
            اطلب استشارة
          </Button>
          <Button
            variant="secondary"
            className="w-fit border border-primary/60 bg-accent font-thmanyah-subheading-sans hover:bg-accent/80"
            size="lg"
          >
            <HugeiconsIcon icon={ArrowDown02Icon} className="size-5" strokeWidth={2} />
            تعرف على خدماتنا
          </Button>
        </div>
      </div>
      <div className="ease h-100 w-[50%] rounded-2xl border border-primary/60 bg-accent/30 p-4 shadow-2xl shadow-black/50 duration-200 not-md:hidden hover:-rotate-1 hover:border-primary/80 hover:shadow-primary/60">
        <div className="relative h-full w-full">
          <Image
            src="/images/Marketing.jpg"
            fill
            alt="Marketing"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </SectionTemplate>
  )
}
