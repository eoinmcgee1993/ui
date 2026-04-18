import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ButtonPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="28px height · 4px radius · 1px border · 12px horizontal padding · 12px text · 500 weight."
          tokens={["--accent-primary", "--accent-primary-hover", "--h-button", "--radius-md", "--text-sm"]}
          dos={["Near-white primary for CTAs", "Ghost for tertiary actions", "Destructive only for delete/remove"]}
          donts={["Never use blue for CTAs — blue is reserved for focus/selection", "Don't stack more than one primary per view"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-btn"
        title="Button"
        subtitle="Compact 28px buttons. Near-white primary, subtle secondary, minimal ghost, red destructive. Never use blue for CTAs."
        meta={[".atlas-btn", ".atlas-btn-primary", ".atlas-btn-secondary", ".atlas-btn-ghost", ".atlas-btn-destructive", ".atlas-btn-icon", ".atlas-btn-sm", ".atlas-btn-lg"]}
      />

      <Section title="Primary">
        <Example html={`<button class="atlas-btn atlas-btn-primary">Ship it</button>`} />
      </Section>

      <Section title="All variants">
        <Variants
          items={[
            { label: "Primary", html: `<button class="atlas-btn atlas-btn-primary">Save</button>` },
            { label: "Secondary", html: `<button class="atlas-btn atlas-btn-secondary">Cancel</button>` },
            { label: "Ghost", html: `<button class="atlas-btn atlas-btn-ghost">Dismiss</button>` },
            { label: "Destructive", html: `<button class="atlas-btn atlas-btn-destructive">Delete</button>` },
            { label: "Icon", html: `<button class="atlas-btn atlas-btn-icon" aria-label="Settings"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button>` },
            { label: "Small", html: `<button class="atlas-btn atlas-btn-primary atlas-btn-sm">Small</button>` },
            { label: "Large", html: `<button class="atlas-btn atlas-btn-primary atlas-btn-lg">Large</button>` },
          ]}
        />
      </Section>

      <Section title="With icon">
        <Example
          html={`<button class="atlas-btn atlas-btn-primary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg> New project</button>`}
        />
      </Section>
    </PageBody>
  );
}
