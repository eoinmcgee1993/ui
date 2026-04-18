import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";

const scale = [
  { token: "--text-xxs", size: 10, usage: "Badges, captions" },
  { token: "--text-xs", size: 11, usage: "Panel headers, status bar" },
  { token: "--text-sm", size: 12, usage: "Tabs, buttons, inputs" },
  { token: "--text-base", size: 13, usage: "Body default" },
  { token: "--text-md", size: 14, usage: "Emphasis" },
  { token: "--text-lg", size: 16, usage: "h4" },
  { token: "--text-xl", size: 20, usage: "h3" },
  { token: "--text-2xl", size: 28, usage: "h2" },
  { token: "--text-3xl", size: 44, usage: "h1" },
];

export default function TypographyPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Inter (UI/display) and JetBrains Mono (code/metrics) load via @import in colors_and_type.css. Base: 13px / 1.45 / -0.01em."
          tokens={["--font-ui", "--font-mono", "--font-display", "--text-base", "--text-sm", "--text-xs"]}
          dos={["Use --font-mono for numerics and code", "Keep base at 13px for density"]}
          donts={["Don't use mono for body copy", "Don't bump base above 14px"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Typography"
        subtitle="Inter for UI, JetBrains Mono for code. A compact 9-step scale from 10px badges to 44px hero. Tight line-heights. Slight negative tracking."
      />

      <Section title="Scale">
        <div style={{ border: "1px solid var(--border-default)", borderRadius: 6, padding: "0 16px" }}>
          {scale.map((s) => (
            <div className="ks-type-row" key={s.token}>
              <code>{s.token}</code>
              <div className="ks-type-sample" style={{ fontSize: s.size }}>
                The quick brown fox — {s.usage}
              </div>
              <div className="ks-type-size">{s.size}px</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Headings" desc="h1 → h4 use display face (Inter) with progressive negative tracking.">
        <div className="ks-preview ks-preview-block">
          <h1 style={{ margin: 0, marginBottom: 8 }}>h1 · 44px · semibold · -0.03em</h1>
          <h2 style={{ margin: 0, marginBottom: 8 }}>h2 · 28px · semibold · -0.02em</h2>
          <h3 style={{ margin: 0, marginBottom: 8 }}>h3 · 20px · semibold · -0.015em</h3>
          <h4 style={{ margin: 0 }}>h4 · 16px · semibold</h4>
        </div>
      </Section>

      <Section title="Mono" desc="For code, metrics, IDs, tokens. JetBrains Mono 12–13px.">
        <div className="ks-preview ks-preview-column">
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
            const id = "atlas-btn-primary"
          </code>
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>
            12,847 rows · 42.3 MB · 3.2s
          </code>
        </div>
      </Section>

      <Section title="Content tone" desc="Sentence case everywhere. UPPERCASE for eyebrow labels and badges only, always with 0.08em tracking.">
        <div className="ks-preview ks-preview-block">
          <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 6 }}>
            Eyebrow label
          </div>
          <div style={{ fontSize: 13, color: "var(--text-primary)" }}>
            Create project — sentence case for all copy.
          </div>
        </div>
      </Section>
    </PageBody>
  );
}
