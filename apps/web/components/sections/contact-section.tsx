import ContactForm from "@/components/contact-form"
import SectionTemplate from "@/components/section-template"

export default function ContactSection() {
  return (
    <SectionTemplate
      id="contact"
      className="mt-50 mb-20 not-md:pt-15 not-lg:items-center"
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-center font-thmanyah-heading text-5xl">
          حان الوقت لتصنع حضورك الرقمي !
        </h1>
        <p className="max-w-lg font-thmanyah-serif text-lg leading-loose text-muted-foreground">
          ابدأ اليوم، ودعنا نبني معًا علامة تجارية تستحق أن تُرى
        </p>
      </div>
      <div className="w-full max-w-2xl self-center rounded-lg border border-primary bg-card p-10">
        <ContactForm />
      </div>
    </SectionTemplate>
  )
}
