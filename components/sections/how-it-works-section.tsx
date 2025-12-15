import { howItWorks } from "@/lib/constants"

export function HowItWorksSection() {
  return (
    <section className="border-y bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">How It Works</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            From discovery call to delivered report—here&apos;s what to expect.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-4 text-5xl font-bold text-primary/20 font-mono">{step.step}</div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
