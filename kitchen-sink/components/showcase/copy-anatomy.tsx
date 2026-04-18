"use client";

import { useState } from "react";

const ATLAS_CORE_RULES = `## Atlas core rules (apply to every component)

- **Aesthetic:** AMOLED black (\`#000\`) base, monochromatic surfaces. Grays + whites for structure; saturated color reserved for status semantics.
- **Spacing:** strict 4px grid. Tokens: \`--space-1\` (4) through \`--space-10\` (40). Never invent values.
- **Radii:** \`--radius-sm\` 3, \`--radius-md\` 4, \`--radius-lg\` 6, \`--radius-full\` 9999. No 8/10/12/16.
- **Heights:** 28px buttons, 24px inputs, 34px tab bars, 32px panel headers, 56px chrome rows.
- **Borders over shadows.** Shadows (\`--shadow-sm\` → \`--shadow-overlay\`) only on overlays (dialog/popover/toast/tooltip). Dark uses 60–95% alpha; light overrides to 6–14%.
- **Type:** Inter 400/500/600/700; JetBrains Mono for code + metrics. 13px base. Tokens \`--text-xxs\` (10) → \`--text-3xl\` (44).
- **Icons:** Lucide, 1.5px stroke, color inherits. Never emoji, never unicode symbols.
- **Accent discipline:** \`--accent-primary\` \`#ededed\` (near-white) for primary CTAs. \`--accent-highlight\` \`#0070f3\` (blue) is highlight only — focus rings, links, selection, active stepper dots. **Never a CTA.**
- **Status:** \`--status-success\` / \`-warning\` / \`-error\` / \`-info\` — for status semantics, not decoration.
- **Theming:** \`data-theme="dark"\` (default) or \`="light"\`. Tokens remap; component structure never changes.

## Motion + overlays

- Hover/press: 120ms \`background-color\` transitions only. Never animate color or opacity on icons.
- **Overlay backdrops use \`backdrop-filter: blur()\` + spring curves — not flat opacity + ease.**
- Easing tokens: \`--ease-spring\` (slight overshoot, modals), \`--ease-out-expo\` (overlay fades), \`--ease-apple\` (drawers/sheets).
- Duration tokens: \`--dur-fast\` 140ms, \`--dur-base\` 220ms, \`--dur-slow\` 320ms.
- Overlays animate BOTH enter and exit via two-stage mount.

## Button reset (critical when Atlas classes go on \`<button>\`)

\`\`\`css
background: transparent; border: 0; padding: 0 ...; font-family: inherit;
text-align: left; color: var(--text-primary); cursor: pointer;
transition: background-color 120ms ease;
\`\`\`

## Stack translation

- **Plain HTML** → use \`.atlas-*\` classes directly.
- **Tailwind v4** → Atlas tokens in \`@theme\`; emit utility classes.
- **shadcn/ui** → override shadcn's CSS variables with Atlas values; keep shadcn component structure.
- **React / CSS modules** → port \`.atlas-*\` rules into your styling system.
`;

function buildMarkdown(spec: {
  name?: string;
  classes?: string[];
  anatomy?: string;
  tokens?: string[];
  dos?: string[];
  donts?: string[];
}) {
  const { name, classes, anatomy, tokens, dos, donts } = spec;
  const title = name || "Atlas component";
  const lines: string[] = [];
  lines.push(`# ${title}`);
  lines.push("");
  if (classes && classes.length) {
    lines.push("**Classes:** " + classes.map((c) => "`" + c + "`").join(" · "));
    lines.push("");
  }
  if (anatomy) {
    lines.push("## Anatomy");
    lines.push("");
    lines.push(anatomy);
    lines.push("");
  }
  if (tokens && tokens.length) {
    lines.push("## Tokens");
    lines.push("");
    tokens.forEach((t) => lines.push(`- \`${t}\``));
    lines.push("");
  }
  if (dos && dos.length) {
    lines.push("## Do");
    lines.push("");
    dos.forEach((d) => lines.push(`- ${d}`));
    lines.push("");
  }
  if (donts && donts.length) {
    lines.push("## Don't");
    lines.push("");
    donts.forEach((d) => lines.push(`- ${d}`));
    lines.push("");
  }
  lines.push("---");
  lines.push("");
  lines.push(ATLAS_CORE_RULES);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("Generated from [Atlas](https://github.com/pacifio/ui) — MIT.");
  return lines.join("\n");
}

export function CopyAnatomy({
  anatomy,
  tokens,
  dos,
  donts,
}: {
  anatomy?: string;
  tokens?: string[];
  dos?: string[];
  donts?: string[];
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (typeof window === "undefined") return;
    // Infer name from the page's h1 (ks-title) and meta chips (ks-meta-chip)
    const titleEl = document.querySelector(".ks-page-header .ks-title");
    const name = titleEl?.textContent?.trim() || document.title.split("·")[0].trim();
    const classEls = Array.from(document.querySelectorAll(".ks-page-header .ks-meta-chip"));
    const classes = classEls.map((el) => (el.textContent || "").trim()).filter(Boolean);

    const md = buildMarkdown({ name, classes, anatomy, tokens, dos, donts });
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      className={`ks-copy-anatomy${copied ? " is-copied" : ""}`}
      onClick={onCopy}
      title="Copy rules as markdown (includes general Atlas primitives)"
      aria-label="Copy component rules as markdown"
    >
      {copied ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span>{copied ? "Copied" : "Copy rules"}</span>
    </button>
  );
}
