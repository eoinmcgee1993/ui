import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ToastPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="320px wide · 1px border · shadow-md · title + optional desc + close."
          tokens={["--shadow-md", "--z-toast", "--bg-overlay"]}
          dos={["Auto-dismiss after 4s", "Stack from bottom-right by default"]}
          donts={["Don't use toast for critical errors — use a dialog"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-toast"
        title="Toast"
        meta={[".atlas-toast", ".atlas-toast-desc", ".atlas-toast-close"]}
        subtitle="Ephemeral status notification. Non-blocking, auto-dismissing, dismissable."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-toast" style="width:340px;position:relative">
  Deployment succeeded.
  <div class="atlas-toast-desc">main.ts built in 1.2s.</div>
  <button class="atlas-toast-close" aria-label="Dismiss">×</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
