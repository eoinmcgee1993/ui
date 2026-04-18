import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function SwitchPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="28px × 16px track · 12px thumb · background-color transition only."
          tokens={["--accent-highlight", "--bg-raised", "--border-default"]}
          dos={["Use for instant toggles that apply immediately"]}
          donts={["Don't use for pending form fields — use checkbox"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-switch"
        title="Switch"
        meta={[".atlas-switch", ".is-on"]}
        subtitle="Single boolean toggle with immediate effect. Use is-on class or aria-checked."
      />
      <Section title="States">
        <Variants
          items={[
            { label: "Off", html: `<button class="atlas-switch" role="switch" aria-checked="false"></button>` },
            { label: "On", html: `<button class="atlas-switch is-on" role="switch" aria-checked="true"></button>` },
          ]}
        />
      </Section>
      <Section title="With label">
        <Example
          html={`<label style="display:inline-flex;align-items:center;gap:10px;font-size:13px;cursor:pointer">
  <button class="atlas-switch is-on" role="switch" aria-checked="true"></button>
  <span>Analytics opt-in</span>
</label>`}
        />
      </Section>
    </PageBody>
  );
}
