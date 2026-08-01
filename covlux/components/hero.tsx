"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

const stats = [
  { value: "128K+", label: "Collectors" },
  { value: "42", label: "Curated Drops" },
  { value: "99.9%", label: "Uptime" },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const objectY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section ref={ref} id="discover" className="relative min-h-screen overflow-hidden pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-16">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              A new standard for digital ownership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">The Future of</span>
            <br />
            <span className="text-gradient-purple">Digital Collectibles</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Experience premium digital ownership powered by cutting-edge technology — curated,
            secure, and beautifully crafted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#collections">
              Explore Collections
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#features" variant="ghost">
              Learn More
            </MagneticButton>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-14 flex max-w-md items-center gap-8 border-t border-white/[0.06] pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y: objectY }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease }}
            className="relative aspect-square"
          >
            <div className="absolute inset-4 rounded-full bg-primary/25 blur-[90px]" />
            <div className="relative h-full w-full animate-float-slow">
              <Image
                src="/hero-object.png"
                alt="Covlux abstract 3D collectible sculpture illuminated with royal purple light"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain drop-shadow-[0_40px_80px_rgba(110,86,207,0.35)]"
              />
            </div>

            {/* orbiting chips */}
            <FloatChip className="left-0 top-10" delay={0}>
              Verified Ownership
            </FloatChip>
            <FloatChip className="right-0 bottom-16" delay={1.4}>
              On-chain Provenance
            </FloatChip>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function FloatChip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.8 + delay * 0.2 },
        scale: { duration: 0.6, delay: 0.8 + delay * 0.2 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`glass absolute rounded-full px-4 py-2 text-xs font-medium text-foreground/90 ${className}`}
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle shadow-[0_0_8px_2px_rgba(110,86,207,0.8)]" />
      {children}
    </motion.div>
  )
}
