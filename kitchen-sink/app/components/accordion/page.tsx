import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function AccordionPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="32px trigger · chevron rotates on is-open · content with 12px padding."
          tokens={["--h-panel-header", "--border-subtle"]}
          dos={["Use for FAQ-style collapsed content", "Allow multiple open or single-open via is-open"]}
          donts={["Don't nest accordions more than 2 levels"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-accordion"
        title="Accordion"
        meta={[".atlas-accordion", ".atlas-accordion-item", ".atlas-accordion-trigger", ".atlas-accordion-chev", ".atlas-accordion-content", ".is-open"]}
        subtitle="Collapsible section list. Chevron rotates on open."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-accordion" style="width:480px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden">
  <div class="atlas-accordion-item is-open">
    <button class="atlas-accordion-trigger" style="display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;padding:0 12px;background:transparent;border:0;color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer">
      <span>Environment variables</span>
      <span class="atlas-accordion-chev" style="transform:rotate(90deg);transition:transform 120ms">›</span>
    </button>
    <div class="atlas-accordion-content" style="padding:12px;font-size:13px;color:var(--text-secondary);border-top:1px solid var(--border-subtle)">3 variables configured for production.</div>
  </div>
  <div class="atlas-accordion-item" style="border-top:1px solid var(--border-subtle)">
    <button class="atlas-accordion-trigger" style="display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;padding:0 12px;background:transparent;border:0;color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer">
      <span>Build settings</span>
      <span class="atlas-accordion-chev">›</span>
    </button>
  </div>
  <div class="atlas-accordion-item" style="border-top:1px solid var(--border-subtle)">
    <button class="atlas-accordion-trigger" style="display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;padding:0 12px;background:transparent;border:0;color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer">
      <span>Domains</span>
      <span class="atlas-accordion-chev">›</span>
    </button>
  </div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
