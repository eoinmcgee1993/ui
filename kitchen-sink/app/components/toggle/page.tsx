import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TogglePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px button · border + fill flip on is-on · compact icon button size."
          tokens={["--bg-hover", "--bg-selected", "--border-default"]}
          dos={["Use for a single binary state with an icon", "Pair with tooltip for affordance"]}
          donts={["Don't use for multi-state — use segmented"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-toggle"
        title="Toggle"
        meta={[".atlas-toggle", ".is-on"]}
        subtitle="Single-button toggle. Different from switch: typically holds an icon."
      />
      <Section title="States">
        <Example
          html={`<button class="atlas-toggle" aria-pressed="false">Off</button>
<button class="atlas-toggle is-on" aria-pressed="true">On</button>`}
        />
      </Section>
    </PageBody>
  );
}
