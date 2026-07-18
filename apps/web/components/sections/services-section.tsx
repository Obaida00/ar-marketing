import {
  MarketingIcon,
  CodeXmlIcon,
  AdobePhotoshopIcon,
  InstagramIcon,
  Camera01Icon,
  Video02Icon,
} from "@hugeicons/core-free-icons"
import ServiceShowcaseCard from "@/components/service-showcase-card"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "../section-heading"

const servicesInfo = [
  {
    icon: CodeXmlIcon,
    title: "البرمجة والتطوير",
    description: "نقدم حلول برمجية مبتكرة تلبي احتياجات عملك وتساعدك على النمو",
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
    description: "نقدم حلول تسويقية مبتكرة عبر وسائل التواصل الاجتماعي",
  },
  {
    icon: Camera01Icon,
    title: "تصوير المنتجات والإعلانات",
    description: "نقدم خدمات التصوير الاحترافي للمنتجات والإعلانات",
  },
  {
    icon: Video02Icon,
    title: "المونتاج السينمائي",
    description: "نقدم خدمات المونتاج السينمائي لفيديوهاتك ومقاطعك",
  },
]

export default function ServicesSection() {
  return (
    <SectionTemplate id="services" className="">
      <SectionHeading
        title="خدماتنا"
        subtitle="نقدم إليك أفضل الحلول التسويقية لكي تتميز في مشروعك"
        align="start"
        className="mt-45"
      />
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesInfo.map((service, index) => (
          <ServiceShowcaseCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </SectionTemplate>
  )
}
