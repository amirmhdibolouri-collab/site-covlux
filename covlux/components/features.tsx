"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import { Zap, ShieldCheck, Gift, Blocks, Sparkles, Gem } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Sub-second interactions across the entire platform. Browse, claim, and transfer without friction.",
    span: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Secure Ownership",
    desc: "Cryptographically verified provenance for every item you hold.",
    span: "",
  },
  {
    icon: Gift,
    title: "Creator Rewards",
    desc: "Perpetual royalties and gifting tools designed for artists.",
    span: "",
  },
  {
    icon: Blocks,
    title: "Cross-chain Ready",
    desc: "Move seamlessly across networks with a unified collection view.",
    span: "",
  },
  {
    icon: Sparkles,
    title: "AI Discovery",
    desc: "A personal curator that surfaces the pieces you'll love — before anyone else.",
    span: "lg:col-span-2",
  },
  {
    icon: Gem,
    title: "Premium Experience",
    desc: "Every pixel refined. A gallery-grade interface for a gallery-grade collection.",
    span: "lg:col-span-3",
  },
]

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal className="flex flex-col items-center text-center">
        <SectionLabel>Features</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Built for the discerning collector
        </h2>
        <p className="mt-4 max-w-lg text-pretty text-muted-foreground leading-relaxed">
          Six pillars of a platform engineered to feel effortless, elegant, and endlessly premium.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06} className={f.span}>
            <FeatureCard {...f} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Zap
  title: string
  desc: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-card p-7"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx) var(--my), rgba(110,86,207,0.16), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  )
}
