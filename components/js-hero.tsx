export function JSHero() {
  return (
    <header className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-start gap-6 md:gap-8">
          {/* JS Logo */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-md flex items-center justify-center shadow-lg">
            <span className="font-mono font-bold text-primary-foreground text-xl md:text-2xl tracking-tight">
              JS
            </span>
          </div>

          <div>
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest mb-2">
              Language Overview
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight mb-4">
              JavaScript
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl text-pretty">
              The programming language of the web. JavaScript is a lightweight, interpreted,
              object-oriented language with first-class functions — and the only language that
              runs natively in every browser on the planet.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["Interpreted", "Dynamic Typing", "Prototype-based OOP", "Multi-paradigm", "Single-threaded", "Event-driven"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground border border-border rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
