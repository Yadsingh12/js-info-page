export function JSFooter() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
          <span className="font-mono font-bold text-primary-foreground text-xs">JS</span>
        </div>
        <span className="text-sm text-muted-foreground font-mono">JavaScript Info</span>
      </div>
      <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          MDN Docs
        </a>
        <a
          href="https://tc39.es/ecma262/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          ECMAScript Spec
        </a>
        <a
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Node.js
        </a>
      </div>
    </footer>
  )
}
