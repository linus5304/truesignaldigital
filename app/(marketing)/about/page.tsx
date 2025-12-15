import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MapPin, Shield, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "True Signal Digital: Verification-first security and cloud operations consultancy in San Antonio, TX.",
}

const values = [
  {
    icon: Shield,
    title: "Verification-First",
    description:
      "We never recommend changes without evidence. Every assessment starts with read-only scans and documented findings.",
  },
  {
    icon: Target,
    title: "Safe & Reversible",
    description: "Every production change includes a tested rollback plan. We sleep well because you'll sleep well.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description:
      "Technical-but-readable reports. Executive summaries. No jargon dumps. You'll understand what we found and why it matters.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 md:py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">About True Signal Digital</h1>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Security + Cloud Ops, verification-first. We help companies understand their security posture and implement
          safe, documented improvements.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-12">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Our Approach</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
            <p className="leading-relaxed">
              Too many security consultancies operate on fear and opacity. They show up, run scans, dump a 200-page
              report full of jargon, and disappear. You&apos;re left with a list of problems and no clear path forward.
            </p>
            <p className="leading-relaxed">
              We do things differently. Every engagement starts with evidence gathering—read-only access, documented
              scans, clear baselines. We show you exactly what we found, why it matters, and what to do about it.
            </p>
            <p className="leading-relaxed">
              When you&apos;re ready to implement fixes, we offer weekend hardening sprints with full rollback plans.
              Every change is documented, tested, and reversible. No surprises Monday morning.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border bg-card p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Location</h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>San Antonio, Texas — serving clients nationwide</span>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We work remotely with companies across the US. Most engagements are fully remote, with on-site options
            available for Texas-based clients.
          </p>
        </section>

        <section className="rounded-lg border bg-muted/30 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to get started?</h2>
          <p className="mb-6 text-muted-foreground">
            Book a 20-minute discovery call to discuss your security and cloud ops needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Book a call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
