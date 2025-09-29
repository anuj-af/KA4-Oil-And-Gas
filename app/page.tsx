import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { WhoAreWeSection } from "@/components/who-are-we"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoAreWeSection />
      <Footer />
    </main>
  )
}
