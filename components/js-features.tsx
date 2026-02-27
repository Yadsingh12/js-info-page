const features = [
  {
    title: "Runs Everywhere",
    description:
      "JavaScript runs in every modern browser without any installation. It also runs on the server via Node.js, making it a true full-stack language.",
  },
  {
    title: "Dynamic & Flexible",
    description:
      "Variables can hold any type of value. Types are checked at runtime, allowing rapid prototyping and flexible data handling.",
  },
  {
    title: "Asynchronous by Nature",
    description:
      "With Promises, async/await, and the event loop, JS handles non-blocking I/O elegantly — perfect for web apps, APIs, and real-time systems.",
  },
  {
    title: "Prototype-based OOP",
    description:
      "Objects can directly inherit from other objects via the prototype chain. ES6 introduced class syntax as a cleaner layer on top of this.",
  },
  {
    title: "First-class Functions",
    description:
      "Functions are values — they can be stored in variables, passed as arguments, and returned from other functions, enabling functional programming.",
  },
  {
    title: "Vast Ecosystem",
    description:
      "npm hosts over 2 million packages. Frameworks like React, Vue, Angular, and Next.js make building complex UIs straightforward and maintainable.",
  },
]

export function JSFeatures() {
  return (
    <section className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          Key Characteristics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
