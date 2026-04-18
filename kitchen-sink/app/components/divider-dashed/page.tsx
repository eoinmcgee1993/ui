import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function DividerDashedPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="1px dashed border · uses --border-default · 16px vertical margin by default."
          tokens={["--border-default"]}
          dos={["Use between major sections on landing pages", "Pair with generous vertical space"]}
          donts={["Don't use inside cards — cards already carry borders", "Don't mix dashed + solid dividers in the same section"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-divider-dashed"
        title="Dashed divider"
        subtitle="Softer section separator. The dashed line implies structure without asserting it — perfect for breaking up landing-page rhythm."
        meta={[".atlas-divider-dashed", ".atlas-divider-v-dashed"]}
      />
      <Section title="Horizontal">
        <Example
          block
          html={`<div style="font-size:13px;color:var(--text-secondary);max-width:420px">
  <div style="padding-bottom:12px;color:var(--text-primary);font-size:16px;font-weight:600">Principles</div>
  AMOLED black base. Monochromatic surfaces.
  <hr class="atlas-divider-dashed" />
  <div style="padding-bottom:12px;color:var(--text-primary);font-size:16px;font-weight:600">Density</div>
  28px buttons, 4px grid, 13px base text.
  <hr class="atlas-divider-dashed" />
  <div style="padding-bottom:12px;color:var(--text-primary);font-size:16px;font-weight:600">Motion</div>
  Borders over shadows. 120ms transitions.
</div>`}
        />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Solid", html: `<div style="width:200px"><hr class="atlas-divider" /></div>` },
            { label: "Dashed", html: `<div style="width:200px"><hr class="atlas-divider-dashed" /></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
