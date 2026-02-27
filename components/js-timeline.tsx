const events = [
  { year: "1995", title: "JavaScript Born", desc: "Brendan Eich creates JavaScript at Netscape in just 10 days." },
  { year: "1997", title: "ECMAScript 1", desc: "Standardized by ECMA International as ECMAScript." },
  { year: "2009", title: "Node.js & ES5", desc: "Ryan Dahl launches Node.js; ES5 adds strict mode and JSON support." },
  { year: "2015", title: "ES6 / ES2015", desc: "Biggest update ever: classes, modules, arrow functions, Promises, let/const." },
  { year: "2017", title: "Async / Await", desc: "ES2017 ships async/await, making asynchronous code readable." },
  { year: "2024", title: "ES2024", desc: "Array grouping, Promise.withResolvers, and more modern additions." },
]

export function JSTimeline() {
  return (
    <section className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          Brief History
        </h2>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-6">
            {events.map((event) => (
              <div key={event.year} className="flex items-start gap-4">
                {/* Year badge */}
                <div className="shrink-0 w-24 text-right">
                  <span className="text-xs font-mono text-primary">{event.year}</span>
                </div>

                {/* Dot */}
                <div className="shrink-0 mt-1 w-3 h-3 rounded-full border-2 border-primary bg-background z-10" />

                {/* Content */}
                <div className="pb-2">
                  <p className="text-sm font-semibold text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
