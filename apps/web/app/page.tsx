import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import VisionSection from "@/components/sections/vision-section"
import FaqSection from "@/components/sections/faq-section"
import ReviewsSection from "@/components/sections/reviews-section"
import ContactSection from "@/components/sections/contact-section"
import WhoAreWeSection from "@/components/sections/who-are-we-section"
import WhyUsSection from "@/components/sections/why-us-section"
import ProcessSection from "@/components/sections/process-section/process-section"

export default function Page() {
  return (
    <div className="relative z-0 w-full scrollbar-none overflow-x-clip bg-background px-10">
      {/* Glow effects */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]" />
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]" />
      <HeroSection />
      <WhoAreWeSection />
      <WhyUsSection />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <VisionSection />
      <FaqSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  )
}
