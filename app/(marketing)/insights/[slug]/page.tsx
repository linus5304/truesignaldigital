import type { Metadata } from "next"
import { insights } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)

  if (!insight) return { title: "Not Found" }

  return {
    title: insight.title,
    description: insight.summary,
  }
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)

  if (!insight) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-16 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/insights">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Insights
        </Link>
      </Button>

      <header className="mb-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {insight.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">{insight.title}</h1>
        <time className="text-muted-foreground">
          {new Date(insight.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground leading-relaxed">{insight.summary}</p>
        <hr className="my-8" />
        <p className="text-muted-foreground">
          Full article content coming soon. This is a placeholder for the {insight.title} article.
        </p>
      </div>
    </article>
  )
}
