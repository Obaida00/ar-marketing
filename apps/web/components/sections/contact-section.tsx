import ContactForm from "@/components/contact-form"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"

export default function ContactSection() {
  return (
    <SectionTemplate
      id="contact"
      className="mt-50 mb-20 not-md:pt-15 not-lg:items-center"
    >
      <SectionHeading
        title="حان الوقت لتصنع حضورك الرقمي !"
        subtitle="ابدأ اليوم، ودعنا نبني معًا علامة تجارية تستحق أن تُرى"
        className="gap-8"
      />
      <div className="w-full max-w-2xl self-center rounded-lg border border-primary bg-card p-10">
        <ContactForm />
      </div>
    </SectionTemplate>
  )
}
