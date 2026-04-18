import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function RadioPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="13px circle · 1px border · blue fill when selected."
          tokens={["--accent-highlight", "--border-default"]}
          dos={["Use for exclusive options where all choices are visible"]}
          donts={["Don't use radio for 6+ options — use a dropdown"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-radio"
        title="Radio"
        meta={[".atlas-radio"]}
        subtitle="Mutually exclusive option. Blue-filled when selected."
      />
      <Section title="Group">
        <Example
          html={`<div style="display:flex;flex-direction:column;gap:8px;font-size:13px">
  <label style="display:inline-flex;align-items:center;gap:8px"><input type="radio" name="env" class="atlas-radio" checked/> Production</label>
  <label style="display:inline-flex;align-items:center;gap:8px"><input type="radio" name="env" class="atlas-radio"/> Preview</label>
  <label style="display:inline-flex;align-items:center;gap:8px"><input type="radio" name="env" class="atlas-radio"/> Development</label>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
