import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function EmptyPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Centered column · 24px icon · 16px title · 13px description · 16px vertical gap."
          tokens={["--text-primary", "--text-secondary", "--text-tertiary"]}
          dos={["Suggest a next action when possible", "Use a neutral Lucide icon, 24px"]}
          donts={["Don't use decorative illustrations — Atlas is terse"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-empty"
        title="Empty state"
        meta={[".atlas-empty", ".atlas-empty-title", ".atlas-empty-desc", ".atlas-empty-icon"]}
        subtitle="Centered column shown when data is absent. Neutral icon, short title, one-line description."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-empty" style="padding:32px;border:1px dashed var(--border-default);border-radius:6px">
  <div class="atlas-empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
  <div class="atlas-empty-title">No results</div>
  <div class="atlas-empty-desc">Try a different query or clear filters.</div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
