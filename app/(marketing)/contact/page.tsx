import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site"
import { Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with True Signal Digital. Book a discovery call or send us a message.",
}

export default function ContactPage() {
  return (
    <div className="container max-w-6xl py-16 md:py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Let&apos;s Talk</h1>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Book a 20-minute discovery call or send us a message. We&apos;ll respond within one business day.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-muted-foreground">Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/30 p-6">
            <h3 className="mb-3 font-semibold">What to Expect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">1.</span>
                <span>We&apos;ll respond within one business day to schedule a call.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">2.</span>
                <span>20-minute discovery call to understand your environment and goals.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">3.</span>
                <span>
                  We&apos;ll recommend the service that fits best (or let you know if we&apos;re not the right fit).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">4.</span>
                <span>Clear proposal with scope, timeline, and investment—no surprises.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
