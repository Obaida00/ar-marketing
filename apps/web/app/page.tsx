import {
  Rocket01Icon,
  ArrowDown,
  ArrowDown01,
  ArrowDown02Icon,
  CodeIcon,
  MarketingIcon,
  CodeXmlIcon,
  AdobePhotoshopIcon,
  Instagram,
  InstagramIcon,
  Camera01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import ServiceShowcaseCard from "@/components/service-showcase-card"
export default function Page() {
  const servicesInfo = [
    {
      icon: CodeXmlIcon,
      title: "البرمجة والتطوير",
      description:
        "نقدم حلول برمجية مبتكرة تلبي احتياجات عملك وتساعدك على النمو",
    },
    {
      icon: MarketingIcon,
      title: "التسويق الرقمي",
      description:
        "نقدم حلول تسويقية مبتكرة تساعدك على الوصول إلى جمهورك المستهدف وزيادة مبيعاتك",
    },
    {
      icon: AdobePhotoshopIcon,
      title: "التصميم الجرافيكي",
      description:
        "حلول تصميم جذابة تُظهر هوية علامتك التجارية وتجذب انتباه عملائك",
    },
    {
      icon: InstagramIcon,
      title: "إدارة صفحات وسائل التواصل الاجتماعي",
      description:
        "نقدم حلول تسويقية مبتكرة عبر وسائل التواصل الاجتماعي",
    },
    {
      icon: Camera01Icon,
      title: "تصوير المنتجات والإعلانات",
      description:
        "نقدم خدمات التصوير الاحترافي للمنتجات والإعلانات",
    },
  ]

  return (
    // Main container
    <div className="color relative z-0 w-full scrollbar-none overflow-x-hidden bg-background px-10">
      {/* Glow effects: */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]"></div>
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]"></div>
      {/* Content: */}
      <div className="relative flex min-h-svh flex-col justify-center gap-4 sm:items-center md:flex-row md:items-center md:justify-evenly md:gap-6">
        <div className="flex flex-col gap-5 not-md:text-center">
          <h1 className="font-thmanyah-heading text-5xl">
            علامة تجارية تليق بمشروعك
          </h1>
          <p className="font-thmanyah-serif text-lg text-muted-foreground">
            نساعدك على بناء هوية بصرية قوية تُعبّر عن علامتك التجارية وتميّزها
            في السوق.
          </p>

          <div className="flex items-center gap-3 not-md:justify-center">
            <Button
              className={"w-fit font-thmanyah-subheading-sans"}
              size={"lg"}
            >
              {" "}
              <HugeiconsIcon
                icon={Rocket01Icon}
                className="size-5"
                strokeWidth={2}
              />
              اطلب استشارة
            </Button>
            <Button
              variant={"secondary"}
              className={
                "w-fit border border-primary/60 bg-accent font-thmanyah-subheading-sans hover:bg-accent/80"
              }
              size={"lg"}
            >
              {" "}
              <HugeiconsIcon
                icon={ArrowDown02Icon}
                className="size-5"
                strokeWidth={2}
              />
              تعرف على خدماتنا
            </Button>
          </div>
        </div>
        <div className="ease h-100 w-[50%] rounded-2xl border border-primary/60 bg-accent/30 p-4 shadow-2xl shadow-black/50 duration-200 not-md:hidden hover:-rotate-1 hover:border-primary/80 hover:shadow-primary/60">
          <div className="relative h-full w-full">
            <Image
              src={"/images/Marketing.jpg"}
              fill
              alt="Marketing"
              className="rounded-lg object-cover"
            ></Image>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="relative container flex min-h-screen flex-col gap-8 px-10 pt-35 pb-5 mt-30"
      >
        <div className="flex flex-col gap-5">
          <h1 className="font-thmanyah-heading text-4xl">خدماتنا</h1>
          <p className="font-thmanyah-serif text-muted-foreground">
            نقدم إليك أفضل الحلول التسويقية لكي تتميز في مشروعك
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full">
          {servicesInfo.map((service, index) => (
            <ServiceShowcaseCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
