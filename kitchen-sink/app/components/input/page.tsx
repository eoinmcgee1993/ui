import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function InputPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px default height · 20px sm · 4px radius · #0a0a0a fill · blue focus ring."
          tokens={["--bg-input", "--border-default", "--border-focus", "--h-input", "--h-input-sm"]}
          dos={["Pair with a label above the input", "Use -sm inside dense tables or inline filters"]}
          donts={["Don't inflate height past 28px", "Don't remove the focus ring"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-input"
        title="Input"
        subtitle="24px default, 20px small. Flat fill on #0a0a0a, 1px border, blue focus."
        meta={[".atlas-input", ".atlas-input-sm"]}
      />
      <Section title="Default">
        <Example html={`<input class="atlas-input" placeholder="Search projects…" />`} />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<input class="atlas-input" placeholder="Your name" />` },
            { label: "Small", html: `<input class="atlas-input atlas-input-sm" placeholder="Filter" />` },
            { label: "Filled", html: `<input class="atlas-input" value="atlas-btn-primary" readonly />` },
            { label: "Disabled", html: `<input class="atlas-input" placeholder="Disabled" disabled />` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
