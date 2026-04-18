import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function BreadcrumbPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="12px text · tertiary color · forward slash separators · current is stronger weight."
          tokens={["--text-tertiary", "--text-primary"]}
          dos={["Keep to 2–4 levels", "Make all but the current item clickable"]}
          donts={["Don't use ›, →, or emoji separators — use a plain /"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-breadcrumb"
        title="Breadcrumb"
        meta={[".atlas-breadcrumb", ".atlas-breadcrumb-sep", ".atlas-breadcrumb-current"]}
        subtitle="Slash-separated path. 12px, tertiary links, primary current."
      />
      <Section title="Default">
        <Example
          html={`<nav class="atlas-breadcrumb">
  <a href="#">Projects</a>
  <span class="atlas-breadcrumb-sep">/</span>
  <a href="#">atlas</a>
  <span class="atlas-breadcrumb-sep">/</span>
  <span class="atlas-breadcrumb-current">Overview</span>
</nav>`}
        />
      </Section>
    </PageBody>
  );
}
