"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, Check } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"
import { MagneticButton } from "./magnetic-button"

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.074.074 0 0 0-.079.037c-.34.607-.719 1.4-.984 2.02a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-1-2.02.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C1.09 8.18.396 11.89.74 15.554a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.2 14.2 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.892a.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-4.246-.838-7.921-2.552-11.16a.06.06 0 0 0-.031-.028ZM8.02 13.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Community() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail("")
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="community" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-card px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative">
            <SectionLabel>Community</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Join <span className="text-gradient-purple">Covlux</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Step inside the circle. Get early drops, private previews, and a seat among the most
              refined collectors in web3.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="https://discord.com" ariaLabel="Join our Discord">
                <DiscordIcon className="h-4 w-4" />
                Discord
              </MagneticButton>
              <MagneticButton href="https://x.com" variant="ghost" ariaLabel="Follow us on X">
                <XIcon className="h-4 w-4" />
                Follow on X
              </MagneticButton>
            </div>

            <form
              onSubmit={submit}
              className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@collector.xyz"
                className="h-12 flex-1 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-secondary"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Newsletter <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
