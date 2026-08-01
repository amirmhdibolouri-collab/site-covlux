"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { CovluxMark } from "./covlux-mark"

const links = [
  { label: "Discover", href: "#discover" },
  { label: "Features", href: "#features" },
  { label: "Collections", href: "#collections" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Covlux home">
          <CovluxMark className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight">Covlux</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton href="#community" className="px-6 py-2.5">
            Launch App
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass absolute inset-x-4 top-20 rounded-3xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#community"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white"
            >
              Launch App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
