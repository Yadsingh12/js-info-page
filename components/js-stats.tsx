const stats = [
  { label: "Created", value: "1995", sub: "by Brendan Eich" },
  { label: "Standard", value: "ES1", sub: "via ECMA in 1997" },
  { label: "Web Usage", value: "98.8%", sub: "of all websites" },
  { label: "Version", value: "ES2024", sub: "latest release" },
]

export function JSStats() {
  return (
    <section className="border-b border-border">
      {/* Section label */}
      <div className="flex items-center gap-4 px-6 md:px-16 h-10 border-b border-border">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          By the numbers
        </span>
      </div>

      {/* Stats grid — divided by lines, no card backgrounds */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 md:px-10 py-8 md:py-10 flex flex-col gap-2">
            <p
              className="font-black text-primary leading-none tracking-tight font-mono"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {stat.value}
            </p>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
              {stat.label}
            </p>
            <p className="text-xs text-muted-foreground font-sans">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
