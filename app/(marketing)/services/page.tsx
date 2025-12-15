import type React from "react"
import type { Metadata } from "next"
import { services } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, XCircle, ShieldCheck, Wrench, Gauge } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Security + Cloud Ops services: QuickScan assessments, Weekend Hardening Sprints, and Cloud Tune-Ups.",
}

const iconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  wrench: Wrench,
  gauge: Gauge,
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 md:py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Our Services</h1>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Verification-first security and cloud operations services designed for clarity, safety, and measurable
          outcomes.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || ShieldCheck
          return (
            <Card key={service.id} className="overflow-hidden">
              <CardHeader className="bg-muted/30 pb-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <Badge variant="secondary">{service.subtitle}</Badge>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h4 className="mb-3 font-semibold">Who it&apos;s for</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.whoItsFor.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      What you get
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1 text-green-600">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      What&apos;s not included
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.notIncluded.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Timeline: </span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Investment: </span>
                      <span className="font-medium">{service.priceRange}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/contact">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
