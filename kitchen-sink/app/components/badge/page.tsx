import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function BadgePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="10px uppercase · 0.08em tracking · 2–6px padding · 3px radius · border + muted fill."
          tokens={["--text-xxs", "--radius-sm", "--status-success-muted", "--status-warning-muted", "--status-error-muted", "--status-info-muted"]}
          dos={["Keep to 1–2 words max", "Match variant to semantic meaning"]}
          donts={["Don't use badges for counts — use a number in tertiary text"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-badge"
        title="Badge"
        meta={[".atlas-badge", ".atlas-badge-primary", ".atlas-badge-success", ".atlas-badge-warning", ".atlas-badge-error", ".atlas-badge-info"]}
        subtitle="Tiny UPPERCASE label. Status variants map to the status palette."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<span class="atlas-badge">DEFAULT</span>` },
            { label: "Primary", html: `<span class="atlas-badge atlas-badge-primary">PRIMARY</span>` },
            { label: "Success", html: `<span class="atlas-badge atlas-badge-success">OK</span>` },
            { label: "Warning", html: `<span class="atlas-badge atlas-badge-warning">DRAFT</span>` },
            { label: "Error", html: `<span class="atlas-badge atlas-badge-error">FAIL</span>` },
            { label: "Info", html: `<span class="atlas-badge atlas-badge-info">NEW</span>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
