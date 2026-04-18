import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PillPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Fully-rounded · 12px text · 2–8px padding · sentence case (unlike badges)."
          tokens={["--radius-full", "--text-sm"]}
          dos={["Use for filters, tags, regions, and categories"]}
          donts={["Don't UPPERCASE — use sentence case; that's what separates pills from badges"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-pill"
        title="Pill"
        meta={[".atlas-pill", ".atlas-pill-active"]}
        subtitle="Fully-rounded chip for filters and tags. Sentence case — not UPPERCASE like badges."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<span class="atlas-pill">North America</span>` },
            { label: "Active", html: `<span class="atlas-pill atlas-pill-active">Production</span>` },
          ]}
        />
      </Section>
      <Section title="Filter row">
        <Example
          html={`<div style="display:flex;gap:6px;flex-wrap:wrap">
  <span class="atlas-pill atlas-pill-active">All</span>
  <span class="atlas-pill">Active</span>
  <span class="atlas-pill">Archived</span>
  <span class="atlas-pill">Draft</span>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
