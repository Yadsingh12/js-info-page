const features = [
  {
    index: "01",
    title: "Runs Everywhere",
    description:
      "Runs natively in every browser without installation. Node.js brings JS to servers, CLIs, and beyond — a true full-stack language.",
  },
  {
    index: "02",
    title: "Dynamic & Flexible",
    description:
      "Variables hold any type. Types are resolved at runtime, enabling rapid prototyping and expressive, flexible code patterns.",
  },
  {
    index: "03",
    title: "Async by Design",
    description:
      "Promises, async/await, and the event loop make non-blocking I/O elegant — ideal for web apps, APIs, and real-time systems.",
  },
  {
    index: "04",
    title: "Prototype-Based OOP",
    description:
      "Objects inherit directly from other objects via the prototype chain. ES6 class syntax provides a cleaner layer on top.",
  },
  {
    index: "05",
    title: "First-Class Functions",
    description:
      "Functions are values. Pass them as arguments, return them, store them — this enables powerful functional programming patterns.",
  },
  {
    index: "06",
    title: "Vast Ecosystem",
    description:
      "npm hosts over 2 million packages. React, Vue, Angular, Next.js — the framework landscape is unmatched in any other language.",
  },
]

export function JSFeatures() {
  return (
    <section className="border-b border-border">
      {/* Section label */}
      <div className="flex items-center justify-between px-6 md:px-16 h-10 border-b border-border">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          Key Characteristics
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">6 features</span>
      </div>

      {/* Features — 3-col grid on desktop, divided lines, no card backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-border md:[&>*:nth-child(n+3)]:border-t md:[&>*:nth-child(3)]:border-l lg:[&>*:nth-child(n+4)]:border-t lg:[&>*:nth-child(3)]:border-l-0 md:[&>*:even]:border-l lg:[&>*:nth-child(3n+2)]:border-x lg:[&>*:nth-child(3n)]:border-l">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group px-6 md:px-10 py-8 flex flex-col gap-3 hover:bg-card transition-colors"
          >
            <span className="font-mono text-[11px] tracking-[0.15em] text-primary">
              {feature.index}
            </span>
            <h3 className="font-bold text-foreground text-base leading-tight">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
