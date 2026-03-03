"use client"

import { useState } from "react"

const snippets = [
  {
    label: "Variables",
    hint: "let / const / var",
    code: `// Three ways to declare variables
const name = "JavaScript";   // block-scoped, immutable binding
let version = 2024;          // block-scoped, reassignable
var legacy = true;           // function-scoped (avoid in modern JS)

console.log(\`Hello from \${name} \${version}!\`);
// → Hello from JavaScript 2024!`,
  },
  {
    label: "Functions",
    hint: "declarations · arrows · async",
    code: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function (concise)
const square = (n) => n * n;

// Async / await
async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}`,
  },
  {
    label: "Arrays",
    hint: "map · filter · reduce",
    code: `const nums = [1, 2, 3, 4, 5];

// map — transform each element
const doubled = nums.map(n => n * 2);
// → [2, 4, 6, 8, 10]

// filter — keep matching elements
const evens = nums.filter(n => n % 2 === 0);
// → [2, 4]

// reduce — accumulate a value
const sum = nums.reduce((acc, n) => acc + n, 0);
// → 15`,
  },
  {
    label: "Objects",
    hint: "literals · destructuring · spread",
    code: `// Object literal
const user = {
  name: "Alice",
  age: 30,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  },
};

// Destructuring
const { name, age } = user;

// Spread — shallow clone with override
const updated = { ...user, age: 31 };`,
  },
]

// Minimal token-based syntax highlighter
function highlight(code: string) {
  const lines = code.split("\n")
  return lines.map((line, li) => {
    const parts: React.ReactNode[] = []
    let rest = line

    // Comment
    const commentIdx = rest.indexOf("//")
    if (commentIdx !== -1) {
      const before = rest.slice(0, commentIdx)
      const comment = rest.slice(commentIdx)
      if (before) parts.push(<span key="b">{tokenize(before)}</span>)
      parts.push(
        <span key="c" className="text-muted-foreground italic">
          {comment}
        </span>
      )
    } else {
      parts.push(<span key="t">{tokenize(rest)}</span>)
    }

    return (
      <div key={li} className="leading-6">
        {parts}
      </div>
    )
  })
}

function tokenize(text: string) {
  const keywords = /\b(const|let|var|function|return|async|await|new)\b/g
  const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g
  const numbers = /\b(\d+)\b/g

  // We'll do a simple split-and-colorize pass
  const segments: React.ReactNode[] = []
  let last = 0
  const allMatches: { index: number; length: number; type: string; value: string }[] = []

  let m: RegExpExecArray | null
  const kwRe = new RegExp(keywords.source, "g")
  while ((m = kwRe.exec(text)) !== null) {
    allMatches.push({ index: m.index, length: m[0].length, type: "kw", value: m[0] })
  }
  const strRe = new RegExp(strings.source, "g")
  while ((m = strRe.exec(text)) !== null) {
    allMatches.push({ index: m.index, length: m[0].length, type: "str", value: m[0] })
  }
  const numRe = new RegExp(numbers.source, "g")
  while ((m = numRe.exec(text)) !== null) {
    allMatches.push({ index: m.index, length: m[0].length, type: "num", value: m[0] })
  }

  allMatches.sort((a, b) => a.index - b.index)

  for (const match of allMatches) {
    if (match.index < last) continue
    if (match.index > last) segments.push(text.slice(last, match.index))
    if (match.type === "kw")
      segments.push(
        <span key={match.index} className="text-primary font-semibold">
          {match.value}
        </span>
      )
    else if (match.type === "str")
      segments.push(
        <span key={match.index} className="text-green-400">
          {match.value}
        </span>
      )
    else if (match.type === "num")
      segments.push(
        <span key={match.index} className="text-blue-400">
          {match.value}
        </span>
      )
    last = match.index + match.length
  }
  if (last < text.length) segments.push(text.slice(last))
  return segments
}

export function JSCodeSnippets() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-b border-border">
      {/* Section label */}
      <div className="flex items-center justify-between px-6 md:px-16 h-10 border-b border-border">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          Quick Examples
        </span>
      </div>

      <div className="px-6 md:px-16 py-8 md:py-10">
        {/* Tab bar */}
        <div className="flex items-end gap-0 border-b border-border mb-0 flex-wrap">
          {snippets.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`relative px-5 py-3 font-mono text-xs transition-colors outline-none border-b-2 -mb-px ${
                active === i
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Code block */}
        <div className="bg-card border border-t-0 border-border">
          {/* Code header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border">
            <span className="font-mono text-[11px] tracking-wider uppercase text-muted-foreground">
              {snippets[active].hint}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">javascript</span>
          </div>
          {/* Code content */}
          <div className="overflow-x-auto p-5">
            <pre className="text-sm font-mono leading-relaxed">
              {highlight(snippets[active].code)}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
