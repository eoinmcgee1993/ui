import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function CommandPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="560–640px wide · 1px border · shadow-lg · 40px input · grouped items."
          tokens={["--shadow-lg", "--z-modal", "--bg-overlay"]}
          dos={["Open on ⌘K / Ctrl+K", "Group by source (pages, actions, files)"]}
          donts={["Don't use for single-action menus — use popover"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-command"
        title="Command palette"
        meta={[".atlas-command", ".atlas-command-input", ".atlas-command-group-label", ".atlas-command-item"]}
        subtitle="Universal cmd-k launcher. Search-first navigation with grouped results and keyboard shortcuts. Try ⌘K now — this page uses it."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-command" style="width:520px">
  <div class="atlas-command-input-wrap">
    <input class="atlas-command-input" placeholder="Type a command or search…" />
    <kbd class="atlas-kbd">ESC</kbd>
  </div>
  <div class="atlas-command-group-label">Actions</div>
  <button class="atlas-command-item" style="background:var(--bg-selected)">New project<span class="atlas-command-item-shortcut"><kbd class="atlas-kbd">⌘N</kbd></span></button>
  <button class="atlas-command-item">Open settings<span class="atlas-command-item-shortcut"><kbd class="atlas-kbd">⌘,</kbd></span></button>
  <div class="atlas-command-group-label">Navigate</div>
  <button class="atlas-command-item">Overview</button>
  <button class="atlas-command-item">Deployments</button>
  <button class="atlas-command-item">Logs</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
