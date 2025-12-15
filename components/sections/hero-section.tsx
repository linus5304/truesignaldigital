import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container max-w-6xl py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          Security + Cloud Ops, verification-first.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
          Get a clear posture baseline (read-only), prioritized fixes, and an optional weekend hardening sprint—safe,
          reversible, and documented.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Book a 20-minute call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">View services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
