import { CovluxMark } from "./covlux-mark"

const groups = [
  {
    title: "Platform",
    links: ["Discover", "Features", "Collections", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Support", "Privacy", "Terms"],
  },
]

export function SiteFooter() {
  return (
    <footer id="about" className="relative scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#top" className="flex items-center gap-2.5" aria-label="Covlux home">
              <CovluxMark className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight">Covlux</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An ultra-premium platform for digital collectibles. Crafted for those who value
              ownership as art.
            </p>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3 className="text-sm font-medium text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Covlux. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Crafted for the future of ownership.</p>
        </div>
      </div>
    </footer>
  )
}
