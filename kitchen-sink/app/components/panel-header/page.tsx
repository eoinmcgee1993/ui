import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PanelHeaderPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="32px height · 11px uppercase title · 8px padding · 1px bottom border."
          tokens={["--h-panel-header", "--text-xs", "--border-default"]}
          dos={["Pair dot + title for section identity", "Right-align controls with flex justify-between"]}
          donts={["Don't use for hero headers — use ks-title instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-panel-header"
        title="Panel header"
        meta={[".atlas-panel-header", ".atlas-panel-title"]}
        subtitle="32px strip at the top of every panel/card. 11px uppercase tracked title."
      />
      <Section title="Default">
        <Example
          block
          html={`<div style="width:400px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden">
  <div class="atlas-panel-header">
    <span class="atlas-panel-title">Inspector</span>
  </div>
  <div style="padding:12px;font-size:13px;color:var(--text-secondary)">Panel body content</div>
</div>`}
        />
      </Section>
      <Section title="With actions">
        <Example
          block
          html={`<div style="width:400px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden">
  <div class="atlas-panel-header" style="display:flex;align-items:center;justify-content:space-between">
    <span style="display:flex;align-items:center;gap:6px"><span class="atlas-dot atlas-dot-info"></span><span class="atlas-panel-title">Build log</span></span>
    <button class="atlas-btn atlas-btn-icon" aria-label="Close"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div style="padding:12px;font-size:13px;color:var(--text-secondary)">Contents…</div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
