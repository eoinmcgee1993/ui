import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function KbdPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="18–20px height · JetBrains Mono · 3px radius · subtle border."
          tokens={["--font-mono", "--border-default", "--bg-input"]}
          dos={["Use ⌘ ⌃ ⇧ ⌥ symbols for Mac shortcuts", "Pair with action labels"]}
          donts={["Don't use for anything other than keys"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-kbd"
        title="Kbd"
        meta={[".atlas-kbd"]}
        subtitle="Keycap element. JetBrains Mono, compact. Always wraps a single key or modifier combo."
      />
      <Section title="Default">
        <Example html={`<kbd class="atlas-kbd">⌘K</kbd> <kbd class="atlas-kbd">⇧</kbd> <kbd class="atlas-kbd">A</kbd> <kbd class="atlas-kbd">Esc</kbd>`} />
      </Section>
      <Section title="In a command row">
        <Example
          html={`<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;border:1px solid var(--border-default);border-radius:4px;background:var(--bg-raised);font-size:13px;width:320px">
  <span>Open command palette</span>
  <span><kbd class="atlas-kbd">⌘K</kbd></span>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
