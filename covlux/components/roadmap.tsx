"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Reveal, SectionLabel } from "./reveal"

const phases = [
  {
    phase: "Phase 01",
    title: "Foundation",
    status: "Shipped",
    points: ["Core platform & wallet", "Verified provenance engine", "Genesis collection launch"],
  },
  {
    phase: "Phase 02",
    title: "Expansion",
    status: "In Progress",
    points: ["AI discovery curator", "Cross-chain bridge", "Creator royalty suite"],
  },
  {
    phase: "Phase 03",
    title: "Ecosystem",
    status: "Upcoming",
    points: ["Covlux mobile app", "Physical-digital twins", "Community governance"],
  },
  {
    phase: "Phase 04",
    title: "Horizon",
    status: "Vision",
    points: ["Immersive 3D galleries", "Global partner studios", "Open developer platform"],
  },
]

export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="roadmap" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal className="flex flex-col items-center text-center">
        <SectionLabel>Roadmap</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Charting the road ahead
        </h2>
      </Reveal>

      <div ref={ref} className="relative mt-20">
        {/* center line */}
        <div className="absolute left-6 top-0 h-full w-px bg-white/[0.08] md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-secondary via-primary to-purple-deep shadow-[0_0_18px_2px_rgba(110,86,207,0.6)]"
          />
        </div>

        <div className="space-y-10 md:space-y-4">
          {phases.map((p, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={p.phase}
                className={`relative flex ${left ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* node */}
                <span className="absolute left-6 top-7 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-background md:left-1/2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_3px_rgba(110,86,207,0.8)]" />
                </span>

                <Reveal
                  delay={i * 0.05}
                  className={`w-full pl-14 md:w-[calc(50%-2.5rem)] md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:pl-10"}`}
                >
                  <div className="rounded-3xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-primary/40">
                    <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {p.phase}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground">
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <ul className={`mt-4 space-y-2 ${left ? "md:ml-auto" : ""}`}>
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className={`flex items-center gap-2 text-sm text-muted-foreground ${
                            left ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
