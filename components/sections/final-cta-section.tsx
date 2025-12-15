import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">Ready to Get Started?</h2>
        <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
          Book a 20-minute discovery call. We&apos;ll discuss your environment, identify the right service, and give you
          a clear path forward—no obligation.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Book a 20-minute call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
