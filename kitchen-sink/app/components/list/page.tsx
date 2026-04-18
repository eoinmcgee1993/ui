import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ListPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px item height · 12px text · blue left-border on is-selected · background-color on hover."
          tokens={["--h-row", "--bg-hover", "--bg-selected", "--accent-highlight"]}
          dos={["Pair with a dot or icon for visual scanning", "Keep items to one line"]}
          donts={["Don't pad list items past 32px — use a card instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-list"
        title="List"
        meta={[".atlas-list", ".atlas-list-item", ".is-selected"]}
        subtitle="Compact vertical list. Uses selected-state border, hover fill."
      />
      <Section title="Default">
        <Example
          block
          html={`<ul class="atlas-list" style="list-style:none;padding:0;margin:0;width:280px;border:1px solid var(--border-default);border-radius:6px">
  <li class="atlas-list-item is-selected">main.ts</li>
  <li class="atlas-list-item">index.tsx</li>
  <li class="atlas-list-item">layout.tsx</li>
  <li class="atlas-list-item">README.md</li>
  <li class="atlas-list-item">package.json</li>
</ul>`}
        />
      </Section>
      <Section title="With icons and meta">
        <Example
          block
          html={`<ul class="atlas-list" style="list-style:none;padding:0;margin:0;width:320px;border:1px solid var(--border-default);border-radius:6px">
  <li class="atlas-list-item" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px"><span class="atlas-dot atlas-dot-success"></span>atlas-core</span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">2m ago</span></li>
  <li class="atlas-list-item" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px"><span class="atlas-dot atlas-dot-warning"></span>atlas-edge</span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">5m ago</span></li>
  <li class="atlas-list-item" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px"><span class="atlas-dot atlas-dot-error"></span>atlas-api</span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">12m ago</span></li>
</ul>`}
        />
      </Section>
    </PageBody>
  );
}
