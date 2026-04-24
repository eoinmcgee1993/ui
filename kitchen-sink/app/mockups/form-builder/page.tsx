"use client";

import { useMemo, useState } from "react";

type BlockType =
  | "welcome"
  | "statement"
  | "short-text"
  | "long-text"
  | "email"
  | "number"
  | "date"
  | "multiple-choice"
  | "checkboxes"
  | "dropdown"
  | "yes-no"
  | "rating"
  | "scale"
  | "thanks";

type Block =
  | { id: string; type: "welcome"; title: string; body: string; cta: string }
  | { id: string; type: "statement"; title: string; body: string }
  | { id: string; type: "short-text"; label: string; placeholder: string; required: boolean }
  | { id: string; type: "long-text"; label: string; placeholder: string; required: boolean }
  | { id: string; type: "email"; label: string; placeholder: string; required: boolean }
  | { id: string; type: "number"; label: string; placeholder: string; required: boolean }
  | { id: string; type: "date"; label: string; required: boolean }
  | { id: string; type: "multiple-choice"; label: string; options: string[]; required: boolean }
  | { id: string; type: "checkboxes"; label: string; options: string[]; required: boolean }
  | { id: string; type: "dropdown"; label: string; options: string[]; required: boolean }
  | { id: string; type: "yes-no"; label: string; required: boolean }
  | { id: string; type: "rating"; label: string; max: number; required: boolean }
  | { id: string; type: "scale"; label: string; min: number; max: number; minLabel: string; maxLabel: string; required: boolean }
  | { id: string; type: "thanks"; title: string; body: string };

const INITIAL: Block[] = [
  { id: "welcome", type: "welcome", title: "Quick product feedback", body: "Helps us ship the next release. 7 questions, ~2 minutes.", cta: "Start →" },
  { id: "q1", type: "short-text", label: "What's your full name?", placeholder: "Type your answer…", required: true },
  { id: "q2", type: "email", label: "Where can we reach you?", placeholder: "name@company.com", required: true },
  { id: "q3", type: "multiple-choice", label: "Which plan are you on?", options: ["Hobby · free", "Pro", "Team", "Enterprise"], required: true },
  { id: "q4", type: "rating", label: "How likely are you to recommend Atlas?", max: 5, required: true },
  { id: "q5", type: "scale", label: "How satisfied are you with Atlas as a design system for agents?", min: 0, max: 10, minLabel: "Not at all", maxLabel: "Extremely", required: false },
  { id: "q6", type: "long-text", label: "What should we build next?", placeholder: "One sentence is fine — anything goes.", required: false },
  { id: "q7", type: "checkboxes", label: "Which stacks would you like first-class support for?", options: ["Tailwind v4", "shadcn/ui", "Radix", "Chakra", "Mantine", "Material UI"], required: false },
  { id: "thanks", type: "thanks", title: "Thanks 🎉", body: "We read every response. You'll hear back by email." },
];

type TemplateGroup = {
  label: string;
  items: { type: BlockType; label: string; icon: string; make: () => Block }[];
};

const TEMPLATES: TemplateGroup[] = [
  {
    label: "Start & end",
    items: [
      { type: "welcome", label: "Welcome screen", icon: "M3 12h18M12 3l9 9-9 9-9-9 9-9z", make: () => ({ id: nid(), type: "welcome", title: "Welcome", body: "Short intro sentence.", cta: "Start →" }) },
      { type: "statement", label: "Statement", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", make: () => ({ id: nid(), type: "statement", title: "A quick note", body: "Context the respondent should read." }) },
      { type: "thanks", label: "Thank you", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", make: () => ({ id: nid(), type: "thanks", title: "All done", body: "We'll be in touch." }) },
    ],
  },
  {
    label: "Text input",
    items: [
      { type: "short-text", label: "Short text", icon: "M4 7h16M4 12h10M4 17h6", make: () => ({ id: nid(), type: "short-text", label: "Question", placeholder: "Type your answer…", required: false }) },
      { type: "long-text", label: "Long text", icon: "M4 6h16M4 10h16M4 14h16M4 18h12", make: () => ({ id: nid(), type: "long-text", label: "Question", placeholder: "Type your answer…", required: false }) },
      { type: "email", label: "Email", icon: "M22 12h-6l-2 3h-4l-2-3H2|M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", make: () => ({ id: nid(), type: "email", label: "Email address", placeholder: "name@company.com", required: true }) },
      { type: "number", label: "Number", icon: "M7 4v16M17 4v16M3 8h18M3 16h18", make: () => ({ id: nid(), type: "number", label: "Number", placeholder: "0", required: false }) },
      { type: "date", label: "Date", icon: "rect:3,4,18,18,2|M16 2v4M8 2v4M3 10h18", make: () => ({ id: nid(), type: "date", label: "Pick a date", required: false }) },
    ],
  },
  {
    label: "Choice",
    items: [
      { type: "multiple-choice", label: "Multiple choice", icon: "circle:12,12,10|M9 12l2 2 4-4", make: () => ({ id: nid(), type: "multiple-choice", label: "Pick one", options: ["Option A", "Option B", "Option C"], required: false }) },
      { type: "checkboxes", label: "Checkboxes", icon: "rect:3,3,18,18,2|M9 11l3 3 6-6", make: () => ({ id: nid(), type: "checkboxes", label: "Pick one or more", options: ["Option A", "Option B", "Option C"], required: false }) },
      { type: "dropdown", label: "Dropdown", icon: "M6 9l6 6 6-6", make: () => ({ id: nid(), type: "dropdown", label: "Pick one", options: ["Option A", "Option B"], required: false }) },
      { type: "yes-no", label: "Yes / No", icon: "M5 13l4 4L19 7", make: () => ({ id: nid(), type: "yes-no", label: "Yes or no?", required: false }) },
    ],
  },
  {
    label: "Scale",
    items: [
      { type: "rating", label: "Rating (stars)", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", make: () => ({ id: nid(), type: "rating", label: "Rate us", max: 5, required: false }) },
      { type: "scale", label: "Linear scale", icon: "M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4", make: () => ({ id: nid(), type: "scale", label: "How likely…?", min: 0, max: 10, minLabel: "Unlikely", maxLabel: "Very likely", required: false }) },
    ],
  },
];

const TYPE_META: Record<BlockType, { label: string; icon: string; tint: string }> = {
  welcome: { label: "Welcome", icon: "M3 12h18M12 3l9 9-9 9-9-9 9-9z", tint: "var(--status-info)" },
  statement: { label: "Statement", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", tint: "var(--text-tertiary)" },
  "short-text": { label: "Short text", icon: "M4 7h16M4 12h10M4 17h6", tint: "var(--text-secondary)" },
  "long-text": { label: "Long text", icon: "M4 6h16M4 10h16M4 14h16M4 18h12", tint: "var(--text-secondary)" },
  email: { label: "Email", icon: "M22 12h-6l-2 3h-4l-2-3H2|M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", tint: "var(--accent-highlight)" },
  number: { label: "Number", icon: "M7 4v16M17 4v16M3 8h18M3 16h18", tint: "var(--text-secondary)" },
  date: { label: "Date", icon: "rect:3,4,18,18,2|M16 2v4M8 2v4M3 10h18", tint: "var(--text-secondary)" },
  "multiple-choice": { label: "Multiple choice", icon: "circle:12,12,10|M9 12l2 2 4-4", tint: "var(--accent-highlight)" },
  checkboxes: { label: "Checkboxes", icon: "rect:3,3,18,18,2|M9 11l3 3 6-6", tint: "var(--accent-highlight)" },
  dropdown: { label: "Dropdown", icon: "M6 9l6 6 6-6", tint: "var(--text-secondary)" },
  "yes-no": { label: "Yes / No", icon: "M5 13l4 4L19 7", tint: "var(--status-success)" },
  rating: { label: "Rating", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", tint: "var(--status-warning)" },
  scale: { label: "Linear scale", icon: "M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4", tint: "var(--status-info)" },
  thanks: { label: "Thanks", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", tint: "var(--status-error)" },
};

function nid() {
  return "b" + Math.random().toString(36).slice(2, 8);
}

function Icon({ paths, size = 14, stroke = 1.6 }: { paths: string; size?: number; stroke?: number }) {
  const parts = paths.split("|");
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {parts.map((p, i) => {
        if (p.startsWith("circle:")) {
          const [cx, cy, r] = p.slice(7).split(",");
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        if (p.startsWith("rect:")) {
          const [x, y, w, h, rx] = p.slice(5).split(",");
          return <rect key={i} x={x} y={y} width={w} height={h} rx={rx} />;
        }
        return <path key={i} d={p} />;
      })}
    </svg>
  );
}

export default function FormBuilderPage() {
  const [blocks, setBlocks] = useState<Block[]>(INITIAL);
  const [selectedId, setSelectedId] = useState<string>(INITIAL[1].id);
  const [tab, setTab] = useState<"design" | "logic" | "share" | "results">("design");
  const [previewMode, setPreviewMode] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [responses, setResponses] = useState<Record<string, unknown>>({});
  const [previewIndex, setPreviewIndex] = useState(0);

  const selected = useMemo(() => blocks.find((b) => b.id === selectedId) || blocks[0], [blocks, selectedId]);
  const selectedIdx = blocks.findIndex((b) => b.id === selected.id);

  const update = (patch: Partial<Block>) => {
    setBlocks((prev) => prev.map((b) => (b.id === selected.id ? ({ ...b, ...patch } as Block) : b)));
  };

  const addBlock = (make: () => Block) => {
    const next = make();
    setBlocks((prev) => {
      const out = [...prev];
      out.splice(selectedIdx + 1, 0, next);
      return out;
    });
    setSelectedId(next.id);
    setPaletteOpen(false);
  };

  const deleteBlock = (id: string) => {
    const idx = blocks.findIndex((b) => b.id === id);
    if (idx < 0 || blocks.length === 1) return;
    setBlocks((prev) => prev.filter((b) => b.id !== id));
    const nextSel = blocks[Math.min(idx, blocks.length - 2)];
    if (nextSel) setSelectedId(nextSel.id);
  };

  const move = (id: string, dir: -1 | 1) => {
    setBlocks((prev) => {
      const idx = prev.findIndex((b) => b.id === id);
      const to = idx + dir;
      if (idx < 0 || to < 0 || to >= prev.length) return prev;
      const out = [...prev];
      [out[idx], out[to]] = [out[to], out[idx]];
      return out;
    });
  };

  const exitPreview = () => {
    setPreviewMode(false);
    setResponses({});
    setPreviewIndex(0);
  };

  const previewBlock = blocks[previewIndex] ?? blocks[0];

  if (previewMode) {
    const isFirst = previewIndex === 0;
    const isLast = previewIndex === blocks.length - 1;
    return (
      <div style={{ height: "calc(100vh - 52px)", background: "var(--bg-base)", display: "flex", flexDirection: "column", fontFamily: "var(--font-ui)", color: "var(--text-primary)" }}>
        <header style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: "1px solid var(--border-default)", flex: "none" }}>
          <span className="atlas-badge atlas-badge-info">PREVIEW</span>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Quick product feedback</div>
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{previewIndex + 1} / {blocks.length}</div>
          <button className="atlas-btn atlas-btn-secondary" onClick={exitPreview}>Exit preview</button>
        </header>
        <div style={{ height: 2, background: "var(--border-subtle)" }}>
          <div style={{ width: `${((previewIndex + 1) / blocks.length) * 100}%`, height: "100%", background: "var(--accent-highlight)", transition: "width 240ms ease-out" }} />
        </div>
        <main style={{ flex: 1, overflowY: "auto", padding: "48px 24px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: 640 }}>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: 10 }}>
              {previewBlock.type === "welcome" || previewBlock.type === "thanks" || previewBlock.type === "statement"
                ? TYPE_META[previewBlock.type].label.toUpperCase()
                : `QUESTION ${previewIndex} OF ${blocks.length - 2}`}
            </div>
            {renderPreview(previewBlock, responses, setResponses)}
          </div>
        </main>
        <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderTop: "1px solid var(--border-default)", flex: "none" }}>
          <button className="atlas-btn atlas-btn-ghost" disabled={isFirst} onClick={() => setPreviewIndex((i) => Math.max(0, i - 1))} style={isFirst ? { opacity: 0.5, pointerEvents: "none" } : undefined}>← Back</button>
          <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Press <kbd className="atlas-kbd">↵</kbd> to continue</div>
          <button className="atlas-btn-pill atlas-btn-pill-primary" disabled={isLast} onClick={() => setPreviewIndex((i) => Math.min(blocks.length - 1, i + 1))} style={isLast ? { opacity: 0.5, pointerEvents: "none" } : undefined}>
            {isLast ? "Done" : previewBlock.type === "welcome" ? "Start" : "OK"} →
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className="ks-form-builder" style={{ height: "calc(100vh - 52px)", background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-ui)" }}>
      <header style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 14, padding: "0 20px", borderBottom: "1px solid var(--border-default)", height: 56 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: "var(--accent-highlight)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <Icon paths="M3 12h18M12 3l9 9-9 9-9-9 9-9z" size={11} stroke={2} />
          </div>
          <input defaultValue="Quick product feedback" className="atlas-input" style={{ width: 240, fontSize: 13, fontWeight: 500, background: "transparent", border: 0, padding: 0, height: 28 }} />
        </div>
        <div className="atlas-segmented">
          {(["design", "logic", "share", "results"] as const).map((t) => (
            <button key={t} className={`atlas-segmented-item${tab === t ? " is-active" : ""}`} onClick={() => setTab(t)}>
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
          <span className="atlas-dot atlas-dot-success" />Saved · 12s ago
        </span>
        <button className="atlas-btn atlas-btn-secondary" onClick={() => { setPreviewIndex(0); setPreviewMode(true); }}>
          <Icon paths="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z|circle:12,12,3" size={13} />Preview
        </button>
        <button className="atlas-btn-pill atlas-btn-pill-primary atlas-btn-pill-sm">Publish →</button>
      </header>

      <aside className="ks-fb-rail" style={{ borderRight: "1px solid var(--border-default)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "12px 14px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Outline · {blocks.length}</span>
          <button className="atlas-btn atlas-btn-icon" onClick={() => setPaletteOpen(true)} aria-label="Add block"><Icon paths="M12 5v14M5 12h14" /></button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 6px 12px" }}>
          {blocks.map((b, i) => {
            const meta = TYPE_META[b.type];
            const label = b.type === "welcome" || b.type === "thanks" || b.type === "statement"
              ? (b as { title: string }).title
              : (b as { label: string }).label;
            const isSelected = b.id === selected.id;
            return (
              <button key={b.id} onClick={() => setSelectedId(b.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", marginBottom: 2, borderRadius: 5, background: isSelected ? "var(--bg-selected)" : "transparent", border: "1px solid", borderColor: isSelected ? "var(--border-default)" : "transparent", color: isSelected ? "var(--text-primary)" : "var(--text-secondary)", fontFamily: "inherit", fontSize: 12, textAlign: "left", cursor: "pointer" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)", width: 18, flex: "none" }}>{pageNumber(blocks, i)}</span>
                <span style={{ width: 20, height: 20, borderRadius: 4, background: meta.tint, opacity: 0.15, display: "inline-flex", alignItems: "center", justifyContent: "center", color: meta.tint, flex: "none" }}>
                  <Icon paths={meta.icon} size={11} stroke={1.8} />
                </span>
                <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
              </button>
            );
          })}
        </div>
        <div style={{ padding: 12, borderTop: "1px solid var(--border-default)" }}>
          <button className="atlas-btn atlas-btn-secondary" style={{ width: "100%" }} onClick={() => setPaletteOpen(true)}>
            <Icon paths="M12 5v14M5 12h14" size={12} />Add block
          </button>
        </div>
      </aside>

      <main className="ks-fb-canvas" style={{ overflowY: "auto", background: "var(--bg-base)", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 40px 80px", minWidth: 0 }}>
        <div style={{ width: "100%", maxWidth: 640, display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 20, height: 20, borderRadius: 4, background: TYPE_META[selected.type].tint, opacity: 0.15, display: "inline-flex", alignItems: "center", justifyContent: "center", color: TYPE_META[selected.type].tint }}>
              <Icon paths={TYPE_META[selected.type].icon} size={11} stroke={1.8} />
            </span>
            <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
              {TYPE_META[selected.type].label.toUpperCase()} · {pageNumber(blocks, selectedIdx)}
            </span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <button className="atlas-btn atlas-btn-icon" aria-label="Move up" onClick={() => move(selected.id, -1)} style={{ opacity: selectedIdx === 0 ? 0.4 : 1 }}><Icon paths="M18 15l-6-6-6 6" /></button>
            <button className="atlas-btn atlas-btn-icon" aria-label="Move down" onClick={() => move(selected.id, 1)} style={{ opacity: selectedIdx === blocks.length - 1 ? 0.4 : 1 }}><Icon paths="M6 9l6 6 6-6" /></button>
            <button className="atlas-btn atlas-btn-icon" aria-label="Duplicate" onClick={() => addBlock(() => ({ ...selected, id: nid() } as Block))}><Icon paths="rect:9,9,13,13,2|M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></button>
            <button className="atlas-btn atlas-btn-icon" aria-label="Delete" onClick={() => deleteBlock(selected.id)} style={{ color: "var(--status-error)" }}><Icon paths="polyline:3 6 5 6 21 6|M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></button>
          </div>
        </div>
        <div style={{ width: "100%", maxWidth: 640 }}>
          {renderEditor(selected, update)}
        </div>
      </main>

      <aside className="ks-fb-props" style={{ borderLeft: "1px solid var(--border-default)", overflowY: "auto", padding: "14px 16px", fontSize: 12 }}>
        <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 12 }}>Properties</div>
        {renderProperties(selected, update)}
        <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 10 }}>Block meta</div>
          <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 4, columnGap: 12, margin: 0 }}>
            <dt style={{ color: "var(--text-tertiary)" }}>Type</dt><dd style={{ margin: 0, textAlign: "right", fontFamily: "var(--font-mono)" }}>{selected.type}</dd>
            <dt style={{ color: "var(--text-tertiary)" }}>ID</dt><dd style={{ margin: 0, textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>{selected.id}</dd>
            <dt style={{ color: "var(--text-tertiary)" }}>Position</dt><dd style={{ margin: 0, textAlign: "right", fontFamily: "var(--font-mono)" }}>{selectedIdx + 1} / {blocks.length}</dd>
          </dl>
        </div>
      </aside>

      {paletteOpen && (
        <div onClick={() => setPaletteOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.45)", backdropFilter: "blur(12px) saturate(150%)", WebkitBackdropFilter: "blur(12px) saturate(150%)", zIndex: 200, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "12vh" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: 560, maxWidth: "calc(100vw - 32px)", maxHeight: "72vh", background: "var(--bg-overlay)", border: "1px solid var(--border-default)", borderRadius: 10, boxShadow: "var(--shadow-overlay)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 8 }}>
              <Icon paths="circle:11,11,8|M21 21l-4.3-4.3" size={14} />
              <input className="atlas-input" placeholder="Search block types…" style={{ flex: 1, background: "transparent", border: 0, padding: 0 }} autoFocus />
              <kbd className="atlas-kbd">ESC</kbd>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "10px 10px 14px" }}>
              {TEMPLATES.map((g) => (
                <div key={g.label} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, padding: "6px 8px" }}>{g.label}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
                    {g.items.map((it) => {
                      const meta = TYPE_META[it.type];
                      return (
                        <button key={it.type + it.label} onClick={() => addBlock(it.make)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", background: "transparent", border: "1px solid var(--border-default)", borderRadius: 5, color: "var(--text-primary)", fontFamily: "inherit", fontSize: 12, cursor: "pointer", textAlign: "left", transition: "background-color 120ms ease" }}>
                          <span style={{ width: 24, height: 24, borderRadius: 4, background: meta.tint, opacity: 0.15, display: "inline-flex", alignItems: "center", justifyContent: "center", color: meta.tint, flex: "none" }}>
                            <Icon paths={it.icon} size={12} stroke={1.8} />
                          </span>
                          <span>{it.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function pageNumber(blocks: Block[], idx: number) {
  const b = blocks[idx];
  if (b.type === "welcome") return "—";
  if (b.type === "thanks") return "end";
  if (b.type === "statement") return "•";
  let n = 0;
  for (let i = 0; i <= idx; i++) {
    const t = blocks[i].type;
    if (t !== "welcome" && t !== "thanks" && t !== "statement") n++;
  }
  return "Q" + n;
}

function EditableInput({ value, onChange, fontSize, fontWeight, placeholder }: { value: string; onChange: (v: string) => void; fontSize: number; fontWeight?: number; placeholder?: string }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={{ width: "100%", background: "transparent", border: 0, outline: 0, fontFamily: "var(--font-ui)", fontSize, fontWeight, color: "var(--text-primary)", letterSpacing: "-0.01em", padding: 0 }} />;
}

function EditableTextarea({ value, onChange, fontSize, placeholder }: { value: string; onChange: (v: string) => void; fontSize: number; placeholder?: string }) {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={2} style={{ width: "100%", background: "transparent", border: 0, outline: 0, fontFamily: "var(--font-ui)", fontSize, lineHeight: 1.55, color: "var(--text-secondary)", resize: "none", padding: 0 }} />;
}

function renderEditor(b: Block, update: (patch: Partial<Block>) => void): React.ReactNode {
  switch (b.type) {
    case "welcome":
      return (
        <div>
          <EditableInput value={b.title} onChange={(v) => update({ title: v } as Partial<Block>)} fontSize={32} fontWeight={700} />
          <div style={{ height: 12 }} />
          <EditableTextarea value={b.body} onChange={(v) => update({ body: v } as Partial<Block>)} fontSize={15} />
          <div style={{ marginTop: 24 }}>
            <input className="atlas-btn-pill atlas-btn-pill-primary" value={b.cta} onChange={(e) => update({ cta: e.target.value } as Partial<Block>)} style={{ cursor: "text", fontFamily: "inherit", textAlign: "center", minWidth: 120 }} />
          </div>
        </div>
      );
    case "thanks":
      return (
        <div style={{ textAlign: "center" }}>
          <EditableInput value={b.title} onChange={(v) => update({ title: v } as Partial<Block>)} fontSize={34} fontWeight={700} />
          <div style={{ height: 10 }} />
          <EditableTextarea value={b.body} onChange={(v) => update({ body: v } as Partial<Block>)} fontSize={15} />
        </div>
      );
    case "statement":
      return (
        <div>
          <EditableInput value={b.title} onChange={(v) => update({ title: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ height: 10 }} />
          <EditableTextarea value={b.body} onChange={(v) => update({ body: v } as Partial<Block>)} fontSize={14} />
        </div>
      );
    case "short-text":
    case "long-text":
    case "email":
    case "number":
    case "date":
      return (
        <div>
          <EditableInput value={(b as { label: string }).label} onChange={(v) => update({ label: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ height: 20 }} />
          {b.type === "long-text" ? (
            <textarea className="atlas-input" placeholder={b.placeholder || "Type your answer…"} rows={3} style={{ width: "100%", padding: 10, fontSize: 15, resize: "vertical" }} disabled />
          ) : b.type === "date" ? (
            <input className="atlas-input" type="date" style={{ width: "100%", height: 40, fontSize: 15 }} disabled />
          ) : (
            <input className="atlas-input" type={b.type === "email" ? "email" : b.type === "number" ? "number" : "text"} placeholder={(b as { placeholder?: string }).placeholder || "Type your answer…"} style={{ width: "100%", height: 40, fontSize: 15, padding: "0 12px" }} disabled />
          )}
          {"placeholder" in b && <div style={{ marginTop: 8, fontSize: 11, color: "var(--text-tertiary)" }}>Placeholder · edit in properties →</div>}
        </div>
      );
    case "multiple-choice":
    case "checkboxes":
      return (
        <div>
          <EditableInput value={b.label} onChange={(v) => update({ label: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {b.options.map((opt, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", border: "1px solid var(--border-default)", borderRadius: 6, background: "var(--bg-raised)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: b.type === "multiple-choice" ? "50%" : 3, border: "1px solid var(--border-default)", color: "var(--text-tertiary)", fontSize: 10, fontFamily: "var(--font-mono)" }}>
                  {b.type === "multiple-choice" ? String.fromCharCode(65 + i) : ""}
                </span>
                <input value={opt} onChange={(e) => { const options = [...b.options]; options[i] = e.target.value; update({ options } as Partial<Block>); }} style={{ flex: 1, background: "transparent", border: 0, outline: 0, fontSize: 14, color: "var(--text-primary)", fontFamily: "inherit" }} />
                <button className="atlas-btn atlas-btn-icon" onClick={() => { const options = b.options.filter((_, j) => j !== i); update({ options } as Partial<Block>); }} aria-label="Remove option">
                  <Icon paths="M18 6 6 18M6 6l12 12" size={12} />
                </button>
              </div>
            ))}
            <button className="atlas-btn atlas-btn-ghost" onClick={() => update({ options: [...b.options, "New option"] } as Partial<Block>)} style={{ alignSelf: "flex-start", marginTop: 4 }}>
              <Icon paths="M12 5v14M5 12h14" size={12} />Add option
            </button>
          </div>
        </div>
      );
    case "dropdown":
      return (
        <div>
          <EditableInput value={b.label} onChange={(v) => update({ label: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ height: 20 }} />
          <select className="atlas-input" style={{ width: "100%", height: 40, fontSize: 15, padding: "0 12px" }} disabled>
            {b.options.map((o) => (<option key={o}>{o}</option>))}
          </select>
          <div style={{ marginTop: 8, fontSize: 11, color: "var(--text-tertiary)" }}>{b.options.length} options · edit in properties →</div>
        </div>
      );
    case "yes-no":
      return (
        <div>
          <EditableInput value={b.label} onChange={(v) => update({ label: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            {["Yes", "No"].map((lbl) => (
              <div key={lbl} style={{ flex: 1, padding: "14px 16px", border: "1px solid var(--border-default)", borderRadius: 6, background: "var(--bg-raised)", fontSize: 15, fontWeight: 500, textAlign: "center" }}>
                <kbd className="atlas-kbd" style={{ marginRight: 8 }}>{lbl[0]}</kbd>{lbl}
              </div>
            ))}
          </div>
        </div>
      );
    case "rating":
      return (
        <div>
          <EditableInput value={b.label} onChange={(v) => update({ label: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            {Array.from({ length: b.max }).map((_, i) => (
              <div key={i} style={{ width: 44, height: 44, borderRadius: 6, border: "1px solid var(--border-default)", background: "var(--bg-raised)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--status-warning)" }}>
                <Icon paths="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={20} stroke={1.5} />
              </div>
            ))}
          </div>
        </div>
      );
    case "scale":
      return (
        <div>
          <EditableInput value={b.label} onChange={(v) => update({ label: v } as Partial<Block>)} fontSize={28} fontWeight={600} />
          <div style={{ marginTop: 24 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {Array.from({ length: b.max - b.min + 1 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: 36, border: "1px solid var(--border-default)", borderRadius: 4, background: "var(--bg-raised)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-secondary)" }}>
                  {b.min + i}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--text-tertiary)" }}>
              <span>{b.minLabel}</span><span>{b.maxLabel}</span>
            </div>
          </div>
        </div>
      );
  }
}

function renderProperties(b: Block, update: (patch: Partial<Block>) => void): React.ReactNode {
  const rows: React.ReactNode[] = [];
  const row = (label: string, el: React.ReactNode, key: string) => (
    <div key={key} style={{ marginBottom: 12 }}>
      <label style={{ display: "block", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 4 }}>{label}</label>
      {el}
    </div>
  );

  if ("label" in b) {
    rows.push(row("Label", <input className="atlas-input" value={(b as { label: string }).label} onChange={(e) => update({ label: e.target.value } as Partial<Block>)} style={{ width: "100%" }} />, "label"));
  }
  if ("title" in b && (b.type === "welcome" || b.type === "thanks" || b.type === "statement")) {
    rows.push(row("Title", <input className="atlas-input" value={(b as { title: string }).title} onChange={(e) => update({ title: e.target.value } as Partial<Block>)} style={{ width: "100%" }} />, "title"));
  }
  if ("body" in b) {
    rows.push(row("Body", <textarea className="atlas-input" value={(b as { body: string }).body} onChange={(e) => update({ body: e.target.value } as Partial<Block>)} rows={3} style={{ width: "100%", padding: 8, resize: "vertical", fontSize: 12 }} />, "body"));
  }
  if ("cta" in b) {
    rows.push(row("Button label", <input className="atlas-input" value={(b as { cta: string }).cta} onChange={(e) => update({ cta: e.target.value } as Partial<Block>)} style={{ width: "100%" }} />, "cta"));
  }
  if ("placeholder" in b) {
    rows.push(row("Placeholder", <input className="atlas-input" value={(b as { placeholder: string }).placeholder} onChange={(e) => update({ placeholder: e.target.value } as Partial<Block>)} style={{ width: "100%" }} />, "placeholder"));
  }
  if ("options" in b) {
    const opts = (b as { options: string[] }).options;
    rows.push(row(`Options · ${opts.length}`, (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {opts.map((opt, i) => (
          <div key={i} style={{ display: "flex", gap: 4 }}>
            <input className="atlas-input" value={opt} onChange={(e) => { const options = [...opts]; options[i] = e.target.value; update({ options } as Partial<Block>); }} style={{ flex: 1 }} />
            <button className="atlas-btn atlas-btn-icon" onClick={() => update({ options: opts.filter((_, j) => j !== i) } as Partial<Block>)} aria-label="Remove option">
              <Icon paths="M18 6 6 18M6 6l12 12" size={12} />
            </button>
          </div>
        ))}
        <button className="atlas-btn atlas-btn-ghost atlas-btn-sm" style={{ alignSelf: "flex-start" }} onClick={() => update({ options: [...opts, "New option"] } as Partial<Block>)}>
          <Icon paths="M12 5v14M5 12h14" size={11} />Add option
        </button>
      </div>
    ), "options"));
  }
  if (b.type === "rating") {
    rows.push(row("Max stars", (
      <div className="atlas-segmented">
        {[3, 5, 7, 10].map((n) => (
          <button key={n} className={`atlas-segmented-item${b.max === n ? " is-active" : ""}`} onClick={() => update({ max: n } as Partial<Block>)}>{n}</button>
        ))}
      </div>
    ), "max"));
  }
  if (b.type === "scale") {
    rows.push(row("Min label", <input className="atlas-input" value={b.minLabel} onChange={(e) => update({ minLabel: e.target.value } as Partial<Block>)} style={{ width: "100%" }} />, "minLabel"));
    rows.push(row("Max label", <input className="atlas-input" value={b.maxLabel} onChange={(e) => update({ maxLabel: e.target.value } as Partial<Block>)} style={{ width: "100%" }} />, "maxLabel"));
    rows.push(row("Range", (
      <div style={{ display: "flex", gap: 6 }}>
        <input className="atlas-input" type="number" value={b.min} onChange={(e) => update({ min: +e.target.value } as Partial<Block>)} style={{ flex: 1, fontFamily: "var(--font-mono)" }} />
        <span style={{ alignSelf: "center", color: "var(--text-tertiary)" }}>→</span>
        <input className="atlas-input" type="number" value={b.max} onChange={(e) => update({ max: +e.target.value } as Partial<Block>)} style={{ flex: 1, fontFamily: "var(--font-mono)" }} />
      </div>
    ), "range"));
  }
  if ("required" in b) {
    const req = (b as { required: boolean }).required;
    rows.push(row("Required", (
      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
        <button className={`atlas-switch${req ? " is-on" : ""}`} role="switch" aria-checked={req} onClick={() => update({ required: !req } as Partial<Block>)} />
        <span style={{ color: "var(--text-secondary)" }}>{req ? "Yes" : "No"}</span>
      </label>
    ), "required"));
  }
  return <>{rows}</>;
}

function renderPreview(b: Block, responses: Record<string, unknown>, setResponses: (r: Record<string, unknown>) => void): React.ReactNode {
  const set = (v: unknown) => setResponses({ ...responses, [b.id]: v });
  const val = responses[b.id];

  switch (b.type) {
    case "welcome":
      return (
        <div>
          <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>{b.title}</h1>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55, margin: "0 0 28px", maxWidth: 520 }}>{b.body}</p>
        </div>
      );
    case "thanks":
      return (
        <div style={{ textAlign: "center", paddingTop: 40 }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 16px" }}>{b.title}</h1>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55, margin: "0 auto 28px", maxWidth: 440 }}>{b.body}</p>
          <button className="atlas-btn-pill atlas-btn-pill-secondary">Back to Atlas</button>
        </div>
      );
    case "statement":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{b.title}</h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{b.body}</p>
        </div>
      );
    case "short-text":
    case "email":
    case "number":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 18px", lineHeight: 1.3 }}>
            {b.label}{b.required && <span style={{ color: "var(--status-error)", marginLeft: 6 }}>*</span>}
          </h2>
          <input className="atlas-input" type={b.type === "email" ? "email" : b.type === "number" ? "number" : "text"} value={String(val ?? "")} onChange={(e) => set(e.target.value)} placeholder={b.placeholder} style={{ width: "100%", height: 48, fontSize: 17, padding: "0 14px" }} autoFocus />
        </div>
      );
    case "long-text":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 18px", lineHeight: 1.3 }}>
            {b.label}{b.required && <span style={{ color: "var(--status-error)", marginLeft: 6 }}>*</span>}
          </h2>
          <textarea className="atlas-input" value={String(val ?? "")} onChange={(e) => set(e.target.value)} placeholder={b.placeholder} rows={4} style={{ width: "100%", fontSize: 16, padding: 14, resize: "vertical", minHeight: 120 }} autoFocus />
        </div>
      );
    case "date":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 18px", lineHeight: 1.3 }}>{b.label}</h2>
          <input className="atlas-input" type="date" value={String(val ?? "")} onChange={(e) => set(e.target.value)} style={{ width: "100%", height: 48, fontSize: 17, padding: "0 14px" }} autoFocus />
        </div>
      );
    case "multiple-choice":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 20px", lineHeight: 1.3 }}>{b.label}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {b.options.map((opt, i) => {
              const selected = val === opt;
              return (
                <button key={i} onClick={() => set(opt)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 8, background: selected ? "var(--accent-highlight-muted)" : "var(--bg-raised)", border: "1px solid", borderColor: selected ? "var(--accent-highlight)" : "var(--border-default)", color: "var(--text-primary)", fontFamily: "inherit", fontSize: 15, textAlign: "left", cursor: "pointer" }}>
                  <kbd className="atlas-kbd" style={{ flex: "none" }}>{String.fromCharCode(65 + i)}</kbd>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {selected && <Icon paths="M5 13l4 4L19 7" size={16} stroke={2} />}
                </button>
              );
            })}
          </div>
        </div>
      );
    case "checkboxes": {
      const arr = Array.isArray(val) ? (val as string[]) : [];
      const toggle = (opt: string) => { set(arr.includes(opt) ? arr.filter((o) => o !== opt) : [...arr, opt]); };
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 20px", lineHeight: 1.3 }}>{b.label}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {b.options.map((opt, i) => {
              const checked = arr.includes(opt);
              return (
                <button key={i} onClick={() => toggle(opt)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 8, background: checked ? "var(--accent-highlight-muted)" : "var(--bg-raised)", border: "1px solid", borderColor: checked ? "var(--accent-highlight)" : "var(--border-default)", color: "var(--text-primary)", fontFamily: "inherit", fontSize: 15, textAlign: "left", cursor: "pointer" }}>
                  <span style={{ width: 18, height: 18, borderRadius: 3, border: "1px solid var(--border-default)", background: checked ? "var(--accent-highlight)" : "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", flex: "none" }}>
                    {checked && <Icon paths="M5 13l4 4L19 7" size={12} stroke={2.2} />}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    case "dropdown":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 18px", lineHeight: 1.3 }}>{b.label}</h2>
          <select className="atlas-input" value={String(val ?? "")} onChange={(e) => set(e.target.value)} style={{ width: "100%", height: 48, fontSize: 17, padding: "0 14px" }}>
            <option value="">Pick one…</option>
            {b.options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      );
    case "yes-no":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 20px", lineHeight: 1.3 }}>{b.label}</h2>
          <div style={{ display: "flex", gap: 12 }}>
            {["Yes", "No"].map((lbl) => {
              const sel = val === lbl;
              return (
                <button key={lbl} onClick={() => set(lbl)} style={{ flex: 1, padding: "18px 20px", borderRadius: 8, background: sel ? "var(--accent-highlight-muted)" : "var(--bg-raised)", border: "1px solid", borderColor: sel ? "var(--accent-highlight)" : "var(--border-default)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)", cursor: "pointer" }}>
                  <kbd className="atlas-kbd" style={{ marginRight: 10 }}>{lbl[0]}</kbd>{lbl}
                </button>
              );
            })}
          </div>
        </div>
      );
    case "rating":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 20px", lineHeight: 1.3 }}>{b.label}</h2>
          <div style={{ display: "flex", gap: 10 }}>
            {Array.from({ length: b.max }).map((_, i) => {
              const filled = typeof val === "number" && i < (val as number);
              return (
                <button key={i} onClick={() => set(i + 1)} style={{ width: 52, height: 52, borderRadius: 8, border: "1px solid var(--border-default)", background: filled ? "var(--status-warning-muted)" : "var(--bg-raised)", color: filled ? "var(--status-warning)" : "var(--text-tertiary)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                  <Icon paths="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={24} stroke={1.5} />
                </button>
              );
            })}
          </div>
        </div>
      );
    case "scale":
      return (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 20px", lineHeight: 1.3 }}>{b.label}</h2>
          <div style={{ display: "flex", gap: 4 }}>
            {Array.from({ length: b.max - b.min + 1 }).map((_, i) => {
              const n = b.min + i;
              const sel = val === n;
              return (
                <button key={n} onClick={() => set(n)} style={{ flex: 1, height: 48, border: "1px solid", borderColor: sel ? "var(--accent-highlight)" : "var(--border-default)", borderRadius: 6, background: sel ? "var(--accent-highlight-muted)" : "var(--bg-raised)", fontFamily: "var(--font-mono)", fontSize: 15, color: sel ? "var(--text-primary)" : "var(--text-secondary)", cursor: "pointer" }}>
                  {n}
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 12, color: "var(--text-tertiary)" }}>
            <span>{b.minLabel}</span><span>{b.maxLabel}</span>
          </div>
        </div>
      );
  }
}
