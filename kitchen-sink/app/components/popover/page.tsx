import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PopoverPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="160–220px wide · 1px border · shadow-md · 4px padding · menu items 24px tall."
          tokens={["--shadow-md", "--bg-overlay", "--border-default", "--z-dropdown"]}
          dos={["Use for dropdown menus and context actions", "Include .atlas-menu-separator between groups"]}
          donts={["Don't nest popovers more than one level"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-popover"
        title="Popover"
        meta={[".atlas-popover", ".atlas-menu-item", ".atlas-menu-separator"]}
        subtitle="Floating menu with shadow. Use for dropdowns, context menus, and action lists."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="atlas-popover" style="width:200px;position:relative">
  <button class="atlas-menu-item">Rename</button>
  <button class="atlas-menu-item">Duplicate</button>
  <button class="atlas-menu-item">Move to…</button>
  <div class="atlas-menu-separator"></div>
  <button class="atlas-menu-item" style="color:var(--status-error)">Delete</button>
</div>`}
        />
      </Section>
      <Section title="With shortcuts">
        <Example
          block
          html={`<div class="atlas-popover" style="width:240px;position:relative">
  <button class="atlas-menu-item" style="display:flex;justify-content:space-between;align-items:center"><span>New file</span><kbd class="atlas-kbd">⌘N</kbd></button>
  <button class="atlas-menu-item" style="display:flex;justify-content:space-between;align-items:center"><span>Open</span><kbd class="atlas-kbd">⌘O</kbd></button>
  <button class="atlas-menu-item" style="display:flex;justify-content:space-between;align-items:center"><span>Save</span><kbd class="atlas-kbd">⌘S</kbd></button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
