import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function LinkPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Blue text, underline on hover, matches body size and weight."
          tokens={["--accent-highlight", "--accent-highlight-hover"]}
          dos={["Use for navigation and cross-references", "Underline only on hover"]}
          donts={["Don't use blue for actions — use .atlas-btn"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-link"
        title="Link"
        meta={[".atlas-link"]}
        subtitle="Blue hyperlink. Navigation only — never an action."
      />
      <Section title="Default">
        <Example html={`<a href="#" class="atlas-link">Read the installation guide</a>`} />
      </Section>
      <Section title="In prose">
        <Example
          html={`<p style="font-size:13px;color:var(--text-secondary);line-height:1.55;max-width:56ch;margin:0">
  Atlas is framework-agnostic. See the <a href="#" class="atlas-link">component reference</a> for every class, or jump straight to the <a href="#" class="atlas-link">kitchen sink</a>.
</p>`}
        />
      </Section>
    </PageBody>
  );
}
