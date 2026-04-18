import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function DialogPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="480px default · 6px radius · shadow-lg · header / body / footer zones."
          tokens={["--shadow-lg", "--z-modal", "--bg-overlay"]}
          dos={["Include a title, description, and at most 2 footer buttons", "Esc closes the dialog"]}
          donts={["Don't use dialogs for non-blocking info — use toast or alert"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-dialog"
        title="Dialog"
        meta={[".atlas-dialog", ".atlas-dialog-header", ".atlas-dialog-title", ".atlas-dialog-desc", ".atlas-dialog-body", ".atlas-dialog-footer", ".atlas-dialog-backdrop"]}
        subtitle="Blocking modal. Header + body + footer. Cancel ghost on the left, primary on the right."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-dialog" style="position:relative;width:440px;box-shadow:var(--shadow-lg)">
  <div class="atlas-dialog-header">
    <div class="atlas-dialog-title">Delete project</div>
    <div class="atlas-dialog-desc">This will permanently delete atlas and all of its deployments. This cannot be undone.</div>
  </div>
  <div class="atlas-dialog-body" style="font-size:13px;color:var(--text-secondary)">Type <code style="font-family:var(--font-mono);color:var(--text-primary)">atlas</code> to confirm.</div>
  <div class="atlas-dialog-footer" style="display:flex;justify-content:flex-end;gap:8px">
    <button class="atlas-btn atlas-btn-ghost">Cancel</button>
    <button class="atlas-btn atlas-btn-destructive">Delete project</button>
  </div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
