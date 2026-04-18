import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";

export default function MotionPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Motion is minimal: 120–150ms transitions, background-color only. No spring, no bounce."
          dos={["Transition background-color for hover/press states", "Use ease-out or linear"]}
          donts={["Don't animate color or opacity on icons — causes jitter", "Don't use springs or bounces", "Don't add entry/exit animations to content"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Motion"
        subtitle="Atlas feels instant. 120–150ms fades on background-color are the only standard transition. Everything else is immediate — devtools respect your attention."
      />
      <Section title="Interactive states" desc="Hover a button to see the transition.">
        <div className="ks-preview">
          <button className="atlas-btn atlas-btn-primary">Hover me</button>
          <button className="atlas-btn atlas-btn-secondary">Secondary</button>
          <button className="atlas-btn atlas-btn-ghost">Ghost</button>
        </div>
      </Section>
      <Section title="Rules">
        <div style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <div><strong style={{ color: "var(--text-primary)" }}>120ms ease-out</strong> — default for hover/press.</div>
          <div><strong style={{ color: "var(--text-primary)" }}>150ms ease-out</strong> — popover open, toast enter.</div>
          <div><strong style={{ color: "var(--text-primary)" }}>Never animate</strong> <code>color</code> or <code>opacity</code> on icons — causes visible jitter.</div>
          <div><strong style={{ color: "var(--text-primary)" }}>No springs</strong>, no bounces, no overshoot. Ease-out or linear only.</div>
        </div>
      </Section>
    </PageBody>
  );
}
