import type React from "react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="relative flex min-h-screen flex-col mx-auto">
        <SiteHeader />
        <main className="">{children}</main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
