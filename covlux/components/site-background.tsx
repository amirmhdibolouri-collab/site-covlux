"use client"

export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* radial glows */}
      <div
        className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full blur-[140px] opacity-60 animate-drift"
        style={{ background: "radial-gradient(circle, rgba(110,86,207,0.28), transparent 65%)" }}
      />
      <div
        className="absolute top-[40%] -left-40 h-[560px] w-[560px] rounded-full blur-[130px] opacity-50 animate-drift"
        style={{ background: "radial-gradient(circle, rgba(123,104,238,0.22), transparent 65%)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full blur-[150px] opacity-40 animate-drift"
        style={{ background: "radial-gradient(circle, rgba(76,58,153,0.3), transparent 65%)", animationDelay: "-11s" }}
      />

      {/* grid */}
      <div className="absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* noise */}
      <div className="absolute inset-0 noise opacity-[0.035] mix-blend-overlay" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(9,9,11,0.85))]" />
    </div>
  )
}
