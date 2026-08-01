"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"

const collections = [
  {
    name: "Aurora Veil",
    creator: "Studio Noctis",
    members: "24.8K",
    floor: "12.4 ETH",
    image: "/collections/aurora.png",
  },
  {
    name: "Monolith Series",
    creator: "K. Aramis",
    members: "18.2K",
    floor: "9.1 ETH",
    image: "/collections/monolith.png",
  },
  {
    name: "Nebula Drift",
    creator: "Halo Collective",
    members: "31.6K",
    floor: "15.7 ETH",
    image: "/collections/nebula.png",
  },
  {
    name: "Prism Objects",
    creator: "Atelier Lumen",
    members: "12.9K",
    floor: "7.8 ETH",
    image: "/collections/prism.png",
  },
]

export function Collections() {
  return (
    <section id="collections" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <SectionLabel>Collections</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Featured premium collections
          </h2>
        </div>
        <p className="max-w-sm text-pretty text-muted-foreground leading-relaxed">
          Hand-selected drops from the world's most compelling digital artists and studios.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {collections.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <CollectionCard {...c} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function CollectionCard({
  name,
  creator,
  members,
  floor,
  image,
}: {
  name: string
  creator: string
  members: string
  floor: string
  image: string
}) {
  return (
    <motion.article
      whileHover="hover"
      className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-card"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${name} collection artwork by ${creator}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">by {creator}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Members</p>
            <p className="mt-1 text-base font-medium">{members}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Floor Value</p>
            <p className="mt-1 text-base font-medium text-primary">{floor}</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
