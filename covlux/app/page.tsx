import { SiteBackground } from "@/components/site-background"
import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { Features } from "@/components/features"
import { Collections } from "@/components/collections"
import { Roadmap } from "@/components/roadmap"
import { Community } from "@/components/community"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteBackground />
      <CursorGlow />
      <Navbar />
      <main id="top" className="relative">
        <Hero />
        <LogoMarquee />
        <Features />
        <Collections />
        <Roadmap />
        <Community />
      </main>
      <SiteFooter />
    </>
  )
}
