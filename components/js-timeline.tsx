const events = [
  { year: "1995", title: "JavaScript Born", desc: "Brendan Eich writes the first version at Netscape in just 10 days." },
  { year: "1997", title: "ECMAScript 1", desc: "Standardized by ECMA International. The language gains an official spec." },
  { year: "2009", title: "Node.js & ES5", desc: "Ryan Dahl ships Node.js. ES5 adds strict mode, JSON, and Array methods." },
  { year: "2015", title: "ES6 / ES2015", desc: "The biggest update ever: classes, modules, arrow functions, Promises, let/const." },
  { year: "2017", title: "Async / Await", desc: "ES2017 brings async/await, making asynchronous code read like synchronous." },
  { year: "2024", title: "ES2024", desc: "Array grouping, Promise.withResolvers, and further quality-of-life additions." },
]

export function JSTimeline() {
  return (
    <section className="border-b border-border">
      {/* Section label */}
      <div className="flex items-center justify-between px-6 md:px-16 h-10 border-b border-border">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          Brief History
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">1995 — 2024</span>
      </div>

      {/* Timeline rows — each row is full-width with a top border */}
      <div className="divide-y divide-border">
        {events.map((event, i) => (
          <div
            key={event.year}
            className="flex items-start gap-0 hover:bg-card transition-colors group"
          >
            {/* Year column */}
            <div className="shrink-0 w-28 md:w-40 px-6 md:px-16 py-6 md:py-7 border-r border-border">
              <span className="font-mono text-sm font-bold text-primary">{event.year}</span>
            </div>

            {/* Index + content column */}
            <div className="flex items-start gap-5 px-6 md:px-10 py-6 md:py-7 flex-1">
              <span className="font-mono text-[11px] text-muted-foreground mt-0.5 shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-bold text-foreground text-sm leading-tight">{event.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 font-sans">
                  {event.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
