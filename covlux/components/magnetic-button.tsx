"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "ghost"

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  ariaLabel,
}: {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: Variant
  className?: string
  ariaLabel?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 200, damping: 15 })
  const y = useSpring(my, { stiffness: 200, damping: 15 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    mx.set(relX * 0.3)
    my.set(relY * 0.4)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform"
  const styles: Record<Variant, string> = {
    primary:
      "text-white bg-primary shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_50px_-12px_rgba(110,86,207,0.7)] hover:bg-secondary",
    ghost:
      "text-foreground border border-white/10 bg-white/[0.02] backdrop-blur hover:bg-white/[0.05] hover:border-white/20",
  }

  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a href={href} aria-label={ariaLabel} className={cn(base, styles[variant], className)}>
          {variant === "primary" && (
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-lg -z-10" />
          )}
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} aria-label={ariaLabel} className={cn(base, styles[variant], className)}>
          {variant === "primary" && (
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-lg -z-10" />
          )}
          {inner}
        </button>
      )}
    </motion.div>
  )
}
