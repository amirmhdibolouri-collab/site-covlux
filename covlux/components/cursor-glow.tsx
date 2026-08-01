"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return
    setEnabled(true)
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250)
      y.set(e.clientY - 250)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-[500px] w-[500px] rounded-full opacity-40 blur-[80px]"
    >
      <div
        className="h-full w-full rounded-full"
        style={{ background: "radial-gradient(circle, rgba(110,86,207,0.35), transparent 60%)" }}
      />
    </motion.div>
  )
}
