export function LogosSection() {
  const platforms = ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"]

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container max-w-6xl">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Expertise across major cloud platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map((platform) => (
            <div key={platform} className="text-lg font-semibold text-muted-foreground/60 font-mono">
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
