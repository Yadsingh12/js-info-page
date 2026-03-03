const links = [
  { label: "MDN Docs", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { label: "ECMAScript Spec", href: "https://tc39.es/ecma262/" },
  { label: "Node.js", href: "https://nodejs.org" },
  { label: "npm Registry", href: "https://npmjs.com" },
]

export function JSFooter() {
  return (
    <footer className="border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 md:px-16 py-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-end justify-end p-1">
            <span className="font-black text-primary-foreground text-xs leading-none tracking-tighter">
              JS
            </span>
          </div>
          <div>
            <p className="font-bold text-foreground text-sm leading-tight">JavaScript</p>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase">
              Language Reference
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="External resources">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border px-6 md:px-16 h-10 flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted-foreground">
          ECMAScript Standard · ECMA-262
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">2024</span>
      </div>
    </footer>
  )
}
