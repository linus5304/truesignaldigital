import { testimonials } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">What Clients Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                {testimonial.placeholder && (
                  <Badge variant="secondary" className="mb-4">
                    Placeholder
                  </Badge>
                )}
                <blockquote className="mb-4 text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
