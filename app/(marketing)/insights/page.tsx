import type { Metadata } from "next"
import { insights } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles and guides on security, cloud operations, and DevOps from True Signal Digital.",
}

export default function InsightsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 md:py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Insights</h1>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Practical guides and perspectives on security, cloud ops, and building reliable systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <Card key={insight.slug} className="group transition-colors hover:border-primary/50">
            <CardHeader>
              <div className="mb-2 flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
              </CardTitle>
              <CardDescription>
                {new Date(insight.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{insight.summary}</p>
              <Link
                href={`/insights/${insight.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
