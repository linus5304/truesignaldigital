import type React from "react"
import { services } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Wrench, Gauge } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  wrench: Wrench,
  gauge: Gauge,
}

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Clear, Scoped, Verification-First Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            No open-ended retainers. No jargon dumps. Just clear deliverables and predictable outcomes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || ShieldCheck
            return (
              <Card key={service.id} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-end">
                  <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Timeline:</span> {service.timeline}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Investment:</span> {service.priceRange}
                    </p>
                  </div>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href={`/services#${service.id}`}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
