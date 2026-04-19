"use client";

import { useState } from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/showcase/code-block";

const STACKS = [
  {
    id: "agent",
    label: "For your agent",
    note: "One command. Works with any coding agent that can read a repo.",
    code: `# Claude Code — two commands
/plugin marketplace add pacifio/ui
/plugin install atlas@atlas-ui

# Cursor, Windsurf, Cody, etc.
# Point the agent at this repo's skills/atlas/ directory.
# Everything an agent needs is plain markdown + one CSS file:
#
#   skills/atlas/SKILL.md                 — entry rules (read first)
#   skills/atlas/references/tokens.md     — every design token
#   skills/atlas/references/components.md — class vocabulary + variants
#   skills/atlas/references/theming.md    — dark/light + shadcn map
#   skills/atlas/references/patterns.md   — layout rules
#   skills/atlas/references/responsive.md — multi-surface guidance
#   skills/atlas/references/motion.md     — motion inventory
#   skills/atlas/colors_and_type.css      — reference implementation`,
  },
  {
    id: "shadcn",
    label: "shadcn / Radix",
    note: "Translate tokens. Atlas maps directly onto shadcn's CSS variables.",
    code: `/* Don't drop atlas.css on top. Instead, override shadcn's variables
   with Atlas values (mapping lives in references/theming.md). */

/* app/globals.css */
:root {
  /* Atlas values, keyed to shadcn variable names */
  --background: #000000;
  --foreground: #ffffff;
  --card: #0f0f0f;
  --card-foreground: #ffffff;
  --primary: #ededed;
  --primary-foreground: #000000;
  --muted: #171717;
  --muted-foreground: #585858;
  --border: #1e1e1e;
  --ring: #0070f3;
  --destructive: #F44747;
  --radius: 0.25rem;     /* Atlas radius-md = 4px */
}

/* Your agent generates shadcn components that inherit these tokens.
   No .atlas-* class names in output. */
<Button variant="default">Ship it</Button>`,
  },
  {
    id: "tailwind",
    label: "Tailwind v4",
    note: "Put Atlas tokens in @theme. Emit utility classes.",
    code: `/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-bg-base: #000000;
  --color-bg-raised: #0f0f0f;
  --color-text-primary: #ffffff;
  --color-text-secondary: #aaaaaa;
  --color-accent-primary: #ededed;
  --color-accent-highlight: #0070f3;
  --color-status-error: #F44747;
  --radius-md: 4px;
  --font-display: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

/* Your agent generates Tailwind utilities following Atlas rules:
   28px buttons, 4px grid, 1px borders, blue only for focus. */
<button className="inline-flex items-center h-7 px-3 bg-accent-primary text-black
                   rounded-md text-sm font-medium">
  Ship it
</button>`,
  },
  {
    id: "html",
    label: "Plain HTML",
    note: "The reference path. Drop the CSS in, use .atlas-* classes directly.",
    code: `<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <link rel="stylesheet" href="/atlas.css" />
  </head>
  <body>
    <button class="atlas-btn atlas-btn-primary">Ship it</button>

    <div class="atlas-card" style="width:320px">
      <div class="atlas-card-header">
        <span class="atlas-dot atlas-dot-success"></span>
        <span class="atlas-panel-title">Deploy</span>
      </div>
      <div class="atlas-card-body">Production · main@a9f3b1</div>
    </div>
  </body>
</html>`,
  },
  {
    id: "react",
    label: "React / CSS modules",
    note: "Port reference rules into your styling system of choice.",
    code: `/* Button.module.css — port of .atlas-btn rules */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  font: 500 12px "Inter", system-ui;
  cursor: pointer;
}
.primary { background: #ededed; color: #000; }
.primary:hover { background: #fff; }

// Button.tsx
import styles from "./Button.module.css";
export function Button({ children }) {
  return <button className={\`\${styles.button} \${styles.primary}\`}>{children}</button>;
}`,
  },
];

function Icon({ paths, size = 16, stroke = 1.5 }: { paths: string; size?: number; stroke?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths.split("|").map((p, i) => {
        if (p.startsWith("circle:")) {
          const [cx, cy, r] = p.slice(7).split(",");
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        if (p.startsWith("polyline:")) return <polyline key={i} points={p.slice(9)} />;
        return <path key={i} d={p} />;
      })}
    </svg>
  );
}

export default function GetStartedPage() {
  const [stack, setStack] = useState("agent");
  const active = STACKS.find((s) => s.id === stack)!;

  return (
    <div className="ks-page-single" style={{ maxWidth: 920 }}>
      <section style={{ padding: "32px 0 28px" }}>
        <p className="atlas-eyebrow" style={{ marginBottom: 12 }}>Get started · 5 min read</p>
        <h1 className="atlas-display" style={{ margin: "0 0 14px", fontSize: 44, letterSpacing: "-0.03em" }}>
          A reference system, not a dependency.
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 680, margin: 0 }}>
          Atlas is a design <strong style={{ color: "var(--text-primary)" }}>language</strong> your coding
          agent reads and uses to generate UI that fits your stack. It's not a CSS framework you bolt on.
          shadcn projects stay shadcn. Tailwind stays Tailwind. Your agent just knows how to make them look
          like Atlas. This entire site was one-shot generated that way.
        </p>
        <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
          <a href="https://github.com/pacifio/ui" target="_blank" rel="noreferrer" className="atlas-btn-pill atlas-btn-pill-primary">
            <Icon paths="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" size={14} />
            View on GitHub
          </a>
          <Link href="/components/button" className="atlas-btn-pill atlas-btn-pill-secondary">
            Browse components →
          </Link>
        </div>
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "16px 0 40px" }} />

      {/* Mental model */}
      <section className="ks-section">
        <h2 className="ks-section-title">The mental model</h2>
        <p className="ks-section-desc">
          Three assets, three jobs. Read them in this order.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14, marginTop: 14 }}>
          {[
            {
              step: "01",
              title: "The rules (markdown)",
              desc: "references/*.md define tokens, patterns, motion, responsive behavior. This is what the agent loads on every task.",
              tag: "Ground truth",
            },
            {
              step: "02",
              title: "The vocabulary (class names)",
              desc: ".atlas-btn, .atlas-card, .atlas-dot — the names aren't literal. They're your agent's shorthand for 'render X in the Atlas style'.",
              tag: "Language",
            },
            {
              step: "03",
              title: "The reference CSS",
              desc: "colors_and_type.css is one possible implementation. Works as-is for plain HTML. For shadcn or Tailwind, your agent translates — it doesn't overlay.",
              tag: "Proof",
            },
          ].map((c) => (
            <div key={c.step} style={{ border: "1px solid var(--border-default)", borderRadius: 8, background: "var(--bg-raised)", padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-tertiary)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>{c.step}</span>
                <span className="atlas-badge">{c.tag}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.55 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "8px 0 40px" }} />

      {/* Install the skill */}
      <section className="ks-section">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--accent-primary)", color: "var(--text-inverse)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, fontFamily: "var(--font-mono)" }}>1</div>
          <h2 className="ks-section-title" style={{ margin: 0 }}>Give your agent the skill</h2>
        </div>
        <p className="ks-section-desc">
          This is the whole install. The skill is plain markdown plus one reference CSS file.
          Any coding agent that can read a repo can ingest it — Claude Code, Cursor, Windsurf,
          Cody, etc. No proprietary format, no vendor lock-in.
        </p>

        <CodeBlock
          lang="bash"
          code={`# Claude Code — one command
/plugin install pacifio/ui

# Other agents — point them at the skill directory
# They read the markdown, learn the rules, and generate code in your stack.`}
        />

        <div className="atlas-alert atlas-alert-info" style={{ marginTop: 14 }}>
          <div className="atlas-alert-icon">
            <Icon paths="circle:12,12,10|M12 16v-4m0-4h.01" size={14} />
          </div>
          <div className="atlas-alert-desc">
            SKILL.md (200 lines of positioning + quick ref) plus ~6 markdown references covering
            tokens, components, theming, patterns, responsive, motion. The CSS file is in the
            skill too — but as a reference implementation for the agent to look at, not
            something it mechanically copies into your project.
          </div>
        </div>
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "8px 0 40px" }} />

      {/* Generate code in your stack */}
      <section className="ks-section">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--accent-primary)", color: "var(--text-inverse)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, fontFamily: "var(--font-mono)" }}>2</div>
          <h2 className="ks-section-title" style={{ margin: 0 }}>Let it generate code in your stack</h2>
        </div>
        <p className="ks-section-desc">
          The agent asks what stack you're on, then translates Atlas rules into the right idiom.
          Same visual result, native code. Pick your stack below to see what the output looks like.
        </p>

        <div style={{ display: "flex", gap: 6, marginBottom: 0, flexWrap: "wrap" }}>
          {STACKS.map((s) => (
            <button
              key={s.id}
              onClick={() => setStack(s.id)}
              className={`atlas-btn-pill atlas-btn-pill-${stack === s.id ? "primary" : "ghost"} atlas-btn-pill-sm`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-tertiary)", margin: "10px 0 10px", lineHeight: 1.5 }}>
          {active.note}
        </div>
        <CodeBlock lang={stack === "html" ? "html" : stack === "react" ? "tsx" : stack === "tailwind" ? "css" : stack === "shadcn" ? "css" : "bash"} code={active.code} />
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "8px 0 40px" }} />

      {/* The aesthetic in one render */}
      <section className="ks-section">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--accent-primary)", color: "var(--text-inverse)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, fontFamily: "var(--font-mono)" }}>3</div>
          <h2 className="ks-section-title" style={{ margin: 0 }}>What Atlas looks like, regardless of stack</h2>
        </div>
        <p className="ks-section-desc">
          Whatever codebase the agent generates into, the output obeys these rules: AMOLED black,
          28px buttons, 4px grid, border-defined surfaces, near-white primary actions, blue
          reserved for focus and selection.
        </p>

        <div style={{ border: "1px solid var(--border-default)", borderRadius: 8, padding: 20, background: "var(--bg-raised)", marginBottom: 14 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }}>
            <button className="atlas-btn atlas-btn-primary">Ship it</button>
            <button className="atlas-btn atlas-btn-secondary">Cancel</button>
            <button className="atlas-btn atlas-btn-ghost">Dismiss</button>
            <span className="atlas-badge atlas-badge-success">OK</span>
            <span className="atlas-badge atlas-badge-warning">DRAFT</span>
            <span className="atlas-badge atlas-badge-error">FAIL</span>
            <kbd className="atlas-kbd">⌘K</kbd>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }}>
            <div className="atlas-segmented">
              <button className="atlas-segmented-item is-active">Day</button>
              <button className="atlas-segmented-item">Week</button>
              <button className="atlas-segmented-item">Month</button>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-secondary)" }}>
              <span className="atlas-dot atlas-dot-success is-pulse" /> Live
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-secondary)" }}>
              <span className="atlas-dot atlas-dot-warning" /> Queued
            </span>
          </div>
          <div className="atlas-card" style={{ marginBottom: 0 }}>
            <div className="atlas-card-header">
              <span className="atlas-dot atlas-dot-info" />
              <span className="atlas-panel-title">atlas-edge · production</span>
            </div>
            <div className="atlas-card-body" style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              Last deploy 2m ago · main@a9f3b1 · 42ms p95
            </div>
          </div>
        </div>

        <div style={{ fontSize: 12, color: "var(--text-tertiary)", fontStyle: "italic", lineHeight: 1.5 }}>
          The block above renders the reference CSS because this site is a plain-HTML-ish
          Next.js project. In a shadcn project, your agent would generate{" "}
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", padding: "1px 5px", borderRadius: 3, border: "1px solid var(--border-default)", color: "var(--text-primary)" }}>
            &lt;Button variant=&quot;default&quot;&gt;Ship it&lt;/Button&gt;
          </code>{" "}
          with the Atlas tokens mapped into shadcn's variables. Same visual. Different code.
        </div>
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "8px 0 40px" }} />

      {/* What's in the repo */}
      <section className="ks-section">
        <h2 className="ks-section-title">What's in the repo</h2>
        <p className="ks-section-desc">
          <a className="atlas-link" href="https://github.com/pacifio/ui" target="_blank" rel="noreferrer">github.com/pacifio/ui</a>
          {" "}— MIT. Three top-level folders:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14, marginTop: 14 }}>
          {[
            {
              tag: "For agents",
              title: "skills/atlas/",
              files: [
                "SKILL.md",
                "references/tokens.md",
                "references/components.md",
                "references/theming.md",
                "references/patterns.md",
                "references/responsive.md",
                "references/motion.md",
                "colors_and_type.css",
              ],
              desc: "The skill. Markdown rules are the ground truth; the CSS is reference.",
            },
            {
              tag: "For humans",
              title: "kitchen-sink/",
              files: [
                "app/page.tsx",
                "app/get-started/...",
                "app/components/...",
                "app/foundations/...",
                "app/patterns/...",
                "app/mockups/...",
              ],
              desc: "This site. One-shot generated by an agent reading the skill.",
            },
            {
              tag: "For install",
              title: ".claude-plugin/",
              files: ["plugin.json"],
              desc: "Registers the skill so Claude Code can install it via /plugin install pacifio/ui.",
            },
          ].map((f) => (
            <div key={f.title} style={{ border: "1px solid var(--border-default)", borderRadius: 8, background: "var(--bg-raised)", overflow: "hidden" }}>
              <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 4 }}>{f.tag}</div>
                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-mono)" }}>{f.title}</div>
              </div>
              <div style={{ padding: 12 }}>
                {f.files.map((file) => (
                  <div key={file} style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0", fontSize: 11, color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                    <Icon paths="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|polyline:14 2 14 8 20 8" size={10} stroke={1.4} />
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{file}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 14px", borderTop: "1px solid var(--border-subtle)", fontSize: 12, color: "var(--text-tertiary)", lineHeight: 1.5 }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "8px 0 40px" }} />

      {/* FAQ */}
      <section className="ks-section">
        <h2 className="ks-section-title">Common questions</h2>
        <div className="atlas-accordion" style={{ marginTop: 14 }}>
          {[
            {
              q: "Does this work with shadcn / Radix?",
              a: "Yes — by not overlaying. Your agent reads the shadcn variable alias table in references/theming.md and overrides shadcn's CSS variables with Atlas values. Your shadcn components stay shadcn components; they just look like Atlas. No .atlas-* classes are emitted.",
              open: true,
            },
            {
              q: "Does it conflict with Tailwind?",
              a: "No, because in a Tailwind-heavy project your agent translates Atlas tokens into Tailwind's @theme block (v4) or theme.extend (v3) and emits utility classes. The .atlas-* rules never ship to your bundle unless you explicitly opt in for a greenfield project.",
            },
            {
              q: "So when do I use colors_and_type.css directly?",
              a: "When you're starting from scratch in plain HTML, a static-site generator, or a lightweight framework with no component library. The CSS is production-grade — it powers this entire kitchen-sink site. But it's one of several valid paths, not the default.",
            },
            {
              q: "Is the reference CSS complete?",
              a: "180+ tokens, 50+ class rules, dark + light theme, responsive helpers, device frames, motion primitives, all documented. What it does not do: ship JavaScript. Interactions (dialogs, dropdowns, toasts) are styling only — wire them to your stack's state management.",
            },
            {
              q: "How was this site built?",
              a: "One-shot generated by an agent reading this skill. Hero, 29+ live component cards, foundations, components, patterns, and 4 full-app mockups (email, e-commerce, multi-agent, news) — all produced from the markdown rules, using the reference CSS because Next.js + no shadcn made it the cleanest path.",
            },
          ].map((item, i) => (
            <div key={item.q} className={`atlas-accordion-item${item.open ? " is-open" : ""}`} style={{ borderTop: i > 0 ? "1px solid var(--border-subtle)" : "0" }}>
              <button className="atlas-accordion-trigger" style={{ padding: "14px 16px" }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{item.q}</span>
                <span className="atlas-accordion-chev">›</span>
              </button>
              {item.open && (
                <div className="atlas-accordion-content" style={{ padding: "0 16px 14px", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="atlas-divider-dashed" style={{ margin: "8px 0 40px" }} />

      {/* Next steps */}
      <section className="ks-section">
        <h2 className="ks-section-title">Next steps</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14, marginTop: 14 }}>
          {[
            { title: "Browse components", desc: "50+ live previews with copy-ready HTML.", href: "/components/button", cta: "Components →" },
            { title: "Read the tokens", desc: "Every color, space, radius, shadow.", href: "/foundations/colors", cta: "Foundations →" },
            { title: "Fork the patterns", desc: "Landing, dashboard, chat, mobile app.", href: "/patterns/landing", cta: "Patterns →" },
            { title: "See full mockups", desc: "Email, e-commerce, multi-agent, news.", href: "/mockups/email", cta: "Mockups →" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="ks-tile">
              <div className="ks-tile-eyebrow">Next</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div style={{ marginTop: 10, fontSize: 12, color: "var(--accent-highlight)" }}>{s.cta}</div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 28, padding: 20, border: "1px dashed var(--border-default)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Found a bug? Missing a rule?</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>PRs welcome at github.com/pacifio/ui · MIT</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <a className="atlas-btn-pill atlas-btn-pill-secondary atlas-btn-pill-sm" href="https://github.com/pacifio/ui/issues" target="_blank" rel="noreferrer">Open issue</a>
            <a className="atlas-btn-pill atlas-btn-pill-primary atlas-btn-pill-sm" href="https://github.com/pacifio/ui" target="_blank" rel="noreferrer">Star on GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}
