export function JSHero() {
  return (
    <header>
      {/* Top metadata bar */}
      <div className="flex items-center justify-between px-6 md:px-16 h-12 border-b border-border">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          JS / Language Reference
        </span>
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          ECMAScript · ES2024
        </span>
      </div>

      {/* Hero body */}
      <div className="px-6 md:px-16 pt-14 pb-10 border-b border-border">
        {/* Overline */}
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary mb-5">
          Est. 1995 · Brendan Eich · Netscape
        </p>

        {/* Display headline */}
        <div className="flex items-end justify-between gap-8">
          <h1
            className="font-black text-foreground leading-none tracking-[-0.04em] text-balance"
            style={{ fontSize: "clamp(3.8rem, 12vw, 9rem)" }}
          >
            Java<span className="text-primary">Script</span>
          </h1>
          {/* JS badge — hide on very small screens */}
          <div className="hidden sm:flex shrink-0 w-20 h-20 md:w-24 md:h-24 bg-primary items-end justify-end p-2.5 mb-1">
            <span className="font-black text-primary-foreground leading-none text-2xl md:text-3xl tracking-tighter">
              JS
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-7 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl font-sans">
          The programming language of the web. High-level, interpreted, and multi-paradigm —
          JavaScript runs everywhere from browsers to servers to embedded devices.
        </p>

        {/* Tag strip */}
        <div className="flex flex-wrap gap-2 mt-8 pt-7 border-t border-border">
          {[
            "Interpreted",
            "Dynamically Typed",
            "Multi-Paradigm",
            "Event-Driven",
            "Prototype-Based",
            "Single-Threaded",
            "Non-Blocking I/O",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
