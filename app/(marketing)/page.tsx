import { HeroSection } from "@/components/sections/hero-section"
import { LogosSection } from "@/components/sections/logos-section"
import { ServicesSection } from "@/components/sections/services-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
