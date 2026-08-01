"use client"

import { motion } from "motion/react"

const words = ["Curated", "Immutable", "Cross-chain", "Verified", "Effortless", "Timeless", "Secure"]

export function LogoMarquee() {
  const row = [...words, ...words]
  return (
    <section aria-hidden className="relative border-y border-white/[0.06] py-6">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          className="flex shrink-0 items-center gap-14 pr-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-14 text-2xl font-medium tracking-tight text-muted-foreground/50">
              {w}
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
