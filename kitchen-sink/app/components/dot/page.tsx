import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function DotPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="6px circle · solid fill keyed to status · used inline with labels."
          tokens={["--accent-primary", "--status-success", "--status-warning", "--status-error", "--status-info"]}
          dos={["Pair with a label — a dot alone is ambiguous", "Place to the left of the title, 8px gap"]}
          donts={["Don't animate dots", "Don't use raw colors — stick to the five variants"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-dot"
        title="Dot"
        meta={[".atlas-dot", ".atlas-dot-primary", ".atlas-dot-success", ".atlas-dot-warning", ".atlas-dot-error", ".atlas-dot-info"]}
        subtitle="6px status indicator. Always paired with a label — alone it's meaningless."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Primary", html: `<span style="display:inline-flex;align-items:center;gap:6px;font-size:13px"><span class="atlas-dot atlas-dot-primary"></span>Primary</span>` },
            { label: "Success", html: `<span style="display:inline-flex;align-items:center;gap:6px;font-size:13px"><span class="atlas-dot atlas-dot-success"></span>Success</span>` },
            { label: "Warning", html: `<span style="display:inline-flex;align-items:center;gap:6px;font-size:13px"><span class="atlas-dot atlas-dot-warning"></span>Warning</span>` },
            { label: "Error", html: `<span style="display:inline-flex;align-items:center;gap:6px;font-size:13px"><span class="atlas-dot atlas-dot-error"></span>Error</span>` },
            { label: "Info", html: `<span style="display:inline-flex;align-items:center;gap:6px;font-size:13px"><span class="atlas-dot atlas-dot-info"></span>Info</span>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
