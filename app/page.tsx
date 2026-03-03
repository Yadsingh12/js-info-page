import { JSHero } from "@/components/js-hero"
import { JSStats } from "@/components/js-stats"
import { JSFeatures } from "@/components/js-features"
import { JSCodeSnippets } from "@/components/js-code-snippets"
import { JSTimeline } from "@/components/js-timeline"
import { JSFooter } from "@/components/js-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans max-w-[1400px] mx-auto">
      <JSHero />
      <JSStats />
      <JSFeatures />
      <JSCodeSnippets />
      <JSTimeline />
      <JSFooter />
    </main>
  )
}
