"use client"

import { useState } from "react"

const snippets = [
  {
    label: "Variables",
    code: `// Three ways to declare variables
const name = "JavaScript";   // block-scoped, immutable binding
let version = 2024;          // block-scoped, reassignable
var legacy = true;           // function-scoped (avoid in modern JS)

console.log(\`Hello from \${name} \${version}!\`);`,
  },
  {
    label: "Functions",
    code: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function (concise)
const square = (n) => n * n;

// Async function
async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}`,
  },
  {
    label: "Arrays",
    code: `const nums = [1, 2, 3, 4, 5];

// map — transform each element
const doubled = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter — keep matching elements
const evens = nums.filter(n => n % 2 === 0);
// [2, 4]

// reduce — accumulate a value
const sum = nums.reduce((acc, n) => acc + n, 0);
// 15`,
  },
  {
    label: "Objects",
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

// Spread
const updated = { ...user, age: 31 };`,
  },
]

export function JSCodeSnippets() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Quick Examples
        </h2>

        {/* Tabs */}
        <div className="flex gap-1 mb-0 flex-wrap">
          {snippets.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-xs font-mono rounded-t-md border border-b-0 transition-colors ${
                active === i
                  ? "bg-card border-border text-primary"
                  : "bg-transparent border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Code block */}
        <div className="bg-card border border-border rounded-b-lg rounded-tr-lg p-5 overflow-x-auto">
          <pre className="text-sm font-mono text-foreground leading-relaxed whitespace-pre">
            <code>{snippets[active].code}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
