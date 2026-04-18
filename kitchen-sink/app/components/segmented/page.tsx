import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function SegmentedPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Connected button group · 24px height · 1px border · is-active fills one segment."
          tokens={["--bg-raised", "--border-default", "--h-input"]}
          dos={["Use for 2–4 exclusive mode choices", "Keep labels to one word"]}
          donts={["Don't use for 5+ options — switch to a dropdown"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-segmented"
        title="Segmented"
        meta={[".atlas-segmented", ".atlas-segmented-item", ".is-active"]}
        subtitle="Connected exclusive option group. Perfect for day/week/month or grid/list toggles."
      />
      <Section title="Default">
        <Example
          html={`<div class="atlas-segmented">
  <button class="atlas-segmented-item is-active">Day</button>
  <button class="atlas-segmented-item">Week</button>
  <button class="atlas-segmented-item">Month</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
