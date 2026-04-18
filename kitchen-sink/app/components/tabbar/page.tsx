import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TabbarPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="34px height · 12px text · 1px bottom border · #171717 active tab fill."
          tokens={["--h-tabbar", "--bg-tab-active", "--bg-tab-inactive", "--border-default"]}
          dos={["Use .is-active on the currently selected tab", "Keep tab labels to 1–2 words"]}
          donts={["Don't use tabs for < 2 items", "Don't exceed ~6 tabs — switch to a sidebar"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-tabbar"
        title="Tabs"
        meta={[".atlas-tabbar", ".atlas-tab", ".is-active"]}
        subtitle="34px horizontal tab strip. Borderless inactive, filled active, blue line under the active tab."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-tabbar">
  <button class="atlas-tab is-active">Overview</button>
  <button class="atlas-tab">Metrics</button>
  <button class="atlas-tab">Logs</button>
  <button class="atlas-tab">Settings</button>
</div>`}
        />
      </Section>
      <Section title="With count">
        <Example
          block
          html={`<div class="atlas-tabbar">
  <button class="atlas-tab is-active">Pull requests <span style="margin-left:6px;color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">12</span></button>
  <button class="atlas-tab">Issues <span style="margin-left:6px;color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">3</span></button>
  <button class="atlas-tab">Discussions</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
