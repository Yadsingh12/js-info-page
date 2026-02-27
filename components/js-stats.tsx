const stats = [
  { label: "Created in", value: "1995", sub: "by Brendan Eich" },
  { label: "Standardized as", value: "ES1", sub: "in 1997 (ECMAScript)" },
  { label: "Used by", value: "98.8%", sub: "of all websites" },
  { label: "Latest version", value: "ES2024", sub: "ECMAScript 2024" },
]

export function JSStats() {
  return (
    <section className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6 flex flex-col gap-1">
              <p className="text-2xl md:text-3xl font-bold text-primary font-mono">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
