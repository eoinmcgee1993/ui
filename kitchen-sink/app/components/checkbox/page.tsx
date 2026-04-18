import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function CheckboxPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="13px box · 1px border · blue fill when checked via accent-color."
          tokens={["--accent-highlight", "--border-default"]}
          dos={["Pair with a label via <label> wrapping", "Use for independent boolean options"]}
          donts={["Don't use checkbox for a single toggle — use switch instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-checkbox"
        title="Checkbox"
        subtitle="Blue-filled when checked, via accent-color. Always paired with a label."
        meta={[".atlas-checkbox"]}
      />
      <Section title="Default">
        <Example html={`<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--text-primary);cursor:pointer"><input type="checkbox" class="atlas-checkbox" checked/> Enable notifications</label>`} />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Unchecked", html: `<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px"><input type="checkbox" class="atlas-checkbox"/> Option</label>` },
            { label: "Checked", html: `<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px"><input type="checkbox" class="atlas-checkbox" checked/> Option</label>` },
            { label: "Disabled", html: `<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--text-tertiary)"><input type="checkbox" class="atlas-checkbox" disabled/> Disabled</label>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
