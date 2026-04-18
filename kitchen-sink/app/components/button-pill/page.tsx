import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ButtonPillPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Same 28px height as .atlas-btn · 9999px radius · brightness hover · scale(0.985) press."
          tokens={["--accent-primary", "--h-button", "--text-sm"]}
          dos={[
            "Use for landing pages, hero CTAs, and marketing surfaces",
            "Pair with .atlas-display for hero type",
            "Keep the square .atlas-btn for dense in-app UIs",
          ]}
          donts={[
            "Don't mix square and pill buttons in the same cluster",
            "Don't use blue variant — pills stay monochromatic",
          ]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-btn-pill"
        title="Pill button"
        subtitle="Fully rounded monochromatic button variant. For landing pages, hero CTAs, and outward-facing surfaces where the squared .atlas-btn feels too utilitarian."
        meta={[".atlas-btn-pill", ".atlas-btn-pill-primary", ".atlas-btn-pill-secondary", ".atlas-btn-pill-ghost", ".atlas-btn-pill-sm", ".atlas-btn-pill-lg"]}
      />

      <Section title="Primary">
        <Example html={`<button class="atlas-btn-pill atlas-btn-pill-primary">Get started</button>`} />
      </Section>

      <Section title="Variants">
        <Variants
          items={[
            { label: "Primary", html: `<button class="atlas-btn-pill atlas-btn-pill-primary">Ship it</button>` },
            { label: "Secondary", html: `<button class="atlas-btn-pill atlas-btn-pill-secondary">Cancel</button>` },
            { label: "Ghost", html: `<button class="atlas-btn-pill atlas-btn-pill-ghost">Learn more</button>` },
            { label: "Small", html: `<button class="atlas-btn-pill atlas-btn-pill-primary atlas-btn-pill-sm">Small</button>` },
            { label: "Large", html: `<button class="atlas-btn-pill atlas-btn-pill-primary atlas-btn-pill-lg">Large</button>` },
            { label: "With icon", html: `<button class="atlas-btn-pill atlas-btn-pill-primary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg> Continue</button>` },
          ]}
        />
      </Section>

      <Section title="Square vs pill — same button, different voice" desc="Use the squared variant inside dense app shells. Use pill on landing / marketing surfaces.">
        <Example
          html={`<div style="display:flex;gap:12px;align-items:center">
  <button class="atlas-btn atlas-btn-primary">.atlas-btn</button>
  <button class="atlas-btn-pill atlas-btn-pill-primary">.atlas-btn-pill</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
