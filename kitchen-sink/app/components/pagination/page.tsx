import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PaginationPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="28×28 squares · 1px border · blue fill on is-active · ellipsis as tertiary text."
          tokens={["--h-button", "--accent-highlight", "--border-default"]}
          dos={["Show prev/next arrows", "Collapse middle pages with ellipsis"]}
          donts={["Don't use for < 20 items — use a single scrollable list"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-pagination"
        title="Pagination"
        meta={[".atlas-pagination", ".atlas-pagination-item", ".atlas-pagination-ellipsis"]}
        subtitle="Numeric paginator with prev/next chevrons and collapsed ellipsis."
      />
      <Section title="Default">
        <Example
          html={`<nav class="atlas-pagination">
  <button class="atlas-pagination-item">‹</button>
  <button class="atlas-pagination-item is-active">1</button>
  <button class="atlas-pagination-item">2</button>
  <button class="atlas-pagination-item">3</button>
  <span class="atlas-pagination-ellipsis">…</span>
  <button class="atlas-pagination-item">9</button>
  <button class="atlas-pagination-item">›</button>
</nav>`}
        />
      </Section>
    </PageBody>
  );
}
