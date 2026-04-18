import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { SwatchGrid } from "@/components/showcase/swatch";

const backgrounds = [
  { name: "--bg-base", value: "#000000" },
  { name: "--bg-raised", value: "#0f0f0f" },
  { name: "--bg-input", value: "#0a0a0a" },
  { name: "--bg-tab-active", value: "#171717" },
  { name: "--bg-elevated", value: "#0f0f0f" },
  { name: "--bg-overlay", value: "#0f0f0f" },
];
const text = [
  { name: "--text-primary", value: "#ffffff" },
  { name: "--text-secondary", value: "#aaaaaa" },
  { name: "--text-tertiary", value: "#777777" },
  { name: "--text-muted", value: "#585858" },
  { name: "--text-ghost", value: "#333333" },
  { name: "--text-inverse", value: "#000000" },
];
const borders = [
  { name: "--border-subtle", value: "#141414" },
  { name: "--border-default", value: "#1e1e1e" },
  { name: "--border-strong", value: "#3d3d3d" },
  { name: "--border-focus", value: "#0070f3" },
];
const accent = [
  { name: "--accent-primary", value: "#ededed" },
  { name: "--accent-primary-hover", value: "#ffffff" },
  { name: "--accent-secondary", value: "#a1a1a1" },
  { name: "--accent-highlight", value: "#0070f3" },
  { name: "--accent-highlight-hover", value: "#3291ff" },
];
const status = [
  { name: "--status-success", value: "#4d4d4d → green" },
  { name: "--status-warning", value: "#CD9731" },
  { name: "--status-error", value: "#F44747" },
  { name: "--status-info", value: "#6796E6" },
];

export default function ColorsPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Colors are CSS custom properties set on :root. They remap automatically under [data-theme='light']."
          dos={[
            "Use semantic tokens (--bg-raised, --text-primary) not raw hex",
            "Reserve saturated color for status (warning, error, info)",
            "Keep the blue #0070f3 for focus/selection only — never a CTA",
          ]}
          donts={[
            "Don't drift into dark grays — canvas is pure #000",
            "Don't use blue for primary buttons",
          ]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Colors"
        subtitle="The Atlas palette is deliberately small. Grays and whites do the heavy lifting. Saturated color is reserved for status semantics and the single blue highlight."
      />

      <Section title="Backgrounds" desc="Canvas surfaces. Step #000 → #0a → #0f → #171717 for depth without introducing gray drift.">
        <SwatchGrid items={backgrounds} />
      </Section>

      <Section title="Text" desc="Six text tokens cover 99% of copy. Match hierarchy to importance, not to decoration.">
        <SwatchGrid items={text} />
      </Section>

      <Section title="Borders" desc="Atlas is border-defined. 1px #1e1e1e separates sections; focus turns blue.">
        <SwatchGrid items={borders} />
      </Section>

      <Section title="Accent" desc="Near-white is the primary action color. Blue is reserved for focus and selection.">
        <SwatchGrid items={accent} />
      </Section>

      <Section title="Status" desc="Amber for warnings. Red for errors. Blue (different from highlight) for info.">
        <SwatchGrid items={status} />
      </Section>
    </PageBody>
  );
}
